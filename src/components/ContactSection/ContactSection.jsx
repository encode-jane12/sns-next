"use client";
import React from 'react';
import './ContactSection.css';

const ContactCard = ({ name, role, department, imageSrc }) => (
  <div className="contact-card">
    <div className="contact-card__image-wrapper">
      <img src={(imageSrc)?.src || (imageSrc)} alt={name} className="contact-card__image" />
    </div>
    <div className="contact-card__info">
      <p className="contact-card__department">{department}</p>
      <div className="contact-card__details">
        <h3 className="contact-card__name">{name}</h3>
        <p className="contact-card__role">{role}</p>
      </div>
      <button className="contact-card__btn">
        Get in touch
      </button>
    </div>
  </div>
);

const ContactSection = ({ contacts }) => {
  return (
    <section className="contact-section">
      <div className="contact-section__container">
        <div className="contact-section__header-col">
          <h2 className="contact-section__heading">Get in touch</h2>
        </div>
        <div className="contact-section__cards-col">
          <div className="contact-section__grid">
            {contacts.map((contact, index) => (
              <ContactCard key={index} {...contact} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
