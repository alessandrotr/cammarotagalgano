import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/fetch";
import { settingsQuery } from "@/sanity/queries/settings";
import type { SiteSettings } from "@/types/sanity";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/servizi", label: "Servizi" },
  { href: "/professionisti", label: "Professionisti" },
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/blog", label: "Blog" },
  { href: "/contatti", label: "Contatti" },
];

const services = [
  { href: "/servizi", label: "Consulenza Fiscale" },
  { href: "/servizi", label: "Contabilità e Bilancio" },
  { href: "/servizi", label: "Consulenza Societaria" },
  { href: "/servizi", label: "Revisione Legale" },
  { href: "/servizi", label: "Consulenza del Lavoro" },
];

export default async function Footer() {
  const settings = await sanityFetch<SiteSettings>({
    query: settingsQuery,
    tags: ["siteSettings"],
  });

  return (
    <footer className="bg-blue-dark text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="mb-4">
              <h3 className="text-white text-lg font-bold">
                CAMMAROTA GALGANO
              </h3>
              <span className="block text-[9px] font-medium tracking-[0.2em] uppercase text-gray-500 text-right -mt-0.5">
                since 1992
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Studio Associato di Dottori Commercialisti e Revisori Legali.
              Dal 1992 al servizio di aziende, professionisti e privati a Napoli.
            </p>
            <p className="text-xs text-gray-500">
              P.IVA: {settings?.partitaIva || "XXXXXXXXXXX"}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servizi</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contatti</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Via Toledo, 424<br />80134 Napoli (NA)
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {settings?.phone
                  ? settings.phone.split(/\s*-\s*/).map((num, i, arr) => (
                      <span key={num}>
                        <a href={`tel:${num.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                          {num.trim()}
                        </a>
                        {i < arr.length - 1 && " — "}
                      </span>
                    ))
                  : "+39 081 XXX XXXX"}
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href={`mailto:${settings?.email || "info@cammarotagalgano.it"}`} className="hover:text-white transition-colors">
                  {settings?.email || "info@cammarotagalgano.it"}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                {settings?.pec || "studio@pec.cammarotagalgano.it"}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Studio Associato Cammarota Galgano. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
