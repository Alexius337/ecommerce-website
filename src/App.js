import React from 'react';
import CartProvider from './context/cartProvider';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <main>
          <ProductList />
        </main>
        <ShoppingCart />
      </div>
    </CartProvider>
  );
}

export default App;
