"use client";
import React from 'react';
import Link from 'next/link';

import './ProgramManagement.css';

import heroBg from '../../assets/images/hero_construction.png';
import proj1 from '../../assets/images/card_buildings.png';
import proj2 from '../../assets/images/project_datacenter_colocation.jpg';
import proj3 from '../../assets/images/card_infrastructure.png';

import news1 from '../../assets/images/news_1.png';
import news2 from '../../assets/images/hero_airport.png';
import news3 from '../../assets/images/news_2.png';
import news4 from '../../assets/images/news_3.png';

import contactImg from '../../assets/images/bryan_northrop.jpg';

function ProgramManagement() {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: '...', path: null },
    { label: 'Expertise', path: '/construction/expertise' },
    { label: 'Program Management', path: null },
  ];

  return (
    <div className="program-mgmt-page">
      {/* Hero Section */}
      <section className="program-hero-section">
        <div className="program-hero-bg">
          <img src="https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg" alt="SNS Construction Integrated Solutions" />
        </div>
        <div className="program-hero-content program-container">
          <div className="program-hero-grid">
            <div className="program-hero-title-col">
              <h1>SNS Construction Integrated Solutions</h1>
            </div>
            <div className="program-hero-intro-col">
              <p>Proven program and project management empowered by real-world insights and global resources that reduce risk, maximize value and deliver peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="program-breadcrumbs program-container">
        {breadcrumbs.map((crumb, idx) => (
          <React.Fragment key={idx}>
            {crumb.path ? (
              <Link href={crumb.path} className="crumb-link">{crumb.label}</Link>
            ) : (
              <span className="crumb-current">{crumb.label}</span>
            )}
            {idx < breadcrumbs.length - 1 && <span className="crumb-separator">/</span>}
          </React.Fragment>
        ))}
      </div>

      {/* Benefits Section */}
      <section className="program-benefits-section program-container">
        <div className="benefits-grid">
          <div className="benefits-left">
            <h2>As an owner’s representative with a builder’s background and mindset, we provide the following benefits.</h2>
          </div>
          <div className="benefits-right">
            <div className="benefits-2x2">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </div>
                <p>Leverage our construction experience to anticipate and mitigate risks</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                </div>
                <p>Lower costs by identifying savings early and avoiding rework</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                </div>
                <p>Enhance quality and efficiency through consistent standards and best practices</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <p>Improve outcomes by embedding sustainability into every stage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifecycle Section (Blue Background) */}
      <section className="program-lifecycle-section">
        <div className="program-container">
          <h2 className="lifecycle-heading">Our unmatched project ownership and engagement maximize opportunities throughout your project’s life cycle.</h2>

          <div className="lifecycle-grid">
            <div className="lifecycle-card">
              <div className="lifecycle-card-top">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div className="lifecycle-card-bottom">
                <span>Pre-development phase</span>
                <span className="plus-btn">+</span>
              </div>
            </div>

            <div className="lifecycle-card">
              <div className="lifecycle-card-top">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className="lifecycle-card-bottom">
                <span>Project definition</span>
                <span className="plus-btn">+</span>
              </div>
            </div>

            <div className="lifecycle-card active">
              <div className="lifecycle-card-top">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <div className="lifecycle-card-bottom">
                <span>Design phase</span>
                <span className="plus-btn">+</span>
              </div>
            </div>

            <div className="lifecycle-card">
              <div className="lifecycle-card-top">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className="lifecycle-card-bottom">
                <span>Construction phase</span>
                <span className="plus-btn">+</span>
              </div>
            </div>
          </div>

          {/* <div className="slider-bottom-bar dark-theme">
            <div className="slider-progress-track">
              <div className="slider-progress-fill"></div>
            </div>
            <div className="slider-controls">
              <button className="control-btn prev">←</button>
              <button className="control-btn next">→</button>
            </div>
          </div> */}
        </div>
      </section>

      {/* Notable Projects Section */}
      {/* <section className="program-projects-section program-container">
        <div className="projects-header">
          <div className="projects-header-left">
            <h2>Notable projects</h2>
          </div>
          <div className="projects-header-right">
            <p>Our program management portfolio spans geographies and diverse markets across the United States.</p>
            <a href="#" className="view-projects-link">
              View projects <span className="accent-circle-arrow">→</span>
            </a>
          </div>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <img src={(proj1)?.src || (proj1)} alt="San Gabriel and Lower LA Rivers" />
            <div className="project-card-info">
              <h3>San Gabriel and Lower LA Rivers and Mountains...</h3>
              <p>Compton, California</p>
              <span className="accent-circle-arrow">→</span>
            </div>
          </div>

          <div className="project-card">
            <img src={(proj2)?.src || (proj2)} alt="County of Lehigh, Cedarbrook" />
            <div className="project-card-info">
              <h3>County of Lehigh, Cedarbrook Senior Care and Rehabilitation</h3>
              <p>Allentown, Pennsylvania</p>
              <span className="accent-circle-arrow">→</span>
            </div>
          </div>

          <div className="project-card">
            <img src={(proj3)?.src || (proj3)} alt="Santa Barbara County" />
            <div className="project-card-info">
              <h3>Santa Barbara County, Emergency Operations and...</h3>
              <p>Santa Barbara County, California</p>
              <span className="accent-circle-arrow">→</span>
            </div>
          </div>
        </div>

        <div className="slider-bottom-bar">
          <div className="slider-progress-track">
            <div className="slider-progress-fill" style={{ width: '33%' }}></div>
          </div>
          <div className="slider-controls">
            <button className="control-btn prev">←</button>
            <button className="control-btn next">→</button>
          </div>
        </div>
      </section> */}

      {/* Customer Quote Section */}
      <section className="program-quote-section program-container">
        <div className="quote-grid">
          <div className="quote-left">
            <h2>Hear it from our customers</h2>
          </div>
          <div className="quote-right">
            <div className="quote-item" style={{ borderTop: '1px solid #d9d9d9', paddingTop: '1.5rem', marginBottom: '1.5rem' }}>
              <p className="quote-text" style={{ marginBottom: '0.75rem' }}>
                "SNS Construction was key to the project’s success and completion on time and under budget. The surprise value, however, was the human element. There was a tangible concern from every member of the SNS Construction team for the project’s success that rivaled the concern we had as owners."
              </p>
              <p className="quote-author">— Mark Furtado, Attleboro Public Schools</p>
            </div>

            <div className="quote-item" style={{ borderTop: '1px solid #d9d9d9', paddingTop: '1.5rem', marginBottom: '1.5rem' }}>
              <p className="quote-text" style={{ marginBottom: '0.75rem' }}>
                "Their team brought structure, accountability, and real field expertise to a complex healthcare renovation. They coordinated across departments, kept the schedule moving, and maintained a level of professionalism that gave our staff confidence throughout the project."
              </p>
              <p className="quote-author">— Elena Rodriguez, Mercy Health System</p>
            </div>

            <div className="quote-item" style={{ borderTop: '1px solid #d9d9d9', paddingTop: '1.5rem' }}>
              <p className="quote-text" style={{ marginBottom: '0.75rem' }}>
                "We partnered with SNS on a high-visibility public works program, and what stood out most was their responsiveness. They understood the operational realities of our site, solved issues before they became disruptions, and delivered a finished product that met both quality and compliance expectations."
              </p>
              <p className="quote-author">— James Patel, City of Rancho Cucamonga</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="program-cta-section">
        <div className="program-container cta-grid">
          <div className="cta-left">
            <h2>Build your career with us.</h2>
          </div>
          <div className="cta-right">
            <p>Explore opportunities across markets and business units.</p>
            <Link href="/careers" className="btn-accent-pill">Open positions ↗</Link>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      {/* <section className="program-contact-section program-container">
        <div className="contact-flex">
          <div className="contact-left">
            <h2>Get in touch</h2>
          </div>
          <div className="contact-right">
            <div className="program-contact-card">
              <img src={(contactImg)?.src || (contactImg)} alt="Dr. Sunita Deshmukh" />
              <div className="program-contact-info">
                <span className="contact-dept">BUILDINGS</span>
                <h4>Dr. Sunita Deshmukh</h4>
                <p>Global COO, Integrated Solutions</p>
                <button className="btn-accent-pill">Get in touch</button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* News & Foresight Section (Dark Blue Background) */}
      {/* <section className="program-news-section">
        <div className="program-container">
          <h2 className="news-heading">News & Foresight</h2>
          
          <div className="news-grid">
            <div className="news-card">
              <img src={(news1)?.src || (news1)} alt="Innovation" />
              <div className="news-card-body">
                <span className="news-tag">INNOVATION</span>
                <h4>Meet the individuals powering our data future</h4>
                <p>SNS Construction's digital and transformation solutions team is helping project teams work smarter—connecting information, reducing manual effort, and enabling faster, more...</p>
              </div>
            </div>

            <div className="news-card">
              <img src={(news2)?.src || (news2)} alt="Project Case Study" />
              <div className="news-card-body">
                <span className="news-tag">PROJECT CASE STUDY</span>
                <h4>Behind the transformation: How MetLife Stadium...</h4>
                <p>When millions of fans around the world tuned in to watch the World Cup Final at MetLife Stadium, they saw the world's biggest sporting event unfold on soccer's grandest...</p>
              </div>
            </div>

            <div className="news-card">
              <img src={(news3)?.src || (news3)} alt="People Showcase" />
              <div className="news-card-body">
                <span className="news-tag">PEOPLE SHOWCASE</span>
                <h4>The next generation has entered the jobsite</h4>
                <p>Construction is evolving fast — from AI and digital tools to sustainability expectations and new workforce priorities. Today's interns, digital natives stepping onto jobsites across...</p>
              </div>
            </div>

            <div className="news-card">
              <img src={(news4)?.src || (news4)} alt="People Showcase" />
              <div className="news-card-body">
                <span className="news-tag">PEOPLE SHOWCASE</span>
                <h4>Lessons from a 41-year career in construction</h4>
                <p>After a 41-year career in construction, SNS Construction's Jim Link reflects on the lessons that shaped his leadership, the people who influenced him and why he remains optimist...</p>
              </div>
            </div>
          </div>

          <div className="slider-bottom-bar dark-theme">
            <div className="slider-progress-track">
              <div className="slider-progress-fill"></div>
            </div>
            <div className="slider-controls">
              <button className="control-btn prev">←</button>
              <button className="control-btn next">→</button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default ProgramManagement;
