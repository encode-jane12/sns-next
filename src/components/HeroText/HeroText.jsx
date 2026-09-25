"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import './HeroText.css';

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

const HeroText = ({ title, heading, intro, breadcrumbs = [] }) => {
  const displayTitle = title || heading || '';
  const words = displayTitle ? displayTitle.split(' ') : [];

  return (
    <section className="hero-text">
      {breadcrumbs.length > 0 && (
        <div className="hero-text__breadcrumbs">
           <div className="hero-text__breadcrumbs-inner">
              {breadcrumbs.map((crumb, index) => {
                const targetPath = crumb.url || crumb.path;
                return (
                  <React.Fragment key={index}>
                    {index < breadcrumbs.length - 1 ? (
                      <>
                        {targetPath ? (
                          <Link href={targetPath} className="hero-text__breadcrumb-link">{crumb.label}</Link>
                        ) : (
                          <span className="hero-text__breadcrumb-link">{crumb.label}</span>
                        )}
                        <span className="hero-text__breadcrumb-separator">/</span>
                      </>
                    ) : (
                      <span className="hero-text__breadcrumb-current">{crumb.label}</span>
                    )}
                  </React.Fragment>
                );
              })}
           </div>
        </div>
      )}

      <div className="hero-text__content">
        <div className="hero-text__inner">
          <motion.h1
            className="hero-text__heading"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, i) => (
              <motion.span key={i} className="hero-text__word" variants={wordVariants}>
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.h1>

          <div className="hero-text__subtitle-wrapper">
            <motion.p
              className="hero-text__subtitle"
              variants={subtitleVariants}
              initial="hidden"
              animate="visible"
            >
              {intro}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroText;
