"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

import './TermsOfUse.css';

const TermsOfUse = () => {
  useEffect(() => {
    document.title = 'Terms of Use | SNS Construction';
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Terms of Use', path: null },
  ];

  return (
    <div className="terms-page">
      {/* Hero Section */}
      <section className="terms-hero-wrapper">
        <div className="terms-container">
          <div className="terms-breadcrumbs">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {crumb.path ? (
                  <Link href={crumb.path} className="crumb-link">{crumb.label}</Link>
                ) : (
                  <span className="crumb-current">{crumb.label}</span>
                )}
                {idx < breadcrumbs.length - 1 && <span className="crumb-separator">→</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="terms-hero-header">
            <h1 className="terms-hero-title">Terms of Use</h1>
            <p className="terms-hero-subtitle">
              Please read these Terms of Use carefully before using the SNS Construction website or associated digital services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="terms-content-section terms-container">
        <div className="terms-body">
          <div className="terms-meta-info">
            <span>Last Updated: January 1, 2026</span>
          </div>

          <div className="terms-block">
            <h2>1. General Provisions</h2>
            <p>
              This website is owned and operated by <strong>SNS Construction</strong> ("Company", "we", "us", or "our"). By accessing or using this website (www.snsconstruction.com) or any associated digital platforms, tools, and applications provided by SNS Construction, you ("User" or "you") agree to be bound by these Terms of Use and our Privacy Policy.
            </p>
            <p>
              If you do not agree with any part of these Terms of Use, you must immediately discontinue your use of this website.
            </p>
          </div>

          <div className="terms-block">
            <h2>2. Intellectual Property Rights</h2>
            <p>
              All content on this website—including text, graphics, logos, images, video clips, audio files, software, project data, architectural renderings, and trade names—is the property of SNS Construction or its licensors and is protected by United States and international copyright, trademark, patent, and trade secret laws.
            </p>
            <p>
              "SNS Construction", the SNS logo, and related trademarks and service marks are registered intellectual property of SNS Construction. You are granted a limited, non-exclusive, non-transferable license to access and view the materials on this site solely for personal, informational, and non-commercial purposes. You may not copy, reproduce, distribute, modify, display, perform, publish, license, create derivative works from, or sell any content without prior written permission from SNS Construction.
            </p>
          </div>

          <div className="terms-block">
            <h2>3. Acceptable Use</h2>
            <p>You agree to use this website only for lawful purposes. You are expressly prohibited from:</p>
            <ul>
              <li>Using the website in any manner that violates local, state, national, or international laws or regulations.</li>
              <li>Attempting to gain unauthorized access to any system, server, database, or network connected to SNS Construction.</li>
              <li>Using automated systems, scrapers, bots, or spiders to collect data or content from this site without express written consent.</li>
              <li>Transmitting viruses, malware, trojan horses, or harmful computer code intended to disrupt, degrade, or compromise website operations.</li>
              <li>Impersonating SNS Construction, an SNS employee, or any other individual or entity.</li>
            </ul>
          </div>

          <div className="terms-block">
            <h2>4. Information Accuracy & Disclaimer</h2>
            <p>
              While SNS Construction strives to provide accurate and up-to-date information on this website, all materials, project descriptions, press releases, financial data, and reports are provided on an <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong> basis without warranties of any kind, either express or implied.
            </p>
            <p>
              SNS Construction disclaims all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, non-infringement, and freedom from computer viruses or errors. We do not warrant that the functions contained on this site will be uninterrupted or error-free.
            </p>
          </div>

          <div className="terms-block">
            <h2>5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, SNS Construction, its affiliates, directors, officers, employees, agents, or contractors shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with:
            </p>
            <ul>
              <li>Your access to, use of, or inability to access or use this website.</li>
              <li>Any errors, omissions, or inaccuracies in the content provided.</li>
              <li>Any unauthorized access to or alteration of your transmissions or data.</li>
              <li>Any third-party content or conduct encountered on or through the website.</li>
            </ul>
          </div>

          <div className="terms-block">
            <h2>6. Links to External Websites</h2>
            <p>
              This website may contain links to third-party websites or services that are not owned or controlled by SNS Construction. These links are provided solely as a convenience to users. SNS Construction has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites. Accessing external links is done at your own risk.
            </p>
          </div>

          <div className="terms-block">
            <h2>7. Governing Law & Jurisdiction</h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of the State of North Carolina, United States, without regard to its conflict of law principles. Any legal action or proceeding arising under or relating to these Terms shall be brought exclusively in the state or federal courts located in Wake County, Raleigh, North Carolina.
            </p>
          </div>

          <div className="terms-block">
            <h2>8. Modifications to Terms</h2>
            <p>
              SNS Construction reserves the right to modify, amend, or update these Terms of Use at any time without prior notice. Your continued use of the website following the posting of updated Terms constitutes your acceptance of those changes. We encourage you to review this page periodically.
            </p>
          </div>

          <div className="terms-block">
            <h2>9. Contact Information</h2>
            <p>
              If you have any questions, concerns, or inquiries regarding these Terms of Use, please contact our Legal & Compliance Department:
            </p>
            <div className="terms-contact-card">
              <h4>SNS Construction Legal & Compliance Department</h4>
              <p>Global Headquarters: 350 Fifth Avenue, 37th Floor, New York, NY 10118</p>
              <p>Corporate Campus: Raleigh, NC & Dual Operations Hub, Bangalore, India</p>
              <p>Email: <a href="mailto:legal@snsconstruction.com">legal@snsconstruction.com</a></p>
              <p>Phone: +1 917 438 4500</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;
