import React from "react";
import { testimonal } from "../../../dummydata";
import Heading from "../../common/heading/Heading";

const Testimonal = () => {
  return (
    <>
      <section className="testimonal bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <Heading subtitle="Reference" title="Our Graduates' Achievements" />

          <div className="content flex flex-wrap gap-6 justify-center mt-8">
            {testimonal.map((val, index) => (
              <div
                key={index}
                className="items bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
              >
                <div className="box flex items-center gap-4 mb-4">
                  <div className="img relative w-16 h-16">
                    <img
                      src={val.cover}
                      alt={val.name}
                      className="h-auto w-auto rounded-full bg-cover"
                    />
                    <i className="fa fa-quote-left icon absolute top-0 left-0 text-blue-500 text-xl"></i>
                  </div>
                  <div className="name pt-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {val.name}
                    </h2>
                    <span className="text-sm text-gray-500">{val.post}</span>
                  </div>
                </div>
                <p className="text-gray-600 pt-5">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonal;
