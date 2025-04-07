import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact-page" style={{
      padding: '4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h2 style={{
        color: '#000000',
        fontSize: '2.5rem',
        fontWeight: '800',
        marginBottom: '3rem',
        position: 'relative',
        paddingBottom: '1.5rem',
        letterSpacing: '-0.025em',
        fontFamily: "'Playfair Display', serif"
      }}>
        Contact Information
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
      
      <div className="contact-details" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        background: '#ffffff',
        padding: '2rem',
        borderRadius: '1rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, #000000, #333333)',
          borderRadius: '0.5rem',
          color: '#ffffff'
        }}>
          <p style={{ marginBottom: '1rem' }}>
            <strong style={{ display: 'block', marginBottom: '0.5rem', color: '#ffffff' }}>Company Name</strong>
            <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}> Your Blogs</span>
          </p>
          <p style={{ marginBottom: '1rem' }}>
            <strong style={{ display: 'block', marginBottom: '0.5rem', color: '#ffffff' }}>Email</strong>
            <a href="mailto:abhishekabk1997@gmail.com" style={{ 
              color: 'rgba(255, 255, 255, 0.9)',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}>abhishekabk1997@gmail.com</a>
          </p>
          <p style={{ marginBottom: '1rem' }}>
            <strong style={{ display: 'block', marginBottom: '0.5rem', color: '#ffffff' }}>Phone</strong>
            <a href="tel:+918577825580" style={{ 
              color: 'rgba(255, 255, 255, 0.9)',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}>+91 8577825580</a>
          </p>
        </div>

        <div style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, #000000, #333333)',
          borderRadius: '0.5rem',
          color: '#ffffff'
        }}>
          <p style={{ marginBottom: '1rem' }}>
            <strong style={{ display: 'block', marginBottom: '0.5rem', color: '#ffffff' }}>Address</strong>
            <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Ground Floor, TechPark,<br />
              Koramangala,<br />
              Bangalore, India
            </span>
          </p>
          <p style={{ marginBottom: '1rem' }}>
            <strong style={{ display: 'block', marginBottom: '0.5rem', color: '#ffffff' }}>Working Hours</strong>
            <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Monday - Friday<br />
              9:00 AM - 6:00 PM
            </span>
          </p>
        </div>

        <div style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, #000000, #333333)',
          borderRadius: '0.5rem',
          color: '#ffffff'
        }}>
          <p style={{ marginBottom: '1rem' }}>
            <strong style={{ display: 'block', marginBottom: '0.5rem', color: '#ffffff' }}>Socials</strong>
            <a 
              href="https://www.linkedin.com/in/akash-srivastava-b3b3041bb" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '0.25rem',
                marginTop: '0.5rem'
              }}
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
