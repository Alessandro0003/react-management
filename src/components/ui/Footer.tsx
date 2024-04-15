import { Box } from '@mui/material'
import { DrawerMenu } from './Drawer'

export function Footer() {
  return (
    <Box
      sx={{
        width: '100',
        height: '35px',
        backgroundColor: '#3b82f6',
      }}
    >
      <DrawerMenu />
    </Box>
  )
}
