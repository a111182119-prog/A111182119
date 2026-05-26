import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Presentation } from "lucide-react";
import { presentationsInfo } from "../data/presentations";
import { Document, Page, pdfjs } from "react-pdf";

// Optional: you can include these if you want text selection
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PresentationsViewer() {
  const [activeDeck, setActiveDeck] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [numPages, setNumPages] = useState<number | null>(null);

  const deck = presentationsInfo[activeDeck];

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev < (numPages || deck.totalPages) - 1 ? prev + 1 : prev,
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleDeckChange = (index: number) => {
    setActiveDeck(index);
    setCurrentSlide(0);
    setNumPages(null);
  };

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const totalDots = numPages || deck.totalPages;

  return (
    <section
      className="py-24 px-6 sm:px-12 max-w-5xl mx-auto"
      id="presentations"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-[1px] bg-indigo-500/50"></div>
          <h2 className="text-2xl font-display font-bold text-white tracking-widest uppercase flex items-center gap-2">
            <Presentation className="w-6 h-6 text-indigo-400" />
            專案簡報展示
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {presentationsInfo.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => handleDeckChange(idx)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                activeDeck === idx
                  ? "bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                  : "bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-900 group flex items-center justify-center">
          {/* Deck theme background layer */}
          <div className={`absolute inset-0 opacity-20 ${deck.theme}`}></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]"></div>

          <div className="relative h-full w-full flex flex-col justify-center items-center z-10 py-6 pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeDeck}-${currentSlide}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full flex flex-col items-center justify-center"
              >
                <div className="pointer-events-auto h-full flex items-center justify-center overflow-hidden rounded-md shadow-2xl ring-1 ring-white/10">
                  <Document
                    file={deck.file}
                    onLoadSuccess={onDocumentLoadSuccess}
                    className="flex flex-col items-center justify-center h-full"
                    loading={
                      <div className="text-white/50 text-sm animate-pulse">
                        載入簡報中...
                      </div>
                    }
                  >
                    <Page
                      pageNumber={currentSlide + 1}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      height={400}
                      className="max-h-full"
                    />
                  </Document>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <button
            onClick={handlePrevSlide}
            disabled={currentSlide === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md border border-white/10 transition-all disabled:opacity-0 disabled:pointer-events-none z-20 group-hover:opacity-100 opacity-0 sm:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNextSlide}
            disabled={currentSlide === totalDots - 1}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md border border-white/10 transition-all disabled:opacity-0 disabled:pointer-events-none z-20 group-hover:opacity-100 opacity-0 sm:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Progress / Metadata */}
          <div className="absolute bottom-4 w-full px-8 flex justify-between items-center text-xs font-mono text-white/40 z-20 pointer-events-none">
            <span>{deck.author}</span>
            <div className="flex gap-1.5 flex-wrap justify-center max-w-[60%]">
              {Array.from(new Array(totalDots)).map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? "w-6 bg-indigo-500"
                      : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>
            <span>
              {currentSlide + 1} / {totalDots}
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
