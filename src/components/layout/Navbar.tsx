import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/img/Logo Inndivo.png";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative flex justify-between items-center px-4 md:px-6 py-4 shadow-md bg-white">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <Link to="/">
                    <img src={Logo} alt="Logo" className="h-8 md:h-9" />
                </Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
                <button
                    className="text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <i className="fas fa-bars text-xl"></i>
                </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
                <Link to="/explore" className="text-sm hover:text-orange-600">Explore</Link>
                <a href="#" className="text-sm hover:text-orange-600">Service</a>
                <a href="#" className="text-sm hover:text-orange-600">Community</a>
                <a href="#" className="text-sm hover:text-orange-600">About</a>
            </div>

            {/* Desktop Login */}
            <a
                href="#"
                className="hidden md:block bg-[#E92F05] text-white text-sm px-4 py-2 rounded-full hover:opacity-90"
            >
                Login
            </a>

            {/* Mobile Dropdown dengan animasi */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scaleY: 0.8 }}
                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                        exit={{ opacity: 0, y: -20, scaleY: 0.8 }}
                        transition={{
                            duration: 0.4,
                            ease: "easeOut",
                            type: "spring",
                            stiffness: 120,
                        }}
                        className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-4 py-4 space-y-3 md:hidden z-50 origin-top"
                    >
                        <Link to="/explore" className="text-sm hover:text-orange-600">Explore</Link>
                        <a href="#" className="text-sm hover:text-orange-600">Service</a>
                        <a href="#" className="text-sm hover:text-orange-600">Community</a>
                        <a href="#" className="text-sm hover:text-orange-600">About</a>
                        <a
                            href="#"
                            className="bg-[#E92F05] text-white text-sm px-4 py-2 rounded-full hover:opacity-90"
                        >
                            Login
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

        </nav>
    );
};

export default Navbar;
