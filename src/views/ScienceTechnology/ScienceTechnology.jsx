"use client";
import React, { useEffect } from 'react';
import HeroStatic from '../../components/HeroStatic/HeroStatic';
import ContentBlock from '../../components/ContentBlock/ContentBlock';
import NotableProjects from '../../components/NotableProjects/NotableProjects';
import CTA from '../../components/CTA/CTA';
import ContactSection from '../../components/ContactSection/ContactSection';
import './ScienceTechnology.css';

import heroImg from '../../assets/images/st_hero.png';
import spotlightImg from '../../assets/images/st_spotlight.jpg';
import cleanroomsImg from '../../assets/images/st_cleanrooms.png';
import hightechImg from '../../assets/images/st_hightech.jpg';
import pharmaImg from '../../assets/images/st_pharma.png';
import rdImg from '../../assets/images/st_rd.png';
import datacentersImg from '../../assets/images/st_datacenters.jpg';
import specialtyImg from '../../assets/images/st_specialty.png';

import tiegMurray from '../../assets/images/tieg_murray.jpg';
import bryanNorthrop from '../../assets/images/bryan_northrop.jpg';

const stProjects = [
  { className: "", image: cleanroomsImg, title: "Clean Rooms", location: "" },
  { className: "", image: hightechImg, title: "High-Tech Manufacturing", location: "" },
  { className: "", image: pharmaImg, title: "Pharmaceutical & Medical Device Manufacturing", location: "" },
  { className: "", image: rdImg, title: "Research & Development", location: "" },
  { className: "", image: datacentersImg, title: "Data Centers", location: "" },
  { className: "", image: specialtyImg, title: "Specialty Research", location: "" }
];

const contacts = [
  {
    name: 'Tieg Murray',
    role: 'Vice President, Market Strategy',
    department: 'Buildings',
    imageSrc: tiegMurray
  },
  {
    name: 'Bryan Northrop',
    role: 'Executive Vice President, General Manager',
    department: 'Buildings',
    imageSrc: bryanNorthrop
  }
];

const ScienceTechnology = () => {
  useEffect(() => {
    document.title = 'Science + Technology construction | SNS Construction';
  }, []);

  return (
    <div className="science-technology">
      <HeroStatic 
        title="Science + Technology" 
        intro="Connecting the expertise of our local builders with global resources to deliver speed to market, scalability, and cost and energy efficiency."
        imageSrc={heroImg}
        breadcrumbCurrent="Science + Technology"
      />
      
      <section className="st-intro-section">
        <div className="st-intro-content">
          <div className="st-intro-left">
            <h2>Bringing knowledge and foresight to every project</h2>
          </div>
          <div className="st-intro-right">
            <p>Our unique strength lies in a purposeful and collaborative approach that connects the expertise of our local builders with national and global resources. This integrated strategy sparks innovation, delivers optimal results and takes your project beyond what’s expected.</p>
          </div>
        </div>
      </section>

      <ContentBlock 
        heading="Project spotlight: Forge Biologics"
        paragraph="Delivering the first phase one week early, SNS Construction partnered with Forge Biologics to transform a book storage warehouse into a biomanufacturing facility that supports cell and gene therapy development and manufacturing."
        buttonText="View project"
        buttonLink="/construction/buildings/science-and-technology/clean-rooms/forge-biologics-headquarters"
        imageSrc={spotlightImg}
        imageAlt="Cleanrooms spotlight"
        theme="blue"
      />

      <NotableProjects 
        title="Notable projects"
        description="We’ve constructed more than 1,500 Science + Technology projects for a wide range of institutions and companies."
        linkText="Science + Technology portfolio"
        linkUrl="/science-technology/portfolio"
        projects={stProjects}
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

export default ScienceTechnology;
