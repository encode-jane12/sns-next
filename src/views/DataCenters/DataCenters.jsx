"use client";
import React, { useEffect } from 'react';
import HeroStatic from '../../components/HeroStatic/HeroStatic';
import IconTeasers from '../../components/IconTeasers/IconTeasers';
import StatsBlock from '../../components/StatsBlock/StatsBlock';
import ContentBlock from '../../components/ContentBlock/ContentBlock';
import NotableProjects from '../../components/NotableProjects/NotableProjects';
import CTA from '../../components/CTA/CTA';
import ContactSection from '../../components/ContactSection/ContactSection';
import './DataCenters.css';

import heroImg from '../../assets/images/datacenter_hero.jpg';
import spotlightImg from '../../assets/images/datacenter_spotlight.jpg';
import cyPartners from '../../assets/images/project_datacenter_cy.jpg';
import hyperscale from '../../assets/images/project_datacenter_hyperscale.jpg';
import colocation from '../../assets/images/project_datacenter_colocation.jpg';

import mendyMazzo from '../../assets/images/mendy_mazzo.jpg';
import chrisWestley from '../../assets/images/christopher_westley.png';

const dataCenterTeasers = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
      </svg>
    ),
    title: "Understanding your needs",
    intro: "Whether hyperscale or co-location, we anticipate construction challenges and develop solutions for your evolving needs. Our lifecycle approach provides predictability and maximizes the long-term performance of your portfolio."
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Specialized teams with a multi-national reach",
    intro: "Our deep bench of electrical, OFCI, QA/QC and commissioning experts proactively manage critical drivers. We build teams to deliver consistent results on single projects or across your portfolio."
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16v16H4z" />
        <path d="M4 8h16M4 16h16M8 4v16M16 4v16" />
      </svg>
    ),
    title: "Maximizing your investment",
    intro: "You need speed to market and facilities that deliver more efficiently every time. Our teams continuously improve schedules, reduce costs and find campus efficiencies to get you up and running faster."
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Strategic relationships",
    intro: "Long-standing relationships with trusted electrical trade partners balance cost, schedule and technical risk for the most critical scope on your data center build."
  }
];

const dataCenterStats = [
  { value: "250+", label: "data centers" },
  { value: "500 MW/year", label: "average in progress of data centers" },
  { value: "7 billion+", label: "in completed data centers" }
];

const dataCenterProjects = [
  { className: "", image: "https://i.ibb.co/qLZJSVSF/CY-Partners-LLC-Peak-10-Data-Center.jpg", title: "CY Partners LLC, Peak 10 Data Center", location: "Charlotte, North Carolina" },
  { className: "", image: "https://i.ibb.co/xtC4qcBx/Hyperscale-Technology-Campus.webp", title: "Hyperscale Technology Campus", location: "Ashburn, Virginia" },
  { className: "", image: "https://i.ibb.co/HT8MJZNL/Multi-Tenant-Colocation-Facility.jpg", title: "Multi-Tenant Colocation Facility", location: "Dallas, Texas" }
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

const DataCenters = () => {
  useEffect(() => {
    document.title = 'Data Centers construction | SNS Construction';
  }, []);

  return (
    <div className="data-centers">
      <HeroStatic 
        title="Data Centers" 
        intro="Powered by experienced problem solvers, our solutions position you for the future."
        imageSrc={heroImg}
        breadcrumbCurrent="Data Centers"
      />
      
      <IconTeasers 
        heading="Bringing knowledge and foresight to every project." 
        teasers={dataCenterTeasers} 
      />

      <StatsBlock 
        heading="SNS Construction's expertise"
        stats={dataCenterStats}
      />

      <ContentBlock 
        heading="Project spotlight: Confidential Client"
        paragraph="In just nine months, our team delivered a multi-phased Tier III data center with a structural steel core and concrete tilt panels as the primary façade."
        imageSrc="https://i.ibb.co/j9P78xHx/Project-spotlight-Confidential-Client.jpg"
        theme="light"
      />

      <NotableProjects 
        title="Notable projects"
        description="We leverage our unparalleled experience and leadership to deliver the resources you need for your data infrastructure projects."
        linkText="Data Centers portfolio"
        linkUrl="/data-centers/portfolio"
        projects={dataCenterProjects}
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

export default DataCenters;
