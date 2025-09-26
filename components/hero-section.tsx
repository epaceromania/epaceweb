import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, Users, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      <div className="absolute inset-0 bg-[url('/romanian-landscape-with-mountains-and-flag.jpg')] bg-cover bg-center opacity-10"></div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center mx-6 my-16">
          <div className="text-center lg:text-left">
            

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
              Pentru{" "}
              <span className="text-primary relative">
                Suveranitate
                
              </span>
              , Merit și <span className="text-secondary">Demnitate</span> Națională
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed text-pretty">
              {"Suntem partidul oamenilor simpli și de bună credință.\nPrincipalul scop este organizarea și unitatea tuturor oamenilor de bine."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/implica-te">
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  Alătură-te Mișcării Noastre
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/platforma">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 border-2 hover:bg-primary/5 bg-transparent"
                >
                  Descoperă Platforma
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Suveranitate</h3>
                </div>
                <p className="text-muted-foreground">Decizii luate aici, pentru noi, în interesul României</p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold">Merit</h3>
                </div>
                <p className="text-muted-foreground">Funcții ocupate pe competență, nu prin favoruri politice</p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-accent mr-3" />
                  <h3 className="text-xl font-semibold">Demnitate</h3>
                </div>
                <p className="text-muted-foreground">Respect profund pentru cetățenii României</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
