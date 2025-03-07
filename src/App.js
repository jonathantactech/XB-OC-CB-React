import React from 'react';
import logo from './logo.svg';
import './App.css';
import OrderForm from './views/OrderForm'

/* Routes */
/* Nav, autentification, error bundle */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <OrderForm />
    </div>
  );
}

export default App;
