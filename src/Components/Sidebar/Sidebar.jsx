import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './Sidebar.css';

const Sidebar = () => {
  useEffect(() => {
    gsap.fromTo(
      '.links a',
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <div className="links">
      <Link to="mailto:abdulark500@gmail.com">
        <i className="ri-mail-line"></i>
        <div className="line"></div>
      </Link>
      <Link to="https://github.com/ARK2308">
        <i className="ri-github-line"></i>
        <div className="line"></div>
      </Link>
      <Link to="https://www.linkedin.com/in/abdul-raheem-khan-a114a4331/">
        <i className="ri-linkedin-fill"></i>
        <div className="line"></div>
      </Link>
    </div>
  );
};

export default Sidebar;
