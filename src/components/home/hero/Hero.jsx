import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const HeroHello = () => {
  return (
    <>
      <section className="hero bg-black text-white py-10">
        <div className="container mx-auto px-4">
          <div className="row flex flex-col items-center text-center md:text-left md:flex-row md:items-start">
            <div className="w-full ">
              <Heading
                subtitle="WELCOME TO NEXTZENI"
                title="Empowering Your Future, One Skill at a Time"
              />
              <p className="text-gray-300 w-full">
                Learn Communication, English Speaking, and Soft Skills with
                NextZeni - Your Partner in Personal and Professional Growth
              </p>
              <div className="button flex flex-col sm:flex-row gap-4">
                <button className="primary-btn bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                  Join a Free Workshop{" "}
                  <i className="fa fa-long-arrow-alt-right"></i>
                </button>
                <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition">
                  Explore Courses <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default HeroHello;
