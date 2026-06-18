"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-background border-t border-border py-5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold tracking-tighter bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            DIVYESH.
          </div>

          <div className="flex space-x-2">
            <a
              href="https://github.com/D1vyeshN"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://linkedin.com/in/divyesh-nandanwar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="mailto:divyesh21j91@gmail.com"
              className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Divyesh Nandanwar. All rights
            reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};
