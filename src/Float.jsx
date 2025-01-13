import React from "react";
import img from "../public/images/N.gif"

const Floating = () => {
  const phoneNumber = "+91 630 774 9532";

  return (
    <div className="fixed bottom-4 right-4 animate-bounce">
      <a
        href={`tel:${phoneNumber}`}
        className="bg-white border  text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
        aria-label="Call Phone Number"
      >
        <img
          src={img} 
          alt="Call"
          className="w-6 h-6"
        />
      </a>
    </div>
  );
};
//jsafbdhjgsudhgiquh
export default Floating;
