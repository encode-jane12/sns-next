"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

import './TransitRail.css';

import heroBg from '../../assets/images/hero_airport.png';
import spotlightImg from '../../assets/images/project_nycedc.jpg';

import proj1 from '../../assets/images/project_st_nicholas.jpg';
import proj2 from '../../assets/images/project_confidential.jpg';
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

const TransitRail = () => {
  useEffect(() => {
    document.title = 'Transit & Rail Infrastructure | SNS Construction';
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: '...', path: null },
    { label: 'Transportation & Infrastructure', path: '/construction' },
    { label: 'Transit & Rail', path: null },
  ];

  return (
    <div className="transit-page">
      {/* Hero Section */}
      <section className="transit-hero-wrapper">
        <div className="transit-hero-container">
          <div className="transit-breadcrumbs">
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

          <div className="transit-hero-media">
            <img src="https://images.pexels.com/photos/8859644/pexels-photo-8859644.jpeg" alt="Transit & Rail Infrastructure" />
            <div className="transit-hero-content">
              <h1 className="transit-hero-title">Transit & Rail</h1>
              <div className="transit-hero-card">
                <p>Constructing high-speed rail corridors, commuter rail expansions, subway stations, and automated people movers worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="transit-capabilities-section transit-container">
        <h2 className="transit-section-heading">Bringing knowledge and foresight to every project</h2>
        
        <div className="transit-capabilities-grid">
          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                <line x1="2" y1="10" x2="22" y2="10"></line>
              </svg>
            </div>
            <h3>Underground Station Caverns & Cut-and-Cover</h3>
            <p>Mining multi-floor underground passenger stations, concourses, and ventilation structures in dense urban corridors.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
              </svg>
            </div>
            <h3>Systems Integration & Electrification</h3>
            <p>Installing overhead catenary systems (OCS), traction power substations, automated train control (CBTC), and third-rail electrification.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
              </svg>
            </div>
            <h3>Trackwork & Guideway Construction</h3>
            <p>Laying direct-fixation slab track, ballasted continuous welded rail (CWR), and precast elevated guideway spans.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Zero-Disruption Operations Support</h3>
            <p>Coordinating major station modernizations and track cut-ins during overnight windows without suspending revenue passenger service.</p>
          </div>
        </div>
      </section>

      {/* Project Spotlight Section */}
      <section className="transit-spotlight-section transit-container">
        <div className="spotlight-grid">
          <div className="spotlight-text-col">
            <h2 className="transit-section-heading">
              Project spotlight: Second Avenue Subway Phase 1 Extension, NYC
            </h2>
            <p className="spotlight-desc">
              SNS Construction excavated three massive cavern stations, installed systems and trackwork, and constructed 2 miles of twin-tube subway tunnels for New York City's landmark transit expansion.
            </p>

          </div>
          <div className="spotlight-image-col">
            <img src="https://theechohsmse.com/wp-content/uploads/2023/12/72-st-entrance-1-1-1200x900.jpg" alt="Second Avenue Subway Extension" />
          </div>
        </div>
      </section>

      {/* Shaping Sustainable Places Banner */}
      <section className="transit-banner-section">
        <div className="transit-container banner-inner">
          <div className="banner-left">
            <h2>Shaping green public mobility</h2>
          </div>
          <div className="banner-right">
            <p>Connecting urban centers through zero-emission electric mass transit networks, reducing reliance on personal vehicles and cutting regional greenhouse gas emissions.</p>
            <Link href="/construction/expertise/sustainability" className="banner-btn">
              Sustainability <ArrowRightCircle />
            </Link>
          </div>
        </div>
      </section>

      {/* Transit Projects Grid */}
      <section className="transit-projects-section transit-container">
        <div className="projects-header-flex">
          <div className="projects-header-left">
            <h2 className="transit-section-heading">Partnering today to build the transit systems of tomorrow</h2>
          </div>
          <div className="projects-header-right">
            <p>Delivering over 500 track-miles of high-speed rail, light rail, and subway networks across North America, Europe, and Asia.</p>

          </div>
        </div>

        <div className="projects-grid-3">
          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://www.hntb.com/wp-content/uploads/2025/02/Lynnwood-Link-hero-updated-1.jpg" alt="Linnanmaa Light Rail Transit System" />
            </div>
            <div className="project-card-title-bar">
              <h3>Linnanmaa Light Rail Line Extension & Station Hubs</h3>
              <ArrowRightCircle />
            </div>
          </a>

          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://www.traylor.com/wp2/wp-content/uploads/2017/03/D_10007.jpg" alt="Los Angeles Regional Connector Transit" />
            </div>
            <div className="project-card-title-bar">
              <h3>Regional Connector Transit Alignment & Cavern Stations</h3>
              <ArrowRightCircle />
            </div>
          </a>

          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://grn.ams3.digitaloceanspaces.com/wp-content/uploads/2021/06/WEB-LEAD-Colne-Valley-Viaduct-1280-x-720.jpg" alt="High Speed 2 (HS2) Rail Substructure" />
            </div>
            <div className="project-card-title-bar">
              <h3>HS2 High-Speed Rail Viaducts & Track Substructures</h3>
              <ArrowRightCircle />
            </div>
          </a>
        </div>
      </section>

      {/* Careers Banner */}
      <section className="transit-careers-banner">
        <div className="transit-container careers-inner">
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
      {/* <section className="transit-news-section">
        <div className="transit-container">
          <h2 className="news-section-title">News & Foresight</h2>

          <div className="news-grid-4">
            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news1)?.src || (news1)} alt="CBTC automated signal systems" />
              </div>
              <div className="news-body">
                <span className="news-tag">TECHNOLOGY</span>
                <h4>Communications-Based Train Control (CBTC) in modern subways</h4>
                <p>How digital moving-block signaling increases train frequency and capacity safely...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news2)?.src || (news2)} alt="Direct fixation slab track design" />
              </div>
              <div className="news-body">
                <span className="news-tag">INNOVATION</span>
                <h4>Vibration-dampened direct-fixation slab track in urban tunnels</h4>
                <p>Engineering floating concrete slabs with resilient fasteners to isolate ground-borne noise...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news3)?.src || (news3)} alt="High speed rail civil works" />
              </div>
              <div className="news-body">
                <span className="news-tag">PROJECT CASE STUDY</span>
                <h4>Executing sub-millimeter tolerances on high-speed rail guideways</h4>
                <p>A look at automated track-geometry measurement during continuous welded rail installation...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news4)?.src || (news4)} alt="Decarbonizing mass transit" />
              </div>
              <div className="news-body">
                <span className="news-tag">SUSTAINABILITY</span>
                <h4>Decarbonizing public transit construction lifecycles</h4>
                <p>Integrating green concrete mixes and electric jobsite machinery in heavy underground rail builds...</p>
              </div>
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default TransitRail;
