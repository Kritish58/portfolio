import React from 'react';
import { motion } from 'framer-motion';
import '../../css/contact.css';

function Contact() {
  return (
    <div
      className="d-flex flex-column justify-content-center px-5 pt-0 pb-5"
      style={{ backgroundColor: '#1D1D1D', minHeight: '100vh', fontFamily: 'Poppins' }}
    >
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { duration: 0.3 } }}
        style={{ cursor: 'default', color: '#ccc' }}
        className=" skills-title mb-4"
      >
        contact
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.3 } }}
        className=""
        style={{ color: '#aaa', letterSpacing: 1, lineHeight: 1.6 }}
      >
        <p style={{ fontSize: 20, color: '#ccc' }}>you can reach me through</p>
        <div>
          <a
            href="https://www.facebook.com/kritish.bhattarai.5"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ddd' }}
          >
            <i style={{ fontSize: 24 }} className="fab fa-facebook-square mx-1"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rishi-rishi-a9b99a1a9/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ddd' }}
          >
            <i style={{ fontSize: 24 }} className="fab fa-linkedin mx-1"></i>
          </a>
          <p className="mt-1">rishi58rishi@gmail.com</p>
        </div>

        <div className="mt-4">
          <p style={{ fontSize: 20, color: '#ccc' }}>profile</p>
          <div>
            <a href="https://github.com/Kritish58" target="_blank" rel="noopener noreferrer" style={{ color: '#ddd' }}>
              <i style={{ fontSize: 24 }} className="fab fa-github-square mx-1"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rishi-rishi-a9b99a1a9/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#ddd' }}
            >
              <i style={{ fontSize: 24 }} className="fab fa-linkedin mx-1"></i>
            </a>
            <a
              href="https://www.facebook.com/kritish.bhattarai.5"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#ddd' }}
            >
              <i style={{ fontSize: 24 }} className="fab fa-facebook-square mx-1"></i>
            </a>
          </div>
        </div>
      </motion.p>
    </div>
  );
}

export default Contact;
