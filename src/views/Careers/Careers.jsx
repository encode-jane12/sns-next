"use client";
import CareersHero from '../../components/Careers/CareersHero/CareersHero';
import CareersGallery from '../../components/Careers/CareersGallery/CareersGallery';
import CareersVideo from '../../components/Careers/CareersVideo/CareersVideo';
import CareersTestimonials from '../../components/Careers/CareersTestimonials/CareersTestimonials';
import CareersOpening from '../../components/Careers/CareersOpening/CareersOpening';
import CareersLook from '../../components/Careers/CareersLook/CareersLook';
import CareersLifeAt from '../../components/Careers/CareersLifeAt/CareersLifeAt';

import './Careers.css';
import NewsMedia from '../../components/NewsMedia/NewsMedia';

const Careers = () => {
  return (
    <div className="careers">
      <CareersHero />
      <CareersGallery />
      <CareersVideo />
      <CareersTestimonials />
      <CareersOpening />
      <CareersLook />
      <CareersLifeAt />
      {/* <NewsMedia /> */}
    </div>
  );
};

export default Careers;
