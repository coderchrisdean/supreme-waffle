import React, { useState } from "react";
import "./Navigation.css";
import AboutMe from "../../sections/AboutMe/AboutMe";
import Portfolio from "../../sections/Portfolio/Portfolio";
import Contact from "../../sections/Contact/Contact";
import Resume from "../../sections/Resume/Resume";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("About Me");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };
  return (
    <nav className="navigation">
      <ul className="nav-list">
        {["About Me", "Portfolio", "Contact", "Resume"].map((link) => (
          <li
            key={link}
            className={`nav-item${activeSection === link ? "active" : ""}`}
          >
            <button onClick={() => handleNavClick(link)} className="nav-link">
              {link}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
