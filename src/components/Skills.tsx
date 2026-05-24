import { motion } from "motion/react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section
      className="py-24 px-6 sm:px-12 max-w-7xl mx-auto bg-white rounded-3xl my-12 shadow-sm border border-slate-100"
      id="skills"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h3 className="text-xs font-mono text-indigo-600 tracking-widest uppercase mb-4">
            Expertise
          </h3>
          <h2 className="text-3xl font-display font-bold text-slate-900">
            專業技能
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm text-indigo-600 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">
                  {skill.name}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
