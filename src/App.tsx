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

        <Grid container spacing={3} sx={{ mb: 6 }}>
          <Grid size={{ xs: 12, lg: 5 }}>
            <Card sx={{ borderRadius: 4, boxShadow: 4, height: '100%' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  Dante's profile
                </Typography>
                <Typography sx={{ mb: 2, color: 'text.secondary' }}>
                  Everything you need to know about this wonderful companion.
                </Typography>
                <Box component="ul" sx={{ pl: 3, m: 0, color: 'text.primary' }}>
                  <Typography component="li" sx={{ mb: 1 }}>
                    Neutered male, Heinz 57 mix
                  </Typography>
                  <Typography component="li" sx={{ mb: 1 }}>
                    Excellent with dogs, kids, and dog-savvy cats
                  </Typography>
                  <Typography component="li" sx={{ mb: 1 }}>
                    Crate trained and house trained
                  </Typography>
                  <Typography component="li" sx={{ mb: 1 }}>
                    Loves to run and thrives in public spaces
                  </Typography>
                  <Typography component="li">
                    Enjoys tug games and having something in his mouth
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, lg: 7 }}>
            <Grid container spacing={3}>
              {dogImages.map((filename) => (
                <Grid key={filename} size={{ xs: 12, sm: 6 }}>
                  <Card sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: 4, height: '100%' }}>
                    <CardActionArea onClick={() => setSelectedPhoto(filename)}>
                      <CardMedia
                        component="img"
                        image={`/${filename}`}
                        alt={`Dog photo ${filename}`}
                        sx={{ width: '100%', height: 260, objectFit: 'contain', backgroundColor: '#f7f8fb' }}
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
          </Grid>
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
