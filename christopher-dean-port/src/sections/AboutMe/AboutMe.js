import React from "react";
import "./AboutMe.css";
import Avatar from "../../components/Avatar/Avatar"; //import avatar

const AboutMe = () => {
  return (
    <div className="about-me">
      <Avatar size="large" />
      <div className="about-me-text">
        <h2>About Me</h2>
        <p>
          Bio about Christopher Dean, temporary info 123. ABC. Will fill this
          out later. UC Berkeley Coding Bootcamp student I am amazing.
        </p>
      </div>
    </div>
  );
};
export default AboutMe;
