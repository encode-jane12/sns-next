"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

import './CareersLifeAt.css';

const HeartPulseIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572" />
    <path d="M3 13h2.5l2-4 3 9 2.5-6 2 4h3" strokeWidth="1.2" />
  </svg>
);

const HandCoinIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
    <path d="M12 14v4" />
    <path d="M10 16h4" />
    <path d="M9 13.5l-4-2c-1.1-.55-2.5-.55-3.5.2" />
    <path d="M21.5 12c-.5-1.5-2-2.5-4-2" />
    <path d="M18 10V6c0-1.1-.9-2-2-2H6C4.9 4 4 4.9 4 6v8" />
  </svg>
);

const PeopleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const TrainingIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M8 21h8"></path>
    <path d="M12 17v4"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const ArrowRightCircle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#ffffff"/>
    <path d="M10 8L15 12L10 16" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const lifeData = [
  {
    id: 1,
    title: "Inclusive benefits for your overall wellbeing",
    icon: <HeartPulseIcon />,
    link: "/careers/benefits"
  },
  {
    id: 2,
    title: "Competitive pay and incentive programs",
    icon: <HandCoinIcon />,
    link: "/careers/benefits"
  },
  {
    id: 3,
    title: "Diverse employee communities",
    icon: <PeopleIcon />,
    link: "/careers/diversity"
  },
  {
    id: 4,
    title: "Extensive training and development programs",
    icon: <TrainingIcon />,
    link: "/careers/training"
  }
];

const CareersLifeAt = () => {
  return (
    <section className="careers-life-at">
      <div className="careers-life-at__container">
        
        <div className="careers-life-at__header">
          <div className="careers-life-at__header-left">
            <h2 className="careers-life-at__heading">
              Imagine life at SNS Construction
            </h2>
          </div>
          <div className="careers-life-at__header-right">
            <p className="careers-life-at__intro">
              No matter your career stage, there's a place here for you to thrive and partner with us in shaping how our world lives, moves and connects.
            </p>
          </div>
        </div>

        <div className="careers-life-at__grid">
          {lifeData.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={item.link} className="careers-life-at__card">
                <div className="careers-life-at__card-icon">
                  {item.icon}
                </div>
                
                <div className="careers-life-at__card-bottom">
                  <h3 className="careers-life-at__card-title">{item.title}</h3>
                  <div className="careers-life-at__card-arrow">
                    <ArrowRightCircle />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CareersLifeAt;
