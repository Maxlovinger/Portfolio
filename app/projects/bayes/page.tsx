import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import RevealOnView from "@/components/reveal-on-view"
import DotGridShader from "@/components/DotGridShader"

export default function BayesPage() {
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
                React
              </Badge>
              <Badge variant="secondary" className="bg-black/50 text-white border-white/20 backdrop-blur-sm">
                Gemini 2.0 Flash
              </Badge>
              <Badge variant="secondary" className="bg-black/50 text-white border-white/20 backdrop-blur-sm">
                RAG
              </Badge>
              <Badge variant="secondary" className="bg-black/50 text-white border-white/20 backdrop-blur-sm">
                Supabase
              </Badge>
            </div>
            <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Bayes AI Assistant
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-3xl">
              🤖 An intelligent personal AI assistant that leverages Retrieval-Augmented Generation (RAG) to deliver highly personalized responses based on your interests and preferences. Unlike generic AI chatbots, Bayes learns from your interests to provide contextually relevant recommendations.
            </p>
            <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90">
              <Link href="https://bayes-ai.vercel.app" target="_blank" rel="noopener noreferrer">
                Try Bayes AI
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </RevealOnView>

        {/* Core Innovation */}
        <RevealOnView className="mb-12">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)]"
               style={{ backgroundImage: "linear-gradient(135deg, #0f172a, #6d28d9)" }}>
            <div className="relative overflow-hidden rounded-[1.35rem] bg-black/80 backdrop-blur-sm p-8">
              <h2 className="text-3xl font-bold mb-6">🧠 Core Innovation: RAG Implementation</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-300">How RAG Works</h3>
                  <ul className="space-y-3 text-white/80">
                    <li>• Stores your interests, preferences, and topics of focus</li>
                    <li>• Retrieves relevant context when you ask questions</li>
                    <li>• Augments AI prompts with your personal data</li>
                    <li>• Generates responses tailored to your knowledge level</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">Example Impact</h3>
                  <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                    <p className="text-white/90 text-sm italic">
                      "Instead of generic advice like 'learn programming,' Bayes might suggest 'explore PyTorch for deep learning since you're interested in AI/ML and Python, or try computer vision for sports analytics given your basketball interest.'"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnView>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* Key Features Card */}
          <RevealOnView delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)] h-full"
                 style={{ backgroundImage: "linear-gradient(135deg, #111827, #2563eb)" }}>
              <div className="relative overflow-hidden rounded-[1.35rem] bg-black/80 backdrop-blur-sm p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-white/90">Intelligent chat with Google Gemini 2.0</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-white/90">Personalization engine with interest tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <span className="text-white/90">Knowledge management & saved responses</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span className="text-white/90">Rich content with markdown & code highlighting</span>
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
                <h3 className="text-2xl font-bold mb-6">Technical Architecture</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    <span className="text-white/90">React + Vite + Tailwind CSS</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <span className="text-white/90">Node.js + Express RESTful API</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                    <span className="text-white/90">Supabase PostgreSQL with RLS</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                    <span className="text-white/90">Custom RAG pipeline with vector similarity</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnView>
        </div>

        {/* Security & Performance */}
        <RevealOnView className="mb-12">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)]"
               style={{ backgroundImage: "linear-gradient(135deg, #1f2937, #8b5cf6)" }}>
            <div className="relative overflow-hidden rounded-[1.35rem] bg-black/80 backdrop-blur-sm p-8">
              <h2 className="text-3xl font-bold mb-8">🔐 Enterprise-Grade Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-purple-300">Security</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Email verification authentication</li>
                    <li>• Row-level security policies</li>
                    <li>• Secure API key management</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-cyan-300">Performance</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Real-time data synchronization</li>
                    <li>• Indexed database queries</li>
                    <li>• Optimized vector similarity</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-green-300">User Experience</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Fully responsive design</li>
                    <li>• Framer Motion animations</li>
                    <li>• Cross-platform compatibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </RevealOnView>

        {/* Business Value */}
        <RevealOnView className="mb-12">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)]"
               style={{ backgroundImage: "linear-gradient(135deg, #0f172a, #dc2626)" }}>
            <div className="relative overflow-hidden rounded-[1.35rem] bg-black/80 backdrop-blur-sm p-8">
              <h2 className="text-3xl font-bold mb-8">💼 Value</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-300">User Benefits</h3>
                  <ul className="space-y-3 text-white/80">
                    <li>• <strong>Personalized Learning:</strong> Recommendations match individual interests</li>
                    <li>• <strong>Knowledge Retention:</strong> Save and organize important insights</li>
                    <li>• <strong>Contextual Conversations:</strong> AI remembers user preferences</li>
                    <li>• <strong>Time Efficiency:</strong> Relevant responses reduce information overload</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-orange-300">Technical Benefits</h3>
                  <ul className="space-y-3 text-white/80">
                    <li>• <strong>Scalable RAG:</strong> Custom personalization engine</li>
                    <li>• <strong>Modern Stack:</strong> Latest frameworks and best practices</li>
                    <li>• <strong>Security First:</strong> Enterprise-grade data protection</li>
                    <li>• <strong>Cloud Native:</strong> Fully deployable on modern platforms</li>
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
              <h2 className="text-2xl font-bold mb-4">Experience Personalized AI</h2>
              <p className="text-white/70 mb-8 max-w-md mx-auto">
                Try Bayes AI and see how RAG technology creates truly personalized conversations tailored to your interests.
              </p>
              <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90">
                <Link href="https://bayes-ai.vercel.app" target="_blank" rel="noopener noreferrer">
                  Launch Bayes AI
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