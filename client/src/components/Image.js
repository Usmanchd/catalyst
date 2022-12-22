import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';
import React, { useMemo } from 'react';
import { useProducts } from '../context/useProducts';

function Image({ image, hovered }) {
  const { handleToggleFavorite, handleAddToCart, cartItems } = useProducts();

  const isProductInCart = useMemo(
    () => cartItems.some((cart) => cart.id === image.id),
    [cartItems, image.id]
  );
  console.log(cartItems);
  return (
    <>
      <div style={{ position: 'absolute' }}>
        <IconButton
          style={{
            display: hovered || image.isFavorite ? 'inline-block' : 'none',
          }}
          onClick={() => handleToggleFavorite(image.id)}
        >
          <Icon
            icon={`ri-heart-${image.isFavorite ? 'fill' : 'line'}`}
            style={{ fontSize: '30px' }}
          />
        </IconButton>
        <IconButton
          style={{
            display: hovered || isProductInCart ? 'inline-block' : 'none',
          }}
          onClick={() => handleAddToCart(image, isProductInCart)}
        >
          <Icon
            icon={
              isProductInCart ? 'ri-shopping-cart-fill' : 'ri-add-circle-line'
            }
            style={{ fontSize: '30px' }}
          />
        </IconButton>
      </div>
      <img src={image.url} alt="" width="100%" />
    </>
  );
}

Image.prototype = {
  image: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }),
  hovered: PropTypes.bool.isRequired,
};

export default Image;
