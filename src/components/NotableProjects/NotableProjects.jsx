"use client";
import React from 'react';
import './NotableProjects.css';
import dcWaterImg from '../../assets/images/project_dc_water.jpg';
import forgeImg from '../../assets/images/project_forge.jpg';
import coldSpringImg from '../../assets/images/project_cold_spring.jpg';
import confidentialImg from '../../assets/images/project_confidential.jpg';
import johnsHopkinsImg from '../../assets/images/project_johns_hopkins.jpg';
import medpaceImg from '../../assets/images/project_medpace.jpg';

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#FF2828" />
    <path d="M10 8l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProjectCard = ({ className, image, title, location, link }) => (
  <div className={`project-card ${className || ''}`}>
    <div className="project-card__image-wrapper">
      <img src={(image)?.src || (image)} alt={title} className="project-card__image" />
    </div>
    <div className="project-card__info">
      <div className="project-card__text">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__location">{location}</p>
      </div>
      <div className="project-card__arrow">
        ✅
      </div>
    </div>
  </div>
);

const defaultProjects = [
  { className: "project-card--dc-water", image: "https://i.ibb.co/mrTnpqP5/D-C-Water-New-Headquarters.jpg", title: "D.C. Water, New Headquarters", location: "Washington D.C." },
  { className: "project-card--forge", image: "https://i.ibb.co/Kc35qGB2/Forge-Biologics-Headquarters.jpg", title: "Forge Biologics, Headquarters", location: "Grove City, Ohio" },
  { className: "project-card--cold-spring", image: "https://i.ibb.co/Kz9SYZXK/Cold-Spring-Harbor-Laboratory-Master-Plan.jpg", title: "Cold Spring Harbor Laboratory, Master Plan", location: "Cold Spring Harbor, New York" },
  { className: "project-card--confidential", image: "https://i.ibb.co/TqMFFwYp/Confidential-Client-Campus-Renovation-and-Addition.jpg", title: "Confidential Client, Campus Renovation and Addition", location: "Horsham, Pennsylvania" },
  { className: "project-card--johns-hopkins", image: "https://i.ibb.co/wVZ17gz/Johns-Hopkins-All-Children-s-Research-and-Education-Building.jpg", title: "Johns Hopkins All Children's, Research and Education Building", location: "St. Petersburg, Florida" },
  { className: "project-card--medpace", image: "https://i.ibb.co/ksRZYjGw/Medpace-Multiple-Projects.jpg", title: "Medpace, Multiple Projects", location: "Cincinnati, Ohio" }
];

const NotableProjects = ({
  title = "Notable projects",
  description = "Explore office spaces designed to support well-being and productivity, while meeting the highest sustainability standards.",
  linkText = "Commercial Office portfolio",
  linkUrl = "#",
  projects = defaultProjects,
  theme = "light"
}) => {
  return (
    <section className={`notable-projects notable-projects--${theme}`}>
      <div className="notable-projects__container">
        
        {/* Header Section */}
        <div className="notable-projects__header">
          <h2 className="notable-projects__heading">{title}</h2>
          <div className="notable-projects__header-right">
            <p className="notable-projects__description">
              {description}
            </p>
            {/* <a href={linkUrl} className="notable-projects__link">
              {linkText}
              <span className="notable-projects__link-icon"><ArrowIcon /></span>
            </a> */}
          </div>
        </div>

        {/* Grid Section */}
        <div className={`notable-projects__grid notable-projects__grid--${projects.length}`}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotableProjects;
