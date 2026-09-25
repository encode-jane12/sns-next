"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

import './Tunneling.css';

import heroBg from '../../assets/images/hero_construction.png';
import spotlightImg from '../../assets/images/st_cleanrooms.png';

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

const Tunneling = () => {
  useEffect(() => {
    document.title = 'Tunneling Infrastructure | SNS Construction';
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: '...', path: null },
    { label: 'Transportation & Infrastructure', path: '/construction' },
    { label: 'Tunneling', path: null },
  ];

  return (
    <div className="tunneling-page">
      {/* Hero Section */}
      <section className="tunneling-hero-wrapper">
        <div className="tunneling-hero-container">
          <div className="tunneling-breadcrumbs">
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

          <div className="tunneling-hero-media">
            <img src="https://images.pexels.com/photos/14350034/pexels-photo-14350034.jpeg" alt="Tunneling Infrastructure" />
            <div className="tunneling-hero-content">
              <h1 className="tunneling-hero-title">Tunneling</h1>
              <div className="tunneling-hero-card">
                <p>Deploying advanced Tunnel Boring Machines (TBMs), Sequential Excavation Methods (SEM), and microtunneling in complex soft ground and hard rock conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="tunneling-capabilities-section tunneling-container">
        <h2 className="tunneling-section-heading">Bringing knowledge and foresight to every project</h2>
        
        <div className="tunneling-capabilities-grid">
          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
              </svg>
            </div>
            <h3>TBM Drive Execution</h3>
            <p>Operating pressurized Slurry and Earth Pressure Balance (EPB) TBMs for large-diameter transit and utility tunnels under water bodies.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
              </svg>
            </div>
            <h3>Sequential Excavation Method (SEM / NATM)</h3>
            <p>Mining cavern cross-passages, station vaults, and complex tunnel intersections using fiber-reinforced shotcrete and lattice girders.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Ground Freezing & Soil Grouting</h3>
            <p>Stabilizing water-bearing soils using liquid nitrogen ground freezing and jet grouting to prevent surface settlement.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
              </svg>
            </div>
            <h3>Precast Segmental Liners</h3>
            <p>Fabricating and installing gasketed steel-fiber reinforced concrete segments to ensure 100-year watertight tunnel lining.</p>
          </div>
        </div>
      </section>

      {/* Project Spotlight Section */}
      <section className="tunneling-spotlight-section tunneling-container">
        <div className="spotlight-grid">
          <div className="spotlight-text-col">
            <h2 className="tunneling-section-heading">
              Project spotlight: DC Water Clean Rivers First Street Tunnel
            </h2>
            <p className="spotlight-desc">
              SNS Construction bored a 2.7-mile, 23-foot diameter deep rock tunnel beneath Washington, D.C., reducing combined sewer overflows by over 98% and protecting regional waterways.
            </p>

          </div>
          <div className="spotlight-image-col">
            <img src="https://www.dcwater.com/sites/default/files/styles/width_1024/public/project/2016-07/image/IMG_5379.jpg?itok=O79Pr0Xn" alt="DC Water Tunnel Boring Project" />
          </div>
        </div>
      </section>

      {/* Shaping Sustainable Places Banner */}
      <section className="tunneling-banner-section">
        <div className="tunneling-container banner-inner">
          <div className="banner-left">
            <h2>Shaping underground sustainability</h2>
          </div>
          <div className="banner-right">
            <p>Utilizing excavated rock spoil for habitat creation, zero-emission electric TBM trailing gear, and low-carbon segmental liners to minimize environmental impact.</p>
            <Link href="/construction/expertise/sustainability" className="banner-btn">
              Sustainability <ArrowRightCircle />
            </Link>
          </div>
        </div>
      </section>

      {/* Tunneling Projects Grid */}
      <section className="tunneling-projects-section tunneling-container">
        <div className="projects-header-flex">
          <div className="projects-header-left">
            <h2 className="tunneling-section-heading">Partnering today to build the underground networks of tomorrow</h2>
          </div>
          <div className="projects-header-right">
            <p>Constructing over 150 miles of complex transportation, water, and utility tunnels globally.</p>

          </div>
        </div>

        <div className="projects-grid-3">
          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://cdn.ca.emap.com/wp-content/uploads/sites/13/2015/05/Bertha-breakthrough.jpg" alt="SR 99 Alaskan Way Tunnel" />
            </div>
            <div className="project-card-title-bar">
              <h3>Alaskan Way Viaduct Replacement Deep TBM Bore</h3>
              <ArrowRightCircle />
            </div>
          </a>

          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://www.ihengineers.com/images/7/71.jpg" alt="7 Line Subway Extension Tunnels" />
            </div>
            <div className="project-card-title-bar">
              <h3>NYC 7 Line Subway Extension Twin Tube Drives</h3>
              <ArrowRightCircle />
            </div>
          </a>

          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://i.guim.co.uk/img/media/d969c2a05c459a8f209812b742f57417d3d7e90e/0_306_4080_2448/master/4080.jpg?width=700&quality=85&auto=format&fit=max&s=948cbedb2913bbf6c26b201c0a13e1cf" alt="Silvertown Thames Tunnel Drive" />
            </div>
            <div className="project-card-title-bar">
              <h3>Silvertown Thames Sub-River Tunnel Drive</h3>
              <ArrowRightCircle />
            </div>
          </a>
        </div>
      </section>

      {/* Careers Banner */}
      <section className="tunneling-careers-banner">
        <div className="tunneling-container careers-inner">
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
      {/* <section className="tunneling-news-section">
        <div className="tunneling-container">
          <h2 className="news-section-title">News & Foresight</h2>

          <div className="news-grid-4">
            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news1)?.src || (news1)} alt="TBM cutterhead technology" />
              </div>
              <div className="news-body">
                <span className="news-tag">TECHNOLOGY</span>
                <h4>Next-generation TBM cutterhead diagnostics & automated disc replacement</h4>
                <p>Deploying hyperbaric robotic arms to inspect and swap cutterhead tools in hyperbaric conditions...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news2)?.src || (news2)} alt="Ground freezing techniques" />
              </div>
              <div className="news-body">
                <span className="news-tag">INNOVATION</span>
                <h4>Cryogenic ground freezing for soft-ground tunnel breakout shafts</h4>
                <p>Creating solid ice walls in saturated soils to ensure zero-settlement TBM launches...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news3)?.src || (news3)} alt="Sub-river TBM drives" />
              </div>
              <div className="news-body">
                <span className="news-tag">PROJECT CASE STUDY</span>
                <h4>Sub-river slurry TBM drives under active shipping channels</h4>
                <p>Maintaining precise face pressures to prevent riverbed blowout during sub-waterway tunneling...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news4)?.src || (news4)} alt="Reusing TBM muck" />
              </div>
              <div className="news-body">
                <span className="news-tag">SUSTAINABILITY</span>
                <h4>Beneficial reuse of TBM excavated muck in civil fills</h4>
                <p>Processing tunnel spoil for land reclamation and highway embankments to achieve zero waste...</p>
              </div>
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Tunneling;
