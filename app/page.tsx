import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import WorkPhilosophy from "@/components/work-philosophy"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import LightSpots from "@/components/light-spots"
// import Gallery from "@/components/gallery"
import Education from "@/components/education"
import Experience from "@/components/experience"


export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <LightSpots />
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <WorkPhilosophy />
      <Projects />
      {/*
      <Gallery />
      */}
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
