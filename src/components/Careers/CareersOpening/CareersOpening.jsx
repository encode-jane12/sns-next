"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

import './CareersOpening.css';

const jobOpenings = [
  {
    id: 1,
    title: "Senior Project Manager - Commercial Construction",
    location: "New York, USA",
    date: "August 12, 2026"
  },
  {
    id: 2,
    title: "Sustainability Engineer",
    location: "Stockholm, Sweden",
    date: "August 10, 2026"
  },
  {
    id: 3,
    title: "BIM Coordinator",
    location: "London, UK",
    date: "August 08, 2026"
  },
  {
    id: 4,
    title: "Health & Safety Director",
    location: "Warsaw, Poland",
    date: "August 05, 2026"
  },
  {
    id: 5,
    title: "Estimator - Civil Infrastructure",
    location: "Seattle, USA",
    date: "August 01, 2026"
  }
];

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CareersOpening = () => {
  return (
    <section className="careers-opening">
      <div className="careers-opening__container">
        
        <div className="careers-opening__header">
          <div className="careers-opening__header-left">
            <h2 className="careers-opening__heading">
              Open positions across the GLOBE
            </h2>
          </div>
          <div className="careers-opening__header-right">
            <p className="careers-opening__intro">
              From coast to coast and across borders, we're delivering projects that transport, energize and connect communities. Find jobs in your preferred location.
            </p>
          </div>
        </div>

        <div className="careers-opening__list">
          {jobOpenings.map((job, index) => (
            <motion.div 
              key={job.id}
              className="careers-opening__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href="/careers/openings" className="careers-opening__item-link">
                <div className="careers-opening__item-info">
                  <h3 className="careers-opening__item-title">{job.title}</h3>
                  <div className="careers-opening__item-meta">
                    <span className="careers-opening__item-location">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {job.location}
                    </span>
                    <span className="careers-opening__item-date">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      {job.date}
                    </span>
                  </div>
                </div>
                <div className="careers-opening__item-action">
                  <span className="careers-opening__item-view">View details</span>
                  <div className="careers-opening__item-icon">
                    <ArrowRight />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="careers-opening__footer">
          <Link href="/careers/openings" className="btn btn-primary">
            View all global openings
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CareersOpening;
