"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

const projects = [
  {
    title: "NOVA — AI Voice Chat Application",
    description:
      "AI voice chat app with speech-to-text, LLM-based responses, and a two-phase tool-calling system for dynamic web search queries. Features real-time streaming and PWA support.",
    tech: ["Next.js", "TypeScript", "LLM APIs", "PWA"],
    live: "https://aichatbydivyesh.vercel.app",
    github: "#",
    details: [
      "Real-time streaming for instant responses",
      "PWA installable across devices",
      "34% bundle reduction via dynamic imports",
      "Two-phase tool-calling for dynamic web search",
    ],
    image: "/project-nova.jpg",
    color: "from-blue-500/20 to-purple-500/20",
    icon: "💬",
  },
  {
    title: "E-commerce Platform (Jewelry Domain)",
    description:
      "Production-grade jewelry e-commerce platform with a dynamic banner system, reusable UI components, and optimized rendering for large datasets.",
    tech: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "Node.js", "PostgreSQL"],
    live: "#",
    github: "#",
    details: [
      "Dynamic banner system from admin panel",
      "Reusable UI components for product config",
      "Optimized rendering for large datasets",
      "Redux Toolkit state management",
    ],
    image: "/project-ecommerce.jpg",
    color: "from-emerald-500/20 to-teal-500/20",
    icon: "💍",
  },
  {
    title: "Manufacturing Backend System",
    description:
      "Full stack backend for a manufacturing project — built REST APIs, designed PostgreSQL data models, and handled business logic end-to-end.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "Sequelize"],
    live: "#",
    github: "#",
    details: [
      "REST API design with Express.js",
      "PostgreSQL database modeling",
      "Sequelize ORM integration",
      "End-to-end business logic handling",
    ],
    image: "/project-manufacturing.jpg",
    color: "from-orange-500/20 to-red-500/20",
    icon: "🏭",
  },
];

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
    transition: { staggerChildren: 0.15 },
  },
};

export const Projects = () => {
  const [flippedId, setFlippedId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work, ranging from AI applications to
            production-grade e-commerce platforms.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group h-[420px] perspective-1000"
              onMouseEnter={() => setFlippedId(index)}
              onMouseLeave={() => setFlippedId(null)}
            >
              <motion.div
                className="relative w-full h-full transition-none"
                style={{ transformStyle: "preserve-3d" }}
                // animate={{
                //   rotateY: flippedId === index ? 180 : 0,
                // }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              >
                {/* Front of card */}
                <div
                  className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden bg-card border border-border hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`} />
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                      <Layers size={48} className="text-foreground/20" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs rounded-full bg-muted text-muted-foreground border border-border group-hover:border-blue-500/20 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GithubIcon size={16} /> GitHub
                      </a>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div
                  className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-card border border-blue-500/30 shadow-2xl shadow-blue-500/10 p-6 flex flex-col justify-center"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <h3 className="text-xl font-bold mb-4 text-center">
                    {project.title}
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center gap-4">
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="inline-flex items-center gap-1.5">
                          <ExternalLink size={14} /> Live Demo
                        </span>
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2.5 rounded-lg bg-card border border-border text-sm font-semibold hover:border-blue-500/30 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        <GithubIcon size={14} /> GitHub
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
