import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Itinerary from "./components/Itinerary";
import PresentationsViewer from "./components/PresentationsViewer";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main>
        <Hero />
        <Itinerary />
        <PresentationsViewer />
      </main>
      <Footer />
    </div>
  );
}
