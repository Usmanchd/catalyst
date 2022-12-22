import { useState } from 'react';
import { Icon } from '@iconify/react';
import { ListItem, ListItemText, IconButton, Card } from '@mui/material';
import { useProducts } from '../context/useProducts';

function CartItem({ cart }) {
  const { handleAddToCart } = useProducts();
  const [trashIconHovered, setHovered] = useState(false);

  return (
    <Card style={{ margin: '5px 0' }}>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Icon
              icon={`ri-delete-bin-${trashIconHovered ? 'fill' : 'line'}`}
              style={{ fontSize: '30px' }}
              onClick={() => handleAddToCart(cart, true)}
            />
          </IconButton>
        }
      >
        <ListItemText
          primary={<img src={cart.url} alt="" width="100px" />}
          secondary={(5.99).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        />
      </ListItem>
    </Card>
  );
}

export default CartItem;
