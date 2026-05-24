import { motion } from "motion/react";
import { projects } from "../data";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-16">
          <h3 className="text-xs font-mono text-indigo-600 tracking-widest uppercase mb-4">
            Portfolio
          </h3>
          <h2 className="text-3xl font-display font-bold text-slate-900">
            精選專案
          </h2>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full lg:w-3/5 rounded-2xl overflow-hidden shadow-lg border border-slate-100 group relative">
                <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover aspect-[16/10] group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div
                className={`w-full lg:w-2/5 ${index % 2 === 1 ? "lg:text-right" : "lg:text-left"} z-20`}
              >
                <h4 className="text-xs font-mono text-indigo-600 mb-2">
                  Featured Project
                </h4>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  {project.title}
                </h3>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-6 relative">
                  <p className="text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <ul
                  className={`flex flex-wrap gap-4 font-mono text-xs text-slate-500 mb-8 ${index % 2 === 1 ? "justify-end" : "justify-start"}`}
                >
                  {project.tech.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>

                <div
                  className={`flex items-center gap-4 ${index % 2 === 1 ? "justify-end" : "justify-start"}`}
                >
                  <a
                    href={project.link}
                    className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600 hover:text-slate-900"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.link}
                    className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600 hover:text-slate-900"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
