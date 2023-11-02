import React from 'react';
import productsData from './mocks/products.json';
import Products from './components/Products';
import Header from './components/Header/Header'; // Corregido
import Footer from './components/Footer/Footer'; // Corregido
import { IS_DEVELOPMENT } from './config';
import { useFilters } from './components/Hooks/useFilters'; // Corregido
import Cart from './components/Cart/Cart'; 
import { CartProvider } from './components/Context/Cart';

function App() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(productsData.products);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  );
}

export default App;
