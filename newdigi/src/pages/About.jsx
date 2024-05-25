import React from 'react';
import about from './../assets/about.png';
import digi from '../assets/digi.png';
import '../styles/About.css';
import cardOne from '../assets/web.png';
import tempImg from '../assets/temp.png';

export default function About() {
    return (
        <div>
            <div className="about">
                <div className="section1">
                    <img src={about} alt="" />
                </div>
            </div>
            <div className="about_content">
                <div className="left">
                    <img src={digi} alt="" />
                </div>
                <div className="right">
                    <h1>About Digitech!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis. quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum.Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis. quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum.
                        Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis. quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum.Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis.</p>
                </div>
            </div>
            <div className="card_section">
                <img src={cardOne} alt="" />
            </div>
            <div className="tempcars">
                <img src={tempImg} alt="" />
            </div>
          
        </div>
    );
}
