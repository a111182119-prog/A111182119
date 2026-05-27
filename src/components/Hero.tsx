import { motion } from "motion/react";
import { personalInfo } from "../data";

export default function Hero() {
  return (
    <section
      className="pt-40 pb-20 relative isolate overflow-hidden min-h-[80vh] flex flex-col justify-center"
      id="home"
    >
      {/* Cosmic Background Effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950"></div>
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-900/20 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-fuchsia-900/20 blur-[100px] rounded-full"
        />
        {/* Subtle Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 mix-blend-overlay flex" />
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-12 w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-fuchsia-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-700"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/50">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop";
                }}
                alt="Profile"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 text-center md:text-left mt-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-mono mb-6 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              Welcome to my portfolio
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight mb-4 flex flex-col gap-2">
              <span>{personalInfo.name}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400 text-3xl md:text-4xl lg:text-5xl border-b-2 border-transparent">
                {personalInfo.enName}
              </span>
            </h1>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm font-mono text-slate-400 mb-8 mt-6">
              <span className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 px-3 py-1.5 rounded-md text-indigo-200">
                {personalInfo.zodiac}
              </span>
              <span className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 px-3 py-1.5 rounded-md text-fuchsia-200">
                {personalInfo.bloodType}
              </span>
              <span className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 px-3 py-1.5 rounded-md text-slate-300">
                {personalInfo.birthday}
              </span>
            </div>

            <p className="text-lg text-slate-400 max-w-xl mx-auto md:mx-0 font-light leading-relaxed mb-8">
              {personalInfo.greeting}。致力於探索技術與美學的邊界。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
