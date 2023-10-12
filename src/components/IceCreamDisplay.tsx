import React, { useState, useEffect } from 'react';
import '../styles/IceCreamDisplay.css';

function IceCreamDisplay() {
    const iceCreams = ['images/ice-cream-1.png', 'images/ice-cream-2.png', 'images/ice-cream-3.png', 'images/ice-cream-4.png', 'images/ice-cream-5.png'];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % iceCreams.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [iceCreams.length]);

    return (
        <div id='IceCreamDisplay'>
            {iceCreams.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Ice Cream ${index + 1}`}
                    className={`ice-cream-image ${index === current ? 'active' : ''} ${index === ((current - 1 + iceCreams.length) % iceCreams.length) ? 'prev' : ''}`}
                />
            ))}
        </div>
    );
}

export default IceCreamDisplay;