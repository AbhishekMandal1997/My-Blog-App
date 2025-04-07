import React, { useState } from "react";
import "../styles/About.css";

export default function About() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="about-container">
      <h2 className="about-title" style={{ 
        color: '#000000',
        fontSize: '2.5rem',
        fontWeight: '800',
        marginBottom: '3rem',
        position: 'relative',
        paddingBottom: '1.5rem',
        letterSpacing: '-0.025em',
        fontFamily: "'Playfair Display', serif"
      }}>
        About Our Blog Platform
        <span style={{
          content: '',
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '80px',
          height: '2px',
          backgroundColor: '#000000'
        }}></span>
      </h2>
      
      <div className="accordion">
        <div className="accordion-item">
          <button 
            onClick={() => toggleSection(0)} 
            className={`accordion-button ${activeSection === 0 ? 'active' : ''}`}
            style={{
              background: 'linear-gradient(135deg, #000000, #333333)',
              color: '#ffffff',
              padding: '1.5rem',
              border: 'none',
              borderRadius: '0.5rem',
              width: '100%',
              textAlign: 'left',
              fontSize: '1.25rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            Our Mission
            <span className="accordion-icon" style={{
              transform: activeSection === 0 ? 'rotate(180deg)' : 'rotate(0)',
              transition: 'transform 0.3s ease'
            }}>▼</span>
          </button>
          <div className={`accordion-content ${activeSection === 0 ? "active" : ""}`}
            style={{
              padding: activeSection === 0 ? '1.5rem' : '0',
              maxHeight: activeSection === 0 ? '1000px' : '0',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              background: '#ffffff',
              borderRadius: '0.5rem',
              marginTop: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
            <p style={{ color: '#000000', lineHeight: '1.7', marginBottom: '1rem' }}>
              We're on a mission to create a space where ideas flourish and communities grow. Our platform is designed to:
            </p>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#000000', marginRight: '0.5rem' }}>•</span>
                <span style={{ color: '#000000' }}>
                  <strong style={{ color: '#000000' }}>Empower Creators:</strong> Provide intuitive tools for content creation and management
                </span>
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#000000', marginRight: '0.5rem' }}>•</span>
                <span style={{ color: '#000000' }}>
                  <strong style={{ color: '#000000' }}>Foster Community:</strong> Build meaningful connections between writers and readers
                </span>
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#000000', marginRight: '0.5rem' }}>•</span>
                <span style={{ color: '#000000' }}>
                  <strong style={{ color: '#000000' }}>Drive Innovation:</strong> Continuously improve based on user feedback and needs
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="accordion-item" style={{ marginTop: '1rem' }}>
          <button 
            onClick={() => toggleSection(1)} 
            className={`accordion-button ${activeSection === 1 ? 'active' : ''}`}
            style={{
              background: 'linear-gradient(135deg, #000000, #333333)',
              color: '#ffffff',
              padding: '1.5rem',
              border: 'none',
              borderRadius: '0.5rem',
              width: '100%',
              textAlign: 'left',
              fontSize: '1.25rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            Key Features
            <span className="accordion-icon" style={{
              transform: activeSection === 1 ? 'rotate(180deg)' : 'rotate(0)',
              transition: 'transform 0.3s ease'
            }}>▼</span>
          </button>
          <div className={`accordion-content ${activeSection === 1 ? "active" : ""}`}
            style={{
              padding: activeSection === 1 ? '1.5rem' : '0',
              maxHeight: activeSection === 1 ? '1000px' : '0',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              background: '#ffffff',
              borderRadius: '0.5rem',
              marginTop: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
            <p style={{ color: '#000000', lineHeight: '1.7', marginBottom: '1rem' }}>
              Our platform offers a comprehensive set of features designed to enhance your blogging experience:
            </p>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#000000', marginRight: '0.5rem' }}>•</span>
                <span style={{ color: '#000000' }}>
                  <strong style={{ color: '#000000' }}>User Management:</strong> Secure authentication and personalized user profiles
                </span>
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#000000', marginRight: '0.5rem' }}>•</span>
                <span style={{ color: '#000000' }}>
                  <strong style={{ color: '#000000' }}>Content Control:</strong> Full CRUD operations for your blog posts
                </span>
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#000000', marginRight: '0.5rem' }}>•</span>
                <span style={{ color: '#000000' }}>
                  <strong style={{ color: '#000000' }}>Modern Interface:</strong> Clean, responsive design that works on all devices
                </span>
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#000000', marginRight: '0.5rem' }}>•</span>
                <span style={{ color: '#000000' }}>
                  <strong style={{ color: '#000000' }}>Security:</strong> JWT-based authentication ensuring your data stays safe
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="accordion-item" style={{ marginTop: '1rem' }}>
          <button 
            onClick={() => toggleSection(2)} 
            className={`accordion-button ${activeSection === 2 ? 'active' : ''}`}
            style={{
              background: 'linear-gradient(135deg, #000000, #333333)',
              color: '#ffffff',
              padding: '1.5rem',
              border: 'none',
              borderRadius: '0.5rem',
              width: '100%',
              textAlign: 'left',
              fontSize: '1.25rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            Why Choose Us
            <span className="accordion-icon" style={{
              transform: activeSection === 2 ? 'rotate(180deg)' : 'rotate(0)',
              transition: 'transform 0.3s ease'
            }}>▼</span>
          </button>
          <div className={`accordion-content ${activeSection === 2 ? "active" : ""}`}
            style={{
              padding: activeSection === 2 ? '1.5rem' : '0',
              maxHeight: activeSection === 2 ? '1000px' : '0',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              background: '#ffffff',
              borderRadius: '0.5rem',
              marginTop: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
            <p style={{ color: '#000000', lineHeight: '1.7', marginBottom: '1rem' }}>
              Our platform stands out for its simplicity, power, and focus on user experience. Whether you're a seasoned blogger or just starting out, you'll find everything you need to share your story with the world.
            </p>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#000000', marginRight: '0.5rem' }}>•</span>
                <span style={{ color: '#000000' }}>
                  <strong style={{ color: '#000000' }}>User-Friendly:</strong> Intuitive interface that's easy to navigate
                </span>
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#000000', marginRight: '0.5rem' }}>•</span>
                <span style={{ color: '#000000' }}>
                  <strong style={{ color: '#000000' }}>Reliable:</strong> Built with modern technologies for optimal performance
                </span>
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#000000', marginRight: '0.5rem' }}>•</span>
                <span style={{ color: '#000000' }}>
                  <strong style={{ color: '#000000' }}>Customizable:</strong> Adapt the platform to match your unique style
                </span>
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#000000', marginRight: '0.5rem' }}>•</span>
                <span style={{ color: '#000000' }}>
                  <strong style={{ color: '#000000' }}>Community-Focused:</strong> Tools designed to help you connect with your audience
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
