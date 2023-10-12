import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import IceCreamDisplay from './components/IceCreamDisplay';
import Footer from './components/Footer';
import Delivery from './components/Delivery';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <IceCreamDisplay />
      <Delivery />

      <Footer />
    </div>
  );
}

export default App;
