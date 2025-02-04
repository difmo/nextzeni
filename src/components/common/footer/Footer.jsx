import React from "react";
// import { blog } from "../../../dummydata";
import { Link } from "react-router-dom";
import "./footer.css";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <section className="newletter bg-gray-800 text-white py-6">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
          <div className="left mb-4 lg:mb-0">
            <h1 className="text-xl lg:text-2xl font-bold">
              Subscribe to Our Bulletin - Stay Updated with the Latest News and
              Insights.
            </h1>
            <span className="text-gray-300">
              Stay informed and connected with the latest updates
            </span>
          </div>
          <div className="right flex items-center space-x-2">
            <input
              className="text-black p-2 rounded-lg w-60 lg:w-80"
              type="email"
              placeholder="Enter email address"
            />
            <i className="fa fa-paper-plane text-white cursor-pointer text-xl"></i>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-4">
        <div className=" px-6">
          <div className="flex flex-col sm:flex-row lg:flex-row justify-between gap-8">
            {/* First Section */}
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">NEXTZENI</h1>
              <span className="block text-gray-400">
                ONLINE EDUCATION & LEARNING
              </span>
              <p className="mt-4 text-gray-300">
                Empower Your Voice, Elevate Your Impact!
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61571258289396"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://x.com/next_zeni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/nextzeni/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/@NextZeni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <FaLinkedin />
              </div>
            </div>

            {/* Explore Section */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-4">Explore</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/courses">Services</Link>
                </li>
                <li>
                  <Link to="/courses">Courses</Link>
                </li>
                <li>
                  <Link to="/journal">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Quick Links Section */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link to="/">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/">Privacy</Link>
                </li>
                <li>
                  <Link to="/">Feedbacks</Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-4">Have a Questions?</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <i className="fa fa-map text-xl"></i>
                  <span className="text-sm">
                    E-3/44, Vijayipur, Vishesh Khand 3, Gomti Nagar, Lucknow,
                    Uttar Pradesh 226010
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fa fa-phone-alt text-xl"></i>
                  <Link to="tel:+916307749532" className="text-sm">
                    +91 630 774 9532
                  </Link>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="fa fa-paper-plane text-xl"></i>
                  <Link to="mailto:yournextzeni@gmail.com" className="text-sm">
                    yournextzeni@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-center pt-4 px-4">
          <p>
            Copyright ©2025 | All rights reserved by NextZeni | Site Designed &
            Developed by Difmo Technologies
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
