import React from "react";
// import "../blog/blog.css";
import { blog } from "../../dummydata";
import Heading from "../common/heading/Heading";
import ShowBlogs from "../../admin/AddBlogs/ShowBlogs";

const Hblog = () => {
  return (
    <>
      <section className="blog bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <Heading subtitle="OUR BLOG" title="Recent From Blog" />

          <div className="content flex flex-wrap gap-6 justify-center mt-8">
            {blog.slice(0, 3).map((val, index) => (
              <div
                key={index}
                className="items bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
              >
                <div className="img mb-4">
                  <img
                    src={val.cover}
                    alt={val.title}
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
                <div className="text">
                  <div className="admin  justify-center items-center text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-2">
                      <i className="fa fa-user"></i>
                      <label>{val.type}</label>
                    </span>
                    <span className="flex items-center gap-2">
                      <i className="fa fa-calendar-alt"></i>
                      <label>{val.date}</label>
                    </span>
                    <span className="flex items-center gap-2">
                      <i className="fa fa-comments"></i>
                      <label>{val.com}</label>
                    </span>
                  </div>
                  <h1 className="text-lg font-semibold text-gray-800 mb-2">
                    {val.title}
                  </h1>
                  <p className="text-gray-600">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
};

export default Hblog;


