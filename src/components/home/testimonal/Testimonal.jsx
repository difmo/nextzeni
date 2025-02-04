import React from "react";
import { testimonial } from "../../../dummydata"; // Assuming the correct import name is 'testimonial'
import Heading from "../../common/heading/Heading";

const Testimonial = () => {
  return (
    <>
      <section className="testimonial bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <Heading subtitle="Reference" title="Our Graduates' Achievements" />

          <div className="content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center mt-8">
            {testimonial.map((val, index) => (
              <div
                key={index}
                className="item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="box flex items-center gap-4 mb-4">
                  <div className="img relative w-16 h-16">
                    <img
                      src={val.cover}
                      alt={val.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                    <i className="fa fa-quote-left icon absolute top-0 left-0 text-blue-500 text-xl"></i>
                  </div>
                  <div className="name">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {val.name}
                    </h2>
                    <span className="text-sm text-gray-500">{val.post}</span>
                  </div>
                </div>
                <p className="text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
