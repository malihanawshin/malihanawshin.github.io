"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Flex Rental",
    dates: "Sep 2025 - Present",
    description:
      "Full-stack web application for managing and analyzing property reviews from Hostaway with an interactive dashboard and real-time metrics.",
    tech: ["React", "Node.js", "Express", "Vercel"],
    image: "/houserental.png",
    link: "https://github.com/malihanawshin/house-rental",
  },
  {
    title: "Distributed Circular Economy",
    dates: "Feb 2022 – Jun 2022",
    description:
      "Smart-contract, blockchain-based web platform for selling and buying recycled products to promote circular economy practices.",
    tech: ["React", "Solidity", "Web3.js", "Ethereum", "Node.js"],
    image: "/dce_app.png",
    link: "https://github.com/malihanawshin/CircularEconomy_frontend",
  },
  {
    title: "Wander Mind",
    dates: "Jul 2025 – Aug 2025",
    description:
      "An AI-powered iOS travel app that provides tourists with instant information, historical facts, and personalized recommendations for nearby attractions.",
    tech: ["iOS","SwiftUI", "AWS Lambda", "Python", "OpenAI API"],
    image: "/background2.jpeg",
    link: "https://github.com/malihanawshin/WanderMind",
  },
  {
    title: "Green Dev Dashboard",
    dates: "Jul 2025 – Present",
    description:
      "An interactive dashboard deployed on AWS EC2 to visualize the carbon footprint of software development activities, promoting sustainable and eco-efficient coding practices.",
    tech: ["React", "Python", "Docker", "AWS", "GitHub Actions"],
    image: "/greendev.png",
    link: "https://github.com/malihanawshin/Develop_Greenly",
  },
  // {
  //   title: "Athlete Tracker",
  //   dates: "Jan 2024 - Mar 2024",
  //   description:
  //     "iOS app that tracks movement speed and acceleration using CoreMotion and CoreBluetooth, visualizing real-time performance data.",
  //   tech: ["iOS","SwiftUI", "CoreMotion", "CoreBluetooth"],
  //   image: "/athlete-tracker.png",
  //   link: "https://github.com/malihanawshin/Athlete-Tracker",
  // },
  {
    title: "Anko – Bengali Handwritten Number Recognizer",
    dates: "2019",
    description:
      "Android application for Bengali handwritten number recognition integrating machine learning models to achieve high-accuracy classification.",
    tech: ["Android", "Java", "Python"],
    image: "/cnn.png",
    link: "https://github.com/malihanawshin/Anko_HBNR",
  },
];


export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = projectRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => [...new Set([...prev, index])])
          }
        },
        { threshold: 0.2 },
      )

      if (ref) observer.observe(ref)
      return observer
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  return (
    <section id="projects" className="relative py-32 px-6 z-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-16 glow-text">Featured Projects</h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                projectRefs.current[index] = el
              }}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div
                className={`transition-all duration-1000 ${
                  visibleProjects.includes(index)
                    ? "opacity-100 translate-x-0"
                    : `opacity-0 ${index % 2 === 0 ? "-translate-x-10" : "translate-x-10"}`
                } ${index % 2 === 1 ? "md:order-2" : ""}`}
              >
                <div className="relative group">
                  <div className="absolute inset-0 glow rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="relative rounded-2xl border border-primary/20"
                  />
                </div>
              </div>

              <div
                className={`transition-all duration-1000 delay-300 ${
                  visibleProjects.includes(index)
                    ? "opacity-100 translate-x-0"
                    : `opacity-0 ${index % 2 === 0 ? "translate-x-10" : "-translate-x-10"}`
                } ${index % 2 === 1 ? "md:order-1" : ""}`}
              >
                <p className="text-sm text-primary/80 mb-2">{project.dates}</p>
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="glass px-4 py-2 rounded-lg text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link ? (
                  <Button asChild className="glow hover:scale-105 transition-transform duration-300">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project →
                    </a>
                  </Button>
                ) : (
                  <Button disabled className="opacity-50 cursor-not-allowed">
                    Coming Soon
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
