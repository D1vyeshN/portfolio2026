"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import Image from "next/image";

const projects = [
  {
    title: "NOVA — AI Voice Chat",
    description:
      "Advanced AI voice assistant built with Next.js, featuring real-time speech recognition, intelligent web-enhanced conversations, streaming responses, and production-grade performance optimization.",
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Ant Design",
      "Groq LLaMA",
      "Whisper",
      "Tavily"
    ],
    live: "https://aichatbydivyesh.vercel.app",
    github: "https://github.com/D1vyeshN/Nova-AI-Chat",
    details: [
      "Developed end-to-end voice AI workflow with STT, LLM, and TTS integration",
      "Implemented intelligent tool-calling system with automated web search capabilities",
      "Built real-time streaming chat experience with dynamic status indicators",
      "Optimized application performance with lazy loading and code splitting",
      "Secured external API integrations through server-side Next.js routes",
      "Enabled Progressive Web App (PWA) support for native-like mobile experience"
    ],
    image: "/images/nova-ai-image.png",
    color: "from-fuchsia-500/20 to-violet-500/20",
    icon: "🚀",
  },
  // {
  //   title: "NOVA — AI Voice Chat Application",
  //   description:
  //     "AI voice chat app with speech-to-text, LLM-based responses, and a two-phase tool-calling system for dynamic web search queries. Features real-time streaming and PWA support.",
  //   tech: ["Next.js", "TypeScript", "LLM APIs", "PWA"],
  //   live: "https://aichatbydivyesh.vercel.app",
  //   github: "#",
  //   details: [
  //     "Real-time streaming for instant responses",
  //     "PWA installable across devices",
  //     "34% bundle reduction via dynamic imports",
  //     "Two-phase tool-calling for dynamic web search",
  //   ],
  //   image: "/images/nova-ai-image.png",
  //   color: "from-blue-500/20 to-purple-500/20",
  //   icon: "💬",
  // },
  // {
  //   title: "E-commerce (Jewelry)",
  //   description:
  //     "Production-grade jewelry e-commerce platform with a dynamic banner system, reusable UI components, and optimized rendering for large datasets.",
  //   tech: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "Node.js", "PostgreSQL"],
  //   live: "#",
  //   github: "#",
  //   details: [
  //     "Dynamic banner system from admin panel",
  //     "Reusable UI components for product config",
  //     "Optimized rendering for large datasets",
  //     "Redux Toolkit state management",
  //   ],
  //   image: "/images/nova-ai-image.png",
  //   color: "from-emerald-500/20 to-teal-500/20",
  //   icon: "💍",
  // },
  {
    title: "Real-Time Chat Application",
    description:
      "Production-ready real-time chat platform with instant messaging, room management, JWT authentication, and live user presence powered by Socket.IO.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "JWT"
    ],
    live: "https://chat-app-socket-mern.vercel.app",
    github: "https://github.com/D1vyeshN/chat-app",
    details: [
      "Real-time messaging with Socket.IO",
      "Group chats and 1-to-1 conversations",
      "Message status tracking (sent, delivered, read)",
      "Typing indicators and online presence",
      "Message editing and deletion",
      "JWT authentication with secure password hashing"
    ],
    image: "/images/chat-app-image.png",
    color: "from-sky-500/20 to-indigo-500/20",
    icon: "💬",
  },
  {
    title: "TalentHub",
    description:
      "A modern job marketplace platform built with the MERN stack, connecting candidates and recruiters through intelligent job discovery, application tracking, real-time communication, and analytics dashboards.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "MongoDB",
      "Express.js"
    ],
    live: "https://talent-hub-job-portal-app.vercel.app",
    github: "https://github.com/D1vyeshN/talent-hub",
    details: [
      "Role-based platform for Candidates, Recruiters, and Admin",
      "Advanced job search, filtering, and application tracking",
      "Recruiter dashboard with hiring funnel",
      "Company profiles and job management",
      "Real-time messaging system between recruiters and candidates",
      "Responsive UI built with Next.js, Redux Toolkit, and Tailwind CSS"
    ],
    image: "/images/talent-hub-image.png",
    color: "from-blue-500/20 to-cyan-500/20",
    icon: "💼",
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
              className="group h-[440px] perspective-1000"
              onMouseEnter={() => setFlippedId(index)}
              onMouseLeave={() => setFlippedId(null)}
            >
              <motion.div
                className="relative w-full h-full transition-none"
                style={{ transformStyle: "preserve-3d" }}
                animate={{
                  rotateY: flippedId === index ? 180 : 0,
                }}
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
                      {/* <Layers size={48} className="text-foreground/20" /> */}
                      <Image src={project.image} alt={project.title} width={400} height={400} />
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <motion.button
            onClick={() => window.open("https://github.com/D1vyeshN", "_blank")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider font-mono transition-all duration-300 cursor-pointer bg-muted/40 hover:bg-muted/80 text-muted-foreground hover:text-foreground border hover:border-blue-500/30`}
          >
            <GithubIcon className="w-3.5 h-3.5" /> View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
