import React from 'react';
import './SingleWork.css'

const SingleWork = () => {
    return (
            <>
                <h1>Project React/Node.JS</h1>
                {/* <div className='project-img'>
                    <img src="./capturetest.png" alt="" />
                </div> */}
                <video className="project-video" id='vid' autoPlay="autoplay" muted="muted" loop="loop" playsInline="playsinline" preload="metadata" data-aos="fade-up" controls width="280">
                    <source src="./videotest.mp4" type="video/mp4"></source>
                </video>
                <script>
                document.getElementById('vid').play();
                </script>
                <p>An Awesome project with functionalities</p>
                <ul>
                    <li>Wonderful App Design</li>
                    <li>Dynamic Javascript</li>
                    <li>Navigation Menu</li>
                </ul>
                <a>Github Repository</a>
                </>
    );
};

export default SingleWork;