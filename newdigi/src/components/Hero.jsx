import React from 'react';
import hero from '../assets/hero.png';
import '../styles/Hero.css';

function Hero() {
    return (
        <div className="hero">
            <div className="hero-text">
                abc
            </div>
            <img src={hero} alt="Hero" />
        </div>
    );
}

export default Hero;
