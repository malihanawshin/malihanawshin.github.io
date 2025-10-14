"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

type Certificate = {
  title: string
  organization: string
  date: string
  description: string
  type: string
  image?: string
}

const certificates: Certificate[] = [
  // ==== AWS Certification ====
  {
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services (AWS)",
    date: "March 7, 2025",
    description:
      <>
        Validated foundational cloud knowledge and AWS global infrastructure.  
        See the <a href="https://www.credly.com/badges/651f9c9f-70a0-4d30-911e-84d0d7c02a7c/public_url" target="_blank" rel="noopener noreferrer">official badge</a>.
      </>,
    type: "Cloud",
    image: "/certificates/AWS_CLF_02.png",
    //link: "https://www.credly.com/badges/651f9c9f-70a0-4d30-911e-84d0d7c02a7c/public_url",
  },

  // ==== Language Certification ====
  {
    title: "Goethe-Zertifikat Deutsch A1",
    organization: "Goethe-Institut",
    date: "February 4, 2025",
    description:
      "Certified basic proficiency in German (A1 Level), including reading, writing, listening, and speaking skills.",
    type: "Language",
    image: "/certificates/goethe-logo.jpg",
    //link: "https://drive.google.com/file/d/1Gi_KWpvndz5mdwqWPQtbd9U3iGfiVIZs/view?usp=sharing",
  },

  // ==== Technical Certification ====
  {
    title: "HackerRank Certified Software Engineer",
    organization: "HackerRank",
    date: "December 14, 2024",
    description:
      "Assessed on algorithms, problem-solving, and software engineering fundamentals through real-world coding challenges.",
    type: "Technical",
    image: "/certificates/hackerrank.png",
    //link: "https://www.hackerrank.com/certificates/iframe/e46595e56b9b",
  },
];


export default function Certifications() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [selectedFilter, setSelectedFilter] = useState<string>("All")
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const filters = ["All", ...Array.from(new Set(certificates.map((cert) => cert.type)))]

  const filteredCertificates =
    selectedFilter === "All" ? certificates : certificates.filter((cert) => cert.type === selectedFilter)

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        },
        { threshold: 0.2 },
      )

      if (ref) observer.observe(ref)
      return observer
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [filteredCertificates])

  return (
    <section id="certifications" className="relative py-32 px-6 z-10">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl font-bold text-center mb-8 glow-text">Certifications & Achievements</h2>

        {/* Filter Menu */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedFilter === filter
                  ? "bg-accent text-background font-semibold glow"
                  : "glass hover:bg-accent/20 hover:glow"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((cert, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              className={`flip-card h-[400px] transition-all duration-700 ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flip-card-inner">
                {/* Front of Card */}
                <div className="flip-card-front glass rounded-2xl p-6 flex flex-col items-center justify-center">
                  <div className="relative w-full h-56 mb-4 rounded-lg overflow-hidden bg-background/50 border border-accent/20">
                    <Image
                      src={
                        cert.image || `/placeholder.svg?height=200&width=300&query=${encodeURIComponent(cert.title)}`
                      }
                      alt={cert.title}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={95}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 line-clamp-2">{cert.title}</h3>
                  <p className="text-accent text-sm font-semibold">{cert.organization}</p>
                  <p className="text-muted-foreground text-sm mt-2">{cert.date}</p>
                  <div className="mt-4 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium">
                    {cert.type}
                  </div>
                </div>

                {/* Back of Card */}
                <div className="flip-card-back glass rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-3 glow-text">{cert.title}</h3>
                    <div className="space-y-2 mb-4">
                      <p className="text-accent font-semibold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        {cert.organization}
                      </p>
                      <p className="text-muted-foreground text-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-muted-foreground"></span>
                        {cert.date}
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed">{cert.description}</p>
                  </div>
                  <div className="mt-4 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium self-start">
                    {cert.type}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
