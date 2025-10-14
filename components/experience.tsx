"use client"

import React from "react"
import { Briefcase, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export default function Experience() {
  const experience = [
  {
    id: 1,
    start: "Sept 2024",
    end: "Present",
    role: "Software Developer (Freelance)",
    company: "Remote",
    location: "Remote",
    details: [
      "Developed an AI-powered iOS travel app — WanderMind, enabling tourists to access instant information, historical facts, and personalized recommendations.",
      "Achieved a 30% reduction in response latency and improved overall user engagement using SwiftUI, OpenAI API, AWS Lambda, and Python.",
    ],
  },
  {
    id: 2,
    start: "Jan 2024",
    end: "July 2024",
    role: "Lecturer",
    company: "East West University",
    location: "Dhaka, Bangladesh",
    details: [
      "Conducted theoretical and laboratory sessions in the Department of Computer Science.",
      "Supervised students and taught courses including Information Systems Design, Advanced Database, and Discrete Mathematics.",
    ],
  },
  {
    id: 3,
    start: "Feb 2022",
    end: "June 2022",
    role: "Frontend Developer",
    company: "Solita",
    location: "Finland",
    details: [
      "Developed 80% of the features for the Distributed Circular Economy project — a blockchain-based web platform for selling and buying recycled products.",
      "Implemented smart-contract integrations using ReactJS and Solidity, collaborating with 7 multinational colleagues.",
    ],
  },
  {
    id: 4,
    start: "July 2019",
    end: "Sept 2021",
    role: "Software Engineer",
    company: "Samsung R&D Institute Bangladesh",
    location: "Dhaka, Bangladesh",
    details: [
      "Enhanced the front end of the Mission Critical Push-To-Talk iOS app, ensuring compatibility with backend updates and newer Swift versions.",
      "Optimized CI/CD pipeline, reducing code review time by 40% and accelerating deployment processes.",
      "Built robust iOS applications using Swift, SQLite, and SIP Protocol, improving app performance and communication reliability by 30%.",
      "Refactored legacy code, improving scalability and reducing crashes by 25%.",
    ],
  },
  {
    id: 5,
    start: "Jan 2018",
    end: "June 2018",
    role: "Software Developer Intern",
    company: "Brain Station 23 Limited",
    location: "Dhaka, Bangladesh",
    details: [
      "Developed features for the Online Kaizen System — a web-based portal that automates the implementation process for the Jute industry of Bangladesh.",
      "Built the BS Performance Appraisal system — an online employee evaluation platform developed from scratch using Laravel and PHP.",
    ],
  },
];


  return (
    <section id="experience" className="relative py-24 px-6 z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-16 glow-text"
          >
            Professional Experience
          </motion.h2>
          <p className="text-muted-foreground text-sm">
            Explore my journey from junior roles to impactful contributions
          </p>
        </div>

        <div className="relative ml-4 sm:ml-10 border-l border-gray-300">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="mb-8 sm:mb-12 relative"
            >
              <div className="absolute w-4 h-4 rounded-full border-2 border-primary -left-2 top-2 flex items-center justify-center">
                <Briefcase size={12} className="text-primary" />
              </div>

              <div className="ml-6 p-4 rounded-lg glass transition-all duration-500 hover:glow hover:scale-[1.02]">
                <div className="flex flex-col gap-2">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-bold mb-1 text-primary">
                        {exp.role} @ {exp.company}
                      </h3>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-sm font-semibold text-muted-foreground">
                    <Calendar className="w-3 h-3 flex-shrink-0" />
                    <span>{exp.start} – {exp.end}</span>
                  </div>

                  <ul className="mt-2 space-y-1 text-sm list-disc list-inside text-muted-foreground">
                    {exp.details.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
