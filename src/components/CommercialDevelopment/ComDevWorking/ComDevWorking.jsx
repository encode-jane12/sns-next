"use client";
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';
import card1 from '../../../assets/images/card_buildings.png';
import card2 from '../../../assets/images/card_development.png';
import card3 from '../../../assets/images/card_infrastructure.png';
import './ComDevWorking.css';

const projects = [
  {
    id: 1,
    status: "Currently leasing",
    image: card1,
    title: "Norton Rose Fulbright Tower",
    location: "Houston, Texas",
    type: "Commercial Offices, Retail",
    size: "387,100 SF"
  },
  {
    id: 2,
    status: "Currently leasing",
    image: card2,
    title: "17xM",
    location: "Washington D.C.",
    type: "Commercial Offices, Retail",
    size: "343,500 SF"
  },
  {
    id: 3,
    status: "Currently leasing",
    image: card3,
    title: "The Eight",
    location: "Bellevue, Washington",
    type: "Commercial Offices, Retail",
    size: "554,100 SF"
  },
  {
    id: 4,
    status: "Fully leased",
    image: card1,
    title: "Capitol Tower",
    location: "Houston, Texas",
    type: "Commercial Offices",
    size: "754,000 SF"
  },
  {
    id: 5,
    status: "In development",
    image: card2,
    title: "9000 Wilshire",
    location: "Beverly Hills, California",
    type: "Commercial Offices",
    size: "50,000 SF"
  },
  {
    id: 6,
    status: "Currently leasing",
    image: card3,
    title: "Hemisphere",
    location: "Boston, Massachusetts",
    type: "Life Science, Retail",
    size: "400,000 SF"
  }
];

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill="#fff"/>
    <path d="M10 8L15 12L10 16" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill="transparent" stroke="#fff" strokeWidth="1"/>
    <path d="M14 8L9 12L14 16" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRightOutline = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill="transparent" stroke="#fff" strokeWidth="1"/>
    <path d="M10 8L15 12L10 16" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill="#fff"/>
    <path d="M12 7V17M7 12H17" stroke="#03466E" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ComDevWorking = () => {
  const trackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (trackRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
      // Calculate progress percentage 0 to 100
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  const scrollNext = () => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.children[0].offsetWidth;
      trackRef.current.scrollBy({ left: cardWidth + 32, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.children[0].offsetWidth;
      trackRef.current.scrollBy({ left: -(cardWidth + 32), behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Initial calculation
    handleScroll();
  }, []);

  return (
    <section className="com-dev-working">
      <div className="com-dev-working__container">
        {/* Header */}
        <div className="com-dev-working__header">
          <motion.h2 
            className="com-dev-working__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Spaces for working
          </motion.h2>
          <motion.div 
            className="com-dev-working__header-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="com-dev-working__intro">
              Our office properties are developed with deep understanding of end-user needs and local market conditions.
            </p>
            <Link href="/commercial-development/office" className="com-dev-working__link">
              <span>Learn more about office properties</span>
              <ArrowRight />
            </Link>
          </motion.div>
        </div>

        {/* Carousel */}
        <div className="com-dev-working__carousel-wrapper">
          <div 
            className="com-dev-working__track" 
            ref={trackRef}
            onScroll={handleScroll}
          >
            {projects.map((project, idx) => (
              <motion.div 
                key={project.id} 
                className="com-dev-working__card"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <div className="com-dev-working__card-status">
                  <span className="com-dev-working__status-dot"></span>
                  {project.status}
                </div>
                
                <div className="com-dev-working__card-image-wrapper">
                  <img src={(project.image)?.src || (project.image)} alt={project.title} className="com-dev-working__card-image" />
                </div>
                
                <div className="com-dev-working__card-content">
                  <div className="com-dev-working__card-header">
                    <h3 className="com-dev-working__card-title">{project.title}</h3>
                    <div className="com-dev-working__card-icon">
                      <PlusIcon />
                    </div>
                  </div>
                  
                  <div className="com-dev-working__card-details">
                    <p>{project.location}</p>
                    <p>{project.type}</p>
                    <p>{project.size}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="com-dev-working__controls">
          <div className="com-dev-working__progress-bar-bg">
            <div 
              className="com-dev-working__progress-bar-fill"
              style={{ width: `${Math.max(scrollProgress, 20)}%` }} // Minimum width for visual cue
            ></div>
          </div>
          
          <div className="com-dev-working__nav-buttons">
            <button className="com-dev-working__nav-btn" onClick={scrollPrev} aria-label="Previous">
              <ArrowLeft />
            </button>
            <button className="com-dev-working__nav-btn" onClick={scrollNext} aria-label="Next">
              <ArrowRightOutline />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComDevWorking;
