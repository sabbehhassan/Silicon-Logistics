/* eslint-disable no-unused-vars */
import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    name: "Maximize Your Profit",
    description:
      "We aren't just dispatchers; we're partners. Our goal is to get you the highest RPM possible.",
  },
  {
    name: "No Forced Dispatch",
    description:
      "You are the boss. You decide which loads to take and when to go home. We just provide the best options.",
  },
  {
    name: "Total Transparency",
    description:
      "You see the rate confirmations directly from the broker. No hidden fees, ever.",
  },
  {
    name: "Dedicated Dispatcher",
    description:
      "You get a single, dedicated dispatcher who understands you and your business needs.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.15),transparent_60%)]"></div>

      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 relative z-10">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="lg:pr-8"
        >
          <h2 className="text-base font-semibold text-sky-400 uppercase tracking-wide">
            The Silicon Difference
          </h2>
          <h3 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight">
            Why Choose <span className="text-sky-400">Silicon Logistics</span>?
          </h3>
          <p className="mt-6 text-lg text-gray-300">
            We’re not just dispatchers — we’re your growth partners. With
            cutting-edge tools, transparent communication, and a dedicated
            support team, we help you drive smarter and earn more.
          </p>

          <dl className="mt-10 space-y-6 text-base leading-7 text-gray-300">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-10 hover:translate-x-1 transition-transform duration-300"
              >
                <dt className="font-semibold text-white flex items-start">
                  <Check className="absolute left-0 top-1 h-5 w-5 text-sky-400" />
                  {feature.name}
                </dt>
                <dd className="text-gray-400 mt-1">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-2 bg-linear-to-r from-sky-500 to-indigo-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
          <img
            src="/assets/truck.jpg"
            alt="Truck driving through highway"
            className="relative rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-black/40 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
