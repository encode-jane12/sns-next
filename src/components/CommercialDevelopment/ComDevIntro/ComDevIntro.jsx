"use client";
import Link from 'next/link';

import { motion } from 'framer-motion';
import './ComDevIntro.css';

const ComDevIntro = () => {
  return (
    <section className="com-dev-intro">
      <div className="com-dev-intro__breadcrumbs">
        <Link href="/">Home</Link>
        <span className="com-dev-intro__breadcrumb-separator">
          <svg viewBox="0 0 32 32" width="16" height="16">
            <path fill="currentColor" d="M18.933 4H16.4l8.555 11H4v2h20.955L16.4 28h2.534l9.333-12z"></path>
          </svg>
        </span>
        <span>Commercial Development</span>
      </div>
      <div className="com-dev-intro__container">
        <motion.div 
          className="com-dev-intro__left"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="com-dev-intro__heading">Spaces driving your business forward</h2>
        </motion.div>
        
        <motion.div 
          className="com-dev-intro__right"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="com-dev-intro__text">
            We deliver commercial properties that help your business perform, attract and retain talent, and support long-term growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ComDevIntro;
