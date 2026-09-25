"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

import './Resiliency.css';

import heroBg from '../../assets/images/parks_ny_climate.jpg';
import spotlightImg from '../../assets/images/project_dc_water.jpg';

import proj1 from '../../assets/images/parks_ascend.jpg';
import proj2 from '../../assets/images/project_st_nicholas.jpg';
import proj3 from '../../assets/images/parks_stpete.jpg';

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

const Resiliency = () => {
  useEffect(() => {
    document.title = 'Resiliency & Flood Infrastructure | SNS Construction';
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: '...', path: null },
    { label: 'Transportation & Infrastructure', path: '/construction' },
    { label: 'Resiliency', path: null },
  ];

  return (
    <div className="resiliency-page">
      {/* Hero Section */}
      <section className="resiliency-hero-wrapper">
        <div className="resiliency-hero-container">
          <div className="resiliency-breadcrumbs">
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

          <div className="resiliency-hero-media">
            <img src="https://images.pexels.com/photos/11258666/pexels-photo-11258666.jpeg" alt="Resiliency Infrastructure" />
            <div className="resiliency-hero-content">
              <h1 className="resiliency-hero-title">Resiliency</h1>
              <div className="resiliency-hero-card">
                <p>Constructing coastal flood barriers, storm surge protection walls, and climate-resilient urban infrastructure safeguarding communities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="resiliency-capabilities-section resiliency-container">
        <h2 className="resiliency-section-heading">Bringing knowledge and foresight to every project</h2>
        
        <div className="resiliency-capabilities-grid">
          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Coastal Storm Surge Barriers</h3>
            <p>Engineering deployable flood gates, coastal seawalls, and elevated flood protection barriers designed to withstand 100-year storm surges.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
              </svg>
            </div>
            <h3>Subterranean Stormwater Retention</h3>
            <p>Constructing large-diameter deep storage tunnels and underground retention vaults to prevent urban flash flooding.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
              </svg>
            </div>
            <h3>Critical Infrastructure Hardening</h3>
            <p>Retrofitting sub-stations, transit tunnels, and hospital mechanical plants against severe weather and rising sea levels.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
              </svg>
            </div>
            <h3>Nature-Based Living Shorelines</h3>
            <p>Combining engineered armoring with living berms, restored wetlands, and permeable waterfront parks to absorb flood energy naturally.</p>
          </div>
        </div>
      </section>

      {/* Project Spotlight Section */}
      <section className="resiliency-spotlight-section resiliency-container">
        <div className="spotlight-grid">
          <div className="spotlight-text-col">
            <h2 className="resiliency-section-heading">
              Project spotlight: East Side Coastal Resiliency (ESCR) Project, New York
            </h2>
            <p className="spotlight-desc">
              SNS Construction engineered a 2.4-mile floodwall barrier system, deployable flood gates, and raised parklands along Manhattan's East River to protect 110,000 residents from sea level rise and storm surges.
            </p>
          </div>
          <div className="spotlight-image-col">
            <img src="https://newyorkyimby.com/wp-content/uploads/2025/11/credit-Iwan-Baan-4.jpg" alt="East Side Coastal Resiliency Project" />
          </div>
        </div>
      </section>

      {/* Shaping Sustainable Places Banner */}
      <section className="resiliency-banner-section">
        <div className="resiliency-container banner-inner">
          <div className="banner-left">
            <h2>Shaping climate-resilient cities</h2>
          </div>
          <div className="banner-right">
            <p>Through Envision-certified civil engineering, green infrastructure, and adaptive flood defense systems, we protect vital communities and urban infrastructure into the 22nd century.</p>
            <Link href="/construction/expertise/sustainability" className="banner-btn">
              Sustainability <ArrowRightCircle />
            </Link>
          </div>
        </div>
      </section>

      {/* Resiliency Projects Grid */}
      <section className="resiliency-projects-section resiliency-container">
        <div className="projects-header-flex">
          <div className="projects-header-left">
            <h2 className="resiliency-section-heading">Partnering today to build the resilient cities of tomorrow</h2>
          </div>
          <div className="projects-header-right">
            <p>Delivering award-winning flood defense and climate adaptation infrastructure across coastal and urban centers.</p>
  
          </div>
        </div>

        <div className="projects-grid-3">
          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://mistosite.org.ua/uploads/ckeditor/pictures/2605/%D1%84%D0%BE%D1%82%D0%BE_%D0%B4%D0%B0%D0%BC%D0%B1.jpg" alt="Rotterdam Maritime Flood Gate Infrastructure" />
            </div>
            <div className="project-card-title-bar">
              <h3>Rotterdam Coastal Flood Gate & Barrier Infrastructure</h3>
              <ArrowRightCircle />
            </div>
          </a>

          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://media.defense.gov/2024/May/23/2003471592/-1/-1/0/240521-A-DG761-0003.JPG" alt="Rockaway Beach Boardwalk Resiliency" />
            </div>
            <div className="project-card-title-bar">
              <h3>Rockaway Coastal Wall & Raised Promenade Defense</h3>
              <ArrowRightCircle />
            </div>
          </a>

          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDrlUf23HXU-Fs8XgStXvOKK4uYOVvUE3qXWnPcnvBvXHLoED8xumFozM&s=10" alt="St. Petersburg Waterfront Revetment" />
            </div>
            <div className="project-card-title-bar">
              <h3>St. Petersburg Living Shoreline & Tidal Gate System</h3>
              <ArrowRightCircle />
            </div>
          </a>
        </div>
      </section>

      {/* Careers Banner */}
      <section className="resiliency-careers-banner">
        <div className="resiliency-container careers-inner">
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
      {/* <section className="resiliency-news-section">
        <div className="resiliency-container">
          <h2 className="news-section-title">News & Foresight</h2>

          <div className="news-grid-4">
            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news1)?.src || (news1)} alt="Envision certification in civil builds" />
              </div>
              <div className="news-body">
                <span className="news-tag">SUSTAINABILITY</span>
                <h4>Applying Envision verification to coastal flood defenses</h4>
                <p>How sustainable infrastructure rating systems guide carbon reduction and community protection in heavy civil builds...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news2)?.src || (news2)} alt="Deployable flood barrier engineering" />
              </div>
              <div className="news-body">
                <span className="news-tag">INNOVATION</span>
                <h4>Engineering automated deployable flood gates for urban centers</h4>
                <p>Utilizing hydraulic flip-up gates that automatically deploy during rising storm tides without blocking daily pedestrian paths...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news3)?.src || (news3)} alt="Nature-based living shorelines" />
              </div>
              <div className="news-body">
                <span className="news-tag">PROJECT CASE STUDY</span>
                <h4>Integrating living shorelines into urban waterfronts</h4>
                <p>Combining structural concrete seawalls with bio-engineered intertidal habitats to reduce wave impact naturally...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news4)?.src || (news4)} alt="Subterranean stormwater tunnels" />
              </div>
              <div className="news-body">
                <span className="news-tag">ENGINEERING</span>
                <h4>Deep tunnel stormwater retention for extreme weather events</h4>
                <p>Engineering multi-mile subterranean caverns to capture and store excess rainwater during cloudburst events...</p>
              </div>
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Resiliency;
