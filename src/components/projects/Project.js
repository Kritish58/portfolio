import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Project(props) {
  const { image, title, demoLink, codeLink } = props;
  const { codePrivate } = props;

  const [projectHovered, setProjectHover] = useState(false);
  return (
    <div className="p-2" onMouseEnter={() => setProjectHover(true)} onMouseLeave={() => setProjectHover(false)}>
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
                  zIndex: 10,
                }}
              ></motion.div>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: 'transparent',
                  position: 'absolute',
                  top: 0,
                  zIndex: 20,
                  height: '100%',
                  width: '100%',
                  opacity: 1,
                }}
              >
                <motion.a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.1 } }}
                  className="projects-button mr-1 d-flex align-items-center"
                >
                  <i className="fas fa-eye mr-1"></i> demo
                </motion.a>
                <motion.a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
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
    </div>
  );
}

export default Project;
