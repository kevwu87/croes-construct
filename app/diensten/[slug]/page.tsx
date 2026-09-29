import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";
import { faqs, services } from "@/lib/content";

const baseUrl = "https://www.croesconstruct.be";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  const url = `/diensten/${service.slug}`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      images: [encodeURI(service.images[0].src)],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const serviceFaqs = faqs.filter(({ q }) => service.faqs.includes(q));
  const others = services.filter((s) => s.slug !== service.slug);
  const url = `${baseUrl}/diensten/${service.slug}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.metaDescription,
      url,
      provider: { "@type": "HomeAndConstructionBusiness", name: "Croes Construct", url: baseUrl, telephone: "+32478406967" },
      areaServed: { "@type": "AdministrativeArea", name: "West-Vlaanderen" },
      image: service.images.map((img) => baseUrl + encodeURI(img.src)),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
        { "@type": "ListItem", position: 2, name: service.title, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: serviceFaqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Croes Construct logo" className="w-12 h-12 rounded-full object-cover" />
            <span className="font-serif text-xl text-foreground tracking-tight">Croes Construct</span>
          </Link>
          <a href="tel:+32478406967" className="flex items-center gap-2 text-sm text-foreground">
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">0478 40 69 67</span>
            <span className="sm:hidden">Bellen</span>
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 lg:px-8 py-16 md:py-24">
        <nav aria-label="Kruimelpad" className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/#diensten" className="hover:text-foreground">Diensten</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{service.title}</span>
        </nav>

        <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-tight text-balance max-w-3xl">{service.h1}</h1>

        <div className="mt-10 grid lg:grid-cols-[3fr_2fr] gap-12">
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            {service.intro.map((p) => <p key={p}>{p}</p>)}
          </div>
          <ul className="space-y-3 border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
            {service.points.map((point) => (
              <li key={point} className="text-foreground leading-snug">{point}</li>
            ))}
          </ul>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
          {service.images.map((img, i) => (
            <div key={img.src} className={`relative overflow-hidden rounded-lg bg-muted ${i === 0 ? "col-span-2 aspect-video md:row-span-2 md:aspect-auto" : "aspect-[4/3]"}`}>
              <Image src={img.src} alt={img.alt} fill priority={i === 0} sizes={i === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 50vw"} className="object-cover" />
            </div>
          ))}
        </div>

        <section className="mt-20">
          <h2 className="font-serif text-3xl text-foreground mb-8">Veelgestelde vragen</h2>
          <div className="border-t border-border">
            {serviceFaqs.map(({ q, a }) => (
              <details key={q} className="group border-b border-border">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg text-foreground [&::-webkit-details-marker]:hidden">
                  {q}
                  <span aria-hidden="true" className="text-2xl leading-none text-accent transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="pb-6 text-muted-foreground leading-relaxed whitespace-pre-line">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-lg bg-primary p-8 md:p-12 text-primary-foreground">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Gratis plaatsbezoek en offerte</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl">Wij komen ter plaatse kijken en bezorgen u meestal binnen twee weken een offerte.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/#contact" className="inline-flex items-center justify-center rounded-md bg-background px-6 py-3 text-foreground hover:bg-background/90">
              Vraag een offerte <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Link>
            <a href="tel:+32478406967" className="inline-flex items-center justify-center rounded-md border border-primary-foreground/60 px-6 py-3 hover:bg-primary-foreground/10">
              <Phone className="mr-2 w-4 h-4" aria-hidden="true" /> 0478 40 69 67
            </a>
          </div>
        </section>

        <nav aria-label="Andere diensten" className="mt-20">
          <h2 className="font-serif text-2xl text-foreground mb-6">Andere diensten</h2>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {others.map((s) => (
              <li key={s.slug}>
                <Link href={`/diensten/${s.slug}`} className="inline-flex items-center text-primary hover:text-accent">
                  {s.title} <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>

      <footer className="bg-foreground py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-background/60">
          <p>Croes Construct · Viooltjesstraat 13, 8670 Koksijde · BTW BE 1032 219 065</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-background">Privacy</Link>
            <Link href="/voorwaarden" className="hover:text-background">Voorwaarden</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
