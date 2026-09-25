"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

import './Mining.css';

import heroBg from '../../assets/images/hero_worker.png';
import spotlightImg from '../../assets/images/project_confidential.jpg';

import proj1 from '../../assets/images/st_specialty.png';
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

const Mining = () => {
  useEffect(() => {
    document.title = 'Mining Infrastructure | SNS Construction';
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: '...', path: null },
    { label: 'Transportation & Infrastructure', path: '/construction' },
    { label: 'Mining', path: null },
  ];

  return (
    <div className="mining-page">
      {/* Hero Section */}
      <section className="mining-hero-wrapper">
        <div className="mining-hero-container">
          <div className="mining-breadcrumbs">
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

          <div className="mining-hero-media">
            <img src="https://images.pexels.com/photos/12201831/pexels-photo-12201831.jpeg" alt="Mining Infrastructure" />
            <div className="mining-hero-content">
              <h1 className="mining-hero-title">Mining</h1>
              <div className="mining-hero-card">
                <p>Engineering heavy civil infrastructure, mine access shafts, tailing management systems, and mineral processing facilities worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="mining-capabilities-section mining-container">
        <h2 className="mining-section-heading">Bringing knowledge and foresight to every project</h2>
        
        <div className="mining-capabilities-grid">
          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
              </svg>
            </div>
            <h3>Underground Access Shafts & Tunnels</h3>
            <p>Constructing deep vertical mine shafts, decline portals, and underground crushing caverns in challenging geology.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
            </div>
            <h3>Heavy Processing Plant Foundations</h3>
            <p>Pouring heavy structural concrete for concentrators, SAG mills, and smelter foundations designed for continuous high-vibration loads.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Tailing Storage Facilities (TSF)</h3>
            <p>Engineering secure earthfill embankment dams, liner installations, and decant systems to safely contain process tailings.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
              </svg>
            </div>
            <h3>Remote Haul Roads & Rail Logistics</h3>
            <p>Building heavy-haul mine access roads, overland conveyor foundations, and rail loading terminals connecting mines to ports.</p>
          </div>
        </div>
      </section>

      {/* Project Spotlight Section */}
      <section className="mining-spotlight-section mining-container">
        <div className="spotlight-grid">
          <div className="spotlight-text-col">
            <h2 className="mining-section-heading">
              Project spotlight: Eneabba Rare Earths Refinery Infrastructure
            </h2>
            <p className="spotlight-desc">
              SNS Construction delivered heavy civil foundations, chemical processing structures, and environmental containment facilities for Australia's flagship rare earth refinery.
            </p>
          </div>
          <div className="spotlight-image-col">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQci3ohh6mW9OYon2py0Iw9UWm3rTIb7L5JvM3s4kSs_379nlwbuXeB0Q&s=10" alt="Mining Infrastructure Refinery" />
          </div>
        </div>
      </section>

      {/* Shaping Sustainable Places Banner */}
      <section className="mining-banner-section">
        <div className="mining-container banner-inner">
          <div className="banner-left">
            <h2>Sustainable mining infrastructure</h2>
          </div>
          <div className="banner-right">
            <p>Implementing dry-stack tailing systems, renewable microgrid integration, and continuous mine site reclamation to minimize environmental footprints.</p>
            <Link href="/construction/expertise/sustainability" className="banner-btn">
              Sustainability <ArrowRightCircle />
            </Link>
          </div>
        </div>
      </section>

      {/* Mining Projects Grid */}
      <section className="mining-projects-section mining-container">
        <div className="projects-header-flex">
          <div className="projects-header-left">
            <h2 className="mining-section-heading">Partnering today to build the mines of tomorrow</h2>
          </div>
          <div className="projects-header-right">
            <p>Delivering critical mineral processing hubs and underground infrastructure across global mining regions.</p>
          </div>
        </div>

        <div className="projects-grid-3">
          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://www.fluor.com/_next/image?url=https%3A%2F%2Fa.fluor.com%2Ff%2F1014770%2F3000X1683%2F721c1cd485%2F17.jpg&w=3840&q=75" alt="Kearl Oil Sands Processing Civil Works" />
            </div>
            <div className="project-card-title-bar">
              <h3>Kearl Heavy Processing Plant Civil Infrastructure</h3>
              <ArrowRightCircle />
            </div>
          </a>

          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://www.normanlumber.com/wp-content/uploads/2022/10/Lumber-In-The-Mining-Industry.jpeg" alt="Grasberg Underground Shaft Infrastructure" />
            </div>
            <div className="project-card-title-bar">
              <h3>Deep Mine Underground Shaft & Cavern Execution</h3>
              <ArrowRightCircle />
            </div>
          </a>

          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://www.belt-conveyors.net/uploads/allimg/260810/2-260Q0153954160.jpg" alt="Overland Conveyor & Rail Loading Terminal" />
            </div>
            <div className="project-card-title-bar">
              <h3>Overland Conveyor Corridor & Rail Loading Hub</h3>
              <ArrowRightCircle />
            </div>
          </a>
        </div>
      </section>

      {/* Careers Banner */}
      <section className="mining-careers-banner">
        <div className="mining-container careers-inner">
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
      {/* <section className="mining-news-section">
        <div className="mining-container">
          <h2 className="news-section-title">News & Foresight</h2>

          <div className="news-grid-4">
            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news1)?.src || (news1)} alt="Dry-stack tailings technology" />
              </div>
              <div className="news-body">
                <span className="news-tag">SUSTAINABILITY</span>
                <h4>Dry-stack tailings management in modern mining</h4>
                <p>Replacing traditional wet tailing dams with filtered dry-stack storage to eliminate dam breach risks...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news2)?.src || (news2)} alt="Autonomous mining logistics" />
              </div>
              <div className="news-body">
                <span className="news-tag">INNOVATION</span>
                <h4>Infrastructure requirements for autonomous haul fleets</h4>
                <p>Designing heavy-haul roads and charging hubs tailored for 300-ton autonomous mining trucks...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news3)?.src || (news3)} alt="Critical minerals processing" />
              </div>
              <div className="news-body">
                <span className="news-tag">PROJECT CASE STUDY</span>
                <h4>Building critical minerals processing plants</h4>
                <p>Fast-tracking civil engineering for lithium, nickel, and rare earth refinery facilities...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news4)?.src || (news4)} alt="Mine site reclamation" />
              </div>
              <div className="news-body">
                <span className="news-tag">ENVIRONMENTAL</span>
                <h4>Progressive mine site closure & land rehabilitation</h4>
                <p>Integrating environmental restoration into every stage of mining civil construction...</p>
              </div>
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Mining;
