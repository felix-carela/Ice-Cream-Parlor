import React, { useState } from "react";
import "../styles/Footer.css"

function Footer() {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        // Handle the email submission logic here
        console.log(email);
    };

    return (
        <div className="footer-container">
            <div className="ice-cream-section">
                <img src="/images/left.png" alt="Icecream Parlor"></img>
                <div className="address">
                    <h3><strong>MORGENSTERN’S</strong></h3>
                    <h3><strong>FINEST ICE CREAM</strong></h3>
                    <br /><p className="top-p">88 West Houston Street,</p>
                    <p>NYC 10012</p>
                    <p>DAILY: 12pm - 12am</p>
                </div>
            </div>
            <div className="banana-section">
                <img src="images/right.png" alt="Outside View"></img>
                <div className="address">
                    <h3><strong>MORGENSTERN’S</strong></h3>
                    <h3><strong>Bananas</strong></h3>
                    <br /><p>2 Rivington Street, NYC</p>
                    <p>10002</p>
                    <p>DAILY: 12pm - 12am</p>
                </div>
            </div>
            <div>
           <br></br><p className="press">Press</p><br></br>
            <p className="shipping">Shipping + Refunds</p><br></br>
            <p className="contact">Contact Us</p><br></br>
            <div className="email-signup">
                <input 
                    type="email" 
                    placeholder="Your Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button  className="OK" onClick={handleSubmit}>OK</button>
                </div>  
            </div>
            <p className="sign"><strong>Sign up to get the scoop</strong></p>
        </div>
    );
}

export default Footer;