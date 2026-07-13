import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Projects from "../components/Projects";
import ServiceGallery from "../components/ServiceGallery";
import Quality from "../components/Quality";
import Coverage from "../components/Coverage";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <ServiceGallery />
        <Quality />
        <Coverage />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
