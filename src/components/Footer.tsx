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
                <h3>MORGENSTERN’S</h3>
                <h3>FINEST ICE CREAM</h3>
                <p>88 West Houston Street,</p>
                <p>NYC 10012</p>
                <p>DAILY: 12pm - 12am</p>
            </div>
            <img id="outside-view" src="images/right.png" alt="Outside View"></img>
            <div className="outside-content">
                <h3>MORGENSTERN’S</h3>
                <h3>Bananas</h3>
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
