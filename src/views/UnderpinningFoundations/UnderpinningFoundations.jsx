"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

import './UnderpinningFoundations.css';

import heroBg from '../../assets/images/st_rd.png';
import spotlightImg from '../../assets/images/project_st_nicholas.jpg';

import proj1 from '../../assets/images/project_confidential.jpg';
import proj2 from '../../assets/images/project_nycedc.jpg';
import proj3 from '../../assets/images/project_durham_pac.jpg';

import news1 from '../../assets/images/news_1.png';
import news2 from '../../assets/images/news_2.png';
import news3 from '../../assets/images/news_3.png';
import news4 from '../../assets/images/history_hero.jpg';

const ArrowRightCircle = () => (
  <span className="">
    ✅
  </span>
);

const ExternalLinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const UnderpinningFoundations = () => {
  useEffect(() => {
    document.title = 'Underpinning & Deep Foundations | SNS Construction';
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: '...', path: null },
    { label: 'Transportation & Infrastructure', path: '/construction' },
    { label: 'Underpinning & Foundations', path: null },
  ];

  return (
    <div className="foundations-page">
      {/* Hero Section */}
      <section className="foundations-hero-wrapper">
        <div className="foundations-hero-container">
          <div className="foundations-breadcrumbs">
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

          <div className="foundations-hero-media">
            <img src={(heroBg)?.src || (heroBg)} alt="Underpinning & Foundations Infrastructure" />
            <div className="foundations-hero-content">
              <h1 className="foundations-hero-title">Underpinning & Foundations</h1>
              <div className="foundations-hero-card">
                <p>Executing complex deep foundation systems, structural underpinning, micropiling, and slurry wall excavation for critical infrastructure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="foundations-capabilities-section foundations-container">
        <h2 className="foundations-section-heading">Bringing knowledge and foresight to every project</h2>
        
        <div className="foundations-capabilities-grid">
          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
              </svg>
            </div>
            <h3>Slurry Wall & Diaphragm Wall Construction</h3>
            <p>Constructing deep watertight reinforced concrete diaphragm walls to support deep urban basement excavations.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3>Structural Pit Underpinning & Micropiling</h3>
            <p>Installing high-capacity steel casing micropiles and jacked pile underpinning beneath historic or adjacent structures.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
            </div>
            <h3>Large Diameter Drilled Shafts (Caissons)</h3>
            <p>Drilling high-tonnage rock-socketed caissons up to 4 meters in diameter for high-rise towers and heavy bridges.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Tieback Anchors & Secant Pile Walls</h3>
            <p>Installing high-tensile strand tieback anchors and interlocking secant piles to provide excavation support in weak soils.</p>
          </div>
        </div>
      </section>

      {/* Project Spotlight Section */}
      <section className="foundations-spotlight-section foundations-container">
        <div className="spotlight-grid">
          <div className="spotlight-text-col">
            <h2 className="foundations-section-heading">
              Project spotlight: St. Nicholas Greek Orthodox Church & WTC Underpinning
            </h2>
            <p className="spotlight-desc">
              SNS Construction engineered complex deep micropile underpinning and reinforced concrete foundation pads beneath the historic Santiago Calatrava-designed church over the World Trade Center vehicle security center.
            </p>

          </div>
          <div className="spotlight-image-col">
            <img src="https://dims.apnews.com/dims4/default/6e26c67/2147483647/strip/false/crop/3000x2000+0+0/resize/980x653!/quality/90/?url=https%3A%2F%2Fstorage.googleapis.com%2Fafs-prod%2Fmedia%2F3240786373b64b608ce27570a57aff4f%2F3000.jpeg" alt="St. Nicholas WTC Underpinning Project" />
          </div>
        </div>
      </section>

      {/* Shaping Sustainable Places Banner */}
      <section className="foundations-banner-section">
        <div className="foundations-container banner-inner">
          <div className="banner-left">
            <h2>Shaping sustainable foundation engineering</h2>
          </div>
          <div className="banner-right">
            <p>Integrating low-carbon cement grouts, zero-discharge polymer slurry systems, and real-time automated optical vibration monitoring to protect urban structures.</p>
            <Link href="/construction/expertise/sustainability" className="banner-btn">
              Sustainability <ArrowRightCircle />
            </Link>
          </div>
        </div>
      </section>

      {/* Foundations Projects Grid */}
      <section className="foundations-projects-section foundations-container">
        <div className="projects-header-flex">
          <div className="projects-header-left">
            <h2 className="foundations-section-heading">Partnering today to build the foundations of tomorrow</h2>
          </div>
          <div className="projects-header-right">
            <p>Executing ground engineering solutions for iconic towers, transit hubs, and heavy civil structures worldwide.</p>

          </div>
        </div>

        <div className="projects-grid-3">
          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://i0.wp.com/www.thetransportpolitic.com/wp-content/uploads/2015/07/hudson.jpg?fit=1200%2C799&ssl=1" alt="Hudson Yards Diaphragm Wall Execution" />
            </div>
            <div className="project-card-title-bar">
              <h3>Hudson Yards Slurry Wall & Deep Caisson Foundation</h3>
              <ArrowRightCircle />
            </div>
          </a>

          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://www.newyorkando.com/wp-content/uploads/sites/7/2022/03/GRAND-CENTRAL-Metlife-Chrysler-AHM-M.jpg" alt="Grand Central Terminal Underpinning" />
            </div>
            <div className="project-card-title-bar">
              <h3>Grand Central Terminal Historic Underpinning</h3>
              <ArrowRightCircle />
            </div>
          </a>

          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://www.tjpa.org/files/styles/small_100_1x/public/images/2023-03/transit-hero.jpg?itok=0ggF6sOJ" alt="Transbay Transit Center Deep Pit Support" />
            </div>
            <div className="project-card-title-bar">
              <h3>Transbay Transit Center 60-Foot Deep Pit Support Wall</h3>
              <ArrowRightCircle />
            </div>
          </a>
        </div>
      </section>

      {/* Careers Banner */}
      <section className="foundations-careers-banner">
        <div className="foundations-container careers-inner">
          <div className="careers-left">
            <h2>Build your career with us.</h2>
          </div>
          <div className="careers-right">
            <p>Explore opportunities across markets and business units.</p>
            <Link href="/careers" className="btn-accent-pill careers-btn">
              Open positions <ExternalLinkIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* News & Foresight Section */}
      {/* <section className="foundations-news-section">
        <div className="foundations-container">
          <h2 className="news-section-title">News & Foresight</h2>

          <div className="news-grid-4">
            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news1)?.src || (news1)} alt="Polymer slurry in deep foundation drilling" />
              </div>
              <div className="news-body">
                <span className="news-tag">INNOVATION</span>
                <h4>Synthetic polymer slurries in deep diaphragm wall excavation</h4>
                <p>Improving excavation stability and recycling slurry fluids to eliminate bentonite waste disposal...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news2)?.src || (news2)} alt="Real-time automated vibration monitoring" />
              </div>
              <div className="news-body">
                <span className="news-tag">TECHNOLOGY</span>
                <h4>Automated optical & vibration telemetry in sensitive underpinning</h4>
                <p>Monitoring millimeter-level ground movements continuously to protect adjacent historic structures...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news3)?.src || (news3)} alt="Micropile load testing" />
              </div>
              <div className="news-body">
                <span className="news-tag">PROJECT CASE STUDY</span>
                <h4>High-capacity micropile load testing in dense urban fills</h4>
                <p>Verifying double-corrosion-protected steel casing load capacities up to 400 tons...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news4)?.src || (news4)} alt="Low-carbon foundation grouting" />
              </div>
              <div className="news-body">
                <span className="news-tag">SUSTAINABILITY</span>
                <h4>Decarbonizing deep foundation grouting mixes</h4>
                <p>Utilizing alkali-activated slag and pozzolanic additives to achieve high compressive strengths with minimal cement...</p>
              </div>
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default UnderpinningFoundations;
