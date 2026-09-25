"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

import './Dams.css';

import heroBg from '../../assets/images/project_dc_water.jpg';
import spotlightImg from '../../assets/images/project_cold_spring.jpg';

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

const Dams = () => {
  useEffect(() => {
    document.title = 'Dams & Hydro Infrastructure | SNS Construction';
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: '...', path: null },
    { label: 'Transportation & Infrastructure', path: '/construction' },
    { label: 'Dams', path: null },
  ];

  return (
    <div className="dams-page">
      {/* Hero Section */}
      <section className="dams-hero-wrapper">
        <div className="dams-hero-container">
          <div className="dams-breadcrumbs">
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

          <div className="dams-hero-media">
            <img src={(heroBg)?.src || (heroBg)} alt="Dams & Hydro Infrastructure" />
            <div className="dams-hero-content">
              <h1 className="dams-hero-title">Dams</h1>
              <div className="dams-hero-card">
                <p>Building heavy hydro infrastructure, spillways, and dam rehabilitation projects that safeguard water supply and generate clean energy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="dams-capabilities-section dams-container">
        <h2 className="dams-section-heading">Bringing knowledge and foresight to every project</h2>
        
        <div className="dams-capabilities-grid">
          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3>Water Resource Governance</h3>
            <p>Managing reservoir capacity, flow control, and environmental compliance during high-capacity dam construction.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Structural Rehabilitation</h3>
            <p>Extending the operational life of aging dams using deep gantry grouting and post-tensioned anchor systems.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <h3>Hydropower Integration</h3>
            <p>Constructing powerhouse civil works, penstocks, and turbine foundations for renewable energy generation.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <h3>Emergency Spillway Engineering</h3>
            <p>Designing high-velocity auxiliary spillways and stilling basins to handle extreme flood events safely.</p>
          </div>
        </div>
      </section>

      {/* Project Spotlight Section */}
      <section className="dams-spotlight-section dams-container">
        <div className="spotlight-grid">
          <div className="spotlight-text-col">
            <h2 className="dams-section-heading">
              Project spotlight: Wanapum Dam Spillway Structural Enhancement
            </h2>
            <p className="spotlight-desc">
              Our team executed deep post-tensioning anchors and structural concrete reinforcement across the Wanapum Dam spillway, restoring full hydro-generation capacity while maintaining active Columbia River flow control.
            </p>
          </div>
          <div className="spotlight-image-col">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-lj7TnyTs5jkbEXxAaoTYFf-jjNI-KJ9J7CR7Cbulm94HOmnOZj2cOQ&s=10" alt="Wanapum Dam Spillway Enhancement" />
          </div>
        </div>
      </section>

      {/* Shaping Sustainable Places Banner */}
      <section className="dams-banner-section">
        <div className="dams-container banner-inner">
          <div className="banner-left">
            <h2>Shaping sustainable water infrastructure</h2>
          </div>
          <div className="banner-right">
            <p>By deploying low-carbon mass concrete placements, aquatic passage channels, and real-time dam safety telemetry, we safeguard vital clean water and energy resources for future generations.</p>
            <Link href="/construction/expertise/sustainability" className="banner-btn">
              Sustainability <ArrowRightCircle />
            </Link>
          </div>
        </div>
      </section>

      {/* Dam Portfolio Grid */}
      <section className="dams-projects-section dams-container">
        <div className="projects-header-flex">
          <div className="projects-header-left">
            <h2 className="dams-section-heading">Partnering today to build the dams of tomorrow</h2>
          </div>
          <div className="projects-header-right">
            <p>SNS Construction has engineered and rehabilitated over 35 major dams and hydroelectric structures worldwide.</p>
          </div>
        </div>

        <div className="projects-grid-3">
          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://capbr.r9-asce.org/wp-content/uploads/sites/49/2021/05/Folsom-Aux.-SP-looking-NE.png.webp" alt="Folsom Dam Auxiliary Spillway" />
            </div>
            <div className="project-card-title-bar">
              <h3>Folsom Dam Auxiliary Spillway Control Structure</h3>
              <ArrowRightCircle />
            </div>
          </a>

          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtJoA0Ir5LfOar0TpCbX9bSyQYH0DHQDr1HLnW5R8A3zcxQ1RcjAm8Rc&s=10" alt="Olmsted Locks and Dam" />
            </div>
            <div className="project-card-title-bar">
              <h3>Olmsted Locks and Dam Heavy Marine Build</h3>
              <ArrowRightCircle />
            </div>
          </a>

          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUzOyg6Eup7ZKVIBWD_fN1cE0L4KEbetQAP7JjD6hcTmwWLTFAmRP_2k0&s=10" alt="Gilboa Dam Rehabilitation" />
            </div>
            <div className="project-card-title-bar">
              <h3>Gilboa Dam Major Seismic & Safety Rehabilitation</h3>
              <ArrowRightCircle />
            </div>
          </a>
        </div>
      </section>

      {/* Careers Banner */}
      <section className="dams-careers-banner">
        <div className="dams-container careers-inner">
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
      {/* <section className="dams-news-section">
        <div className="dams-container">
          <h2 className="news-section-title">News & Foresight</h2>

          <div className="news-grid-4">
            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news1)?.src || (news1)} alt="Post-tensioning anchors in dam safety" />
              </div>
              <div className="news-body">
                <span className="news-tag">PROJECT CASE STUDY</span>
                <h4>Post-tensioning anchors in dam safety upgrades</h4>
                <p>How high-capacity rock anchors stabilize gravity dams against extreme hydrostatic forces and seismic acceleration...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news2)?.src || (news2)} alt="Mass concrete thermal control" />
              </div>
              <div className="news-body">
                <span className="news-tag">SUSTAINABILITY</span>
                <h4>Mass concrete thermal control in hydro structures</h4>
                <p>Utilizing internal cooling loops and fly-ash mix designs to prevent thermal cracking during massive spillway pours...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news3)?.src || (news3)} alt="Fish passage engineering" />
              </div>
              <div className="news-body">
                <span className="news-tag">INNOVATION</span>
                <h4>Fish passage engineering in modern dam retrofits</h4>
                <p>Integrating surface collector systems and fish ladders to preserve river ecosystems during dam operations...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news4)?.src || (news4)} alt="Clean hydro power generation" />
              </div>
              <div className="news-body">
                <span className="news-tag">PROJECT CASE STUDY</span>
                <h4>Clean hydro power generation at Folsom Spillway</h4>
                <p>Exploring how innovative spillway control gates enhance flood risk management and hydropower reliability...</p>
              </div>
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Dams;
