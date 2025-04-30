  import React, { useState } from "react";
  import { Link } from "react-router-dom";
  import img from "../../../../public/images/logo.png";
  import { useProfile } from "../../../context/Providers/ProfileContext";
  import LoginScreen from "../../../pages/AuthScreens/LoginScreen";

  const Header = () => {
    const [click, setClick] = useState(false);
    const [showLogin, setShowLogin] = useState(false); // 👈 for modal
    const [showSignup, setShowSignup] = useState(false);

    const { isAdmin } = useProfile();

    const navItems = [
      { name: "Home", id: "home" },
      { name: "All Courses", id: "courses" },
      { name: "About", id: "about" },
      { name: "Blogs", id: "blogs" },
      { name: "Free Resources", path: "/free-resources" }, // 👈 Use `path` here
      { name: "Contact", id: "contact" },
    ];
    

    const handleScrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    return (
      <>
        <header className="sticky top-0 z-50 bg-black text-black flex justify-center border-b shadow-md">
          <nav className="flex items-center justify-center md:justify-between container w-full px-4 py-2 md:flex-row">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link to="/" className="text-xl font-bold">
                <img
                  src={img}
                  alt="Logo"
                  className="bg-cover bg-white p-1 rounded-full h-16"
                />
              </Link>

              <div
                className="md:hidden relative z-30 text-2xl"
                onClick={() => setClick(!click)}
              >
                {click ? (
                  <i className="fa fa-times text-white"></i>
                ) : (
                  <i className="fa fa-bars text-white"></i>
                )}
              </div>
            </div>

            {/* Navigation */}
            <ul
              className={`fixed top-2 left-0 w-full h-full bg-black flex flex-col items-center justify-center gap-4 transform ${click ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out md:static md:w-auto md:flex-row md:gap-6 md:bg-transparent md:h-auto md:translate-x-0`}
            >
              {navItems.map((item, index) => (
  <li key={index} className="text-lg">
    {item.path ? (
      <Link
        to={item.path}
        onClick={() => setClick(false)}
        className="block px-4 py-2 text-center transition text-white hover:text-red-500"
      >
        {item.name}
      </Link>
    ) : (
      <button
        onClick={() => {
          handleScrollToSection(item.id);
          setClick(false);
        }}
        className="block px-4 py-2 text-center transition text-white hover:text-red-500"
      >
        {item.name}
      </button>
    )}
  </li>
))}

            </ul>

            <div className="hidden md:block">
              <div className="flex">
                <Link to="/contact" className="relative mr-4">
                  <div className="button bg-orange-500 text-white px-4 py-2 rounded-md transition hover:bg-orange-600">
                    GET CERTIFICATE
                  </div>
                </Link>

                {/* Toggle Login Modal */}
                <button
                  onClick={() => setShowLogin(true)}
                  className="relative mr-4"
                >
                  <div className="button bg-orange-500 text-white px-4 py-2 rounded-md transition hover:bg-orange-600">
                    Login
                  </div>
                </button>

                {isAdmin && (
                  <Link to="/admin/all-blogs" className="relative">
                    <div className="button bg-orange-500 text-white px-4 py-2 rounded-md transition hover:bg-orange-600">
                      Admin
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </nav>
        </header>

        {/* Modal Mount */}
        <LoginScreen isOpen={showLogin} onClose={() => setShowLogin(false)} />
          {showSignup && <SignUpScreen closeModal={() => setShowSignup(false)} />}
      </>
    );
  };

  export default Header;
  // sdflsdlfc