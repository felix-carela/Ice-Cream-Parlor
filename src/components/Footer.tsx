import React, { useState } from "react";

function Footer() {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        // Handle the email submission logic here
        console.log(email);
    };

    return (
        <div id="footer">
            <img id="Icecream-parlor" src="/images/left.png" alt="Icecream Parlor"></img>
            <div className="footer-content">
                <h2>MORGENSTERN’S</h2>
                <h2>FINEST ICE CREAM</h2>
                <p>88 West Houston Street,</p>
                <p>NYC 10012</p>
                <p>DAILY: 12pm - 12am</p>
            </div>
            <img id="outside-view" src="images/right.png" alt="Outside View"></img>
            <div className="outside-content">
                <h2>MORGENSTERN’S</h2>
                <h2>Bananas</h2>
                <p>2 Rivington Street, NYC</p>
                <p>10002</p>
                <p>DAILY: 12pm - 12am</p>
            </div>
            <p>Press</p>
            <p>Shipping + Refunds</p>
            <p>Contact Us</p>

            <div className="email-signup">
                <input 
                    type="email" 
                    placeholder="Your Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleSubmit}>OK</button>
            </div>
            <p>Sign up to get the scoop</p>
        </div>
    );
}

export default Footer;
