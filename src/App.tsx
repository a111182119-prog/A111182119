import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Itinerary from "./components/Itinerary";
import PresentationsViewer from "./components/PresentationsViewer";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main>
        <Hero />
        <Resume />
        <Itinerary />
        <PresentationsViewer />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
}
