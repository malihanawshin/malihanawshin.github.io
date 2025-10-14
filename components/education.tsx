"use client"

import React from "react"
import { GraduationCap, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export default function Education() {
  const education = [
  {
    id: 1,
    start: "Sep 2021",
    end: "Aug 2023",
    school: "Vrije Universiteit Amsterdam",
    location: "Amsterdam, Netherlands",
    degree: "Master of Science in Computer Science",
    details: [
      "Thesis: 'Digital Sufficiency of Cloud Usage' — published at IEEE ICT4S 2024, presenting sustainable, energy-saving strategies that reduce data traffic up to 15.5×.",
      "Specialized in Green IT track under the Erasmus Mundus Joint MSc Program: 'Software Engineers for Green Deal' with a full scholarship.",
    ],
  },
  {
    id: 2,
    start: "Jan 2015",
    end: "Jan 2019",
    school: "University of Dhaka",
    location: "Dhaka, Bangladesh",
    degree: "Bachelor of Science in Software Engineering",
    details: [
      "Completed a four-year program focused on software design, algorithms, and system development.",
    ],
  },
];


  return (
    <section id="education" className="relative py-24 px-6 z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-16 glow-text"
          >
            Education Journey
          </motion.h2>
          <p className="text-muted-foreground text-sm">
            Scroll down to explore timeline • 2015 - 2023
          </p>
        </div>

        <div className="relative ml-4 sm:ml-10 border-l border-gray-300">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="mb-8 sm:mb-12 relative"
            >
              <div className="absolute w-4 h-4 rounded-full border-2 border-primary -left-2 top-2 flex items-center justify-center">
                <GraduationCap size={10} className="text-primary" />
              </div>

              <div className="ml-6 p-4 rounded-lg glass transition-all duration-500 hover:glow hover:scale-[1.02]">
                <div className="flex flex-col gap-2">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-bold mb-1 text-primary">
                        {edu.school}
                      </h3>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-sm font-semibold text-muted-foreground">
                    <Calendar className="w-3 h-3 flex-shrink-0" />
                    <span>{edu.start} – {edu.end}</span>
                  </div>

                  <p className="text-sm font-semibold mt-1 border-t border-border/50 pt-1 text-muted-foreground">
                    {edu.degree}
                  </p>

                  {edu.details.length > 0 && (
                    <ul className="space-y-1 text-sm mt-1 list-disc list-inside text-muted-foreground">
                      {edu.details.map((d, j) => (
                        <li key={j}>{d}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
