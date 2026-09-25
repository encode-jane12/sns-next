"use client";
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';
import card1 from '../../../assets/images/card_buildings.png';
import card2 from '../../../assets/images/card_development.png';
import card3 from '../../../assets/images/card_infrastructure.png';
import './ComDevLiving.css';

const projects = [
  {
    id: 1,
    status: "Currently leasing",
    image: card1,
    title: "OZMA",
    location: "Washington D.C.",
    type: "Multi-family, Retail",
    size: "208,700 SF"
  },
  {
    id: 2,
    status: "Currently leasing",
    image: card2,
    title: "Kaye",
    location: "Seattle, Washington",
    type: "Multi-family, Retail",
    size: "258,400 SF"
  },
  {
    id: 3,
    status: "Currently leasing",
    image: card3,
    title: "Heming",
    location: "McLean, Virginia",
    type: "Multi-family, Retail",
    size: "38,000 SF"
  },
  {
    id: 4,
    status: "Fully leased",
    image: card1,
    title: "The Morrow",
    location: "Seattle, Washington",
    type: "Multi-family",
    size: "300,000 SF"
  },
  {
    id: 5,
    status: "In development",
    image: card2,
    title: "Solis",
    location: "Seattle, Washington",
    type: "Multi-family",
    size: "150,000 SF"
  },
  {
    id: 6,
    status: "Currently leasing",
    image: card3,
    title: "Aura",
    location: "Boston, Massachusetts",
    type: "Multi-family, Retail",
    size: "200,000 SF"
  }
];

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill="#FF2828"/>
    <path d="M10 8L15 12L10 16" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowLeftOutline = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill="transparent" stroke="#03466E" strokeWidth="1"/>
    <path d="M14 8L9 12L14 16" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRightOutline = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill="transparent" stroke="#03466E" strokeWidth="1"/>
    <path d="M10 8L15 12L10 16" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill="#FF2828"/>
    <path d="M12 7V17M7 12H17" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ComDevLiving = () => {
  const trackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (trackRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
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
    handleScroll();
  }, []);

  return (
    <section className="com-dev-living">
      <div className="com-dev-living__container">
        {/* Header */}
        <div className="com-dev-living__header">
          <motion.h2 
            className="com-dev-living__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Spaces for living
          </motion.h2>
          <motion.div 
            className="com-dev-living__header-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="com-dev-living__intro">
              We develop amenity-rich environments for commercial properties and multi-family residences with great attention to detail.
            </p>
            <Link href="/commercial-development/multi-family" className="com-dev-living__link">
              <span>Learn more about multi-family properties</span>
              <ArrowRight />
            </Link>
          </motion.div>
        </div>

        {/* Carousel */}
        <div className="com-dev-living__carousel-wrapper">
          <div 
            className="com-dev-living__track" 
            ref={trackRef}
            onScroll={handleScroll}
          >
            {projects.map((project, idx) => (
              <motion.div 
                key={project.id} 
                className="com-dev-living__card"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <div className="com-dev-living__card-status">
                  <span className="com-dev-living__status-dot"></span>
                  {project.status}
                </div>
                
                <div className="com-dev-living__card-image-wrapper">
                  <img src={(project.image)?.src || (project.image)} alt={project.title} className="com-dev-living__card-image" />
                </div>
                
                <div className="com-dev-living__card-content">
                  <div className="com-dev-living__card-header">
                    <h3 className="com-dev-living__card-title">{project.title}</h3>
                    <div className="com-dev-living__card-icon">
                      <PlusIcon />
                    </div>
                  </div>
                  
                  <div className="com-dev-living__card-details">
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
        <div className="com-dev-living__controls">
          <div className="com-dev-living__progress-bar-bg">
            <div 
              className="com-dev-living__progress-bar-fill"
              style={{ width: `${Math.max(scrollProgress, 20)}%` }}
            ></div>
          </div>
          
          <div className="com-dev-living__nav-buttons">
            <button className="com-dev-living__nav-btn" onClick={scrollPrev} aria-label="Previous">
              <ArrowLeftOutline />
            </button>
            <button className="com-dev-living__nav-btn" onClick={scrollNext} aria-label="Next">
              <ArrowRightOutline />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComDevLiving;
