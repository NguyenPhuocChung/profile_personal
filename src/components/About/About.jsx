import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import './About.css';
import { FaVideo, FaPalette, FaCode, FaMobileAlt, FaAward } from 'react-icons/fa';

const About = () => {
  const { isDarkMode } = useTheme();
  const { translations } = useLanguage();
  const { about } = translations;

  return (
    <section id="about" className={`about ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <h2 className="section-title">
          {about.title}
          <span className="section-title-highlight"></span>
        </h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">{about.description1}</p>
            
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <FaVideo />
                </div>
                <h3 className="service-title">Video Editing</h3>
                <p className="service-desc">{about.service1}</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <FaPalette />
                </div>
                <h3 className="service-title">Graphic Design</h3>
                <p className="service-desc">{about.service2}</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <FaCode />
                </div>
                <h3 className="service-title">Web Development</h3>
                <p className="service-desc">{about.service4}</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <FaMobileAlt />
                </div>
                <h3 className="service-title">App Development</h3>
                <p className="service-desc">{about.service5}</p>
              </div>
            </div>
            
            <p className="about-description">{about.description2}</p>
          </div>
          
          <div className="about-stats">
            <div className="stats-card">
              <div className="stats-number">120+</div>
              <div className="stats-label">{about.stats1}</div>
            </div>
            
            <div className="stats-card">
              <div className="stats-number">5+</div>
              <div className="stats-label">{about.stats2}</div>
            </div>
            
            <div className="stats-card">
              <div className="stats-number">85+</div>
              <div className="stats-label">{about.stats3}</div>
            </div>
            
            <div className="stats-card">
              <div className="stats-number">15+</div>
              <div className="stats-label">{about.stats4}</div>
              <div className="stats-icon">
                <FaAward />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;