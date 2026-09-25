"use client";
import React, { useEffect } from 'react';
import HeroText from '../../components/HeroText/HeroText';
import quickFactsImg from '../../assets/images/williamsburg_new_york.jpg';
import './QuickFacts.css';

const QuickFacts = () => {
  useEffect(() => {
    document.title = 'Quick Facts and Figures | SNS Construction';
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: null },
    { label: 'SNS Construction', path: '/about-us/sns-construction' },
    { label: 'Quick Facts and Figures', path: null },
  ];

  return (
    <div className="quick-facts-page">
      <HeroText 
        breadcrumbs={breadcrumbs}
        heading="Quick Facts and Figures"
        intro="SNS Construction is one of the largest, most financially sound construction and project development companies in the country, with expertise in construction, civil infrastructure and commercial development in select U.S. markets."
      />

      <section className="quick-facts-table-section">
        <div className="quick-facts-container">
          <div className="quick-facts-text-block">
            <h3>Quick Facts</h3>
            <div className="quick-facts-table-wrapper">
              <table className="quick-facts-table">
                <tbody>
                  <tr>
                    <th></th>
                    <th>SNS Construction</th>
                  </tr>
                  <tr>
                    <td>No. employees</td>
                    <td>25,000+</td>
                  </tr>
                  <tr>
                    <td>2025 revenue</td>
                    <td>$18.3 Billion USD</td>
                  </tr>
                  <tr>
                    <td>President and CEO</td>
                    <td>Robert V. Sterling</td>
                  </tr>
                  <tr>
                    <td>Established</td>
                    <td>1984</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-facts-image-section">
        <div className="quick-facts-image-container">
          <img src={(quickFactsImg)?.src || (quickFactsImg)} alt="Brooklyn Bridge with Manhattan Skyline in Clear Daylight" />
        </div>
      </section>

      <section className="quick-facts-content-section">
        <div className="quick-facts-container">
          <div className="quick-facts-text-block">
            <h3>SNS Construction</h3>
            <div className="quick-facts-text-content">
              <p>SNS Construction combines global expertise, local insight and industry-leading innovation to deliver complex, sustainable projects that strengthen communities and improve how people live, work and connect.</p>
              <p>Driven by safety, execution and long-term impact, we deliver forward-thinking solutions that help build a more resilient future.</p>
              <ul>
                <li>Incorporated in North Carolina since 1984</li>
                <li>World-class construction and development operations</li>
                <li>Offices in 18 cities across the country</li>
                <li>6,500+ teammates in the U.S</li>
                <li>In 2025, the U.S. development and construction streams generated $18.3 billion in revenue</li>
                <li>More than 450 LEED® Accredited Professionals and 200 projects completed that have achieved LEED® certification</li>
                <li>ENR rankings by revenue (2024): Ranked 10th in the top 400, 8th largest transportation contractor and 7th largest heavy contractor</li>
                <li>Parent company SNS Construction AB, headquartered in Stockholm and listed on the Stockholm Stock Exchange</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuickFacts;
