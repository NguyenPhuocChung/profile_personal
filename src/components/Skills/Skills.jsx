import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import './Skills.css';
import { 
  FaVideo, 
  FaPalette, 
  FaCode, 
  FaMobileAlt, 
  FaMagic,
  FaRocket 
} from 'react-icons/fa';

const Skills = () => {
  const { isDarkMode } = useTheme();
  const { translations } = useLanguage();
  const { skills } = translations;
  
  const [activeSkill, setActiveSkill] = useState(0);

  const skillCategories = [
    {
      icon: <FaVideo />,
      title: skills.skill1,
      description: skills.skill1Desc,
      level: 95,
      tools: ["Adobe Premiere", "After Effects", "Final Cut Pro", "DaVinci Resolve"]
    },
    {
      icon: <FaPalette />,
      title: skills.skill2,
      description: skills.skill2Desc,
      level: 90,
      tools: ["Photoshop", "Illustrator", "Figma", "Canva", "CorelDRAW"]
    },
    {
      icon: <FaMagic />,
      title: skills.skill3,
      description: skills.skill3Desc,
      level: 85,
      tools: ["Blender", "Maya", "Cinema 4D", "Adobe Animate"]
    },
    {
      icon: <FaCode />,
      title: skills.skill4,
      description: skills.skill4Desc,
      level: 92,
      tools: ["ReactJS", "Node.js", "HTML/CSS", "JavaScript", "MongoDB"]
    },
    {
      icon: <FaMobileAlt />,
      title: skills.skill5,
      description: skills.skill5Desc,
      level: 88,
      tools: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"]
    },
    {
      icon: <FaRocket />,
      title: skills.skill6,
      description: skills.skill6Desc,
      level: 80,
      tools: ["SEO", "Performance", "UI/UX", "Responsive Design"]
    }
  ];

  return (
    <section id="skills" className={`skills ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <h2 className="section-title">
          {skills.title}
          <span className="section-title-highlight"></span>
        </h2>
        
        <div className="skills-content">
          <div className="skills-categories">
            {skillCategories.map((skill, index) => (
              <button
                key={index}
                className={`skill-category-btn ${activeSkill === index ? 'active' : ''}`}
                onClick={() => setActiveSkill(index)}
              >
                <span className="skill-category-icon">{skill.icon}</span>
                <span className="skill-category-title">{skill.title}</span>
              </button>
            ))}
          </div>
          
          <div className="skill-details">
            <div className="skill-detail-card">
              <div className="skill-header">
                <div className="skill-icon">
                  {skillCategories[activeSkill].icon}
                </div>
                <div>
                  <h3 className="skill-title">{skillCategories[activeSkill].title}</h3>
                  <p className="skill-description">{skillCategories[activeSkill].description}</p>
                </div>
              </div>
              
              <div className="skill-level">
                <div className="skill-level-info">
                  <span className="skill-level-label">Expertise Level</span>
                  <span className="skill-level-percent">{skillCategories[activeSkill].level}%</span>
                </div>
                <div className="skill-level-bar">
                  <div 
                    className="skill-level-fill"
                    style={{ width: `${skillCategories[activeSkill].level}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="skill-tools">
                <h4 className="skill-tools-title">Tools & Technologies</h4>
                <div className="tools-list">
                  {skillCategories[activeSkill].tools.map((tool, index) => (
                    <span key={index} className="tool-tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="skill-experience">
                <h4 className="skill-experience-title">Experience</h4>
                <div className="experience-bars">
                  <div className="experience-bar">
                    <div className="experience-info">
                      <span className="experience-role">Senior Specialist</span>
                      <span className="experience-years">3+ years</span>
                    </div>
                    <div className="experience-level">
                      <div className="experience-fill" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div className="experience-bar">
                    <div className="experience-info">
                      <span className="experience-role">Project Lead</span>
                      <span className="experience-years">2+ years</span>
                    </div>
                    <div className="experience-level">
                      <div className="experience-fill" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;