"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Phone, Mail, ArrowRight, Leaf, Fence, Car, Grid3X3, TreeDeciduous, HardHat, Scissors, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function Navigation({ 
  mobileMenuOpen, 
  setMobileMenuOpen 
}: { 
  mobileMenuOpen: boolean; 
  setMobileMenuOpen: (open: boolean) => void;
}) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <img src="/logo.jpg" alt="Croes Construct logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-serif text-xl text-foreground tracking-tight">Croes Construct</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#diensten" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Diensten</a>
            <a href="#projecten" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projecten</a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Vragen</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            <a href="#contact">
              <Button className="bg-primary text-primary-foreground hover:bg-accent">Offerte aanvragen</Button>
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Sluit menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#diensten" className="text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>Diensten</a>
              <a href="#projecten" className="text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>Projecten</a>
              <a href="#faq" className="text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>Vragen</a>
              <a href="#contact" className="text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-primary text-primary-foreground hover:bg-accent w-full">Offerte aanvragen</Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/project 1.1.jpg"
          alt="Aangelegde tuin met gestreept gazon en cortenstalen boordranden rond een villa met rieten dak in Koksijde"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32 text-center">
        <p className="text-primary-foreground/80 uppercase tracking-[0.3em] text-sm mb-6">Koksijde · Westkust</p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight max-w-4xl mx-auto text-balance">
          Tuinaannemer aan de Kust
        </h1>
        <p className="mt-8 text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
          Tuinaanleg, opritten, terrassen en omheiningen in Koksijde, Nieuwpoort, Veurne en omstreken. Van het grondwerk tot de laatste plant.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-base">
              Vraag een offerte
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
          <a href="tel:+32478406967">
            <Button size="lg" className="bg-transparent border border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base">
              <Phone className="mr-2 w-4 h-4" />
              0478 40 69 67
            </Button>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2" style={{ animation: 'scroll-hint 2s cubic-bezier(0.16, 1, 0.3, 1) infinite' }} />
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { icon: Leaf, title: "Tuinaanleg", description: "Nieuwe tuin of volledige renovatie: grondwerk, gazon of kunstgras, borders, beplanting en cortenstalen boordranden." },
    { icon: Fence, title: "Omheiningen", description: "Houten schermen, draadafsluitingen en poorten. De palen gaan minstens 75 cm diep, zodat ze stormachtig weer aan de kust aankunnen." },
    { icon: Car, title: "Opritten", description: "Opritten in kasseien, klinkers of grind, op een fundering die niet verzakt wanneer er dagelijks een wagen over rijdt." },
    { icon: Grid3X3, title: "Terrassen", description: "Terrassen en paden in kasseien, klinkers, grind, tegels, natuursteen of hout." },
    { icon: TreeDeciduous, title: "Snoeien van bomen", description: "Vormsnoei, onderhoudssnoei en het inkorten van bomen die te groot werden voor hun plek." },
    { icon: Scissors, title: "Tuinonderhoud", description: "Snoeien, hagen scheren en het algemene onderhoud van uw tuin, ook voor tuinen die wij niet zelf aanlegden." },
    { icon: HardHat, title: "Grond- en rioleringswerken", description: "Uitgraven, nivelleren en afbraak, afvoerleidingen, zichtputten en de aansluiting van regenwaterputten. Van A tot Z, door ons eigen team." },
  ];

  return (
    <section id="diensten" className="py-24 md:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-accent uppercase tracking-[0.2em] text-sm mb-4">Diensten</p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-tight text-balance">Wat wij voor u aanleggen</h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">Eén aannemer voor het volledige buitenwerk. U hoeft geen aparte firma's te coördineren voor het grondwerk, de oprit en de tuin.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {services.map((service) => (
            <div key={service.title} className="border-t border-border pt-6">
              <service.icon className="w-6 h-6 text-accent mb-4" aria-hidden="true" />
              <h3 className="font-serif text-2xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="over-ons" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-muted">
              <Image
                src="/images/tobias.jpg"
                alt="Tobias Croes, zaakvoerder van Croes Construct, in een tuin in Koksijde"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[center_35%]"
              />
            </div>
          </div>

          <div>
            <p className="text-accent uppercase tracking-[0.2em] text-sm mb-4">Over ons</p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-tight mb-6">Maak kennis met Tobias Croes</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>Mijn interesse in tuinen begon in de tuin van mijn grootvader. Daar leerde ik hoe je met je handen iets maakt dat jaren meegaat.</p>
              <p>Met Croes Construct doe ik dat nu elke dag: terrassen, opritten, omheiningen en volledige tuinrenovaties. Persoonlijk contact, eerlijk advies en werk dat netjes wordt afgewerkt: daar sta ik voor.</p>
              <p>Samen met mijn team werk ik in heel West-Vlaanderen, met de meeste werven aan de Kust. Voor grondwerken gaan we soms ook verder.</p>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="font-serif text-xl text-foreground">Tobias Croes</p>
              <p className="text-muted-foreground">Zaakvoerder & Tuinaannemer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const projects = [
    {
      title: "Totaalproject Tuin",
      category: "Tuinaanleg",
      description: "Complete tuinrenovatie met strak gazon, cortenstaal randen en nieuwe aanplantingen.",
      images: ["/images/project 1.1.jpg", "/images/project 1.2.jpg", "/images/project 1.3.jpg", "/images/project 1.4.jpg", "/images/project 1.5.jpg"],
    },
    {
      title: "Omheining & Oprit",
      category: "Omheiningen & Opritten",
      description: "Moderne houten omheining gecombineerd met kasseien oprit en gazon — van grondwerken tot afwerking.",
      images: ["/images/project 7.1.jpg", "/images/project 7.2.jpg", "/images/project 7.3.jpg", "/images/project 7.4.jpg", "/images/project 7.5.jpg", "/images/project 7.6.jpg", "/images/project 7.7.jpg"],
    },
    {
      title: "Kunstgras & Grondwerken",
      category: "Tuinaanleg",
      description: "Van grondwerken en afbraak tot een afgewerkte tuin met kunstgras en strakke omheining.",
      images: ["/images/project 3.2.jpg", "/images/project 3.3.jpg", "/images/project 3.4.jpg", "/images/project 3.5.jpg"],
    },
    {
      title: "Terrassen & Paden",
      category: "Terrassen",
      description: "Houten terras, betegelde paden en omheiningen voor een sfeervolle buitenruimte.",
      images: ["/images/project 2.1.jpg", "/images/project 2.2.jpg", "/images/project 2.3.jpg", "/images/project 2.4.jpg"],
    },
    {
      title: "Veranda Renovatie",
      category: "Terrassen",
      description: "Volledige renovatie van veranda-vloer: van afbraak tot prachtig eindresultaat.",
      images: ["/images/project 5.1.jpg", "/images/project 5.2.jpg", "/images/project 5.3.jpg"],
    },
    {
      title: "Diverse Realisaties",
      category: "Diverse werken",
      description: "Een greep uit onze andere realisaties — omheiningen, terrassen, snoeien en tuinonderhoud.",
      images: ["/images/overige.jpg", "/images/overige2.jpg", "/images/overige3.jpg", "/images/overige4.jpg", "/images/overige5.jpg", "/images/overige6.jpg", "/images/overige8.jpg"],
    },
  ];

  const activeImages = projects[activeProject].images;
  const openLightbox = (index: number) => { setCurrentImage(index); setLightboxOpen(true); };
  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentImage((prev) => (prev + 1) % activeImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + activeImages.length) % activeImages.length);

  return (
    <section id="projecten" className="py-24 md:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-accent uppercase tracking-[0.2em] text-sm mb-4">Portfolio</p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-tight mb-4">Onze realisaties</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">Een greep uit onze projecten — elk met oog voor detail en kwaliteit.</p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeProject === index ? "bg-primary text-primary-foreground" : "bg-background border border-border text-muted-foreground hover:text-foreground"}`}
            >
              {project.title}
            </button>
          ))}
        </div>

        <div className="mb-6 text-center">
          <span className="text-accent text-sm uppercase tracking-widest">{projects[activeProject].category}</span>
          <p className="text-muted-foreground mt-1">{projects[activeProject].description}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {activeImages.map((src, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${index === 0 ? "col-span-2 aspect-video" : "aspect-[4/3]"}`}
            >
              <img src={src} alt={`${projects[activeProject].title}: ${projects[activeProject].category.toLowerCase()} door Croes Construct, foto ${index + 1}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-background/90 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors" aria-label="Sluiten">
            <X className="w-6 h-6 text-white" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 md:left-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors" aria-label="Vorige foto">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="max-w-5xl max-h-[85vh] mx-4" onClick={(e) => e.stopPropagation()}>
            <img src={activeImages[currentImage]} alt={`${projects[activeProject].title}, foto ${currentImage + 1}`} className="max-w-full max-h-[85vh] object-contain rounded-lg" />
            <p className="text-white/70 text-center mt-4 text-sm">{currentImage + 1} / {activeImages.length}</p>
          </div>
          <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors" aria-label="Volgende foto">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}

const faqs = [
  { q: "Is een plaatsbezoek en offerte gratis?", a: "Ja, zowel het plaatsbezoek als de offerte zijn gratis. We streven ernaar om de offerte binnen twee weken te bezorgen. Is het erg druk, dan duurt het maximaal een maand." },
  { q: "Hoe rekenen jullie?", a: "Wij werken meestal in regie: u betaalt de werkuren plus het materiaal aan een vaste prijs. Het uurtarief vindt u in de offerte.\nVoor gazon hanteren we een vaste prijs, exclusief btw:\n• graszoden leggen: € 15 per m²\n• gazon inzaaien: € 10 per m²\nIn die prijs zit het uitspreiden van de aangevoerde grond, het harken en het leggen of inzaaien. De aanvoer van de grond zelf wordt apart aangerekend." },
  { q: "Kan ik zelf mijn materiaal kiezen?", a: "Ja. Voor granulaat, grasdallen en waterdoorlatende verharding verwijzen we u naar Jatu (www.jatu.be), de website voor particulieren van Gravelart. Voor tegels kunt u terecht bij Interieur Center Dekeyser in Veurne of bij Verhelst Bouwmaterialen in Veurne of Oostende." },
  { q: "Welk btw-tarief betaal ik?", a: "Is uw woning ouder dan 10 jaar en woont u er zelf? Dan geldt voor een deel van de werken 6% in plaats van 21%:\n• terras direct tegen de woning: 6%\n• oprit van de straat naar de voordeur, of naar een garage die deel uitmaakt van de woning: 6%\n• oprit naar een losstaande garage, of een parkeerplaats: 21%\n• terras midden in de tuin, tuinaanleg en omheiningen: 21%\nWij bekijken per offerte welk deel aan 6% kan, en zetten dat apart op de factuur." },
  { q: "Moet ik een voorschot betalen?", a: "Meestal niet. Voor grotere projecten kunnen we een voorschot vragen. Dat staat dan duidelijk in de offerte." },
  { q: "Heb ik een vergunning nodig voor een terras of oprit?", a: "Meestal niet. In Vlaanderen mag u zonder vergunning tot 80 m² verharden in de zij- en achtertuin. Dat is alles samen: terras, paden, oprit, kunstgras en grindzones. Het regenwater moet dan wel in uw eigen tuin in de grond kunnen lopen. Gaat u daarover, of legt u iets aan in de voortuin? Dan kijken wij samen met u na wat er nodig is. Sommige gemeenten hebben ook eigen regels." },
  { q: "Kasseien, klinkers of grind?", a: "Wij leggen ze alle drie, voor terrassen, opritten en paden. Een combinatie kan ook, bijvoorbeeld rijstroken in kasseien met grind ertussen. Bij het plaatsbezoek bekijken we wat het best past bij uw woning en gebruik." },
  { q: "Kunstgras of echt gras?", a: "Wij leggen beide. Echt gras kan als graszoden (€ 15 per m², excl. btw) of ingezaaid (€ 10 per m², excl. btw). Let op: kunstgras telt mee als verharding voor de vergunningsregel van 80 m²." },
  { q: "Wat met regenwater en riolering?", a: "Ook dat doen wij: grondwerken, afvoerleidingen, zichtputten en de aansluiting van regenwaterputten. Zo hoeft u voor uw buitenwerk geen aparte firma te zoeken: ons eigen team doet het van A tot Z." },
  { q: "Hoe hoog kan een omheining?", a: "Wij plaatsen omheiningen tot 2,50 m hoog. Tot 2 m in de zij- en achtertuin is geen vergunning nodig. In de voortuin mag een gesloten omheining zonder vergunning maximaal 1 m hoog zijn. Wilt u hoger, dan kijken wij samen met u na welke vergunning nodig is." },
  { q: "Welke omheining houdt het aan zee?", a: "U kiest zelf het materiaal en de stijl. Wat voor ons vaststaat is de plaatsing: de palen gaan minstens 75 cm diep in de grond, zodat de omheining stormachtig weer aan de kust aankan." },
  { q: "Hoe lang moet ik wachten voor jullie kunnen starten?", a: "Dat hangt af van de drukte. In de winter en de herfst kunnen we meestal snel starten. Vanaf het voorjaar is de planning vaak vol tot na de zomer. Wilt u in het voorjaar of de zomer klaar zijn, neem dan best in de winter al contact op." },
  { q: "Hoe lang duren de werken?", a: "Een richtlijn:\n• oprit van ± 50 m²: een goede week\n• terras van ± 30 m²: drie à vier dagen, afhankelijk van de afwerking\n• omheining van ± 20 m: een werkweek\n• volledige renovatie van een kleine tuin: drie à vier weken, afhankelijk van wat er moet gebeuren" },
  { q: "Wanneer leg je best een tuin aan?", a: "Verhardingen en omheiningen kunnen het hele jaar door, behalve bij vorst. Gazon en beplanting leg je best aan in het voorjaar of het najaar." },
  { q: "Moet ik thuis zijn tijdens de werken?", a: "Nee. Wij hebben enkel toegang tot de tuin nodig, met water en stroom." },
  { q: "Voeren jullie grond en afval af?", a: "Ja, wij voeren al het afval af dat u wilt laten weghalen. De afvoer zit niet in de prijs van het werk: ze wordt apart aangerekend en staat afzonderlijk op de factuur." },
  { q: "In welke gemeenten werken jullie?", a: "Wij werken in heel West-Vlaanderen, vooral aan de Kust: Koksijde, De Panne, Nieuwpoort, Middelkerke, Veurne, Diksmuide, Oostende, Brugge en hun deelgemeenten. Voor grondwerken gaan we soms ook verder; vraag het gerust." },
  { q: "Zijn jullie verzekerd en is er garantie?", a: "Wij hebben een BA-verzekering. Een vaste garantietermijn geven we niet, maar ligt een probleem aan ons werk, dan brengen we het in orde." },
  { q: "Doen jullie ook tuinonderhoud?", a: "Ja. Naast de aanleg doen wij ook tuinonderhoud: snoeien, hagen scheren en het algemene onderhoud van uw tuin. Ook als wij uw tuin niet zelf aanlegden." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

function FaqSection() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="text-accent uppercase tracking-[0.2em] text-sm mb-4">Veelgestelde vragen</p>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-tight mb-12">Wat klanten ons vaak vragen</h2>
        <div className="border-t border-border">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg text-foreground [&::-webkit-details-marker]:hidden">
                {q}
                <span aria-hidden="true" className="text-2xl leading-none text-accent transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="pb-6 text-muted-foreground leading-relaxed whitespace-pre-line">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(false);

    const form = e.currentTarget;
    const data = {
      name: (form.querySelector('#name') as HTMLInputElement).value,
      phone: (form.querySelector('#phone') as HTMLInputElement).value,
      email: (form.querySelector('#email') as HTMLInputElement).value,
      address: (form.querySelector('#address') as HTMLInputElement).value,
      service: (form.querySelector('#service') as HTMLSelectElement).value,
      description: (form.querySelector('#description') as HTMLTextAreaElement).value,
      period: (form.querySelector('#period') as HTMLSelectElement).value,
      message: (form.querySelector('#message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSent(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-primary-foreground/70 uppercase tracking-[0.2em] text-sm mb-4">Contact</p>
            <h2 className="font-serif text-3xl md:text-5xl text-primary-foreground leading-tight mb-6">
              Vraag een vrijblijvende offerte
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10">
              Beschrijf kort wat u wilt laten doen. Wij bellen u terug om een plaatsbezoek af te spreken. Liever meteen praten? Bel gerust.
            </p>
            <div className="space-y-6">
              <a href="tel:+32478406967" className="flex items-center gap-4 text-primary-foreground group">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm">Bel ons</p>
                  <p className="text-lg font-medium">+32 478 40 69 67</p>
                </div>
              </a>
              <a href="mailto:Croes-construct@hotmail.com" className="flex items-center gap-4 text-primary-foreground group">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm">E-mail ons</p>
                  <p className="text-lg font-medium">Croes-construct@hotmail.com</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-card p-8 md:p-10 rounded-lg">
            <h3 className="font-serif text-2xl text-foreground mb-6">Vraag een offerte aan</h3>
            
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-serif text-xl text-foreground mb-2">Aanvraag verstuurd!</h4>
                <p className="text-muted-foreground">Wij nemen zo snel mogelijk contact met u op.</p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">Naam *</label>
                    <input type="text" id="name" required className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground" placeholder="Uw naam" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm text-muted-foreground mb-2">Telefoon *</label>
                    <input type="tel" id="phone" required className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground" placeholder="+32 ..." />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">E-mail *</label>
                  <input type="email" id="email" required className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground" placeholder="uw@email.be" />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm text-muted-foreground mb-2">Adres werf</label>
                  <input type="text" id="address" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground" placeholder="Straat, gemeente" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm text-muted-foreground mb-2">Dienst *</label>
                  <select id="service" required className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground">
                    <option value="">Selecteer een dienst</option>
                    <option value="tuinaanleg">Tuinaanleg</option>
                    <option value="omheiningen">Omheiningen</option>
                    <option value="opritten">Opritten</option>
                    <option value="terrassen">Terrassen</option>
                    <option value="snoeien">Snoeien van bomen</option>
                    <option value="onderhoud">Tuinonderhoud</option>
                    <option value="grondwerken">Grond- en rioleringswerken</option>
                    <option value="totaalproject">Totaalproject (combinatie)</option>
                    <option value="andere">Andere</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm text-muted-foreground mb-2">Omschrijving project *</label>
                  <textarea id="description" rows={3} required className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground resize-none" placeholder="Beschrijf uw project zo gedetailleerd mogelijk..." />
                </div>
                <div>
                  <label htmlFor="period" className="block text-sm text-muted-foreground mb-2">Gewenste uitvoeringsperiode</label>
                  <select id="period" className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground">
                    <option value="">Selecteer een periode</option>
                    <option value="zo-snel-mogelijk">Zo snel mogelijk</option>
                    <option value="1-3-maanden">Binnen 1-3 maanden</option>
                    <option value="3-6-maanden">Binnen 3-6 maanden</option>
                    <option value="6-12-maanden">Binnen 6-12 maanden</option>
                    <option value="volgend-jaar">Volgend jaar</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">Extra opmerkingen</label>
                  <textarea id="message" rows={3} className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground resize-none" placeholder="Heeft u nog extra vragen of opmerkingen?" />
                </div>
                {error && (
                  <p className="text-red-500 text-sm">Er ging iets mis. Probeer opnieuw of bel ons direct.</p>
                )}
                <Button type="submit" disabled={sending} className="w-full bg-primary text-primary-foreground hover:bg-accent py-6">
                  {sending ? 'Versturen...' : 'Verstuur aanvraag'}
                  {!sending && <ArrowRight className="ml-2 w-4 h-4" />}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img src="/logo.jpg" alt="" className="w-10 h-10 rounded-full object-cover" />
              <span className="font-serif text-xl text-background tracking-tight">Croes Construct</span>
            </a>
            <p className="text-background/60 leading-relaxed max-w-sm">Tuinaannemer uit Koksijde sinds 2019. Tuinaanleg, terrassen, opritten, omheiningen en grondwerken in Koksijde, De Panne, Nieuwpoort, Middelkerke, Veurne, Diksmuide, Oostende en Brugge.</p>
          </div>

          <div>
            <h4 className="font-medium text-background mb-4">Eigenaar</h4>
            <p className="text-background/80 font-medium mb-2">Tobias Croes</p>
            <p className="text-background/60 text-sm">Viooltjesstraat 13, 8670 Koksijde</p>
            <p className="text-background/60 text-sm">BTW: BE 1032 219 065</p>
          </div>

          <div>
            <h4 className="font-medium text-background mb-4">Contact</h4>
            <ul className="space-y-3">
              <li><a href="tel:+32478406967" className="text-background/60 hover:text-background transition-colors">+32 478 40 69 67</a></li>
              <li><a href="mailto:Croes-construct@hotmail.com" className="text-background/60 hover:text-background transition-colors">Croes-construct@hotmail.com</a></li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/p/Tuinen-Croes-100027303922559/?locale=nl_NL" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-background" />
              </a>
              <a href="https://www.instagram.com/tuinen_croes/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5 text-background" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">© 2026 Croes Construct. Alle rechten voorbehouden.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-background/40 hover:text-background text-sm transition-colors">Privacy</a>
            <a href="/voorwaarden" className="text-background/40 hover:text-background text-sm transition-colors">Voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
}