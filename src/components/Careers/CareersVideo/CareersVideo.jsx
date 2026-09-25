"use client";
import { motion } from 'framer-motion';
import videoThumb from '../../../assets/images/card_buildings.png';
import './CareersVideo.css';

const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill="#FF2828"/>
    <path d="M10 8L16 12L10 16V8Z" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="transparent" />
  </svg>
);

const CareersVideo = () => {
  return (
    <section className="careers-video">
      <div className="careers-video__container">
        
        <div className="careers-video__left">
          <motion.div 
            className="careers-video__text-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="careers-video__heading">
              What do you want from your work? From your life?
            </h2>
            <p className="careers-video__intro">
              If you want to feel the satisfaction of really making a difference with every decision, you've come to the right place.
            </p>
          </motion.div>
        </div>

        <div className="careers-video__right">
          <motion.div 
            className="careers-video__media-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* The image in the screenshot has black letterboxing. We can simulate that with a black background and object-fit contain, or just use cover. Let's use cover for cleaner look unless specified otherwise. */}
            <div className="careers-video__thumbnail-container">
              <img src="https://images.pexels.com/photos/20541452/pexels-photo-20541452.jpeg" alt="Video Thumbnail" className="careers-video__thumbnail" />
              
          
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default CareersVideo;
