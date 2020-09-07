import React from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

import '../../css/home.css';
import '../../css/rubber_band_text.css';

import gen_rb_text_JSX from '../../utils/gen_rb_text_JSX';
import AnimatedBox from '../Animated_box';

function Home() {
  return (
    <div className="home-container">
      <ReactTooltip />
      <div className="home-container-item ">
        <div className="h-100 d-flex flex-column  align-items-center">
          <div className="home-h1text" style={{ paddingTop: 120 }}>
            <h1>{gen_rb_text_JSX('Hi,')}</h1>
            <h1>
              <div className="d-flex">
                {gen_rb_text_JSX("I'm")}
                <span>&nbsp;</span>
                {gen_rb_text_JSX('Rishi,')}
              </div>
            </h1>
            <h1>
              <div className="d-flex">
                {gen_rb_text_JSX('web')}
                <span>&nbsp;</span>
                {gen_rb_text_JSX('developer.')}
              </div>
            </h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }}>
              <Link to="/contact" className="home-contact-button" style={{ textDecoration: 'none' }}>
                contact
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      {/*  */}
      <motion.div
        initial={{ marginLeft: 500 }}
        animate={{ marginLeft: 0, transition: { duration: 0.15 } }}
        className="home-container-item py-4 bg-success"
        style={{ color: '#ddd' }}
      >
        <div className="text-center">
          <div>
            <h6>Profile</h6>
            <section className="home-profile-section">
              <a
                href="https://github.com/Kritish58"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#ddd' }}
              >
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
            </section>
          </div>
          <div className="text-center mt-4">
            <h6>Contact me</h6>
            <section className="home-profile-section mb-2">
              <a
                style={{ color: '#ddd' }}
                href="https://www.facebook.com/kritish.bhattarai.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i style={{ fontSize: 24 }} data-tip="messenger" className="fab fa-facebook-messenger mx-1"></i>
              </a>
            </section>
            <section>
              <i style={{ fontSize: 14 }} className="fab fa-google mx-1"></i>
              <span>rishi58rishi@gmail.com</span>
            </section>
            <section className="mt-1">
              <i className="fas fa-phone-alt"></i>
              <span className="ml-2">+977 9867461150</span>
            </section>
          </div>
          <div className="mt-5">
            <h5 className="pb-4">
              <i style={{ fontSize: 14 }} className="fas fa-drafting-compass"></i> my preferences
            </h5>
            <AnimatedBox />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
