import React from "react";
import AboutCard from "../about/AboutCard";
import Hblog from "./Hblog";
import HAbout from "./HAbout";
import Hprice from "./Hprice";
import Testimonal from "./testimonal/Testimonal";
// import HeroHero from "../../../../../three/src/hello/hero/Hero"
import HeroHello from "./hero/Hero";
import Contact from "../contact/Contact";

const Home = () => {
  return (
    <>
      <HeroHello />
      {/* <HeroHero /> */}
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <Contact/>
      {/* <Hprice /> */}
    </>
  );
};

export default Home;
