import { lazy, Suspense } from "react";
import Hero from "@/sections/Hero";

// Below-the-fold sections are lazy-loaded so the hero paints as fast as possible.
const About = lazy(() => import("@/sections/About"));
const Skills = lazy(() => import("@/sections/Skills"));
const Experience = lazy(() => import("@/sections/Experience"));
const Education = lazy(() => import("@/sections/Education"));
const Projects = lazy(() => import("@/sections/Projects"));
const Certifications = lazy(() => import("@/sections/Certifications"));
const Services = lazy(() => import("@/sections/Services"));
const Contact = lazy(() => import("@/sections/Contact"));

function SectionFallback() {
  return <div className="min-h-[40vh]" aria-hidden="true" />;
}



export default function Home() {
  return (
    <>
      <Suspense fallback={<SectionFallback />}>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        {/* <Certifications /> */}
        {/* <Services /> */}
        <Contact />
      </Suspense>
    </>
  );
}
