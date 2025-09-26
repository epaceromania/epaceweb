import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function ManifestoPreview() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_70%)]\"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            
            <h2 className="text-4xl md:text-6xl font-black text-white text-balance leading-tight">
              Un Nou Început Civic
            </h2>
            
          </div>

          <p className="text-2xl md:text-3xl font-bold text-white/90 mb-4">O Ruptură Totală cu Trecutul</p>
        </div>

        <Card className="max-w-5xl mx-auto border-0 shadow-2xl bg-white/10 backdrop-blur-xl hover:bg-white/15 transition-all duration-500 group">
          <CardContent className="p-12">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0"></div>
              <div className="flex-1">
                <p className="text-xl md:text-2xl text-white leading-relaxed mb-8 text-pretty font-medium">
                  Timp de decenii, politica românească a fost dominată de promisiuni false, ură și manipulare. Noi ne
                  distanțăm ferm de aceste practici toxice. Refuzăm să mai acceptăm „salvatori falși" care ascund
                  interese personale sub măști patriotarde. Puterea reală trebuie să aparțină comunității, cetățenilor
                  implicați. ePACE este despre cooperare, nu despre confruntare; despre transparență totală, nu despre
                  decizii luate în spatele ușilor închise.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/despre-noi">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                >
                  <span className="mr-3">Descoperă Manifestul Nostru</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
