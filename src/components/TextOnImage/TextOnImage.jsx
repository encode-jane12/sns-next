"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';


import img1 from '../../assets/images/hero_airport.png';
import img2 from '../../assets/images/hero_worker.png';
import img3 from '../../assets/images/hero_construction.png';

import './TextOnImage.css';

/* ── slide data ─────────────────────────────── */
const slides = [
  {
    id: 1,
    image: img1,
    heading: 'Expertise',
    text: 'From hospitals to stadiums, airports to corporate headquarters, and power plants to tunnels and bridges, SNS Construction brings deep sector expertise and a fully integrated approach to planning, design and construction.',
    cta: 'Expertise',
    url: 'about-us/sns-construction/our-history',
  },
  {
    id: 2,
    image: img2,
    heading: 'Our notable experience',
    text: 'SNS Construction is a global leader in construction and development, delivering complex building and infrastructure projects across a diverse range of market sectors.',
    cta: 'Global Projects',
    url: 'construction/expertise/megaprojects',
  },
  {
    id: 3,
    image: img3,
    heading: 'Sustainability',
    text: 'We are committed to leading the industry in sustainable practices, reducing carbon emissions, and creating buildings that contribute positively to communities.',
    cta: 'Sustainability',
    url: 'construction/expertise/sustainability',
  },
];

/* ── reusable arrow SVG ─────────────────────── */
const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5 12H19M19 12L13 6M19 12L13 18"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ── individual slide ───────────────────────── */
function Slide({ slide, index, scrollYProgress }) {
  // zIndex increases so next slides appear on top of previous ones
  const zIndex = index; 

  /*
   * Smooth Slide-Up Animation:
   * Slide 0 stays in place.
   * Slide 1 slides up from 100% to 0% as user scrolls.
   * Slide 2 slides up from 100% to 0% after Slide 1 is done.
   */
  const yRanges = [
    [0, 0],
    [0.2, 0.45],
    [0.55, 0.8],
  ];

  const yValues = [
    ['0%', '0%'],
    ['100%', '0%'],
    ['100%', '0%'],
  ];

  const y = useTransform(
    scrollYProgress,
    yRanges[index],
    yValues[index]
  );

  /*
   * Parallax zoom: background image slightly scales down 
   * as the slide fully enters.
   */
  const scaleRanges = [
    [0.0, 0.25],
    [0.2, 0.45],
    [0.55, 0.8],
  ];

  const imgScale = useTransform(
    scrollYProgress,
    scaleRanges[index],
    [1.15, 1.0]
  );

  return (
    <motion.div
      className="text-on-image__slide"
      style={{
        zIndex,
        y,
      }}
    >
      {/* background image */}
      <div className="text-on-image__bg">
        <motion.img
          src={(slide.image)?.src || (slide.image)}
          alt={slide.heading}
          style={{ scale: imgScale }}
          draggable={false}
        />
      </div>

      {/* dark gradient */}
      <div className="text-on-image__overlay" />

      {/* text content */}
      <div className="text-on-image__content">
        <h2 className="text-on-image__heading">{slide.heading}</h2>
        <p className="text-on-image__text">{slide.text}</p>

        <Link href={slide.url} className="text-on-image__cta" aria-label={slide.cta}>
          <span className="text-on-image__cta-label">{slide.cta}</span>
          <span className="text-on-image__cta-circle">
            <ArrowIcon />
          </span>
        </Link>
      </div>
    </motion.div>
  );
}

/* ── main component ─────────────────────────── */
export default function TextOnImage() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section className="text-on-image" ref={containerRef}>
      <div className="text-on-image__sticky">
        {slides.map((slide, i) => (
          <Slide
            key={slide.id}
            slide={slide}
            index={i}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
