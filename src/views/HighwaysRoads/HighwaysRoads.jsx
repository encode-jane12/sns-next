"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

import './HighwaysRoads.css';

import heroBg from '../../assets/images/hero_construction.png';
import spotlightImg from '../../assets/images/project_san_antonio.jpg';

import proj1 from '../../assets/images/project_nycedc.jpg';
import proj2 from '../../assets/images/project_confidential.jpg';
import proj3 from '../../assets/images/project_wake_county.jpg';

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

const HighwaysRoads = () => {
  useEffect(() => {
    document.title = 'Highways & Roads | SNS Construction';
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: '...', path: null },
    { label: 'Transportation & Infrastructure', path: '/construction' },
    { label: 'Highways & Roads', path: null },
  ];

  return (
    <div className="highways-page">
      {/* Hero Section */}
      <section className="highways-hero-wrapper">
        <div className="highways-hero-container">
          <div className="highways-breadcrumbs">
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

          <div className="highways-hero-media">
            <img src="https://images.pexels.com/photos/8319802/pexels-photo-8319802.jpeg" alt="Highways & Roads Infrastructure" />
            <div className="highways-hero-content">
              <h1 className="highways-hero-title">Highways & Roads</h1>
              <div className="highways-hero-card">
                <p>Engineering multi-lane expressways, complex interchanges, and smart corridor networks that streamline mobility and boost regional economic growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="highways-capabilities-section highways-container">
        <h2 className="highways-section-heading">Bringing knowledge and foresight to every project</h2>
        
        <div className="highways-capabilities-grid">
          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                <line x1="4" y1="22" x2="4" y2="15"></line>
              </svg>
            </div>
            <h3>Design-Build & PPP Delivery</h3>
            <p>Accelerating major corridor expansions through integrated design-build partnerships and public-private concession models.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
              </svg>
            </div>
            <h3>Intelligent Transportation Systems (ITS)</h3>
            <p>Integrating fiber-optic traffic sensors, automated tolling gantries, and dynamic lane management to optimize traffic flow.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
            </div>
            <h3>Heavy Paving & Subgrade Stabilization</h3>
            <p>Deploying GPS-guided slipform pavers and deep lime-stabilized base layers for long-lasting high-load pavement performance.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3>Phased MOT & Zero-Harm Safety</h3>
            <p>Executing high-volume urban highway widening while maintaining active traffic lanes through multi-stage MOT planning.</p>
          </div>
        </div>
      </section>

      {/* Project Spotlight Section */}
      <section className="highways-spotlight-section highways-container">
        <div className="spotlight-grid">
          <div className="spotlight-text-col">
            <h2 className="highways-section-heading">
              Project spotlight: Delhi–Amritsar–Katra Expressway Corridor
            </h2>
            <p className="spotlight-desc">
              Constructing 120+ kilometers of green-field 4/6-lane access-controlled expressway alignment including automated toll plazas, wildlife underpasses, and high-velocity concrete paving.
            </p>
          </div>
          <div className="spotlight-image-col">
            <img src="https://propscience.s3.ap-south-1.amazonaws.com/backoffice_blogs/20250326033319_1_Delhi_Infrastructure__Delhi_Amritsar_Katra_Expressway_to_cut_travel_time_by_4___6_hours.png" alt="Expressway Construction" />
          </div>
        </div>
      </section>

      {/* Shaping Sustainable Places Banner */}
      <section className="highways-banner-section">
        <div className="highways-container banner-inner">
          <div className="banner-left">
            <h2>Shaping sustainable corridors</h2>
          </div>
          <div className="banner-right">
            <p>Utilizing warm-mix recycled asphalt (RAP), permeable stormwater retention basins, and solar-powered highway lighting to reduce carbon footprints across highway networks.</p>
            <Link href="/construction/expertise/sustainability" className="banner-btn">
              Sustainability <ArrowRightCircle />
            </Link>
          </div>
        </div>
      </section>

      {/* Highway Projects Grid */}
      <section className="highways-projects-section highways-container">
        <div className="projects-header-flex">
          <div className="projects-header-left">
            <h2 className="highways-section-heading">Partnering today to build the roads of tomorrow</h2>
          </div>
          <div className="projects-header-right">
            <p>SNS Construction has built over 2,500 lane-kilometers of expressways, interchanges, and arterial highway corridors across North America, Europe, and Asia.</p>
          </div>
        </div>

        <div className="projects-grid-3">
          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdMBiNoBrZ0vfI9m-dQPHksZfwe_Jt9umvVwdyVyA1EDF1jN-O-EcBPbWl&s=10" alt="Surat-Chennai Expressway Corridor" />
            </div>
            <div className="project-card-title-bar">
              <h3>Surat–Chennai Economic Expressway & Interchange Nodes</h3>
              <ArrowRightCircle />
            </div>
          </a>

          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmhIOGq7VEwc6kJbkRowI2ufzXh2xKS5OubMRV2hDIscX6b2FxPgOHGQMv&s=10" alt="I-4 Ultimate Managed Lanes Project" />
            </div>
            <div className="project-card-title-bar">
              <h3>I-4 Ultimate Express Lanes & Multi-Level Interchange</h3>
              <ArrowRightCircle />
            </div>
          </a>

          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://swarajya.gumlet.io/swarajya/2024-04/8237f9d8-4515-406c-822c-b1372bac413a/12244365_911065212263048_2800771183428691559_o.jpg?w=610&q=75&compress=true&format=auto" alt="Regional Ring Road Bypass" />
            </div>
            <div className="project-card-title-bar">
              <h3>Regional Ring Road Bypass & Access-Controlled Corridors</h3>
              <ArrowRightCircle />
            </div>
          </a>
        </div>
      </section>

      {/* Careers Banner */}
      <section className="highways-careers-banner">
        <div className="highways-container careers-inner">
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
      {/* <section className="highways-news-section">
        <div className="highways-container">
          <h2 className="news-section-title">News & Foresight</h2>

          <div className="news-grid-4">
            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news1)?.src || (news1)} alt="Warm-mix asphalt innovation" />
              </div>
              <div className="news-body">
                <span className="news-tag">SUSTAINABILITY</span>
                <h4>Warm-mix asphalt & RAP integration in heavy paving</h4>
                <p>Lowering production temperatures and maximizing recycled asphalt content to cut greenhouse gas emissions...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news2)?.src || (news2)} alt="3D Machine guidance in highway grading" />
              </div>
              <div className="news-body">
                <span className="news-tag">INNOVATION</span>
                <h4>3D Machine guidance & automated grading in highway construction</h4>
                <p>Deploying RTK-GPS enabled motor graders and slipform pavers for sub-centimeter grading accuracy...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news3)?.src || (news3)} alt="Wildlife corridor integration" />
              </div>
              <div className="news-body">
                <span className="news-tag">PROJECT CASE STUDY</span>
                <h4>Designing eco-friendly wildlife overpasses on greenfield highways</h4>
                <p>Combining structural civil engineering with landscape ecology to maintain biodiversity along major transport corridors...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news4)?.src || (news4)} alt="Smart highway corridors" />
              </div>
              <div className="news-body">
                <span className="news-tag">TECHNOLOGY</span>
                <h4>The future of connected & autonomous vehicle highway infrastructure</h4>
                <p>Preparing highway corridors with V2X communication gantries and embedded sensor networks...</p>
              </div>
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default HighwaysRoads;
