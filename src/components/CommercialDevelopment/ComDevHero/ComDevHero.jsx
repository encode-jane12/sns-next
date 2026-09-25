"use client";
import Link from 'next/link';

import { motion } from 'framer-motion';
import heroBg from '../../../assets/images/hero_airport.png';
import './ComDevHero.css';

const ComDevHero = () => {
  return (
    <section className="com-dev-hero">
      <div className="com-dev-hero__bg">
        <img src={(heroBg)?.src || (heroBg)} alt="Commercial Development" className="com-dev-hero__image" />
        <div className="com-dev-hero__overlay"></div>
      </div>
      
      <div className="com-dev-hero__content-wrapper">
        <div className="com-dev-hero__text-container">
          <motion.div 
            className="com-dev-hero__heading-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="com-dev-hero__title">Commercial Development</h1>
          </motion.div>
          <motion.div 
            className="com-dev-hero__intro-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="com-dev-hero__intro">
              Explore spaces designed to support well-being and productivity, while meeting the highest sustainability standards.
            </p>
            <Link href="/commercial-development/properties" className="com-dev-hero__cta">
              <span>Explore properties</span>
              <span className="com-dev-hero__cta-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M10 8L15 12L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComDevHero;
