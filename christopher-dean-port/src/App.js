import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import AboutMe from "./sections/AboutMe/AboutMe";
import Portfolio from "./sections/Portfolio/Portfolio";
import Contact from "./sections/Contact/Contact";
import Resume from "./sections/Resume/Resume";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState("About Me");

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Header />
      <Navigation onNavClick={handleNavigation} />
      {activeSection === "About Me" && <AboutMe />}
      {activeSection === "Portfolio" && <Portfolio />}
      {activeSection === "Contact" && <Contact />}
      {activeSection === "Resume" && <Resume />}
      <Footer />
    </div>
  );
};

export default App;
