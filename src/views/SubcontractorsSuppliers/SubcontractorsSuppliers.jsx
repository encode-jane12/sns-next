"use client";
import React from 'react';
import Link from 'next/link';

import './SubcontractorsSuppliers.css';

import heroBg from '../../assets/images/hero_worker.png';
import civilImg from '../../assets/images/card_infrastructure.png';
import buildingImg from '../../assets/images/card_buildings.png';

import news1 from '../../assets/images/news_1.png';
import news2 from '../../assets/images/hero_airport.png';
import news3 from '../../assets/images/news_2.png';
import news4 from '../../assets/images/news_3.png';

function SubcontractorsSuppliers() {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: '...', path: null },
    { label: 'Approach', path: '/construction/approach' },
    { label: 'Subcontractors & Suppliers', path: null },
  ];

  return (
    <div className="subcontractors-page">

      {/* Hero Section */}
      <section className="subcontractors-hero-section">
        <div className="subcontractors-hero-bg">
          <img src="https://images.pexels.com/photos/8853523/pexels-photo-8853523.jpeg" alt="Subcontractors & Suppliers" />
        </div>
        <div className="subcontractors-hero-content program-container">
          <div className="subcontractors-hero-grid">
            <div className="subcontractors-hero-title-col">
              <h1>Subcontractors &amp; Suppliers</h1>
            </div>
            <div className="subcontractors-hero-intro-col">
              <p>SNS Construction's mission is to maximize opportunities for subcontractors and suppliers through inclusive business practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="subcontractors-breadcrumbs program-container">
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

      {/* Intro Block */}
      <section className="subcontractors-intro-section program-container">
        <div className="intro-grid">
          <div className="intro-left">
            <h2>Partner with SNS Construction</h2>
          </div>
          <div className="intro-right">
            <p>Our goal is to build lasting relationships, not just make a one-time connection. Along the way, we share resources, training, and opportunities that help subcontractors and suppliers navigate our industry and pursue new opportunities.</p>
          </div>
        </div>
      </section>

      {/* Jumbotron 1: Partner with USA Civil */}
      <section id="partner-civil" className="jumbotron-section program-container">
        <div className="jumbotron-card">
          <div className="jumbotron-left">
            <h2>Partner with USA Civil</h2>
            <p>Working with USA Civil means clear communication, fair collaboration and opportunities to contribute to impactful infrastructure work.</p>

          </div>
          <div className="jumbotron-right">
            <img src="https://images.pexels.com/photos/5928108/pexels-photo-5928108.jpeg" alt="Partner with USA Civil" />
          </div>
        </div>
      </section>

      {/* Jumbotron 2: Partner with USA Building */}
      <section id="partner-building" className="jumbotron-section program-container">
        <div className="jumbotron-card">
          <div className="jumbotron-left">
            <h2>Partner with USA Building</h2>
            <p>Working with USA Building means clear expectations, professional teams and a shared focus on building for a better society.</p>
          </div>
          <div className="jumbotron-right">
            <img src="https://images.pexels.com/photos/18192434/pexels-photo-18192434.jpeg" alt="Partner with USA Building" />
          </div>
        </div>
      </section>

      {/* News & Foresight Section (Dark Blue Background) */}
      {/* <section className="program-news-section">
        <div className="program-container">
          <h2 className="news-heading">News &amp; Foresight</h2>
          
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
                <h4>Women in Construction Week: Highlighting career</h4>
                <p>Careers in construction are built over time shaped by pivotal moments, trusted mentors and the willingness to take on new challenges. In recognition of Women in...</p>
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

export default SubcontractorsSuppliers;
