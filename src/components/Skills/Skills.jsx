import React from 'react';
import './Skills.css'
import SkillsCard from './SkillsCard';

const Skills = () => {
const skills = ['Javascript', 'React', 'HTML5', 'Node.JS', 'CSS', 'Dragon Ride', 'PHP', 'Wordpress', 'Strapi', 'MySql', 'Git', 'Figma']
const images = ['./javascript.png','./react.png','./html.png','./nodejs.png', './css.png', './dragonride.png', './php.png','./wordpress.png','./strapi.png','./mysql.png', './git.png','./figma.png']

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