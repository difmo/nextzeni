import React from "react";
import img from "../public/images/N.gif";

const Floating = () => {
  const phoneNumber = "+91 630 774 9532";

  return (
    <div className="fixed bottom-4 right-4 animate-bounce md:bottom-6 md:right-6 lg:bottom-8 lg:right-8">
      <a
        href={`tel:${phoneNumber}`}
        className="bg-white border p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
        aria-label="Call Phone Number"
      >
        <img
          src={img}
          alt="Call"
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
        />
      </a>
    </div>
  );
};

export default Floating;
