import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import IceCreamDisplay from './components/IceCreamDisplay';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <IceCreamDisplay />
      <About 
          title="Morgenstern’s Finest Ice Cream, NYC"
          description="Morgenstern’s is a contemporary ice cream parlor serving small batch ice cream. Pick up at our Greenwich Village Flagship or place an order for Nationwide Shipping."
      />
      <Footer />
    </div>
  );
}

export default App;
