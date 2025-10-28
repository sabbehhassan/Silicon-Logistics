import React from "react";
import { Truck, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-12 border-t border-sky-800 relative overflow-hidden">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-linear-to-r from-sky-500 via-cyan-400 to-blue-600"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* Logo / About */}
        <div>
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
            <Truck className="text-sky-400 w-7 h-7" />
            <h2 className="text-2xl font-bold text-white">
              Silicon <span className="text-sky-400">Logistics</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Reliable and professional truck dispatching services — connecting
            carriers with top-paying loads across the USA.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg relative after:absolute after:content-[''] after:-bottom-1 after:left-0 after:w-10 after:h-0.5 after:bg-sky-400">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-sky-400 transition">Home</a></li>
            <li><a href="#services" className="hover:text-sky-400 transition">Services</a></li>
            <li><a href="#team" className="hover:text-sky-400 transition">Team</a></li>
            <li><a href="#contact" className="hover:text-sky-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg relative after:absolute after:content-[''] after:-bottom-1 after:left-0 after:w-10 after:h-0.5 after:bg-sky-400">
            Contact Info
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <Mail className="w-4 h-4 text-sky-400" />
              <span>support@siliconlogistics.com</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <Phone className="w-4 h-4 text-sky-400" />
              <span>+1 (800) 456-7890</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <MapPin className="w-4 h-4 text-sky-400" />
              <span>Houston, TX, USA</span>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg relative after:absolute after:content-[''] after:-bottom-1 after:left-0 after:w-10 after:h-0.5 after:bg-sky-400">
            Follow Us
          </h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-sky-500/10 hover:bg-sky-500/20 hover:scale-110 transition"
            >
              <Facebook className="w-5 h-5 text-sky-400" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-sky-500/10 hover:bg-sky-500/20 hover:scale-110 transition"
            >
              <Instagram className="w-5 h-5 text-sky-400" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-sky-500/10 hover:bg-sky-500/20 hover:scale-110 transition"
            >
              <Linkedin className="w-5 h-5 text-sky-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-sky-900 pt-6">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">Silicon Logistics</span> — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
