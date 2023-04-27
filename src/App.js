import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import AboutMe from "./sections/AboutMe/AboutMe";
import Portfolio from "./sections/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Resume from "./sections/Resume/Resume";
import Technologies from "./sections/Technologies/Technologies";
import PyramidScene from "./components/Pyramid/PyramidScene";
import Footer from "./components/Footer/Footer";
import ReactAudioPlayer from "react-audio-player";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [isMobile, setIsMobile] = useState(false); //check if user is on a mobile device to determine styling
  const [showAboutMe, setShowAboutMe] = useState(true);
  const [showTechnologies, setShowTechnologies] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [contactHeight, setContactHeight] = useState(false);
  const contactRef = useRef(null); 
  
  useEffect(() => {
    const contactNode = contactRef.current;
    setContactHeight(contactNode ? contactNode.offsetHeight : 0);
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(userAgent.includes("mobi") || userAgent.includes("android"));
  }, []);

  const music =
    "https://storage.cloud.google.com/c-dean-host-files/TimTaj%20-%20Ramadan.mp3";

  const handleNavClick = (link) => {
    switch (link) {
      case "About Me":
        setShowAboutMe(true);
        setShowPortfolio(false);
        setShowTechnologies(false);
        setShowResume(false);
        setShowContact(false);
        // setContactHeight(0);
        break;
      case "Portfolio":
        setShowAboutMe(false);
        setShowPortfolio(true);
        setShowTechnologies(false);
        setShowResume(false);
        setShowContact(false);
        // setContactHeight(0);
        break;
      case "Technologies":
        setShowAboutMe(false);
        setShowPortfolio(false);
        setShowTechnologies(true);
        setShowResume(false);
        setShowContact(false);
        // setContactHeight(0);
        break;
      case "Resume":
        setShowAboutMe(false);
        setShowPortfolio(false);
        setShowTechnologies(false);
        setShowResume(true);
        setShowContact(false);
        // setContactHeight(0);
        break;
      case "Contact":
        setShowAboutMe(false);
        setShowPortfolio(false);
        setShowTechnologies(false);
        setShowResume(false);
        setShowContact(true);
        // setContactHeight(0);
        break;
      default:
        setShowAboutMe(true);
        setShowPortfolio(false);
        setShowTechnologies(false);
        setShowResume(false);
        setShowContact(false);
        // setContactHeight(0);
    }
  };


  return (
    <div className="grid-container">
      <ReactAudioPlayer src={music} autoPlay controls />
      <Header onNavClick={handleNavClick} showTechnologies={showTechnologies} />
      {isMobile ? (
        <div className={`content ${contactHeight ? '' : 'center-content'}`}>
        <div className="mobile-container">
          <Intro musicPath={music} />
          {showAboutMe && <AboutMe />}
          {showPortfolio && <Portfolio />}
          {showTechnologies && (
            <>
              <Technologies />
              <PyramidScene />
            </>
          )}
          {showResume && <Resume />}
          <Contact ref={contactRef} style={{ visibility: 'hidden', height: 0, overflow: 'hidden' }} />
        </div>
        </div>
      ) : (
        <>
          <div className="content">
          <div className={`content ${contactHeight ? '' : 'center-content'}`}>
            <div className="sections">
              <Intro musicPath={music} />
              {showAboutMe && <AboutMe />}
              {showPortfolio && <Portfolio />}
              {showTechnologies && (
                <>
                  <Technologies />
                  {/* <PyramidScene /> */}
                </>
              )}
              {showResume && <Resume />}
            </div>
            <ContactForm />
           <Contact ref={contactRef}/>
          </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
