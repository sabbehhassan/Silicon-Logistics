/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Truck } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-24 text-white overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        {/* LEFT: Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Get in <span className="text-sky-400">Touch</span>
          </h2>
          <p className="text-gray-300 mb-10 text-lg leading-relaxed">
            Whether you’re a carrier, partner, or client — we’d love to hear
            from you. Let’s discuss how <span className="text-sky-400">Silicon Logistics</span> 
            can keep your wheels rolling smoothly.
          </p>

          {/* Contact Form */}
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-[#1e293b] border border-sky-800 text-gray-200 focus:border-sky-400 outline-none transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-[#1e293b] border border-sky-800 text-gray-200 focus:border-sky-400 outline-none transition"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg bg-[#1e293b] border border-sky-800 text-gray-200 focus:border-sky-400 outline-none transition"
            ></textarea>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(56,189,248,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300 w-full sm:w-auto"
            >
              <Send size={18} />
              Send Message
            </motion.button>
          </form>

          {/* Google Form CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScrKulaAE0SiHkPNFIU5awwryo70QeZXBTrOVtEgfGSEUOQpg/viewform?usp=pp_url"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-linear-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all"
            >
              <Truck size={20} className="group-hover:rotate-12 transition" />
              Become a Carrier Partner
            </a>
            <p className="text-sm text-gray-400 mt-2">
              Carriers can reach us directly by filling this quick form.
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT: Map & Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Map */}
          <div className="overflow-hidden rounded-2xl">
            <iframe
              title="Silicon Logistics Location"
              className="w-full h-80 rounded-2xl mt-15"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093846!2d144.9537353153165!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f147f29f%3A0x5045675218ceed0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633072800000!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-gray-300 text-base">
            <div className="flex items-center gap-3">
              <Phone className="text-sky-400" /> +1 (555) 123-4567
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-sky-400" /> info@siliconlogistics.com
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-sky-400" /> 123 Logistics Ave, Melbourne, Australia
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
