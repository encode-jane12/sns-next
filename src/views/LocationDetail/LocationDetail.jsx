"use client";
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { LOCATION_DATA, getDefaultLocation } from './locationData';
import './LocationDetail.css';

import heroImg from '../../assets/images/williamsburg_new_york.jpg';

import news1 from '../../assets/images/news_1.png';
import news2 from '../../assets/images/hero_airport.png';
import news3 from '../../assets/images/news_2.png';
import news4 from '../../assets/images/news_3.png';

function LocationDetail() {
  const { stateSlug } = useParams();
  
  // Format stateSlug if passed, e.g. "delaware" -> "delaware", "washington-d-c" -> "washington-d-c"
  const slug = (stateSlug || 'delaware').toLowerCase();
  
  // Extract state name from slug if not in database
  const formattedName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const data = LOCATION_DATA[slug] || getDefaultLocation(formattedName);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Where We Work', path: '/where-we-work' },
    { label: data.name, path: null },
  ];

  return (
    <div className="location-detail-page">
      {/* Hero Section */}
      <section className="location-hero-section location-container">
        <div className="location-hero-left">
          <img src={(data.mainImg)?.src || (data.mainImg)} alt={data.name} />
        </div>
        <div className="location-hero-right">
          <div className="location-breadcrumbs">
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

          <div className="location-hero-text">
            <h1>{data.name}</h1>
            <p>{data.heroIntro}</p>
          </div>
        </div>
      </section>

      {/* Notable Experience Section */}
      <section className="notable-exp-section location-container">
        <div className="notable-grid">
          <div className="notable-left">
            <h2>Notable experience</h2>
            <p>{data.notableIntro}</p>
          </div>
          <div className="notable-right">
            <div className="featured-project-card">
              <img src={(data.featuredProject.image)?.src || (data.featuredProject.image)} alt={data.featuredProject.title} />
              <div className="featured-card-info">
                <div className="title-flex">
                  <h3>{data.featuredProject.title}</h3>
                  <span className="">✅</span>
                </div>
                <p>{data.featuredProject.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="three-projects-grid">
          {data.projects.map((proj, i) => (
            <div key={i} className="small-project-card">
              <img src={(proj.image)?.src || (proj.image)} alt={proj.title} />
              <div className="small-card-info">
                <div className="title-flex">
                  <h3>{proj.title}</h3>
                  <span className="">✅</span>
                </div>
                <p>{proj.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What We Build Section */}
      <section className="what-we-build-section location-container">
        <h2 className="section-heading">Our Speciality in {data.name}</h2>

        <div className="sectors-grid">
          {data.sectors.map((sec, i) => (
            <div key={i} className={`sector-card ${sec.isLarge ? 'large-card' : ''}`}>
              <img src={(sec.image)?.src || (sec.image)} alt={sec.name} />
              <div className="sector-info">
                <span>{sec.name}</span>
                <span className="">🌟</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Career CTA Section */}
      <section className="location-cta-section">
        <div className="location-container cta-flex">
          <div className="cta-left">
            <h2>Build your career with us.</h2>
          </div>
          <div className="cta-right">
            <p>Explore opportunities across markets and business units.</p>
            <Link href="/careers" className="btn-accent-pill">Open positions ↗</Link>
          </div>
        </div>
      </section>



      {/* News & Foresight Section (Dark Blue Background) */}
      {/* <section className="location-news-section">
        <div className="location-container">
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

export default LocationDetail;
