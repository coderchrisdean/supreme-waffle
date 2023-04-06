import React, { useState, useEffect } from 'react';
import Avatar from './Avatar';
import './Intro.css';

const Intro = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // play theme music on app load
    const audio = new Audio('../../../public/audio/emusic.mp3');
    audio.play();

    // fade in intro
    setTimeout(() => {
      setFade(true);
    }, 1000);
  }, []);

  const handleEnterClick = () => {
    // fade out intro and navigate to main page
    setFade(false);
    setTimeout(() => {
      // navigate to main page
      window.location.href = 'public/index.html';
    }, 2000);
  };

  return (
    <div className={`intro ${fade ? 'fade-out' : 'fade-in'}`}>
      <Avatar size="large" />
      <h1 className="intro-title">CHRISTOPHER DEAN</h1>
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
