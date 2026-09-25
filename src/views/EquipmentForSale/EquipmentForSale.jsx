"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

import './EquipmentForSale.css';

import heroBg from '../../assets/images/hero_worker.png';
import spotlightImg from '../../assets/images/st_specialty.png';

import proj1 from '../../assets/images/project_confidential.jpg';
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

const EquipmentForSale = () => {
  useEffect(() => {
    document.title = 'Equipment for Sale | SNS Construction';
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: '...', path: null },
    { label: 'Transportation & Infrastructure', path: '/construction' },
    { label: 'Equipment for Sale', path: null },
  ];

  return (
    <div className="equipment-page">
      {/* Hero Section */}
      <section className="equipment-hero-wrapper">
        <div className="equipment-hero-container">
          <div className="equipment-breadcrumbs">
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

          <div className="equipment-hero-media">
            <img src="https://images.pexels.com/photos/5279346/pexels-photo-5279346.jpeg" alt="Heavy Equipment Sales" />
            <div className="equipment-hero-content">
              <h1 className="equipment-hero-title">Equipment for Sale</h1>
              <div className="equipment-hero-card">
                <p>Offering premium, meticulously maintained heavy construction machinery, specialized marine rigs, and tunneling equipment directly from our global fleet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="equipment-capabilities-section equipment-container">
        <h2 className="equipment-section-heading">Bringing knowledge and foresight to every project</h2>
        
        <div className="equipment-capabilities-grid">
          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <h3>Rigorous Maintenance Standards</h3>
            <p>Every machine in our surplus fleet undergoes comprehensive OEM-certified maintenance cycles and strict safety inspections prior to listing.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <h3>Specialized Civil & Marine Assets</h3>
            <p>From heavy crawler cranes and barge-mounted rigs to tunnel boring system components, we provide specialized assets for demanding civil builds.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h3>Global Logistics & Export Support</h3>
            <p>Our asset management team handles worldwide customs clearance, heavy-haul freight coordination, and equipment export documentation.</p>
          </div>

          <div className="capability-card">
            <div className="capability-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3>Complete Operating Telemetry</h3>
            <p>Buyers receive complete digital service histories, operating hour telemetry, and fluid analysis reports for full transparency.</p>
          </div>
        </div>
      </section>

      {/* Project Spotlight Section */}
      <section className="equipment-spotlight-section equipment-container">
        <div className="spotlight-grid">
          <div className="spotlight-text-col">
            <h2 className="equipment-section-heading">
              Featured Fleet Asset: Lieberr Heavy Crawler & Marine Barge Rigs
            </h2>
            <p className="spotlight-desc">
              Available immediately from our regional yards: fully serviced 300-ton Manitowoc and Liebherr crawler cranes, specialized pile driving systems, and modular barge units configured for marine foundation work.
            </p>
          </div>
          <div className="spotlight-image-col">
            <img src="https://www-assets.liebherr.com/media/bu-media/lhbu-lwe/images/upload/2020_01/the-original-crawler-crane-from-liebherr/liebherr-upload-the-original-stage-1901x1070_w1920.jpg" alt="Heavy Crane Fleet" />
          </div>
        </div>
      </section>

      {/* Shaping Sustainable Places Banner */}
      <section className="equipment-banner-section">
        <div className="equipment-container banner-inner">
          <div className="banner-left">
            <h2>Circular equipment lifecycle</h2>
          </div>
          <div className="banner-right">
            <p>By refurbishing, re-powering with Tier 4 Final/Stage V engines, and repurposing heavy machinery across international job sites, we maximize equipment lifecycle efficiency and reduce embodied carbon.</p>
            <Link href="/construction/expertise/sustainability" className="banner-btn">
              Sustainability <ArrowRightCircle />
            </Link>
          </div>
        </div>
      </section>

      {/* Equipment Listings Grid */}
      <section className="equipment-projects-section equipment-container">
        <div className="projects-header-flex">
          <div className="projects-header-left">
            <h2 className="equipment-section-heading">Surplus Machinery Inventory</h2>
          </div>
          <div className="projects-header-right">
            <p>Browse active listings of heavy excavators, foundation drills, tunnel loaders, and specialized marine equipment.</p>
          </div>
        </div>

        <div className="projects-grid-3">
          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://media.baumpub.com/files/slides/locale_image/large/0205/51022_en_f96c0_53728_bauer-electric-drill-rig.jpg" alt="Bauer BG 39 Foundation Drilling Rig" />
            </div>
            <div className="project-card-title-bar">
              <h3>Bauer BG 39 Rotary Foundation Drilling Rig</h3>
              <ArrowRightCircle />
            </div>
          </a>

          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://s7d2.scene7.com/is/image/Caterpillar/C10124150" alt="CAT 390F Heavy Excavator Fleet" />
            </div>
            <div className="project-card-title-bar">
              <h3>Caterpillar 390F L Heavy Hydraulic Excavators</h3>
              <ArrowRightCircle />
            </div>
          </a>

          <a href="#" className="project-card">
            <div className="project-card-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNOy_4aiLKa_g4HASNjn3K8rCUZmCp5ncrEuYhV0rS8Do9NaXUofe744&s=10" alt="Comansa 21LC550 Tower Cranes" />
            </div>
            <div className="project-card-title-bar">
              <h3>Linden Comansa High-Capacity Flat-Top Tower Cranes</h3>
              <ArrowRightCircle />
            </div>
          </a>
        </div>
      </section>

      {/* Careers Banner */}
      <section className="equipment-careers-banner">
        <div className="equipment-container careers-inner">
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
      {/* <section className="equipment-news-section">
        <div className="equipment-container">
          <h2 className="news-section-title">News & Foresight</h2>

          <div className="news-grid-4">
            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news1)?.src || (news1)} alt="Tier 4 retrofits in heavy machinery" />
              </div>
              <div className="news-body">
                <span className="news-tag">SUSTAINABILITY</span>
                <h4>Tier 4 Final retrofits in heavy fleet management</h4>
                <p>How upgrading engine emission controls extends heavy machinery service lives while meeting strict environmental standards...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news2)?.src || (news2)} alt="Telematics in heavy equipment sales" />
              </div>
              <div className="news-body">
                <span className="news-tag">INNOVATION</span>
                <h4>IoT Telematics and predictive maintenance in fleet sales</h4>
                <p>Utilizing real-time CAN-bus telemetry to verify operating history and structural integrity for equipment buyers...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news3)?.src || (news3)} alt="Heavy lift marine equipment" />
              </div>
              <div className="news-body">
                <span className="news-tag">PROJECT CASE STUDY</span>
                <h4>Mobilizing heavy marine cranes for bridge builds</h4>
                <p>A look at the logistics behind assembling and deploying 500-ton floating crane barges across coastal ports...</p>
              </div>
            </a>

            <a href="#" className="news-card">
              <div className="news-img-wrapper">
                <img src={(news4)?.src || (news4)} alt="Equipment lifecycle management" />
              </div>
              <div className="news-body">
                <span className="news-tag">FLEET MANAGEMENT</span>
                <h4>SNS Construction equipment management strategy</h4>
                <p>Ensuring maximum uptime and asset reliability across our global megaproject equipment fleet...</p>
              </div>
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default EquipmentForSale;
