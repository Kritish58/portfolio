import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Project(props) {
  const { image, title, demoLink, codeLink } = props;
  const { codePrivate } = props;

  const [projectHovered, setProjectHover] = useState(false);
  return (
    <motion.div
      className="p-2"
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { duration: 0.3 } }}
      onMouseEnter={() => setProjectHover(true)}
      onMouseLeave={() => setProjectHover(false)}
    >
      <div style={{ position: 'relative' }}>
        <img style={{ width: '100%', height: 'auto', borderRadius: 4 }} loading="lazy" src={image} alt="" />
        <AnimatePresence>
          {!!projectHovered && (
            <>
              <motion.div
                initial={{ backgroundColor: 'transparent', width: 0 }}
                animate={{ backgroundColor: '#000', width: '100%', transition: { duration: 0.2 } }}
                exit={{ width: 0, transition: { duration: 0.2 } }}
                className=""
                style={{
                  backgroundColor: '#000',
                  position: 'absolute',
                  top: 0,
                  height: '100%',
                  width: '100%',
                  opacity: 0.6,
                }}
              ></motion.div>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: 'transparent',
                  position: 'absolute',
                  top: 0,

                  height: '100%',
                  width: '100%',
                  opacity: 1,
                }}
              >
                <motion.a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, visibility: 'hidden' }}
                  animate={{ opacity: 1, visibility: 'visible' }}
                  exit={{ opacity: 0, transition: { duration: 0.1 } }}
                  className="projects-button mr-1 d-flex align-items-center"
                >
                  <i className="fas fa-eye mr-1"></i> demo
                </motion.a>
                <motion.a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, visibilityL: 'hidden' }}
                  animate={{ opacity: 1, visibility: 'visible' }}
                  exit={{ opacity: 0, transition: { duration: 0.1 } }}
                  className={`projects-button ${codePrivate ? 'disabled' : ''} d-flex align-items-center`}
                >
                  <i className="fas fa-code mr-1"></i> {codePrivate ? 'private' : 'code'}
                </motion.a>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
      <h6 className="text-muted text-center mt-2">{title}</h6>
    </motion.div>
  );
}

export default Project;
