"use client";
import React, { useEffect } from 'react';
import HeroStatic from '../../components/HeroStatic/HeroStatic';
import TextGrid from '../../components/TextGrid/TextGrid';
import ContentBlock from '../../components/ContentBlock/ContentBlock';
import NotableProjects from '../../components/NotableProjects/NotableProjects';
import CTA from '../../components/CTA/CTA';
import ContactSection from '../../components/ContactSection/ContactSection';
import './Healthcare.css';

import heroImg from '../../assets/images/healthcare_hero.jpg';
import spotlightImg from '../../assets/images/healthcare_spotlight.jpg';
import outpatientImg from '../../assets/images/healthcare_outpatient.jpg';
import cancerImg from '../../assets/images/healthcare_cancer.jpg';
import educationImg from '../../assets/images/healthcare_education.jpg';
import patientImg from '../../assets/images/healthcare_patient.jpg';

import mendyMazzo from '../../assets/images/mendy_mazzo.jpg';
import chrisWestley from '../../assets/images/christopher_westley.png';

const healthcareNuggets = [
  {
    title: "A partner focused on the end-user experience",
    text: "By aligning construction with what matters most to you, we provide a seamless, worry-free experience every step of the way."
  },
  {
    title: "Confidence in cost, quality and schedule",
    text: "Looking at the full project lifecycle, we help you make strategic decisions that address potential challenges early, ensure high quality, provide long-term flexibility and deliver operational efficiency."
  }
];

const healthcareProjects = [
  { className: "", image: outpatientImg, title: "Outpatient Facilities", location: "" },
  { className: "", image: cancerImg, title: "Cancer Centers", location: "" },
  { className: "", image: educationImg, title: "Teaching Hospitals & Medical Education", location: "" },
  { className: "", image: patientImg, title: "Patient Towers", location: "" }
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

const Healthcare = () => {
  useEffect(() => {
    document.title = 'Healthcare construction | SNS Construction';
  }, []);

  return (
    <div className="healthcare">
      <HeroStatic 
        title="Healthcare" 
        intro="Experience a seamless journey of collaboration from a compassionate team that delivers customized solutions, technical expertise and project certainty."
        imageSrc={heroImg}
        breadcrumbCurrent="Healthcare"
      />
      
      <TextGrid 
        heading="Bringing knowledge and foresight to every project" 
        items={healthcareNuggets} 
      />

      <ContentBlock 
        heading="Project spotlight: Sutter Health"
        paragraph="Through creative ideas and lean tactics, our team delivered the Palo-Alto Medical Foundation three-story medical office building nearly three months ahead of schedule with around $3 million in cost savings."
        imageSrc={spotlightImg}
        theme="light"
      />

      <NotableProjects 
        title="Notable projects"
        description="Your needs come first. With comprehensive and local healthcare experience, we address every unique goal and challenge with creativity and technical proficiency."
        linkText="Healthcare portfolio"
        linkUrl="/healthcare/portfolio"
        projects={healthcareProjects}
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

export default Healthcare;
