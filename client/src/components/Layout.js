import { Link, Outlet } from 'react-router-dom';
import { Box, AppBar, Toolbar, IconButton, Container } from '@mui/material';
import { Icon } from '@iconify/react';
import { useProducts } from '../context/useProducts';

function Layout() {
  const { cartItems } = useProducts();
  return (
    <div>
      <Box sx={{ flexGrow: 1, marginBottom: '30px' }}>
        <AppBar position="static">
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link to="/">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                Catalyst Challenge
              </IconButton>
            </Link>
            <Link to="/cart">
              <Icon
                icon={`ri-shopping-cart-${cartItems.length ? 'fill' : 'line'}`}
                style={{ fontSize: '30px' }}
              />
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default Layout;
