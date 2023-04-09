import React from 'react';
import './Work.css'
import SingleWork from '../SingleWork/SingleWork';

const Work = () => {
    return (
        <div className='work-container'>
            <h1>My web development adventures</h1>
            {/* <p>Put here an awesome projects gallery</p> */}
            <SingleWork/>
        </div>
    );
};

export default Work;