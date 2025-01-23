import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './Navbar.css';

const Navbar = () => {
  const [showHiddenNav, setShowHiddenNav] = useState(false);

  const toggleHiddenNav = () => {
    setShowHiddenNav(!showHiddenNav);
  };

  useEffect(() => {
    gsap.fromTo(
      '.left_nav h3',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.2 }
    );
    gsap.fromTo(
      '.right_nav p, .right_nav button',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.4, stagger: 0.1 }
    );
  }, []);

  return (
    <nav>
      <div className="left_nav">
        <Link to="/">
          <h3>ARK</h3>
        </Link>
      </div>
      <div className="right_nav">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/project">
          <p>Projects</p>
        </Link>
        <Link to="https://docs.google.com/document/d/1Sxd2GihBst81FhQpoIox89PN0dA5fI5g/edit?usp=sharing&ouid=110091088564694696466&rtpof=true&sd=true">
          <button>Resume</button>
        </Link>
      </div>
      <div className="btn" onClick={toggleHiddenNav}>
        {showHiddenNav ? (
          <i className="ri-close-large-fill"></i>
        ) : (
          <i className="ri-menu-3-line"></i>
        )}
      </div>
      <div className={`hidden_nav ${showHiddenNav ? 'show' : 'hide'}`}>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/project">
          <p>Projects</p>
        </Link>
        <Link to="https://drive.google.com/file/d/15JPp7tRu3UJwjUkZVZH3oIuy3cFTnMk5/view?usp=sharing">
          <button>Resume</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
