/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Important business stats
const stats = [
  { id: 1, name: "Average Rate Per Mile", value: 3.5, prefix: "$", suffix: "+" },
  { id: 2, name: "Weekly Gross Potential", value: 12, prefix: "$", suffix: "k+" },
  { id: 3, name: "Active Carriers", value: 150, prefix: "", suffix: "+" },
  { id: 4, name: "Years of Experience", value: 5, prefix: "", suffix: "+" },
];

const Stats = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000; // 2 seconds
      const stepTime = 20;
      const totalSteps = duration / stepTime;
      const increment = end / totalSteps;

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = parseFloat(start.toFixed(1));
          return newCounts;
        });
      }, stepTime);
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_60%)]"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl font-bold text-white mb-16"
        >
          Our <span className="text-sky-400">Performance</span> in Numbers
        </motion.h2>

        <dl className="grid grid-cols-1 gap-x-10 gap-y-14 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-[#1e293b]/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-sky-400/10 hover:border-sky-400/40 hover:shadow-sky-400/20 transition duration-500"
            >
              <dd className="order-first text-4xl font-bold tracking-tight text-sky-400 sm:text-5xl">
                {stat.prefix}
                {counts[index]}
                {stat.suffix}
              </dd>
              <dt className="mt-3 text-base leading-7 text-gray-300 font-medium">
                {stat.name}
              </dt>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Stats;
