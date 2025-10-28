import React from "react";
import HeroSection from "../../components/hero";
import WorkSection from "../../components/work-section";
import Services from "../../components/services";
import WhyChooseUs from "../../components/choose-us";
import Stats from "../../components/stats";
import Contact from "../../components/contact";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WorkSection />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Contact />
    </div>
  );
};

export default Home;
