"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import MediaHero from '../../components/Media/MediaHero/MediaHero';
import MediaJumbotron from '../../components/Media/MediaJumbotron/MediaJumbotron';
import './Media.css';

// Import news images
import news1 from '../../assets/images/news_1.png';
import news2 from '../../assets/images/card_development.png';
import news3 from '../../assets/images/hero_worker.png';
import news4 from '../../assets/images/news_2.png';
import news5 from '../../assets/images/card_buildings.png';
import news6 from '../../assets/images/card_infrastructure.png';

// Additional imports for exact matching
import colocationImg from '../../assets/images/project_datacenter_colocation.jpg';
import hyperscaleImg from '../../assets/images/project_datacenter_hyperscale.jpg';
import climateImg from '../../assets/images/parks_ny_climate.jpg';
import stadiumImg from '../../assets/images/sports_alamodome.jpg';
import constrImg from '../../assets/images/hero_construction.png';
import news3Img from '../../assets/images/news_3.png';
import waterImg from '../../assets/images/project_dc_water.jpg';

const allWebsiteArticles = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/19938251/pexels-photo-19938251.jpeg",
    category: 'SUSTAINABILITY',
    title: 'A fuel swap on two SNS Construction projects generates big emission savings',
    desc: 'According to the World Green Building Council, the building and construction industry is responsible for 39 percent of all global carbon emissions. At SNS Construction, we’re aiming to change that with our 2030 goal to achieve net-zero carbon operations.',
    link: '/news/fuel-swap-sustainability'
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/35425754/pexels-photo-35425754.jpeg",
    category: 'SUSTAINABILITY',
    title: 'Wake Tech’s new East Campus runs on sustainable Central Energy Plant',
    desc: 'The recently completed Central Energy Plant (CEP) at Wake Tech Community College’s new East Campus delivers both a groundbreaking sustainable energy solution, as well as an immersive learning environment for students.',
    link: '/news/wake-tech-sustainability'
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/8486903/pexels-photo-8486903.jpeg",
    category: 'PEOPLE SHOWCASE',
    title: 'Women in Construction Week: Highlighting careers, mentorship, and opportunities',
    desc: 'Careers in construction are built over time, shaped by pivotal moments, trusted mentors and the willingness to take on new challenges. In recognition of Women in Construction Week, we’re highlighting women across our regional offices.',
    link: '/news/women-in-construction'
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/7723555/pexels-photo-7723555.jpeg",
    category: 'INCLUSION & DIVERSITY',
    title: 'Reaching $500,000: Inside our teams\' partnership with the Leukemia & Lymphoma Society',
    desc: 'Approximately every three minutes, one person globally is diagnosed with leukemia, lymphoma or myeloma. Our project teams and regional offices partnered to raise half a million dollars to support life-saving research.',
    link: '/news/leukemia-lymphoma-partnership'
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/18069816/pexels-photo-18069816.png",
    category: 'INNOVATION',
    title: 'Pioneering AI in structural design and engineering',
    desc: 'By leveraging machine learning algorithms, our engineering teams are reducing material waste and optimizing structural integrity on large-scale commercial developments.',
    link: '/news/pioneering-ai-design'
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/34956479/pexels-photo-34956479.jpeg",
    category: 'COMMUNITY',
    title: 'Building stronger local communities through infrastructure investment',
    desc: 'Our latest bridge replacement project isn’t just about transit—it’s about reconnecting divided neighborhoods and fostering local economic growth.',
    link: '/news/stronger-local-communities'
  },
  {
    id: 7,
    image: "https://images.pexels.com/photos/8470776/pexels-photo-8470776.jpeg",
    category: 'EMERGING TECHNOLOGY',
    title: 'Construction Companies See Promise in AI Agents',
    desc: 'New AI tools are helping managers stay on top of the complex processes underpinning an exploding sector, driving efficiency, preconstruction forecasting, and quality checks.',
    link: '/construction/expertise/emerging-technology/ai-agents'
  },
  {
    id: 8,
    image: "https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg",
    category: 'INNOVATION',
    title: 'Meet the individuals powering our data future',
    desc: "SNS Construction's digital and transformation solutions team is helping project teams work smarter—connecting information, reducing manual effort, and enabling faster, data-driven decisions.",
    link: '/construction/expertise/emerging-technology/data-future'
  },
  {
    id: 9,
    image: "https://images.pexels.com/photos/35885303/pexels-photo-35885303.jpeg",
    category: 'EMERGING TECHNOLOGY',
    title: 'Tapping into the possibilities of construction technology',
    desc: 'The construction industry is evolving at a rapid pace, driven by innovative technologies that enhance safety, productivity and efficiency on jobsites, such as AR design overlays and laser scanning.',
    link: '/construction/expertise/emerging-technology/tapping-possibilities'
  },
  {
    id: 10,
    image: "https://images.pexels.com/photos/39052113/pexels-photo-39052113.jpeg",
    category: 'EMERGING TECHNOLOGY',
    title: 'Unlocking business insights with data',
    desc: "Data isn't just a buzzword at SNS Construction. We must continually innovate and implement new and efficient ways of working that support our people and exceed our clients' expectations.",
    link: '/construction/expertise/emerging-technology/unlocking-insights'
  },
  {
    id: 11,
    image: "https://images.pexels.com/photos/38206561/pexels-photo-38206561.jpeg",
    category: 'SUSTAINABILITY',
    title: 'The next era of aviation starts on the ground',
    desc: 'Aviation is one of the most transformative innovations in modern history. What began as an extraordinary feat of engineering has evolved into the backbone of global commerce.',
    link: '/news/aviation-ground-infrastructure'
  },
  {
    id: 12,
    image: "https://images.pexels.com/photos/37805303/pexels-photo-37805303.jpeg",
    category: 'PROJECT CASE STUDY',
    title: 'Behind the transformation: How MetLife Stadium prepared for the World Cup',
    desc: 'When millions of fans around the world tuned in to watch the World Cup Final at MetLife Stadium, they saw the world\'s biggest sporting event unfold on soccer\'s grandest stage.',
    link: '/news/metlife-stadium-transformation'
  },
  {
    id: 13,
    image: "https://images.pexels.com/photos/9300985/pexels-photo-9300985.jpeg",
    category: 'PEOPLE SHOWCASE',
    title: 'The next generation has entered the jobsite',
    desc: 'Construction is evolving fast — from AI and digital tools to sustainability expectations and new workforce priorities. Today\'s interns are stepping onto jobsites.',
    link: '/news/next-generation-jobsite'
  },
  {
    id: 14,
    image:"https://images.pexels.com/photos/5583617/pexels-photo-5583617.jpeg",
    category: 'PEOPLE SHOWCASE',
    title: 'Lessons from a 41-year career in construction',
    desc: 'After a 41-year career in construction, SNS Construction leadership reflects on the lessons that shaped his leadership, the people who influenced him and why he remains optimistic.',
    link: '/news/career-lessons-construction'
  },
  {
    id: 15,
    image: "https://images.pexels.com/photos/35172564/pexels-photo-35172564.jpeg",
    category: 'CIVIL INFRASTRUCTURE',
    title: 'Expanding transit access: Mumbai Metro Line 3 reaches milestone',
    desc: 'Our tunneling crews have completed the final breakthrough on Mumbai Metro Line 3, linking major commercial districts with residential corridors in high-density areas.',
    link: '/news/metro-rail-expansion'
  },
  {
    id: 16,
    image: "https://images.pexels.com/photos/7108785/pexels-photo-7108785.jpeg",
    category: 'SUSTAINABILITY',
    title: 'SNS Construction pledges 100% low-carbon concrete by 2030',
    desc: 'Cement production is a primary carbon driver. We are partnering with raw materials manufacturers to scale up low-carbon cement replacements across all national builds.',
    link: '/news/decarbonized-materials'
  },
  {
    id: 17,
    image: "https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg",
    category: 'SAFETY & COMPLIANCE',
    title: 'Deploying wearable IoT sensors to monitor jobsite heat safety',
    desc: 'To protect our craft workforce during peak summer heat waves, we are field-testing smart helmet inserts that track body temperatures and trigger breaks.',
    link: '/news/safety-innovation-tech'
  },
  {
    id: 18,
    image: "https://images.pexels.com/photos/10900608/pexels-photo-10900608.jpeg",
    category: 'INNOVATION',
    title: 'Bypassing material shortages through predictive global logistics',
    desc: 'By coordinating early bulk reserves of structural timber and glass packages, our supply chain team bypassed recent maritime shipping disruptions.',
    link: '/news/supply-chain-predictive'
  },
  {
    id: 19,
    image: "https://images.pexels.com/photos/8961624/pexels-photo-8961624.jpeg",
    category: 'PEOPLE SHOWCASE',
    title: 'Inspiring local students through our hands-on builder internships',
    desc: 'We welcomed 120 summer interns across our regional offices, introducing the next generation of engineers to high-performance BIM modeling and field operations.',
    link: '/news/youth-in-civil-engineering'
  },
  {
    id: 20,
    image: "https://images.pexels.com/photos/36622717/pexels-photo-36622717.jpeg",
    category: 'SUSTAINABILITY',
    title: 'SNS Construction delivers foundation grid for offshore wind array',
    desc: 'Our ports and marine team has completed offshore foundations for a major wind farm off the northeast coast, delivering clean energy capacity to 200,000 homes.',
    link: '/news/wind-energy-grid'
  }
];

const Media = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    document.title = 'News & Media | SNS Construction';
  }, []);

  const categories = ['All', ...new Set(allWebsiteArticles.map((art) => art.category))];

  const filteredArticles = allWebsiteArticles.filter((art) => {
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          art.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="media-page">
      <MediaHero />
      {/* <MediaJumbotron /> */}

      {/* Interactive Article Grid */}
      <section className="media-articles-section">
        <div className="media-articles-container">
          <div className="media-articles-header">
            <h2>Explore Our News & Insights</h2>
            <p>Stay up to date with the latest press releases, innovations, EHS updates, and project case studies shaping tomorrow's built environment.</p>
          </div>

          {/* Search & Category Filter */}
          <div className="media-filter-bar">
            <div className="search-input-wrapper">
              <input 
                type="text" 
                placeholder="Search articles by title or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="article-search-input"
              />
            </div>
            
            <div className="category-filter-list">
              {categories.map((cat) => (
                <button 
                  key={cat} 
                  className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="articles-grid-wrapper">
            {filteredArticles.length > 0 ? (
              <div className="media-articles-grid">
                {filteredArticles.map((art) => (
                  <Link href={art.link} key={art.id} className="media-article-card">
                    <div className="card-image-wrapper">
                      <img src={(art.image)?.src || (art.image)} alt={art.title} />
                      <span className="card-category-tag">{art.category}</span>
                    </div>
                    <div className="card-content-wrapper">
                      <h3>{art.title}</h3>
                      <p>{art.desc}</p>
                      <span className="read-more-btn">Read Article →</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="no-articles-found">
                <h3>No articles match your filters.</h3>
                <p>Try resetting the search terms or choosing a different category.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="reset-articles-btn"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
