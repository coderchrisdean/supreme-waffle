import React from 'react';
import Header from './components/Header/Header';
import AboutMe from './sections/AboutMe/AboutMe';
import Portfolio from './sections/Portfolio/Portfolio';
import Contact from './sections/Contact/Contact';
import Resume from './sections/Resume/Resume';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <main> */}
        <AboutMe />
        {/* <Portfolio />
        <Contact />
        <Resume />
      {/* </main> */}
      <Footer /> 
    </div>
  );
}

export default App;
