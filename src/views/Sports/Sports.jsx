"use client";
import React, { useEffect } from 'react';
import HeroStatic from '../../components/HeroStatic/HeroStatic';
import IconTeasers from '../../components/IconTeasers/IconTeasers';
import ContentBlock from '../../components/ContentBlock/ContentBlock';
import NotableProjects from '../../components/NotableProjects/NotableProjects';
import CTA from '../../components/CTA/CTA';
import ContactSection from '../../components/ContactSection/ContactSection';
import './Sports.css';

import heroImg from '../../assets/images/sports_hero.jpg';
import spotlightImg from '../../assets/images/sports_spotlight.jpg';
import polarParkImg from '../../assets/images/sports_polar_park.jpg';
import deerfieldImg from '../../assets/images/sports_deerfield.jpg';
import alamodomeImg from '../../assets/images/sports_alamodome.jpg';
import suncoastImg from '../../assets/images/sports_suncoast.jpg';
import fmbankImg from '../../assets/images/sports_fmbank.jpg';

import mendyMazzo from '../../assets/images/mendy_mazzo.jpg';

const sportsNuggets = [
  {
    icon: "calendar",
    title: "Season certainty through planning",
    text: "Early, thorough planning and creative schedule solutions protect your revenue and ensure you meet your opening date."
  },
  {
    icon: "users",
    title: "Elevating the fan experience",
    text: "A consistent focus on quality delivers premium amenities and finishes, enhancing the fan experience while protecting ticket revenue, sponsorships and day-to-day operations."
  },
  {
    icon: "chart",
    title: "Peak performance through quality",
    text: "Precise execution of advanced structural systems, long-span construction and broadcasting technology ensures efficient turnover and seamless game-day performance."
  },
  {
    icon: "organization-chart",
    title: "Seamless operations during construction",
    text: "Proactive planning and communication protect your brand with smooth ingress and egress, intuitive wayfinding and well-coordinated transition between construction zones."
  }
];

const sportsProjects = [
  { className: "", image: polarParkImg, title: "City of Worcester, Polar Park", location: "" },
  { className: "", image: deerfieldImg, title: "Deerfield Academy, Field House and Hockey Rink", location: "" },
  { className: "", image: alamodomeImg, title: "City of San Antonio, Alamodome Improvements", location: "" },
  { className: "", image: suncoastImg, title: "Florida SouthWestern State College, Suncoast Arena", location: "" },
  { className: "", image: fmbankImg, title: "Montgomery County, F&M Bank Arena", location: "" }
];

const contacts = [
  {
    name: 'Mendy Mazzo',
    role: 'Senior Vice President, National Business Development',
    department: 'Buildings',
    imageSrc: mendyMazzo
  }
];

const Sports = () => {
  useEffect(() => {
    document.title = 'Sports construction | SNS Construction';
  }, []);

  return (
    <div className="sports-page">
      <HeroStatic 
        title="Sports" 
        intro="Building premier sports venues where teams make history and communities unite, delivered on schedule and built to perform from opening day."
        imageSrc={heroImg}
        breadcrumbCurrent="Sports"
      />
      
      <IconTeasers 
        heading="Bringing knowledge and foresight to every project"
        teasers={sportsNuggets}
      />

      <ContentBlock 
        heading="Project spotlight: University of Cincinnati"
        paragraph="Our team delivered the Fifth Third Arena ahead of schedule with $14 million in additional scope."
        buttonText="View project"
        buttonLink="/construction/buildings/sports/fifth-third-arena-renovation"
        imageSrc={spotlightImg}
        imageAlt="University of Cincinnati Arena"
        theme="light"
      />

      <NotableProjects 
        title="Notable projects"
        description="From NFL stadiums to community ice rinks, we have experience constructing a wide range of sports facilities."
        linkText="Sports portfolio"
        linkUrl="/sports/portfolio"
        projects={sportsProjects}
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

export default Sports;
