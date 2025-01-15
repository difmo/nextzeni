import React from "react";

const Heading = ({ subtitle, title }) => (
  <div className="text-center mb-12">
    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">
      {subtitle}
    </h2>
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mt-4">
      {title}
    </h1>
  </div>
);

export default Heading;
