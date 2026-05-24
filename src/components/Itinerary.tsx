import { motion } from "motion/react";
import { itineraryData } from "../data";
import { Clock, Navigation, Wallet } from "lucide-react";

export default function Itinerary() {
  return (
    <section className="py-24 px-6 sm:px-12 max-w-4xl mx-auto" id="itinerary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-[1px] bg-rose-500/50"></div>
          <h2 className="text-2xl font-display font-bold text-white tracking-widest uppercase">
            連假行程
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-rose-500/50 to-transparent"></div>
        </div>

        <div className="space-y-12">
          {itineraryData.map((day, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Day Header */}
              <div className="md:grid md:grid-cols-[140px_1fr] md:gap-8 mb-6">
                <div className="hidden md:flex flex-col items-end text-right">
                  <span className="text-3xl font-display font-bold text-rose-400">
                    {day.day}
                  </span>
                  <span className="text-sm font-mono text-slate-500">
                    {day.date}
                  </span>
                </div>
                <div className="relative">
                  <div className="md:hidden flex items-baseline gap-3 mb-2">
                    <span className="text-2xl font-display font-bold text-rose-400">
                      {day.day}
                    </span>
                    <span className="text-sm font-mono text-slate-500">
                      {day.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                    <Navigation className="w-5 h-5 text-rose-500" />
                    {day.title}
                  </h3>
                </div>
              </div>

              {/* Time Line Line */}
              <div className="absolute left-0 md:left-[140px] md:ml-[31px] top-6 bottom-[-24px] w-[1px] bg-slate-800 last-of-type:bottom-0"></div>

              {/* Day Activities */}
              <div className="md:grid md:grid-cols-[140px_1fr] md:gap-8">
                <div className="hidden md:block"></div>
                <div className="relative border-l border-slate-800 md:border-0 pl-6 md:pl-8 pb-4 space-y-6">
                  {day.activities.map((activity, actIndex) => (
                    <div
                      key={actIndex}
                      className="relative group bg-slate-900/50 border border-slate-800/80 p-5 rounded-2xl hover:bg-slate-800/80 hover:border-rose-500/50 transition-all duration-300"
                    >
                      <div className="absolute -left-[29px] top-4 w-3 h-3 rounded-full border-2 border-rose-500 bg-slate-950 group-hover:bg-rose-400 transition-colors z-10 md:hidden"></div>
                      <div className="hidden md:block absolute -left-[35px] top-4 w-3 h-3 rounded-full border-2 border-rose-500 bg-slate-950 group-hover:bg-rose-400 group-hover:shadow-[0_0_10px_rgba(244,63,94,0.8)] transition-all z-10"></div>

                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 flex-1">
                          <div className="flex items-center gap-2 text-rose-400 font-mono text-sm shrink-0 min-w-[60px]">
                            <Clock className="w-4 h-4" />
                            {activity.time}
                          </div>
                          <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700 shrink-0"></div>
                          <p className="text-slate-300 flex-1">
                            {activity.description}
                          </p>
                        </div>
                        {activity.budget && (
                          <div className="flex items-center gap-1.5 text-amber-400 font-mono text-xs whitespace-nowrap bg-amber-400/10 px-2.5 py-1 rounded-md shrink-0 self-start sm:self-center mt-2 sm:mt-0 border border-amber-400/20">
                            <Wallet className="w-3.5 h-3.5" />
                            {activity.budget}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
