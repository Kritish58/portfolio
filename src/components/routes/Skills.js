import React from 'react';
import { motion } from 'framer-motion';
import '../../css/skills.css';

function Skills() {
    return (
        <div
            className="d-flex flex-wrap"
            style={{ backgroundColor: '#1D1D1D', minHeight: '100vh', fontFamily: 'Poppins' }}
        >
            <div className="col-12 col-lg-6">
                <div className=" h-100 d-flex px-4 pt-4 pt-sm-0 pb-5 flex-column justify-content-center">
                    <motion.h1
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1, transition: { duration: 0.3 } }}
                        style={{ cursor: 'default', color: '#ccc' }}
                        className=" skills-title mb-4"
                    >
                        skills and experience
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.3 } }}
                        className=""
                        style={{ color: '#aaa', letterSpacing: 1, lineHeight: 1.6 }}
                    >
                        <p>
                            HTML, CSS, responsive web design, animations using keyframes and libraries like
                            framer-motion.
                        </p>
                        <p>front end css frameworks: Bootstrap and others.</p>
                        <p>comfortable with react using CRA, Nextjs</p>
                        <p>creating REST API using nodejs/express </p>
                        <p>some working experience with laravel/mysql/vue</p>
                    </motion.p>
                </div>
            </div>
            <div className="col-12 col-lg-6 text-muted"></div>
        </div>
    );
}

export default Skills;
