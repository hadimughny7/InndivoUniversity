import React from "react";
import Logo from "../../assets/img/Logo Inndivo.png"


const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-[#202020] font-['Plus Jakarta Sans'] px-5 py-10">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-8">
        {/* Logo & Social */}
        <div className="flex-1 min-w-[200px]">
          <img
            src={Logo}
            alt="Logo"
            className="h-10 w-auto object-contain cursor-pointer mb-3"
          />
          <div className="flex items-center space-x-3 mt-2">
            <a href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                alt="LinkedIn"
                className="w-7 hover:scale-110 transition-transform"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                className="w-7 hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Categories */}
        <div className="flex-1 min-w-[180px]">
          <h4 className="text-base font-bold mb-3">Categories</h4>
          <ul className="space-y-2 text-sm text-[#797979]">
            <li><a href="#" className="hover:text-orange-600">Business & Management</a></li>
            <li><a href="#" className="hover:text-orange-600">Data</a></li>
            <li><a href="#" className="hover:text-orange-600">Digital Marketing</a></li>
            <li><a href="#" className="hover:text-orange-600">Graphic Design</a></li>
            <li><a href="#" className="hover:text-orange-600">Programming & Tech</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex-1 min-w-[180px]">
          <h4 className="text-base font-bold mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-[#797979]">
            <li><a href="#" className="hover:text-orange-600">Online Course</a></li>
            <li><a href="#" className="hover:text-orange-600">Webinar</a></li>
          </ul>
        </div>

        {/* About */}
        <div className="flex-1 min-w-[180px]">
          <h4 className="text-base font-bold mb-3">About</h4>
          <ul className="space-y-2 text-sm text-[#797979]">
            <li><a href="#" className="hover:text-orange-600">Our Story</a></li>
            <li><a href="#" className="hover:text-orange-600">Blog</a></li>
            <li><a href="#" className="hover:text-orange-600">Community</a></li>
            <li><a href="#" className="hover:text-orange-600">FAQ</a></li>
            <li><a href="#" className="hover:text-orange-600">Terms & Condition</a></li>
            <li><a href="#" className="hover:text-orange-600">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1 min-w-[220px]">
          <h4 className="text-base font-bold mb-3">Contact</h4>
          <ul className="space-y-3 text-sm text-[#797979]">
            <li className="flex items-center gap-2">
              <img src="assets/img/icon/mail.svg" alt="Mail" className="w-4 h-4" />
              inndivo@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <img src="assets/img/icon/phone.svg" alt="Phone" className="w-4 h-4" />
              +62 123 4567 890
            </li>
            <li className="flex items-start gap-2">
              <img src="assets/img/icon/map-pin.svg" alt="Map" className="w-4 h-4 mt-1" />
              <span>
                Jl. Wates km 10 Perum Puri Argomulyo Asri no 60,<br />
                Argomulyo, Sedayu, Bantul
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
