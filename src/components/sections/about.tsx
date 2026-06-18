"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, GraduationCap, Mail } from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square max-w-md mx-auto lg:mx-0 w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl rotate-3 -z-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl -rotate-3 -z-10" />
            <div className="w-full h-full bg-card rounded-3xl flex items-center justify-center border border-border overflow-hidden">
              <div className="flex flex-col items-center gap-4 text-muted-foreground">
                {/* <User size={64} className="text-blue-500/50" /> */}
                <Image src="/images/profile-image.png" alt="Profile Photo" width={700} height={700} />
                {/* <span className="font-medium">Profile Photo</span> */}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              About Me
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="space-y-4 text-muted-foreground text-lg leading-relaxed"
            >
              <p>
                I am a Full Stack Developer with 2+ years of professional
                experience building scalable, user-focused web applications. I
                specialize in React.js, Next.js, and Node.js, and I am
                comfortable owning features across the entire stack.
              </p>
              <p>
                My background in penetration testing gives me a unique
                security-aware mindset, which I apply to writing secure
                frontend and backend code. I take performance seriously and enjoy
                optimizing applications for speed and accessibility.
              </p>
              <p>
                Currently, I am exploring AI-integrated projects and LLM
                workflows, always looking for ways to leverage new technologies
                to solve complex problems.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4 pt-8"
            >
              {[
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Surat, Gujarat, India",
                },
                { icon: Clock, label: "Experience", value: "2+ Years" },
                {
                  icon: GraduationCap,
                  label: "Education",
                  value: "B.E. Computer Engineering",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "divyesh21j91@gmail.com",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                    <item.icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-foreground text-sm">
                      {item.label}
                    </h4>
                    <p className="text-sm text-muted-foreground truncate">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
