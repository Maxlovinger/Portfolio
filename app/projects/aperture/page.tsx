import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import RevealOnView from "@/components/reveal-on-view"
import DotGridShader from "@/components/DotGridShader"

export default function AperturePage() {
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
                JavaScript
              </Badge>
              <Badge variant="secondary" className="bg-black/50 text-white border-white/20 backdrop-blur-sm">
                Gemini AI
              </Badge>
              <Badge variant="secondary" className="bg-black/50 text-white border-white/20 backdrop-blur-sm">
                TMDB API
              </Badge>
              <Badge variant="secondary" className="bg-black/50 text-white border-white/20 backdrop-blur-sm">
                Supabase
              </Badge>
            </div>
            <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Aperture
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-3xl">
              🎬 A sophisticated movie rating and recommendation platform that combines detailed 10-category movie analysis with AI-powered personalized suggestions. Features a modern dark theme with purple/blue gradients and comprehensive movie management capabilities.
            </p>
            <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90">
              <Link href="#" target="_blank" rel="noopener noreferrer">
                View Application
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </RevealOnView>

        {/* Advanced Rating System */}
        <RevealOnView className="mb-12">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)]"
               style={{ backgroundImage: "linear-gradient(135deg, #8B5CF6, #3B82F6)" }}>
            <div className="relative overflow-hidden rounded-[1.35rem] bg-black/80 backdrop-blur-sm p-8">
              <h2 className="text-3xl font-bold mb-6">🎯 Advanced Rating System</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-300">10-Category Scoring</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Story & Plot (1.5x weight)</li>
                    <li>• Characters & Development (1.3x weight)</li>
                    <li>• Acting/Performances</li>
                    <li>• Direction & Cinematography</li>
                    <li>• Pacing & Music/Soundtrack</li>
                    <li>• Ending, Rewatch Value & Visual Effects</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-300">Smart Features</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Intelligent weighting algorithm for accuracy</li>
                    <li>• Slider-based interface with 0.1 precision</li>
                    <li>• Automatic overall score calculation</li>
                    <li>• Visual ranking indicators</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </RevealOnView>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* AI Features Card */}
          <RevealOnView delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)] h-full"
                 style={{ backgroundImage: "linear-gradient(135deg, #111827, #2563eb)" }}>
              <div className="relative overflow-hidden rounded-[1.35rem] bg-black/80 backdrop-blur-sm p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">🤖 AI-Powered Recommendations</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-white/90">Google Gemini AI integration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-white/90">Advanced filtering by genre & rating</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <span className="text-white/90">Smart exclusion logic</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span className="text-white/90">Contextual analysis of preferences</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnView>

          {/* Tech Stack Card */}
          <RevealOnView delay={0.2}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)] h-full"
                 style={{ backgroundImage: "linear-gradient(135deg, #0b132b, #5bc0be)" }}>
              <div className="relative overflow-hidden rounded-[1.35rem] bg-black/80 backdrop-blur-sm p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">🛠️ Technical Stack</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    <span className="text-white/90">Vanilla JavaScript ES6+</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <span className="text-white/90">GSAP animations & transitions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                    <span className="text-white/90">Supabase PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                    <span className="text-white/90">TMDB API integration</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnView>
        </div>

        {/* User Experience */}
        <RevealOnView className="mb-12">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)]"
               style={{ backgroundImage: "linear-gradient(135deg, #1f2937, #8b5cf6)" }}>
            <div className="relative overflow-hidden rounded-[1.35rem] bg-black/80 backdrop-blur-sm p-8">
              <h2 className="text-3xl font-bold mb-8">🎨 Modern User Experience</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-purple-300">Visual Design</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• 3D animated landing page</li>
                    <li>• 180+ movie poster gallery</li>
                    <li>• Glassmorphism UI effects</li>
                    <li>• Purple/blue gradient theme</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-cyan-300">Functionality</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Comprehensive movie management</li>
                    <li>• Watchlist & organization</li>
                    <li>• Expandable movie cards</li>
                    <li>• Cross-platform sync</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-green-300">Performance</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Lazy loading optimization</li>
                    <li>• Debounced search</li>
                    <li>• Efficient state management</li>
                    <li>• Responsive design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </RevealOnView>

        {/* Architecture Highlights */}
        <RevealOnView className="mb-12">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)]"
               style={{ backgroundImage: "linear-gradient(135deg, #0f172a, #dc2626)" }}>
            <div className="relative overflow-hidden rounded-[1.35rem] bg-black/80 backdrop-blur-sm p-8">
              <h2 className="text-3xl font-bold mb-8">🏗️ Architecture Highlights</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-300">Security & Performance</h3>
                  <ul className="space-y-3 text-white/80">
                    <li>• <strong>API Key Protection:</strong> Secured through serverless proxy</li>
                    <li>• <strong>Authentication Guards:</strong> Route protection with redirects</li>
                    <li>• <strong>Optimized Queries:</strong> Indexed database relationships</li>
                    <li>• <strong>Progressive Enhancement:</strong> Works without JavaScript</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-orange-300">Development Excellence</h3>
                  <ul className="space-y-3 text-white/80">
                    <li>• <strong>Modern JavaScript:</strong> ES6+ with async/await</li>
                    <li>• <strong>Component Architecture:</strong> Reusable UI library</li>
                    <li>• <strong>Error Handling:</strong> Graceful degradation</li>
                    <li>• <strong>Accessibility:</strong> Keyboard navigation support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </RevealOnView>

        {/* Call to Action */}
        <RevealOnView className="text-center">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)]"
               style={{ backgroundImage: "linear-gradient(135deg, #0f172a, #10b981)" }}>
            <div className="relative overflow-hidden rounded-[1.35rem] bg-black/80 backdrop-blur-sm p-12">
              <h2 className="text-2xl font-bold mb-4">Discover Your Next Favorite Movie</h2>
              <p className="text-white/70 mb-8 max-w-md mx-auto">
                Experience sophisticated movie rating with AI-powered recommendations and beautiful 3D animations.
              </p>
              <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  Explore Aperture
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