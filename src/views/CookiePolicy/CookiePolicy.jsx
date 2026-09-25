"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

import './CookiePolicy.css';

const CookiePolicy = () => {
  useEffect(() => {
    document.title = 'Cookie Policy | SNS Construction';
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Cookie Policy', path: null },
  ];

  return (
    <div className="cookie-page">
      {/* Hero Section */}
      <section className="cookie-hero-wrapper">
        <div className="cookie-container">
          <div className="cookie-breadcrumbs">
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

          <div className="cookie-hero-header">
            <h1 className="cookie-hero-title">Cookie Policy</h1>
            <p className="cookie-hero-subtitle">
              Learn how SNS Construction uses cookies and tracking technologies to optimize your browsing experience and safeguard your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="cookie-content-section cookie-container">
        <div className="cookie-body">
          <div className="cookie-meta-info">
            <span>Last Updated: January 1, 2026</span>
          </div>

          <div className="cookie-block">
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer, smartphone, or tablet when you visit a website. They are widely used by website owners to make their websites work efficiently, enhance user experience, and provide reporting information.
            </p>
            <p>
              Cookies can be <strong>"session cookies"</strong> (which are deleted automatically when you close your browser) or <strong>"persistent cookies"</strong> (which remain stored on your device until they expire or are manually deleted).
            </p>
          </div>

          <div className="cookie-block">
            <h2>2. How SNS Construction Uses Cookies</h2>
            <p>
              SNS Construction uses cookies and similar digital technologies across our global web platforms to:
            </p>
            <ul>
              <li>Ensure essential website operations, secure navigation, and server performance.</li>
              <li>Remember your preferences, region selections, and accessibility settings.</li>
              <li>Analyze aggregate website usage to optimize page speeds, layout, and digital services.</li>
              <li>Improve security and protect against fraudulent activity or cyber threats.</li>
            </ul>
          </div>

          <div className="cookie-block">
            <h2>3. Categories of Cookies We Use</h2>
            
            <div className="cookie-category-card">
              <h3>Strictly Necessary Cookies</h3>
              <p>
                These cookies are indispensable for the website to function properly. They enable core functionalities such as page navigation, secure areas access, and network management. You cannot disable these cookies through our site.
              </p>
            </div>

            <div className="cookie-category-card">
              <h3>Performance & Analytics Cookies</h3>
              <p>
                These cookies collect aggregate, anonymous information about how visitors use our website—such as which pages are visited most frequently and if error messages occur. They help us continuously measure and improve website performance.
              </p>
            </div>

            <div className="cookie-category-card">
              <h3>Functional Cookies</h3>
              <p>
                Functional cookies enable the website to provide enhanced features and personalization, such as remembering your selected state/location or language preferences.
              </p>
            </div>

            <div className="cookie-category-card">
              <h3>Targeting & Marketing Cookies</h3>
              <p>
                These cookies may be set through our site by our digital partners to build a profile of your interests and show you relevant press releases, career opportunities, or corporate updates on other sites.
              </p>
            </div>
          </div>

          <div className="cookie-block">
            <h2>4. Managing and Disabling Cookies</h2>
            <p>
              You have the right to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. Please note that blocking or deleting cookies may impact your user experience and prevent certain parts of our website from functioning correctly.
            </p>
            <p>To manage cookie preferences directly in your browser:</p>
            <ul>
              <li><strong>Google Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies and other site data</li>
              <li><strong>Mozilla Firefox:</strong> Options &gt; Privacy & Security &gt; Cookies and Site Data</li>
              <li><strong>Apple Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
              <li><strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions</li>
            </ul>
          </div>

          <div className="cookie-block">
            <h2>5. Third-Party Cookies</h2>
            <p>
              In some instances, we may use third-party cookies provided by trusted service providers (e.g., Google Analytics, YouTube video embeds, career portal tools). Third-party cookies are governed by the respective privacy policies of those external services.
            </p>
          </div>

          <div className="cookie-block">
            <h2>6. Updates to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in legal, operational, or regulatory requirements. Any modifications will take effect immediately upon being posted on this page.
            </p>
          </div>

          <div className="cookie-block">
            <h2>7. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding our Cookie Policy or data protection practices, please reach out to us:
            </p>
            <div className="cookie-contact-card">
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

export default CookiePolicy;
