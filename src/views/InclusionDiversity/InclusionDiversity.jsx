"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

import './InclusionDiversity.css';

import heroImg from '../../assets/images/hero_construction.png';
import supplierImg from '../../assets/images/card_buildings.png';

import card1Img from '../../assets/images/news_1.png';
import card2Img from '../../assets/images/project_san_antonio.jpg';
import card3Img from '../../assets/images/news_2.png';

const ArrowRightCircle = () => (
  <span className="accent-circle-arrow">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
);

const ExternalLinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const InclusionDiversity = () => {
  useEffect(() => {
    document.title = 'Inclusion & Diversity | SNS Construction';
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: '...', path: null },
    { label: 'Approach', path: '/' },
    { label: 'Inclusion & Diversity', path: null },
  ];

  return (
    <div className="id-page">
      {/* Hero Section */}
      <section className="id-hero-wrapper">
        <div className="id-container">
          <div className="id-breadcrumbs">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {crumb.path ? (
                  <Link href={crumb.path} className="crumb-link">{crumb.label}</Link>
                ) : (
                  <span className="crumb-current">{crumb.label}</span>
                )}
                {idx < breadcrumbs.length - 1 && <span className="crumb-separator">→</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="id-hero-header">
            <h1 className="id-hero-title">Inclusion & Diversity</h1>
            <p className="id-hero-subtitle">
              At SNS Construction, we foster an inclusive culture where diverse perspectives drive innovation, build stronger teams, and deliver better solutions for our employees, partners, and communities.
            </p>
          </div>

          <div className="id-hero-media">
            <img src="https://images.pexels.com/photos/7495611/pexels-photo-7495611.jpeg" alt="SNS Construction Inclusion and Diversity" />
          </div>
        </div>
      </section>

      {/* Belonging Culture Section */}
      <section className="id-culture-section id-container">
        <div className="culture-grid">
          <div className="culture-left">
            <h2>Fostering a culture of belonging and mutual respect</h2>
          </div>
          <div className="culture-right">
            <p>
              Inclusion and diversity are fundamental to who we are and how we operate. By empowering diverse voices across our jobsites, offices, and supply chains, we cultivate an environment where everyone can thrive, innovate, and contribute to our collective success.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Banner Section */}
      <section className="id-pillars-banner">
        <div className="id-container pillars-inner">
          <div className="pillars-left">
            <h2>Our Inclusion & Diversity Pillars</h2>
          </div>

          <div className="pillars-right-grid">
            <div className="pillar-card">
              <h3>Inclusive Culture</h3>
              <p>Cultivating psychological safety, open dialogue, and equal opportunities across all operations and project teams.</p>
            </div>

            <div className="pillar-card">
              <h3>Diverse Representation</h3>
              <p>Recruiting, retaining, and advancing talent from underrepresented backgrounds at every organizational level.</p>
            </div>

            <div className="pillar-card">
              <h3>Supplier Diversity</h3>
              <p>Partnering with minority-owned (MBE), women-owned (WBE), and disadvantaged business enterprises (DBE).</p>
            </div>

            <div className="pillar-card">
              <h3>Community Empowerment</h3>
              <p>Supporting local workforce development, STEM education, and community-building initiatives worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ERG & Programs Section */}
      <section className="id-programs-section id-container">
        <h2 className="id-section-title">Employee Resource Groups & Initiatives</h2>

        <div className="programs-grid-4">
          <div className="program-card">
            <div className="program-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              </svg>
            </div>
            <h3>Women in Construction</h3>
            <p>Championing career growth, mentorship, and leadership pathways for women across engineering, operations, and executive leadership.</p>
          </div>

          <div className="program-card">
            <div className="program-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
              </svg>
            </div>
            <h3>Pride & Ally Network</h3>
            <p>Fostering an inclusive workplace culture that supports LGBTQ+ employees and allies through education and advocacy.</p>
          </div>

          <div className="program-card">
            <div className="program-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3>Veterans & Military Focus</h3>
            <p>Connecting military veterans with meaningful construction management, engineering, and technical trade careers.</p>
          </div>

          <div className="program-card">
            <div className="program-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
              </svg>
            </div>
            <h3>Emerging Leaders Mentorship</h3>
            <p>Pairing rising diverse talent with senior executive leaders to accelerate professional growth and career progression.</p>
          </div>
        </div>
      </section>

      {/* Supplier Diversity Section */}
      <section className="id-supplier-section id-container">
        <div className="supplier-grid">
          <div className="supplier-text-col">
            <h2 className="supplier-title">Expanding opportunities for diverse businesses</h2>
            <p className="supplier-desc">
              We actively break down barriers for small, minority, women, veteran, and LGBTQ+-owned business enterprises. Through trade contractor mentorship workshops, bonding assistance, and transparent procurement, we build sustainable supply chain capacity and help local businesses grow.
            </p>
            <Link href="/construction/approach/subcontractors-suppliers" className="supplier-link">
              Subcontractors & Suppliers <ArrowRightCircle />
            </Link>
          </div>

          <div className="supplier-image-col">
            <img src="https://images.pexels.com/photos/7710202/pexels-photo-7710202.jpeg" alt="Diverse Subcontractor Partnerships" />
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      {/* <section className="id-learn-section id-container">
        <h2 className="learn-heading">Learn more</h2>

        <div className="learn-grid-3">
          <a href="#" className="learn-card">
            <div className="learn-img-holder">
              <img src={(card1Img)?.src || (card1Img)} alt="Women in Construction Week" />
            </div>
            <div className="learn-body">
              <span className="learn-tag">INCLUSION & DIVERSITY</span>
              <h4>Celebrating Women in Construction Week across global jobsites</h4>
              <p>Spotlighting female project managers, engineers, and craft professionals who are building the future of infrastructure...</p>
            </div>
          </a>

          <a href="#" className="learn-card">
            <div className="learn-img-holder">
              <img src={(card2Img)?.src || (card2Img)} alt="Supplier diversity summit" />
            </div>
            <div className="learn-body">
              <span className="learn-tag">SUPPLIER DIVERSITY</span>
              <h4>Building economic equity through diverse procurement partnerships</h4>
              <p>How our executive mentorship program equips small and diverse contractors to win megaproject subcontracts...</p>
            </div>
          </a>

          <a href="#" className="learn-card">
            <div className="learn-img-holder">
              <img src={(card3Img)?.src || (card3Img)} alt="Inclusive jobsite culture" />
            </div>
            <div className="learn-body">
              <span className="learn-tag">CULTURE</span>
              <h4>Creating psychologically safe environments on heavy civil builds</h4>
              <p>Empowering workers to speak up, share ideas, and drive continuous improvement across jobsite safety and culture...</p>
            </div>
          </a>
        </div>
      </section> */}
    </div>
  );
};

export default InclusionDiversity;
