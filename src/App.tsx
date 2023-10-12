import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import IceCreamDisplay from './components/IceCreamDisplay';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <IceCreamDisplay />
      <Footer />
    </div>
  );
}

export default App;
