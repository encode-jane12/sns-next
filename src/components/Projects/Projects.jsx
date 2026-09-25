"use client";
import './Projects.css';
import { motion } from 'framer-motion';

import imgFeatured from '../../assets/images/card_buildings.png';
import img1 from '../../assets/images/hero_construction.png';
import img2 from '../../assets/images/card_development.png';
import img3 from '../../assets/images/card_infrastructure.png';
import Link from 'next/link';


const ArrowCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#FF2828"/>
    <path d="M10 8L15 12L10 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Projects = () => {
  return (
    <section className="projects">
      <motion.div 
        className="projects__container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="projects__grid">
          
          {/* Top Left: Text Block */}
          <motion.div className="projects__text-block" variants={fadeUpVariants}>
            <h2 className="projects__heading">Explore our world class projects</h2>
            <p className="projects__desc">
              Across sectors and markets, our world-class projects enable customers to deliver essential services and create lasting value for society.
            </p>
            <Link href={"construction/expertise/megaprojects"} className="projects__inline-link">
              Discover our portfolio <ArrowCircleIcon />
            </Link>
          </motion.div>

          {/* Top Right: Featured Project */}
          <motion.div className="projects__featured" variants={fadeUpVariants}>
            <div className="projects__image-wrapper">
              <img src="https://i.ibb.co/C5ZW3cyS/Mumbai-Ahemdabad-High-Speed-rail.png" alt="Mumbai Ahemdabad High Speed Rail" />
            </div>
            <a href="#" className="projects__project-link">
              <span className="projects__project-title">Mumbai Ahemdabad High Speed Rail</span>
              {/* <ArrowCircleIcon /> */}
            </a>
          </motion.div>

          {/* Bottom Row: 3 Projects */}
          <motion.div className="projects__item" variants={fadeUpVariants}>
            <div className="projects__image-wrapper">
              <img src="https://i.ibb.co/XxM8Tq21/California-High-Speed-Rail-CAHSR.png" alt="California High-Speed Rail (CAHSR)" />
            </div>
            <a href="#" className="projects__project-link">
              <span className="projects__project-title">California High-Speed Rail (CAHSR)</span>
              {/* <ArrowCircleIcon /> */}
            </a>
          </motion.div>

          <motion.div className="projects__item" variants={fadeUpVariants}>
            <div className="projects__image-wrapper">
              <img src="https://i.ibb.co/spfsDLZG/Expansion-of-Yamama-Oil-Gas-Facilities.png" alt="Expansion of Yamama Oil & Gas Facilities" />
            </div>
            <a href="#" className="projects__project-link">
              <span className="projects__project-title">Expansion of Yamama Oil & Gas Facilities</span>
              {/* <ArrowCircleIcon /> */}
            </a>
          </motion.div>

          <motion.div className="projects__item" variants={fadeUpVariants}>
            <div className="projects__image-wrapper">
              <img src="https://i.ibb.co/WT5qfPS/Lucknow-metro-phase-2.png" alt="Lucknow metro phase 2" />
            </div>
            <a href="#" className="projects__project-link">
              <span className="projects__project-title">Lucknow Metro Phase 2</span>
              {/* <ArrowCircleIcon /> */}
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
