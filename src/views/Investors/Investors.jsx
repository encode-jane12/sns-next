"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import './Investors.css';

import heroBg from '../../assets/images/project_datacenter_hyperscale.jpg';
import ceoImg from '../../assets/images/bryan_northrop.jpg';
import exploreImg1 from '../../assets/images/card_buildings.png';
import exploreImg2 from '../../assets/images/card_infrastructure.png';
import exploreImg3 from '../../assets/images/project_datacenter_colocation.jpg';
import contactImg1 from '../../assets/images/christopher_westley.png';
import contactImg2 from '../../assets/images/mendy_mazzo.jpg';

const teaserSlides = [
  {
    id: 1,
    heading: 'SNS Construction interim report second quarter 2026 has been published.',
    meta: 'Published on July 17 at 7:30 AM CEST',
  },
  {
    id: 2,
    heading: 'Press and telephone conference on SNS interim report second quarter 2026.',
    meta: 'Held on Aug 26 at 5:00 PM CEST',
  },
];

function Investors() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teaserSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teaserSlides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teaserSlides.length) % teaserSlides.length);
  };

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Investors', path: null },
  ];

  return (
    <div className="investors-page">
      {/* Hero Section */}
      <section className="investors-hero-section">
        <div className="investors-hero-bg">
          <img src={(heroBg)?.src || (heroBg)} alt="Creating long-term value" />
        </div>
        <div className="investors-hero-content investors-container">
          <div className="investors-hero-bottom-grid">
            <div className="investors-hero-heading-col">
              <h1>Creating long-term value</h1>
            </div>
            <div className="investors-hero-text-col">
              <p>Our unique combination of global experience, local expertise and financial strength have empowered us to shape societies around the world for nearly 42 years. Creating long-term value for our customers, shareholders and society at large.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="investors-breadcrumbs investors-container">
        {breadcrumbs.map((crumb, idx) => (
          <React.Fragment key={idx}>
            {crumb.path ? (
              <Link href={crumb.path} className="crumb-link">{crumb.label}</Link>
            ) : (
              <span className="crumb-current">{crumb.label}</span>
            )}
            {idx < breadcrumbs.length - 1 && <span className="crumb-separator">/</span>}
          </React.Fragment>
        ))}
      </div>

      <section className="investors-intro-section investors-container">
        <div className="investors-intro-grid">
          <div className="investors-intro-left">
            <h2>Discipline, commitment and strength</h2>
          </div>
          <div className="investors-intro-right">
            <p className="investors-intro-text">
              As a global leader in construction, project development and property asset management, we combine expertise from the entire value chain with our quality properties to generate stable returns over time. With our disciplined approach to risk and capital allocation, and our commitment to sustainability, we are positioned to deliver long-term value for shareholders and customers.
            </p>
          </div>
        </div>
      </section>

      {/* Teaser Box */}
      <section className="investors-teaser-section investors-container">
        <div 
          className="investors-teaser-box"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="teaser-content">
            <h3 className="teaser-heading fade-in-text" key={teaserSlides[currentSlide].id}>
              {teaserSlides[currentSlide].heading}
            </h3>
            <div className="teaser-meta">
              <p className="fade-in-text" key={`meta-${teaserSlides[currentSlide].id}`}>
                {teaserSlides[currentSlide].meta}
              </p>
            </div>
          </div>
          <div className="teaser-footer">
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ 
                  width: `${((currentSlide + 1) / teaserSlides.length) * 100}%`,
                  transition: 'width 0.4s ease'
                }}
              ></div>
            </div>
            <div className="teaser-controls">
              <button 
                className="control-btn prev"
                onClick={handlePrevSlide}
                aria-label="Previous teaser"
              >
                ←
              </button>
              <button 
                className="control-btn next"
                onClick={handleNextSlide}
                aria-label="Next teaser"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="investors-ceo-section investors-container">
        <div className="ceo-left">
          <h2>The CEO comments on our latest quarter</h2>
          <p>"We have delivered consistent and strong results in Construction for many years, and our record order backlog is a testament to successful positioning in robust markets with good structural demand." - Robert V. Sterling, CEO</p>
          <a href="#" className="investors-link-with-icon">
            Interim reports
            <span className="arrow-circle">→</span>
          </a>
        </div>
        <div className="ceo-right">
          <img src="https://i.ibb.co/VcDSPc9t/stephen-dawson-qwt-Ce-J5c-LYs-unsplash.jpg" alt="--" className="ceo-image" />
        </div>
      </section>

      {/* Highlights Section */}
      <section className="investors-highlights-section">
        <div className="investors-container">
          <h2 className="investors-highlights-title">Highlights Q2 2026</h2>
          <div className="investors-highlights-grid">
            <div className="highlight-item">
              <p className="highlight-label">Operating margin* – Construction</p>
              <p className="highlight-value">4.3%</p>
            </div>
            <div className="highlight-item">
              <p className="highlight-label">ROCE* - Project Development</p>
              <p className="highlight-value">1.3%</p>
            </div>
            <div className="highlight-item">
              <p className="highlight-label">ROCE* - Investment Properties</p>
              <p className="highlight-value">4.8%</p>
            </div>
            <div className="highlight-item">
              <p className="highlight-label">Return on equity*</p>
              <p className="highlight-value">10.8%</p>
            </div>
          </div>
          <p className="highlight-disclaimer">*Rolling-12 months basis</p>
        </div>
      </section>

      {/* Updates Section */}
      <section className="investors-updates-section investors-container">
        <div className="updates-sidebar">
          <h2>Stay up to date</h2>
        </div>
        <div className="updates-grid">
          <div className="update-column">
            <h3>Financial reports</h3>
            <ul className="update-list">
              <li>
                <span className="update-date">2026-07-17, 07:30 CEST</span>
                <a href="#">Q2 2026 interim report (2 mb) ↓</a>
              </li>
              <li>
                <span className="update-date">2026-05-07, 07:30 CEST</span>
                <a href="#">Q1 2026 interim report (3 mb) ↓</a>
              </li>
              <li>
                <span className="update-date">2026-02-06, 07:30 CET</span>
                <a href="#">Q4 2025 year-end report (2 mb) ↓</a>
              </li>
            </ul>
            <a href="#" className="investors-link-with-icon small">
              All financial reports <span className="arrow-circle">→</span>
            </a>
          </div>

          <div className="update-column">
            <h3>Share price</h3>
            <div className="share-price-box">
              <div className="share-main">
                <span className="share-val">268</span>
                <span className="share-curr">SEK</span>
              </div>
              <p className="share-label">Price</p>
              <div className="share-change">
                <span className="change-val">+0.56 %</span>
                <span className="change-icon">↗</span>.
              </div>
              <p className="share-label">Change</p>
              <p className="share-date">12 August at 13:47 CEST</p>
            </div>
          </div>

          <div className="update-column">
            <h3>Latest press releases</h3>
            <ul className="update-list press-list">
              <li>
                <span className="press-tag">PRESS RELEASE</span>
                <span className="update-date">2026-08-12, 08:00 CEST</span>
                <a href="#">SNS Construction signs additional contract for medical office building in Durham, NC, USA, for USD 68M, about SEK 630M</a>
              </li>
              <li>
                <span className="press-tag">PRESS RELEASE</span>
                <span className="update-date">2026-08-12, 07:30 CEST</span>
                <a href="#">SNS Construction to build Public Works Operations Campus for City of Vancouver, WA, USA, for USD 64M, about SEK 600M</a>
              </li>
              <li>
                <span className="press-tag">PRESS RELEASE</span>
                <span className="update-date">2026-08-05, 07:30 CEST</span>
                <a href="#">SNS Construction reconstructs 14 km motorway section near Prague, Czechia for CZK 757M, about SEK 340M</a>
              </li>
            </ul>
            <a href="#" className="investors-link-with-icon small">
              All press releases <span className="arrow-circle">→</span>
            </a>
          </div>

          <div className="update-column">
            <h3>Calendar</h3>
            <ul className="update-list cal-list">
              <li>
                <span className="update-date icon-date">1 OCTOBER</span>
                <p>Silent period</p>
              </li>
              <li>
                <span className="update-date icon-date">5 NOVEMBER</span>
                <a href="#">Interim report third quarter 2026</a>
              </li>
              <li>
                <span className="update-date icon-date">5 NOVEMBER</span>
                <p>Press- and audio conference Interim report third quarter 2026</p>
              </li>
            </ul>
            <a href="#" className="investors-link-with-icon small">
              Calendar <span className="arrow-circle">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="investors-learn-more-section investors-container">
        <div className="learn-left">
          <h2>Learn more about SNS Construction</h2>
        </div>
        <div className="learn-right">
          <a href="#" className="learn-card">
            <div className="learn-card-content">
              <span className="learn-icon">📰</span>
              <div>
                <h4>News and Foresight</h4>
                <p>Internal link</p>
              </div>
            </div>
            <span className="arrow-circle">→</span>
          </a>
          <a href="#" className="learn-card">
            <div className="learn-card-content">
              <span className="learn-icon">🏢</span>
              <div>
                <h4>About us</h4>
                <p>Internal link</p>
              </div>
            </div>
            <span className="arrow-circle">→</span>
          </a>
        </div>
      </section>

      {/* Explore Section */}
      <section className="investors-explore-section investors-container">
        <h2>Highlights: SNS Construction as an investment</h2>
        <div className="explore-grid">
          <div className="explore-card text-only">
            <div className="explore-card-header">
              <h3>Invest in SNS Construction</h3>
              <span className="arrow-circle">→</span>
            </div>
            <p>Invest in a strong and resilient business built for long-term value creation.</p>
             <img src="https://i.ibb.co/1ttC416S/long-term-value-creation.jpg" alt="SNS Construction share" />
          </div>
          <div className="explore-card">
            <div className="explore-card-header">
              <h3>Financial information</h3>
              <span className="arrow-circle">→</span>
            </div>
            <p>In this section you will find summaries of our financial data, as well as information about order bookings, investments and divestments.</p>
            <img src="https://i.ibb.co/TDwkfP07/shareholder-structure.jpg" alt="Financial information" />
          </div>
          <div className="explore-card">
            <div className="explore-card-header">
              <h3>SNS Construction share</h3>
              <span className="arrow-circle">→</span>
            </div>
            <p>In this section you will find more information about the SNS Construction share and the shareholder structure.</p>
            <img src="https://i.ibb.co/ycYSpmnR/order-bookings-investments-and-divestments.jpg" alt="SNS Construction share" />
          </div>
          <div className="explore-card">
            <div className="explore-card-header">
              <h3>Corporate Governance</h3>
              <span className="arrow-circle dark">→</span>
            </div>
            <p>Strong corporate governance underpins everything we do. It guides how we make decisions, manage risks, and create long-term value – always with transparency and...</p>
            <img src="https://i.ibb.co/K863psk/Corporate-Governance.jpg" alt="Corporate Governance" />
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      {/* <section className="investors-contacts-section investors-container">
        <div className="contacts-left">
          <h2>Investor Relations contacts</h2>
          <p>Are you interested in learning more about investing in SNS Construction? Our team can provide you with additional information on the company, including details of our upcoming events and copies of reports.</p>
        </div>
        <div className="contacts-right">
          <div className="contact-person">
            <img src={(contactImg1)?.src || (contactImg1)} alt="Antonia Junelind" />
            <h4>Antonia Junelind</h4>
            <p>Senior Vice President Investor Relations</p>
            <a href="mailto:email@example.com" className="contact-link">✉ Email</a>
            <a href="tel:+46104486261" className="contact-link">📞 +46 10 448 62 61</a>
          </div>
          <div className="contact-person">
            <img src={(contactImg2)?.src || (contactImg2)} alt="Annika Winlund" />
            <h4>Annika Winlund</h4>
            <p>Investor Relations Officer</p>
            <a href="mailto:email@example.com" className="contact-link">✉ Email</a>
            <a href="tel:+46104492628" className="contact-link">📞 +46 10 449 26 28</a>
          </div>
        </div>
      </section> */}

      {/* IR Team Section */}
      <section className="investors-team-section investors-container">
        <div className="team-left">
          <h2>Contact the IR team</h2>
        </div>
        <div className="team-right">
          <h4>General IR contact</h4>
          <p>For general questions, please get in touch through our team mailbox.</p>
          <a href="#" className="btn-accent-pill">Get in touch</a>
        </div>
      </section>

      {/* Brief Banner */}
      <section className="investors-brief-banner">
        <div className="brief-container investors-container">
          <h2>SNS Construction in brief</h2>
          <div className="brief-right">
            <p>Gain a quick overview of the SNS Construction Group and our performance.</p>
            <a href="#" className="btn-accent-pill">SNS Construction in brief →</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Investors;
