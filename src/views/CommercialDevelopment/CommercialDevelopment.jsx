"use client";
import ComDevHero from '../../components/CommercialDevelopment/ComDevHero/ComDevHero';
import ComDevIntro from '../../components/CommercialDevelopment/ComDevIntro/ComDevIntro';
import ComDevNuggets from '../../components/CommercialDevelopment/ComDevNuggets/ComDevNuggets';
import ComDevTeasers from '../../components/CommercialDevelopment/ComDevTeasers/ComDevTeasers';
import ComDevWorking from '../../components/CommercialDevelopment/ComDevWorking/ComDevWorking';
import ComDevLiving from '../../components/CommercialDevelopment/ComDevLiving/ComDevLiving';
import ComDevJumbotron from '../../components/CommercialDevelopment/ComDevJumbotron/ComDevJumbotron';

import './CommercialDevelopment.css';

const CommercialDevelopment = () => {
  return (
    <div className="commercial-development">
      <ComDevHero />
      <ComDevIntro />
      <ComDevNuggets />
      <ComDevTeasers />
      <ComDevWorking />
      <ComDevLiving />
      <ComDevJumbotron />
    </div>
  );
};

export default CommercialDevelopment;
