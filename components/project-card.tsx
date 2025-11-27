import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import RevealOnView from "@/components/reveal-on-view"

type Props = {
  title?: string
  subtitle?: string
  imageSrc?: string
  tags?: string[]
  href?: string
  priority?: boolean
  gradientFrom?: string
  gradientTo?: string
  imageContainerClassName?: string
  containerClassName?: string
  revealDelay?: number
}

// Server Component (no client hooks)
export default function ProjectCard({
  title = "Project title",
  subtitle = "Project subtitle",
  imageSrc = "/placeholder.svg?height=720&width=1280",
  tags = ["Design", "Web"],
  href = "#",
  priority = false,
  gradientFrom = "#0f172a",
  gradientTo = "#6d28d9",
  imageContainerClassName,
  containerClassName,
  revealDelay = 0,
}: Props) {
  return (
    <article className={cn("group relative", containerClassName)}>
      <RevealOnView
        delay={revealDelay}
        className="rounded-3xl border border-white/20 p-1 shadow-2xl shadow-blue-500/10 lg:h-full backdrop-blur-sm"
        style={{
          backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        }}
      >
        <div className="relative overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-neutral-900 to-black lg:h-full border border-white/5">
          {/* Image */}
          <div className={cn("relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-full", imageContainerClassName)}>
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              priority={priority}
              className="object-cover"
            />
            {/* Dark overlay for theme cohesion */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
            {/* Blue theme overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
          </div>

          {/* Top-left tags */}
          <div className="pointer-events-none absolute left-4 top-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="pointer-events-auto bg-gradient-to-r from-blue-600/80 to-cyan-600/80 text-white border-white/30 backdrop-blur-md font-medium shadow-lg"
              >
                {t}
              </Badge>
            ))}
          </div>

          {/* Bottom content */}
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
            <div className="bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 rounded-t-2xl backdrop-blur-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold sm:text-xl text-white">{title}</h3>
                  <p className="text-sm text-white/80">{subtitle}</p>
                </div>
                <Link
                  href={href}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600/80 to-cyan-600/80 hover:from-blue-500 hover:to-cyan-500 px-4 py-2 text-sm font-semibold backdrop-blur-sm transition-all duration-300 self-start sm:self-auto border border-white/20"
                  aria-label={`View project: ${title}`}
                >
                  View project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </RevealOnView>
    </article>
  )
}