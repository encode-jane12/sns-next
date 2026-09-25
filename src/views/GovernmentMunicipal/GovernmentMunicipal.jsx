"use client";
import React, { useEffect } from 'react';
import HeroStatic from '../../components/HeroStatic/HeroStatic';
import TextGrid from '../../components/TextGrid/TextGrid';
import NotableProjects from '../../components/NotableProjects/NotableProjects';
import CTA from '../../components/CTA/CTA';
import ContactSection from '../../components/ContactSection/ContactSection';
import './GovernmentMunicipal.css';

import heroImg from '../../assets/images/government_hero.jpg';
import santaBarbara from '../../assets/images/project_santa_barbara.jpg';
import montgomery from '../../assets/images/project_montgomery.jpg';
import wakeCounty from '../../assets/images/project_wake_county.jpg';
import sanAntonio from '../../assets/images/project_san_antonio.jpg';

import mendyMazzo from '../../assets/images/mendy_mazzo.jpg';
import chrisWestley from '../../assets/images/christopher_westley.png';

const governmentNuggets = [
  {
    title: "Delivering certainty",
    text: "Our team protects your project dollars through early cost planning, comprehensive procurement, disciplined cost control and an unwavering commitment to your schedule."
  },
  {
    title: "Prioritizing transparency",
    text: "Through clear communication, open-book practices and strict regulatory compliance, we keep stakeholders informed and safeguard public trust."
  },
  {
    title: "Bringing long-term value",
    text: "We deliver durable, high-performing facilities while providing analysis for long-term maintainability and life-cycle costs to support informed decision-making."
  },
  {
    title: "Preserving history",
    text: "We protect historical landmarks through thoughtful construction planning, careful restoration and close coordination with state historic preservation authorities."
  }
];

const governmentProjects = [
  { className: "", image: santaBarbara, title: "Santa Barbara County, Emergency Operations", location: "Santa Barbara, California" },
  { className: "", image: montgomery, title: "Montgomery County, Justice Center and Hancock Square", location: "Norristown, Pennsylvania" },
  { className: "", image: "https://i.ibb.co/5bNKw2x/Wake-County-Government-Public-Health-Center.jpg", title: "Wake County Government, Public Health Center", location: "Raleigh, North Carolina" },
  { className: "", image: sanAntonio, title: "City of San Antonio, City Tower Renovations", location: "San Antonio, Texas" }
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

const GovernmentMunicipal = () => {
  useEffect(() => {
    document.title = 'Government & Municipal construction | SNS Construction';
  }, []);

  return (
    <div className="government-municipal">
      <HeroStatic 
        title="Government & Municipal" 
        intro="Thoughtfully building, preserving and modernizing civic spaces with transparency and certainty to uphold public trust and strengthen our communities."
        imageSrc={heroImg}
        breadcrumbCurrent="Government & Municipal"
      />
      
      <TextGrid 
        heading="Bringing knowledge and foresight to every project" 
        items={governmentNuggets} 
      />

      <NotableProjects 
        title="Notable projects"
        description="At SNS Construction, we partner with customers to turn ambitious plans into projects that create long-term value for people, places and society."
        linkText="Government & Municipal portfolio"
        linkUrl="/government-municipal/portfolio"
        projects={governmentProjects}
        theme="gray"
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

export default GovernmentMunicipal;
