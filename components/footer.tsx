import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-slate-900 to-slate-800 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-12 h-12">
                <Image src="/logo-epace.jpg" alt="ePACE Logo" fill className="object-contain rounded-lg" />
              </div>
              <h3 className="text-3xl font-bold text-white">ePACE</h3>
            </div>
            <p className="text-slate-300 leading-relaxed text-lg max-w-md">
              O mișcare civică pentru suveranitate, merit și demnitate națională. Construim împreună o Românie în care
              deciziile sunt luate pentru cetățeni, de către cetățeni competenți și integri.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Navigare</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors duration-200">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/despre-noi" className="text-slate-300 hover:text-white transition-colors duration-200">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="/platforma" className="text-slate-300 hover:text-white transition-colors duration-200">
                  Platforma
                </Link>
              </li>
              <li>
                <Link href="/implica-te" className="text-slate-300 hover:text-white transition-colors duration-200">
                  Implică-te
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="text-slate-300">
                <span className="font-medium text-white">Email:</span>
                <br />
                epace@partidulepace.ro
              </li>
              <li className="text-slate-300">
                <span className="font-medium text-white">Locație:</span>
                <br />
                București, România
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-center md:text-left">© 2025 ePACE. Toate drepturile rezervate.</p>
            <div className="flex items-center gap-6">
                      </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
