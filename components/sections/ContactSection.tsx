"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import type { ContactSectionType } from "@/types/sanity";

export default function ContactSection({
  heading,
  subheading,
  showMap = true,
  showForm = true,
}: ContactSectionType) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all";

  return (
    <SectionWrapper background="cream" id="contatti">
      {(heading || subheading) && (
        <div className="text-center mb-16">
          {heading && (
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-dark">
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              {subheading}
            </p>
          )}
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-12">
        {showForm && (
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-blue-dark mb-6">
              Richiedi una consulenza
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Nome e Cognome"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={inputClass}
              />
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={inputClass}
                />
                <input
                  type="tel"
                  placeholder="Telefono"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className={inputClass}
                />
              </div>
              <select
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
                className={inputClass}
              >
                <option value="">Seleziona un servizio</option>
                <option value="fiscale">Consulenza Fiscale e Tributaria</option>
                <option value="contabilita">Contabilità e Bilancio</option>
                <option value="societaria">Consulenza Societaria</option>
                <option value="revisione">Revisione Legale</option>
                <option value="lavoro">Consulenza del Lavoro</option>
                <option value="altro">Altro</option>
              </select>
              <textarea
                placeholder="Il tuo messaggio"
                rows={4}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className={inputClass}
              />
              <Button type="submit" variant="primary" size="lg" className="w-full">
                {status === "sending"
                  ? "Invio in corso..."
                  : status === "sent"
                  ? "Messaggio inviato!"
                  : "Invia Richiesta"}
              </Button>
              {status === "error" && (
                <p className="text-red-500 text-sm text-center">
                  Si è verificato un errore. Riprova più tardi.
                </p>
              )}
            </form>
          </div>
        )}

        <div className="space-y-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-blue-dark mb-6">
              I Nostri Contatti
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-blue-dark">Indirizzo</p>
                  <p className="text-text-secondary">Via Toledo, 424 — 80134 Napoli (NA)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <div>
                  <p className="font-semibold text-blue-dark">Telefono</p>
                  <p className="text-text-secondary">+39 081 XXX XXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <div>
                  <p className="font-semibold text-blue-dark">Email</p>
                  <p className="text-text-secondary">info@cammarotagalgano.it</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <div>
                  <p className="font-semibold text-blue-dark">PEC</p>
                  <p className="text-text-secondary">studio@pec.cammarotagalgano.it</p>
                </div>
              </div>
            </div>
          </div>

          {showMap && (
            <div className="bg-white rounded-xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.1!2d14.248!3d40.843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVia+Toledo+424+Napoli!5e0!3m2!1sit!2sit!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Associato Cammarota Galgano - Mappa"
              />
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
