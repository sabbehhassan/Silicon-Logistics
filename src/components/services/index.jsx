/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import {
  Truck,
  Snowflake,
  Package,
  Zap,
} from "lucide-react"; // Icons for services

const services = [
  {
    title: "Dry Van Dispatching",
    desc: "Reliable dispatch solutions to keep your dry van loads profitable and on time.",
    icon: Package,
    color: "text-sky-400",
  },
  {
    title: "Reefer Dispatching",
    desc: "Expert handling of temperature-sensitive loads for maximum efficiency and care.",
    icon: Snowflake,
    color: "text-emerald-400",
  },
  {
    title: "Flatbed Dispatching",
    desc: "Secure, high-paying flatbed load dispatching with trusted routes.",
    icon: Truck,
    color: "text-indigo-400",
  },
  {
    title: "Power Only",
    desc: "Maximize your truck’s uptime with our power-only dispatching support.",
    icon: Zap,
    color: "text-amber-400",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative bg-[#0f172a] py-24 sm:py-32 text-white overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0f172a]/80 via-[#0f172a]/95 to-[#0f172a]" />

      {/* Floating motion lights */}
      <motion.div
        className="absolute -top-32 left-10 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Section Header */}
      <div className="relative z-10 mx-auto max-w-3xl text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-base font-semibold tracking-widest text-sky-400 uppercase"
        >
          Our Services
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Empowering Your Fleet with{" "}
          <span className="text-sky-400">Top-tier Dispatch Solutions</span>
        </motion.h3>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 25px rgba(56, 189, 248, 0.4)",
              }}
              className="bg-[#1e293b]/70 backdrop-blur-lg border border-sky-500/10 rounded-2xl p-8 text-center shadow-lg transition-all duration-500"
            >
              <motion.div
                className="flex justify-center mb-6"
                whileHover={{ rotate: 10 }}
              >
                <div
                  className={`p-4 rounded-full bg-[#0f172a] border ${service.color} border-opacity-30`}
                >
                  <Icon size={48} className={service.color} />
                </div>
              </motion.div>
              <h4 className="text-2xl font-bold mb-3">{service.title}</h4>
              <p className="text-gray-300 leading-relaxed">{service.desc}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Optional bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20 fill-[#0f172a]"
        >
          <path d="M985.66 83.58C906.67 98.67 823.78 103.83 740 93.62 663.59 84.21 586.86 59.6 510 48.61 422.84 36.54 334.71 42.33 248 61.26c-70.88 15.39-141.75 38.63-212 45.62V0h1200v27.35C1100.14 54.73 1049.2 70.91 985.66 83.58z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Services;
