import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

// Navigation Links Array
const navLinks = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/project" },
  { name: "Contact", path: "/contact" },
  { name: "Certificate", path: "/certificate" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 nav_bar bg-gray-900 text-white flex justify-between items-center relative">
      {/* Logo */}
      <NavLink to="/" className="hover:text-gray-400 pl-13">
        <h1 className="text-xl font-bold">SK</h1>
      </NavLink>

      {/* Hamburger Icon (Mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col justify-center items-center space-y-1 z-50"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
          className="w-6 h-0.5 bg-white transition-all"
        ></motion.div>
        <motion.div
          animate={{ opacity: isOpen ? 0 : 1 }}
          className="w-6 h-0.5 bg-white transition-all"
        ></motion.div>
        <motion.div
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
          className="w-6 h-0.5 bg-white transition-all"
        ></motion.div>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6 pr-10 ">
        {navLinks.map(({ name, path }) => (
          <NavLink key={name} to={path} className="hover:text-gray-400 pointer pr-10">
            {name}
          </NavLink>
        ))}
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 left-0 w-full bg-gray-800 md:hidden"
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                className="hover:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
