import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Eye, Handshake, MessageCircle, Shield, Building } from "lucide-react"

export default function DespreNoiPage() {
  const manifestPoints = [
    {
      icon: CheckCircle,
      title: "Dezicerea de vechile practici politice",
      description:
        "Spunem un NU hotărât moștenirii politice care a adus România în acest punct. Ne distanțăm de toate partidele și structurile care au guvernat până acum, refuzând categoric să repetăm greșelile lor: promisiuni false, cultivarea urii, discriminare și manipulare constantă. Trecutul nu poate fi schimbat, dar viitorul poate fi construit diferit.",
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Shield,
      title: "Fără salvatori falși",
      description:
        'Istoria recentă ne-a arătat pericolul „liderilor-mesia" care, sub măști patriotarde sau mesaje radicale, au urmărit doar interese personale sau de grup. Respingem acest model. Credem că soluțiile vin de la comunitate, de la dialog și de la efortul comun. Puterea trebuie să aparțină cetățenilor organizați și conștienți, nu unor idoli de carton fabricați de aparate de propagandă.',
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Eye,
      title: "Etică și transparență",
      description:
        "Fiecare pas pe care îl facem va fi ghidat de reguli clare, de o etică ireproșabilă și de asumarea responsabilității. Toate deciziile, de la cele administrative la cele politice, vor fi transparente și ușor de verificat de către orice cetățean. Vom folosi tehnologia pentru a asigura o administrație deschisă, punând capăt secretomaniei care a permis corupția.",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
    },
    {
      icon: Users,
      title: "Implicare civică reală",
      description:
        "Schimbarea nu poate fi făcută de un singur om sau de un singur partid. De aceea, chemăm alături de noi fiecare categorie socială: tineri, vârstnici, muncitori, antreprenori, intelectuali. Rolul cetățeanului nu se termină la vot. Încurajăm participarea directă, prin inițiative locale, dezbateri publice și un vot conștient, informat. Nu mai putem sta pe margine, trebuie să fim actorii principali ai propriului destin.",
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Handshake,
      title: "Cooperare, nu confruntare",
      description:
        "Societatea românească este profund divizată de discursuri care incită la ură. Misiunea noastră este să construim punți între oameni și comunități. Vom promova dialogul și respectul reciproc ca principale unelte politice. Doar împreună, prin cooperare și solidaritate, putem depăși provocările cu care ne confruntăm.",
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50",
    },
    {
      icon: MessageCircle,
      title: "Independență față de manipularea mediatică",
      description:
        "Suntem conștienți de puterea distructivă a propagandei. Ne desprindem total de televiziunile și sursele de informare care trăiesc din frică, scandal și dezinformare. Ne angajăm să comunicăm direct, onest și transparent cu cetățenii. Vom căuta și promova adevărul bazat pe surse curate, verificabile, pentru că o democrație sănătoasă se bazează pe cetățeni informați corect.",
      color: "from-rose-500 to-pink-600",
      bgColor: "bg-rose-50",
    },
    {
      icon: Building,
      title: "Coloană vertebrală colectivă",
      description:
        "Proiectul nostru nu este unul de fațadă. Nu căutăm un decor frumos, ci o structură solidă, cu o rezistență morală de neclintit. Știm că pornim de la zero, dar tocmai de aceea vom construi pe baze corecte: respect, încredere reciprocă și responsabilitate individuală și colectivă. Aceasta este garanția că noua construcție civică nu se va prăbuși la prima furtună.",
      color: "from-slate-500 to-gray-600",
      bgColor: "bg-slate-50",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Hero Section with Logo */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
        <div className="absolute top-10 left-10 opacity-10">
          <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse"></div>
        </div>
        <div className="absolute bottom-10 right-10 opacity-10">
          <div className="w-24 h-24 bg-gradient-to-br from-secondary to-primary rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            {/* Logo Integration */}
            <div className="flex justify-center mb-8">
              <div className="relative group"></div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary mb-8 text-balance animate-fade-in">
              Manifestul ePACE
            </h1>

            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-balance">
                Angajamentul Nostru pentru un Nou Început Civic
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>

            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-pretty mt-8 opacity-90">
              Acesta nu este un simplu text, ci un <span className="font-semibold text-primary">contract moral</span> pe
              care îl încheiem cu cetățenii României. Ne angajăm să respectăm aceste principii în fiecare zi, în fiecare
              acțiune politică.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-shadow border border-primary/10">
                  <div className="text-3xl font-black text-primary mb-2">7</div>
                  <div className="text-sm font-medium text-muted-foreground">Principii Fundamentale</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-shadow border border-secondary/10">
                  <div className="text-3xl font-black text-secondary mb-2">100%</div>
                  <div className="text-sm font-medium text-muted-foreground">Transparență</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-shadow border border-primary/10">
                  <div className="text-3xl font-black text-primary mb-2">∞</div>
                  <div className="text-sm font-medium text-muted-foreground">Angajament Civic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Points */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Cei 7 Piloni ai Schimbării</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fiecare principiu reprezintă o promisiune fermă către cetățenii României
            </p>
          </div>

          <div className="space-y-8">
            {manifestPoints.map((point, index) => (
              <div key={index} className="group relative" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] bg-white/80 backdrop-blur-sm">
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${point.color}`}></div>

                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-6">
                      <div
                        className={`${point.bgColor} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        <point.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            #{index + 1}
                          </span>
                          <div className="flex gap-1">{[...Array(5)].map((_, i) => null)}</div>
                        </div>
                        <CardTitle className="text-2xl font-bold text-card-foreground leading-tight group-hover:text-primary transition-colors">
                          {point.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed text-lg mb-6">{point.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Alătură-te Mișcării pentru Schimbare</h3>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Împreună putem construi o Românie mai bună, bazată pe principii solide și valori autentice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/implica-te">
              <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
                Devino Membru
              </button>
            </a>
            </a>
  <a href="/ECHIPA%20PARTIDULUI%20EPACE.pdf" target="_blank" rel="noopener noreferrer">
    <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
      Echipa Epace
    </button>
  </a>
          </div>
        </div>
      </section>
    </main>
  )
}
