import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const { translations } = useLanguage();
  const { contact } = translations;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    projectType: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        success: true,
        message: translations.language === 'vi' 
          ? 'Tin nhắn đã được gửi thành công!' 
          : 'Message sent successfully!'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        projectType: '',
        message: ''
      });
      
      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 2000);
  };

  return (
    <section id="contact" className={`contact ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <h2 className="section-title">
          {contact.title}
          <span className="section-title-highlight"></span>
        </h2>
        
        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h3 className="contact-subtitle">{contact.subtitle}</h3>
            <p className="contact-description">{contact.description}</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <FaEnvelope />
                </div>
                <div className="method-content">
                  <h4 className="method-title">{contact.email}</h4>
                  <p className="method-detail">{contact.emailValue}</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <FaPhone />
                </div>
                <div className="method-content">
                  <h4 className="method-title">{contact.phone}</h4>
                  <p className="method-detail">{contact.phoneValue}</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="method-content">
                  <h4 className="method-title">{contact.address}</h4>
                  <p className="method-detail">{contact.addressValue}</p>
                </div>
              </div>
            </div>
            
            <div className="contact-social">
              <h4 className="social-title">
                {translations.language === 'vi' ? 'Kết nối với tôi' : 'Connect with me'}
              </h4>
              <div className="social-links">
                <a href="#" className="social-link">
                  <FaFacebook />
                </a>
                <a href="#" className="social-link">
                  <FaInstagram />
                </a>
                <a href="#" className="social-link">
                  <FaLinkedin />
                </a>
                <a href="#" className="social-link">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              {submitStatus && (
                <div className={`submit-status ${submitStatus.success ? 'success' : 'error'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder={contact.fullName}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder={contact.emailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder={contact.subject}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="">{contact.projectType}</option>
                  <option value="video">{translations.projects.video}</option>
                  <option value="design">{translations.projects.design}</option>
                  <option value="hsnl">{translations.projects.hsnl}</option>
                  <option value="web">{translations.projects.web}</option>
                  <option value="app">{translations.projects.app}</option>
                </select>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder={contact.projectDesc}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="form-input form-textarea"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="submit-spinner"></span>
                    {translations.language === 'vi' ? 'Đang gửi...' : 'Sending...'}
                  </>
                ) : (
                  <>
                    {contact.send}
                    <FaPaperPlane className="submit-icon" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;