"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, Github, Linkedin, Download, ExternalLink } from "lucide-react";
import Navbar from "./Navbar";
import { MorphingText } from "@/components/magicui/morphing-text";

const texts = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Frontend Developer",
  "Web Developer",
  "React.js Developer",
  "JavaScript Developer",
  "Node.js Developer",
  "UI/UX Enthusiast",
];

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Particle animation variants
  const particleVariants = {
    animate: (custom) => ({
      y: [0, -20, 0, 15, 0],
      x: [0, 10, 0, -5, 0],
      rotate: [0, 180, 360],
      scale: [1, 1.1, 1, 0.9, 1],
      transition: {
        duration: custom.duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: custom.delay,
      },
    }),
  };

  const floatingIconVariants = {
    animate: {
      y: [-8, 8, -8],
      rotate: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-amber-50 dark:from-slate-950 dark:via-slate-900 dark:to-amber-950 relative overflow-hidden pt-16 lg:pt-24 px-4">
        {/* Background Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Small floating dots */}
          <motion.div
            className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400/60 rounded-full"
            variants={particleVariants}
            animate="animate"
            custom={{ duration: 4, delay: 0 }}
          />
          <motion.div
            className="absolute top-1/3 right-60 w-3 h-3 bg-amber-500/70 rounded-full"
            variants={particleVariants}
            animate="animate"
            custom={{ duration: 5, delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 right-96 w-3 h-3 bg-green-300/40 rounded-full"
            variants={particleVariants}
            animate="animate"
            custom={{ duration: 5, delay: 1 }}
          />
          <motion.div
            className="absolute top-2/4 left-1/4 w-2 h-2 bg-lime-400/60 rounded-full"
            variants={particleVariants}
            animate="animate"
            custom={{ duration: 3.5, delay: 2 }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/6 w-3 h-3 bg-red-400/70 rounded-full"
            variants={particleVariants}
            animate="animate"
            custom={{ duration: 4.5, delay: 0.5 }}
          />
          <motion.div
            className="absolute top-3/4 left-1/3 w-2 h-2 bg-purple-400/60 rounded-full"
            variants={particleVariants}
            animate="animate"
            custom={{ duration: 3, delay: 1.5 }}
          />
          <motion.div
            className="absolute top-1/6 right-1/3 w-2 h-2 bg-green-400/60 rounded-full"
            variants={particleVariants}
            animate="animate"
            custom={{ duration: 6, delay: 2.5 }}
          />

          {/* Larger floating elements */}
          <motion.div
            className="absolute top-1/4 left-12 md:left-60 w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-sm"
            variants={floatingIconVariants}
            animate="animate"
          >
            JS
          </motion.div>

          <motion.div
            className="absolute bottom-20 right-6 md:right-30 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg flex items-center justify-center"
            animate={{
              y: [0, -25, 0],
              rotate: [0, 15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <Code className="w-4 h-4 text-white" />
          </motion.div>

          <motion.div
            className="absolute top-1/2 right-8 md:right-30 w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg"
            animate={{
              x: [0, 15, 0],
              y: [0, -10, 0],
              opacity: [0.6, 1, 0.6],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          <motion.div
            className="absolute top-60 right-8 md:left-30 w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg"
            animate={{
              x: [0, -12, 0],
              y: [0, 18, 0],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          {/* Additional decorative elements */}
          <motion.div
            className="absolute bottom-1/6 left-40 w-4 h-4 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full opacity-70"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.8,
            }}
          />
        </div>

        <div className="w-full max-w-4xl text-center z-10">
          <motion.div
            className="flex flex-col items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              className="flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm font-medium mb-4"
              variants={itemVariants}
            >
              <Code className="w-4 h-4" />
              Available for Work
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-snug mb-4"
              variants={itemVariants}
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-500">
                Rathinakumar
              </span>
              <div className="flex">
                <MorphingText texts={texts} />
              </div>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl"
              variants={itemVariants}
            >
              Mainly working in the JavaScript ecosystem, I’m a dedicated
              problem-solver who thrives on learning and building.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={itemVariants}
            >
              <a
                href="../assets/Rathinakumar_MERN_Dev.pdf"
                download="Rathinakumar_MERN_Dev.pdf"
                target="_blank" 
              >
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white cursor-pointer px-6 py-3 rounded-full shadow-md"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Download My Resume
                </Button>
              </a>

              <a
                href="https://github.com/rathinakumar-dev"
                target="_blank" 
                className="w-11 h-11 flex items-center justify-center rounded-full border shadow-md hover:text-orange-500 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/rathina-kumar"
                target="_blank" 
                className="w-11 h-11 flex items-center justify-center rounded-full border shadow-md hover:text-blue-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
