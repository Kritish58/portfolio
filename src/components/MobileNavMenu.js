import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';

function MobileNavMenu() {
  const [menuClicked, setMenuClick] = useState(0);
  const [path, setPath] = useState('');
  const [isHomePage, setIsHomePage] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const url = location.pathname;
    setPath(url);

    if (url.includes('projects') || url.includes('skills') || url.includes('contact')) {
      setIsHomePage(false);
    } else {
      setIsHomePage(true);
    }
    return () => {};
  }, [location]);

  return (
    <div>
      <div
        className="nav-small-screen-menu-icon"
        style={{ zIndex: 100000 }}
        onClick={() => {
          setMenuClick((prev) => !prev);
        }}
      >
        <i className="fas fa-bars"></i>
      </div>
      <AnimatePresence>
        {!!menuClicked && (
          <div style={{ zIndex: 900 }}>
            <motion.div
              initial={{ top: 0, right: 0, scale: 0 }}
              animate={{ top: 10, right: 100, scale: 1 }}
              exit={{ top: -10, right: -10, opacity: 0, scale: 0, transition: { duration: 0.2 } }}
              className={`nav-small-screen-icon nssi-home`}
            >
              <Link className={`nav-small-screen-icon-link ${isHomePage ? 'active' : ''}`} to="/">
                <i className="fas fa-home"></i>
              </Link>
            </motion.div>
            <motion.div
              to="/projects"
              initial={{ top: 0, right: 0, scale: 0 }}
              animate={{ top: 50, right: 85, scale: 1 }}
              exit={{ top: -10, right: -10, opacity: 0, scale: 0, transition: { duration: 0.2 } }}
              className={`nav-small-screen-icon nssi-projects`}
            >
              <Link
                className={`nav-small-screen-icon-link ${path.includes('/projects') ? 'active' : ''}`}
                to="/projects"
              >
                <i className="fas fa-briefcase"></i>
              </Link>
            </motion.div>
            <motion.div
              initial={{ top: 0, right: 0, scale: 0 }}
              animate={{ top: 77, right: 52, scale: 1 }}
              exit={{ top: -10, right: -10, opacity: 0, scale: 0, transition: { duration: 0.2 } }}
              className={`nav-small-screen-icon nssi-skills ${path.includes('/skills') ? 'active' : ''}`}
            >
              <Link className={`nav-small-screen-icon-link ${path.includes('/skills') ? 'active' : ''}`} to="/skills">
                <i className="fas fa-cogs"></i>
              </Link>
            </motion.div>
            <motion.div
              to="/contact"
              initial={{ top: 0, right: 0, scale: 0 }}
              animate={{ top: 90, right: 14, scale: 1 }}
              exit={{ top: -10, right: -10, opacity: 0, scale: 0, transition: { duration: 0.2 } }}
              className={`nav-small-screen-icon nssi-contact`}
            >
              <Link className={`nav-small-screen-icon-link ${path.includes('/contact') ? 'active' : ''}`} to="/contact">
                <i className="fas fa-envelope"></i>
              </Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNavMenu;
