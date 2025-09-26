import { HeroSection } from "@/components/hero-section"
import { PrinciplesSection } from "@/components/principles-section"
import { ManifestoPreview } from "@/components/manifesto-preview"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PrinciplesSection />
      <ManifestoPreview />
    </main>
  )
}
