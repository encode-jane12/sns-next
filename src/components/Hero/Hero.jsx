"use client";
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const headingText = 'Firm built on a single operational principle';
const subtitleText =
  " uncompromising structural integrity backed by transparent project governance.";

/* ── Variants ── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const wordVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const subtitleVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeOut', delay: 1 },
  },
};

const bgVariants = {
  hidden: { scale: 1.05 },
  visible: {
    scale: 1,
    transition: { duration: 2, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const PauseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="6" width="2" height="12" />
    <rect x="14" y="6" width="2" height="12" />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <polygon points="8,5 19,12 8,19" />
  </svg>
);

const Hero = () => {
  const words = headingText.split(' ');
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  // Working placeholder construction-style video URL
  const videoUrl = "https://www.pexels.com/download/video/19241051/";

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="hero">
      {/* Background Video with parallax zoom */}
      <motion.div
        className="hero__background"
        variants={bgVariants}
        initial="hidden"
        animate="visible"
      >
        <video
          ref={videoRef}
          className="hero__video"
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
        />
      </motion.div>

      {/* Dark gradient overlay */}
      <div className="hero__overlay" />

      {/* Content */}
      <div className="hero__content">
        <div className="hero__inner">
          {/* Heading – word-by-word stagger */}
          <motion.h1
            className="hero__heading"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, i) => (
              <motion.span key={i} className="hero__word" variants={wordVariants}>
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle & Controls */}
          <div className="hero__subtitle-wrapper">
            <motion.p
              className="hero__subtitle"
              variants={subtitleVariants}
              initial="hidden"
              animate="visible"
            >
              {subtitleText}
            </motion.p>

            <motion.button
              className="hero__play-pause"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
