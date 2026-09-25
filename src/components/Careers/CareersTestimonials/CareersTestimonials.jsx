"use client";
import { motion } from 'framer-motion';
import './CareersTestimonials.css';

const testimonialsData = [
  {
    percentage: "90%",
    text: "Agree their manager cares for their well-being and treats them with respect"
  },
  {
    percentage: "84%",
    text: "Feel their job gives them opportunities to do challenging and interesting work"
  },
  {
    percentage: "85%",
    text: "Feel proud to work for SNS Construction"
  },
  {
    percentage: "84%",
    text: "Would recommend SNS Construction as a good place to work"
  }
];

const CareersTestimonials = () => {
  return (
    <section className="careers-testimonials">
      <div className="careers-testimonials__container">
        
        <div className="careers-testimonials__left">
          <motion.div 
            className="careers-testimonials__sticky-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="careers-testimonials__heading">
              Employee testimonials
            </h2>
          </motion.div>
        </div>

        <div className="careers-testimonials__right">
          <div className="careers-testimonials__grid">
            {testimonialsData.map((item, index) => (
              <motion.div 
                key={index}
                className="careers-testimonials__stat"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="careers-testimonials__percentage">{item.percentage}</h3>
                <p className="careers-testimonials__text">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CareersTestimonials;
