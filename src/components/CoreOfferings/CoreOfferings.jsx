"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import './CoreOfferings.css';

import cardBuildings from '../../assets/images/card_buildings.png';
import cardInfrastructure from '../../assets/images/card_infrastructure.png';
import cardDevelopment from '../../assets/images/card_development.png';
import cardCareers from '../../assets/images/card_careers.png';
import Link from 'next/link';


const offerings = [
  { title: 'Buildings', image: cardBuildings, url: 'commercial-offices' },
  { title: 'Transportation & Infrastructure', image: cardInfrastructure, url: 'construction/transportation-infrastructure/bridges' },
  { title: 'Commercial development', image: cardDevelopment, url: 'commercial-development' },
  { title: 'Careers', image: cardCareers, url: 'careers' },
];

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="13 6 19 12 13 18" />
  </svg>
);

const CoreOfferings = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.section
      className="core-offerings"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="core-offerings__heading">Our core offerings</h2>

      <div className="core-offerings__cards">
        {offerings.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={item.title}
              className={`core-offerings__card${isActive ? ' core-offerings__card--active' : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              role="button"
              tabIndex={0}
              aria-expanded={isActive}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveIndex(index);
                }
              }}
            >
              <img
                className="core-offerings__card-image"
                src={(item.image)?.src || (item.image)}
                alt={item.title}
                loading="lazy"
              />
              <div className="core-offerings__card-overlay" />

              <div className="core-offerings__card-content">
                <h5 className="core-offerings__card-title">{item.title}</h5>
                <Link href={item.url} className="core-offerings__arrow">
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default CoreOfferings;
