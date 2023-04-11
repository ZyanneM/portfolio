import React from 'react';
import './Work.css'
import SingleWork from '../SingleWork/SingleWork';

const Work = () => {
const projects = ["un", "deux", "trois", "quatre", "cinq", "six"]

const slideItems = document.querySelectorAll('.work-card');
const sliderDots = document.querySelectorAll('.slider-dots li');
const selectedItem = 0;

function handleSelect(event) {
  console.log(event.target.className);
}

    return (
        <div className='work-container'>
            <h1>My web development adventures</h1>
            {/* <p>Put here an awesome projects gallery</p> */}
            <div className='slides-container'>
                {projects.map((project, index) => (
                    <div
                    key={project}
                    className={`work-card num${index}`}
                    onClick={handleSelect}>
                    <SingleWork
                    key={project}
                />
                </div>
                ))}
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