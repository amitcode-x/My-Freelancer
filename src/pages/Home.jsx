// src/pages/Home.jsx

import Hero from "../components/Hero";
import WebsiteTypes from "../components/WebsiteTypes";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Projects from "../pages/Projects";
import WhyHireMe from "../components/WhyHireMe";
import CTA from "../components/CTA";
import Pricing from "../components/Pricing";



export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* HERO / FIRST IMPRESSION */}
      <Hero />

      {/* WHAT TYPE OF WEBSITES / SYSTEMS I BUILD */}
      <WebsiteTypes />

      {/* SKILLS & TECHNOLOGIES */}
      <Skills />

       {/* PRICING & PACKAGES */}
      <Pricing />

      {/* SERVICES OFFERED */}
      <Services />

     

      {/* PROJECTS / PROOF OF WORK */}
      <Projects />

      {/* WHY CLIENT SHOULD HIRE YOU */}
      <WhyHireMe />

      {/* FINAL CALL TO ACTION */}
      <CTA />

    
    </main>
  );
}
