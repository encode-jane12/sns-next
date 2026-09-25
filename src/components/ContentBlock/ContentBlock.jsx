"use client";
import React from 'react';
import Link from 'next/link';

import './ContentBlock.css';

const ContentBlock = ({ 
  heading, 
  paragraph, 
  buttonText,
  buttonLink,
  imageSrc, 
  imageAlt, 
  theme = 'light' // 'light' or 'blue'
}) => {
  return (
    <section className={`content-block content-block--${theme}`}>
      <div className="content-block__container">
        <div className="content-block__left">
          {heading && <h2 className="content-block__heading">{heading}</h2>}
          {paragraph && !imageSrc && (
            // If there's no image, paragraph can go on the right side on desktop depending on layout, 
            // but for simplicity, we'll map the exact SNS Construction layout.
            // Wait, if no image, the design places heading on left, paragraph on right.
            null
          )}
          {paragraph && imageSrc && (
            <p className="content-block__paragraph">{paragraph}</p>
          )}
          {buttonText && buttonLink && (
             <div className="content-block__button-wrapper">
               <Link href={buttonLink} className="content-block__button">
                 {buttonText}
                 <span className="content-block__button-icon">
                   <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                     <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                   </svg>
                 </span>
               </Link>
             </div>
          )}
        </div>
        
        <div className="content-block__right">
          {imageSrc && (
            <div className="content-block__image-wrapper">
              <img src={(imageSrc)?.src || (imageSrc)} alt={imageAlt || heading} className="content-block__image" />
            </div>
          )}
          {paragraph && !imageSrc && (
            <p className="content-block__paragraph content-block__paragraph--large">{paragraph}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentBlock;
