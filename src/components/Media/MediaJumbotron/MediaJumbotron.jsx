"use client";
import { motion } from 'framer-motion';
import pressImage from '../../../assets/images/news_1.png';
import foresightImage from '../../../assets/images/news_2.png';
import './MediaJumbotron.css';

const ArrowRightFilled = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#FF2828"/>
    <path d="M10 8L15 12L10 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MediaJumbotron = () => {
  return (
    <section className="media-jumbo">
      
      {/* Press Releases Block */}
      <div className="media-jumbo__block">
        <div className="media-jumbo__container">
          <div className="media-jumbo__text-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="media-jumbo__heading">Press releases</h2>
              <p className="media-jumbo__intro">
                Read the latest news and press releases from SNS Construction.
              </p>
              <a href="#" className="media-jumbo__link">
                <span>Find press releases</span>
                <div className="media-jumbo__icon">
                  <ArrowRightFilled />
                </div>
              </a>
            </motion.div>
          </div>
          <div className="media-jumbo__image-col">
            <motion.div 
              className="media-jumbo__image-wrapper"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src={(pressImage)?.src || (pressImage)} alt="Press Releases" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="media-jumbo__separator"></div>

      {/* News & Foresight Block */}
      <div className="media-jumbo__block">
        <div className="media-jumbo__container">
          <div className="media-jumbo__text-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="media-jumbo__heading">News & Foresight</h2>
              <p className="media-jumbo__intro">
                This is where we bring together expert insights, knowledge and foresight about shaping the built environment.
              </p>
              <a href="#" className="media-jumbo__link">
                <span>Explore articles</span>
                <div className="media-jumbo__icon">
                  <ArrowRightFilled />
                </div>
              </a>
            </motion.div>
          </div>
          <div className="media-jumbo__image-col">
            <motion.div 
              className="media-jumbo__image-wrapper"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src={(foresightImage)?.src || (foresightImage)} alt="News & Foresight" />
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default MediaJumbotron;
