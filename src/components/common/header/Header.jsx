import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import img from "../../../../public/images/logo.png";
import { useProfile } from "../../../context/Providers/ProfileContext";

const Header = () => {
  const [click, setClick] = useState(false);

  // Create refs for each section
  const homeRef = useRef(null);
  const coursesRef = useRef(null);
  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  const pricingRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);
  const {isAdmin} = useProfile();

  const navItems = [
    { name: "Home", ref: homeRef },
    { name: "All Courses", ref: coursesRef },
    { name: "About", ref: aboutRef },
    { name: "Teams", ref: teamRef },
    { name: "Pricing", ref: pricingRef },
    { name: "Blog", ref: blogRef },
    { name: "Contact", ref: contactRef },
  ];

  const handleScrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <header className="text-black flex justify-center border-b bg-black">
        <nav className="flex items-center justify-center md:justify-between container w-full px-4 py-2 md:flex-row">
          <div className="flex items-center justify-between w-full md:w-auto">
            {/* Logo */}
            <Link to="/" className="text-xl font-bold">
              <img
                src={img}
                alt="Logo"
        
                className="bg-cover bg-white p-1 rounded-full h-16"
              />
            </Link>

            <div
              className="md:hidden text-2xl"
              onClick={() => setClick(!click)}
            >
              {click ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </div>
          </div>

          {/* Navigation Menu */}
          <ul
            className={`fixed top-11 left-0 w-full h-full bg-slate-100 flex flex-col items-center justify-center gap-4 transform ${
              click ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out md:static md:w-auto md:flex-row md:gap-6 md:bg-transparent md:h-auto md:translate-x-0`}
          >
            {navItems.map((item, index) => (
              <li key={index} className="text-lg">
                <button
                  onClick={() => {
                    handleScrollToSection(item.ref);
                    setClick(false); // Close mobile menu on click
                  }}
                  className="block px-4 py-2 text-center transition text-white hover:text-red-500"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <div className="flex ">
            <Link to="/contact" className="relative mr-4">
              <div className="button bg-red-500 text-white px-4 py-2 rounded-md transition hover:bg-red-600">
                GET CERTIFICATE
              </div>
              <span className="absolute -top-2 -right-2 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </span>
            </Link>
            <Link to="/auth/signin" className="relative mr-4">
              <div className="button bg-red-500 text-white px-4 py-2 rounded-md transition hover:bg-red-600">
                Login
              </div>
              <span className="absolute -top-2 -right-2 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </span>
            </Link>
            {  isAdmin ? 
              <Link to="/admin/all-blogs" className="relative">
                <div className="button bg-red-500 text-white px-4 py-2 rounded-md transition hover:bg-red-600">
                  Admin
                </div>
                <span className="absolute -top-2 -right-2 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                </span>
              </Link>:<></>}
            </div>
     
          </div>
        </nav>
      </header>

      {/* Sections */}
    </>
  );
};

export default Header;
