import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import MenuIcon from '@mui/icons-material/Menu'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import GroupIcon from '@mui/icons-material/Group'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

export function DrawerMenu() {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[0, 1, 2].map((index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '25px',
                    alignItems: 'center',
                  }}
                >
                  {index % 3 === 0 ? (
                    <ShoppingCartIcon />
                  ) : index % 3 === 1 ? (
                    <GroupIcon />
                  ) : (
                    <ShoppingBasketIcon />
                  )}
                  {index % 3 === 0 ? (
                    <a
                      href="/listing-purchase-users"
                      style={{
                        textDecoration: 'none',
                        color: 'var(--zinc-950)',
                      }}
                    >
                      Cart
                    </a>
                  ) : index % 3 === 1 ? (
                    <a
                      href="/register"
                      style={{
                        textDecoration: 'none',
                        color: 'var(--zinc-950)',
                      }}
                    >
                      Register
                    </a>
                  ) : (
                    <a
                      href="/product-list"
                      style={{
                        textDecoration: 'none',
                        color: 'var(--zinc-950)',
                      }}
                    >
                      Products
                    </a>
                  )}
                </Box>
              </ListItemIcon>
              <ListItemText primary={''} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <div>
      <MenuIcon
        onClick={toggleDrawer(true)}
        sx={{ marginTop: '5px', marginLeft: '5px' }}
      >
        Open drawer
      </MenuIcon>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  )
}
