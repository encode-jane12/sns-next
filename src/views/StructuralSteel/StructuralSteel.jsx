"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

import './StructuralSteel.css';

import heroBg from '../../assets/images/st_hero.png';
import spotlightImg from '../../assets/images/st_specialty.png';

import proj1 from '../../assets/images/st_rd.png';
import proj2 from '../../assets/images/st_cleanrooms.png';
import proj3 from '../../assets/images/st_hightech.jpg';

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

const StructuralSteel = () => {
  useEffect(() => {
    document.title = 'Structural Steel Fabrication & Erection | SNS Construction';
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: '...', path: null },
    { label: 'Transportation & Infrastructure', path: '/construction' },
    { label: 'Structural Steel', path: null },
  ];

  return (
    <div className="steel-page">
      {/* Hero Section */}
      <section className="steel-hero-wrapper">
        <div className="steel-hero-container">
          <div className="steel-breadcrumbs">
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

          <div className="steel-hero-media">
            <img src="https://images.pexels.com/photos/15128958/pexels-photo-15128958.jpeg" alt="Structural Steel Erection" />
            <div className="steel-hero-content">
              <h1 className="steel-hero-title">Structural Steel</h1>
              <div className="steel-hero-card">
                <p>Fabricating and erecting complex heavy structural steel framing, long-span trusses, and specialized architectural steelwork for iconic global structures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="steel-capabilities-section steel-container">
        <h2 className="steel-section-heading">Bringing knowledge and foresight to every project</h2>
        
        <div className="steel-capabilities-grid">
          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
              </svg>
            </div>
            <h3>BIM Level 3 Modeling & Detailing</h3>
            <p>Utilizing Tekla 3D modeling and automated CNC connection detailing to ensure 100% fit-up precision prior to shop fabrication.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3>AISC Certified Shop Fabrication</h3>
            <p>Operating state-of-the-art steel fabrication shops equipped with robotic welding, automated beam lines, and specialized coating bays.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
              </svg>
            </div>
            <h3>Heavy-Lift Erection Engineering</h3>
            <p>Executing complex tandem crane lifts, strand-jacking of massive roof trusses, and modular steel assembly under tight site constraints.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Seismic Connection Systems</h3>
            <p>Engineering ductile moment frames, buckled-restrained braces (BRBs), and base-isolation interfaces for extreme earthquake resilience.</p>
          </div>
        </div>
      </section>

      {/* Project Spotlight Section */}
      <section className="steel-spotlight-section steel-container">
        <div className="spotlight-grid">
          <div className="spotlight-text-col">
            <h2 className="steel-section-heading">
              Project spotlight: Moynihan Train Hall Skylight & Steel Structure
            </h2>
            <p className="spotlight-desc">
              SNS Construction fabricated and erected the 500-ton steel diagrid skylight structure supporting the historic glass canopy of Moynihan Train Hall at Penn Station, NYC.
            </p>

          </div>
          <div className="spotlight-image-col">
            <img src="https://seele.com/fileadmin/editor/01_References/Moynihan-Train-Hall/Moynihan-Gallery2-1095-760px.jpg" alt="Moynihan Train Hall Steel Structure" />
          </div>
        </div>
      </section>

      {/* Shaping Sustainable Places Banner */}
      <section className="steel-banner-section">
        <div className="steel-container banner-inner">
          <div className="banner-left">
            <h2>Shaping low-carbon structural steel</h2>
          </div>
          <div className="banner-right">
            <p>Sourcing 100% electric arc furnace (EAF) recycled steel, optimizing member sizing via digital twin analytics, and reducing shop waste to build sustainable structures.</p>
            <Link href="/construction/expertise/sustainability" className="banner-btn">
              Sustainability <ArrowRightCircle />
            </Link>
          </div>
        </div>
      </section>

      {/* Steel Projects Grid */}
      <section className="steel-projects-section steel-container">
        <div className="projects-header-flex">
          <div className="projects-header-left">
            <h2 className="steel-section-heading">Partnering today to build the structures of tomorrow</h2>
          </div>
          <div className="projects-header-right">
            <p>Delivering heavy structural steel framing for high-rises, stadiums, airport terminals, and industrial mega-hubs.</p>

          </div>
        </div>

        <div className="projects-grid-3">
          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://seele.com/fileadmin/editor/01_References/Stuttgart21/Stuttgart21-Gallery01-1095px.jpg" alt="Stuttgart 21 Station Roof Steelwork" />
            </div>
            <div className="project-card-title-bar">
              <h3>Stuttgart 21 Underground Station Roof Shell Steelwork</h3>
              <ArrowRightCircle />
            </div>
          </a>

          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://www.airkeyx.com/uploads/image/20240628/1719585284.png" alt="High-Tech Cleanroom Steel Framing" />
            </div>
            <div className="project-card-title-bar">
              <h3>Semiconductor Cleanroom Modular Steel Superstructure</h3>
              <ArrowRightCircle />
            </div>
          </a>

          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://www.waterproofmag.com/wp-content/uploads/2018/12/2009-01-Retractable-Stadium-Roofing-01.jpg" alt="Mercedes-Benz Stadium Roof Steel" />
            </div>
            <div className="project-card-title-bar">
              <h3>Retractable Stadium Roof Structural Steel Assembly</h3>
              <ArrowRightCircle />
            </div>
          </a>
        </div>
      </section>

      {/* Careers Banner */}
      <section className="steel-careers-banner">
        <div className="steel-container careers-inner">
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
      {/* <section className="steel-news-section">
        <div className="steel-container">
          <h2 className="news-section-title">News & Foresight</h2>

          <div className="news-grid-4">
            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news1)?.src || (news1)} alt="EAF recycled steel in construction" />
              </div>
              <div className="news-body">
                <span className="news-tag">SUSTAINABILITY</span>
                <h4>Decarbonizing heavy construction with Electric Arc Furnace (EAF) steel</h4>
                <p>Reducing embodied carbon by up to 75% through recycled steel sourcing and Environmental Product Declarations (EPDs)...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news2)?.src || (news2)} alt="Robotic welding in steel shops" />
              </div>
              <div className="news-body">
                <span className="news-tag">INNOVATION</span>
                <h4>Automated robotic welding & CNC beam lines in steel fabrication</h4>
                <p>Enhancing quality assurance and throughput speed across our AISC-certified fabrication facilities...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news3)?.src || (news3)} alt="Strand jacking heavy roof trusses" />
              </div>
              <div className="news-body">
                <span className="news-tag">PROJECT CASE STUDY</span>
                <h4>Strand-jacking a 1,200-ton stadium roof truss assembly</h4>
                <p>A step-by-step technical breakdown of heavy-lift erection engineering in congested urban arenas...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news4)?.src || (news4)} alt="Buckling-restrained braces" />
              </div>
              <div className="news-body">
                <span className="news-tag">ENGINEERING</span>
                <h4>Advanced seismic design using Buckling-Restrained Braces (BRBs)</h4>
                <p>Protecting high-rise commercial towers and hospitals against extreme earthquake forces...</p>
              </div>
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default StructuralSteel;
