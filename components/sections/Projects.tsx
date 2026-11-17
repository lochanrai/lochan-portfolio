"use client";

import { projects } from "@/data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold"
        >
          Featured Projects
        </motion.h2>

        <p className="mt-4 text-center text-slate-400">
          Real-world Data Engineering, AI and Analytics Projects
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20"
            >

              {/* IMAGE */}

              <div className="relative h-52 w-full overflow-hidden bg-slate-950">

                <Image
                  src={project.image}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  alt={project.title}
                  
                  className="object-cover transition duration-500 hover:scale-105"
                />

              </div>

              {/* CONTENT */}

              <div className="flex flex-1 flex-col p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 flex-1 text-slate-400 leading-7">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.tech.map((item) => (

                    <span
                      key={item}
                      className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300"
                    >
                      {item}
                    </span>

                  ))}

                </div>

                {/* Links */}

                <div className="mt-8 flex gap-5 text-2xl">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-cyan-400"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-cyan-400"
                  >
                    <FaExternalLinkAlt />
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}