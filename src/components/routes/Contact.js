import React from 'react';
import { motion } from 'framer-motion';
import '../../css/contact.css';

function Contact() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ backgroundColor: '#1D1D1D', minHeight: '100vh' }}
    >
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { duration: 0.4 } }}
        style={{ cursor: 'default' }}
        className="text-muted skills-title"
      >
        contact
      </motion.h1>
    </div>
  );
}

export default Contact;
