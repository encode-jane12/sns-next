"use client";
import Link from 'next/link';

import { motion } from 'framer-motion';
import heroBg from '../../../assets/images/hero_worker.png';
import './CareersHero.css';

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '8px' }}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CareersHero = () => {
  return (
    <section className="careers-hero" style={{ backgroundImage: `url(https://images.pexels.com/photos/9832718/pexels-photo-9832718.jpeg)` }}>
      <div className="careers-hero__overlay"></div>

      <div className="careers-hero__content">
        <motion.div 
          className="careers-hero__bottom-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="careers-hero__title-column">
            <h1 className="careers-hero__title">A world of<br/>opportunities</h1>
          </div>
          <div className="careers-hero__intro-column">
            <p className="careers-hero__intro">
              Be part of a 25,000+ team of problem-<br/>solvers, where you can learn, develop<br/>and make an impact.
            </p>
            <Link href="/careers/openings" className="btn btn-primary btn-pill">
              Search for open positions <ExternalIcon />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersHero;
