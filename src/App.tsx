import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import IceCreamDisplay from './components/IceCreamDisplay';
import Delivery from './components/Delivery';
import Footer from './components/Footer';
import Slider from './components/slider';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <IceCreamDisplay />
      <Delivery />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
