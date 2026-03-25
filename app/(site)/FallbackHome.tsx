"use client";

import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import ContactSection from "@/components/sections/ContactSection";

const placeholderServices = [
  {
    _id: "1",
    name: "Consulenza Fiscale e Tributaria",
    slug: { current: "consulenza-fiscale" },
    shortDescription:
      "Pianificazione fiscale strategica, dichiarazioni, contenzioso tributario e ottimizzazione del carico fiscale per aziende e professionisti.",
    icon: "calculator",
  },
  {
    _id: "2",
    name: "Contabilità e Bilancio",
    slug: { current: "contabilita-bilancio" },
    shortDescription:
      "Tenuta della contabilità ordinaria e semplificata, redazione bilanci, reporting finanziario e analisi di gestione.",
    icon: "chart",
  },
  {
    _id: "3",
    name: "Consulenza Societaria",
    slug: { current: "consulenza-societaria" },
    shortDescription:
      "Costituzione e trasformazione di società, operazioni straordinarie, fusioni, scissioni e governance aziendale.",
    icon: "building",
  },
  {
    _id: "4",
    name: "Revisione Legale e Controllo",
    slug: { current: "revisione-legale" },
    shortDescription:
      "Revisione dei conti, audit interno, compliance normativa e certificazione dei bilanci secondo gli standard internazionali.",
    icon: "shield",
  },
  {
    _id: "5",
    name: "Consulenza del Lavoro",
    slug: { current: "consulenza-lavoro" },
    shortDescription:
      "Gestione buste paga, contrattualistica, adempimenti previdenziali e assistenziali, consulenza su normativa del lavoro.",
    icon: "users",
  },
];

const placeholderTestimonials = [
  {
    _id: "t1",
    name: "Marco Esposito",
    company: "Esposito Costruzioni S.r.l.",
    quote:
      "Da oltre 10 anni ci affidiamo allo Studio Cammarota Galgano. La loro competenza e professionalità sono impareggiabili. Hanno guidato la nostra azienda attraverso ogni fase di crescita.",
    rating: 5,
  },
  {
    _id: "t2",
    name: "Laura Ferretti",
    company: "Ferretti Design Studio",
    quote:
      "Professionisti seri e sempre aggiornati. Mi hanno aiutata con la pianificazione fiscale e la gestione societaria, risolvendo problematiche complesse con efficienza e chiarezza.",
    rating: 5,
  },
  {
    _id: "t3",
    name: "Giovanni De Luca",
    company: "De Luca & Partners",
    quote:
      "Un punto di riferimento a Napoli. La loro consulenza tributaria ci ha permesso di ottimizzare significativamente il carico fiscale, sempre nel pieno rispetto della normativa.",
    rating: 5,
  },
];

export default function FallbackHome() {
  return (
    <>
      <Hero
        _type="hero"
        _key="hero"
        heading="Eccellenza Professionale dal 1992"
        subheading="Studio Associato di Dottori Commercialisti e Revisori Legali a Napoli. Affianchiamo aziende, professionisti e privati con competenza, rigore e visione strategica."
        ctaText="Richiedi una Consulenza"
        ctaLink="/contatti"
        style="dark"
      />

      <ServicesGrid
        _type="servicesGrid"
        _key="services"
        heading="I Nostri Servizi"
        subheading="Soluzioni professionali personalizzate per ogni esigenza fiscale, contabile e societaria"
        services={placeholderServices}
        layout="grid-3"
      />

      <Stats
        _type="stats"
        _key="stats"
        stats={[
          { number: "30", suffix: "+", label: "Anni di Esperienza" },
          { number: "500", suffix: "+", label: "Clienti Assistiti" },
          { number: "3", label: "Professionisti" },
          { number: "1992", label: "Anno di Fondazione" },
        ]}
        backgroundColor="navy"
      />

      <Testimonials
        _type="testimonials"
        _key="testimonials"
        heading="Cosa Dicono i Nostri Clienti"
        testimonials={placeholderTestimonials}
        style="carousel"
      />

      <CTA
        _type="cta"
        _key="cta"
        heading="Hai Bisogno di una Consulenza?"
        body="Contattaci per un appuntamento. Il nostro team è pronto ad assisterti con soluzioni su misura per le tue esigenze."
        buttonText="Prenota una Consulenza"
        buttonLink="/contatti"
        backgroundColor="navy"
      />

      <ContactSection
        _type="contactSection"
        _key="contact"
        heading="Contattaci"
        subheading="Siamo a tua disposizione per qualsiasi domanda o richiesta di informazioni"
        showMap={true}
        showForm={true}
      />
    </>
  );
}
