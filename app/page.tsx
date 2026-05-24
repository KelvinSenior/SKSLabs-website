import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import FounderSection from "@/components/FounderSection";
import ValuesSection from "@/components/ValuesSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main className="relative">
        <HeroSection />
        <ProjectsSection />
        <FounderSection />
        <ValuesSection />
      </main>
      <Footer />
    </div>
  );
}
