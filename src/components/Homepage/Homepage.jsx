import React from 'react';
import './Homepage.css'

const Homepage = () => {
    return (
        <div className='homepage'>
            <div className='home'>
                <img src="./dragonportfoliobase.png" alt="dragon" />
            </div>
            <div className='reseaux'>
                <a href="https://www.linkedin.com/in/marilyn-olejniczak" target="_blank" className='linkedin'>
                    <img src="./reseauxportfolinkedin.png" alt="linkedin" />
                </a>
                <a href="https://github.com/ZyanneM" target="_blank" className='github'>
                <img  src="./reseauxportfogithub.png" alt="github" />
                </a>
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