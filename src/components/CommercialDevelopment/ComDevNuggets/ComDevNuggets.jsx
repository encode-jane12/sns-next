"use client";
import { motion } from 'framer-motion';
import './ComDevNuggets.css';

const BuildingLeafIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M10 26V12h4v14M14 26V16h4v10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 12c0-3 3-5 5-5s4 2 4 6-3 7-9 7" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 7c-1.5 1.5-2 4-2 4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CertificateIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M10 6h12v14H10z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 10h6M13 14h6" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="22" cy="20" r="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 23l-2 5 4-2 4 2-2-5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CityIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 26V12h5v14M13 26V8h6v18M19 26v-14h5v14" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HandCoinIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="16" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 9v6M14 11h4M14 13h4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 22c2 4 6 5 10 5s8-1 10-4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 20c2 2 5 2 8 2s5-1 7-3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const nuggets = [
  {
    icon: <BuildingLeafIcon />,
    text: "Sustainable spaces that reduce operational costs while supporting healthier employees."
  },
  {
    icon: <CertificateIcon />,
    text: "High-performance spaces with 25+ projects certified under systems such as LEED®, WELL™ and Fitwel®."
  },
  {
    icon: <CityIcon />,
    text: "8+ million square feet of sustainable office, multi-family and lab properties in Boston, Houston, Seattle and Washington, D.C. since 2009."
  },
  {
    icon: <HandCoinIcon />,
    text: "Integrated approach ensuring quality, reliability and long-term value."
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const ComDevNuggets = () => {
  return (
    <section className="com-dev-nuggets">
      <div className="com-dev-nuggets__container">
        <div className="com-dev-nuggets__left">
          <h2 className="com-dev-nuggets__heading">Performance with purpose</h2>
        </div>
        <div className="com-dev-nuggets__right">
          <motion.div 
            className="com-dev-nuggets__grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {nuggets.map((nugget, idx) => (
              <motion.div key={idx} className="com-dev-nuggets__item" variants={itemVariants}>
                <div className="com-dev-nuggets__icon">
                  {nugget.icon}
                </div>
                <p className="com-dev-nuggets__text">{nugget.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComDevNuggets;
