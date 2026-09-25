"use client";
import React, { useEffect } from 'react';
import HeroStatic from '../../components/HeroStatic/HeroStatic';
import IconTeasers from '../../components/IconTeasers/IconTeasers';
import NotableProjects from '../../components/NotableProjects/NotableProjects';
import CTA from '../../components/CTA/CTA';
import ContactSection from '../../components/ContactSection/ContactSection';
import './CommercialOffices.css';

import heroImg from '../../assets/images/commercial_office_hero.jpg';
import mendyMazzo from '../../assets/images/mendy_mazzo.jpg';
import chrisWestley from '../../assets/images/christopher_westley.png';

const LightbulbIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '40px', height: '40px' }}>
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.63.78 3.12 1.5 4.5.76.76 1.23 1.52 1.41 2.5" />
  </svg>
);

const ProcessIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '40px', height: '40px' }}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const StackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '40px', height: '40px' }}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 12 12 17 22 12" />
    <polyline points="2 17 12 22 22 17" />
  </svg>
);

const UserHandshakeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '40px', height: '40px' }}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const teasers = [
  {
    icon: <LightbulbIcon />,
    title: 'Providing data-informed cost certainty',
    intro: 'We leverage national resources like our Strategic Supply Chain program, SNS Construction Metriks® tools and market data to deliver reliable, data-informed cost estimates and protect your investment.'
  },
  {
    icon: <ProcessIcon />,
    title: 'Elevating quality with national insights',
    intro: 'Resources like our National Quality Council, in-house design reviews and MEP experts empower us to elevate quality and certainty, ensuring your project reflects the best of our collective expertise.'
  },
  {
    icon: <StackIcon />,
    title: 'Accelerating your path to revenue',
    intro: 'Our proprietary Metriks Scheduling tool and lean practices enable us to develop dependable construction schedules that we diligently manage in the field. We accelerate speed-to-market, mitigate risk and help you generate revenue sooner.'
  },
  {
    icon: <UserHandshakeIcon />,
    title: 'Becoming your trusted partner',
    intro: 'By emphasizing proactive collaboration and operational excellence, we stay in step with you, keeping your project on the path to success. We’re committed to building a partnership you can rely on for decades to come.'
  }
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

const CommercialOffices = () => {
  useEffect(() => {
    document.title = 'Commercial Offices | SNS Construction';
  }, []);

  return (
    <div className="commercial-offices">
      <HeroStatic 
        title="Commercial Offices" 
        intro="Empowering data-informed decision-making that delivers reliable outcomes, giving you confidence in your investment."
        imageSrc="https://i.ibb.co/RpBbQDC6/Commercial-Offices.jpg"
        breadcrumbCurrent="Commercial Offices"
      />
      
      <IconTeasers 
        heading="Bringing knowledge and foresight to every project"
        teasers={teasers}
      />

      <CTA 
        title="Explore our commercial development properties"
        description="We deliver commercial properties that help your business perform, attract talent and grow. With a strong track record and deep local insight, we create future-proofed, sustainable spaces tailored to your needs."
        buttonText="Our Commercial Development"
        buttonLink="commercial-development"
      />

      <NotableProjects />

      <CTA 
        title="Build your career with us."
        description="Explore opportunities across markets and business units."
        buttonText="Open positions"
        buttonLink="/careers"
      />


    </div>
  );
};

export default CommercialOffices;
