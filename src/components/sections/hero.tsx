"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { TypeWriter } from "@/components/ui/typewriter";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-[100px] animate-float-1" />
        <div className="absolute bottom-[20%] right-[5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-[120px] animate-float-2" />
        <div className="absolute top-[40%] left-[50%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-pink-500/10 dark:bg-pink-400/10 rounded-full blur-[100px] animate-float-3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-300 text-sm font-medium mb-6 border border-blue-500/20 dark:border-blue-400/20">
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            Hi, I&apos;m{" "}
            <span className="animate-gradient-text">
              Divyesh Nandanwar
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground">
              {/* I am a{` `} */}
              <TypeWriter
                strings={[
                  "Building products people love.",
                  "Creating fast, scalable web applications.",
                  "Transforming ideas into digital experiences.",
                  "Engineering solutions that make an impact.",
                ]}
                speed={100}
                deleteSpeed={50}
                delay={2500}
              />
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Full Stack Developer specializing in building scalable,
            user-focused web applications with React, Next.js, and Node.js.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25"
            >
              View My Work <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href={process.env.NEXT_PUBLIC_RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-card text-foreground font-semibold rounded-xl border border-border hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all"
            >
              Resume
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-16 mt-4 sm:mb-0 sm:mt-12 flex justify-center space-x-4"
          >
            <motion.a
              href="https://github.com/D1vyeshN"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl border border-border bg-card hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/divyesh-nandanwar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl border border-border bg-card hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute -bottom-0 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};
