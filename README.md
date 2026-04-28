# Dogs

Vite + React adoption showcase page for Dante.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

The app uses local static photos from `images/`, served by Vite as public assets.

## Run Permanently On Linux

This repo follows the same deployment pattern as the MLB The Show project: a systemd service runs the built Vite preview server, and a self-hosted GitHub Actions runner on the Linux server deploys new commits from `main`.

On the Linux server:

```bash
git clone https://github.com/bwenzinger/dogs.git
cd dogs
bash scripts/install-systemd-service.sh
```

The installer will:

- create `.env` from `.env.example` if it is missing
- run `npm ci`
- build the frontend with `npm run build`
- install `/etc/systemd/system/dogs.service`
- enable and start the service

By default the service listens on:

```text
0.0.0.0:4173
```

Edit `.env` on the server if you need a different host or port.

Useful service commands:

```bash
sudo systemctl status dogs
sudo journalctl -u dogs -f
sudo systemctl restart dogs
curl http://127.0.0.1:4173
```

## Deploy On Push

This repo includes a GitHub Actions workflow for a self-hosted Linux runner:

```text
.github/workflows/deploy-home-server.yml
```

On GitHub, go to:

```text
Settings -> Actions -> Runners -> New self-hosted runner
```

Choose Linux and follow GitHub's install commands on the server. Run the runner as the same Linux user that owns the `dogs` clone if possible.

The workflow expects the live clone to be at:

```bash
$HOME/dogs
```

If the clone lives somewhere else, add this GitHub repository variable:

```text
APP_DIR=/path/to/dogs
```

If the service name is different from `dogs`, add:

```text
SERVICE_NAME=your-service-name
```

The deploy job runs:

```bash
bash scripts/deploy-from-git.sh
```

That script refuses to deploy over local uncommitted changes, fetches `origin/main`, fast-forwards the live clone, runs `npm ci`, runs `npm run build`, then restarts the systemd service.

If the GitHub runner user needs passwordless permission to restart only this service, add a narrow sudoers rule on the server:

```bash
whoami
sudo visudo -f /etc/sudoers.d/dogs-deploy
```

Use the Linux username from `whoami`:

```text
YOUR_USER ALL=NOPASSWD: /bin/systemctl restart dogs
```

Then test the deploy script manually:

```bash
bash scripts/deploy-from-git.sh
```
