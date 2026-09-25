"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CareersLook.css';

const lookData = [
  {
    id: 1,
    title: "Creative problem-solving",
    content: "We're helping to shape the structures of tomorrow. That takes ingenuity, new ways of thinking, the ability to test and evaluate, and a willingness to constantly try out new ways of doing things. We're always looking to extend our teams with more creative thinkers and problem-solvers."
  },
  {
    id: 2,
    title: "Caring approach",
    content: "We're not just a construction and development business, we're a people business. At the end of the day, we work together with people, and we develop and build for people. We want to work with team players who understand why it's important to always consider the best interests of others."
  },
  {
    id: 3,
    title: "Changemakers",
    content: "From the big actions we take to the small but important decisions we make, everything we do is about empowering and improving the well-being of the communities and people we build for. We're looking for individuals who want to make a real impact both today and beyond our lifetimes."
  },
  {
    id: 4,
    title: "A curious mindset",
    content: "Being a big, international company opens multiple doors for our people. We're looking for individuals who thrive in a world of opportunities, who want to do more of what they like, travel or maybe do something entirely new.\n\nWhether you're a problem-solver or changemaker, if you're ready to grow, innovate and help build a better society, we're thrilled to have you join our team."
  }
];

const ArrowIcon = ({ isOpen }) => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    style={{ 
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.3s ease'
    }}
  >
    <path d="M6 9L12 15L18 9" stroke="#03466E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CareersLook = () => {
  // Array to keep track of which items are open (allowing multiple open at once)
  // Let's open the first one by default as seen in the image (or all of them are open in the image, but we'll start with just the first one open for better interaction).
  const [openItems, setOpenItems] = useState([1]);

  const toggleItem = (id) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  return (
    <section className="careers-look">
      <div className="careers-look__container">
        
        <div className="careers-look__left">
          <h2 className="careers-look__heading">
            What we look for in people
          </h2>
        </div>

        <div className="careers-look__right">
          <div className="careers-look__accordion">
            {lookData.map((item) => {
              const isOpen = openItems.includes(item.id);
              
              return (
                <div key={item.id} className="careers-look__accordion-item">
                  <button 
                    className="careers-look__accordion-header"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                  >
                    <h3 className="careers-look__accordion-title">{item.title}</h3>
                    <div className="careers-look__accordion-icon">
                      <ArrowIcon isOpen={isOpen} />
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto", marginTop: 16, marginBottom: 32 },
                          collapsed: { opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="careers-look__accordion-content-wrapper"
                      >
                        <div className="careers-look__accordion-content">
                          {item.content.split('\n\n').map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CareersLook;
