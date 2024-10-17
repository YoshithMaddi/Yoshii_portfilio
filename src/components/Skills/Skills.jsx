import React from 'react';
import './Skills.css';
import img from '../../assets/theme_pattern.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, faJs, faNodeJs, faCss3, faGit, faGithub, faReact, faJava 
} from '@fortawesome/free-brands-svg-icons'; 
import { faC } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <div id='skills' className='skills'>
      <div className="skills-title">
        <h1>Skills</h1>
        <img src={img} alt="" />
      </div>
      <div className="skills-section">
        <FontAwesomeIcon  className='item' icon={faHtml5} />  {/* HTML5 icon */}
        <FontAwesomeIcon className='item'  icon={faJs} />      {/* JavaScript icon */}
        <FontAwesomeIcon className='item'  icon={faNodeJs} />  {/* Node.js icon */}
        <FontAwesomeIcon  className='item' icon={faCss3} />    {/* CSS3 icon */}
        <FontAwesomeIcon  className='item' icon={faGit} />     {/* Git icon */}
        <FontAwesomeIcon className='item'  icon={faGithub} />  {/* GitHub icon */}
        <FontAwesomeIcon className='item'  icon={faReact} />   {/* React icon */}
        <FontAwesomeIcon className='item'  icon={faC} />       {/* C icon */}
        <FontAwesomeIcon className='item '  icon={faJava} /> 
      </div>
      
    </div>
  );
};

export default Skills;
