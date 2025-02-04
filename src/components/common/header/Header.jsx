import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../../../public/images/logo.png";
const Header = () => {
  const [click, setClick] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "All Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Teams", path: "/team" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/journal" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className=" text-black">
        <nav className="container mx-auto flex items-center justify-between  md:flex-row ">
          {/* Mobile Menu */}
          <div className="fixed top-0 left-0 w-full  text-black px-4 py-2 flex items-center justify-between z-50">
            {/* Logo */}
            <Link to="/" className="text-xl font-bold">
              <img
                // src="public/images/logo1.jpeg"
                src={img}
                alt="Logo"
                className="bg-cover h-12"
              />
            </Link>

            {/* Hamburger Button (Mobile) */}
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

            {/* Navigation Menu */}
            <ul
              className={`fixed top-11 left-0 w-full h-full bg-slate-100 flex flex-col items-center justify-center gap-4 transform ${
                click ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300 ease-in-out md:static md:w-auto md:flex-row md:gap-6 md:bg-transparent md:h-auto md:translate-x-0`}
            >
              {navItems.map((item, index) => (
                <li key={index} className="text-lg">
                  <Link
                    to={item.path}
                    className="block px-4 py-2 text-center transition hover:text-red-500"
                    onClick={() => setClick(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Get Certificate Button (Desktop) */}
            <div className="hidden md:block">
              <Link to="/contact" className="relative">
                <div className="button bg-red-500 text-white px-4 py-2 rounded-md transition hover:bg-red-600">
                  GET CERTIFICATE
                </div>
                <span className="absolute -top-2 -right-2 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-fullopacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
