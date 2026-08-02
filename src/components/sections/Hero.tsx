"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <div className="container">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-violet-500"
        >
          
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 max-w-4xl text-6xl font-bold leading-tight md:text-8xl"
        >
          Building software that solves real problems.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400"
        >
          I build AI-powered Web3 products, blockchain infrastructure, modern
          web applications and automation tools with a focus on performance and
          user experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex gap-4"
        >
          <Button size="lg">View Projects</Button>
          <Button size="lg" variant="outline">
            Download Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
}