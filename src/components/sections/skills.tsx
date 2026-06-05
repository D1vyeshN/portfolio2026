"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Code2,
  Globe,
  Shield,
  Terminal,
  Cpu,
  Zap,
  Gauge,
  Layers,
  FolderInput,
  Monitor,
  Server,
  KeyRound,
  Box,
  FlaskConical,
} from "lucide-react";

interface Tech {
  name: string;
  type: string;
  category: "frontend" | "backend" | "security-tools" | "performance";
  tooltip: string;
  iconType: "skillicon" | "custom-simpleicon" | "lucide";
  iconName: string;
  tags: string[];
}

const technologies: Tech[] = [
  // ── Frontend ──────────────────────────────────────────────────────────────
  {
    name: "React.js",
    type: "Library",
    category: "frontend",
    tooltip: "Component-based UI library powering modern SPAs",
    iconType: "skillicon",
    iconName: "react",
    tags: ["Hooks", "Context", "SPA"],
  },
  {
    name: "Next.js",
    type: "Framework",
    category: "frontend",
    tooltip: "Production React framework with App Router & RSC",
    iconType: "skillicon",
    iconName: "nextjs",
    tags: ["App Router", "SSR", "Server Actions"],
  },
  {
    name: "TypeScript",
    type: "Language",
    category: "frontend",
    tooltip: "Type-safe JavaScript superset — industry standard",
    iconType: "skillicon",
    iconName: "ts",
    tags: ["Generics", "Types", "Interfaces"],
  },
  {
    name: "JavaScript",
    type: "Language",
    category: "frontend",
    tooltip: "Dynamic scripting language of the web",
    iconType: "skillicon",
    iconName: "js",
    tags: ["ES2024", "Async/Await", "Closures"],
  },
  {
    name: "Tailwind CSS",
    type: "Styling",
    category: "frontend",
    tooltip: "Utility-first CSS framework — most demanded in 2026",
    iconType: "skillicon",
    iconName: "tailwind",
    tags: ["Responsive", "Dark Mode", "JIT"],
  },
  {
    name: "Redux Toolkit",
    type: "State",
    category: "frontend",
    tooltip: "Modern Redux with RTK Query for API state",
    iconType: "skillicon",
    iconName: "redux",
    tags: ["Slices", "RTK Query", "Thunks"],
  },
  {
    name: "Ant Design",
    type: "UI Library",
    category: "frontend",
    tooltip: "Enterprise-grade React UI component library",
    iconType: "custom-simpleicon",
    iconName: "antdesign",
    tags: ["Components", "Forms", "Tables"],
  },
  {
    name: "HTML5",
    type: "Markup",
    category: "frontend",
    tooltip: "Semantic document structure for accessibility & SEO",
    iconType: "skillicon",
    iconName: "html",
    tags: ["Semantic", "SEO", "a11y"],
  },
  {
    name: "CSS3",
    type: "Styling",
    category: "frontend",
    tooltip: "Modern styles — animations, custom properties & layout",
    iconType: "skillicon",
    iconName: "css",
    tags: ["Flexbox", "Grid", "Animations"],
  },
  {
    name: "shadcn/ui",
    type: "UI Library",
    category: "frontend",
    tooltip: "Radix-based, accessible & beautifully styled components",
    iconType: "custom-simpleicon",
    iconName: "shadcnui",
    tags: ["Radix UI", "Accessible", "Composable"],
  },
  {
    name: "Framer Motion",
    type: "Animation",
    category: "frontend",
    tooltip: "Production-ready motion library for React",
    iconType: "custom-simpleicon",
    iconName: "framer",
    tags: ["Animations", "Gestures", "Layout"],
  },

  // ── Backend ────────────────────────────────────────────────────────────────
  {
    name: "Node.js",
    type: "Runtime",
    category: "backend",
    tooltip: "High-performance JavaScript server runtime",
    iconType: "skillicon",
    iconName: "nodejs",
    tags: ["Event Loop", "Streams", "APIs"],
  },
  {
    name: "Express.js",
    type: "Framework",
    category: "backend",
    tooltip: "Minimalist, unopinionated web framework for Node",
    iconType: "skillicon",
    iconName: "express",
    tags: ["Routing", "Middleware", "REST"],
  },
  // {
  //   name: "Python",
  //   type: "Language",
  //   category: "backend",
  //   tooltip: "Go-to language for scripting, automation & AI/ML",
  //   iconType: "skillicon",
  //   iconName: "python",
  //   tags: ["Scripting", "FastAPI", "Automation"],
  // },
  // {
  //   name: "PostgreSQL",
  //   type: "Database",
  //   category: "backend",
  //   tooltip: "Battle-tested relational database — most demanded DB in 2026",
  //   iconType: "skillicon",
  //   iconName: "postgresql",
  //   tags: ["SQL", "Joins", "Indexing"],
  // },
  {
    name: "MongoDB",
    type: "Database",
    category: "backend",
    tooltip: "Flexible NoSQL document database",
    iconType: "skillicon",
    iconName: "mongodb",
    tags: ["NoSQL", "Aggregation", "Atlas"],
  },
  // {
  //   name: "Prisma",
  //   type: "ORM",
  //   category: "backend",
  //   tooltip: "Next-gen type-safe ORM for Node & TypeScript",
  //   iconType: "skillicon",
  //   iconName: "prisma",
  //   tags: ["Schema", "Migrations", "Type-Safe"],
  // },
  {
    name: "REST API",
    type: "API Design",
    category: "backend",
    tooltip: "Stateless client-server architecture standard",
    iconType: "lucide",
    iconName: "Globe",
    tags: ["HTTP", "JSON", "OpenAPI"],
  },
  // {
  //   name: "GraphQL",
  //   type: "API",
  //   category: "backend",
  //   tooltip: "Efficient, flexible query language for APIs",
  //   iconType: "skillicon",
  //   iconName: "graphql",
  //   tags: ["Queries", "Mutations", "Schema"],
  // },
  {
    name: "JWT & OAuth",
    type: "Auth",
    category: "backend",
    tooltip: "Secure modern authentication & authorization patterns",
    iconType: "lucide",
    iconName: "KeyRound",
    tags: ["Tokens", "OAuth 2.0", "Sessions"],
  },

  // ── Tools & Security ───────────────────────────────────────────────────────
  {
    name: "Jest",
    type: "Testing",
    category: "security-tools",
    tooltip: "Delightful JavaScript testing framework by Meta",
    iconType: "skillicon",
    iconName: "jest",
    tags: ["Unit Tests", "Mocking", "Snapshots"],
  },
  {
    name: "React Testing Library",
    type: "Testing",
    category: "security-tools",
    tooltip: "Test React components the way users interact with them",
    iconType: "custom-simpleicon",
    iconName: "testinglibrary",
    tags: ["DOM", "User Events", "RTL"],
  },
  {
    name: "Supertest",
    type: "API Testing",
    category: "security-tools",
    tooltip: "HTTP assertions for Node.js API integration testing",
    iconType: "lucide",
    iconName: "FlaskConical",
    tags: ["Integration", "HTTP", "Node APIs"],
  },
  {
    name: "Docker",
    type: "Containerization",
    category: "security-tools",
    tooltip: "Industry-standard container platform for dev & prod",
    iconType: "skillicon",
    iconName: "docker",
    tags: ["Containers", "Images", "Compose"],
  },
  {
    name: "GitHub Actions",
    type: "CI/CD",
    category: "security-tools",
    tooltip: "Automate build, test & deploy pipelines",
    iconType: "skillicon",
    iconName: "githubactions",
    tags: ["Workflows", "CI/CD", "DevSecOps"],
  },
  {
    name: "Git",
    type: "Version Control",
    category: "security-tools",
    tooltip: "Distributed version control & collaboration",
    iconType: "skillicon",
    iconName: "git",
    tags: ["Branching", "Merge", "Rebase"],
  },
  {
    name: "Postman",
    type: "API Tool",
    category: "security-tools",
    tooltip: "API client for testing, mocking & documentation",
    iconType: "skillicon",
    iconName: "postman",
    tags: ["Testing", "Collections", "Mocking"],
  },
  {
    name: "Vercel",
    type: "Deployment",
    category: "security-tools",
    tooltip: "Serverless edge deployment for frontend apps",
    iconType: "skillicon",
    iconName: "vercel",
    tags: ["CI/CD", "Serverless", "Edge"],
  },
  {
    name: "OWASP Top 10",
    type: "Security",
    category: "security-tools",
    tooltip: "Critical web application security risk awareness",
    iconType: "lucide",
    iconName: "Shield",
    tags: ["XSS", "SQLi", "CSRF"],
  },
  {
    name: "Burp Suite",
    type: "Security Tool",
    category: "security-tools",
    tooltip: "Professional web application security testing",
    iconType: "lucide",
    iconName: "Terminal",
    tags: ["Proxy", "Scanner", "Fuzzing"],
  },
  {
    name: "Penetration Testing",
    type: "Security",
    category: "security-tools",
    tooltip: "Ethical hacking to identify and fix vulnerabilities",
    iconType: "lucide",
    iconName: "Cpu",
    tags: ["Recon", "Exploitation", "API Audit"],
  },

  // ── Performance ────────────────────────────────────────────────────────────
  {
    name: "SSR & SSG",
    type: "Rendering",
    category: "performance",
    tooltip: "Server-side rendering & static generation for fast TTI",
    iconType: "lucide",
    iconName: "Zap",
    tags: ["Static", "Dynamic", "Hydration"],
  },
  {
    name: "Core Web Vitals",
    type: "Metrics",
    category: "performance",
    tooltip: "Google's LCP, FID, CLS metrics for UX quality",
    iconType: "lucide",
    iconName: "Gauge",
    tags: ["LCP", "CLS", "INP"],
  },
  {
    name: "Code Splitting",
    type: "Optimization",
    category: "performance",
    tooltip: "Break bundles into smaller on-demand chunks",
    iconType: "lucide",
    iconName: "Layers",
    tags: ["Bundles", "Webpack", "Speed"],
  },
  {
    name: "Lazy Loading",
    type: "Optimization",
    category: "performance",
    tooltip: "Defer non-critical assets to reduce initial load",
    iconType: "lucide",
    iconName: "FolderInput",
    tags: ["Images", "React.lazy", "Vitals"],
  },
  {
    name: "AI / LLM APIs",
    type: "AI Integration",
    category: "performance",
    tooltip: "Integrate OpenAI, Gemini & LangChain into apps",
    iconType: "custom-simpleicon",
    iconName: "openai",
    tags: ["OpenAI", "Gemini", "LangChain"],
  },
];

const lucideIconMap: Record<string, React.ComponentType<any>> = {
  Globe,
  Shield,
  Terminal,
  Cpu,
  Zap,
  Gauge,
  Layers,
  FolderInput,
  KeyRound,
  Box,
  FlaskConical,
  Code2,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const itemVariants:Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

// Custom Counter Component for Stats Bar
const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime = performance.now();
    const duration = 1500; // ms

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * value);
      
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

interface TechIconProps {
  type: "skillicon" | "custom-simpleicon" | "lucide";
  name: string;
  theme: string;
}

const TechIcon = ({ type, name, theme }: TechIconProps) => {
  const iconTheme = theme === "light" ? "light" : "dark";

  if (type === "skillicon") {
    return (
      <div className="relative w-10 h-10 shrink-0">
        {/* Ambient colored halo glow on hover */}
        <div className="absolute inset-0 rounded-xl bg-blue-500/15 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <img
          src={`https://skillicons.dev/icons?i=${name}&theme=${iconTheme}`}
          alt=""
          className="relative z-10 w-10 h-10 object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    );
  }

  if (type === "custom-simpleicon") {
    return (
      <div className="relative w-10 h-10 rounded-xl bg-white border border-neutral-200 dark:bg-[#1d1d1f] dark:border-neutral-800 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm">
        {/* Ambient colored halo glow on hover */}
        <div className="absolute inset-0 rounded-xl bg-red-500/10 dark:bg-red-500/15 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <img
          src={`https://cdn.jsdelivr.net/npm/simple-icons@11.10.0/icons/${name}.svg`}
          alt=""
          className="relative z-10 w-5 h-5 object-contain dark:invert opacity-90"
          loading="lazy"
        />
      </div>
    );
  }

  const IconComponent = lucideIconMap[name] || Code2;
  return (
    <div className="relative w-10 h-10 rounded-xl bg-white border border-neutral-200 dark:bg-[#1d1d1f] dark:border-neutral-800 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm">
      {/* Ambient colored halo glow on hover */}
      <div className="absolute inset-0 rounded-xl bg-blue-500/10 dark:bg-blue-500/15 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <IconComponent className="relative z-10 w-5 h-5 text-blue-600 dark:text-blue-400" />
    </div>
  );
};

interface TechCardProps {
  name: string;
  type: string;
  tooltip: string;
  iconType: "skillicon" | "custom-simpleicon" | "lucide";
  iconName: string;
  tags: string[];
  theme: string;
}

const TechCard = ({ name, type, tooltip, iconType, iconName, tags, theme }: TechCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mouse-x", `${x}%`);
    card.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 450, damping: 25 }}
      className="group relative flex flex-col p-6 rounded-2xl bg-card border border-border/70 hover:border-blue-500/20 hover:shadow-[0_15px_35px_-10px_rgba(59,130,246,0.06)] transition-all duration-350 cursor-default overflow-hidden"
    >
      {/* Magnetic spotlight tracking gradient inside the card */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: "radial-gradient(200px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.05), transparent 60%)"
        }}
      />
      
      {/* Pure CSS slide-in tooltip */}
      <div className="absolute bottom-[calc(100%+12px)] left-1/2 -translate-x-1/2 translate-y-2 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-30 bg-slate-950/90 dark:bg-slate-900/95 border border-border/70 text-slate-100 text-xs px-3 py-1.5 rounded-lg shadow-xl backdrop-blur-sm whitespace-nowrap">
        {tooltip}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-950/90 dark:border-t-slate-900/95" />
      </div>

      <div className="flex items-center gap-4 mb-4 relative z-10">
        <TechIcon type={iconType} name={iconName} theme={theme} />
        <div className="min-w-0">
          <h3 className="text-[15px] font-bold text-foreground/90 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-250 truncate">
            {name}
          </h3>
          <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider font-mono">
            {type}
          </span>
        </div>
      </div>

      {/* Description tag badges */}
      <div className="flex flex-wrap gap-1.5 mt-auto relative z-10">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[10px] rounded bg-muted/60 text-muted-foreground border border-transparent group-hover:border-border/60 transition-colors duration-300 font-mono font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("frontend");
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme = mounted ? resolvedTheme || "dark" : "dark";

  // Category specifications map
  const categories = [
    { id: "all", label: "All Stack", icon: Layers },
    { id: "frontend", label: "Frontend", icon: Monitor },
    { id: "backend", label: "Backend", icon: Server },
    { id: "security-tools", label: "Tools & Security", icon: Shield },
    { id: "performance", label: "Performance", icon: Zap },
  ];

  // Filtering technology stack based on active category tab selection
  const filteredTechnologies = activeCategory === "all"
    ? technologies
    : technologies.filter(tech => tech.category === activeCategory);

  return (
    <section id="skills" className="py-24 lg:py-32 relative bg-background overflow-hidden">
      {/* Background radial orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[15%] left-[5%] w-[45vw] h-[45vw] max-w-[500px] bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[40vw] h-[40vw] max-w-[450px] bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-300 text-xs font-semibold mb-6 border border-blue-500/20 dark:border-blue-400/20 font-mono tracking-wider uppercase">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            Tech Stack
          </div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-foreground"
          >
            Skills &amp; Technologies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto"
          >
            A curated collection of tools, frameworks, and technologies I use to build modern, secure, and scalable digital experiences.
          </motion.p>
        </div>

        {/* Specifications Filter Tab Bar */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap px-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider font-mono transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.12)]"
                    : "bg-muted/40 hover:bg-muted/80 text-muted-foreground hover:text-foreground border border-transparent"
                }`}
              >
                {/* 📌 Pin badge on active tab */}
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      key="pin"
                      initial={{ opacity: 0, scale: 0, rotate: -45, y: -4, x: 4 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0, y: -8, x: 8 }}
                      exit={{ opacity: 0, scale: 0, rotate: 45, y: -4, x: 4 }}
                      transition={{ type: "spring", stiffness: 500, damping: 18 }}
                      className="absolute -top-0 -right-0 text-sm select-none"
                      style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.25))" }}
                    >
                      📌
                    </motion.span>
                  )}
                </AnimatePresence>

                <Icon className="w-3.5 h-3.5" />
                {cat.label}
              </motion.button>
            );
          })}
        </div>

        {/* Flat Grid with animations keyed to filter state to trigger layout stagger shifts */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          >
            {filteredTechnologies.map((tech) => (
              <TechCard
                key={tech.name}
                name={tech.name}
                type={tech.type}
                tooltip={tech.tooltip}
                iconType={tech.iconType}
                iconName={tech.iconName}
                tags={tech.tags}
                theme={activeTheme}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats Bar */}
        {/* <div className="flex justify-center md:justify-around gap-8 flex-wrap mt-16 p-8 bg-card border border-border/80 rounded-2xl shadow-xl shadow-blue-500/2 backdrop-blur-md">
          <div className="text-center min-w-[120px]">
            <div className="text-3xl md:text-4xl font-extrabold text-blue-500 dark:text-blue-400 font-mono tracking-tight">
              <Counter value={25} />
            </div>
            <div className="text-xs font-semibold text-muted-foreground mt-1 uppercase tracking-wider font-mono">
              Technologies
            </div>
          </div>
          
          <div className="hidden md:block w-px bg-border/60 self-stretch" />
          
          <div className="text-center min-w-[120px]">
            <div className="text-3xl md:text-4xl font-extrabold text-blue-500 dark:text-blue-400 font-mono tracking-tight">
              <Counter value={2} suffix="+" />
            </div>
            <div className="text-xs font-semibold text-muted-foreground mt-1 uppercase tracking-wider font-mono">
              Years Experience
            </div>
          </div>

          <div className="hidden md:block w-px bg-border/60 self-stretch" />

          <div className="text-center min-w-[120px]">
            <div className="text-3xl md:text-4xl font-extrabold text-blue-500 dark:text-blue-400 font-mono tracking-tight">
              <Counter value={15} suffix="+" />
            </div>
            <div className="text-xs font-semibold text-muted-foreground mt-1 uppercase tracking-wider font-mono">
              Projects Delivered
            </div>
          </div>

          <div className="hidden md:block w-px bg-border/60 self-stretch" />

          <div className="text-center min-w-[120px]">
            <div className="text-3xl md:text-4xl font-extrabold text-blue-500 dark:text-blue-400 font-mono tracking-tight">
              <Counter value={3} suffix="+" />
            </div>
            <div className="text-xs font-semibold text-muted-foreground mt-1 uppercase tracking-wider font-mono">
              Certifications
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};
