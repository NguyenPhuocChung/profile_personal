import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import './Projects.css';
import { FaVideo, FaPalette, FaMagic, FaCode, FaMobileAlt, FaArrowRight, FaUpload } from 'react-icons/fa';

const Projects = () => {
  const { isDarkMode } = useTheme();
  const { translations } = useLanguage();
  const { projects } = translations;
  
  const [activeFilter, setActiveFilter] = useState('all');
  const [isUploading, setIsUploading] = useState(false);

  const projectCategories = [
    { id: 'all', name: projects.all, icon: <FaCode /> },
    { id: 'video', name: projects.video, icon: <FaVideo /> },
    { id: 'design', name: projects.design, icon: <FaPalette /> },
    { id: 'hsnl', name: projects.hsnl, icon: <FaMagic /> },
    { id: 'web', name: projects.web, icon: <FaCode /> },
    { id: 'app', name: projects.app, icon: <FaMobileAlt /> }
  ];

  const sampleProjects = [
    {
      id: 1,
      title: "Corporate Video Campaign",
      category: "video",
      description: "Full video production for international brand campaign with motion graphics",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Premiere Pro", "After Effects", "Color Grading"],
      year: "2023"
    },
    {
      id: 2,
      title: "E-commerce Mobile App",
      category: "app",
      description: "Cross-platform shopping app with real-time inventory and payment integration",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React Native", "Firebase", "Stripe API"],
      year: "2023"
    },
    {
      id: 3,
      title: "Brand Identity Design",
      category: "design",
      description: "Complete brand identity package including logo, typography, and style guide",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Illustrator", "Photoshop", "Branding"],
      year: "2022"
    },
    {
      id: 4,
      title: "Interactive 3D Animation",
      category: "hsnl",
      description: "Real-time 3D character animation for educational platform",
      image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Blender", "Three.js", "WebGL"],
      year: "2022"
    },
    {
      id: 5,
      title: "Real Estate Platform",
      category: "web",
      description: "Full-stack property listing platform with virtual tour integration",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "MongoDB"],
      year: "2021"
    },
    {
      id: 6,
      title: "Social Media Video Series",
      category: "video",
      description: "Weekly video content series for social media marketing campaign",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Short-form", "Editing", "Social Media"],
      year: "2021"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? sampleProjects 
    : sampleProjects.filter(project => project.category === activeFilter);

//   const handleUpload = (e) => {
//     e.preventDefault();
//     setIsUploading(true);
//     // Simulate upload process
//     setTimeout(() => {
//       setIsUploading(false);
//       alert(translations.language === 'vi' ? 'Upload thành công!' : 'Upload successful!');
//     }, 2000);
//   };

  return (
    <section id="projects" className={`projects ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <h2 className="section-title">
          {projects.title}
          <span className="section-title-highlight"></span>
        </h2>
        
        {/* Filter Buttons */}
        <div className="project-filters">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              <span className="filter-icon">{category.icon}</span>
              <span className="filter-text">{category.name}</span>
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
                <div className="project-year">{project.year}</div>
                <div className="project-overlay">
                  <button className="view-project-btn">
                    {projects.details}
                    <FaArrowRight />
                  </button>
                </div>
              </div>
              <div className="project-content">
                <div className="project-category">
                  <span className="category-icon">
                    {projectCategories.find(c => c.id === project.category)?.icon}
                  </span>
                  {projectCategories.find(c => c.id === project.category)?.name}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Upload Section */}
        {/* <div className="upload-section">
          <h3 className="upload-title">
            <FaUpload className="upload-title-icon" />
            {projects.uploadTitle}
          </h3>
          <p className="upload-description">{projects.uploadDesc}</p>
          
          <form className="upload-form" onSubmit={handleUpload}>
            <div className="upload-dropzone">
              <FaUpload className="upload-dropzone-icon" />
              <p className="upload-dropzone-text">
                {projects.uploadText}
                <span className="upload-link">{projects.uploadLink}</span>
              </p>
              <p className="upload-dropzone-hint">{projects.uploadHint}</p>
            </div>
            
            <div className="upload-fields">
              <input 
                type="text" 
                placeholder={projects.projectName}
                className="upload-input"
                required
              />
              
              <select className="upload-input" required>
                <option value="">{projects.projectCategory}</option>
                {projectCategories.slice(1).map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              
              <textarea 
                placeholder={projects.projectDesc}
                className="upload-input upload-textarea"
                rows="4"
                required
              ></textarea>
              
              <button 
                type="submit" 
                className="upload-submit-btn"
                disabled={isUploading}
              >
                {isUploading ? (
                  <>
                    <span className="upload-spinner"></span>
                    {translations.language === 'vi' ? 'Đang tải lên...' : 'Uploading...'}
                  </>
                ) : (
                  projects.uploadBtn
                )}
              </button>
            </div>
          </form>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;