"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

import './DeliveryMethods.css';

import heroImg from '../../assets/images/hero_worker.png';

import card1Img from '../../assets/images/parks_ny_climate.jpg';
import card2Img from '../../assets/images/sports_alamodome.jpg';
import card3Img from '../../assets/images/news_1.png';
import card4Img from '../../assets/images/news_2.png';

const ArrowRightCircle = () => (
  <span className="accent-circle-arrow">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
);

const DeliveryMethods = () => {
  useEffect(() => {
    document.title = 'Delivery Methods | SNS Construction';
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: '...', path: null },
    { label: 'Approach', path: '/' },
    { label: 'Delivery Methods', path: null },
  ];

  return (
    <div className="delivery-page">
      {/* Hero Section */}
      <section className="delivery-hero-wrapper">
        <div className="delivery-container">
          <div className="delivery-breadcrumbs">
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

          <div className="delivery-hero-header">
            <h1 className="delivery-hero-title">Delivery Methods</h1>
          </div>

          <div className="delivery-hero-media">
            <img src="https://images.pexels.com/photos/8989470/pexels-photo-8989470.jpeg" alt="SNS Construction Project Delivery Methods" />
          </div>
        </div>
      </section>

      {/* Overview & Delivery Method Stats Section */}
      <section className="delivery-stats-section delivery-container">
        <div className="delivery-stats-grid">
          {/* Left Description */}
          <div className="delivery-desc-col">
            <p className="delivery-intro-text">
              With more than 135 years of experience, SNS Construction brings expertise across a range of delivery methods, helping customers choose the approach that best fits each project. From early planning through completion, we focus on collaboration, efficiency and the outcomes that matter most.
            </p>
          </div>

          {/* Right Stats Grid */}
          <div className="delivery-metrics-grid">
            <div className="delivery-metric-card">
              <span className="metric-number">400+</span>
              <span className="metric-label">Program management projects</span>
            </div>

            <div className="delivery-metric-card">
              <span className="metric-number">250+</span>
              <span className="metric-label">Continuing contract projects</span>
            </div>

            <div className="delivery-metric-card">
              <span className="metric-number">115+</span>
              <span className="metric-label">Construction Manager/General Contractor (CM/GC) projects</span>
            </div>

            <div className="delivery-metric-card">
              <span className="metric-number">1,100+</span>
              <span className="metric-label">Construction Manager at Risk (CMAR) projects</span>
            </div>

            <div className="delivery-metric-card">
              <span className="metric-number">25+</span>
              <span className="metric-label">Integrated Project Delivery (IPD) projects</span>
            </div>

            <div className="delivery-metric-card">
              <span className="metric-number">515+</span>
              <span className="metric-label">Design-build projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Delivery Models Comparison Section */}
      <section className="delivery-models-section delivery-container">
        <h2 className="delivery-section-title">Our Primary Delivery Models</h2>
        <div className="models-grid">
          <div className="model-card">
            <h3>Design-Build (DB)</h3>
            <span className="model-subtitle">Single-Point Responsibility</span>
            <p>Under a single contract, we coordinate both the architectural design and the physical construction phases. This integrated workflow reduces design changes, eliminates finger-pointing, and significantly accelerates schedule timelines through overlapping phases.</p>
            <ul className="model-benefits">
              <li>Shorter overall project schedules</li>
              <li>Minimal owner administrative burden</li>
              <li>Early cost guarantees</li>
            </ul>
          </div>

          <div className="model-card">
            <h3>Construction Manager at Risk (CMAR)</h3>
            <span className="model-subtitle">Collaborative & Open-Book</span>
            <p>We join during the design phase to provide key constructability input, cost estimating, and sequencing reviews. We then commit to delivering the project under a Guaranteed Maximum Price (GMP), giving owners financial security and open-book cost transparency.</p>
            <ul className="model-benefits">
              <li>Early identification of design conflicts</li>
              <li>Shared cost savings</li>
              <li>Reduced risk of change orders</li>
            </ul>
          </div>

          <div className="model-card">
            <h3>Integrated Project Delivery (IPD)</h3>
            <span className="model-subtitle">Multi-Party Alliance</span>
            <p>Owner, architect, and builder sign a single joint contract, aligning goals and sharing risks and rewards. IPD maximizes efficiency and collaboration from day one, leveraging the collective intelligence of the entire project coalition.</p>
            <ul className="model-benefits">
              <li>Highly collaborative team dynamic</li>
              <li>Joint risk pool & shared incentives</li>
              <li>Millimeter-level design alignment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Choosing the Right Method Section */}
      <section className="delivery-selection-section">
        <div className="delivery-container">
          <div className="selection-grid">
            <div className="selection-left">
              <h2>Determining the Right Delivery Method</h2>
              <p>Choosing the correct delivery method is a strategic decision that shapes the entire project lifecycle. We evaluate four critical parameters to advise owners on the best model for their needs:</p>
            </div>
            
            <div className="selection-right">
              <div className="selection-factor">
                <h4>01. Scope Clarity</h4>
                <p>If the project scope is highly defined at inception, a traditional CMAR or Design-Build path works well. For evolving programs, a collaborative CM/GC model allows flexibility as designs mature.</p>
              </div>
              <div className="selection-factor">
                <h4>02. Risk Profile</h4>
                <p>We analyze whether the owner wishes to retain control over design decisions (CMAR) or transfer design-related risks to a single-point entity (Design-Build).</p>
              </div>
              <div className="selection-factor">
                <h4>03. Schedule Urgency</h4>
                <p>When speed-to-market is the primary objective, Design-Build allows construction to begin on early foundation packages while upper-floor designs are still being completed.</p>
              </div>
              <div className="selection-factor">
                <h4>04. Cost Certainty</h4>
                <p>For strict public budgets, early pricing commitments via CMAR or fixed-price Design-Build establish a clear ceiling, preventing cost overruns.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Foresight Section */}
      {/* <section className="delivery-news-section">
        <div className="delivery-container">
          <div className="news-section-header">
            <h2 className="news-section-title">News & Foresight</h2>
          </div>

          <div className="news-grid-4">
            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(card1Img)?.src || (card1Img)} alt="Aviation ground infrastructure" />
              </div>
              <div className="news-body">
                <span className="news-tag">SUSTAINABILITY</span>
                <h4>The next era of aviation starts on the ground</h4>
                <p>Aviation is one of the most transformative innovations in modern history. What began as an extraordinary feat of engineering has evolved into the backbone of global...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(card2Img)?.src || (card2Img)} alt="Stadium transformation project" />
              </div>
              <div className="news-body">
                <span className="news-tag">PROJECT CASE STUDY</span>
                <h4>Behind the transformation: How MetLife Stadium...</h4>
                <p>When millions of fans around the world tuned in to watch the World Cup Final at MetLife Stadium, they saw the world's biggest sporting event unfold on soccer's grandest...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(card3Img)?.src || (card3Img)} alt="Next generation on the jobsite" />
              </div>
              <div className="news-body">
                <span className="news-tag">PEOPLE SHOWCASE</span>
                <h4>The next generation has entered the jobsite</h4>
                <p>Construction is evolving fast — from AI and digital tools to sustainability expectations and new workforce priorities. Today's interns, digital natives stepping onto jobsites across...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(card4Img)?.src || (card4Img)} alt="Lessons from career in construction" />
              </div>
              <div className="news-body">
                <span className="news-tag">PEOPLE SHOWCASE</span>
                <h4>Lessons from a 41-year career in construction</h4>
                <p>After a 41-year career in construction, SNS Construction leadership reflects on the lessons that shaped his leadership, the people who influenced him and why he remains optimistic...</p>
              </div>
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default DeliveryMethods;
