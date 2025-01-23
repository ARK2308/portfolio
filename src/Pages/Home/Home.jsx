import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Footer from '../../Components/Footer/Footer';
import './Home.css';

const Home = () => {
  useEffect(() => {
    gsap.fromTo(
      '.intro p:first-child',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.5 }
    );
    gsap.fromTo(
      '.intro h2',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 1 }
    );
    gsap.fromTo(
      '.intro .para',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 1.5 }
    );
  }, []);

  return (
    <div>
      <div className="page1">
        <div className="intro">
          <p>Hi, My name is</p>
          <h2>Abdul Raheem Khan</h2>
          <p className="para">
            I specialize in building dynamic and user-friendly web applications
            that seamlessly blend aesthetics with functionality. My passion lies
            in transforming innovative ideas into engaging digital solutions that
            deliver meaningful experiences. Let’s create something extraordinary
            together!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
