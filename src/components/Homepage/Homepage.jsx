import React from 'react';
import './Homepage.css'

const Homepage = () => {
    return (
        <div className='homepage'>
            <div className='home'></div>
            <div className='reseaux'>
                <div className='linkedin'></div>
                <div className='github'></div>
                <div className='follow'>
                    <div className='lign'></div>
                    <p>Follow-Me</p>
                </div>
            </div>
            <div className='hometext'>
                <h1>Marilyn Olejniczak</h1>
                <h1>Front-End Developer</h1>
            </div>
        </div>
    );
};

export default Homepage;