"use client";
import React from 'react';
import './TextGrid.css';

const TextGrid = ({ heading, items }) => {
  return (
    <section className="text-grid">
      <div className="text-grid__container">
        {heading && (
          <div className="text-grid__header">
            <h2 className="text-grid__heading">{heading}</h2>
          </div>
        )}
        <div className="text-grid__items">
          {items.map((item, index) => (
            <div className="text-grid__item" key={index}>
              <h3 className="text-grid__item-heading">{item.title}</h3>
              <p className="text-grid__item-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextGrid;
