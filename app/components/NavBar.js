"use client";
import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css'; // Import your CSS module

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Add this line


  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);

    // Add slide class to the modal element
    const modal = document.getElementById('nav-modal');
    modal.classList.add('slide');
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
      toggleModal(); // Close the modal after clicking on a section
    }
  };

  return (
    <nav id="navbar" className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>Chris.dev</div>
      <div className={`${styles.hamburger} ${isModalOpen ? styles.open : ''}`} onClick={toggleModal}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="nav-modal" className={`${styles['nav-modal']} ${isModalOpen ? styles.open : ''}`}>
        <ul className={styles['nav-links']}>
          <li>
            <a href="#" onClick={() => scrollToSection('home')}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={() => scrollToSection('about')}>
              About Me
            </a>
          </li>
          <li>
            <a href="#" onClick={() => scrollToSection('portfolio')}>
              Projects
            </a>
          </li>
          <li>
            <a href="#" onClick={() => scrollToSection('resume')}>
              Resume
            </a>
          </li>
          <li>
            <a href="#" onClick={() => scrollToSection('contact')}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
