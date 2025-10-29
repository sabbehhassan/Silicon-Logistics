/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Truck } from "lucide-react";
import { ReactTyped as Typed } from "react-typed";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0f172a] overflow-hidden"
    >
      {/* 🌄 Background Image */}
      <img
        src="https://images.unsplash.com/photo-1606577924006-27b3b09c3b7c?auto=format&fit=crop&w=1600&q=80"
        alt="Truck on the road"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* 🌈 Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0f172a]/80 via-[#0f172a]/70 to-[#0f172a]/90"></div>

      {/* 🚛 Truck Animation */}
      <div className="absolute top-[15%] sm:top-[20%] left-0 w-full z-10 overflow-visible pointer-events-none">
        <motion.div
          initial={{ x: "-120%" }}
          animate={{ x: "120%" }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex justify-center text-sky-500"
        >
          <Truck
            size={window.innerWidth < 640 ? 60 : 100} // smaller on mobile
            strokeWidth={1.5}
            className="opacity-90"
          />
        </motion.div>
      </div>

      {/* 🌟 Hero Content */}
      <div className="relative z-20 text-center text-white px-6 mt-20 sm:mt-40 md:mt-48">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
        >
          Drive Your Success with{" "}
          <span className="text-sky-400">Silicon Logistics</span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl text-sky-400 font-semibold mb-6"
        >
          <Typed
            strings={["Reliable.", "Transparent.", "Profitable."]}
            typeSpeed={80}
            backSpeed={50}
            loop
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 px-2"
        >
          Professional dispatching services that keep your wheels turning and
          your profits growing — coast to coast.
        </motion.p>

        <motion.a
          href="https://wa.me/1234567890"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#38bdf8",
            boxShadow: "0px 0px 20px rgba(56, 189, 248, 0.5)",
          }}
          className="bg-sky-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 inline-block"
        >
          Get Started
        </motion.a>
      </div>

      {/* 🌊 Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
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

export default Hero;
