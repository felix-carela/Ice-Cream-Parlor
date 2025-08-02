import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import IceCreamDisplay from './components/IceCreamDisplay';
import Description from './components/Description';
import Delivery from './components/Delivery';
import Footer from './components/Footer';
import Slider from './components/slider';
import Slidebar from './components/Slidebar';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Header />
      <IceCreamDisplay />
      <Description />
      <Slider />
      <Slidebar />
      <Delivery />
      <Footer />
    </div>
  );
}

export default App;