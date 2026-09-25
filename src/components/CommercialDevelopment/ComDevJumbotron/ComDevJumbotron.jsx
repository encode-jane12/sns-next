"use client";
import Link from 'next/link';

import { motion } from 'framer-motion';
import jumbotronImg from '../../../assets/images/card_buildings.png';
import './ComDevJumbotron.css';

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill="#FF2828"/>
    <path d="M10 8L15 12L10 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ComDevJumbotron = () => {
  return (
    <section className="com-dev-jumbotron">
      <div className="com-dev-jumbotron__container">
        <motion.div 
          className="com-dev-jumbotron__left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="com-dev-jumbotron__heading">Sustainability & innovation</h2>
          <p className="com-dev-jumbotron__intro">
            At SNS Construction, we shape sustainable places to support healthy living beyond our lifetime. We implement climate-smart solutions at each stage of the project lifecycle, while contributing to the development of local communities.
          </p>
          <Link href="/" className="com-dev-jumbotron__link">
            <span>More on sustainability & innovation</span>
            <div className="com-dev-jumbotron__link-icon">
              <ArrowIcon />
            </div>
          </Link>
        </motion.div>

        <motion.div 
          className="com-dev-jumbotron__right"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="com-dev-jumbotron__image-wrapper">
            <img src={(jumbotronImg)?.src || (jumbotronImg)} alt="Sustainability & innovation" className="com-dev-jumbotron__image" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComDevJumbotron;
