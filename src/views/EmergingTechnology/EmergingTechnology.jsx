"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import './EmergingTechnology.css';

import heroBg from '../../assets/images/st_hightech.jpg';
import learnImg1 from '../../assets/images/news_1.png';
import learnImg2 from '../../assets/images/project_datacenter_colocation.jpg';
import learnImg3 from '../../assets/images/card_infrastructure.png';
import learnImg4 from '../../assets/images/project_datacenter_hyperscale.jpg';

import contactImg1 from '../../assets/images/bryan_northrop.jpg';
import contactImg2 from '../../assets/images/mendy_mazzo.jpg';
import contactImg3 from '../../assets/images/christopher_westley.png';
import contactImg4 from '../../assets/images/mendy_mazzo.jpg';

const sliderArticles = [
  {
    slug: 'ai-agents',
    tag: 'EMERGING TECHNOLOGY',
    title: 'Construction Companies See Promise in AI Agents',
    desc: 'New AI tools are helping managers stay on top of the complex processes underpinning an exploding sector.',
    image: "https://images.pexels.com/photos/8470776/pexels-photo-8470776.jpeg"
  },
  {
    slug: 'data-future',
    tag: 'INNOVATION',
    title: 'Meet the individuals powering our data future',
    desc: "SNS Construction's digital and transformation solutions team is helping project teams work smarter—connecting information, reducing manual effort, and enabling faster, more...",
    image: "https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg"
  },
  {
    slug: 'tapping-possibilities',
    tag: 'EMERGING TECHNOLOGY',
    title: 'Tapping into the possibilities of construction technology',
    desc: 'The construction industry is evolving at a rapid pace, driven by innovative technologies that enhance safety, productivity and efficiency on jobsites. At SNS Construction, team...',
    image: "https://images.pexels.com/photos/35885303/pexels-photo-35885303.jpeg"
  },
  {
    slug: 'unlocking-insights',
    tag: 'EMERGING TECHNOLOGY',
    title: 'Unlocking business insights with data',
    desc: "Data isn't just a buzzword at SNS Construction. We must continually innovate and implement new and efficient ways of working that support our people and exceed our...",
    image: "https://images.pexels.com/photos/39052113/pexels-photo-39052113.jpeg"
  }
];

function EmergingTechnology() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlide = Math.max(0, sliderArticles.length - visibleCards);

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const progressPercent = sliderArticles.length > 0
    ? ((currentSlide + visibleCards) / sliderArticles.length) * 100
    : 0;

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: '...', path: null },
    { label: 'Expertise', path: '/construction/expertise' },
    { label: 'Emerging Technology', path: null },
  ];

  return (
    <div className="emerging-tech-page">
      <div className="emerging-breadcrumbs emerging-container">
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
      <section className="emerging-hero-section emerging-container">
        <div className="emerging-hero-top-grid">
          <div className="emerging-hero-heading-col">
            <h1 className="emerging-hero-heading">Emerging Technology</h1>
          </div>
          <div className="emerging-hero-text-col">
            <p>With a builder-led approach, we evaluate and implement traditional and emerging technologies through a practical, project-focused lens, balancing innovation, risk and measurable value for our teams and customers.</p>
          </div>
        </div>
        <div className="emerging-hero-bg">
          <img src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg" alt="Emerging Technology" />
        </div>
      </section>

      {/* Optimizing outcomes */}
      <section className="optimizing-section emerging-container">
        <h2 className="optimizing-title">Optimizing project outcomes through data</h2>
        
        <div className="optimizing-grid">
          <div className="optimizing-card">
            <div className="opt-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3>Improving project outcomes with tested technologies</h3>
            <p>By leveraging modern tools and intelligent automation, teams gain clearer insights, reduce manual effort and make better-informed decisions, ultimately delivering higher quality results with greater efficiency.</p>
          </div>
          <div className="optimizing-card">
            <div className="opt-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
                <path d="M13 17l2-2 2 2 3-3"></path>
              </svg>
            </div>
            <h3>Making data-informed decisions</h3>
            <p>We use millions of past project data points and our decades of experience to guide every stage of your project with clear insights for more predictable outcomes.</p>
          </div>
          <div className="optimizing-card">
            <div className="opt-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 1v22"></path>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3>Delivering value with responsible investments</h3>
            <p>We make intentional investments in emerging technology, backed by rigorous testing and real-world validation, to provide solutions that deliver meaningful value and strengthen outcomes.</p>
          </div>
          <div className="optimizing-card">
            <div className="opt-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3>Empowering teams with AI tools</h3>
            <p>Our teams use AI as a practical partner in project work—analyzing large data sets, spotting trends and surfacing insights to make smarter, faster decisions.</p>
          </div>
        </div>
      </section>

      {/* Learn More Slider */}
      <section className="learn-more-section emerging-container">
        <h2 className="learn-more-title">Learn more</h2>
        <div className="learn-more-slider-container">
          <div 
            className="learn-more-track"
            style={{ 
              transform: `translateX(calc(-${currentSlide} * (100% + 24px) / ${visibleCards}))`
            }}
          >
            {sliderArticles.map((art, idx) => (
              <Link 
                href={`/construction/expertise/emerging-technology/${art.slug}`} 
                key={art.slug} 
                className="emerging-learn-card"
                style={{ 
                  flex: `0 0 calc((100% - 24px * (${visibleCards} - 1)) / ${visibleCards})`
                }}
              >
                <img src={(art.image)?.src || (art.image)} alt={art.title} />
                <div className="emerging-learn-card-body">
                  <span className="emerging-learn-tag">{art.tag}</span>
                  <h4 className="emerging-learn-title">{art.title}</h4>
                  <p className="emerging-learn-desc">{art.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="slider-bottom-bar">
          <div className="slider-progress-track">
            <div 
              className="slider-progress-fill"
              style={{ 
                width: `${progressPercent}%`,
                transition: 'width 0.3s ease'
              }}
            ></div>
          </div>
          <div className="slider-controls">
            <button 
              className="control-btn prev" 
              onClick={handlePrev}
              disabled={currentSlide === 0}
            >
              ←
            </button>
            <button 
              className="control-btn next" 
              onClick={handleNext}
              disabled={currentSlide >= maxSlide}
            >
              →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EmergingTechnology;
