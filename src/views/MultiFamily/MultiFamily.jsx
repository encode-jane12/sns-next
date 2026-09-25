"use client";
import React, { useEffect } from 'react';
import HeroStatic from '../../components/HeroStatic/HeroStatic';
import IconTeasers from '../../components/IconTeasers/IconTeasers';
import NotableProjects from '../../components/NotableProjects/NotableProjects';
import CTA from '../../components/CTA/CTA';
import ContactSection from '../../components/ContactSection/ContactSection';
import './MultiFamily.css';

import heroImg from '../../assets/images/multifamily_hero.jpg';
import sixthSouthImg from '../../assets/images/multifamily_sixth_south.jpg';
import resaImg from '../../assets/images/multifamily_resa.jpg';
import alleyImg from '../../assets/images/multifamily_alley111.jpg';
import harloImg from '../../assets/images/multifamily_harlo.jpg';

import mendyMazzo from '../../assets/images/mendy_mazzo.jpg';
import chrisWestley from '../../assets/images/christopher_westley.png';

const multiFamilyNuggets = [
  {
    icon: "check",
    title: "Delivering certainty",
    text: "Our early, disciplined construction planning and efficient turnover protects lease and sales milestones, even in volatile market conditions."
  },
  {
    icon: "hand-money-dollar",
    title: "Budget protection",
    text: "Our team protects your investment with early cost validation, strategic procurement and continuous budget alignment."
  },
  {
    icon: "diploma",
    title: "Unmatched quality",
    text: "A persistent focus on quality supports a seamless transition to property management, leasing targets and lasting resident satisfaction."
  },
  {
    icon: "construction-machinery",
    title: "Constructability solutions",
    text: "Our early design collaboration drives constructable, repeatable solutions that optimize layouts and standardization while preserving design intent."
  }
];

const multiFamilyProjects = [
  { className: "", image: sixthSouthImg, title: "Sixth South Apartments", location: "" },
  { className: "", image: resaImg, title: "RESA", location: "" },
  { className: "", image: alleyImg, title: "Alley111", location: "" },
  { className: "", image: harloImg, title: "The Harlo", location: "" }
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

const MultiFamily = () => {
  useEffect(() => {
    document.title = 'Multi-family construction | SNS Construction';
  }, []);

  return (
    <div className="multi-family">
      <HeroStatic 
        title="Multi-family" 
        intro="Optimizing asset performance and long-term value through the on-time delivery of market-leading multi-family residential communities."
        imageSrc={heroImg}
        breadcrumbCurrent="Multi-family"
      />
      
      <IconTeasers 
        heading="Bringing knowledge and foresight to every project"
        teasers={multiFamilyNuggets}
      />

      <CTA 
        title="Explore our multi-family development properties"
        description="SNS Construction develops and builds multi-family residences that are sustainable with amenity-rich environments to enjoy."
        buttonText="Multi-family properties"
        buttonLink="/commercial-development/multi-family"
      />

      <NotableProjects 
        title="Notable projects"
        description=""
        linkText=""
        linkUrl=""
        projects={multiFamilyProjects}
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

export default MultiFamily;
