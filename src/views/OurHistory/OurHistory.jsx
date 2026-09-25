"use client";
import React, { useEffect } from "react";
import Link from 'next/link';

import "./OurHistory.css";
import historyHero from "../../assets/images/history_hero.jpg";
import historyVideo from "../../assets/images/history_video_poster.jpg";
import proj1 from "../../assets/images/project_montgomery.jpg";
import proj2 from "../../assets/images/st_cleanrooms.png";
import proj3 from "../../assets/images/datacenter_spotlight.jpg";

const OurHistory = () => {
  useEffect(() => {
    document.title = "Our history | SNS Construction";
  }, []);

  return (
    <div className="our-history-page">
      {/* Split Hero Section */}
      <section className="history-hero">
        <div className="history-hero__text-container">
          <div className="history-hero__breadcrumbs">
            <Link href="/">Home</Link>
            <span className="separator">/</span>
            <Link href="/about-us/sns-construction">SNS Construction</Link>
            <span className="separator">/</span>
            <span className="current">Our History</span>
          </div>
          <h1 className="history-hero__heading">Our history</h1>
          <p className="history-hero__intro">
            Founded in 1984 in Raleigh, North Carolina, by structural engineer
            Arthur "Art" Vance and civil project strategist Samuel N. Sterling.
            We began as a specialized regional contractor focused on precision
            structural engineering, driven by a single operational principle:
            uncompromising structural integrity backed by transparent project
            governance.
          </p>
        </div>
        <div className="history-hero__image-container">
          <div className="history-hero__image-wrapper">
            <img src={(historyHero)?.src || (historyHero)} alt="Founding of SNS Construction" />
          </div>
        </div>
      </section>

      {/* Intro Block */}
      <section className="history-intro">
        <div className="history-intro__container">
          <div className="history-intro__left">
            <h2>Four decades of engineering excellence</h2>
          </div>
          <div className="history-intro__right">
            <p>
              Capitalizing on the rapid expansion of North Carolina’s Research
              Triangle, the firm grew rapidly from its 1984 origins. Today, SNS
              Construction stands as a multi-billion-dollar global Engineering,
              Procurement, and Construction (EPC) leader with 18,500+
              professionals and active megaprojects across 22+ countries.
            </p>
          </div>
        </div>
      </section>

      {/* Explore History Teasers */}
      <section className="history-teasers">
        <div className="history-teasers__container">
          <div className="history-teasers__top-row">
            <div className="history-teasers__top-left">
              <h2>Explore our journey</h2>
              <p>
                Discover the pivotal milestones that shaped our global
                infrastructure footprint.
              </p>
            </div>
            <div className="history-teasers__top-right">
              <div className="history-teasers__card history-teasers__card--featured">
                <div className="history-teasers__card-image">
                  <img src="https://i.ibb.co/j9xzvfbn/1990s-Scaling-Across-North-America.avif" alt="1990s Scaling" />
                </div>
                <div className="history-teasers__card-content">
                  <div className="history-teasers__card-header">
                    <h3>1990s – Scaling Across North America</h3>
                  </div>
                  <p>
                    By the early 1990s, SNS Construction had earned a reputation
                    for completing complex civil projects on tight deadlines.
                    The firm secured major federal highway contracts, municipal
                    water treatment facilities, and university campus
                    developments across the eastern United States. Recognizing
                    the emerging role of digital design, SNS was among the early
                    adopters of computerized structural modeling.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="history-teasers__grid">
            <div className="history-teasers__card">
              <div className="history-teasers__card-image">
                <img src="https://i.ibb.co/cXsGPyxn/Middle-East-Expansion.jpg" alt="2000s Expansion" />
              </div>
              <div className="history-teasers__card-content">
                <div className="history-teasers__card-header">
                  <h3>2000s – Transatlantic &amp; Middle East Expansion</h3>
                </div>
                <p>
                  At the turn of the century, SNS Construction expanded
                  internationally. Securing joint-venture contracts in the UK
                  and Western Europe, the company established its European
                  operational headquarters in London, and shortly after entered
                  the Middle East out of a new regional hub in Dubai.
                </p>
              </div>
            </div>

            <div className="history-teasers__card">
              <div className="history-teasers__card-image">
                <img src="https://i.ibb.co/fdbLccYr/Entry-into-India-South-Asia.jpg" alt="2009 India Operations" />
              </div>
              <div className="history-teasers__card-content">
                <div className="history-teasers__card-header">
                  <h3>2009 – Entry into India &amp; South Asia</h3>
                </div>
                <p>
                  Establishing its regional hub in Bangalore, Karnataka, the
                  firm positioned itself at the forefront of South Asia’s modern
                  infrastructure expansion. Over the next decade, SNS
                  spearheaded major metro transit corridors, high-density IT
                  tech parks, and commercial real estate projects.
                </p>
              </div>
            </div>

            <div className="history-teasers__card">
              <div className="history-teasers__card-image">
                <img src="https://i.ibb.co/TpZnNwn/Digital-Transformation.jpg" alt="2020 Reforms" />
              </div>
              <div className="history-teasers__card-content">
                <div className="history-teasers__card-header">
                  <h3>2020 – Major Reforms &amp; Digital Transformation</h3>
                </div>
                <p>
                  SNS Construction executed a sweeping operational
                  restructuring, integrating BIM Level 3 &amp; Digital Twins
                  across 100% of sites, streamlining global US-grade governance,
                  and enforcing Green &amp; Sustainable Engineering directives
                  for low-carbon projects.
                </p>
              </div>
            </div>
          </div>

          <div className="history-teasers__controls">
            <div className="history-teasers__progress">
              <div
                className="history-teasers__progress-bar"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Jumbotron Video */}
      <section className="history-jumbotron">
        <div className="history-jumbotron__container">
          <div className="history-jumbotron__left">
            <h2>Today: A Global EPC Conglomerate</h2>
            <p>
              With dual primary operational pillars in Raleigh, NC and
              Bangalore, India, SNS continues to engineer the world’s most
              critical infrastructure. We are proud of our journey so far, but
              this is only the beginning.
            </p>
          </div>
          <div className="history-jumbotron__right">
            <div className="history-jumbotron__video-wrapper">
              <img src={(historyVideo)?.src || (historyVideo)} alt="Our global footprint" />
            </div>
          </div>
        </div>
      </section>

      {/* LinkedIn CTA */}
      <section className="history-cta">
        <div className="history-cta__container">
          <div className="history-cta__left">
            <h2>Join the conversation</h2>
          </div>
          <div className="history-cta__right">
            <p>
              Be part of the discussion on LinkedIn. Interact with SNS
              Construction colleagues and subject matter experts from the
              industry and beyond.
            </p>
            <a
              href="https://www.linkedin.com/company/snsconstructioninc"
              target="_blank"
              rel="noopener noreferrer"
              className="history-cta__link"
            >
              <span>Follow us on LinkedIn</span>
              <div className="history-cta__arrow-btn">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurHistory;
