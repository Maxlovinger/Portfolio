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
      imageSrc: "/images/project-1.webp",
      tags: ["React", "Google Gemini", "Supabase"],
      href: "https://bayes-ai.vercel.app/",
      priority: true,
      gradientFrom: "#0f172a",
      gradientTo: "#6d28d9",
    },
    {
      title: "FINRA Data Migration",
      subtitle: "600% performance improvement on financial data",
      imageSrc: "/images/project-2.webp",
      tags: ["AWS", "Spark", "Apache Iceberg"],
      href: "#finra-project",
      priority: false,
      gradientFrom: "#111827",
      gradientTo: "#2563eb",
    },
    {
      title: "Personal Website",
      subtitle: "Custom HTML/CSS with 20+ UI features",
      imageSrc: "/images/project-3.webp",
      tags: ["HTML", "CSS", "JavaScript"],
      href: "https://maxlovinger.github.io/",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#5bc0be",
    },
    {
      title: "FINRA Investor Education Platform",
      subtitle: "Interactive quiz with Amazon Bedrock LLM",
      imageSrc: "/images/project-4.webp",
      tags: ["Flask", "AWS Bedrock", "JavaScript"],
      href: "#finra-hackathon",
      priority: false,
      gradientFrom: "#0f172a",
      gradientTo: "#10b981",
    },
    {
      title: "Web3Names.AI Data Analysis",
      subtitle: "Web crawling and decentralized domain research",
      imageSrc: "/images/project-5.webp",
      tags: ["Python", "SikuliX", "Web3"],
      href: "#web3names",
      priority: false,
      gradientFrom: "#1f2937",
      gradientTo: "#8b5cf6",
    },
    {
      title: "Athletes Untapped Growth Tools",
      subtitle: "Python automation for 100% company growth",
      imageSrc: "/images/project-6.webp",
      tags: ["Python", "Automation", "Growth"],
      href: "#athletes-untapped",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#10b981",
    },
  ]

  return (
    <main className="bg-neutral-950 text-white">
      {/* HERO: full-viewport row. Left is sticky; right scrolls internally. */}
      <section className="px-4 pt-4 pb-16 lg:pb-4">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[420px_1fr]">
          {/* LEFT: sticky and full height, no cut off */}
          <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)]">
            <RevealOnView
              as="div"
              intensity="hero"
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8"
              staggerChildren
            >
              {/* Texture background */}
              <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
                <DotGridShader />
              </div>
              <div>
                {/* Wordmark */}
                <div className="mb-8 flex items-center gap-2">
                  <div className="text-2xl font-extrabold tracking-tight">max lovinger</div>
                  <div className="h-2 w-2 rounded-full bg-white/60" aria-hidden="true" />
                </div>

                {/* Headline with intro blur effect */}
                <AnimatedHeading
                  className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl"
                  lines={["Data Science &", "Software Engineering"]}
                />

                <p className="mt-4 max-w-[42ch] text-lg text-white/70">
                  Master's student at UPenn studying Data Science. Experience at FINRA optimizing financial data systems and building AI applications.
                </p>

                {/* CTAs */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href="mailto:mlovinger@haverford.edu">
                      Contact me
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Skills/Technologies */}
                <div className="mt-10">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">TECHNICAL SKILLS</p>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-2xl font-black text-white/25 sm:grid-cols-3">
                    <li>Python</li>
                    <li>AWS</li>
                    <li>React</li>
                    <li>Spark</li>
                    <li>SQL</li>
                    <li>Flask</li>
                  </ul>
                </div>
              </div>
            </RevealOnView>
          </aside>

          {/* RIGHT: simplified, no internal card or horizontal carousel */}
          <div className="space-y-4">
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