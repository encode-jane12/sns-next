"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import './TechArticle.css';

// Import images to match design language
import aiImg from '../../assets/images/news_1.png';
import dataImg from '../../assets/images/project_datacenter_colocation.jpg';
import techImg from '../../assets/images/card_infrastructure.png';
import insightsImg from '../../assets/images/project_datacenter_hyperscale.jpg';

const articleData = {
  'ai-agents': {
    title: 'Construction Companies See Promise in AI Agents',
    tag: 'EMERGING TECHNOLOGY',
    date: 'August 15, 2026',
    image: "https://images.pexels.com/photos/8470776/pexels-photo-8470776.jpeg",
    intro: 'New AI tools are helping managers stay on top of the complex processes underpinning an exploding sector.',
    content: [
      {
        heading: 'Intelligent Scheduling & Logistics',
        text: 'As construction projects grow in size and complexity, especially in high-demand sectors like mission-critical data centers and advanced manufacturing, scheduling has become a monumental challenge. AI agents are stepping in to help project managers analyze thousands of variables simultaneously. By tracking supply chains, equipment locations, and labor schedules, these systems run predictive simulations to alert teams of bottlenecks weeks before they happen.'
      },
      {
        heading: 'Predictive Scheduling',
        text: 'SNS Construction is evaluating AI scheduling agents on select megaprojects. These agents parse historical performance metrics and integrate live site updates to adjust critical path timelines. Instead of reactive scheduling, our superintendents receive proactive daily briefings, highlighting potential clashes or weather risks. This builder-led approach ensures technology serves as a decision support system, leaving ultimate oversight in the hands of seasoned professionals.'
      },
      {
        heading: 'Safety and Quality Inspections',
        text: 'In addition to logistics, AI agents integrated with site cameras and laser scanners automatically cross-reference daily progress against Building Information Modeling (BIM) files. Discrepancies are flagged immediately, reducing rework and ensuring safety compliance across busy job sites. By automating repetitive verification tasks, AI frees our craft supervisors to focus on quality workmanship and mentoring the next generation of builders.'
      }
    ],
    quote: "AI isn't replacing our builders; it's giving them a supercharged second set of eyes to anticipate risks before they impact the schedule.",
    quoteAuthor: "Danielle O'Connell, Senior Director, Emerging Technology"
  },
  'data-future': {
    title: 'Meet the individuals powering our data future',
    tag: 'INNOVATION',
    date: 'July 22, 2026',
    image: "https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg",
    intro: "SNS Construction's digital and transformation solutions team is helping project teams work smarter—connecting information, reducing manual effort, and enabling faster, data-driven decisions.",
    content: [
      {
        heading: 'Connecting the Office and the Field',
        text: "Building the future of infrastructure requires breaking down the barriers between design suites and job site execution. Our Digital and Transformation Solutions team works directly with field engineers to deploy user-friendly dashboards that compile telemetry from heavy machinery, concrete maturity sensors, and building management systems into a single dashboard. This real-time visibility enables quicker, more confident decisions."
      },
      {
        heading: 'Standardizing Project Intelligence',
        text: "At SNS Construction, standardizing data isn't just about databases—it's about people. By training field teams on standard digital execution models, we ensure every project contributes to our collective intelligence. These standardized inputs flow back into our central estimators and schedulers, enabling us to quote, plan, and deliver new projects with unprecedented predictability."
      },
      {
        heading: 'The Power of Collaboration',
        text: "Our engineers focus on solving real friction points. If a tool doesn't make life easier for a field superintendent or save time for a project coordinator, we iterate or discard it. This builder-first philosophy guarantees that our digital transformation efforts are grounded in practical utility, leading to rapid adoption across our national project portfolio."
      }
    ],
    quote: "By standardizing how we collect and analyze project telemetry, we turn raw data into a reliable guide for project execution.",
    quoteAuthor: "Stewart Germain, Director of Innovation"
  },
  'tapping-possibilities': {
    title: 'Tapping into the possibilities of construction technology',
    tag: 'EMERGING TECHNOLOGY',
    date: 'June 10, 2026',
    image: "https://images.pexels.com/photos/35885303/pexels-photo-35885303.jpeg",
    intro: 'The construction industry is evolving at a rapid pace, driven by innovative technologies that enhance safety, productivity and efficiency on jobsites.',
    content: [
      {
        heading: 'Visualizing Builds in Mixed Reality',
        text: "Mixed reality is bridging the gap between flat blueprints and three-dimensional reality. Using headsets like Microsoft HoloLens, our field layout teams overlay digital BIM models directly onto physical workspaces. This allows craft professionals to visualize conduit paths, structural steel connectors, and HVAC duct runs within the raw space, identifying layout conflicts before installation begins."
      },
      {
        heading: 'Laser Scanning & Site Mapping',
        text: "We use reality capture technologies, including terrestrial laser scanners and autonomous drone flights, to document site conditions with millimeter accuracy. These scans create dense point clouds that document progress, verify as-built coordinates, and ensure tolerances are met. This level of precision is especially critical when tieing new structural elements into existing historical buildings or complex underground utility networks."
      },
      {
        heading: 'Sustainable Tech Integration',
        text: "Emerging tech also supports our decarbonization goals. Embedded IoT concrete sensors track temperature and strength maturity during curing, allowing teams to safely strip formwork and advance schedules without wasting energy. By leveraging tech to optimize curing windows, we reduce concrete waste and lower the carbon footprint of our builds."
      }
    ],
    quote: "Reality capture tools take the guesswork out of coordination, allowing us to align design intent and site reality in real-time.",
    quoteAuthor: "Brian Gallagher, Vice President, Project Controls"
  },
  'unlocking-insights': {
    title: 'Unlocking business insights with data',
    tag: 'EMERGING TECHNOLOGY',
    date: 'April 5, 2026',
    image: "https://images.pexels.com/photos/39052113/pexels-photo-39052113.jpeg",
    intro: "Data isn't just a buzzword at SNS Construction. We must continually innovate and implement new and efficient ways of working that support our people and exceed our clients' expectations.",
    content: [
      {
        heading: 'Aggregating Historical Performance',
        text: "With decades of experience delivering complex infrastructure, SNS Construction sits on a goldmine of historical data. Our business intelligence team builds models that analyze past estimating accuracy, weather delays, and labor productivity rates across hundreds of projects. These insights help our estimators evaluate current bids with greater clarity, identifying risk trends before contracts are signed."
      },
      {
        heading: 'Predictive Procurement',
        text: "Supply chain disruptions and commodity price fluctuations require intelligent hedging. We use data models to track global steel, copper, and cement market trends. This analytical foresight enables us to advise clients on early procurement packages, locking in favorable rates and ensuring long-lead equipment arrives on site exactly when the project team needs it."
      },
      {
        heading: 'Building a Data-Literate Workforce',
        text: "To fully unlock the potential of our data, we prioritize training programs that help our project executives, estimators, and engineers interpret analytics. By empowering every employee to query and understand our internal benchmarks, we foster an analytical culture that continuously refines how we build, manage risk, and deliver value."
      }
    ],
    quote: "Predictive data models allow us to turn years of build experience into foresight, helping our clients navigate volatile supply chains.",
    quoteAuthor: "Will Senner, Senior Vice President, Preconstruction"
  }
};

const TechArticle = () => {
  const { articleSlug } = useParams();
  const article = articleData[articleSlug];

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | SNS Construction`;
    } else {
      document.title = 'Article Not Found | SNS Construction';
    }
  }, [article]);

  if (!article) {
    return (
      <div className="article-not-found">
        <div className="article-not-found-container">
          <h2>Article Not Found</h2>
          <p>We couldn't find the article you are looking for.</p>
          <Link href="/construction/expertise/emerging-technology" className="back-to-tech-btn">
            Back to Emerging Technology
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: '...', path: null },
    { label: 'Expertise', path: '/construction/expertise' },
    { label: 'Emerging Technology', path: '/construction/expertise/emerging-technology' },
    { label: article.tag, path: null }
  ];

  return (
    <div className="tech-article-page">
      {/* Breadcrumbs */}
      <div className="article-breadcrumbs article-container">
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

      {/* Hero Header */}
      <section className="article-hero-section article-container">
        <div className="article-tag">{article.tag}</div>
        <h1 className="article-title">{article.title}</h1>
        <div className="article-meta">
          <span className="article-date">{article.date}</span>
        </div>
        <p className="article-intro-para">{article.intro}</p>
      </section>

      {/* Main Image */}
      <div className="article-hero-image-wrapper article-container">
        <img src={(article.image)?.src || (article.image)} alt={article.title} />
      </div>

      {/* Content & Quote */}
      <section className="article-content-section article-container">
        <div className="article-grid">
          {/* Left Column: Article Text */}
          <div className="article-text-column">
            {article.content.map((sec, idx) => (
              <div key={idx} className="article-section-block">
                <h2>{sec.heading}</h2>
                <p>{sec.text}</p>
              </div>
            ))}
          </div>

          {/* Right Column: Quote & Back button */}
          <div className="article-sidebar-column">
            <blockquote className="article-quote">
              <p>"{article.quote}"</p>
              <cite>— {article.quoteAuthor}</cite>
            </blockquote>

            <div className="back-link-wrapper">
              <Link href="/construction/expertise/emerging-technology" className="back-link">
                <span className="back-arrow">←</span> Back to Emerging Technology
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechArticle;
