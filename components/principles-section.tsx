import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Flag, Shield, Scale, Trophy } from "lucide-react"
import Image from "next/image"

export function PrinciplesSection() {
  const principles = [
    {
      icon: Flag,
      title: "Patriotism și Independență",
      description:
        "Credem într-un patriotism modern și responsabil. A fi patriot înseamnă a dori ca statul român să fie stăpân pe propriile decizii și resurse. Luptăm pentru o independență reală, în care parteneriatele externe se bazează pe respect reciproc și demnitate națională, nu pe subordonare.",
      gradient: "from-red-500 to-yellow-500",
      bgColor: "bg-gradient-to-br from-red-50 to-yellow-50",
      number: "01",
    },
    {
      icon: Shield,
      title: "Suveranitate și Integritate",
      description:
        "Suveranitatea și integritatea teritorială a României sunt valori sacre și de neatins. Ele reprezintă garanția existenței noastre ca națiune. Vom apăra aceste principii cu fermitate, asigurându-ne că vocea României este auzită și respectată pe plan internațional.",
      gradient: "from-blue-500 to-green-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-green-50",
      number: "02",
    },
    {
      icon: Scale,
      title: "Respectarea Legii",
      description:
        "Nimeni nu este mai presus de lege. Acest principiu simplu trebuie să devină realitate în România. Vom milita pentru aplicarea corectă și imparțială a Constituției și a legilor, eliminând orice formă de privilegiu sau excepție. Justiția trebuie să fie independentă și puternică.",
      gradient: "from-purple-500 to-indigo-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50",
      number: "03",
    },
    {
      icon: Trophy,
      title: "Meritocrație",
      description:
        "Performanța trebuie să fie singurul criteriu de promovare în societate. Respingem nepotismul și clientelismul care au blocat dezvoltarea țării. Fiecare funcție publică, fiecare drept și fiecare sprijin din partea statului trebuie câștigat prin valoare personală, competență și muncă cinstită.",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      number: "04",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4 text-balance">
            Fundația pe care construim viitorul
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Principiile fundamentale care ghidează viziunea noastră pentru o Românie mai bună
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${principle.bgColor}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full"></div>

              <CardHeader className="relative pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-r ${principle.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <principle.icon className="h-8 w-8 text-white" />
                  </div>
                  <div
                    className={`text-6xl font-black bg-gradient-to-r ${principle.gradient} bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                  >
                    {principle.number}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                  {principle.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative">
                <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                  {principle.description}
                </p>

                <div className="mt-6 flex items-center gap-2">
                  <div className={`h-1 w-12 bg-gradient-to-r ${principle.gradient} rounded-full`}></div>
                  <div className={`h-1 w-6 bg-gradient-to-r ${principle.gradient} rounded-full opacity-60`}></div>
                  <div className={`h-1 w-3 bg-gradient-to-r ${principle.gradient} rounded-full opacity-30`}></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
