import { useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  Stack,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/Grid'

const dogImages = [
  '067cb467-cfa2-4baa-aaed-6323e85c9343.jpg',
  '0d86e034-9f5f-4892-9231-2366b8e412ce.png',
  '0fc0f18b-42d1-4e14-8f27-f3dc19db623d.jpg',
  '6c02e252-03a6-49ee-b7d2-7b28cc0c2371.png',
  'b83806fb-3e54-4e23-a63e-1443498f01ab.jpg',
]

const mailtoLink =
  'mailto:test@gmail.com?subject=Adopt%20a%20Dog&body=Hello%2C%0A%0AI%27m%20interested%20in adopting and would like more details about your dog.%0A%0AThanks!'

function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

  return (
    <Box sx={{ bgcolor: '#f7f8fb', minHeight: '100vh', pb: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ pt: 10, pb: 4, textAlign: 'center' }}>
          <Typography
            variant="overline"
            sx={{ letterSpacing: 1.8, color: 'primary.main', fontWeight: 700 }}
          >
            adopt today
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            sx={{ mt: 2, fontWeight: 700, color: '#111827' }}
          >
            Meet Dante - your next best friend.
          </Typography>
          <Typography sx={{ mt: 2, maxWidth: 720, mx: 'auto', color: 'text.secondary' }}>
            Dante is a neutered Heinz 57 mix with a joyful spirit and a gentle heart.
            He excels in public settings, enjoys playtime with tug toys, and is ready
            for a loving home with people, dogs, and dog-savvy cats.
          </Typography>
        </Box>

        <Box
          component="section"
          sx={{
            mb: 5,
            p: { xs: 3, md: 4 },
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 3,
            bgcolor: 'background.paper',
          }}
        >
          <Stack spacing={3}>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Dante's profile
              </Typography>
              <Typography sx={{ mt: 1, maxWidth: 760, color: 'text.secondary' }}>
                A sweet, social companion who is comfortable in public settings,
                enjoys running and tug games, and is ready for a home that wants an
                eager best friend.
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gap: 2,
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              }}
            >
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  At home
                </Typography>
                <Typography sx={{ mt: 0.75, color: 'text.secondary' }}>
                  Dante is a neutered Heinz 57 mix who is already house trained
                  and crate trained.
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  With family
                </Typography>
                <Typography sx={{ mt: 0.75, color: 'text.secondary' }}>
                  He has done well with dogs, kids, and dog-savvy cats.
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  His favorite things
                </Typography>
                <Typography sx={{ mt: 0.75, color: 'text.secondary' }}>
                  He loves to run, play tug, and carry something in his mouth.
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {dogImages.map((filename, index) => (
            <Grid key={filename} size={{ xs: 12, sm: 6, md: index === 0 ? 8 : 4 }}>
              <Card sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: 4, height: '100%' }}>
                <CardActionArea onClick={() => setSelectedPhoto(filename)}>
                  <CardMedia
                    component="img"
                    image={`/${filename}`}
                    alt={`Dog photo ${filename}`}
                    sx={{
                      width: '100%',
                      height: { xs: 260, md: index === 0 ? 420 : 260 },
                      objectFit: 'cover',
                      backgroundColor: '#f7f8fb',
                    }}
                  />
                  <CardContent sx={{ bgcolor: 'background.paper' }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      Tap to enlarge
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Stack
          spacing={3}
          alignItems="center"
          sx={{
            p: 5,
            borderRadius: 4,
            bgcolor: '#fff',
            boxShadow: '0px 32px 80px rgba(15, 23, 42, 0.12)',
            textAlign: 'center',
          }}
        >
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Ready to learn more?
            </Typography>
          </Box>
          <Button
            component="a"
            href={mailtoLink}
            variant="contained"
            size="large"
            sx={{ width: 'fit-content', px: 4, py: 1.75 }}
          >
            Contact Us
          </Button>
        </Stack>
      </Container>

      <Dialog open={Boolean(selectedPhoto)} onClose={() => setSelectedPhoto(null)} maxWidth="xl" fullWidth>
        <DialogContent sx={{ bgcolor: '#111827', p: 0, display: 'flex', justifyContent: 'center' }}>
          {selectedPhoto ? (
            <Box
              component="img"
              src={`/${selectedPhoto}`}
              alt={`Dog photo ${selectedPhoto}`}
              sx={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', backgroundColor: '#111827' }}
            />
          ) : null}
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', bgcolor: '#f7f8fb', p: 2 }}>
          <Button onClick={() => setSelectedPhoto(null)} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default App
