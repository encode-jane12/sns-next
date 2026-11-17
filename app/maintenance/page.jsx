'use client';

import React from 'react';
import logoImg from '@/src/assets/images/sns_logo.png';

export default function MaintenancePage() {
  const handleReload = () => {
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  return (
    <div className="maintenance-simple-box">
      {/* SNS Construction Logo */}
      <div className="maintenance-simple-logo">
        <img
          src={logoImg?.src || logoImg}
          alt="SNS Construction"
        />
      </div>

      {/* Classic Hazard Accent Bar */}
      <div className="maintenance-hazard-stripe" />

      {/* Big Bold Headline */}
      <h1 className="maintenance-big-heading">
        WEBSITE IS UNDER MAINTENANCE
      </h1>

      {/* Simple, Clear Description */}
      <p className="maintenance-simple-desc">
        Our website is currently undergoing scheduled maintenance and system upgrades.
        <br />
        We apologize for any inconvenience. Please check back soon.
      </p>

      {/* Simple Divider */}
      <hr className="maintenance-simple-hr" />

      {/* Urgent Contact Information */}
      <div className="maintenance-simple-contact">
        <strong>For urgent inquiries or assistance:</strong>
        <div className="maintenance-simple-links">
          <a href="mailto:info@snsconstructioninc.com">info@snsconstructioninc.com</a>
        </div>
      </div>

      {/* Reload Button */}
      <button onClick={handleReload} className="maintenance-simple-btn">
        Reload Page
      </button>

      {/* Simple Footer */}
      <footer className="maintenance-simple-footer">
        &copy; {new Date().getFullYear()} SNS Construction Inc. All Rights Reserved.
      </footer>
    </div>
  );
}
