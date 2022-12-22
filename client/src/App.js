import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './pages/products';
import './App.css';
import Layout from './components/Layout';
import Cart from './pages/cart';
import ProductsProvider from './context/useProducts';

function App() {
  return (
    <Router>
      <ProductsProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Products />} />
            <Route path="cart" element={<Cart />} />

            <Route from="*" to="/" />
          </Route>
        </Routes>
      </ProductsProvider>
    </Router>
  );
}

export default App;
