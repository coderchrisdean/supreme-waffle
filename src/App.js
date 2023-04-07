import React from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro'; // import Intro component
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
  // const music = "https://storage.cloud.google.com/c-dean-host-files/TimTaj%20-%20Ramadan.mp3";
  const music = "./assets/audio/TimTaj-Ramadan.mp3"
  return (
    <div className="App">
      <ReactAudioPlayer src={music} autoPlay controls/>
      <Header />
      <div className="container">
        {/* <PhotoSection /> */}
        <AboutMe />
        {/* <Portfolio /> */}
        {/* <Resume /> */}
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
