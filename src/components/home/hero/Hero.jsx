import React from "react";
import Heading from "../../common/heading/Heading";

const HeroHello = () => {
  return (
    <>
      <section id="home" className="bg-white text-white md:h-screen h-auto flex items-center pt-11">
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-6">
          {/* Text Content */}
          <div className=" relative w-full md:w-1/2 text-center md:text-left px-4 pt-6">      
            <Heading
              subtitle="WELCOME TO NEXTZENI"
              title="Empowering Your Future, One Skill at a Time"
            />
            <p className="text-gray-800 w-full px-12 py-4 text-sm  text-left sm:text-base md:text-lg">
              Learn Communication, English Speaking, and Soft Skills with
              NextZeni - Your Partner in Personal and Professional Growth.
            </p>
            <div className="flex px-14        gap-6  flex-wrap ">
              <div className="">
              <button className="bg-orange-600 text-white py-4 px-5 rounded-lg hover:bg-orange-700 transition text-sm sm:text-base">
                Join a Free Workshop{" "}
                <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              </div>
             <div>
             <button className="bg-black text-white py-4 px-10  rounded-lg hover:bg-gray-900 transition text-sm sm:text-base">
                Explore Courses <i className="fa fa-long-arrow-alt-right"></i>
              </button>
             </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center order-first md:order-none">
            <img
              src="/images/landing.png"
              alt="Landing"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroHello;
