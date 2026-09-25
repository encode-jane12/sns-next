"use client";
import React, { useEffect } from 'react';
import HeroText from '../../components/HeroText/HeroText';
import './CodeOfConduct.css';
import codeOfConductImg from '../../assets/images/code_of_conduct_v2.jpg';

const breadcrumbs = [
  { label: 'Home', url: '/' },
  { label: 'About Us', url: '/about-us' },
  { label: 'SNS Construction', url: '/about-us/sns-construction' },
  { label: 'Our Code of Conduct', url: '' }
];

const CodeOfConduct = () => {
  useEffect(() => {
    document.title = 'Our Code of Conduct | SNS Construction';
  }, []);

  return (
    <div className="code-of-conduct-page">
      <HeroText 
        title="Our Code of Conduct" 
        intro="We aspire to operate with a high level of ethics in line with our values. Setting the direction needed to achieve this are SNS Construction’s Code of Conduct and Supplier Code of Conduct."
        breadcrumbs={breadcrumbs}
      />
      
      <section className="coc-image-section">
        <div className="coc-image-wrapper">
          <img 
            src="https://i.ibb.co/4RWzWWpW/ococ.png" 
            alt="Stack of Code of Conduct booklets" 
            className="coc-image"
          />
        </div>
      </section>

      <section className="coc-content-section">
        <div className="coc-content-inner">
          <div className="coc-text-block">
            <h3>High level of ethics</h3>
            <p>SNS Construction aspires to operate with a high level of ethics in all our home markets. To achieve this, we are supported by our Code of Conduct and Supplier Code of Conduct, which explains the behaviors we expect from our supply chain and other partners.</p>
          </div>

          <div className="coc-text-block">
            <h3>Based on our values</h3>
            <p>Our Code of Conduct is based on SNS Construction’s values, and those values are more than mere words—they are how we strive to live every day. They set the expectation for conducting our business in responsible and sustainable ways, enabling us to be a trusted partner to our customers. SNS Construction’s Code of Conduct is key to bringing our values to life.</p>
            <p>Our Code of Conduct establishes how we should conduct ourselves in interactions with fellow employees, our customers, the communities in which we operate and other stakeholders. It provides SNS Construction employees with hands-on guidance on how to act in accordance with our values, specifically Act Ethically and Transparently. The Code provides many examples to help employees apply the concepts in daily life.</p>
            <p>The most recent versions of our Code of Conduct and Supplier Code of Conduct were refreshed on November 18, 2024.</p>
            <p>SNS Construction's Code of Conduct is also available as a web application.</p>
          </div>

          <div className="coc-text-block">
            <h3>Open culture</h3>
            <p>Our Code of Conduct provides employees with direction, but they will still face dilemmas involving ethics. We promote a transparent workplace culture in which ethics is openly and regularly discussed, including with “value moments” at the start of meetings.</p>
            <p>Through this, we want employees to be comfortable raising ethical questions and dilemmas with their supervisors and others. All employees need to feel empowered to report instances of non-compliance with our Code.</p>
          </div>

          <div className="coc-text-block">
            <h3>Reporting concerns</h3>
            <p>Each SNS Construction business unit has an Ethics Committee that investigates all reports. One way to make reports is through our Global Ethics Hotline or Code of Conduct Hotline. This is accessible to both employees and outside parties, including customers, suppliers and subcontractors. Read more about <a href="#" className="coc-link">How to report a concern</a>.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CodeOfConduct;
