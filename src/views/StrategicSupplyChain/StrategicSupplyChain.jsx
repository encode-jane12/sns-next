"use client";
import React from 'react';
import Link from 'next/link';

import './StrategicSupplyChain.css';

import heroBg from '../../assets/images/project_dc_water.jpg';
import contactImg from '../../assets/images/bryan_northrop.jpg';

function StrategicSupplyChain() {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: '...', path: null },
    { label: 'Expertise', path: '/construction/expertise' },
    { label: 'Strategic Supply Chain', path: null },
  ];

  return (
    <div className="ssc-page">
      <div className="ssc-breadcrumbs ssc-container">
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
      <section className="ssc-hero-section ssc-container">
        <div className="ssc-hero-top-grid">
          <div className="ssc-hero-heading-col">
            <h1 className="ssc-hero-heading">Strategic Supply Chain</h1>
          </div>
          <div className="ssc-hero-text-col">
            <p>Providing customers with optimal value and custom solutions by leveraging and integrating our long-standing relationships with top-tier manufacturers throughout the project lifecycle.</p>
          </div>
        </div>
        <div className="ssc-hero-bg">
          <img src="https://images.pexels.com/photos/4487383/pexels-photo-4487383.jpeg" alt="Strategic Supply Chain" />
        </div>
      </section>

      {/* Foresight / Nuggets Section */}
      <section className="ssc-nuggets-section ssc-container">
        <div className="nuggets-grid">
          <div className="nuggets-left">
            <h2>Bringing knowledge and foresight to every project</h2>
          </div>
          <div className="nuggets-right">
            <div className="nugget-card">
              <div className="nugget-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2.8C7.21 12.16 6 10.22 6 8a6 6 0 0 1 6-6z"></path>
                  <path d="M9 21h6"></path>
                </svg>
              </div>
              <h3>Early design engagement</h3>
              <p>To achieve your unique program goals, we drive engagement among customers, designers and manufacturers—from concept through construction documents—empowering you to make the most strategic decisions about materials and equipment.</p>
            </div>

            <div className="nugget-card">
              <div className="nugget-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <h3>Agile approach to delivering best value</h3>
              <p>By leveraging current market trend analysis, next-generation technology and direct insight from manufacturers, we provide you with competitive pricing and maximum value at no additional cost to you.</p>
            </div>

            <div className="nugget-card">
              <div className="nugget-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Long-standing relationships</h3>
              <p>Building on our strategic and proven partnerships with manufacturers, we deliver customer centric, creative and forward-thinking solutions that proactively manage supply chain risk, optimize cost and maintain schedule certainty.</p>
            </div>

            <div className="nugget-card">
              <div className="nugget-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </div>
              <h3>With you all the way</h3>
              <p>From planning to post-occupancy, SNS Construction's Strategic Supply Chain offers end-to-end support to our customers. Whether that means responsibly sourcing products or helping to manage warranty claims, we are with you for the full lifecycle of your materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Solutions Section */}
      <section className="ssc-sectors-section ssc-container">
        <div className="sectors-header">
          <h2>Supply Chain Solutions in Action</h2>
          <p>We tailor our supply chain operations to meet the precise demands of specialized industries, safeguarding lead times and project budgets.</p>
        </div>

        <div className="sectors-grid">
          <div className="sector-card">
            <h4>Mission Critical & Data Centers</h4>
            <p>With massive lead times on switchgear, backup generators, and industrial chillers exceeding 52 weeks, we lock in production slots early. Our long-term manufacturing allocations ensure that long-lead electrical and mechanical equipment arrives precisely when needed, keeping hyperscale projects on track.</p>
          </div>
          <div className="sector-card">
            <h4>Heavy Civil Infrastructure</h4>
            <p>For highways, tunnels, and bridge replacements, we coordinate bulk purchasing agreements for structural steel, prestressed concrete elements, and specialized aggregate directly with primary mills and quarries. This volume pricing insulates projects from sudden commodity spikes.</p>
          </div>
          <div className="sector-card">
            <h4>Healthcare & Biotech Facilities</h4>
            <p>Advanced lab environments, cleanrooms, and medical gas piping networks require strict compliance and zero contaminations. We work directly with EHS-approved manufacturers to pre-commission modular cleanroom components in controlled off-site facilities, saving hundreds of jobsite integration hours.</p>
          </div>
        </div>
      </section>

      {/* Procurement Process Section */}
      <section className="ssc-procurement-section">
        <div className="ssc-container">
          <h2 className="procurement-title">Our Structured Procurement Model</h2>
          
          <div className="procurement-steps-grid">
            <div className="procurement-step">
              <span className="step-number">01</span>
              <h3>Demand Aggregation</h3>
              <p>We analyze future project schedules across our entire national portfolio, combining purchase requests to leverage volume purchasing power with direct manufacturers.</p>
            </div>
            <div className="procurement-step">
              <span className="step-number">02</span>
              <h3>Direct Manufacturing</h3>
              <p>By bypassing broker networks and middlemen, we establish direct partnerships with primary fabricators, locking in optimal pricing and dedicated service levels.</p>
            </div>
            <div className="procurement-step">
              <span className="step-number">03</span>
              <h3>Logistics & Buffering</h3>
              <p>We establish strategic regional consolidation warehouses near high-activity hubs. This buffer inventory eliminates local supply bottlenecks and guarantees continuous delivery.</p>
            </div>
            <div className="procurement-step">
              <span className="step-number">04</span>
              <h3>Quality Assurance</h3>
              <p>Before shipment, materials undergo rigorous factory testing monitored by SNS Construction inspectors. We certify EHS compliance and verify build specs at the source.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get in touch Section */}
      {/* <section className="ssc-contact-section">
        <div className="ssc-container ssc-contact-flex">
          <div className="ssc-contact-left">
            <h2>Get in touch</h2>
          </div>
          <div className="ssc-contact-right">
            <div className="ssc-contact-card">
              <img src={(contactImg)?.src || (contactImg)} alt="Vikramaditya Rao" />
              <div className="ssc-contact-info">
                <span className="contact-dept">BUILDINGS</span>
                <h4>Vikramaditya Rao</h4>
                <p>VP of Project Execution, Strategic Supply Chain</p>
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

export default StrategicSupplyChain;
