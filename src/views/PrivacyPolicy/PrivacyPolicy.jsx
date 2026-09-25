"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | SNS Construction';
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Privacy Policy', path: null },
  ];

  return (
    <div className="policy-page">
      {/* Hero Section */}
      <section className="policy-hero-wrapper">
        <div className="policy-container">
          <div className="policy-breadcrumbs">
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

          <div className="policy-hero-header">
            <h1 className="policy-hero-title">Privacy Policy</h1>
            <p className="policy-hero-subtitle">
              At SNS Construction, we value your trust and are committed to protecting your privacy and personal data across our global operations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="policy-content-section policy-container">
        <div className="policy-body">
          <div className="policy-meta-info">
            <span>Last Updated: January 1, 2026</span>
          </div>

          <div className="policy-block">
            <h2>1. Introduction & Overview</h2>
            <p>
              This Privacy Policy explains how <strong>SNS Construction</strong> ("Company", "we", "us", or "our") collects, uses, discloses, and safeguards personal information when you visit our website (www.snsconstruction.com), use our digital services, or communicate with us.
            </p>
            <p>
              We operate worldwide and adhere to applicable data protection laws, including the European Union General Data Protection Regulation (GDPR), the UK GDPR, the California Consumer Privacy Act (CCPA/CPRA), and applicable international privacy statutes.
            </p>
          </div>

          <div className="policy-block">
            <h2>2. Information We Collect</h2>
            <p>We may collect information about you in various ways when you interact with our website:</p>
            <ul>
              <li><strong>Personal Identifiers:</strong> Your name, email address, telephone number, mailing address, company name, and job title when provided via inquiry forms, contact forms, or newsletter subscriptions.</li>
              <li><strong>Career & Recruitment Data:</strong> Resumes, employment history, educational background, professional references, and equal opportunity data provided during job applications via our Careers portal.</li>
              <li><strong>Technical & Usage Data:</strong> IP address, browser type, operating system, device identifiers, referring URLs, pages visited, clickstream data, and time spent on our site collected automatically via server logs and cookies.</li>
              <li><strong>Subcontractor & Vendor Data:</strong> Prequalification details, business registration numbers, safety records, insurance information, and financial banking details provided during partner onboarding.</li>
            </ul>
          </div>

          <div className="policy-block">
            <h2>3. How We Use Your Information</h2>
            <p>We use the personal data we collect for legitimate business purposes, including:</p>
            <ul>
              <li>Fulfilling your requests for information, services, project inquiries, or corporate disclosures.</li>
              <li>Processing and evaluating job applications submitted through our career portal.</li>
              <li>Managing subcontractor, supplier, and client relationships, including prequalification and contract administration.</li>
              <li>Improving website performance, user experience, site navigation, and digital security.</li>
              <li>Complying with legal, regulatory, health, safety, and auditing obligations.</li>
              <li>Sending corporate announcements, press releases, or industry insights (where you have opted in).</li>
            </ul>
          </div>

          <div className="policy-block">
            <h2>4. Information Sharing & Third Parties</h2>
            <p>
              SNS Construction does <strong>not</strong> sell, rent, or trade your personal information to third parties for commercial marketing purposes. We may share your data only in the following circumstances:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> Trusted third-party vendors who perform operational services on our behalf (e.g., website hosting, IT security, cloud storage, recruitment platforms).</li>
              <li><strong>Affiliates & Business Units:</strong> Companies within the SNS Construction group globally to support unified operational and project delivery needs.</li>
              <li><strong>Legal Requirements:</strong> When required by court order, subpoena, law enforcement request, or applicable legal process.</li>
              <li><strong>Corporate Restructuring:</strong> In connection with any merger, acquisition, joint venture, or sale of company assets.</li>
            </ul>
          </div>

          <div className="policy-block">
            <h2>5. International Data Transfers</h2>
            <p>
              As a global enterprise with dual headquarters in Raleigh, NC (USA) and Bangalore (India), as well as offices worldwide, your information may be transferred to and processed in countries other than your home jurisdiction. We implement appropriate safeguards—including Standard Contractual Clauses (SCCs) approved by the European Commission—to ensure your data receives equivalent protection wherever it is handled.
            </p>
          </div>

          <div className="policy-block">
            <h2>6. Data Security & Retention</h2>
            <p>
              We maintain robust technical, physical, and administrative security measures designed to protect your personal data against unauthorized access, loss, alteration, or disclosure. These measures include TLS encryption, firewall protections, role-based access controls, and regular vulnerability assessments.
            </p>
            <p>
              We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, resolve disputes, maintain audit trails, and comply with legal retention mandates.
            </p>
          </div>

          <div className="policy-block">
            <h2>7. Your Privacy Rights</h2>
            <p>Depending on your jurisdiction, you may have the following privacy rights regarding your personal information:</p>
            <ul>
              <li><strong>Right to Access:</strong> Request copies of the personal data we hold about you.</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete personal information.</li>
              <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> Request deletion of your personal data under certain conditions.</li>
              <li><strong>Right to Restrict or Object:</strong> Object to or request restriction of data processing or direct marketing.</li>
              <li><strong>Right to Data Portability:</strong> Request transfer of your data to another organization.</li>
              <li><strong>Non-Discrimination:</strong> We will not discriminate against you for exercising any of your privacy rights.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at <a href="mailto:privacy@snsconstruction.com">privacy@snsconstruction.com</a>.
            </p>
          </div>

          <div className="policy-block">
            <h2>8. Cookies & Tracking Technologies</h2>
            <p>
              Our website uses essential cookies to ensure basic functionality and analytical cookies to analyze site traffic patterns and improve performance. You can control or disable cookie preferences through your web browser settings.
            </p>
          </div>

          <div className="policy-block">
            <h2>9. Updates to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our legal obligations, technology, or business operations. Any updates will be posted on this page with a revised "Last Updated" date.
            </p>
          </div>

          <div className="policy-block">
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Data Protection Officer:
            </p>
            <div className="policy-contact-card">
              <h4>SNS Construction Data Privacy Office</h4>
              <p>Global Headquarters: 350 Fifth Avenue, 37th Floor, New York, NY 10118</p>
              <p>Corporate Campus: Raleigh, NC & Dual Operations Hub, Bangalore, India</p>
              <p>Email: <a href="mailto:privacy@snsconstruction.com">privacy@snsconstruction.com</a></p>
              <p>Phone: +1 917 438 4500</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
