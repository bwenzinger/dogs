#!/usr/bin/env bash
set -Eeuo pipefail

cd -- "$(dirname -- "${BASH_SOURCE[0]}")"

required_node_major="${REQUIRED_NODE_MAJOR:-20}"

if [[ -f .env ]]; then
  set -a
  # shellcheck disable=SC1091
  source .env
  set +a
fi

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is not installed or is not on PATH. Install Node ${required_node_major}+ first." >&2
  exit 1
fi

node_major="$(node -p "Number.parseInt(process.versions.node.split('.')[0], 10)" 2>/dev/null || echo 0)"

if (( node_major < required_node_major )); then
  echo "Node ${required_node_major}+ is required, but PATH resolves node to $(node --version)." >&2
  echo "Install Node ${required_node_major}+ and make sure the service PATH points at it." >&2
  exit 1
fi

if [[ ! -x node_modules/.bin/vite ]]; then
  echo "Missing node_modules/.bin/vite. Run npm ci with Node ${required_node_major}+." >&2
  exit 1
fi

if [[ ! -f dist/index.html ]]; then
  echo "Missing dist/index.html. Run npm run build before starting the service." >&2
  exit 1
fi

host="${DOGS_PREVIEW_HOST:-0.0.0.0}"
port="${DOGS_PREVIEW_PORT:-4173}"

exec ./node_modules/.bin/vite preview --host "$host" --port "$port"
