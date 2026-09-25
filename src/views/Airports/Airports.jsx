"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

import './Airports.css';

import heroBg from '../../assets/images/hero_airport.png';
import spotlightImg from '../../assets/images/project_cold_spring.jpg';

import proj1 from '../../assets/images/project_nycedc.jpg';
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

const Airports = () => {
  useEffect(() => {
    document.title = 'Airports | SNS Construction';
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: '...', path: null },
    { label: 'Transportation & Infrastructure', path: '/construction' },
    { label: 'Airports', path: null },
  ];

  return (
    <div className="airports-page">
      {/* Hero Section */}
      <section className="airports-hero-wrapper">
        <div className="airports-hero-container">
          <div className="airports-breadcrumbs">
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

          <div className="airports-hero-media">
            <img src={(heroBg)?.src || (heroBg)} alt="Airports Infrastructure" />
            <div className="airports-hero-content">
              <h1 className="airports-hero-title">Airports</h1>
              <div className="airports-hero-card">
                <p>Combining precise phasing, tight coordination and uncompromised safety to keep your operations on track and passengers moving.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="airports-capabilities-section airports-container">
        <h2 className="airports-section-heading">Bringing knowledge and foresight to every project</h2>
        
        <div className="airports-capabilities-grid">
          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h3>Prioritizing passengers and operations</h3>
            <p>Through our innovative phasing and sequencing, we coordinate airside and landside construction to accelerate delivery, minimize disruptions and support seamless passenger movement.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                <line x1="2" y1="10" x2="22" y2="10"></line>
              </svg>
            </div>
            <h3>Supporting intermodal connectivity</h3>
            <p>We build seamless links between terminals, roadways, rail systems and transit hubs, ensuring passengers and cargo move efficiently across every mode of travel.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Delivering safety, security and efficiency</h3>
            <p>Our teams coordinate closely with airport operations, implement rigorous safety protocols and integrate secure, streamlined construction logistics to keep airside and landside environments fully functional.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M178 192L160 224"></path>
                <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
              </svg>
            </div>
            <h3>Maximizing efficiency and mitigating risk</h3>
            <p>By identifying and mitigating technical and operational risks early, we unlock value with modular construction, offsite fabrication and early engagement of airfield and terminal system suppliers.</p>
          </div>
        </div>
      </section>

      {/* Project Spotlight Section */}
      <section className="airports-spotlight-section airports-container">
        <div className="spotlight-grid">
          <div className="spotlight-text-col">
            <h2 className="airports-section-heading">
              Project spotlight: Portland International Airport (PDX), Terminal Core Redevelopment
            </h2>
            <p className="spotlight-desc">
              Our modernization of PDX involves a complete remodel of the terminal core, reconstruction of concourse B, a 150-foot, multi-floor addition between concourses C and D, and replacement of 16 passenger boarding bridges—all while the airport remains operational.
            </p>
            {/* <a href="#" className="spotlight-link">
              View project <ArrowRightCircle />
            </a> */}
          </div>
          <div className="spotlight-image-col">
            <img src="https://i.ibb.co/57rC02P/Portland-International-Airport-PDX-Terminal-Core-Redevelopment.webp" alt="Portland International Airport (PDX) Redevelopment" />
          </div>
        </div>
      </section>

      {/* Shaping Sustainable Places Banner */}
      <section className="airports-banner-section">
        <div className="airports-container banner-inner">
          <div className="banner-left">
            <h2>Shaping sustainable places</h2>
          </div>
          <div className="banner-right">
            <p>By incorporating energy-efficient systems, low-carbon materials and adaptable layouts that evolve with advancing technologies and changing passenger needs, we help airports reduce life-cycle costs, improve climate resilience and sustain reliable performance into the future.</p>
            <Link href="/construction/expertise/sustainability" className="banner-btn">
              Sustainability <ArrowRightCircle />
            </Link>
          </div>
        </div>
      </section>

      {/* Airport Portfolio Grid */}
      <section className="airports-projects-section airports-container">
        <div className="projects-header-flex">
          <div className="projects-header-left">
            <h2 className="airports-section-heading">Partnering today to build the airports of tomorrow</h2>
          </div>
          <div className="projects-header-right">
            <p>SNS Construction has delivered over 50 terminal and concourse projects in over 20 major global airports in the last decade.</p>
            {/* <a href="#" className="portfolio-link">
              Airport portfolio <ArrowRightCircle />
            </a> */}
          </div>
        </div>

        <div className="projects-grid-3">
          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://i.ibb.co/m5y9S7KJ/Hartsfield-Jackson-Atlanta-International-Airport-ATL.jpg" alt="Hartsfield-Jackson Atlanta International Airport" />
            </div>
            <div className="project-card-title-bar">
              <h3>Hartsfield-Jackson Atlanta International Airport (ATL)</h3>
              <ArrowRightCircle />
            </div>
          </a>

          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://i.ibb.co/vvgVjRW8/Los-Angeles-International-Airport-LAX-Delta-Air-Lines-Maintenance.jpg" alt="Los Angeles International Airport" />
            </div>
            <div className="project-card-title-bar">
              <h3>Los Angeles International Airport (LAX), Delta Air Lines Maintenance</h3>
              <ArrowRightCircle />
            </div>
          </a>

          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://i.ibb.co/1fcF5FJN/Redmond-Municipal-Airport-RDM-Municipal-Airport-Expansion.jpg" alt="Redmond Municipal Airport" />
            </div>
            <div className="project-card-title-bar">
              <h3>Redmond Municipal Airport (RDM), Municipal Airport Expansion</h3>
              <ArrowRightCircle />
            </div>
          </a>
        </div>
      </section>

      {/* Careers Banner */}
      <section className="airports-careers-banner">
        <div className="airports-container careers-inner">
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
      {/* <section className="airports-news-section">
        <div className="airports-container">
          <h2 className="news-section-title">News & Foresight</h2>

          <div className="news-grid-4">
            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news1)?.src || (news1)} alt="Building the future of aviation" />
              </div>
              <div className="news-body">
                <span className="news-tag">PROJECT CASE STUDY</span>
                <h4>Building the future of aviation</h4>
                <p>The aviation industry drives more than 10 million global jobs and contributes over 5 percent of GDP—equivalent to $1.37 trillion in 2023—which underscores its...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news2)?.src || (news2)} alt="Sustainability: LaGuardia Airport Terminal B" />
              </div>
              <div className="news-body">
                <span className="news-tag">SUSTAINABILITY</span>
                <h4>Sustainability: LaGuardia Airport Terminal B...</h4>
                <p>This multi-billion project is part of a new vision for the overall redevelopment of LaGuardia Airport in Queens, New York. When complete, it will improve the traveling...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news3)?.src || (news3)} alt="Innovations in flight" />
              </div>
              <div className="news-body">
                <span className="news-tag">INNOVATION</span>
                <h4>Innovations in flight: Key construction trends across...</h4>
                <p>The art of flight has captivated humans since the Wright Brothers made history with their first powered flight in 1903, changing our world forever. Over the next century, the...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news4)?.src || (news4)} alt="Portland International Airport (PDX)" />
              </div>
              <div className="news-body">
                <span className="news-tag">PROJECT CASE STUDY</span>
                <h4>Portland International Airport (PDX): Delivering...</h4>
                <p>The Portland International Airport (PDX) Terminal Core Redevelopment shows how life cycle thinking and circular design can create long-term environmental, economic and...</p>
              </div>
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Airports;
