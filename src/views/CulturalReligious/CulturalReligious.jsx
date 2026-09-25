"use client";
import React, { useEffect } from 'react';
import HeroStatic from '../../components/HeroStatic/HeroStatic';
import ContentBlock from '../../components/ContentBlock/ContentBlock';
import NotableProjects from '../../components/NotableProjects/NotableProjects';
import CTA from '../../components/CTA/CTA';
import ContactSection from '../../components/ContactSection/ContactSection';
import './CulturalReligious.css';

import heroImg from '../../assets/images/cultural_hero.jpg';
import durhamPac from '../../assets/images/project_durham_pac.jpg';
import frostMuseum from '../../assets/images/project_frost.jpg';
import stNicholas from '../../assets/images/project_st_nicholas.jpg';
import nycedcCultural from '../../assets/images/project_nycedc.jpg';

import mendyMazzo from '../../assets/images/mendy_mazzo.jpg';
import chrisWestley from '../../assets/images/christopher_westley.png';

const culturalProjects = [
  { className: "", image: "https://i.ibb.co/xK91YVkR/City-of-Durham-Durham-Performing-Arts-Center.jpg", title: "City of Durham, Durham Performing Arts Center", location: "Durham, North Carolina" },
  { className: "", image: "https://i.ibb.co/DDwQRyV1/Phillip-and-Patricia-Frost-Museum-of-Science-New-Museum.jpg", title: "Phillip and Patricia Frost Museum of Science, New Museum", location: "Miami, Florida" },
  { className: "", image: "https://i.ibb.co/DP1fK2SL/Greek-Orthodox-Archdiocese-of-America-Saint-Nicholas-National-Shrine.jpg", title: "Greek Orthodox Archdiocese of America, Saint Nicholas National Shrine", location: "New York, New York" },
  { className: "", image: "https://i.ibb.co/v4xmDb6N/NYCEDC-L10-Cultural-Center.jpg", title: "NYCEDC, L10 Cultural Center", location: "Brooklyn, New York" }
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

const CulturalReligious = () => {
  useEffect(() => {
    document.title = 'Cultural & Religious construction | SNS Construction';
  }, []);

  return (
    <div className="cultural-religious">
      <HeroStatic 
        title="Cultural & Religious" 
        intro="Building spaces that honor your purpose, reflect your community and inspire enduring impact."
        imageSrc={heroImg}
        breadcrumbCurrent="Cultural & Religious"
      />
      
      <ContentBlock 
        heading="Bringing every voice together"
        paragraph="With transparent communication and thoughtful stakeholder engagement, we help leadership, donors and community members stay aligned and make construction decisions confidently from start to finish."
        imageSrc="https://i.ibb.co/wh4p59nJ/Cultural-Religious.jpg" // Reuse an image here for the content block as placeholder
        theme="light"
      />

      <ContentBlock 
        heading="Financial stewardship"
        paragraph="Our open-book and thorough approach preserves your design vision and protects your institution’s long-term operating costs—so every dollar goes further."
        theme="blue"
      />

      <NotableProjects 
        title="Notable projects"
        description="From libraries and churches to museums and cultural centers, our teams build spaces where communities grow."
        linkText="Cultural & Religious portfolio"
        linkUrl="/cultural-religious/portfolio"
        projects={culturalProjects}
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

export default CulturalReligious;
