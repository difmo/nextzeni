import React from "react";
import { online } from "../../dummydata";
import Heading from "../common/heading/Heading";

const OnlineCourses = () => {
  return (
    <section className="online py-10">
      <div className="container mx-auto px-4">
        <Heading subtitle="COURSES" title="Browse Our Online Courses" />
        <div className="content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {online.map((val, index) => (
            <div
              key={index}
              className="box bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center"
            >
              <div className="img w-full mb-4">
                <img
                  src={val.cover}
                  alt={val.courseName}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h1 className="text-lg font-semibold text-gray-800 mb-2">
                {val.courseName}
              </h1>
              <span className="text-sm text-primary">{val.course}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineCourses;
