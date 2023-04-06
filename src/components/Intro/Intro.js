import React, { useState, useEffect } from 'react';
import Avatar from '../Avatar/Avatar';
import './Intro.css';


const Intro = ( { music }) => {
  const [fade, setFade] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // play theme music on app load
    const audio = new Audio(music);
    audio.play();
  }, []);
  

  useEffect(() => {
 
    // fade out intro after 15 seconds
    setTimeout(() => {
      setFade(true);
      // add the "intro-fade-out" class to the intro component
      document.querySelector(".intro").classList.add("intro-fade-out");
    }, 15000);
  }, []);
  
  const handleEnterClick = () => {
    // fade out intro and navigate to main page
    setFade(true);
    setTimeout(() => {
      setShowIntro(false);
    }, 2000);
  };

  return (
    <div className={`intro ${fade ? 'fade-out' : 'fade-in'} ${showIntro ? '' : 'hidden'}`}>
    <Avatar size="xlarge" />
    <h1 className="intro-title intro-title-smaller">CHRISTOPHER DEAN</h1>
    <div className="intro-subtitle-container">
      <p className="intro-subtitle">Full Stack Web-Developer</p>
      <button className="intro-button" onClick={handleEnterClick}>
        ENTER
      </button>
      </div>
    </div>
  );
};

export default Intro;
