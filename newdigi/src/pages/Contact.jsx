import React from 'react';
import contact from '../assets/contact.png';
import digi from '../assets/digi.png';
import '../styles/Contact.css'; // Assuming you have a separate CSS file for Contact styling
import mappImg from '../assets/map.png'

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-image">
        <img src={contact} alt="Contact" />
      </div>
      <div className="connect">
        <div className="left">
          <img src={digi} alt="Digi" />
        </div>
        <div className="right">
          <h1 className='lets'> Let’s </h1>
          <h1 className='connect'>
            Connect</h1>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Your Email" />
          <input type="tel" placeholder="Your Phone Number" />
          <button>Get Started</button>
        </div>
      </div>
      <div className="map">
        <div className="mapleft">
          <p>We are Near Around You..</p>
          <h4>Address</h4>
          <p>Office #1515-1516, 15th Floor, Caesar’s Tower, Opposite to Aisha Banwany, Shahrah-e-Faisal, Karachi, Pakistan</p>
        </div>
        <div className="mapright">
          <img src={mappImg} alt="" />
        </div>
      </div>
    </div>
  );
}
