import { motion } from "motion/react";
import { personalInfo, experiences } from "../data";

export default function About() {
  return (
    <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-16"
      >
        <div>
          <h3 className="text-xs font-mono text-indigo-600 tracking-widest uppercase mb-4">
            About Me
          </h3>
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
            關於我
          </h2>
          <div className="prose prose-slate prose-lg">
            <p className="text-slate-600 leading-relaxed">
              {personalInfo.about}
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              在過去的幾年中，我參與了許多不同規模的專案，從新創公司的 MVP
              到大型企業的系統重構。我喜歡學習新技術，並將其應用在解決實際的問題上。
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-mono text-indigo-600 tracking-widest uppercase mb-4">
            Experience
          </h3>
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
            經歷
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-6 border-l border-slate-200"
              >
                <div className="absolute w-3 h-3 bg-indigo-600 rounded-full -left-[6.5px] top-2"></div>
                <h4 className="text-lg font-bold text-slate-900">{exp.role}</h4>
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-2 font-mono">
                  <span>{exp.company}</span>
                  <span>•</span>
                  <span>{exp.period}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
