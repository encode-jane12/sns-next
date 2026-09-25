"use client";
import React, { useEffect } from 'react';
import HeroStatic from '../../components/HeroStatic/HeroStatic';
import TextGrid from '../../components/TextGrid/TextGrid';
import ContentBlock from '../../components/ContentBlock/ContentBlock';
import NotableProjects from '../../components/NotableProjects/NotableProjects';
import CTA from '../../components/CTA/CTA';
import ContactSection from '../../components/ContactSection/ContactSection';
import './K12Education.css';

import heroImg from '../../assets/images/k12_hero.jpg';
import spotlightImg from '../../assets/images/k12_spotlight.jpg';
import mountainViewImg from '../../assets/images/k12_mountain_view.jpg';
import highlineImg from '../../assets/images/k12_highline.jpg';
import tumwaterImg from '../../assets/images/k12_tumwater.jpg';
import lafayetteImg from '../../assets/images/k12_lafayette.jpg';

import mendyMazzo from '../../assets/images/mendy_mazzo.jpg';
import chrisWestley from '../../assets/images/christopher_westley.png';

const k12Nuggets = [
  {
    title: "Lasting value and financial stewardship",
    text: "We evaluate market conditions, procurement strategies, escalation and lifecycle costs to create realistic budgets and minimize surprises—aligning design, schedule and financial decisions to protect your investment."
  },
  {
    title: "A partnership guided by K-12 experts",
    text: "Through disciplined construction planning and proactive problem-solving, our teams anticipate challenges and guide districts through complex logistics—delivering demanding projects safely, on time and without disrupting campus operations."
  }
];

const k12Projects = [
  { className: "", image: mountainViewImg, title: "Evergreen Public Schools, Mountain View High School", location: "" },
  { className: "", image: highlineImg, title: "Highline Public Schools, Highline High School", location: "" },
  { className: "", image: tumwaterImg, title: "Beaverton School District, Tumwater Middle School", location: "" },
  { className: "", image: lafayetteImg, title: "D.C. Department of General Services, Lafayette Elementary School", location: "" }
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

const K12Education = () => {
  useEffect(() => {
    document.title = 'K-12 Education construction | SNS Construction';
  }, []);

  return (
    <div className="k12-education">
      <HeroStatic 
        title="K-12 Education" 
        intro="Building resilient K-12 facilities through financial stewardship, local expertise and project certainty."
        imageSrc={heroImg}
        breadcrumbCurrent="K-12 Education"
      />
      
      <TextGrid 
        heading="Bringing knowledge and foresight to every project." 
        items={k12Nuggets} 
      />

      <ContentBlock 
        heading="Building society together"
        paragraph="As local builders and community members, our teams collaborate early with all stakeholders to shape projects around local priorities. Through engagement with the community, we build trust while creating safe, inspiring places for students to learn and thrive."
        imageSrc={spotlightImg}
        theme="light"
        linkText="Community Investment"
        linkUrl="/construction/approach/community-investment"
      />

      <NotableProjects 
        title="Notable projects"
        description="SNS Construction has delivered over 1,900 K-12 projects across the country."
        linkText="K-12 portfolio"
        linkUrl="/k-12-education/portfolio"
        projects={k12Projects}
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

export default K12Education;
