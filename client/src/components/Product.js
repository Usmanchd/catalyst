import { useState } from 'react';
import { Card } from '@mui/material';
import Image from './Image';

function Product({ product }) {
  const [hovered, setHovered] = useState(false);
  const toggleHovered = (value) => {
    console.log('Hovered:', value);
    setHovered(value);
  };
  return (
    <Card
      style={{ textAlign: 'center', position: 'relative' }}
      onMouseEnter={() => toggleHovered(true)}
      onMouseLeave={() => toggleHovered(false)}
    >
      <Image image={product.image} hovered={hovered} />
      <h3>{product.name}</h3>
      <h5>${product.price}</h5>
      <p>{product.details}</p>
    </Card>
  );
}

export default Product;
