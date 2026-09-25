"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

import './Ethics.css';

import heroImg from '../../assets/images/card_careers.png';
import codeImg from '../../assets/images/code_of_conduct_v2.jpg';

import card1Img from '../../assets/images/news_1.png';
import card2Img from '../../assets/images/project_san_antonio.jpg';
import card3Img from '../../assets/images/news_2.png';

const ArrowRightCircle = () => (
  <span className="accent-circle-arrow">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
);

const ExternalLinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const DownloadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF2828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const Ethics = () => {
  useEffect(() => {
    document.title = 'Ethics & Compliance | SNS Construction';
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: '...', path: null },
    { label: 'Approach', path: '/' },
    { label: 'Ethics', path: null },
  ];

  return (
    <div className="ethics-page">
      {/* Hero Section */}
      <section className="ethics-hero-wrapper">
        <div className="ethics-container">
          <div className="ethics-breadcrumbs">
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

          <div className="ethics-hero-header">
            <h1 className="ethics-hero-title">Ethics</h1>
            <p className="ethics-hero-subtitle">
              Rooted in our commitment to integrity and transparency, we strengthen trust through ethical decision-making and clear communication, creating a more accountable, lower-risk project experience for our clients.
            </p>
          </div>

          <div className="ethics-hero-media">
            <img src="https://images.pexels.com/photos/12759924/pexels-photo-12759924.jpeg" alt="SNS Construction Ethics and Culture" />
          </div>
        </div>
      </section>

      {/* Our Code of Conduct Section */}
      <section className="ethics-code-section ethics-container">
        <div className="code-grid">
          <div className="code-text-col">
            <h2 className="code-heading">Our Code of Conduct</h2>
            <p className="code-desc">
              We live by our Code of Conduct and never accept shortcuts—doing the right thing is built into our processes, culture, partner relationships and procurement practices. Our Code of Conduct applies to every SNS Construction employee worldwide, defining how we work and reinforcing our zero-tolerance stance on corruption, bribery, unfair or anticompetitive behavior, discrimination and harassment.
            </p>
            <Link href="/about-us/sns-construction/our-code-of-conduct" className="code-link">
              Read our Code of Conduct <ArrowRightCircle />
            </Link>
          </div>

          <div className="code-image-col">
            <img src="https://i.ibb.co/4RWzWWpW/ococ.png" alt="SNS Construction Code of Conduct" />
          </div>
        </div>
      </section>

      {/* Guided by our values Banner */}
      <section className="ethics-values-banner">
        <div className="ethics-container values-inner">
          <div className="values-left">
            <h2>Guided by our values</h2>
          </div>

          <div className="values-right-grid">
            <div className="value-card">
              <h3>Care for life</h3>
              <p>Caring for the health and safety of people and our environment lies at the heart of what we do.</p>
            </div>

            <div className="value-card">
              <h3>Act ethically and transparently</h3>
              <p>We lead with integrity and transparency, encourage open dialogue and live by our Code of Conduct.</p>
            </div>

            <div className="value-card">
              <h3>Be better together</h3>
              <p>We do our best work together—listening, learning and sharing knowledge to foster inclusion and deliver better solutions.</p>
            </div>

            <div className="value-card">
              <h3>Commit to customers</h3>
              <p>Our customers' success is our success. We listen closely to deliver smarter, more sustainable solutions that bring their visions to life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics in Action Section */}
      <section className="ethics-action-section ethics-container">
        <div className="action-header-flex">
          <div className="action-header-left">
            <h2 className="action-heading">Ethics in action</h2>
          </div>
          <div className="action-header-right">
            <p>From our workplace to our marketplace and society, we act with integrity, accountability and respect in everything we do.</p>
          </div>
        </div>

        <div className="action-grid-3">
          <div className="action-card">
            <div className="action-card-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                <line x1="9" y1="6" x2="15" y2="6"></line>
                <line x1="9" y1="10" x2="15" y2="10"></line>
                <line x1="9" y1="14" x2="15" y2="14"></line>
              </svg>
            </div>
            <h3>Our workplace</h3>
            <p>Setting high standards of safety, dignity, equality, and inclusion for every employee on every jobsite.</p>
          </div>

          <div className="action-card">
            <div className="action-card-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                <line x1="2" y1="12" x2="22" y2="12"></line>
              </svg>
            </div>
            <h3>Our marketplace</h3>
            <p>Upholding fair competition, transparent procurement, anti-bribery protocols, and zero tolerance for corruption.</p>
          </div>

          <div className="action-card action-card-primary">
            <div className="action-card-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              </svg>
            </div>
            <h3>Society</h3>
            <p>Contributing positively to local communities, environmental care, and sustainable ethical business standards.</p>
          </div>
        </div>
      </section>

      {/* How to Report a Concern Banner */}
      <section className="ethics-report-banner">
        <div className="ethics-container report-inner">
          <div className="report-left">
            <h2>How to report a concern</h2>
          </div>

          <div className="report-right">
            <p>
              Each SNS Construction business unit has an ethics committee that investigates all reports. One way to make reports is through our Code of Conduct Hotline. Mail <strong>ethics@snsconstructioninc.com</strong> and use organization code <strong>173542688</strong>. This is accessible to both employees and outside parties, including clients, suppliers and subcontractors.
            </p>
            {/* <Link href="/about-us/sns-construction/our-code-of-conduct" className="report-btn">
              Learn more here <ArrowRightCircle />
            </Link> */}
          </div>
        </div>
      </section>

      {/* Related Information Section */}
      {/* <section className="ethics-related-section ethics-container">
        <h2 className="related-heading">Related information</h2>

        <div className="related-grid-2">
          <div className="related-item">
            <div className="related-info">
              <h4>Code of Conduct - English</h4>
              <span>pdf (5 mb)</span>
            </div>
            <DownloadIcon />
          </div>

          <div className="related-item">
            <div className="related-info">
              <h4>Code of Conduct - Spanish</h4>
              <span>pdf (5 mb)</span>
            </div>
            <DownloadIcon />
          </div>

          <div className="related-item">
            <div className="related-info">
              <h4>Supplier Code of Conduct - English</h4>
              <span>pdf (2 mb)</span>
            </div>
            <DownloadIcon />
          </div>

          <div className="related-item">
            <div className="related-info">
              <h4>Supplier Code of Conduct - Spanish</h4>
              <span>pdf (940 kb)</span>
            </div>
            <DownloadIcon />
          </div>

          <Link href="/about-us/sns-construction/our-code-of-conduct" className="related-item related-link">
            <div className="related-info">
              <h4>How to report a concern</h4>
              <span>Internal link</span>
            </div>
            <ArrowRightCircle />
          </Link>

          <a href="#" className="related-item related-link">
            <div className="related-info">
              <h4>SNS SmartCode (for employees)</h4>
              <span>External link</span>
            </div>
            <ExternalLinkIcon />
          </a>
        </div>
      </section> */}

      {/* Learn More Section */}
      {/* <section className="ethics-learn-section ethics-container">
        <h2 className="learn-heading">Learn more</h2>

        <div className="learn-grid-3">
          <a href="#" className="learn-card">
            <div className="learn-img-holder">
              <img src={(card1Img)?.src || (card1Img)} alt="Care for Life in action" />
            </div>
            <div className="learn-body">
              <span className="learn-tag">SAFETY</span>
              <h4>Care for Life in action: How we can make safety real and actionable</h4>
              <p>Six years ago, SNS Construction introduced our four core values: Care for Life, Be Better Together, Act Ethically & Transparently and Commit to Customers...</p>
            </div>
          </a>

          <a href="#" className="learn-card">
            <div className="learn-img-holder">
              <img src={(card2Img)?.src || (card2Img)} alt="Civic Park at Hemisfair" />
            </div>
            <div className="learn-body">
              <span className="learn-tag">PROJECT CASE STUDY</span>
              <h4>Civic Park at Hemisfair: A project win rooted in collaboration</h4>
              <p>A regional first. A masterclass in collaboration. This is the story of Civic Park at Hemisfair (Civic Park)—a prime example of Be Better Together...</p>
            </div>
          </a>

          <a href="#" className="learn-card">
            <div className="learn-img-holder">
              <img src={(card3Img)?.src || (card3Img)} alt="Mental health training" />
            </div>
            <div className="learn-body">
              <span className="learn-tag">SAFETY</span>
              <h4>Mental health training empowers employees to support peers</h4>
              <p>Too often, talking about hard and real feelings of stress, anxiety or hopelessness at work feels uncomfortable and even taboo. Through Mental Health First Aid...</p>
            </div>
          </a>
        </div>
      </section> */}
    </div>
  );
};

export default Ethics;
