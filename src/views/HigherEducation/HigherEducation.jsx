"use client";
import React, { useEffect } from 'react';
import HeroStatic from '../../components/HeroStatic/HeroStatic';
import TextGrid from '../../components/TextGrid/TextGrid';
import ContentBlock from '../../components/ContentBlock/ContentBlock';
import NotableProjects from '../../components/NotableProjects/NotableProjects';
import CTA from '../../components/CTA/CTA';
import ContactSection from '../../components/ContactSection/ContactSection';
import './HigherEducation.css';

import heroImg from '../../assets/images/higher_ed_hero.jpg';
import spotlightImg from '../../assets/images/higher_ed_spotlight.jpg';
import librariesImg from '../../assets/images/higher_ed_libraries.jpg';
import academicImg from '../../assets/images/higher_ed_academic.jpg';
import historicImg from '../../assets/images/higher_ed_historic.jpg';
import sportsImg from '../../assets/images/higher_ed_sports.jpg';

import mendyMazzo from '../../assets/images/mendy_mazzo.jpg';
import chrisWestley from '../../assets/images/christopher_westley.png';

const higherEdNuggets = [
  {
    title: "Transparent partnership",
    text: "We align around shared values and communicate transparently to become true partners in delivering sustainable, financially responsible and community focused construction."
  },
  {
    title: "Certainty in lasting value and stewardship",
    text: "Through our experience, we know how to plan for your project’s entire life cycle, not just short-term improvements, to reliably guide you toward future-proofed, high-quality projects that attract top talent."
  }
];

const higherEdProjects = [
  { className: "", image: librariesImg, title: "Libraries", location: "" },
  { className: "", image: academicImg, title: "General Academic", location: "" },
  { className: "", image: historicImg, title: "Historic Preservation", location: "" },
  { className: "", image: sportsImg, title: "Sports & Recreation", location: "" }
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

const HigherEducation = () => {
  useEffect(() => {
    document.title = 'Higher education construction | SNS Construction';
  }, []);

  return (
    <div className="higher-education">
      <HeroStatic 
        title="Higher Education" 
        intro="Bringing certainty, partnership and inspired solutions for every project so you can focus on what matters—developing future leaders."
        imageSrc={heroImg}
        breadcrumbCurrent="Higher Education"
      />
      
      <TextGrid 
        heading="Bringing knowledge and foresight to every project" 
        items={higherEdNuggets} 
      />

      <ContentBlock 
        heading="Project spotlight: Georgia Tech"
        paragraph="Generating 225 percent of its energy needs from solar panels and collecting, treating and infiltrating 15 times the amount of its water needs, the Kendeda Building is the first certified Living Building of its scale in the Southeast U.S."
        imageSrc={spotlightImg}
        theme="light"
      />

      <NotableProjects 
        title="Notable projects"
        description="In the last 10 years, our teams have completed over $13 billion worth of higher education projects."
        linkText="Higher Education portfolio"
        linkUrl="/higher-education/portfolio"
        projects={higherEdProjects}
        theme="blue"
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

export default HigherEducation;
