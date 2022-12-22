import Product from '../components/Product';
import { useProducts } from '../context/useProducts';

function Products() {
  const { products } = useProducts();
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '10px',
      }}
    >
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
}

export default Products;
