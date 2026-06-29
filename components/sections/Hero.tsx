"use client";

import { profile } from "@/data/profile";
import Button from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-slate-950 pt-20 text-white"
    >
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 py-20 lg:flex-row">
        {/* LEFT */}
        <div className="max-w-xl">
          <p className="mb-4 text-lg text-cyan-400">👋 Hello, I'm</p>

          <h1 className="text-6xl font-extrabold leading-tight md:text-7xl">
            {profile.name}
          </h1>

          <h2 className="mt-6 text-3xl font-semibold text-slate-300">
            {profile.role}
          </h2>

          <p className="mt-5 text-lg text-slate-400">
            {profile.technologies.join(" • ")}
          </p>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            {profile.tagline}
          </p>

          <div className="mt-10 flex gap-4">
                 
                  
            <Button
               href="/LochanRai_SrDataAnalyst.pdf"
               download >
              Download Resume
            </Button>
         

            <Button 
            href="#projects"
            variant="secondary">
              View Projects
              </Button>
            
          </div>

          <div className="mt-10 flex gap-6 text-3xl text-slate-400">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* RIGHT */}

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl"></div>

            <Image
              src="/images/profile.jpg"
              alt="Lochan Rai"
              width={420}
              height={420}
              priority
              className="relative rounded-full border-4 border-cyan-500 object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
