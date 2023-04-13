import React, { useEffect } from 'react';
import './About.css';
import { gsap } from 'gsap';
import TweenMax from "gsap/all";

const About = () => {
useEffect(() => {
    TweenMax.from(".left-container", 2, {width:"50%"} );
    TweenMax.from(".right-container", 2, {width:"100%"}, {delay:1.5}, {opacity:0} );
    TweenMax.from(".center-container", 2, {x:-20}, {delay:3});
})
    return (
        <>

        <div className="about" id="about">
            <div className="containers">
                <div className="left-container">
                    <div className="logo-about">
                        <img src="./imagecotedroit.png" alt="" />
                    </div>
                    <div className='about-text'>
                    <p>I fall into the exciting history of web development in 2021 and decided to make it my profession. I enjoy building visual identities and I aim to enhance my skills to develop interactive websites and be able to play with 3D experiences.</p>
                </div>
                </div>
                <div className="right-container">
                    <div className="first-block"></div>
                    <div className="story">
                    <h2><span>Once upon a time</span><br></br>a girl who like to build websites</h2>
                    </div>
                </div>
                <div className="center-container">
                    <img src="./about_test.png" alt="photo" />
                </div>
            </div>
                
  
        </div>

        </>

    );
};

export default About;