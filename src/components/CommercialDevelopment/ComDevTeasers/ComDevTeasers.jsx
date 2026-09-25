"use client";
import Link from 'next/link';

import { motion } from 'framer-motion';
import officeImg from '../../../assets/images/card_buildings.png';
import multiFamilyImg from '../../../assets/images/card_development.png';
import labImg from '../../../assets/images/card_infrastructure.png';
import './ComDevTeasers.css';

const teasers = [
  {
    id: 1,
    title: 'Offices',
    intro: 'We leverage our experience to create emerging, sustainable design solutions that enhance the tenant experience and support employee well-being.',
    image: officeImg,
    link: '/commercial-development/office'
  },
  {
    id: 2,
    title: 'Multi-family',
    intro: 'SNS Construction uses an inventive, sustainable and community-minded approach to develop multi-family environments where tenants can thrive.',
    image: multiFamilyImg,
    link: '/commercial-development/multi-family'
  },
  {
    id: 3,
    title: 'Lab & Life Science',
    intro: 'We develop high-quality lab and life science buildings that support innovation, scalability and long-term asset performance.',
    image: labImg,
    link: '/commercial-development/properties'
  }
];

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill="#FF2828"/>
    <path d="M10 8L15 12L10 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ComDevTeasers = () => {
  return (
    <section className="com-dev-teasers">
      <div className="com-dev-teasers__container">
        <div className="com-dev-teasers__header">
          <h2 className="com-dev-teasers__heading">What we develop</h2>
          <p className="com-dev-teasers__intro">
            We've delivered 27 projects across our global commercial development markets since 2009.
          </p>
        </div>

        <div className="com-dev-teasers__grid">
          {teasers.map((teaser, idx) => (
            <motion.div 
              key={teaser.id} 
              className="com-dev-teasers__card-wrapper"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <Link href={teaser.link} className="com-dev-teasers__card">
                <div className="com-dev-teasers__image-wrapper">
                  <img src={(teaser.image)?.src || (teaser.image)} alt={teaser.title} className="com-dev-teasers__image" />
                </div>
                <div className="com-dev-teasers__text-wrapper">
                  <div className="com-dev-teasers__card-heading-container">
                    <h3 className="com-dev-teasers__card-title">{teaser.title}</h3>
                    <div className="com-dev-teasers__card-icon">
                      <ArrowIcon />
                    </div>
                  </div>
                  <p className="com-dev-teasers__card-intro">{teaser.intro}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComDevTeasers;
