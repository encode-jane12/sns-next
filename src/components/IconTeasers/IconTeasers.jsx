"use client";
import React from 'react';
import './IconTeasers.css';

const IconTeasers = ({ heading, teasers }) => {
  return (
    <section className="icon-teasers">
      <div className="icon-teasers__container">
        {heading && (
          <div className="icon-teasers__header">
            <h2 className="icon-teasers__heading">{heading}</h2>
          </div>
        )}
        <div className="icon-teasers__grid">
          {teasers.map((teaser, index) => (
            <div className="icon-teasers__card" key={index}>
              <div className="icon-teasers__icon-wrapper">
                {teaser.icon}
              </div>
              <div className="icon-teasers__content">
                <h3 className="icon-teasers__card-heading">{teaser.title}</h3>
                <p className="icon-teasers__card-intro">{teaser.intro}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconTeasers;
