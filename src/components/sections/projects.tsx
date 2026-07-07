"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Project {
  title: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
  details: string[];
  image: string;
  color: string;
  icon: string;
}

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

export const Projects = ({
  showAll = false,
  title = "Featured Projects",
  description = "A selection of my recent work, ranging from AI applications to production-grade e-commerce platforms."
}: {
  showAll?: boolean;
  title?: string;
  description?: string;
}) => {
  const [flippedId, setFlippedId] = useState<number | null>(null);
  const router = useRouter();

  const allProjects: Project[] = [
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
    {
      title: "Avaline Luxury Jewellery",
      description:
        "A modern luxury jewellery e-commerce platform built with Next.js, featuring a custom ring builder, advanced diamond search, wishlist management, authentication, and a seamless premium shopping experience.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Tailwind CSS",
        "React Hook Form",
        "Framer Motion"
      ],
      live: "https://luxury-jewellery-e-commerce.vercel.app",
      github: "https://github.com/D1vyeshN/luxury-jewellery-e-commerce",
      details: [
        "Premium jewellery marketplace with engagement rings, wedding bands, necklaces, earrings, and bracelets",
        "Custom ring builder with configurable settings, diamond shapes, metal types, sizing, and engraving",
        "Advanced diamond search with filtering by carat, cut, color, clarity, certification, and price",
        "Shopping cart, wishlist, coupon support, and responsive checkout experience",
        "Authentication with user profiles, order history, address management, and personalized recommendations",
      ],
      image: "/images/avaline-luxury-jewellery.png",
      color: "from-amber-500/20 to-yellow-500/20",
      icon: "💎",
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
      title: "PokemonVerse",
      description:
        "An interactive Pokémon explorer built with React and GraphQL, featuring infinite scrolling, real-time search, detailed Pokémon information, and a fully responsive user experience powered by PokéAPI.",
      tech: [
        "React",
        "TypeScript",
        "GraphQL",
        "Tailwind CSS",
        "PokéAPI"
      ],
      live: "https://pokemon-verse.vercel.app/",
      github: "https://github.com/D1vyeshN/PokemonVerse",
      details: [
        "Built a responsive Pokédex application using GraphQL to efficiently fetch data from PokéAPI",
        "Implemented infinite scrolling for seamless browsing through the complete Pokémon collection",
        "Developed detailed Pokémon pages displaying stats, abilities, types, and evolution chains",
        "Added real-time search functionality for quick Pokémon discovery by name",
        "Integrated loading states to provide smooth user feedback during GraphQL data fetching"
      ],
      image: "/images/pokemonverse.png",
      color: "from-yellow-500/20 to-orange-500/20",
      icon: "⚡",
    },
    {
      title: "E-Commerce OnlineStore",
      description:
        "A full-stack e-commerce platform built with the MERN stack, featuring secure authentication, product management, shopping cart, Razorpay payments, and a comprehensive admin dashboard.",
      tech: [
        "React",
        "Redux",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Passport.js",
        "Razorpay"
      ],
      live: "https://online-store-ecommerce-dn.vercel.app/",
      github: "https://github.com/D1vyeshN/e-commerce",
      details: [
        "Developed a responsive e-commerce platform with product browsing, filtering, and detailed product pages",
        "Implemented secure authentication and authorization using Passport.js with separate user and admin roles",
        "Built shopping cart, address management, order history, and a seamless checkout flow with Razorpay payment integration",
        "Created a comprehensive admin dashboard for managing products, categories, brands, inventory, and customer orders",
        "Enabled user profile management with support for profile updates, addresses, and personalized account settings",
        "Designed scalable REST APIs using Node.js, Express.js, and MongoDB to power the complete application"
      ],
      image: "/images/ecommerce-store.png",
      color: "from-emerald-500/20 to-teal-500/20",
      icon: "🛒",
    },
    {
      title: "Developer Portfolio",
      description:
        "A modern interactive portfolio built with Next.js, showcasing projects, skills, and experience through immersive 3D visuals, smooth animations, and a fully responsive design.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "React Three Fiber",
        "Tailwind CSS",
        "Framer Motion",
        "EmailJS"
      ],
      live: "https://divyesh-nandanwar.vercel.app/",
      github: "https://github.com/D1vyeshN/portfolio",
      details: [
        "Designed a responsive portfolio with seamless navigation across desktop, tablet, and mobile devices",
        "Built an immersive landing experience with a loading screen that transitions after 3D assets are loaded",
        "Showcased featured projects with dedicated detail pages, live demos, and GitHub repository links",
        "Integrated EmailJS-powered contact form for direct communication without a custom backend",
        "Enhanced user experience with smooth page transitions and interactive animations using Framer Motion",
        "Utilized React Three Fiber to render interactive 3D models and create an engaging visual experience"
      ],
      image: "/images/portfolio.png",
      color: "from-cyan-500/20 to-blue-500/20",
      icon: "🌐",
    },
    {
      title: "YouTubeLite",
      description:
        "A responsive YouTube-inspired video streaming application built with React, featuring video browsing, search, category filtering, and a clean, modern user interface powered by the YouTube Data API.",
      tech: [
        "React",
        "JavaScript",
        "CSS3",
        "YouTube Data API",
        "React Router"
      ],
      live: "https://youtube-lite-clone-dn.vercel.app/",
      github: "https://github.com/D1vyeshN/YoutubeLite-CloneWebsite",
      details: [
        "Built a responsive YouTube-inspired interface with modern UI and smooth navigation",
        "Integrated YouTube Data API to fetch trending videos, search results, and channel information",
        "Implemented category-based video filtering and dynamic search functionality",
        "Created reusable React components for video cards, sidebar, navigation, and player pages",
        "Optimized user experience with responsive layouts across desktop, tablet, and mobile devices"
      ],
      image: "/images/youtubelite.png", // Update with your image path
      color: "from-red-500/20 to-rose-500/20",
      icon: "▶️",
    },
  ];

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section id="projects" className={showAll ? "pb-16 lg:pb-24" : `py-24 lg:py-32`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProjects.map((project, index) => (
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
                  <ul style={{ scrollbarWidth: 'thin', scrollbarColor: '#3b82f6 #1e293b' }} className="space-y-3 mb-6 overflow-y-auto">
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

        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mt-16"
          >
            <motion.button
              onClick={() => router.push("/projects")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider font-mono transition-all duration-300 cursor-pointer bg-muted/40 hover:bg-muted/80 text-muted-foreground hover:text-foreground border hover:border-blue-500/30`}
            >
              <GithubIcon className="w-3.5 h-3.5" /> View All Projects
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
