"use client";
import React from 'react';
import './StatsBlock.css';

const StatsBlock = ({ heading, stats }) => {
  return (
    <section className="stats-block">
      <div className="stats-block__container">
        {heading && (
          <div className="stats-block__heading-wrapper">
            <h2 className="stats-block__heading">{heading}</h2>
          </div>
        )}
        <div className="stats-block__items-container">
          {stats.map((stat, index) => (
            <div key={index} className="stats-block__item">
              <h3 className="stats-block__item-value">{stat.value}</h3>
              <p className="stats-block__item-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBlock;
