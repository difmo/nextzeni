import React from "react";
import Heading from "../../common/heading/Heading";

const HeroHello = () => {
  return (
    <>
      <section className="bg-yellow-400 text-white pt-10 md:h-screen flex items-center">
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-6">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left px-4">
            <Heading
              subtitle="WELCOME TO NEXTZENI"
              title="Empowering Your Future, One Skill at a Time"
            />
            <p className="text-gray-800 w-full py-2 text-sm sm:text-base md:text-lg">
              Learn Communication, English Speaking, and Soft Skills with
              NextZeni - Your Partner in Personal and Professional Growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
              <button className="bg-red-500 text-white py-4 px-4 rounded-lg hover:bg-red-700 transition text-sm sm:text-base">
                Join a Free Workshop{" "}
                <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button className="bg-gray-800 text-white py-4 px-4 rounded-lg hover:bg-gray-900 transition text-sm sm:text-base">
                Explore Courses <i className="fa fa-long-arrow-alt-right"></i>
              </button>
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
