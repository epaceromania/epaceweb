"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Scale,
  TrendingUp,
  GraduationCap,
  Heart,
  Leaf,
  Globe,
  ShieldCheck,
  Briefcase,
  Building,
  ChevronRight,
  Star,
  Church,
} from "lucide-react"

const platformSections = [
  {
    id: 1,
    title: "Administrație și Guvernare",
    icon: Shield,
    color: "from-emerald-500 to-teal-600",
    description: "O administrație eficientă și transparentă este fundamentul unui stat funcțional.",
    keyPoints: [
      "Sistem de recrutare bazat pe competențe și merit",
      "Digitalizarea completă a serviciilor publice",
      "Eliminarea birocrației inutile",
      "Evaluare continuă a performanței funcționarilor",
    ],
    stats: { value: "100%", label: "Transparență" },
  },
  {
    id: 2,
    title: "Justiție și Stat de Drept",
    icon: Scale,
    color: "from-blue-500 to-indigo-600",
    description: "Justiția independentă și aplicarea egală a legii pentru toți cetățenii.",
    keyPoints: [
      "Consolidarea independenței sistemului judiciar",
      "Accelerarea proceselor judiciare",
      "Sistem transparent de numire a magistraților",
      "Combaterea corupției prin măsuri preventive",
      "Răspunderea materială a magistraților pentru sentințele date gresit",
      "Reintroducerea pedepsei capitale/detenție pe viață pentru subminarea economiei naționale",
    ],
    stats: { value: "50%", label: "Reducere timp procese" },
  },
  {
    id: 3,
    title: "Economie și Resurse",
    icon: TrendingUp,
    color: "from-amber-500 to-orange-600",
    description: "O economie puternică și echitabilă bazată pe valorificarea resurselor naționale.",
    keyPoints: [
      "Exploatarea responsabilă a resurselor naturale",
      "Impozitarea echitabilă a companiilor străine",
      "Sprijinirea capitalului autohton și IMM-urilor",
      "Cadru fiscal stabil și predictibil",
      "Scăderea taxelor societăților comerciale pe modelul: Mai puțin  de la mai mulți, înseamnă un venit mai mare la buget, contrar modelului mai multe taxe de la mai puțini antreprenori.",
      "Eliminarea impozitelor pe proprietate",
    ],
    stats: { value: "25%", label: "Creștere PIB" },
  },
  {
    id: 4,
    title: "Educație și Cercetare",
    icon: GraduationCap,
    color: "from-purple-500 to-violet-600",
    description: "Educația de calitate și cercetarea avansată pentru viitorul națiunii.",
    keyPoints: [
      "Modernizarea infrastructurii educaționale",
      "Creșterea salariilor cadrelor didactice",
      "Dezvoltarea programelor de cercetare și inovare",
      "Promovarea educației civice și valorilor democratice",
    ],
    stats: { value: "3x", label: "Investiții în educație" },
  },
  {
    id: 5,
    title: "Sănătate și Protecție Socială",
    icon: Heart,
    color: "from-red-500 to-pink-600",
    description: "Accesul la servicii medicale de calitate și protecție socială solidă.",
    keyPoints: [
      "Modernizarea spitalelor și dotarea cu echipamente",
      "Creșterea numărului de medici",
      "Sistem integrat de sănătate digitală",
      "Programe de prevenție și educație pentru sănătate",
    ],
    stats: { value: "90%", label: "Acoperire medicală" },
  },
  {
    id: 6,
    title: "Mediu și Dezvoltare Durabilă",
    icon: Leaf,
    color: "from-green-500 to-emerald-600",
    description: "Protecția mediului și dezvoltarea durabilă pentru generațiile viitoare.",
    keyPoints: [
      "Investiții masive în energie regenerabilă",
      "Protejarea și restaurarea ecosistemelor",
      "Promovarea agriculturii ecologice",
      "Implementarea unei economii circulare",
      "Subvenții masive pentru populație în energie verde",
      "Refacerea urgenta a sistemului de irigații",
      "Investiții masive în sisteme energetice curate, hidrocentrale, nuclear, eoliene, fotovoltaice, biomasa",
      "Punerea gratuit la dispoziție a semințelor și puieților rezistenți la mediu și productivi către firme și populație. Astfel vom reduce poluarea mediului cu substanțe chimice.",
    ],
    stats: { value: "60%", label: "Energie verde" },
  },
  {
    id: 7,
    title: "Politică Externă și Integrare Europeană",
    icon: Globe,
    color: "from-cyan-500 to-blue-600",
    description: "România ca partener de încredere pe scena internațională.",
    keyPoints: [
      "Consolidarea relațiilor cu partenerii strategici",
      "Participarea activă la procesele decizionale europene",
      "Promovarea intereselor economice românești",
      "Dezvoltarea diplomației culturale și economice",
      "Stoparea  imigrației și înlocuirii populației românești cu străini",
      "Reintegrarea românilor care au plecat din țară din cauza vicisitudinilor",
      "Demararea proiectului de reunificare a celor două state românești România și Republica Moldova și revendicarea teritoriilor rupte de la patria mamă prin Pactul Ribbentrop -Molotov, declarat nul de către ONU, precum și în baza Declarației parlamentului României Nr 24 din 24 iunie 1991 și a declarației din 28 noiembrie 1991",
    ],
    stats: { value: "Top 10", label: "Poziție UE" },
  },
  {
    id: 8,
    title: "Apărare și Securitate Națională",
    icon: ShieldCheck,
    color: "from-slate-500 to-gray-600",
    description: "Securitatea națională și apărarea țării sunt responsabilități sacre.",
    keyPoints: [
      "Modernizarea echipamentelor și tehnologiilor militare",
      "Îmbunătățirea condițiilor de serviciu pentru militari",
      "Dezvoltarea industriei de apărare națională",
      "Consolidarea cooperării în cadrul NATO și UE",
      "Salarizarea/drepturile la nivel NATO a Armatei Române, atât a militarilor activi, cât și a Rezervei Armatei.",
    ],
    stats: { value: "2%", label: "Din PIB pentru apărare" },
  },
  {
    id: 9,
    title: "Muncă și Antreprenoriat",
    icon: Briefcase,
    color: "from-indigo-500 to-purple-600",
    description: "Crearea de locuri de muncă de calitate și susținerea antreprenoriatului.",
    keyPoints: [
      "Simplificarea procedurilor de înființare afaceri",
      "Programe de formare profesională adaptate",
      "Protejarea drepturilor lucrătorilor",
      "Susținerea inovației și start-up-urilor",
      "Punerea la dispoziție gratuit de către stat proiectelor de investiții către antreprenor, în vederea accesării fondurilor europene",
    ],
    stats: { value: "500k", label: "Locuri de muncă noi" },
  },
  {
    id: 10,
    title: "Dezvoltare Regională și Infrastructură",
    icon: Building,
    color: "from-orange-500 to-red-600",
    description: "Dezvoltarea echilibrată și modernizarea infrastructurii naționale.",
    keyPoints: [
      "Investiții masive în infrastructura de transport",
      "Dezvoltarea infrastructurii digitale",
      "Sprijinirea dezvoltării zonelor defavorizate",
      "Modernizarea infrastructurii de utilități",
    ],
    stats: { value: "1000km", label: "Autostrăzi noi" },
  },
  {
    id: 11,
    title: "Cultură și Religie",
    icon: Church,
    color: "from-violet-500 to-purple-600",
    description: "Protejarea și promovarea valorilor creștine și culturale ale poporului român.",
    keyPoints: [
      "Protejarea creștinismului și a culturii creștine, a datinilor și obiceiurilor poporului român",
      "Finanțarea justă a Bisericilor creștine și a culturii poporului român",
      "Primordializarea valorilor istorice ale poporului român în cultura românească",
      "Eliminarea cenzurii istorice de orice fel",
    ],
    stats: { value: "100%", label: "Protecție culturală" },
  },
]

export default function PlatformaPage() {
  const [selectedSection, setSelectedSection] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Hero Section with Logo */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
        <div className="absolute top-10 left-10 opacity-20">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent animate-pulse" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-primary animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 mt-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6 text-balance"
            >
              Platforma Politică ePACE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty"
            >
              Viziune și Soluții Concrete pentru o Românie Modernă, Prosperă și Durabilă
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Shield className="w-4 h-4 mr-2" />
                Securitate
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Building className="w-4 h-4 mr-2" />
                Patrimoniu
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Leaf className="w-4 h-4 mr-2" />
                Mediu
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <TrendingUp className="w-4 h-4 mr-2" />
                Agricultură
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Church className="w-4 h-4 mr-2" />
                Cultură și Religie
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Platform Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">11 Piloni pentru Viitorul României</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Fiecare domeniu de politică publică este conceput pentru a răspunde nevoilor concrete ale cetățenilor
              români
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformSections.map((section, index) => {
              const IconComponent = section.icon
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredCard(section.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group cursor-pointer"
                  onClick={() => setSelectedSection(selectedSection === section.id ? null : section.id)}
                >
                  <Card className="h-full border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 bg-card/50 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <motion.div
                          animate={{
                            scale: hoveredCard === section.id ? 1.1 : 1,
                            rotate: hoveredCard === section.id ? 5 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className={`p-3 rounded-xl bg-gradient-to-br ${section.color} text-white shadow-lg`}
                        >
                          <IconComponent className="w-6 h-6" />
                        </motion.div>
                      </div>

                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300 text-balance">
                        {section.title}
                      </CardTitle>

                      <p className="text-sm text-muted-foreground text-pretty">{section.description}</p>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs text-muted-foreground">{section.stats.label}</span>
                        <motion.div animate={{ x: hoveredCard === section.id ? 5 : 0 }} transition={{ duration: 0.3 }}>
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </motion.div>
                      </div>

                      <AnimatePresence>
                        {selectedSection === section.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-border/50 pt-4 mt-4"
                          >
                            <h4 className="font-semibold mb-3 text-sm">Măsuri Concrete:</h4>
                            <ul className="space-y-2">
                              {section.keyPoints.map((point, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                                  className="flex items-start gap-2 text-sm text-muted-foreground"
                                >
                                  <Star className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                                  <span className="text-pretty">{point}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-8"></div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Împreună Construim Viitorul României</h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Fiecare cetățean poate contribui la implementarea acestei viziuni. Alătură-te mișcării pentru o Românie
              mai bună.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/implica-te">
                <Button size="lg" className="px-8 py-4 text-lg font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-users w-5 h-5 mr-2"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  Implică-te Acum
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
