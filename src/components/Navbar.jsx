import React, { useState, useEffect } from "react";
import {
  ListBullets as Menu,
  X,
  CaretDownIcon,
  House,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State for controlling mobile menu
  const [menuOpen, setMenuOpen] = useState(false);
  // State for desktop category dropdown

  // State to track scroll for navbar styling
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Add scroll listener to apply background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll for anchor links
  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  // Scroll to top for Home
  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900 bg-opacity-800 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="text-white px-4 py-5 relative font-primary">
        {/* Navbar container */}
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold font-sevillana">
            <a href="#home" onClick={handleHomeClick}>
              MRH
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-sm font-primary">
            <li className="hover:text-gray-300">
              <a href="#home" onClick={handleHomeClick}>
                <House size={20} />
              </a>
            </li>
            <li className="hover:text-gray-300">
              <a href="#about" onClick={(e) => handleAnchorClick(e, "about")}>
                About Me
              </a>
            </li>
            <li className="hover:text-gray-300">
              <a
                href="#projects"
                onClick={(e) => handleAnchorClick(e, "projects")}
              >
                Projects
              </a>
            </li>
            <li className="hover:text-gray-300">
              <a href="#skills" onClick={(e) => handleAnchorClick(e, "skills")}>
                Skills
              </a>
            </li>
            <li className="hover:text-gray-300">
              <a
                href="#contact"
                onClick={(e) => handleAnchorClick(e, "contact")}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Right Menu - Desktop */}
          <ul className="hidden md:flex gap-6 text-sm items-center font-primary">
            <li>
              <a
               className="bg-primary border border-primary transition duration-200 hover:border-white hover:bg-transparent text-white px-4 py-2 rounded-md"
                href="#contact"
                onClick={(e) => handleAnchorClick(e, "contact")}
              >
                Hire Me
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Offcanvas Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-[300px] bg-gray-900 text-white transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } font-primary`}
        >
          {/* Mobile Menu Header */}
          <div className="p-4 flex justify-between items-center border-b border-gray-700">
            <span className="text-lg font-bold font-sevillana">
              Md. Rubel Hossain
            </span>
          </div>

          {/* Mobile Links */}
          <ul className="flex flex-col p-4 gap-4 text-base font-primary bg-gray-900 h-screen">
            <li onClick={closeMenu}>
              <a href="#home" onClick={handleHomeClick}>
                Home
              </a>
            </li>
            <li onClick={closeMenu}>
              <a href="#about" onClick={(e) => handleAnchorClick(e, "about")}>
                About Me
              </a>
            </li>
            <li onClick={closeMenu}>
              <a
                href="#projects"
                onClick={(e) => handleAnchorClick(e, "projects")}
              >
                Projects
              </a>
            </li>
            <li onClick={closeMenu}>
              <a href="#skills" onClick={(e) => handleAnchorClick(e, "skills")}>
                Skills
              </a>
            </li>
            <li onClick={closeMenu}>
              <a
                href="#contact"
                onClick={(e) => handleAnchorClick(e, "contact")}
              >
                Contact
              </a>
            </li>
            <li onClick={closeMenu}>
              <a
                href="#contact"
                onClick={(e) => handleAnchorClick(e, "contact")}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
