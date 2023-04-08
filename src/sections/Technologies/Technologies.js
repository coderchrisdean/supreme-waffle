import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faSass, faAws } from '@fortawesome/free-brands-svg-icons';
import './Technologies.css';

const Technologies = () => {
  return (
    <div className="technologies">
      <h3>Technologies</h3>
      <div className="technologies-container">
        <div className="technology">
          <FontAwesomeIcon icon={faHtml5} />
          <span>HTML5</span>
        </div>
        <div className="technology">
          <FontAwesomeIcon icon={faCss3Alt} />
          <span>CSS3</span>
        </div>
        <div className="technology">
          <FontAwesomeIcon icon={faJs} />
          <span>JavaScript</span>
        </div>
        <div className="technology">
          <FontAwesomeIcon icon={faReact} />
          <span>React</span>
        </div>
        <div className="technology">
          <FontAwesomeIcon icon={faNodeJs} />
          <span>Node.js</span>
        </div>
        <div className="technology">
          <i className="fas fa-database"></i>
          <span>MongoDB</span>
        </div>
        <div className="technology">
          <i className="fas fa-code-branch"></i>
          <span>Git</span>
        </div>
        <div className="technology">
          <FontAwesomeIcon icon={faAws} />
          <span>AWS</span>
        </div>
        <div className="technology">
          <FontAwesomeIcon icon={faSass} />
          <span>Sass</span>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
