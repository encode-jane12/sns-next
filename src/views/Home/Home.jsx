"use client";
import Hero from '../../components/Hero/Hero';
import CoreOfferings from '../../components/CoreOfferings/CoreOfferings';
import TextOnImage from '../../components/TextOnImage/TextOnImage';
import Projects from '../../components/Projects/Projects';
import Stats from '../../components/Stats/Stats';
import NewsMedia from '../../components/NewsMedia/NewsMedia';
import CTA from '../../components/CTA/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <CoreOfferings />
      <TextOnImage />
      <Projects />
      <Stats />
      <NewsMedia />
      <CTA />
    </>
  );
};

export default Home;
