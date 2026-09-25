"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

import './PortsMarine.css';

import heroBg from '../../assets/images/parks_stpete.jpg';
import spotlightImg from '../../assets/images/project_nycedc.jpg';

import proj1 from '../../assets/images/card_infrastructure.png';
import proj2 from '../../assets/images/project_cold_spring.jpg';
import proj3 from '../../assets/images/project_confidential.jpg';

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

const PortsMarine = () => {
  useEffect(() => {
    document.title = 'Ports & Marine Infrastructure | SNS Construction';
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: '...', path: null },
    { label: 'Transportation & Infrastructure', path: '/construction' },
    { label: 'Ports & Marine', path: null },
  ];

  return (
    <div className="ports-page">
      {/* Hero Section */}
      <section className="ports-hero-wrapper">
        <div className="ports-hero-container">
          <div className="ports-breadcrumbs">
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

          <div className="ports-hero-media">
            <img src={(heroBg)?.src || (heroBg)} alt="Ports & Marine Infrastructure" />
            <div className="ports-hero-content">
              <h1 className="ports-hero-title">Ports & Marine</h1>
              <div className="ports-hero-card">
                <p>Constructing deep-water berths, container terminal quays, breakwaters, and maritime logistics infrastructure worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="ports-capabilities-section ports-container">
        <h2 className="ports-section-heading">Bringing knowledge and foresight to every project</h2>
        
        <div className="ports-capabilities-grid">
          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 20h20"></path>
                <path d="M5 20V8l7-4 7 4v12"></path>
              </svg>
            </div>
            <h3>Deep-Water Quay Walls & Berth Construction</h3>
            <p>Engineering combi-wall bulkheads, reinforced precast concrete quay decks, and high-capacity bollards for ultra-large container vessels.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3>Dredging & Breakwater Engineering</h3>
            <p>Executing capital dredging, channel deepening, and armoring breakwaters with concrete accropodes for coastal protection.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
              </svg>
            </div>
            <h3>Automated Terminal Logistics Yards</h3>
            <p>Paving heavy-duty container stacking yards, automated crane rails (STS & RTG), and intermodal rail freight connections.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Offshore Wind Port Facilities</h3>
            <p>Developing heavy-lift loadout quays designed to support marshalling of 15MW+ offshore wind turbine components.</p>
          </div>
        </div>
      </section>

      {/* Project Spotlight Section */}
      <section className="ports-spotlight-section ports-container">
        <div className="spotlight-grid">
          <div className="spotlight-text-col">
            <h2 className="ports-section-heading">
              Project spotlight: Tuas Mega Port Quay & Terminal Development, Singapore
            </h2>
            <p className="spotlight-desc">
              SNS Construction engineered automated quay walls, deep-water berths, and heavy civil foundations for the world's largest fully automated container terminal complex.
            </p>

          </div>
          <div className="spotlight-image-col">
            <img src="https://www.vozpopuli.com/indux/en/wp-content/uploads/2026/06/tuas-port-singapore-megaport-automated-container-terminal.jpg" alt="Tuas Mega Port Terminal" />
          </div>
        </div>
      </section>

      {/* Shaping Sustainable Places Banner */}
      <section className="ports-banner-section">
        <div className="ports-container banner-inner">
          <div className="banner-left">
            <h2>Shaping green ports & marine resilience</h2>
          </div>
          <div className="banner-right">
            <p>Integrating shore-to-ship cold ironing electrical grids, eco-engineered concrete revetments, and low-carbon marine cements to build sustainable ports.</p>
            <Link href="/construction/expertise/sustainability" className="banner-btn">
              Sustainability <ArrowRightCircle />
            </Link>
          </div>
        </div>
      </section>

      {/* Ports Projects Grid */}
      <section className="ports-projects-section ports-container">
        <div className="projects-header-flex">
          <div className="projects-header-left">
            <h2 className="ports-section-heading">Partnering today to build the ports of tomorrow</h2>
          </div>
          <div className="projects-header-right">
            <p>Delivering strategic maritime infrastructure across major trade hubs in North America, Europe, Asia, and the Middle East.</p>
          </div>
        </div>

        <div className="projects-grid-3">
          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://eu-images.contentstack.com/v3/assets/bltdcfe6aab5515629e/blt015dfbaba4376495/668e9ec1cac821566bc98000/TXXI_SINES.jpg?width=1280&auto=webp&quality=80&disable=upscale" alt="Port of Sines Terminal Expansion" />
            </div>
            <div className="project-card-title-bar">
              <h3>Port of Sines Container Berth & Quay Wall Expansion</h3>
              <ArrowRightCircle />
            </div>
          </a>

          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://images.moneycontrol.com/static-mcnews/2025/05/20250502120501_port-vizinjhim-x.jpg?impolicy=website&width=1280&height=720" alt="Vizhinjam International Seaport Phase II" />
            </div>
            <div className="project-card-title-bar">
              <h3>Vizhinjam Deep-Water Transshipment Breakwater Build</h3>
              <ArrowRightCircle />
            </div>
          </a>

          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu5I8PCe4sYbQ63YAF8ANISsk0oREp5BdsaESrm9ZhthWJ1faTfLQu-VpV&s=10" alt="Duqm Port & Drydock Expansion" />
            </div>
            <div className="project-card-title-bar">
              <h3>Duqm Port Breakwater & Commercial Ship Repair Berth</h3>
              <ArrowRightCircle />
            </div>
          </a>
        </div>
      </section>

      {/* Careers Banner */}
      <section className="ports-careers-banner">
        <div className="ports-container careers-inner">
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
      {/* <section className="ports-news-section">
        <div className="ports-container">
          <h2 className="news-section-title">News & Foresight</h2>

          <div className="news-grid-4">
            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news1)?.src || (news1)} alt="Cold ironing in green ports" />
              </div>
              <div className="news-body">
                <span className="news-tag">SUSTAINABILITY</span>
                <h4>Cold ironing & shore power integration in modern container ports</h4>
                <p>Enabling docked vessels to plug into grid power to eliminate diesel emissions during port berth stays...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news2)?.src || (news2)} alt="Automated container terminal civil engineering" />
              </div>
              <div className="news-body">
                <span className="news-tag">INNOVATION</span>
                <h4>Civil engineering tolerances for automated terminal cranes</h4>
                <p>Pouring ultra-flat concrete crane runways and AGV tracking corridors for zero-disruption automation...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news3)?.src || (news3)} alt="Offshore wind loadout quays" />
              </div>
              <div className="news-body">
                <span className="news-tag">PROJECT CASE STUDY</span>
                <h4>Designing heavy-loadout quays for 15MW+ offshore wind turbines</h4>
                <p>Engineering quay decks capable of withstanding 20-ton/m² ground bearing pressure during turbine staging...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news4)?.src || (news4)} alt="Coastal breakwater engineering" />
              </div>
              <div className="news-body">
                <span className="news-tag">ENGINEERING</span>
                <h4>High-velocity wave attenuation using concrete accropode breakwaters</h4>
                <p>Protecting deep-water harbors against extreme storm surges and climate-induced sea level rise...</p>
              </div>
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default PortsMarine;
