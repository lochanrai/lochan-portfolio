import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-bold">Let's Connect</h2>

        <p className="mt-6 text-lg text-slate-400">
          I'm always open to discussing new opportunities, interesting projects
          and collaborations.
        </p>

        <div className="mt-12 flex justify-center gap-8 text-4xl">
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-cyan-400 transition"
          >
            <FaEnvelope />
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
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
