"use client";
import React, { useEffect } from 'react';
import HeroStatic from '../../components/HeroStatic/HeroStatic';
import IconTeasers from '../../components/IconTeasers/IconTeasers';
import NotableProjects from '../../components/NotableProjects/NotableProjects';
import CTA from '../../components/CTA/CTA';
import ContactSection from '../../components/ContactSection/ContactSection';
import './Hotels.css';

import heroImg from '../../assets/images/hotels_hero.jpg';
import yotelImg from '../../assets/images/hotels_yotel.jpg';
import signiaImg from '../../assets/images/hotels_signia.jpg';
import renaissanceImg from '../../assets/images/hotels_renaissance.jpg';
import summitImg from '../../assets/images/hotels_summit.jpg';

import mendyMazzo from '../../assets/images/mendy_mazzo.jpg';
import chrisWestley from '../../assets/images/christopher_westley.png';

const hotelsNuggets = [
  {
    icon: "user_interaction",
    title: "Prioritizing the guest experience",
    text: "By constructing luxurious, brand-consistent spaces and maintaining your operations, we keep the guest experience our top priority."
  },
  {
    icon: "calendar",
    title: "Delivering on your dates",
    text: "Our early, thorough construction planning and creative schedule solutions protect revenue and meet your financial milestones."
  },
  {
    icon: "check",
    title: "Budget without compromising quality",
    text: "Our team safeguards your investment with early cost planning, comprehensive procurement and disciplined cost control while maintaining an unwavering commitment to quality."
  },
  {
    icon: "user_interaction",
    title: "Seamless handoff coordination",
    text: "From day one, we coordinate custom finishes, FF&E, commissioning and brand approvals for a seamless turnover and smooth opening."
  }
];

const hotelsProjects = [
  { className: "", image: yotelImg, title: "Synapse Development Group, Yotel San Francisco", location: "San Francisco, California" },
  { className: "", image: signiaImg, title: "Signia by Hilton Atlanta, Georgia World Congress Center", location: "Atlanta, Georgia" },
  { className: "", image: renaissanceImg, title: "Remington Hotels, Renaissance Nashville Hotel Renovations", location: "Nashville, Tennessee" },
  { className: "", image: summitImg, title: "RBM Development Company, The Summit Hotel", location: "Cincinnati, Ohio" }
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

const Hotels = () => {
  useEffect(() => {
    document.title = 'Hotel construction | SNS Construction';
  }, []);

  return (
    <div className="hotels">
      <HeroStatic 
        title="Hotels" 
        intro="Elevating guest experiences with exceptional quality to protect your brand and deliver a seamless, revenue-ready turnover."
        imageSrc={heroImg}
        breadcrumbCurrent="Hotels"
      />
      
      <IconTeasers 
        heading="Bringing knowledge and foresight to every project"
        teasers={hotelsNuggets}
      />

      <NotableProjects 
        title="Notable projects"
        description="From landmark high-rises to refined interior renovations, SNS Construction has delivered hotel projects across the United States."
        linkText="Hotel portfolio"
        linkUrl="/hotels/portfolio"
        projects={hotelsProjects}
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

export default Hotels;
