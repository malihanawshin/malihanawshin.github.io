"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Lottie from "lottie-react";

// Import your Lottie JSON
import rippleAnimation from "../public/animations/ripple.json";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden text-white"
    >
      {/* Lottie Background
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none flex items-center justify-center">
        <div className="w-full h-full">
          <Lottie
            animationData={rippleAnimation}
            loop={true}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div> */}

      {/* <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none flex items-center justify-center"
        style={{
          backgroundImage: "url('/background2.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      </div> */}


      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,255,0.1),transparent_60%)] animate-pulse z-10" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-center px-6"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Hi, I’m <span className="text-white">Maliha!</span>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl mt-2 font-light text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Typewriter
            options={{
              strings: ["Software Engineer, Fullstack Developer, iOS App Developer, AI Enthusiast"],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </motion.h2>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <button
            onClick={() => handleScroll("contact")}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transform transition duration-300 shadow-lg shadow-cyan-500/30"
          >
            Hire Me
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className="px-6 py-3 rounded-full border border-gray-500 hover:bg-gray-800 hover:scale-105 transition duration-300"
          >
            View Projects
          </button>
        </motion.div>
      </motion.div>

      {/* Floating Glow Orb */}
      <motion.div
        className="absolute bottom-20 right-1/3 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-pulse z-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
    </section>
  );
}
