import React from 'react';
import './Work.css'
import SingleWork from '../SingleWork/SingleWork';

const Work = () => {
const projects = ["un", "deux", "trois"]

    return (
        <div className='work-container'>
            <h1>My web development adventures</h1>
            {/* <p>Put here an awesome projects gallery</p> */}
            <div className='slides-container'>
                {projects.map((project, index) => (
                    <>
                    <div
                    className={`work-card num${index}`}>
                    <SingleWork
                    key={project}
                />
                </div>
                </>
                ))}
            </div>
            <div className="slider-navigation">
                    <button className="slider-nav prev">&lsaquo;</button>
                    <button className="slider-nav next">&rsaquo;</button>
                </div>  
            <div className="slider-dots">
                        <ul>
                        {projects.map((project) => ( 
                            <li className='active'></li>
                ))}
                        </ul>
                    </div>
            
        </div>
    );
};

export default Work;