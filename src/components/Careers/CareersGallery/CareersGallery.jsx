"use client";
import Link from 'next/link';

import { motion } from 'framer-motion';
import img1 from '../../../assets/images/card_buildings.png';
import img2 from '../../../assets/images/card_development.png';
import img3 from '../../../assets/images/card_infrastructure.png';
import './CareersGallery.css';

const careerAreas = [
  {
    title: "Operations",
    image: "https://images.pexels.com/photos/32845663/pexels-photo-32845663.jpeg",
    intro: "Bring complex projects to life, delivering safe and sustainable construction that shapes the communities where we live and work."
  },
  {
    title: "Operations Support",
    image: "https://images.pexels.com/photos/37797428/pexels-photo-37797428.jpeg",
    intro: "Pave the way for greater impact by supporting teams with the coordination and expertise that keep projects moving."
  },
  {
    title: "Professional Services",
    image: "https://images.pexels.com/photos/6592700/pexels-photo-6592700.jpeg",
    intro: "Develop new solutions and provide expertise that help SNS Construction improve how we work and deliver impact beyond our lifetime."
  },
  {
    title: "Commercial Development",
    image:"https://images.pexels.com/photos/16764815/pexels-photo-16764815.jpeg",
    intro: "Apply creative thinking to create smarter spaces to live, work and connect, helping bring ideas from development through delivery."
  },
  {
    title: "Early Careers & Internships",
    image: "https://images.pexels.com/photos/19895868/pexels-photo-19895868.jpeg",
    intro: "Start your career with hands-on experience, mentorship, and the opportunity to make a real impact from day one."
  }
];

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill="#FF2828"/>
    <path d="M10 8L15 12L10 16" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CareersGallery = () => {
  return (
    <section className="careers-gallery">
      <div className="careers-gallery__breadcrumbs-wrapper">
        <div className="careers-gallery__breadcrumbs">
          <Link href="/">Home</Link>
          <span className="careers-gallery__breadcrumb-separator">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span aria-current="page">Careers</span>
        </div>
      </div>

      <div className="careers-gallery__container">
        
        <div className="careers-gallery__left">
          <div className="careers-gallery__sticky-content">
            <h2 className="careers-gallery__heading">Areas where you can make a difference</h2>
            <p className="careers-gallery__intro">
              At SNS Construction, we shape the way people live, work and connect, through construction and development projects. Here you'll find a wide range of opportunities. Which one fits you?
            </p>
            <Link href="/careers/openings" className="careers-gallery__link">
              <span>Search all jobs</span>
              <ArrowRight />
            </Link>
          </div>
        </div>

        <div className="careers-gallery__right">
          <div className="careers-gallery__grid">
            {careerAreas.map((area, index) => (
              <motion.div 
                key={index}
                className="careers-gallery__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="careers-gallery__card-image-wrapper">
                  <img src={(area.image)?.src || (area.image)} alt={area.title} className="careers-gallery__card-image" />
                </div>
                <div className="careers-gallery__card-content">
                  <div className="careers-gallery__card-header">
                    <h3 className="careers-gallery__card-title">{area.title}</h3>
                    <ArrowRight />
                  </div>
                  <p className="careers-gallery__card-intro">{area.intro}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CareersGallery;
