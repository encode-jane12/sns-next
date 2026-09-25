"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

import './EnvironmentalHealthSafety.css';

import heroImg from '../../assets/images/hero_worker.png';
import videoPoster from '../../assets/images/project_st_nicholas.jpg';

import proj1Img from '../../assets/images/project_nycedc.jpg';
import proj2Img from '../../assets/images/higher_ed_academic.jpg';
import proj3Img from '../../assets/images/project_san_antonio.jpg';

import card1Img from '../../assets/images/sports_alamodome.jpg';
import card2Img from '../../assets/images/hero_construction.png';
import card3Img from '../../assets/images/news_1.png';
import card4Img from '../../assets/images/news_2.png';

const ArrowRightCircle = () => (
  <span className="">
    ✅
  </span>
);

const EnvironmentalHealthSafety = () => {
  useEffect(() => {
    document.title = 'Environmental Health and Safety | SNS Construction';
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: '...', path: null },
    { label: 'Approach', path: '/' },
    { label: 'Environmental Health and Safety', path: null },
  ];

  return (
    <div className="ehs-page">
      {/* Hero Section */}
      <section className="ehs-hero-wrapper">
        <div className="ehs-container">
          <div className="ehs-breadcrumbs">
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

          <div className="ehs-hero-header">
            <h1 className="ehs-hero-title">Environmental Health and Safety</h1>
            <p className="ehs-hero-subtitle">
              Guided by our Care for Life value, we minimize risk with precise planning and a comprehensive health and safety approach, shaping a safer, more innovative construction landscape.
            </p>
          </div>

          <div className="ehs-hero-media">
            <img src="https://images.pexels.com/photos/17166070/pexels-photo-17166070.jpeg" alt="SNS Construction Environmental Health & Safety" />
          </div>
        </div>
      </section>

      {/* Whole-Person Approach Section */}
      <section className="ehs-approach-section ehs-container">
        <div className="ehs-approach-grid">
          <div className="ehs-approach-left">
            <h2>Championing a whole-person approach to safety and wellness</h2>
          </div>
          <div className="ehs-approach-right">
            <p>
              Living out Care for Life means that safety and environmental responsibility are central to how we operate. On our jobsites, our Plan &gt; Do &gt; Check &gt; Act approach guides responsible work and equips teams with the training and resources to protect people and the planet.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications & Stats Banner */}
      <section className="ehs-stats-banner">
        <div className="ehs-container stats-grid-4">
          <div className="stat-box">
            <h3>ISO 45001</h3>
            <p>First contractor in the U.S. certified across operations to international EHS management system requirements</p>
          </div>
          <div className="stat-box">
            <h3>ISO 14001</h3>
            <p>Certified across operations, ensuring commitment to consistent environmental performance and continuous improvement</p>
          </div>
          <div className="stat-box">
            <h3>2,500+</h3>
            <p>Annual executive site safety visits to continue fostering a culture of safety</p>
          </div>
          <div className="stat-box">
            <h3>500+</h3>
            <p>SNS Construction employees certified in Mental Health First Aid to date</p>
          </div>
        </div>
      </section>

      {/* Integrated Planning Cards Section */}
      <section className="ehs-planning-section ehs-container">
        <h2 className="ehs-section-title">Creating safer jobsites through integrated planning</h2>
        
        <div className="planning-grid-4">
          <div className="planning-card">
            <div className="planning-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Injury-Free Environment® (IFE®)</h3>
            <p>Cultivating an Injury-Free Environment® (IFE®) requires laser-focused planning around the most serious hazards and our culture of accountability.</p>
          </div>

          <div className="planning-card">
            <div className="planning-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h3>SNS Construction Safety Sticker Program</h3>
            <p>Through our Safety Program, employees receive Mental Health First Aid training to serve as safe spaces for peers navigating mental health concerns.</p>
          </div>

          <div className="planning-card">
            <div className="planning-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3>Care for Life 5</h3>
            <p>Our Care for Life 5 (CFL5) framework creates awareness around five areas that account for 93 percent of serious incidents on jobsites.</p>
          </div>

          <div className="planning-card">
            <div className="planning-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
            </div>
            <h3>Care for Life Orientation</h3>
            <p>Care for Life Orientation helps individuals understand their role in safety, aligned with SNS Construction's commitment to Care for Life and IFE®.</p>
          </div>
        </div>
      </section>

      {/* Pioneering Safer Operations Row */}
      <section className="ehs-pioneering-section ehs-container">
        <h2 className="ehs-section-title">Pioneering safer operations</h2>
        <div className="pioneering-grid-6">
          <div className="pioneering-item">
            <div className="pioneering-icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <p>First ISO 14001 certification in U.S.</p>
          </div>

          <div className="pioneering-item">
            <div className="pioneering-icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
            </div>
            <p>Safety Week founding member</p>
          </div>

          <div className="pioneering-item">
            <div className="pioneering-icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
              </svg>
            </div>
            <p>Data-informed safety planning</p>
          </div>

          <div className="pioneering-item">
            <div className="pioneering-icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
              </svg>
            </div>
            <p>Improving jobsite safety through AI</p>
          </div>

          <div className="pioneering-item">
            <div className="pioneering-icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              </svg>
            </div>
            <p>National partnerships</p>
          </div>

          <div className="pioneering-item">
            <div className="pioneering-icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
            </div>
            <p>EHS Dashboard insights</p>
          </div>
        </div>
      </section>

      {/* Operational Continuity & Case Studies Grid */}
      <section className="ehs-continuity-section">
        <div className="ehs-container">
          <h2 className="ehs-section-title">Ensuring operational continuity</h2>
          
          <div className="continuity-grid-3">
            <a href="#" className="continuity-card">
              <div className="card-img-holder">
                <img src="https://velogroup.com/wp-content/uploads/2024/11/JUN24-LRV-at-Lynnwood-City-Center.jpg" alt="Lynnwood Link Extension Light Rail" />
              </div>
              <div className="card-title-bar">
                <h3>Lynnwood Link Extension (L300) Light Rail</h3>
                <ArrowRightCircle />
              </div>
              <p>On our Lynnwood Link Extension project in Lynnwood, Washington, our team aimed to protect local wildlife and environmental habitats.</p>
            </a>

            <a href="#" className="continuity-card">
              <div className="card-img-holder">
                <img src="https://www.simmons.edu/sites/default/files/styles/650x440/public/2025-04/llc-dining-hall-rendering.jpg?h=10d202d3&itok=Zn7h36yi" alt="Simmons University Living and Learning Center" />
              </div>
              <div className="card-title-bar">
                <h3>Simmons University Living and Learning Center</h3>
                <ArrowRightCircle />
              </div>
              <p>On the Simmons project, living out SNS Construction's Commit to Customer value has meant committing to safety for students who call Simmons home.</p>
            </a>

            <a href="#" className="continuity-card">
              <div className="card-img-holder">
                <img src="https://acp-assets.sfo3.cdn.digitaloceanspaces.com/assets/images/article_images/349E87E1-9DFF-4A4F-8BE0-F28D584A056D.webp" alt="North Coast Corridor" />
              </div>
              <div className="card-title-bar">
                <h3>North Coast Corridor Infrastructure Build</h3>
                <ArrowRightCircle />
              </div>
              <p>Delivering a remarkable infrastructure project in San Diego to strengthen environmental protection and improve safety for our community.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Video Spotlight Section */}
      <section className="ehs-video-section ehs-container">
        <div className="video-grid">
          <div className="video-text">
            <h2>Safety at Portal North Bridge</h2>
            <p>See how our team members are eliminating risk to create a safer jobsite on one of North America's largest bridge replacements.</p>
          </div>
          <div className="video-media">
            <img src="https://www.iceusa.com/files/A92F2C69-2DEA-45F9-B5C1-1B75E290A849--30AF8F00-E9D6-44C1-8F2C-6CE8AE570EAE/i62-66-50-22-mbogardus-stjv-northportalbridgenj-update.jpg?lc=03272025125229" alt="Safety at Portal North Bridge" />
          
          </div>
        </div>
      </section>

      {/* Creating Safe Inclusive Jobsites Banner */}
      <section className="ehs-inclusive-banner">
        <div className="ehs-container">
          <div className="inclusive-header">
            <h2>Creating safe, inclusive jobsites</h2>
            <p>By partnering with subcontractors to promote safety awareness on every jobsite, we foster an inclusive environment where everyone feels empowered to speak up about safety.</p>
          </div>

          <div className="inclusive-steps-grid">
            <div className="step-card">
              <span className="step-num">1</span>
              <h4>Prequalification</h4>
              <p>Rigorous vetting and safety alignment prior to project mobilization.</p>
            </div>
            <div className="step-card">
              <span className="step-num">2</span>
              <h4>Training</h4>
              <p>Continuous site orientations, mental health awareness, and specialized EHS modules.</p>
            </div>
            <div className="step-card">
              <span className="step-num">3</span>
              <h4>Planning</h4>
              <p>Task hazard analysis and daily pre-task planning for zero accidents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NYC DOB Courses Banner */}
      <section className="ehs-dob-section ehs-container">
        <div className="dob-grid">
          <div className="dob-left">
            <h2>NYC DOB Courses</h2>
          </div>
          <div className="dob-right">
            <p>Advance your jobsite safety knowledge with SNS Construction's NYC DOB approved courses designed to meet Local Law 196 requirements and support safer construction practices.</p>
            <a href="#" className="dob-btn">
              View NYC DOB Courses <ArrowRightCircle />
            </a>
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      {/* <section className="ehs-learn-section">
        <div className="ehs-container">
          <h2 className="learn-section-title">Learn more</h2>

          <div className="news-grid-4">
            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(card1Img)?.src || (card1Img)} alt="Stadium transformation" />
              </div>
              <div className="news-body">
                <span className="news-tag">PROJECT CASE STUDY</span>
                <h4>Behind the transformation: How MetLife Stadium...</h4>
                <p>When millions of fans around the world tuned in to watch the World Cup Final at MetLife Stadium, they saw the world's biggest sporting event unfold on soccer's grandest...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(card2Img)?.src || (card2Img)} alt="Superintendents jobsite daily build" />
              </div>
              <div className="news-body">
                <span className="news-tag">PEOPLE SHOWCASE</span>
                <h4>Inside the build: A day in the life of four SNS Construction superintendents...</h4>
                <p>SNS Construction superintendents shape the rhythm of our jobsites and the success of our projects. Together, their stories show how leadership and preparation keep sites safe...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(card3Img)?.src || (card3Img)} alt="Collaborating to advance jobsite safety" />
              </div>
              <div className="news-body">
                <span className="news-tag">SAFETY</span>
                <h4>Collaborating to advance jobsite safety: SNS Construction...</h4>
                <p>Across SNS Construction, knowledge sharing fuels our continuous improvement journey. In the realm of health and safety, enterprise-wide sharing of best practices...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(card4Img)?.src || (card4Img)} alt="Combatting suicide in construction" />
              </div>
              <div className="news-body">
                <span className="news-tag">SAFETY</span>
                <h4>Combatting suicide in construction</h4>
                <p>Did you know the construction industry is disproportionately affected by mental health challenges? We provide Mental Health First Aid resources across our workforce...</p>
              </div>
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default EnvironmentalHealthSafety;
