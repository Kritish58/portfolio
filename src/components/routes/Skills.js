import React from 'react';
import { motion } from 'framer-motion';
import '../../css/skills.css';

function Skills() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ backgroundColor: '#1D1D1D', minHeight: '100vh' }}
    >
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { duration: 0.4 } }}
        style={{ cursor: 'default' }}
        className="text-muted w-100 text-center skills-title"
      >
        skills and experience
      </motion.h1>
    </div>
  );
}

export default Skills;
