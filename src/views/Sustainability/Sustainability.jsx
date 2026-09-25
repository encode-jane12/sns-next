"use client";
import React from 'react';
import Link from 'next/link';

import './Sustainability.css';

import heroBg from '../../assets/images/parks_ny_climate.jpg';

import case1 from '../../assets/images/project_st_nicholas.jpg';
import case2 from '../../assets/images/project_datacenter_colocation.jpg';
import case3 from '../../assets/images/hero_airport.png';
import case4 from '../../assets/images/commercial_office_hero.jpg';

import learn1 from '../../assets/images/news_2.png';
import learn2 from '../../assets/images/news_1.png';
import learn3 from '../../assets/images/st_cleanrooms.png';
import learn4 from '../../assets/images/project_frost.jpg';

import contact1 from '../../assets/images/bryan_northrop.jpg';
import contact2 from '../../assets/images/tieg_murray.jpg';
import contact3 from '../../assets/images/mendy_mazzo.jpg';
import contact4 from '../../assets/images/christopher_westley.png';

function Sustainability() {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: '...', path: null },
    { label: 'Expertise', path: '/construction/expertise' },
    { label: 'Sustainability', path: null },
  ];

  return (
    <div className="sustainability-page">
      {/* Breadcrumbs */}
      <div className="sustainability-breadcrumbs sustainability-container">
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

      {/* Hero Section */}
      <section className="sustainability-hero-section sustainability-container">
        <div className="sustainability-hero-top-grid">
          <div className="sustainability-hero-heading-col">
            <h1 className="sustainability-hero-heading">Sustainability</h1>
          </div>
          <div className="sustainability-hero-text-col">
            <p>As global leaders in sustainability, we build and develop innovative and resilient structures that reduce operational risk, improve efficiency and secure long-term value for our customers and society.</p>
          </div>
        </div>
        <div className="sustainability-hero-bg">
          <img src="https://images.pexels.com/photos/4320475/pexels-photo-4320475.jpeg" alt="Sustainability" />
        </div>
      </section>

      {/* Sustainable Innovation Grid */}
      <section className="innovation-section sustainability-container">
        <h2 className="section-title">Sustainable innovation</h2>

        <div className="innovation-grid">
          <div className="innovation-card">
            <div className="innov-icon">📊</div>
            <p>Reporting since 1997</p>
            <button className="plus-circle">+</button>
          </div>
          <div className="innovation-card">
            <div className="innov-icon">👥</div>
            <p>Charter member of ISI</p>
            <button className="plus-circle">+</button>
          </div>
          <div className="innovation-card">
            <div className="innov-icon">🏡</div>
            <p>Sustainable by design</p>
            <button className="plus-circle">+</button>
          </div>
          <div className="innovation-card">
            <div className="innov-icon">💻</div>
            <p>Co-creating the EC3 Tool</p>
            <button className="plus-circle">+</button>
          </div>
          <div className="innovation-card">
            <div className="innov-icon">📖</div>
            <p>Co-creating the AGC Playbook</p>
            <button className="plus-circle">+</button>
          </div>
          <div className="innovation-card">
            <div className="innov-icon">🏢</div>
            <p>Most Living Building Challenge<sup>SM</sup> projects</p>
            <button className="plus-circle">+</button>
          </div>
          <div className="innovation-card">
            <div className="innov-icon">🔗</div>
            <p>Building sustainable supply chains</p>
            <button className="plus-circle">+</button>
          </div>
        </div>
      </section>

      {/* Target Banner */}
      <section className="target-banner-section">
        <div className="sustainability-container target-grid">
          <div className="target-left">
            <h2>Our zero-carbon emission target</h2>
          </div>
          <div className="target-right">
            <p>We aim to achieve net-zero carbon emissions by 2045 within our own operations and across our entire value chain, leveraging innovation and partnerships to accelerate progress. By 2030, our construction units will have reduced Scope 1 and 2 emissions by 70 percent, and our development units will have reduced their Scope 3 emissions by 50 percent.</p>
          </div>
        </div>
      </section>

      {/* Sustainable Solutions Section */}
      <section className="solutions-section sustainability-container">
        <div className="solutions-header">
          <div className="solutions-header-left">
            <h2>Sustainable solutions</h2>
          </div>
          <div className="solutions-header-right">
            <p>We help customers reduce risk, operate more efficiently and maximize long-term value through sustainable solutions.</p>
          </div>
        </div>

        <div className="solutions-grid">
          <div className="solution-card">
            <img src="https://media.newyorker.com/photos/5ffe08198071ee487250ddfb/master/w_2560%2Cc_limit/Volner-MoynihanTrainHall.jpg" alt="Moynihan Train Hall" />
            <div className="solution-card-body">
              <div className="solution-title-flex">
                <h3>Moynihan Train Hall</h3>
                <span className="">✅</span>
              </div>
              <p>Reducing operational risk</p>
            </div>
          </div>

          <div className="solution-card">
            <img src="https://perkinswill.com/wp-content/uploads/2024/01/ASHRAE_hero-1200x900-cropped.jpg" alt="ASHRAE Headquarters" />
            <div className="solution-card-body">
              <div className="solution-title-flex">
                <h3>ASHRAE, New Global Headquarters</h3>
                <span className="">✅</span>
              </div>
              <p>Improving operational efficiency</p>
            </div>
          </div>

          <div className="solution-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOfGdH0S4anizIg5-DqYooiN1Qf4TV1wKP1lifVoGROyPcwkbvNyoDNt4&s=10" alt="PDX Terminal" />
            <div className="solution-card-body">
              <div className="solution-title-flex">
                <h3>Portland International Airport (PDX), Terminal Core Redevelopment</h3>
                <span className="">✅</span>
              </div>
              <p>Delivering long-term value through life-cycle thinking</p>
            </div>
          </div>

          <div className="solution-card">
            <img src="https://s.hdnux.com/photos/01/41/53/45/25606481/3/1920x0.jpg" alt="Norton Rose Fulbright" />
            <div className="solution-card-body">
              <div className="solution-title-flex">
                <h3>Norton Rose Fulbright Tower</h3>
                <span className="">✅</span>
              </div>
              <p>Strengthening urban life through integrated planning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Consulting (Blue Section) */}
      <section className="consulting-section">
        <div className="sustainability-container consulting-flex">
          <div className="consulting-left">
            <h2>Experience and consulting</h2>
          </div>
          <div className="consulting-right">
            <div className="consulting-card">
              <div className="consulting-icon">💬</div>
              <h3>Foundational consulting services</h3>
              <p>We partner with organizations to close knowledge and resource gaps, offering hands-on guidance that strengthens planning, communications and operations.</p>
            </div>

            <div className="consulting-card">
              <div className="consulting-icon">📜</div>
              <h3>Certification administration and support</h3>
              <p>With experience across a range of sustainability certifications and project types, our sustainability team offers guidance to help each individual project achieve the relevant certification.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More Slider */}
      {/* <section className="learn-more-section sustainability-container">
        <h2 className="learn-more-title">Learn more</h2>
        <div className="learn-more-grid">
          <a href="#" className="sustainability-learn-card">
            <img src={(learn1)?.src || (learn1)} alt="People Showcase" />
            <div className="sustainability-learn-card-body">
              <span className="sustainability-learn-tag">PEOPLE SHOWCASE</span>
              <h4 className="sustainability-learn-title">The next generation has entered the jobsite</h4>
              <p className="sustainability-learn-desc">Construction is evolving fast — from AI and digital tools to sustainability expectations and new workforce priorities. Today's interns, digital natives stepping onto jobsites across...</p>
            </div>
          </a>

          <a href="#" className="sustainability-learn-card">
            <img src={(learn2)?.src || (learn2)} alt="Inclusion & Diversity" />
            <div className="sustainability-learn-card-body">
              <span className="sustainability-learn-tag">INCLUSION &amp; DIVERSITY</span>
              <h4 className="sustainability-learn-title">Women in Timber: How a SNS Construction leader is...</h4>
              <p className="sustainability-learn-desc">Working in the heart of Portland's thriving architecture and construction scene, Whitney Geier, marketing director at SNS Construction, saw firsthand how women were shaping the...</p>
            </div>
          </a>

          <a href="#" className="sustainability-learn-card">
            <img src={(learn3)?.src || (learn3)} alt="Sustainability" />
            <div className="sustainability-learn-card-body">
              <span className="sustainability-learn-tag">SUSTAINABILITY</span>
              <h4 className="sustainability-learn-title">The future of construction is circular: five proven...</h4>
              <p className="sustainability-learn-desc">In construction, the supply chain is more than a logistical issue. Every building starts with a supply chain, and the choices made along the way shape not only the project's footprint...</p>
            </div>
          </a>

          <a href="#" className="sustainability-learn-card">
            <img src={(learn4)?.src || (learn4)} alt="Project Case Study" />
            <div className="sustainability-learn-card-body">
              <span className="sustainability-learn-tag">PROJECT CASE STUDY</span>
              <h4 className="sustainability-learn-title">Renovating Houston's historic Riverside Hospital</h4>
              <p className="sustainability-learn-desc">In the heart of Houston's Third Ward, a major transformation is underway. SNS Construction is partnering with Harris County to revamp the historic Riverside Hospital, a site that was...</p>
            </div>
          </a>
        </div>

        <div className="slider-bottom-bar">
          <div className="slider-progress-track">
            <div className="slider-progress-fill"></div>
          </div>
          <div className="slider-controls">
            <button className="control-btn prev">←</button>
            <button className="control-btn next">→</button>
          </div>
        </div>
      </section> */}

      {/* Additional Resources */}
      {/* <section className="resources-section sustainability-container">
        <div className="resources-flex">
          <div className="resources-left">
            <h2>Additional resources to explore</h2>
          </div>
          <div className="resources-right">
            <a href="#" className="resource-link-card">
              <div className="resource-text">
                <h4>Annual and Sustainability Report 2025</h4>
                <p>External link</p>
              </div>
              <span className="ext-icon">↗</span>
            </a>
            <a href="#" className="resource-link-card">
              <div className="resource-text">
                <h4>Archive of all Annual and Sustainability reports</h4>
                <p>External link</p>
              </div>
              <span className="ext-icon">↗</span>
            </a>
            <a href="#" className="resource-link-card">
              <div className="resource-text">
                <h4>Foresight Blog</h4>
                <p>External link</p>
              </div>
              <span className="ext-icon">↗</span>
            </a>
            <a href="#" className="resource-link-card">
              <div className="resource-text">
                <h4>Shaping Sustainable Places Podcast</h4>
                <p>External link</p>
              </div>
              <span className="ext-icon">↗</span>
            </a>
          </div>
        </div>
      </section> */}

      {/* Get in Touch Section */}
      {/* <section className="sustainability-contact-section">
        <div className="sustainability-container contact-flex">
          <div className="contact-left">
            <h2>Get in touch</h2>
          </div>
          <div className="contact-right">
            <div className="contact-card">
              <img src={(contact1)?.src || (contact1)} alt="Claire Dupont" />
              <div className="contact-info">
                <span className="contact-dept">BUILDINGS</span>
                <h4>Claire Dupont</h4>
                <p>Chief Architect & Sustainability Lead</p>
                <button className="btn-accent-pill">Get in touch</button>
              </div>
            </div>

            <div className="contact-card">
              <img src={(contact2)?.src || (contact2)} alt="Jonathan Vance" />
              <div className="contact-info">
                <span className="contact-dept">BUILDINGS</span>
                <h4>Jonathan Vance</h4>
                <p>Executive VP of Global Safety</p>
                <button className="btn-accent-pill">Get in touch</button>
              </div>
            </div>

            <div className="contact-card">
              <img src={(contact3)?.src || (contact3)} alt="Ravi Bhatia" />
              <div className="contact-info">
                <span className="contact-dept">INFRASTRUCTURE</span>
                <h4>Ravi Bhatia</h4>
                <p>Business Development Manager</p>
                <button className="btn-accent-pill">Get in touch</button>
              </div>
            </div>

            <div className="contact-card">
              <img src={(contact4)?.src || (contact4)} alt="Vikramaditya Rao" />
              <div className="contact-info">
                <span className="contact-dept">DEVELOPMENT</span>
                <h4>Vikramaditya Rao</h4>
                <p>VP of Project Execution</p>
                <button className="btn-accent-pill">Get in touch</button>
              </div>
            </div>
          </div>
          <div className="scroll-to-top-col">
            <button className="scroll-top-btn">↑</button>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Sustainability;
