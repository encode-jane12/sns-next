"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

import './Bridges.css';

import heroBg from '../../assets/images/hero_construction.png';
import spotlightImg from '../../assets/images/card_infrastructure.png';

import proj1 from '../../assets/images/card_buildings.png';
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

const Bridges = () => {
  useEffect(() => {
    document.title = 'Bridges | SNS Construction';
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: '...', path: null },
    { label: 'Transportation & Infrastructure', path: '/construction' },
    { label: 'Bridges', path: null },
  ];

  return (
    <div className="bridges-page">
      {/* Hero Section */}
      <section className="bridges-hero-wrapper">
        <div className="bridges-hero-container">
          <div className="bridges-breadcrumbs">
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

          <div className="bridges-hero-media">
            <img src={(spotlightImg)?.src || (spotlightImg)} alt="Bridges Infrastructure" />
            <div className="bridges-hero-content">
              <h1 className="bridges-hero-title">Bridges</h1>
              <div className="bridges-hero-card">
                <p>Building landmark spans and complex marine foundations that connect communities and keep commerce moving safely.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="bridges-capabilities-section bridges-container">
        <h2 className="bridges-section-heading">Bringing knowledge and foresight to every project</h2>
        
        <div className="bridges-capabilities-grid">
          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Managing complex logistics and marine operations</h3>
            <p>We navigate environmental regulations, active shipping channels and challenging marine environments to deliver complex bridge foundations and substructures safely.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3>Accelerating construction through prefabrication</h3>
            <p>By leveraging heavy-lift engineering, offsite steel fabrication and precast concrete modularization, we minimize traffic disruptions and streamline erection schedules.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3>Extending structural lifespan and resilience</h3>
            <p>Our engineering approach incorporates high-performance materials, corrosion protection systems and seismic-resistant designs to ensure long-term structural integrity.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3>Prioritizing public safety and traffic flow</h3>
            <p>Through meticulous maintenance-of-traffic (MOT) planning and phased erection strategies, we maintain continuous public transit and vehicular access throughout construction.</p>
          </div>
        </div>
      </section>

      {/* Project Spotlight Section */}
      <section className="bridges-spotlight-section bridges-container">
        <div className="spotlight-grid">
          <div className="spotlight-text-col">
            <h2 className="bridges-section-heading">
              Project spotlight: Pensacola Bay Bridge Replacement
            </h2>
            <p className="spotlight-desc">
              Our team engineered and constructed dual 3-mile, multi-lane cable-stayed structures across Pensacola Bay, improving regional traffic capacity, navigation safety, and hurricane resilience.
            </p>
            {/* <a href="#" className="spotlight-link">
              View project <ArrowRightCircle />
            </a> */}
          </div>
          <div className="spotlight-image-col">
            <img src="https://i.ibb.co/PsW8dCNb/Pensacola-Bay-Bridge-Replacement.jpg" alt="Pensacola Bay Bridge Replacement" />
          </div>
        </div>
      </section>

      {/* Shaping Sustainable Places Banner */}
      <section className="bridges-banner-section">
        <div className="bridges-container banner-inner">
          <div className="banner-left">
            <h2>Shaping sustainable infrastructure</h2>
          </div>
          <div className="banner-right">
            <p>By integrating low-carbon concrete mixes, recyclable structural steel, and habitat-friendly marine foundations, we build resilient bridge infrastructure designed to withstand climate impacts for generations.</p>
            <Link href="/construction/expertise/sustainability" className="banner-btn">
              Sustainability <ArrowRightCircle />
            </Link>
          </div>
        </div>
      </section>

      {/* Bridges Portfolio Grid */}
      <section className="bridges-projects-section bridges-container">
        <div className="projects-header-flex">
          <div className="projects-header-left">
            <h2 className="bridges-section-heading">Partnering today to build the bridges of tomorrow</h2>
          </div>
          <div className="projects-header-right">
            <p>SNS Construction has engineered and erected over 100 landmark bridges, viaducts, and elevated transit structures across major global transportation corridors.</p>
            {/* <a href="#" className="portfolio-link">
              Bridges portfolio <ArrowRightCircle />
            </a> */}
          </div>
        </div>

        <div className="projects-grid-3">
          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://images.pexels.com/photos/19099247/pexels-photo-19099247.jpeg" alt="Portage Bay Bridge & Spokane Street Viaduct" />
            </div>
            <div className="project-card-title-bar">
              <h3>Portage Bay Bridge & Spokane Street Viaduct Replacement</h3>
              <ArrowRightCircle />
            </div>
          </a>

          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq5l9T5DPaZykjnB9fpVj3fEPJS_G6m99mdPs20BWiz1SwmEvzMokdzTSW&s=10" alt="Kosciuszko Bridge Replacement" />
            </div>
            <div className="project-card-title-bar">
              <h3>Kosciuszko Bridge Replacement (Phase 1 & 2), New York</h3>
              <ArrowRightCircle />
            </div>
          </a>

          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://www.gpinet.com/wp-content/uploads/2026/06/FP-Bayonne-Bridge-BBCNP-1024x683.jpg" alt="Bayonne Bridge Navigational Clearance" />
            </div>
            <div className="project-card-title-bar">
              <h3>Bayonne Bridge Navigational Clearance Program</h3>
              <ArrowRightCircle />
            </div>
          </a>
        </div>
      </section>

      {/* Careers Banner */}
      <section className="bridges-careers-banner">
        <div className="bridges-container careers-inner">
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
      {/* <section className="bridges-news-section">
        <div className="bridges-container">
          <h2 className="news-section-title">News & Foresight</h2>

          <div className="news-grid-4">
            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news1)?.src || (news1)} alt="Engineering long-span cable-stayed bridges" />
              </div>
              <div className="news-body">
                <span className="news-tag">PROJECT CASE STUDY</span>
                <h4>Engineering long-span cable-stayed bridges</h4>
                <p>Modern bridge design requires ultra-precise tensioning, advanced wind-tunnel modeling, and real-time structural health monitoring...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news2)?.src || (news2)} alt="Low-carbon concrete in marine builds" />
              </div>
              <div className="news-body">
                <span className="news-tag">SUSTAINABILITY</span>
                <h4>Low-carbon concrete in heavy civil marine builds</h4>
                <p>Utilizing ground granulated blast-furnace slag and silica fume to reduce embodied carbon while enhancing long-term marine durability...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news3)?.src || (news3)} alt="Accelerated Bridge Construction" />
              </div>
              <div className="news-body">
                <span className="news-tag">INNOVATION</span>
                <h4>Accelerated Bridge Construction (ABC) methodologies</h4>
                <p>Modular precast pier caps and self-propelled modular transporters (SPMTs) dramatically cut highway construction timelines...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news4)?.src || (news4)} alt="The New Kosciuszko Bridge" />
              </div>
              <div className="news-body">
                <span className="news-tag">PROJECT CASE STUDY</span>
                <h4>The New Kosciuszko Bridge: Modern engineering landmark</h4>
                <p>Replacing a historic truss bridge with twin cable-stayed spans over Newtown Creek, unlocking vital transport efficiency...</p>
              </div>
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Bridges;
