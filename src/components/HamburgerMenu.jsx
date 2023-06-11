import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={handleToggle}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {isOpen && (
        <div className="dropdown">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
