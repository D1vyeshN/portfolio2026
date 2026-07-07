"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Projects } from "@/components/sections/projects";
import { ScrollProgress } from "@/components/scroll-progress";
import { BackToTop } from "@/components/back-to-top";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <main className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ScrollProgress />
          <Navbar />
          <div className="pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => router.push("/")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all text-sm font-medium"
              >
                <ArrowLeft size={16} />
                Back
              </motion.button>
            </div>
            <Projects 
              showAll={true} 
              title="All Projects"
              description="A complete collection of my work, showcasing full-stack applications, AI integrations, and production-grade platforms."
            />
          </div>
          <Footer />
          <BackToTop />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
