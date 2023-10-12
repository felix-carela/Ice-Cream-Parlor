import React, { useState, useEffect } from 'react';
import '../styles/IceCreamDisplay.css';

function IceCreamDisplay() {
  const iceCreams = ['images/ice-cream-1.png', 'images/ice-cream-2.png'];
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % iceCreams.length);
      setNext((prev) => (prev + 1) % iceCreams.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [iceCreams.length]);

  return (
    <div id='IceCreamDisplay'>
      <img
        src={iceCreams[current]}
        alt={`Ice Cream ${current + 1}`}
        className='ice-cream-image current'
      />
      <img
        src={iceCreams[next]}
        alt={`Ice Cream ${next + 1}`}
        className='ice-cream-image next'
      />
    </div>
  );
}

export default IceCreamDisplay;
