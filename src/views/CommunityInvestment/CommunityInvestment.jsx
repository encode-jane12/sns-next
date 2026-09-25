"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

import './CommunityInvestment.css';

import heroImg from '../../assets/images/parks_hero.jpg';
import resilienceImg from '../../assets/images/parks_stpete.jpg';

import card1Img from '../../assets/images/parks_ny_climate.jpg';
import card2Img from '../../assets/images/project_st_nicholas.jpg';
import card3Img from '../../assets/images/project_wake_county.jpg';
import card4Img from '../../assets/images/news_2.png';

const ArrowRightCircle = () => (
  <span className="accent-circle-arrow">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
);

const CommunityInvestment = () => {
  useEffect(() => {
    document.title = 'Community Investment | SNS Construction';
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: '...', path: null },
    { label: 'Approach', path: '/' },
    { label: 'Community Investment', path: null },
  ];

  return (
    <div className="community-page">
      {/* Hero Section */}
      <section className="community-hero-wrapper">
        <div className="community-container">
          <div className="community-breadcrumbs">
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

          <div className="community-hero-header">
            <h1 className="community-hero-title">Community Investment</h1>
            <p className="community-hero-subtitle">
              We deliver a proven community investment approach grounded in authentic engagement and partnerships—building trust, strengthening community resilience and aligning with local priorities to create lasting economic opportunity.
            </p>
          </div>

          <div className="community-hero-media">
            <img src={(heroImg)?.src || (heroImg)} alt="SNS Construction Community Engagement" />
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="community-approach-section community-container">
        <div className="approach-grid">
          <div className="approach-left-col">
            <h2 className="approach-section-label">Our approach</h2>
          </div>

          <div className="approach-right-grid">
            {/* Capability 1 */}
            <div className="approach-card">
              <div className="approach-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v12M15 9.5a2.5 2.5 0 0 0-5 0c0 2 3 2.5 3 4.5a2.5 2.5 0 0 1-5 0"></path>
                </svg>
              </div>
              <h3>Strengthening local economies</h3>
              <p>By hiring locally and partnering with small and diverse businesses, we help grow local economies and the communities where we work.</p>
            </div>

            {/* Capability 2 */}
            <div className="approach-card">
              <div className="approach-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3>Championing education and skills development</h3>
              <p>Through education partnerships and skills-building programs, we prepare the next generation for long-term careers in our industry and beyond.</p>
            </div>

            {/* Capability 3 */}
            <div className="approach-card">
              <div className="approach-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Creating authentic partnerships</h3>
              <p>We engage openly with communities to understand local priorities and partner on solutions that respond to real needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner Section */}
      <section className="community-stats-banner">
        <div className="community-container stats-inner">
          <div className="stats-left">
            <h2>Community-connected leadership</h2>
          </div>
          <div className="stats-right-grid">
            <div className="stat-card">
              <span className="stat-value">$3.2M</span>
              <span className="stat-label">donated to our communities in 2025</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">$335K</span>
              <span className="stat-label">gifts in kind in 2025</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">11,504</span>
              <span className="stat-label">employee volunteer hours in 2025</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">$3.7M</span>
              <span className="stat-label">total value to the community in 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Community Resilience Section */}
      <section className="community-resilience-section community-container">
        <div className="resilience-grid">
          <div className="resilience-text-col">
            <h2 className="resilience-title">Community resilience</h2>
            <p className="resilience-desc">
              We build community resilience by listening first, engaging openly with communities to understand local priorities and working alongside our partners to deliver solutions that create lasting value. Our commitment extends beyond project completion, helping communities thrive over the long term. In addition to creating healthy, sustainable spaces and planning for future needs, we partner with organizations, cities and governments to shape places and infrastructure that deliver net-positive social and environmental impact.
            </p>
          </div>
          <div className="resilience-image-col">
            <img src={(resilienceImg)?.src || (resilienceImg)} alt="Community resilience and sustainable parkland" />
          </div>
        </div>
      </section>

      {/* Learn More / Foresight Section */}
      {/* <section className="community-learn-section community-container">
        <div className="learn-header-flex">
          <h2 className="learn-title">Learn more</h2>
        </div>

        <div className="learn-grid-4">
          <a href="#" className="learn-card">
            <div className="learn-img-wrapper">
              <img src={(card1Img)?.src || (card1Img)} alt="Aviation and community infrastructure" />
            </div>
            <div className="learn-body">
              <span className="learn-tag">SUSTAINABILITY</span>
              <h4>The next era of aviation starts on the ground</h4>
              <p>Aviation is one of the most transformative innovations in modern history. What began as an extraordinary feat of engineering has evolved into the backbone of global...</p>
            </div>
          </a>

          <a href="#" className="learn-card">
            <div className="learn-img-wrapper">
              <img src={(card2Img)?.src || (card2Img)} alt="Historic Riverside Hospital renovation" />
            </div>
            <div className="learn-body">
              <span className="learn-tag">PROJECT CASE STUDY</span>
              <h4>Renovating Houston's historic Riverside Hospital</h4>
              <p>In the heart of Houston's Third Ward, a major transformation is underway. SNS Construction is partnering with Harris County to revamp the historic Riverside Hospital, a site that was...</p>
            </div>
          </a>

          <a href="#" className="learn-card">
            <div className="learn-img-wrapper">
              <img src={(card3Img)?.src || (card3Img)} alt="Navigating tariffs in construction" />
            </div>
            <div className="learn-body">
              <span className="learn-tag">PROJECT CASE STUDY</span>
              <h4>Building beyond barriers: Navigating tariffs to ensure...</h4>
              <p>Navigating market volatility and tariffs can cause added stress and concern to construction budgets, especially in the education sector. SNS Construction's Orlando team...</p>
            </div>
          </a>

          <a href="#" className="learn-card">
            <div className="learn-img-wrapper">
              <img src={(card4Img)?.src || (card4Img)} alt="Collaborating to advance jobsite safety" />
            </div>
            <div className="learn-body">
              <span className="learn-tag">SAFETY</span>
              <h4>Collaborating to advance jobsite safety: SNS Construction...</h4>
              <p>Across SNS Construction, knowledge sharing fuels our continuous improvement journey. In the realm of health and safety, enterprise-wide sharing of best practices, technologies and daily...</p>
            </div>
          </a>
        </div>
      </section> */}
    </div>
  );
};

export default CommunityInvestment;
