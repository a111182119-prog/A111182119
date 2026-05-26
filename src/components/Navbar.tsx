import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-4 opacity-100" : "py-6 opacity-100 bg-transparent"
      }`}
    >
      <div
        className={`max-w-5xl mx-auto px-6 transition-all duration-500 ${scrolled ? "max-w-3xl" : ""}`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "bg-slate-900/80 backdrop-blur-xl border border-slate-800 shadow-2xl shadow-black/50 px-6 py-3 rounded-full" : "px-2"}`}
        >
          <a
            href="#home"
            className="flex items-center gap-3 group text-lg font-display tracking-wide"
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold transition-transform group-hover:scale-110 shadow-[0_0_15px_rgba(79,70,229,0.5)]">
              HY
            </div>
            <span className="text-slate-100 transition-colors group-hover:text-indigo-400">
              邱新諺
            </span>
          </a>

          <nav className="hidden sm:flex items-center gap-6 text-sm font-mono text-slate-300">
            <a href="#home" className="hover:text-indigo-400 transition-colors">
              首頁
            </a>
            <a href="#resume" className="hover:text-teal-400 transition-colors">
              簡歷
            </a>
            <a
              href="#itinerary"
              className="hover:text-rose-400 transition-colors"
            >
              連假行程
            </a>
            <a
              href="#presentations"
              className="hover:text-indigo-400 transition-colors"
            >
              專案簡報
            </a>
            <a
              href="#trailer"
              className="hover:text-rose-400 transition-colors"
            >
              精華影片
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
