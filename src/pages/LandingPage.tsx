import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Features from "../components/Features";
import Process from "../components/Process";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen relative w-full overflow-x-hidden pt-0 transition-all duration-300">
      <Navbar />
      <main className="w-full relative overflow-x-hidden">
        <Hero />
        <Services />
        <Features />
        <Process />
        <Portfolio />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
