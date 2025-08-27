import React from "react";
import Logo from "../assets/img/Logo Inndivo.png"

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-4 md:px-6 py-4 shadow-md">
        <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="h-8 md:h-9" />
        </div>
        <div className="md:hidden">
            <button className="text-gray-600">
                <i className="fas fa-bars text-xl"></i>
            </button>
        </div>
        <div className="hidden md:flex space-x-6">
            <a href="#" className="text-sm hover:text-orange-600">Explore</a>
            <a href="#" className="text-sm hover:text-orange-600">Service</a>
            <a href="#" className="text-sm hover:text-orange-600">Community</a>
            <a href="#" className="text-sm hover:text-orange-600">About</a>
        </div>
        <a href="#" className="bg-[#E92F05] text-white text-sm px-4 py-2 rounded-full hover:opacity-90">Login</a>
    </nav>

  );
};

export default Navbar;
