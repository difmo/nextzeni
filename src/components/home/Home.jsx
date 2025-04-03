import React from "react";
import AboutCard from "../about/AboutCard";
import Hblog from "./Hblog";
import HAbout from "./HAbout";
import Hprice from "./Hprice";
import Testimonal from "./testimonal/Testimonal";
// import HeroHero from "../../../../../three/src/hello/hero/Hero"
import HeroHello from "./hero/Hero";
import Contact from "../contact/Contact";
import ShowBlogs from "../../admin/AddBlogs/ShowBlogs";

const Home = () => {
  return (
    <>
      <HeroHello />
      {/* <HeroHero /> */}
      <AboutCard />
      <ShowBlogs/>

      <Hblog />
      <HAbout />
      <Testimonal />
      <Contact/>
      {/* <Hprice /> */}
    </>
  );
};

export default Home;
