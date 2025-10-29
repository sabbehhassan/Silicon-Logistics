 
import React, { useRef } from "react";
import {
  Truck,
  Snowflake,
  Package,
  Zap,
  Boxes,
  Layers,
  Navigation,
  Anchor,
  Weight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [
  { title: "Dry Van", desc: "Reliable dispatch solutions to keep your dry van loads profitable and on time.", icon: Package, color: "text-sky-400" },
  { title: "Reefer", desc: "Expert handling of temperature-sensitive loads for maximum efficiency and care.", icon: Snowflake, color: "text-emerald-400" },
  { title: "Flatbed", desc: "Secure, high-paying flatbed load dispatching with trusted routes.", icon: Truck, color: "text-indigo-400" },
  { title: "Power Only", desc: "Maximize your truck’s uptime with our power-only dispatching support.", icon: Zap, color: "text-amber-400" },
  { title: "Flatbed Hot Shot", desc: "Fast and flexible hot shot dispatching for urgent and light loads.", icon: Navigation, color: "text-rose-400" },
  { title: "Step Deck", desc: "Expert dispatching for step deck trailers with optimal load selection.", icon: Layers, color: "text-purple-400" },
  { title: "Box Truck", desc: "Dedicated support for box truck drivers ensuring consistent freight and profit.", icon: Boxes, color: "text-green-400" },
  { title: "RGN", desc: "Specialized dispatching for removable gooseneck trailers, ideal for heavy equipment.", icon: Anchor, color: "text-cyan-400" },
  { title: "Lowboy", desc: "Professional handling of oversized and heavy freight with lowboy trailer dispatching.", icon: Weight, color: "text-orange-400" },
];

const Services = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardContainer = scrollRef.current;
    const cardWidth = cardContainer.offsetWidth / 3;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section id="services" className="relative bg-[#0f172a] py-24 sm:py-32 text-white overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-[#0f172a]/80 via-[#0f172a]/95 to-[#0f172a]" />

      {/* Background Glow */}
      <div className="absolute -top-28 left-10 w-72 h-60 bg-sky-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-70 bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl text-center mb-16">
        <h2 className="text-base font-semibold tracking-widest text-sky-400 uppercase">
          Our Services
        </h2>
        <h3 className="text-4xl md:text-5xl font-extrabold mt-2">
          Empowering Your Fleet with{" "}
          <span className="text-sky-400">Top-tier Dispatch Solutions</span>
        </h3>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 z-30 p-3 rounded-full bg-sky-500/20 hover:bg-sky-500/40 transition focus:outline-none -ml-6"
        >
          <ChevronLeft size={30} />
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="relative z-10 flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth md:overflow-x-hidden px-6 md:px-12"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-[#1e293b]/70 backdrop-blur-lg border border-sky-500/10 rounded-2xl p-8 text-center shadow-lg transition-all duration-300 min-w-[90%] md:min-w-[calc(100%/3-20px)]"
              >
                <div className="flex justify-center mb-6">
                  <div className={`p-4 rounded-full bg-[#0f172a] border ${service.color} border-opacity-30`}>
                    <Icon size={48} className={service.color} />
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-3">{service.title}</h4>
                <p className="text-gray-300 leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 z-30 p-3 rounded-full bg-sky-500/20 hover:bg-sky-500/40 transition focus:outline-none -mr-6"
        >
          <ChevronRight size={30} />
        </button>
      </div>

      {/* Mobile Swipe Hint */}
      <p className="text-center text-gray-400 mt-4 text-sm md:hidden">← Swipe to explore →</p>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-[#0f172a]">
          <path d="M985.66 83.58C906.67 98.67 823.78 103.83 740 93.62 663.59 84.21 586.86 59.6 510 48.61 422.84 36.54 334.71 42.33 248 61.26c-70.88 15.39-141.75 38.63-212 45.62V0h1200v27.35C1100.14 54.73 1049.2 70.91 985.66 83.58z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Services;
