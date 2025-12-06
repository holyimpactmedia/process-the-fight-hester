import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MediaLogos from "@/components/MediaLogos";
import Testimonials from "@/components/Testimonials";
import Topics from "@/components/Topics";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutSection />
      <MediaLogos />
      <Testimonials />
      <Topics />
      <CTASection />
      <Footer />
    </main>
  );
}
