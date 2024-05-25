import React from 'react';
import '../styles/ServiceCard.css';
import Button from '../assets/Button.png';
import arrow from '../assets/arrow.png';

function ServiceCard() {
  return (
    <div className="card">
      <div className="upper">
        <h1>IT Consulting</h1>
        <img src={Button} alt="Button Icon" />
      </div>
      <div className="lower">
        <p>
          Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis. quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum. Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis. quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum.
        </p>
        <div className="input-container">
          <input type="text" placeholder="Read More" />
          <img src={arrow} alt="Arrow Icon" />
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
