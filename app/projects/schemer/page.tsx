import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import RevealOnView from "@/components/reveal-on-view"
import DotGridShader from "@/components/DotGridShader"

export default function SchemerPage() {
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
                Next.js
              </Badge>
              <Badge variant="secondary" className="bg-black/50 text-white border-white/20 backdrop-blur-sm">
                Supabase
              </Badge>
              <Badge variant="secondary" className="bg-black/50 text-white border-white/20 backdrop-blur-sm">
                TypeScript
              </Badge>
              <Badge variant="secondary" className="bg-black/50 text-white border-white/20 backdrop-blur-sm">
                Tailwind CSS
              </Badge>
            </div>
            <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Code Rod - Schemer
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-3xl">
              🏅 First place winner at the Tri-Co Hackathon! Built in 24 hours by our team (Aidan Rodriguez, Jonathan D'Amour, and Max Lovinger), this course-planning platform makes academic scheduling simpler and smarter for students across Swarthmore, Haverford, and Bryn Mawr. Currently in demo mode.
            </p>
            <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90">
              <Link href="https://code-rod-hhr6.vercel.app" target="_blank" rel="noopener noreferrer">
                Visit Application
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </RevealOnView>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* Tech Stack Card */}
          <RevealOnView delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)] h-full"
                 style={{ backgroundImage: "linear-gradient(135deg, #111827, #2563eb)" }}>
              <div className="relative overflow-hidden rounded-[1.35rem] bg-black/80 backdrop-blur-sm p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-white/90">Next.js 15.5.6 with App Router</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-white/90">Supabase PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <span className="text-white/90">TypeScript for type safety</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span className="text-white/90">Tailwind CSS & Lucide Icons</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnView>

          {/* Key Features Card */}
          <RevealOnView delay={0.2}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)] h-full"
                 style={{ backgroundImage: "linear-gradient(135deg, #0b132b, #5bc0be)" }}>
              <div className="relative overflow-hidden rounded-[1.35rem] bg-black/80 backdrop-blur-sm p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    <span className="text-white/90">Dual login portals (students & advisors)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <span className="text-white/90">4-year academic planning interface</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                    <span className="text-white/90">Real-time progress tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                    <span className="text-white/90">Weekly calendar view</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnView>
        </div>

        {/* Detailed Features */}
        <RevealOnView className="mb-12">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)]"
               style={{ backgroundImage: "linear-gradient(135deg, #1f2937, #8b5cf6)" }}>
            <div className="relative overflow-hidden rounded-[1.35rem] bg-black/80 backdrop-blur-sm p-8">
              <h2 className="text-3xl font-bold mb-8">Application Capabilities</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-300">Student Dashboard</h3>
                  <ul className="space-y-3 text-white/80">
                    <li>• Real-time credit calculations and graduation requirements</li>
                    <li>• 4-year planning with semester-by-semester organization</li>
                    <li>• Weekly calendar view with color-coded courses</li>
                    <li>• Direct advisor communication integration</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">Advisor Dashboard</h3>
                  <ul className="space-y-3 text-white/80">
                    <li>• Comprehensive overview of all assigned advisees</li>
                    <li>• Progress monitoring with detailed tracking</li>
                    <li>• Interactive student modals with note-taking</li>
                    <li>• Automatic class year determination</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </RevealOnView>

        {/* Hackathon Achievement */}
        <RevealOnView className="mb-12">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)]"
               style={{ backgroundImage: "linear-gradient(135deg, #0f172a, #dc2626)" }}>
            <div className="relative overflow-hidden rounded-[1.35rem] bg-black/80 backdrop-blur-sm p-8">
              <h2 className="text-3xl font-bold mb-8">🏅 Hackathon Victory</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text mb-3">1st</div>
                  <div className="text-white/70">Place Winner</div>
                  <div className="text-sm text-white/50 mt-1">Tri-Co Hackathon</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-3">24</div>
                  <div className="text-white/70">Hours</div>
                  <div className="text-sm text-white/50 mt-1">Development time</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-3">3</div>
                  <div className="text-white/70">Colleges</div>
                  <div className="text-sm text-white/50 mt-1">Swarthmore, Haverford, Bryn Mawr</div>
                </div>
              </div>
              <p className="text-white/80 text-center max-w-4xl mx-auto">
                Proud of what our team accomplished through countless hours of coding, problem-solving, design work, and collaboration. 
                The platform integrates major/minor requirements, course planning, and personalized recommendations with future potential 
                for AI-driven suggestions and Tri-Co course data expansion.
              </p>
            </div>
          </div>
        </RevealOnView>

        {/* Call to Action */}
        <RevealOnView className="text-center">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)]"
               style={{ backgroundImage: "linear-gradient(135deg, #0f172a, #10b981)" }}>
            <div className="relative overflow-hidden rounded-[1.35rem] bg-black/80 backdrop-blur-sm p-12">
              <h2 className="text-2xl font-bold mb-4">Experience Academic Planning Reimagined</h2>
              <p className="text-white/70 mb-8 max-w-md mx-auto">
                Explore the full-featured application designed specifically for Haverford College's academic planning needs.
              </p>
              <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90">
                <Link href="https://code-rod-hhr6.vercel.app" target="_blank" rel="noopener noreferrer">
                  Try Schemer
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