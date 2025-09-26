"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { UserPlus, Mail, Heart, Download } from "lucide-react"

export default function ImplicaTePage() {
  const [volunteerForm, setVolunteerForm] = useState({
    nume: "",
    prenume: "",
    email: "",
    telefon: "",
    judet: "",
    ajutor: "",
  })

  const [newsletterEmail, setNewsletterEmail] = useState("")

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle volunteer form submission
    console.log("Volunteer form:", volunteerForm)
    alert("Mulțumim pentru înregistrare! Te vom contacta în curând.")
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", newsletterEmail)
    alert("Te-ai abonat cu succes la newsletter-ul ePACE!")
  }

  const handleDownloadMembership = () => {
    const link = document.createElement("a")
    link.href = "/adeziune-epace.pdf"
    link.download = "Adeziune-ePACE.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Schimbarea Începe cu Tine. Implică-te în Proiectul ePACE!
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed text-pretty">
            Am pornit pe acest drum pentru că refuzăm să mai fim spectatori la declinul României. Dar nu putem reuși
            singuri. Acest proiect este despre puterea lui „împreună". Fie că ai câteva ore pe săptămână, o expertiză
            anume sau pur și simplu dorința de a contribui la un viitor mai bun, vocea și energia ta sunt esențiale. Fii
            parte din construcția unei Românii demne și respectate. Implică-te acum!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Volunteer Section */}
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <UserPlus className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl text-card-foreground">Devino Voluntar</CardTitle>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Contribuie direct la activitățile noastre. De la organizarea de evenimente locale la promovarea
                mesajului nostru online, fiecare ajutor ne aduce mai aproape de obiectivul nostru. Completează
                formularul și te vom contacta pentru a vedea cum putem colabora.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  <div>
                    
                    
                  </div>
                </div>
                <div>
                  
                  
                </div>
                <div>
                  
                  
                </div>
                <div>
                  
                  
                </div>
                <div>
                  
                  
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleDownloadMembership}
                    className="flex-1 flex items-center gap-2 bg-transparent"
                  >
                    <Download className="h-4 w-4" />
                    Descarcă Adeziune
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Newsletter Section */}
          <div className="space-y-8">
            

            {/* Additional Ways to Help */}
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl text-card-foreground">Alte Modalități de Implicare</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground leading-relaxed">
                      <strong>Distribuie mesajul:</strong> Ajută-ne să ajungem la mai mulți oameni prin distribuirea
                      conținutului nostru pe rețelele sociale.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground leading-relaxed">
                      <strong>Organizează evenimente locale:</strong> Inițiază dezbateri și întâlniri în comunitatea ta
                      pentru a discuta despre viitorul României.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground leading-relaxed">
                      <strong>Contribuie cu expertiza ta:</strong> Dacă ai cunoștințe specializate în diverse domenii,
                      ne-ar plăcea să colaborăm cu tine.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground leading-relaxed">
                      <strong>Votează conștient:</strong> Informează-te, participă la dezbateri și exercită-ți dreptul
                      la vot în mod responsabil.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
