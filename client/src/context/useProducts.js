import { useEffect, useState, createContext, useContext } from 'react';
import { getProducts } from '../services/api';

export const ProductsContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCart] = useState([]);

  const handleGetProducts = async () => {
    const res = await getProducts();
    const products = res?.data?.products?.map(
      (product) =>
        ({
          ...product,
          image: { url: product.image, id: product._id, isFavorite: false },
        } || [])
    );
    setProducts(products);
  };

  const handleToggleFavorite = (id) => {
    const p = products.map((product) =>
      product._id === id
        ? {
            ...product,
            image: {
              ...product.image,
              isFavorite: !product.image.isFavorite,
            },
          }
        : product
    );
    setProducts(p);
  };

  const handleAddToCart = (image, remove) => {
    if (remove) setCart(cartItems.filter((cart) => cart.id !== image.id));
    else setCart([...cartItems, image]);
  };

  const handlePlaceOrder = () => {
    return new Promise((res, rej) =>
      setTimeout(() => {
        setCart([]);
        res('Order placed successfully');
      }, 3000)
    );
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        handleToggleFavorite,
        cartItems,
        handleAddToCart,
        handlePlaceOrder,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);

export default ProductsProvider;
