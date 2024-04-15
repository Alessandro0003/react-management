import { Box, Typography } from '@mui/material'
import { Header } from '../components/Header'

export function HomePage() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          minHeight: '100vh',
        }}
      >
        <Typography
          variant="h1"
          fontWeight="bold"
          sx={({ palette }) => ({
            color: palette.primary.main,
          })}
        >
          AT Software Solutions
        </Typography>
      </Box>
    </div>
  )
}
