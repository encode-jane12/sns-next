"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import './NewsMedia.css';

import news1 from '../../assets/images/news_1.png';
import news2 from '../../assets/images/card_development.png';
import news3 from '../../assets/images/hero_worker.png';
import news4 from '../../assets/images/news_2.png';
import news5 from '../../assets/images/card_buildings.png';
import news6 from '../../assets/images/card_infrastructure.png';

const allArticles = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/19938251/pexels-photo-19938251.jpeg",
    category: 'SUSTAINABILITY',
    title: 'A fuel swap on two SNS Construction projects generates big...',
    desc: 'According to the World Green Building Council, the building and construction industry is responsible for 39 percent of all global carbon emissions. At SNS Construction, we’re aiming to change that with our 2030 goal to...',
    slug: 'fuel-swap-sustainability'
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/35425754/pexels-photo-35425754.jpeg",
    category: 'SUSTAINABILITY',
    title: 'Wake Tech’s new East Campus runs on sustainabl...',
    desc: 'The recently completed Central Energy Plant (CEP) at Wake Tech Community College’s new East Campus delivers both a groundbreaking sustainable energy solution, as well as an immersive learning environme...',
    slug: 'wake-tech-sustainability'
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/8486903/pexels-photo-8486903.jpeg",
    category: 'PEOPLE SHOWCASE',
    title: 'Women in Construction Week: Highlighting career...',
    desc: 'Careers in construction are built over time, shaped by pivotal moments, trusted mentors and the willingness to take on new challenges. In recognition of Women in Construction Week, we’re highlighting women across...',
    slug: 'women-in-construction'
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/7723555/pexels-photo-7723555.jpeg",
    category: 'INCLUSION & DIVERSITY',
    title: 'Reaching $500,000: inside our teams’ partnership with...',
    desc: 'Approximately every three minutes, one person globally is diagnosed with leukemia, lymphoma or myeloma.',
    slug: 'leukemia-lymphoma-partnership'
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/18069816/pexels-photo-18069816.png",
    category: 'INNOVATION',
    title: 'Pioneering AI in structural design and engineering...',
    desc: 'By leveraging machine learning algorithms, our engineering teams are reducing material waste and optimizing structural integrity on large-scale commercial developments.',
    slug: 'pioneering-ai-design'
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/34956479/pexels-photo-34956479.jpeg",
    category: 'COMMUNITY',
    title: 'Building stronger local communities through infrastructure...',
    desc: 'Our latest bridge replacement project isn’t just about transit—it’s about reconnecting divided neighborhoods and fostering local economic growth.',
    slug: 'stronger-local-communities'
  },
];

const ArrowLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="#111118"/>
    <path d="M14 8L9 12L14 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="#111118"/>
    <path d="M10 8L15 12L10 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function NewsMedia() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerScreen, setItemsPerScreen] = useState(4);

  // Responsive items per screen
  useEffect(() => {
    const updateItemsPerScreen = () => {
      if (window.innerWidth <= 600) {
        setItemsPerScreen(1);
      } else if (window.innerWidth <= 1200) {
        setItemsPerScreen(2);
      } else {
        setItemsPerScreen(4);
      }
    };
    
    updateItemsPerScreen();
    window.addEventListener('resize', updateItemsPerScreen);
    return () => window.removeEventListener('resize', updateItemsPerScreen);
  }, []);

  const maxIndex = allArticles.length - itemsPerScreen;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  return (
    <section className="news-media">
      <div className="news-media__container">
        
        <div className="news-media__header">
          <h2 className="news-media__heading">News & Foresight</h2>
        </div>

        <div className="news-media__carousel-viewport">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div
              className="news-media__track"
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% + var(--news-card-gap)) / ${itemsPerScreen}))`,
              }}
            >
              {allArticles.map((article) => (
                <Link href={`/news/${article.slug}`} key={article.id} className="news-media__card">
                  <div className="news-media__card-image-wrapper">
                    <img
                      className="news-media__card-image"
                      src={(article.image)?.src || (article.image)}
                      alt={article.title}
                    />
                  </div>
                  <div className="news-media__card-content">
                    <span className="news-media__card-category">{article.category}</span>
                    <h3 className="news-media__card-title">{article.title}</h3>
                    <p className="news-media__card-desc">{article.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="news-media__footer">
          <div className="news-media__nav-buttons">
            <button className="news-media__nav-btn" onClick={handlePrev} aria-label="Previous">
              <ArrowLeftIcon />
            </button>
            <button className="news-media__nav-btn" onClick={handleNext} aria-label="Next">
              <ArrowRightIcon />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default NewsMedia;
