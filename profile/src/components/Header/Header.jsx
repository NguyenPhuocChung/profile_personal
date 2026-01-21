import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import './Header.css';
import { FaSun, FaMoon, FaGlobe } from 'react-icons/fa';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { translations, language, toggleLanguage } = useLanguage();
  const { header } = translations;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container header-container">
        <div className="logo">
          <span className="logo-text">Portfolio</span>
          <span className="logo-highlight">Pro</span>
        </div>
        
        <nav className="nav">
          <a onClick={() => scrollToSection('home')} className="nav-link">{header.home}</a>
          <a onClick={() => scrollToSection('about')} className="nav-link">{header.about}</a>
          <a onClick={() => scrollToSection('skills')} className="nav-link">{header.skills}</a>
          <a onClick={() => scrollToSection('projects')} className="nav-link">{header.projects}</a>
          <a onClick={() => scrollToSection('contact')} className="nav-link">{header.contact}</a>
        </nav>
        
        <div className="header-controls">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          
          <button 
            className="language-toggle" 
            onClick={toggleLanguage}
            aria-label={language === 'vi' ? "Switch to English" : "Switch to Vietnamese"}
          >
            <FaGlobe />
            <span className="language-text">{language === 'vi' ? 'EN' : 'VI'}</span>
          </button>
          
          <button className="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;