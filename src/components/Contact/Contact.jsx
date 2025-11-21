import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

// Email configuration for the contact form.

const EMAIL_CONFIG = {
  // Your EmailJS Public Key (found in Account > API Keys)
  PUBLIC_KEY: 'XEMnF4-wvb9jnI1o8',
  
  // Your EmailJS Service ID (found in Email Services)
  SERVICE_ID: 'service_jr2231s',
  
  // Your EmailJS Template ID (found in Email Templates)
  TEMPLATE_ID: 'template_cxq3n0j',
  
  // The email address where you want to receive form submissions
  // This should be set in your EmailJS email service settings
  // The recipient email is configured in EmailJS dashboard, not here
  RECIPIENT_EMAIL: 'BuilderManagementCorp@gmail.com' // This is just for reference
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    projectDetails: ''
  });
  const [emailValid, setEmailValid] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setFormData({ ...formData, email });
    if (email === '') {
      setEmailValid(null);
    } else {
      setEmailValid(validateEmail(email));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!emailValid || !formData.name || !formData.serviceType || !formData.projectDetails) {
      return;
    }

    // Check if EmailJS is configured
    if (EMAIL_CONFIG.PUBLIC_KEY === 'XEMnF4-wvb9jnI1o8' || 
        EMAIL_CONFIG.SERVICE_ID === 'service_jr2231s' || 
        EMAIL_CONFIG.TEMPLATE_ID === 'template_v85km9h') {
      console.warn('EmailJS not configured. Please update EMAIL_CONFIG in Contact.jsx');
      // Still show thank you message for testing
      setShowThankYou(true);
      setFormData({
        name: '',
        email: '',
        serviceType: '',
        projectDetails: ''
      });
      setEmailValid(null);
      setTimeout(() => {
        setShowThankYou(false);
      }, 5000);
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          service_type: formData.serviceType,
          project_details: formData.projectDetails,
          to_email: EMAIL_CONFIG.RECIPIENT_EMAIL, // This will be used in your EmailJS template
        },
        EMAIL_CONFIG.PUBLIC_KEY
      );

      // Show success message
      setShowThankYou(true);
      setFormData({
        name: '',
        email: '',
        serviceType: '',
        projectDetails: ''
      });
      setEmailValid(null);
      
      setTimeout(() => {
        setShowThankYou(false);
      }, 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title white">Request a Quote</h2>
        {showThankYou ? (
          <div className="thank-you-message">
            <h3>Thank You!</h3>
            <p>We've received your request and will get back to you shortly.</p>
          </div>
        ) : (
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleEmailChange}
                required
                placeholder="Enter your email address"
                className={emailValid === true ? 'valid' : emailValid === false ? 'invalid' : ''}
              />
            </div>
            <div className="form-group">
              <label htmlFor="serviceType">Service Type</label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
              >
                <option value="">Select a service type</option>
                <option value="construction">Construction</option>
                <option value="renovation">Renovation</option>
                <option value="sale">Sale</option>
                <option value="purchase">Purchase</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="projectDetails">Project Details</label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit Request'}
            </button>
          </form>
        )}
        
        {/* Contact Information Section */}
        <div className="contact-info">
          <h3 className="contact-info-title">Get in Touch</h3>
          <div className="contact-info-grid">
            <div className="contact-info-item">
              <span className="contact-label">Phone</span>
              <a href="tel:+19544122167" className="contact-value">(954) 412-2167</a>
            </div>
            <div className="contact-info-item">
              <span className="contact-label">Email</span>
              <a href="mailto:BuilderManagementCorp@gmail.com" className="contact-value">BuilderManagementCorp@gmail.com</a>
            </div>
            <div className="contact-info-item address-item">
              <span className="contact-label">Address</span>
              <span className="contact-value">4840 SW 58TH AVE,
                DAVIE FL, 33314</span>
            </div>
            <div className="contact-info-item">
              <span className="contact-label">Hours</span>
              <span className="contact-value">Mon-Fri: 9AM-6PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

