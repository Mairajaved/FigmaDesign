import React from 'react';
import Hero from '../components/Hero';
import service from '../assets/service.png';
import ServiceCard from '../components/ServiceCard';
import '../styles/Home.css'; // Make sure to import the CSS file
import about from '../assets/abt.png'
import arrow from '../assets/arrow.png';
import price from '../assets/price.png'
import ibm from '../assets/ibm.png'
import center from '../assets/center.png'
import  nestle from '../assets/nestle.png'
import del from '../assets/del.png'
import tie from '../assets/tie.png'
import ebay from '../assets/ebay.png'
import client from '../assets/client.png'
import man from '../assets/man.png'

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="about">
      <img src={about} alt="About" />
      <div className="about-text">
        <h1>
          Never doubt that a small group of thoughtful, committed citizens can change the world.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="input-container">
          <input type="text" placeholder="Read More" />
          <img src={arrow} alt="Arrow Icon" />
        </div>
      </div>
    </div>
      <div className="service">
        <div className="inner">
          <div className="first">
            <img src={service} alt="Service" />
          </div>
          <div className="cards">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />

            {/* Add more ServiceCard components if needed */}
          </div>
        </div>
      </div>
      <div className="prices">
      <div className="priceleft">
        <h1>
          Never doubt that a small group of people can change the world.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="input-container">
          <input type="text" placeholder="Read More" />
          <img src={arrow} alt="Arrow Icon" />
        </div>
      </div>
      <img src={price} alt="Price" />
    </div>
    <div className="marquee-container">
      <marquee behavior="alternate" direction="right" className="marquee">
        <div className="line">
          <img src={ibm} alt="IBM" />
          <img src={center} alt="Center" />
          <img src={nestle} alt="Nestle" />
          <img src={center} alt="Center" />
          <img src={del} alt="Del" />
          <img src={center} alt="Center" />
          <img src={tie} alt="Tie" />
          <img src={center} alt="Center" />
          <img src={ebay} alt="eBay" />
        </div>
      </marquee>
     
    </div>
    <div className="client">
      <img src={client} alt="" />
      <img src={man} alt="" />
      <div className="clientcard">
<p>"Outstanding experience! From start to finish, the service was impeccable. I highly recommend them for their professionalism and expertise. Outstanding experience! From start to finish, the service was impeccable. I highly recommend them for their professionalism and expertise. Outstanding experience! From start to finish, the service was impeccable. I highly recommend them for their professionalism and expertise. Outstanding experience! From start to finish, the service was impeccable. I highly recommend them for their professionalism and"</p>
      </div>
    </div>
    <div className="like">
      <div className="likeright">
        <h2>What would you like to know about Kota?</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis. quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum.</p>
      <button>Talk to us</button>
      </div>
    </div>

    </div>
  );
}
