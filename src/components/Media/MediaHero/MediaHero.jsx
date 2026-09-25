"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

import heroBg from '../../../assets/images/card_buildings.png';
import './MediaHero.css';

const MediaHero = () => {
  return (
    <>
    <section className="media-hero" style={{ backgroundImage: `url(https://images.pexels.com/photos/3944460/pexels-photo-3944460.jpeg)` }}>
      <div className="media-hero__overlay"></div>

      <div className="media-hero__content">
        <motion.div 
          className="media-hero__bottom-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="media-hero__title-column">
            <h1 className="media-hero__title">Media</h1>
          </div>
          <div className="media-hero__intro-column">
            <p className="media-hero__intro">
              Welcome to your official source for corporate news and updates about SNS Construction.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
    
    <div className="media-breadcrumbs">
      <div className="media-breadcrumbs__container">
        <Link href="/">Home</Link>
        <span className="media-breadcrumbs__separator">
          <svg viewBox="0 0 32 32" width="16" height="16">
            <path fill="currentColor" d="M18.933 4H16.4l8.555 11H4v2h20.955L16.4 28h2.534l9.333-12z"></path>
          </svg>
        </span>
        <span aria-current="page">News & Media</span>
      </div>
    </div>
    </>
  );
};

export default MediaHero;
