import React from 'react';
import './SingleWork.css'

const SingleWork = (props) => {
const contents = props.content;

    return (
            <>
                <h1 className='work-title'>{props.title}</h1>
                <h1 className='technos-title'>{props.technos}</h1>
                {/* <div className='project-img'>
                    <img src="./capturetest.png" alt="" />
                </div> */}
                <video className="project-video" id='vid' autoPlay="autoplay" muted="muted" loop="loop" playsInline="playsinline" preload="metadata" data-aos="fade-up" controls width="280">
                    <source src={props.src} type="video/mp4"></source>
                </video>
                <script>
                document.getElementById('vid').play();
                </script>
                <ul>
                {contents.map((content) => (
                    <li>{content}</li>))}
                </ul>
                 {props.repo !="" ?
                    <a href={props.repo} target="_blank">Github Repository</a> :""}
                </>
    );
};

export default SingleWork;