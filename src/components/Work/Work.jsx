import React from 'react';
import { useState } from 'react';
import './Work.css'
import SingleWork from '../SingleWork/SingleWork';

const Work = () => {
const projects = ["un", "deux", "trois", "quatre", "cinq", "six"]

const [selectedItem, setSelectedItem] = useState(0);



// const sliderDots = document.querySelectorAll('.slider-dots li');
// function logIndex(index) {
//     console.log(index)
// }

function setItemSlider(event) {
    setSelectedItem(event.target.parentNode.id);
    console.log('item selection'+selectedItem);
    let selectedElement = event.target.parentNode;
    // console.log(event.target.parentNode);
  

    const slideItems = document.querySelectorAll('.work-card');

console.log(slideItems)

slideItems.forEach((index) => {
    // console.log(index.id);
    let offset = index.id - selectedItem;
    if (offset < 0) offset += slideItems.length;

    console.log(offset)

    for (let i = 0; i < slideItems.length + 1; i++) {
        selectedElement.classList.remove(`item-${i}`);
        selectedElement.classList.add(`item-${offset+1}`);
    }
});
}

    return (
        <div className='work-container'>
            <h1>My web development adventures</h1>
            {/* <p>Put here an awesome projects gallery</p> */}
            <div className='slides-container'>
                <div 
                className='slide-items'
                onClick={(event) => setItemSlider(event)}
                    >
                {projects.map((project, index) => (
                    <div
                    // onClick={(event) => setItemSlider(event)}
                    key={project}
                    id={index}
                    className={`work-card item-${index}`}>
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