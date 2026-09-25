"use client";
import React, { useEffect } from 'react';
import HeroText from '../../components/HeroText/HeroText';
import Link from 'next/link';

import './OurPurposeAndValues.css';

const OurPurposeAndValues = () => {
  useEffect(() => {
    document.title = 'Our Purpose and Values | SNS Construction';
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: null },
    { label: 'SNS Construction', path: '/about-us/sns-construction' },
    { label: 'Our Purpose and Values', path: null },
  ];

  return (
    <div className="purpose-values-page">
      <HeroText 
        breadcrumbs={breadcrumbs}
        heading="Our Purpose and Values"
        intro="What we do and how we do it contributes to a sustainable future for our people, customers and communities."
      />

      <section className="purpose-values-content">
        <div className="purpose-values-container">
          <div className="purpose-values-text-block">
            <h3>Our values</h3>
            <div className="purpose-values-text-content">
              <p>Since day one, our philosophy has been that what is good for people, society and our environment is good for business. As a learning, values-based organization, our future direction is firmly linked to our core beliefs. Our values not only guide us, they are integral to our success, to living up to our purpose of building for a better society and to delivering shareholder return. We also realize that continuous learning is a key part of maintaining our values and helping us to grow both as a team and as individuals.</p>
              
              <p><strong>Care for life: protecting people and the planet</strong><br />
              Caring for the health and safety of people and our environment lies at the heart of what we do. In situations that are physically or psychologically unsafe, we refuse to be bystanders. We are changemakers and action takers. This applies to the environment and climate change too. We advocate for sustainable solutions and operate in this spirit, holding each other accountable for the legacy that we leave to future generations.</p>
              
              <p><strong>Act ethically and transparently: being a role model</strong><br />
              Each of us honors our individual responsibility to lead by example and to act with the highest degree of integrity and transparency. We encourage different perspectives, creating a space in which everyone can speak freely and live by our Code of Conduct. Shortcuts are unacceptable.</p>
              
              <p><strong>Be better together: teaming up</strong><br />
              Everything we do, we do better together. We listen and learn with curiosity to move forward as a team, generously sharing knowledge along the way to successfully replicate best practices. We champion an inclusive culture of openness, fairness, trust and respect, where all people feel a sense of belonging regardless of who they are or where they come from. We innovate and deliver the best solutions by making the most of our own diversity, together with that of our customers, partners and the communities in which we operate.</p>
              
              <p><strong>Commit to customers: having a customer-first mindset</strong><br />
              Our customers’ success is our success. We always listen closely to understand their needs and those of their customers, so that we can provide the tools they both require to reach their goals. Together, we look ahead to create smarter and more sustainable solutions that bring their visions to life.</p>
              
              <p>Take a look at some of our <a href="#">latest projects to see our values in action</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurPurposeAndValues;
