import React, { useState } from "react";
import { FaAws, FaGithub, FaLinkedin, FaCode, FaHome } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className={`hamburger-menu ${isOpen ? "open" : ""}`}>
        <div className="hamburger-icon" onClick={handleMenuToggle}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className="menu-items">
          <Link className="home-nav nav-link" to="/">
            <FaHome />
            <p className="link-name">Home</p>
          </Link>

          <Link className="projects-nav nav-link" to="/projects">
            <FaCode />
            <p className="link-name">Projects</p>
          </Link>

          <Link
            className="linkedin linkedin-nav nav-link"
            to="https://www.linkedin.com/in/tyler-dinn-1a2b3c4d/"
          >
            <FaLinkedin />
            <p className="link-name">LinkedIn</p>
          </Link>

          <Link
            className="github github-nav nav-link"
            to="https://github.com/twdinn"
          >
            <FaGithub />
            <p className="link-name">Github</p>
          </Link>

          <Link
            className="aws aws-nav nav-link"
            to="https://www.credly.com/users/tylerdinn"
          >
            <FaAws />
            <p className="link-name">AWS</p>
          </Link>

          <a
            className="email email-nav nav-link"
            href="mailto:dinnwt@gmail.com"
          >
            <GrMail />
            <p className="link-name">Email</p>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default HamburgerMenu;
