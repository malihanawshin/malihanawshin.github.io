"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Sparkles, Coffee, MessageSquare, BarChart3, Code2, Cpu, Database, Cloud, BrainCircuit } from "lucide-react"


const skills = [
  {
    name: "Programming Languages",
    description: "Java, Python, Swift, JavaScript, TypeScript, C++, C, PHP, SQL",
    icon: Code2,
  },
  {
    name: "Frameworks & Libraries",
    description: "React.js, Node.js, Express, Vue.js, React Native, FastAPI, Flutter, Laravel, TensorFlow, OpenGL",
    icon: Sparkles,
  },
  {
    name: "AI & Automation",
    description: "LLM Agents, Agentic AI, RAG, LangGraph, Prompt Engineering, AI Workflow Automation, n8n, Claude, OpenAI, Codex, Vector Databases, Semantic Search, MCP",
    icon: BrainCircuit,
  },
  {
    name: "Web Technologies",
    description: "HTML5, CSS3, Tailwind CSS, REST APIs, Webhooks, API Integrations, Webpack, Responsive Design",
    icon: BarChart3,
  },
  {
    name: "Databases",
    description: "MySQL, PostgreSQL, MongoDB, JDBC, DynamoDB, SQLite, CoreData, Firebase, Supabase, pgvector",
    icon: Database,
  },
  {
    name: "Cloud & DevOps",
    description: "AWS, Hetzner, Docker, Git, GitHub, GitLab, GitHub Actions, GitLab CI/CD, CI/CD Pipelines, Linux, Infrastructure Management",
    icon: Cloud,
  },
  {
    name: "Tools & IDEs",
    description: "Xcode, VS Code, Android Studio, Eclipse, IntelliJ IDEA, PyCharm, Unity & Vuforia, Postman",
    icon: Cpu,
  },
  {
    name: "Project Management",
    description: "Scrum, Agile Methods, Slack, Trello, Jira, Technical Documentation, Cross-functional Collaboration",
    icon: MessageSquare,
  },
];


export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative py-32 px-6 z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative w-64 h-64 mx-auto group">
              <div className="absolute inset-0 rounded-full glow transition-transform duration-300 group-hover:-translate-y-2" />
              <Image
                src="/formal_photo.jpeg"
                alt="Maliha Nawshin Rahman"
                width={256}
                height={256}
                className="relative rounded-full border-2 border-primary/20 transition-transform duration-300 group-hover:-translate-y-2 object-cover"
                style={{ objectPosition: "center 15%" }}
              />
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-5xl font-bold mb-6 glow-text">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm an AI Software Engineer and Full-stack Developer passionate about building
              intelligent, scalable, and sustainable digital solutions. With a
              background in software engineering and research, I work across AI
              agents, LLM-powered applications, RAG systems, workflow automation,
              and full-stack development. I enjoy turning complex business
              challenges into practical software solutions, from system
              architecture and API integrations to deployment and cloud
              infrastructure.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <div
                    key={skill.name}
                    className={`glass p-4 rounded-lg transition-all duration-500 hover:glow hover:scale-105 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-sm mb-1">{skill.name}</h3>
                        <p className="text-xs text-muted-foreground">{skill.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
