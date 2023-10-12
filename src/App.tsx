import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import IceCreamDisplay from './components/IceCreamDisplay';
import Footer from './components/Footer';
import Delivery from './components/Delivery';
import About from './components/About';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <IceCreamDisplay />
      
      <Delivery />
      <About 
          title="Morgenstern’s Finest Ice Cream, NYC"
          description="Morgenstern’s is a contemporary ice cream parlor serving small batch ice cream. Pick up at our Greenwich Village Flagship or place an order for Nationwide Shipping."
      />
      <Footer />
    </div>
  );
}

export default App;
