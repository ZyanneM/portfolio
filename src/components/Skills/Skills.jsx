import React from 'react';
import './Skills.css'
import SkillsCard from './SkillsCard';

const Skills = () => {
const skills = ['Javascript', 'React', 'PHP', 'MySql', 'Node.JS', 'Dragon Rise']
const images = ['./javascript.png','./react.png','./javascript.png','./react.png', './javascript.png','./react.png']

    return (
        <div className='skills'>
            <h1>In every story the hero has awesome Skills</h1>
            <div className='skills-container'>
            {skills.map((skill, index) => (
            <SkillsCard
            key={skill}
            skill={skill}
            image={images[index]}
            />
            ))}
            </div>
        </div>
    );
};

export default Skills;