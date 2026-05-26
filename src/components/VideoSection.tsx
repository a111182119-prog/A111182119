import { motion } from "motion/react";
import { PlaySquare } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="py-24 px-6 sm:px-12 max-w-5xl mx-auto" id="trailer">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-[1px] bg-rose-500/50"></div>
          <h2 className="text-2xl font-display font-bold text-white tracking-widest uppercase flex items-center gap-2">
            <PlaySquare className="w-6 h-6 text-rose-400" />
            精華影片
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-rose-500/50 to-transparent"></div>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-900">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/9rDlXz6kYUE?rel=0"
            title="杜拜奢華之旅精華"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}
