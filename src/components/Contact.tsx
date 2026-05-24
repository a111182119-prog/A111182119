import { motion } from "motion/react";
import { personalInfo } from "../data";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      className="py-32 px-6 sm:px-12 max-w-3xl mx-auto text-center"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xs font-mono text-indigo-600 tracking-widest uppercase mb-4">
          What's Next?
        </h3>
        <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
          聯絡我
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-10">
          我目前正在尋找新的工作機會，無論您有任何問題，或是單純想聊聊，我的信箱隨時為您敞開。我會盡快回覆您！
        </p>

        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-sm"
        >
          <Mail className="w-5 h-5" />
          <span>Say Hello</span>
        </a>
      </motion.div>
    </section>
  );
}
