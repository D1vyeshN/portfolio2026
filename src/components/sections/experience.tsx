"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Sarvadhi Solutions",
    role: "Full Stack Developer",
    period: "March 2024 – January 2026",
    location: "Surat, Gujarat, India",
    description: [
      "Built and maintained user-facing and admin modules across e-commerce, LMS, and dashboard applications.",
      "Developed core features: product pages, cart, checkout, order management, and user profiles.",
      "Improved page load time using SSR/SSG, lazy loading, and code splitting, reducing bundle size by ~25%.",
      "Eliminated redundant API calls using RTK Query caching across shared modules.",
      "Led junior developer onboarding and code reviews; wrote technical documentation.",
    ],
  },
  {
    company: "Certbar Security",
    role: "Jr. Penetration Tester",
    period: "September 2021 – June 2022",
    location: "Surat, Gujarat, India",
    description: [
      "Performed web application penetration testing, identifying vulnerabilities such as SQLi and XSS based on OWASP Top 10 guidelines.",
      "Used Burp Suite, Nmap, Metasploit, and Kali Linux for reconnaissance and exploitation.",
      "Documented vulnerability findings and prepared assessment reports for clients.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A timeline of my professional journey in software development and
            cybersecurity.
          </p>
        </motion.div>

        <div className="relative border-l border-border ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-1.5 top-2 w-2.5 h-2.5 rounded-full bg-blue-500 animate-glow-pulse" />

              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                  <div className="space-y-1">
                    <h3 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />{" "}
                      {exp.role}
                    </h3>
                    <p className="text-lg font-medium text-muted-foreground">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground shrink-0">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />{" "}
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />{" "}
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
