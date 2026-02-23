import { Search, Target, Cog, BarChart3 } from "lucide-react"
import { NeomorphCTA } from "@/components/ui/neomorph-cta"

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Diagnostic",
    description: "15 min avec un expert. On analyse votre note, vos avis, et on chiffre le manque a gagner.",
    color: "#4285F4", // Google Blue
  },
  {
    step: "02",
    icon: Target,
    title: "Plan d'action",
    description: "Objectifs concrets : avis a collecter, avis a contester, note cible, echeancier precis.",
    color: "#EA4335", // Google Red
  },
  {
    step: "03",
    icon: Cog,
    title: "Execution",
    description: "Collecte, contestation, avis : nos equipes gerent tout. Vous n'avez rien a faire.",
    color: "#FBBC04", // Google Yellow
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Resultats",
    description: "Tableau de bord temps reel : note, avis traites, impact mesure sur votre CA.",
    color: "#34A853", // Google Green
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-foreground py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Notre methode
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-background md:text-5xl text-balance">
            {"Du diagnostic aux "}
            <span className="font-serif italic text-accent">resultats</span>
            {" en 4 etapes"}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-background/40 md:text-lg">
            {"Accompagnement cle en main. Vous nous confiez votre reputation, on livre les resultats."}
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div 
              key={s.step} 
              className="relative group"
              style={{
                '--electric-border-color': s.color,
                '--gradient-color': `color-mix(in oklch, ${s.color} 30%, transparent)`,
              } as React.CSSProperties}
            >
              {/* Card container with gradient background */}
              <div className="p-[2px] rounded-3xl relative bg-gradient-to-br from-[var(--gradient-color)] via-transparent to-[var(--gradient-color)]">
                {/* Border outer */}
                <div 
                  className="rounded-3xl pr-[2px] pb-[2px]"
                  style={{
                    border: `2px solid color-mix(in oklch, ${s.color} 50%, transparent)`,
                  }}
                >
                  {/* Main card */}
                  <div 
                    className="relative rounded-3xl p-8 bg-[#2e2e2e] -mt-[4px] -ml-[4px] overflow-hidden"
                    style={{
                      border: `2px solid ${s.color}`,
                    }}
                  >
                    {/* Glow layers */}
                    <div 
                      className="absolute inset-0 rounded-3xl pointer-events-none"
                      style={{
                        border: `2px solid color-mix(in oklch, ${s.color} 60%, transparent)`,
                        filter: 'blur(1px)',
                      }}
                    />
                    <div 
                      className="absolute inset-0 rounded-3xl pointer-events-none"
                      style={{
                        border: `2px solid ${s.color}`,
                        filter: 'blur(4px)',
                      }}
                    />
                    
                    {/* Overlay effects */}
                    <div 
                      className="absolute inset-0 rounded-3xl pointer-events-none opacity-100 mix-blend-overlay scale-110"
                      style={{
                        filter: 'blur(16px)',
                        background: 'linear-gradient(-30deg, white, transparent 30%, transparent 70%, white)',
                      }}
                    />
                    <div 
                      className="absolute inset-0 rounded-3xl pointer-events-none opacity-50 mix-blend-overlay scale-110"
                      style={{
                        filter: 'blur(16px)',
                        background: 'linear-gradient(-30deg, white, transparent 30%, transparent 70%, white)',
                      }}
                    />
                    
                    {/* Background glow */}
                    <div 
                      className="absolute inset-0 rounded-3xl -z-10 opacity-30 scale-110"
                      style={{
                        filter: 'blur(32px)',
                        background: `linear-gradient(-30deg, ${s.color}, transparent, ${s.color})`,
                      }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between">
                        <div 
                          className="flex h-12 w-12 items-center justify-center rounded-2xl"
                          style={{
                            backgroundColor: `color-mix(in oklch, ${s.color} 20%, transparent)`,
                          }}
                        >
                          <s.icon className="h-5 w-5" style={{ color: s.color }} />
                        </div>
                        <span 
                          className="text-4xl font-black tracking-tighter transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_currentColor]"
                          style={{
                            color: `color-mix(in oklch, ${s.color} 50%, transparent)`,
                          }}
                        >
                          {s.step}
                        </span>
                      </div>
                      <h3 className="mt-7 text-lg font-bold text-background">{s.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-background/60">{s.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <NeomorphCTA href="#pricing">
            {"Commencer maintenant"}
          </NeomorphCTA>
        </div>
      </div>
    </section>
  )
}
