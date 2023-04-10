import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faAws } from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import './Technologies.css';

const Technologies = () => {
  return (
    <div className="technologies">
      <h3>Technologies</h3>
      <div className="technologies-container">
        <div className="technology">
          <div className="orbit">
            <FontAwesomeIcon icon={faHtml5} className="planet" />
          </div>
          <span>HTML5</span>
        </div>
        <div className="technology">
          <div className="orbit">
            <FontAwesomeIcon icon={faCss3Alt} className="planet" />
          </div>
          <span>CSS3</span>
        </div>
        <div className="technology">
          <div className="orbit">
            <FontAwesomeIcon icon={faJs} className="planet" />
          </div>
          <span>JavaScript</span>
        </div>
        <div className="technology">
          <div className="orbit">
            <FontAwesomeIcon icon={faReact} className="planet" />
          </div>
          <span>React</span>
        </div>
        <div className="technology">
          <div className="orbit">
            <FontAwesomeIcon icon={faNodeJs} className="planet" />
          </div>
          <span>Node.js</span>
        </div>
        <div className="technology">
          <div className="orbit">
            <FontAwesomeIcon icon={faDatabase} className="planet" />
          </div>
          <span>MongoDB</span>
        </div>
        <div className="technology">
          <div className="orbit">
            <FontAwesomeIcon icon={faCodeBranch} className="planet" />
          </div>
          <span>Git</span>
        </div>
        {/* <div className="technology">
          <div className="orbit">
            <FontAwesomeIcon icon={faAws} className="planet" />
          </div>
          <span>AWS</span>
        </div> */}
      </div>
    </div>
  );
};

export default Technologies;
