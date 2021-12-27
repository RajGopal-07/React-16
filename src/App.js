import React from 'react';
import './App.css';
import Todos from './Product/Todos';
import Product from './Product/Product';
// import Cart from './Product/Cart';
function App() {
  return (
    <div className="App">
        <Todos/>  
        <Product/>
        {/* <Cart/> */}
    </div>
  );
}

export default App;
