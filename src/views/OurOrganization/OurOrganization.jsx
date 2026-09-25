"use client";
import React, { useEffect } from 'react';
import HeroText from '../../components/HeroText/HeroText';
import organizationImg from '../../assets/images/organization.png';
import './OurOrganization.css';

const OurOrganization = () => {
  useEffect(() => {
    document.title = 'Our Organization | SNS Construction';
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: null },
    { label: 'SNS Construction', path: '/about-us/sns-construction' },
    { label: 'Our Organization', path: null },
  ];

  return (
    <div className="our-organization-page">
      <HeroText 
        breadcrumbs={breadcrumbs}
        title="Our Organization"
        heading="Our Organization"
        intro="SNS Construction has worked globally for more than 42 years. Headquartered in Raleigh, North Carolina, our three business units deliver civil infrastructure, building and development projects across the country."
      />

      <section className="org-image-section">
        <div className="org-image-container">
          <img src={(organizationImg)?.src || (organizationImg)} alt="Construction workers walking at urban site with excavators" />
        </div>
      </section>

      <section className="org-content-section">
        <div className="org-content-container">
          <div className="org-text-block">
            <h3>SNS Construction Organization</h3>
            <div className="org-text-content">
              <p>SNS Construction’s USA operations are also governed through the following bodies:</p>
              <ul>
                <li><strong>USA Board</strong>—members of SNS Construction’s executive management team, SNS Construction AB and non-executive directors.</li>
                <li><strong>Executive Management Team</strong>—responsible for setting strategic direction led by <a href="#">Robert V. Sterling, SNS Construction CEO</a>.</li>
                <li><strong>Senior Management Team</strong>—SNS Construction executives who manage the day-to-day operation of the business.</li>
              </ul>
              <p>SNS Construction has three business units serving distinct sectors, each led by a Business Unit President and the respective Senior Leadership Teams.</p>
              <p>Centralized support functions, including IT, Human Resources, Communications and Environmental Health & Safety, are provided through Shared Services globally</p>
            </div>
          </div>

          <div className="org-text-block">
            <h3>SNS Construction Building</h3>
            <div className="org-text-content">
              <p>From cutting-edge mission critical and life sciences facilities to transformative healthcare and education projects, <a href="#">SNS Construction Building</a> helps customers realize their most ambitious visions. No matter a project’s size or complexity, Building brings industry-leading expertise, innovation and a relentless focus on safety to deliver operational excellence and certainty.</p>
              <p>By combining local teams with global strength and foresight, our projects are built to better society.</p>
            </div>
          </div>

          <div className="org-text-block">
            <h3>SNS Construction Civil</h3>
            <div className="org-text-content">
              <p><a href="#">SNS Construction Civil</a> delivers complex infrastructure that helps communities move, connect and thrive, with a focus on quality, innovation and sustainability to support long-term operational and economic success. Civil works in markets spanning both coasts of the U.S., delivering critical transportation, energy and water infrastructure, including highways, bridges, transit systems, tunnels and power projects.</p>
              <p>By leveraging local expertise with global strength and foresight, we build resilient infrastructure for the future.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurOrganization;
