import React from 'react';
import './Conception.css'

const Conception = () => {
    return (
        <>
        <h2 className='conception-title'>Design Concepts</h2>
        <div className='conception-card-container'>
            <div className='conception-card'>
                <img src="./concept_croissants.png" alt="croissant" />
                <h3>Design Research for Digital Bakers</h3>
                <h4>Mobile App Agency</h4>
            </div>
            <div className='conception-card'>
                <img src="./maquettempp.png" alt="maquette mobile" />
                <h3>My project App Mockup MyPeacefulPlace</h3>
                <h4>Peaceful App with Positive Quotes and Chill Working Space</h4>
            </div>
        </div>
        </>
    );
};

export default Conception;