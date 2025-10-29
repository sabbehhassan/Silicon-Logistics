import React, { useState } from "react";
import { Menu, X, Truck } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  // ✅ Corrected WhatsApp number (no + or spaces)
const whatsappNumber = "13465998875";

// ✅ Correct link format
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello!%20I'm%20interested%20in%20your%20services`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/95 backdrop-blur-md border-b border-sky-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        
        {/* Logo (Left) */}
        <div className="flex items-center space-x-2">
          <Truck className="text-sky-400 w-7 h-7" />
          <h1 className="text-2xl font-bold text-white tracking-wide">
            Silicon <span className="text-sky-400">Logistics</span>
          </h1>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-200 hover:text-sky-400 transition font-medium relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right: Get Started Button */}
        <div className="hidden md:flex items-center justify-end">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-500 text-white font-semibold px-5 py-2 rounded-full hover:bg-sky-600 shadow-md hover:shadow-sky-500/30 transition-all"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-gray-200 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0f172a] border-t border-sky-800 shadow-inner animate-slideDown">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-200 hover:text-sky-400 transition font-medium"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
            {/* Mobile Get Started Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-500 text-white font-semibold text-center px-4 py-2 rounded-full hover:bg-sky-600 shadow-md hover:shadow-sky-500/30 transition-all"
              onClick={() => setOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
