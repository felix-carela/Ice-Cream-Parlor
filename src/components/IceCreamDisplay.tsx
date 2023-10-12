import React, { useState, useEffect } from 'react';
import './IceCreamDisplay.css'; // Importing CSS

function IceCreamDisplay() {
  const iceCreams = ['iceCream1.jpg', 'iceCream2.jpg', 'iceCream3.jpg']; // Add your ice cream images here
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % iceCreams.length);
    }, 2000); // Change image every 2 seconds
    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, [iceCreams.length]);

  return (
    <div id='IceCreamDisplay'>
      <img src={iceCreams[current]} alt='Ice Cream' className='ice-cream-image' />
    </div>
  );
}

export default IceCreamDisplay;
