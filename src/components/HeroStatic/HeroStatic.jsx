"use client";
import React from 'react';
import { motion } from 'framer-motion';
import './HeroStatic.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const wordVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const subtitleVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeOut', delay: 0.5 },
  },
};

const bgVariants = {
  hidden: { scale: 1.05 },
  visible: {
    scale: 1,
    transition: { duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const HeroStatic = ({ title, intro, imageSrc, breadcrumbCurrent }) => {
  const words = title ? title.split(' ') : [];

  return (
    <section className="hero-static">
      <motion.div
        className="hero-static__background"
        variants={bgVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          className="hero-static__image"
          src={(imageSrc)?.src || (imageSrc)}
          alt={title}
        />
      </motion.div>

      <div className="hero-static__overlay" />

      <div className="hero-static__content">
        <div className="hero-static__inner">
          <motion.h1
            className="hero-static__heading"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, i) => (
              <motion.span key={i} className="hero-static__word" variants={wordVariants}>
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.h1>

          <div className="hero-static__subtitle-wrapper">
            <motion.p
              className="hero-static__subtitle"
              variants={subtitleVariants}
              initial="hidden"
              animate="visible"
            >
              {intro}
            </motion.p>
          </div>
        </div>
      </div>
      
      {breadcrumbCurrent && (
        <div className="hero-static__breadcrumbs">
           <div className="hero-static__breadcrumbs-inner">
              <span className="hero-static__breadcrumb-link">Home</span>
              <span className="hero-static__breadcrumb-separator">/</span>
              <span className="hero-static__breadcrumb-link">Construction</span>
              <span className="hero-static__breadcrumb-separator">/</span>
              <span className="hero-static__breadcrumb-link">Buildings</span>
              <span className="hero-static__breadcrumb-separator">/</span>
              <span className="hero-static__breadcrumb-current">{breadcrumbCurrent}</span>
           </div>
        </div>
      )}
    </section>
  );
};

export default HeroStatic;
