import React from "react";
import AboutCard from "../../../components/about/AboutCard";
import Hblog from "./Hblog";
import HAbout from "./HAbout";
  import Testimonal from "./testimonal/Testimonal";
// import HeroHero from "../../../../../three/src/hello/hero/Hero"
import HeroHello from "./hero/Hero";
import Contact from "../../../components/contact/Contact";
import ShowBlogs from "../../../admin/AddBlogs/ShowBlogs";
import AboutNew from "../../../components/about/NewAbout";

const Home = () => {
  return (
    <>
      <HeroHello />
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
