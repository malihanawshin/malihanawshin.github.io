import Link from "next/link"
import { EnvelopeSimple, GithubLogo, LinkedinLogo, MapPin } from "@phosphor-icons/react/dist/ssr"

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-primary/10 z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold glow-text mb-2">Maliha Nawshin Rahman</p>
            <p className="text-muted-foreground">Crafting immersive digital experiences</p>
            <div className="flex items-center gap-2 text-muted-foreground mt-2 justify-center md:justify-start">
              <MapPin size={16} weight="duotone" />
              <span className="text-sm">Germany</span>
            </div>
          </div>

          <nav className="flex items-center gap-8">
            <Link href="#about" className="text-muted-foreground hover:text-foreground hover:glow-text transition-all">
              About
            </Link>
            <Link href="#education" className="text-muted-foreground hover:text-foreground hover:glow-text transition-all">
              Education
            </Link>
            <Link href="#experience" className="text-muted-foreground hover:text-foreground hover:glow-text transition-all">
              Education
            </Link>
            <Link
              href="#projects"
              className="text-muted-foreground hover:text-foreground hover:glow-text transition-all"
            >
              Projects
            </Link>
            <Link
              href="#certifications"
              className="text-muted-foreground hover:text-foreground hover:glow-text transition-all"
            >
              Certifications
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-foreground hover:glow-text transition-all"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://github.com/malihanawshin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:scale-110 transition-all"
            aria-label="GitHub"
          >
            <GithubLogo size={24} weight="duotone" />
          </a>
          <a
            href="https://www.linkedin.com/in/maliha-nawshin-rahman/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:scale-110 transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinLogo size={24} weight="duotone" />
          </a>
          <a
            href="mailto:malihanawshin@gmail.com"
            className="text-muted-foreground hover:text-primary hover:scale-110 transition-all"
            aria-label="Gmail"
          >
            <EnvelopeSimple size={24} weight="duotone" />
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/10 text-center text-muted-foreground">
          <p>© 2025 Maliha Nawshin Rahman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
