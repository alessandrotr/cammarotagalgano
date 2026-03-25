# Studio Associato Cammarota Galgano

Sito web professionale per lo Studio Associato Cammarota Galgano — Dottori Commercialisti e Revisori Legali a Napoli.

## Tech Stack

- **Next.js 15** (App Router, TypeScript)
- **Sanity CMS v3** (embedded Studio)
- **Tailwind CSS v4**
- **Framer Motion**

## Setup

### 1. Installa le dipendenze

```bash
npm install
```

### 2. Configura le variabili d'ambiente

Copia `.env.example` in `.env.local` e inserisci i valori:

```bash
cp .env.example .env.local
```

Variabili necessarie:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` — ID progetto Sanity
- `NEXT_PUBLIC_SANITY_DATASET` — Dataset (default: `production`)
- `NEXT_PUBLIC_SANITY_API_VERSION` — Versione API
- `SANITY_API_READ_TOKEN` — Token API read-only
- `NEXT_PUBLIC_BASE_URL` — URL del sito

### 3. Avvia il server di sviluppo

```bash
npm run dev
```

Il sito sara' disponibile su `http://localhost:3000`
Lo Studio CMS sara' disponibile su `http://localhost:3000/studio`

### 4. Configura Sanity

1. Vai su [sanity.io/manage](https://www.sanity.io/manage)
2. Aggiungi CORS origin: `http://localhost:3000` (con credentials)
3. Per la produzione, aggiungi anche il dominio di produzione

## Struttura del Progetto

```
app/
  (site)/          # Pagine pubbliche del sito
  studio/          # Sanity Studio integrato
  api/             # API routes (form contatti)
components/
  layout/          # Header, Footer, WhatsApp
  sections/        # Sezioni del page builder
  shared/          # SectionRenderer, PortableText
  ui/              # Button, Card, SectionWrapper
sanity/
  schemas/         # Document e Object schemas
  queries/         # Query GROQ
  lib/             # Client, image helper
lib/               # Utility, metadata helpers
types/             # TypeScript interfaces
```

## Pagine

| Pagina | Route | Descrizione |
|--------|-------|-------------|
| Home | `/` | Hero, servizi, stats, testimonianze, CTA, contatti |
| Servizi | `/servizi` | Lista di tutti i servizi |
| Servizio | `/servizi/[slug]` | Dettaglio singolo servizio |
| Professionisti | `/professionisti` | Team dello studio |
| Chi Siamo | `/chi-siamo` | Storia, valori, mission |
| Blog | `/blog` | Articoli e approfondimenti fiscali |
| Articolo | `/blog/[slug]` | Singolo articolo |
| Contatti | `/contatti` | Form di contatto e mappa |

## Come Modificare i Contenuti

1. Vai su `tuosito.com/studio`
2. Accedi con il tuo account Sanity
3. Per modificare una pagina: **Pagine** > seleziona la pagina > modifica le sezioni
4. Per aggiungere un servizio: **Servizi** > nuovo documento
5. Per scrivere un articolo: **Blog** > nuovo documento
6. Pubblica le modifiche con il pulsante "Publish"

## Come Aggiungere Nuove Sezioni

1. Crea lo schema in `sanity/schemas/objects/nuovaSezione.ts`
2. Aggiungilo all'array `sections` in `sanity/schemas/documents/page.ts`
3. Registralo in `sanity/schemas/index.ts`
4. Crea il componente React in `components/sections/NuovaSezione.tsx`
5. Aggiungi il mapping in `components/shared/SectionRenderer.tsx`

## Deploy

Il progetto e' pronto per il deploy su **Vercel**:

1. Collega il repository GitHub a Vercel
2. Configura le variabili d'ambiente
3. Aggiungi il dominio di produzione ai CORS origins di Sanity
4. Deploy automatico ad ogni push
