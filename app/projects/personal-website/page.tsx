import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import RevealOnView from "@/components/reveal-on-view"
import DotGridShader from "@/components/DotGridShader"

export default function PersonalWebsitePage() {
  return (
    <main className="bg-neutral-950 text-white min-h-screen relative">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
        <DotGridShader />
      </div>
      
      <div className="relative px-4 py-8 max-w-6xl mx-auto">
        {/* Back Button */}
        <RevealOnView className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </RevealOnView>

        {/* Project Header */}
        <RevealOnView className="mb-12">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900/80 to-neutral-800/60 p-8 sm:p-12">
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="secondary" className="bg-black/50 text-white border-white/20 backdrop-blur-sm">
                HTML5
              </Badge>
              <Badge variant="secondary" className="bg-black/50 text-white border-white/20 backdrop-blur-sm">
                CSS3
              </Badge>
              <Badge variant="secondary" className="bg-black/50 text-white border-white/20 backdrop-blur-sm">
                JavaScript
              </Badge>
            </div>
            <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Personal Website
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-3xl">
              A comprehensive personal portfolio website demonstrating web development skills through interactive design and professional presentation.
            </p>
            <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90">
              <Link href="https://maxlovinger.github.io/" target="_blank" rel="noopener noreferrer">
                Visit Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </RevealOnView>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* Technologies Card */}
          <RevealOnView delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)] h-full"
                 style={{ backgroundImage: "linear-gradient(135deg, #111827, #2563eb)" }}>
              <div className="relative overflow-hidden rounded-[1.35rem] bg-black/80 backdrop-blur-sm p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Technologies Used</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-white/90">HTML5 with semantic markup</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-white/90">CSS3 with advanced animations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <span className="text-white/90">JavaScript for interactivity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span className="text-white/90">Ion Icons & FormSubmit.co</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnView>

          {/* Features Card */}
          <RevealOnView delay={0.2}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)] h-full"
                 style={{ backgroundImage: "linear-gradient(135deg, #0b132b, #5bc0be)" }}>
              <div className="relative overflow-hidden rounded-[1.35rem] bg-black/80 backdrop-blur-sm p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    <span className="text-white/90">20+ custom UI/UX features</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <span className="text-white/90">Interactive accordion resume</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                    <span className="text-white/90">3D flip card animations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                    <span className="text-white/90">Professional contact integration</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnView>
        </div>



        {/* Call to Action */}
        <RevealOnView className="text-center">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)]"
               style={{ backgroundImage: "linear-gradient(135deg, #0f172a, #10b981)" }}>
            <div className="relative overflow-hidden rounded-[1.35rem] bg-black/80 backdrop-blur-sm p-12">
              <h2 className="text-2xl font-bold mb-4">Ready to explore?</h2>
              <p className="text-white/70 mb-8 max-w-md mx-auto">
                Visit the live website to experience all the interactive features and animations firsthand.
              </p>
              <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90">
                <Link href="https://maxlovinger.github.io/" target="_blank" rel="noopener noreferrer">
                  Explore the Website
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </RevealOnView>
      </div>
    </main>
  )
}