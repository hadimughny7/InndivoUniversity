import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/img/Logo Inndivo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Explore", path: "/explore" },
    { name: "Service", path: "/service" },
    { name: "Community", path: "/community" },
    { name: "About", path: "/about" },
  ];

  const activeClass = "text-[#E92F05]";
  const inactiveClass = "text-black hover:text-[#E92F05]";

  const renderMenuItem = (item: { name: string; path: string }, onClick?: () => void) => (
    <NavLink
      key={item.name}
      to={item.path}
      className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      onClick={onClick}
    >
      {item.name}
    </NavLink>
  );

  return (
    <nav className="relative shadow-md bg-white">
      <div className="max-w-[90%] mx-auto flex justify-between items-center px-4 md:px-6 py-4">
        {/* Logo */}
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="h-8 md:h-9" />
        </NavLink>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map(item => renderMenuItem(item))}
        </div>

        {/* Desktop Login */}
        <NavLink
          to="/login"
          className="hidden md:block bg-[#E92F05] text-white text-sm px-4 py-2 rounded-full hover:opacity-90"
        >
          Login
        </NavLink>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scaleY: 0.8 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -20, scaleY: 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut", type: "spring", stiffness: 120 }}
            className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-4 py-4 space-y-3 md:hidden z-50 origin-top"
          >
            {menuItems.map(item => renderMenuItem(item, () => setIsOpen(false)))}
            <NavLink
              to="/login"
              className="bg-[#E92F05] text-white text-sm px-4 py-2 rounded-full hover:opacity-90"
              onClick={() => setIsOpen(false)}
            >
              Login
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
