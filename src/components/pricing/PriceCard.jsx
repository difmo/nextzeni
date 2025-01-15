import React from "react";
import { price } from "../../dummydata";
import { Link } from "react-router-dom";

const PriceCard = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-wrap justify-center gap-6">
        {price.map((val, index) => (
          <div
            key={index}
            className="items bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition transform hover:-translate-y-2 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              {val.name}
            </h4>
            <h1 className="text-4xl font-bold text-blue-600 mb-4">
              <span className="text-lg">Rs</span> {val.price}
            </h1>
            <p className="text-gray-600 mb-6">{val.desc}</p>
            <Link to="/contact">
              <button className="outline-btn border-2 border-blue-600 text-blue-600 font-medium px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
                GET STARTED
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceCard;
