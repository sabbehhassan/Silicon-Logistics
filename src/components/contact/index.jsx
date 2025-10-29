/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Truck } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const serviceID = "service_50fkpn3";
    const templateID = "template_hem2j5f";
    const publicKey = "2z_M1DY7NNdkOUE42";

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
        setStatus("✅ Message sent successfully!");
        setLoading(false);
        form.current.reset();
      })
      .catch(() => {
        setStatus("❌ Failed to send message. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-24 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1),transparent_70%)]"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Get in <span className="text-sky-400">Touch</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-md leading-relaxed">
                Have questions or want to partner with us? We’d love to hear from you! 
                Reach out using the details below or fill out the form.
              </p>
            </div>

            <div className="space-y-5 pt-4">
              <div className="flex items-center gap-4 text-lg">
                <Phone className="text-sky-400" />
                <span>(813) 421-3038</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <Mail className="text-sky-400" />
                <span>siliconlogistics110@gmail.com</span>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-base">
              Our team is available Monday through Saturday, 9 AM – 6 PM.
              We respond quickly and ensure smooth communication with our partners.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScrKulaAE0SiHkPNFIU5awwryo70QeZXBTrOVtEgfGSEUOQpg/viewform?usp=pp_url"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-linear-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all"
              >
                <Truck size={20} className="group-hover:rotate-12 transition" />
                Become a Carrier Partner
              </a>
              <p className="text-sm text-gray-400 mt-2">
                Carriers can reach us directly by filling this quick form.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#1e293b]/60 backdrop-blur-sm p-8 rounded-2xl border border-sky-900/40 shadow-lg"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 rounded-lg bg-[#0f172a]/60 border border-sky-800 text-gray-200 focus:border-sky-400 outline-none transition"
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 rounded-lg bg-[#0f172a]/60 border border-sky-800 text-gray-200 focus:border-sky-400 outline-none transition"
                />
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full p-3 rounded-lg bg-[#0f172a]/60 border border-sky-800 text-gray-200 focus:border-sky-400 outline-none transition"
              ></textarea>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 20px rgba(56,189,248,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                disabled={loading}
                className={`flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all w-full sm:w-auto mx-auto ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                <Send size={18} />
                {loading ? "Sending..." : "Send Message"}
              </motion.button>

              {status && (
                <p
                  className={`text-center text-sm mt-2 ${
                    status.includes("✅") ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
