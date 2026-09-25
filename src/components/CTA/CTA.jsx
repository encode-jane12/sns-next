"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

import './CTA.css';

const CTA = ({ 
  title = "Ready to build something extraordinary?", 
  description = "Let's talk about your next project.", 
  buttonText = "Mail Us", 
  buttonLink = "mailto:careers@snsconstructioninc.com" 
}) => {
  const isExternal = buttonLink.startsWith('http');
  const ButtonComponent = 'a';
  const buttonProps = { href: buttonLink };

  return (
    <motion.section
      className="cta"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="cta__content"
        variants={{
          hidden: { opacity: 0, x: -60 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="cta__heading">
          {title}
        </h2>
        <p className="cta__subtext">
          {description}
        </p>
      </motion.div>

      <motion.div
        className="cta__button-wrapper"
        variants={{
          hidden: { opacity: 0, x: 60 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
      >
        <ButtonComponent
          {...buttonProps}
          className="cta__button"
        >
          {buttonText}
          <span className="cta__arrow">→</span>
        </ButtonComponent>
      </motion.div>
    </motion.section>
  );
};

export default CTA;
