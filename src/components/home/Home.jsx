import React from "react";
import AboutCard from "../about/AboutCard";
import Hblog from "./Hblog";
import HAbout from "./HAbout";
  import Testimonal from "./testimonal/Testimonal";
// import HeroHero from "../../../../../three/src/hello/hero/Hero"
import HeroHello from "./hero/Hero";
import Contact from "../contact/Contact";
import ShowBlogs from "../../admin/AddBlogs/ShowBlogs";
import AboutNew from "../about/NewAbout";

const Home = () => {
  return (
    <>
      <HeroHello />
      {/* <HeroHero /> */}
      <AboutCard />
      <ShowBlogs/>

      <Hblog />
      <HAbout />
      <AboutNew/>
      <Testimonal />
      <Contact/>
      {/* <Hprice /> */}
    </>
  );
};

export default Home;
