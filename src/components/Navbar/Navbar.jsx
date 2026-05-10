import { useState } from "react";

import { Link } from "react-scroll";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "home",
    "about",
    "skills",
    "projects",
    "coding",
    "certifications",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0B1120]/70 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
          Vansh<span className="text-blue-500">.</span>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">

          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-blue-400 transition duration-300 capitalize"
              >
                {link}
              </Link>
            </li>
          ))}

        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-5">

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4 text-xl">

            <a
              href="https://github.com/Vansh7818"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/vansh-jain-809b442b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              <FaLinkedin />
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl"
          >

            {menuOpen ? <HiX /> : <HiMenuAlt3 />}

          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#0B1120]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >

        <ul className="flex flex-col items-center gap-6 text-lg font-medium">

          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer hover:text-blue-400 transition duration-300 capitalize"
              >
                {link}
              </Link>
            </li>
          ))}

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;