import React from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro'; // import Intro component
import AboutMe from './sections/AboutMe/AboutMe';
import Portfolio from './sections/Portfolio/Portfolio';
import Contact from './sections/Contact/Contact';
import Resume from './sections/Resume/Resume';
import Footer from './components/Footer/Footer';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Intro /> 
      <Header />
      <AboutMe />
      <Contact />
      {/* <Portfolio /> */}
      {/* <Resume />  */}
      <Footer /> 
    </div>
  );
}

export default App;