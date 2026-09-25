"use client";
import React, { useEffect } from 'react';
import HeroStatic from '../../components/HeroStatic/HeroStatic';
import TextGrid from '../../components/TextGrid/TextGrid';
import NotableProjects from '../../components/NotableProjects/NotableProjects';
import CTA from '../../components/CTA/CTA';
import ContactSection from '../../components/ContactSection/ContactSection';
import './ParksWaterfront.css';

import heroImg from '../../assets/images/parks_hero.jpg';
import stpeteImg from '../../assets/images/parks_stpete.jpg';
import climateImg from '../../assets/images/parks_ny_climate.jpg';
import laneImg from '../../assets/images/parks_lane.jpg';
import ascendImg from '../../assets/images/parks_ascend.jpg';

import mendyMazzo from '../../assets/images/mendy_mazzo.jpg';
import chrisWestley from '../../assets/images/christopher_westley.png';

const parksNuggets = [
  {
    title: "Creating trust",
    text: "Our transparent and consistent communication aligns stakeholders and helps manage expectations from planning through ribbon cutting."
  },
  {
    title: "Minimizing disruptions",
    text: "With thorough and thoughtful planning, we phase construction to keep parks, waterfronts and surrounding areas safe and accessible for the communities they serve."
  }
];

const parksProjects = [
  { className: "", image: stpeteImg, title: "City of St. Petersburg, St. Petersburg Municipal Pier", location: "" },
  { className: "", image: climateImg, title: "The New York Climate Exchange, Climate Campus", location: "" },
  { className: "", image: laneImg, title: "City of Tampa, Julian B. Lane Riverfront Park", location: "" },
  { className: "", image: ascendImg, title: "Metropolitan Government of Nashville and Davidson County, West Riverfront Park and Ascend Amphitheater", location: "" }
];

const contacts = [
  {
    name: 'Mendy Mazzo',
    role: 'Senior Vice President, National Business Development',
    department: 'Buildings',
    imageSrc: mendyMazzo
  },
  {
    name: 'Christopher Westley',
    role: 'Head of Strategic Services',
    department: 'Development',
    imageSrc: chrisWestley
  }
];

const ParksWaterfront = () => {
  useEffect(() => {
    document.title = 'Parks & Waterfront construction | SNS Construction';
  }, []);

  return (
    <div className="parks-waterfront">
      <HeroStatic 
        title="Parks & Waterfront" 
        intro="Delivering inspiring spaces for communities to connect and thrive while safeguarding public investment and the natural environment."
        imageSrc={heroImg}
        breadcrumbCurrent="Parks & Waterfront"
      />
      
      <TextGrid 
        heading="Bringing knowledge and foresight to every project"
        items={parksNuggets}
      />

      <CTA 
        title="Shaping sustainable places"
        description="As an industry leader in sustainability, we bring unmatched experience in resilient construction to safeguard natural resources while meeting agency requirements and long-term environmental goals."
        buttonText="Sustainability"
        buttonLink="/construction/expertise/sustainability"
      />

      <NotableProjects 
        title="Delivering certainty"
        description="Through our commitment to protect community resources, we maintain your construction budget in alignment with funding windows and deliver on schedule for seasonal use and public commitments."
        linkText="Parks & Waterfront portfolio"
        linkUrl="/parks-waterfront/portfolio"
        projects={parksProjects}
        theme="light"
      />

      <CTA 
        title="Build your career with us."
        description="Explore opportunities across markets and business units."
        buttonText="Open positions"
        buttonLink="/careers"
      />


    </div>
  );
};

export default ParksWaterfront;
