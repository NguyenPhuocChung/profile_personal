import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import './Hero.css';
import { FaArrowRight } from 'react-icons/fa';
import profileImage from '../../../src/assets/profile.jpg';
const Hero = () => {
    const { isDarkMode } = useTheme();
    const { translations } = useLanguage();
    const { hero } = translations;

    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className={`hero ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        {hero.title}
                        <span className="hero-name">{hero.name}</span>
                    </h1>
                    <p className="hero-subtitle">{hero.subtitle}</p>

                    <div className="hero-buttons">
                        <button onClick={scrollToProjects} className="btn btn-primary">
                            {hero.cta1}
                            <FaArrowRight className="btn-icon" />
                        </button>
                        <button onClick={scrollToContact} className="btn btn-secondary">
                            {hero.cta2}
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat">
                            <div className="stat-number">120+</div>
                            <div className="stat-label">Projects</div>
                        </div>
                        <div className="stat">
                            <div className="stat-number">5+</div>
                            <div className="stat-label">Years</div>
                        </div>
                        <div className="stat">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Clients</div>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="floating-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                    </div>
                    <div className="profile-avatar">
                        <div className="avatar-circle">
                            <div className="avatar-inner">
                                <div className="avatar-content">
                                    {/* hình */}
                                    <img src={profileImage} alt="Profile" className="avatar-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;