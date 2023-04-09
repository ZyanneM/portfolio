import React from 'react';

const SkillsCard = (props) => {
    return (
        <div className='skill-card'>
            <div className='skill-img'>
                <img src={props.image} alt="" />
            </div>
            <h2 className='skill-title'>{props.skill}
            </h2>
        </div>
    );
};

export default SkillsCard;