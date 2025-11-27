import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import DotGridShader from "@/components/DotGridShader"

import ProjectCard from "@/components/project-card"
import AnimatedHeading from "@/components/animated-heading"
import RevealOnView from "@/components/reveal-on-view"

export default function Page() {
  const projects = [
    {
      title: "Bayes AI Assistant",
      subtitle: "Personalized AI with RAG architecture",
      imageSrc: "/images/bayes.png",
      tags: ["React", "Gemini 2.0", "RAG"],
      href: "/projects/bayes",
      priority: true,
      gradientFrom: "#0f172a",
      gradientTo: "#6d28d9",
    },
    {
      title: "Code Rod - Schemer",
      subtitle: "Tri-Co Hackathon winning course planner",
      imageSrc: "/images/codeRod.png",
      tags: ["Next.js", "Supabase", "TypeScript"],
      href: "/projects/schemer",
      priority: false,
      gradientFrom: "#0f172a",
      gradientTo: "#10b981",
    },
    {
      title: "Aperture",
      subtitle: "AI-powered movie rating platform",
      imageSrc: "/images/aperture.png",
      tags: ["JavaScript", "Gemini AI", "TMDB API"],
      href: "/projects/aperture",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#5bc0be",
    },
    {
      title: "Personal Website",
      subtitle: "Custom HTML/CSS with 20+ UI features",
      imageSrc: "/images/maxL.png",
      tags: ["HTML5", "CSS3", "JavaScript"],
      href: "/projects/personal-website",
      priority: false,
      gradientFrom: "#111827",
      gradientTo: "#2563eb",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 animate-pulse" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      {/* HERO: full-viewport row. Left is sticky; right scrolls internally. */}
      <section className="relative px-4 pt-4 pb-16 lg:pb-4">
        <div className="grid h-full grid-cols-1 gap-6 lg:grid-cols-[380px_1fr]">
          {/* LEFT: sticky and full height, no cut off */}
          <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)]">
            <RevealOnView
              as="div"
              intensity="hero"
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/20 shadow-2xl shadow-blue-500/10 backdrop-blur-xl p-5 sm:p-6"
              style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 50%, rgba(15, 23, 42, 0.9) 100%)'
              }}
              staggerChildren
            >
              {/* Enhanced texture background */}
              <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-soft-light">
                <DotGridShader />
              </div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-3xl" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex-1">
                  {/* Enhanced Wordmark */}
                  <div className="mb-6 flex items-center gap-2">
                    <div className="text-2xl font-black tracking-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                      Max Lovinger
                    </div>
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 shadow-lg shadow-blue-400/50 animate-pulse" aria-hidden="true" />
                  </div>

                  {/* Enhanced Headline */}
                  <AnimatedHeading
                    className="text-3xl font-black leading-[0.95] tracking-tight sm:text-4xl bg-gradient-to-r from-white via-blue-50 to-white bg-clip-text text-transparent"
                    lines={["Data Science &", "Software Engineering"]}
                  />
                </div>

                {/* Enhanced CTAs - positioned at bottom */}
                <div className="mt-auto">
                  <Button asChild size="default" className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-500/25 border-0 text-white font-semibold px-6">
                    <Link href="mailto:maxlovinger88@gmail.com">
                      Contact me
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </RevealOnView>
          </aside>

          {/* RIGHT: simplified, no internal card or horizontal carousel */}
          <div className="space-y-6">
            {projects.map((p, idx) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                subtitle={p.subtitle}
                imageSrc={p.imageSrc}
                tags={p.tags}
                href={p.href}
                priority={p.priority}
                gradientFrom={p.gradientFrom}
                gradientTo={p.gradientTo}
                imageContainerClassName="lg:h-full"
                containerClassName="lg:h-[calc(100svh-2rem)]"
                revealDelay={idx * 0.06}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}