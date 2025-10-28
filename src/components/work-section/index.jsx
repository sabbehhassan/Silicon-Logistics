/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, Search, Truck } from "lucide-react";

const steps = [
  {
    id: "01",
    name: "Initial Setup",
    description:
      "We start with a quick onboarding call to understand your preferences, lanes, and equipment — setting you up for success.",
    icon: ClipboardCheck,
    color: "text-sky-400",
  },
  {
    id: "02",
    name: "We Find & Book Loads",
    description:
      "Our expert dispatchers find, negotiate, and book the highest-paying loads that fit your needs — saving you time and hassle.",
    icon: Search,
    color: "text-emerald-400",
  },
  {
    id: "03",
    name: "You Haul & Get Paid",
    description:
      "You focus on driving while we handle all paperwork, invoicing, and ensure you get paid quickly and smoothly.",
    icon: Truck,
    color: "text-indigo-400",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="work"
      className="relative bg-[#0f172a] py-24 sm:py-32 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-b from-sky-900/30 via-[#0f172a]/90 to-[#0f172a]" />

      {/* Decorative Motion Blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-72 h-72 bg-sky-500/30 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Section Heading */}
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-base font-semibold tracking-wide text-sky-400 uppercase"
        >
          Get Started
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-3 text-4xl md:text-5xl font-extrabold"
        >
          On the Road in <span className="text-sky-400">3 Simple Steps</span>
        </motion.p>
      </div>

      {/* Steps Grid */}
      <div className="relative z-10 mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-12 px-6 sm:px-10 md:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 30px rgba(56, 189, 248, 0.4)",
              }}
              className="relative bg-[#1e293b]/60 backdrop-blur-md border border-sky-500/20 rounded-2xl p-8 text-center shadow-lg transition-all duration-500"
            >
              <div className="flex justify-center mb-6">
                <motion.div
                  className={`p-4 rounded-full bg-[#0f172a] border ${step.color} border-opacity-40`}
                  whileHover={{ rotate: 10 }}
                >
                  <Icon size={48} className={`${step.color}`} />
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.name}</h3>
              <p className="text-gray-300 leading-relaxed">{step.description}</p>
              <span className="absolute top-4 left-6 text-5xl font-extrabold text-gray-700/20 select-none">
                {step.id}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
