"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

import './WaterWastewater.css';

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

const WaterWastewater = () => {
  useEffect(() => {
    document.title = 'Water & Wastewater Systems | SNS Construction';
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: '...', path: null },
    { label: 'Transportation & Infrastructure', path: '/construction' },
    { label: 'Water & Wastewater Systems', path: null },
  ];

  return (
    <div className="water-page">
      {/* Hero Section */}
      <section className="water-hero-wrapper">
        <div className="water-hero-container">
          <div className="water-breadcrumbs">
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

          <div className="water-hero-media">
            <img src="https://images.pexels.com/photos/12975468/pexels-photo-12975468.jpeg" alt="Water & Wastewater Infrastructure" />
            <div className="water-hero-content">
              <h1 className="water-hero-title">Water & Wastewater Systems</h1>
              <div className="water-hero-card">
                <p>Constructing advanced water treatment plants, water reclamation facilities, conveyance pipelines, and nutrient recovery hubs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="water-capabilities-section water-container">
        <h2 className="water-section-heading">Bringing knowledge and foresight to every project</h2>
        
        <div className="water-capabilities-grid">
          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
              </svg>
            </div>
            <h3>Advanced Water Treatment (AWT) Plants</h3>
            <p>Constructing reverse osmosis, ozonation, and UV disinfection facilities for drinking water purification.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3>Biological Nutrient Removal (BNR)</h3>
            <p>Engineering anaerobic digesters, aeration basins, and membrane bioreactor (MBR) tanks to meet stringent effluent standards.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                <line x1="2" y1="10" x2="22" y2="10"></line>
              </svg>
            </div>
            <h3>Pumping Stations & High-Capacity Pipelines</h3>
            <p>Installing large-diameter ductile iron and PCCP water mains, high-head raw water pump stations, and surge tanks.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Continuous Facility Operations</h3>
            <p>Executing major plant expansions and process upgrades while maintaining 24/7 uninterrupted municipal water service.</p>
          </div>
        </div>
      </section>

      {/* Project Spotlight Section */}
      <section className="water-spotlight-section water-container">
        <div className="spotlight-grid">
          <div className="spotlight-text-col">
            <h2 className="water-section-heading">
              Project spotlight: Blue Plains Wastewater Treatment Plant Enhancement
            </h2>
            <p className="spotlight-desc">
              SNS Construction engineered thermal hydrolysis and anaerobic digestion facilities at DC Water's Blue Plains plant, generating 13MW of clean renewable energy and reducing carbon emissions by 30%.
            </p>

          </div>
          <div className="spotlight-image-col">
            <img src="https://www.dcwater.com/sites/default/files/2023-10/blue_plains.jpg" alt="Blue Plains Water Treatment Facility" />
          </div>
        </div>
      </section>

      {/* Shaping Sustainable Places Banner */}
      <section className="water-banner-section">
        <div className="water-container banner-inner">
          <div className="banner-left">
            <h2>Shaping sustainable water reuse</h2>
          </div>
          <div className="banner-right">
            <p>Building net-zero energy water reclamation plants, resource recovery facilities, and circular water reuse infrastructure to secure urban water futures.</p>
            <Link href="/construction/expertise/sustainability" className="banner-btn">
              Sustainability <ArrowRightCircle />
            </Link>
          </div>
        </div>
      </section>

      {/* Water Projects Grid */}
      <section className="water-projects-section water-container">
        <div className="projects-header-flex">
          <div className="projects-header-left">
            <h2 className="water-section-heading">Partnering today to build the water systems of tomorrow</h2>
          </div>
          <div className="projects-header-right">
            <p>Delivering over 80 major water treatment and reclamation projects across North America and Europe.</p>

          </div>
        </div>

        <div className="projects-grid-3">
          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://www.tampabaywater.org/wp-content/uploads/planning-today-desal-turbines.jpeg" alt="Tampa Bay Seawater Desalination Plant" />
            </div>
            <div className="project-card-title-bar">
              <h3>Tampa Bay Seawater Desalination Facility</h3>
              <ArrowRightCircle />
            </div>
          </a>

          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://pcconstruction.com/app/uploads/2020/06/COA_PumpStationQuarry-e1654277001118.jpg" alt="Atlanta Water Supply Reservoir & Pump Hub" />
            </div>
            <div className="project-card-title-bar">
              <h3>Atlanta Water Supply Tunnel & Raw Water Pump Station</h3>
              <ArrowRightCircle />
            </div>
          </a>

          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://live.staticflickr.com/3758/11226727163_125b3eab44_b.jpg" alt="New York City Cat/Del UV Disinfection Facility" />
            </div>
            <div className="project-card-title-bar">
              <h3>Cat/Del Ultraviolet (UV) Drinking Water Disinfection Hub</h3>
              <ArrowRightCircle />
            </div>
          </a>
        </div>
      </section>

      {/* Careers Banner */}
      <section className="water-careers-banner">
        <div className="water-container careers-inner">
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
      {/* <section className="water-news-section">
        <div className="water-container">
          <h2 className="news-section-title">News & Foresight</h2>

          <div className="news-grid-4">
            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news1)?.src || (news1)} alt="Thermal hydrolysis in wastewater" />
              </div>
              <div className="news-body">
                <span className="news-tag">INNOVATION</span>
                <h4>Thermal hydrolysis (Cambi process) in biosolids energy recovery</h4>
                <p>Converting wastewater sludge into Class A fertilizer and green biogas for municipal power grids...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news2)?.src || (news2)} alt="Membrane bioreactor technology" />
              </div>
              <div className="news-body">
                <span className="news-tag">TECHNOLOGY</span>
                <h4>Membrane Bioreactor (MBR) engineering in compact urban treatment</h4>
                <p>Achieving high-grade water reuse effluent within 50% smaller plant footprints...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news3)?.src || (news3)} alt="PFAS removal water treatment" />
              </div>
              <div className="news-body">
                <span className="news-tag">PROJECT CASE STUDY</span>
                <h4>PFAS & micro-pollutant removal in municipal drinking water</h4>
                <p>Designing granular activated carbon (GAC) and ion exchange filtration vessels to eliminate forever chemicals...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news4)?.src || (news4)} alt="Net-zero energy water reclamation" />
              </div>
              <div className="news-body">
                <span className="news-tag">SUSTAINABILITY</span>
                <h4>Pathways to net-zero carbon water reclamation facilities</h4>
                <p>Integrating co-generation solar arrays and energy-neutral aeration blowers in water engineering...</p>
              </div>
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default WaterWastewater;
