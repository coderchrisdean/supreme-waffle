import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import AboutMe from './sections/AboutMe/AboutMe';
import Portfolio from './sections/Portfolio/Portfolio';
import Contact from './sections/Contact/Contact';
import Resume from './sections/Resume/Resume';
import Footer from './components/Footer/Footer';
import PhotoSection from './components/PhotoSection/PhotoSection';
import ReactAudioPlayer from 'react-audio-player';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(false); //check if user is on a mobile device to determine styling

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(userAgent.includes('mobi') || userAgent.includes('android'));
  }, []);
  
  const music = "https://storage.cloud.google.com/c-dean-host-files/TimTaj%20-%20Ramadan.mp3";

  return (
    <>
      <ReactAudioPlayer src={music} autoPlay controls />
      <Header />
      {isMobile ? (
        <div className="mobile-container">
          <Intro musicPath={music} />
          {/* <PhotoSection /> */}
          <AboutMe />
          {/* <Portfolio /> */}
          {/* <Resume /> */}
          <Contact />
        </div>
      ) : (
        <div className="container">
          <Intro musicPath={music} />
          <div className="content">
            {/* <PhotoSection /> */}
            <div className="sections">
              <AboutMe />
              {/* <Portfolio /> */}
              {/* <Resume /> */}
              <Contact />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default App;
