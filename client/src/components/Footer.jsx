import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Blog App</h3>
          <p className="footer-description">
            A modern platform for sharing your thoughts and connecting with readers worldwide.
          </p>
          <p className="copyright">
            &copy; {new Date().getFullYear()} BlogApp. All rights reserved.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/create">Create Post</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="contact-info">
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:abhishekabk1997@gmail.com">abhishekabk1997@gmail.com</a>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <a href="tel:+918577825580">+91 8577825580</a>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>123 Office Street, Bengaluru, India</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
