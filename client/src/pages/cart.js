import { useMemo, useState } from 'react';
import { List, Alert, Button } from '@mui/material';
import CartItem from '../components/CartItem';
import { useProducts } from '../context/useProducts';

function Cart() {
  const { cartItems, handlePlaceOrder } = useProducts();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setresult] = useState('');

  const total = useMemo(
    () =>
      cartItems.reduce((total, cart) => {
        cart.price = 5.99; // hardcode
        total += cart.price;
        return total;
      }, 0),
    [cartItems]
  );

  const onPlaceOrder = async () => {
    setIsLoading(true);
    try {
      const res = await handlePlaceOrder();
      setresult(res);
      console.log('order place');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <List>
        {cartItems.map((cart) => (
          <CartItem cart={cart} />
        ))}
      </List>
      {!!cartItems.length && (
        <h4>
          Total:{' '}
          {total.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </h4>
      )}
      {!!result && <Alert severity="success">{result}</Alert>}
      {!cartItems.length && !result && (
        <Alert severity="warning">
          Please add products to cart to place order
        </Alert>
      )}
      {!!cartItems.length && (
        <Button
          variant="contained"
          size="large"
          onClick={onPlaceOrder}
          disabled={isLoading}
        >
          {isLoading ? 'loading...' : 'Place Order'}
        </Button>
      )}
    </div>
  );
}

export default Cart;
