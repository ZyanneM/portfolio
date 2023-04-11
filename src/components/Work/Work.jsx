import React from 'react';
import { useState } from 'react';
import './Work.css'
import SingleWork from '../SingleWork/SingleWork';

const Work = () => {
const projects = ["un", "deux", "trois", "quatre", "cinq", "six"]

const [selectedItem, setSelectedItem] = useState(0);


// const slideItems = document.querySelectorAll('.work-card');
// const sliderDots = document.querySelectorAll('.slider-dots li');

// function setItemSlider(index) {
//     setSelectedItem(index);
//   }

function logIndex(index) {
    console.log(index)
}

    return (
        <div className='work-container'>
            <h1>My web development adventures</h1>
            {/* <p>Put here an awesome projects gallery</p> */}
            <div className='slides-container'>
                <div className='slide-items'>
                {projects.map((project, index) => (
                    <div
                    onClick={() => logIndex(index)}
                    key={project}
                    id={index}
                    className={`work-card num${index}`}>
                    <SingleWork
                    key={project}
                />
                </div>
                ))}
                </div>
            </div>
            <div className="slider-navigation">
                    <button className="slider-nav prev">&lsaquo;</button>
                    <button className="slider-nav next">&rsaquo;</button>
                </div>  
            <div className="slider-dots">
                        <ul>
                        {projects.map((project) => ( 
                            <li
                            key={project}></li>
                ))}
                        </ul>
                    </div>
            
        </div>
    );
};



export default Work;