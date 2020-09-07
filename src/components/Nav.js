import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../css/nav.css';

function Nav() {
  const [path, setPath] = useState('');
  const [isHomePage, setIsHomePage] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setPath(location.pathname);
    if (
      location.pathname.includes('projects') ||
      location.pathname.includes('skills') ||
      location.pathname.includes('contact')
    ) {
      setIsHomePage(false);
    } else {
      setIsHomePage(true);
    }
    return () => {};
  }, [location]);
  return (
    <div className="nav-container py-4">
      {/* nav section */}
      <div>
        <Link
          to="/"
          style={{ textDecoration: 'none' }}
          className={`nav-icon-container ${isHomePage ? 'active' : ''} mb-4`}
        >
          <i className="fas fa-home"></i>
          <small>home</small>
        </Link>
        <Link
          to="/projects"
          style={{ textDecoration: 'none' }}
          className={`nav-icon-container ${path.includes('/projects') ? 'active' : ''} my-4`}
        >
          <i className="fas fa-briefcase"></i>
          <small>projects</small>
        </Link>
        <Link
          to="/skills"
          style={{ textDecoration: 'none' }}
          className={`nav-icon-container ${path.includes('/skills') ? 'active' : ''} my-4`}
        >
          <i className="fas fa-cogs"></i>
          <small>skills</small>
        </Link>
        <Link
          to="/contact"
          style={{ textDecoration: 'none' }}
          className={`nav-icon-container ${path.includes('/contact') ? 'active' : ''} mt-4`}
        >
          <i className="fas fa-envelope"></i>
          <small>contact</small>
        </Link>
      </div>
      {/* contact section */}
      <div className="nav-contact-container">
        <div className="nav-contact-icon-container">
          <a href="https://www.facebook.com/kritish.bhattarai.5" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <div className="nav-contact-icon-container">
          <a href="https://github.com/Kritish58" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="nav-contact-icon-container">
          <a href="https://www.linkedin.com/in/rishi-rishi-a9b99a1a9/" rel="noopener noreferrer" target="_blank">
            {' '}
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
