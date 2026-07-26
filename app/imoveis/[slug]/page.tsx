import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPropertyBySlug, properties } from "@/lib/properties";
import { formatPrice, whatsappVisitLink } from "@/lib/format";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const property = getPropertyBySlug(params.slug);
  if (!property) return {};
  return {
    title: `${property.title} — ${property.neighborhood}, Curitiba`,
    description: property.description,
  };
}

export default function PropertyPage({ params }: { params: { slug: string } }) {
  const property = getPropertyBySlug(params.slug);
  if (!property) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.title,
    description: property.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: property.neighborhood,
      addressRegion: "PR",
      addressCountry: "BR",
    },
    numberOfRooms: property.bedrooms,
    floorSize: { "@type": "QuantitativeValue", value: property.area, unitCode: "MTK" },
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: "BRL",
    },
  };

  return (
    <section className="min-h-screen bg-ink px-6 py-10 md:px-10 md:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-8xl">
        <Link href="/imoveis" className="focus-ring text-[13px] font-medium text-white/45 hover:text-white">
          ← Voltar para imóveis
        </Link>

        {/* Galeria */}
        <div className="mt-5 grid grid-cols-4 gap-2 overflow-hidden rounded-2xl">
          <div className="relative col-span-4 aspect-[16/9] md:col-span-2 md:aspect-auto md:row-span-2">
            <Image src={property.gallery[0]} alt={property.title} fill className="object-cover" priority />
          </div>
          {property.gallery.slice(1, 5).map((src, i) => (
            <div key={i} className="relative hidden aspect-square md:block">
              <Image src={src} alt={`${property.title} ${i + 2}`} fill className="object-cover" />
            </div>
          ))}
        </div>
        <p className="mt-2 text-[12px] text-white/30">
          Galeria completa com as 20 fotos do imóvel disponível no painel — mostrando aqui uma seleção.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr,360px]">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-ember">
              {property.neighborhood} · {property.operation === "Comprar" ? "À venda" : "Para alugar"}
            </p>
            <h1 className="mt-2 font-display text-[30px] font-semibold text-white md:text-[36px]">
              {property.title}
            </h1>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-white/55">
              <span>{property.type}</span>
              <span>{property.area} m²</span>
              <span>{property.bedrooms} quartos</span>
              <span>{property.suites} suíte{property.suites > 1 ? "s" : ""}</span>
              <span>{property.parking} vaga{property.parking > 1 ? "s" : ""}</span>
            </div>

            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/60">
              {property.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {property.highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-white/10 bg-navy px-3.5 py-1.5 text-[12px] font-medium text-white/70"
                >
                  {h}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <p className="mb-3 font-display text-[16px] font-semibold text-white">
                Vídeo do imóvel
              </p>
              {property.videoUrl ? (
                <div className="aspect-video overflow-hidden rounded-2xl">
                  <iframe
                    src={property.videoUrl}
                    title={`Vídeo — ${property.title}`}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-white/15 bg-navy">
                  <p className="text-[13px] text-white/30">
                    Vídeo deste imóvel será publicado em breve
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Card de contato / agendamento */}
          <aside className="h-fit rounded-2xl border border-white/10 bg-navy p-6">
            <p className="font-display text-[22px] font-semibold text-white">
              {formatPrice(property.price)}
            </p>
            <p className="mt-1 text-[13px] text-white/40">
              {property.operation === "Comprar" ? "Valor de venda" : "Valor mensal de aluguel"}
            </p>

            <a
              href={whatsappVisitLink(property.title)}
              target="_blank"
              rel="noreferrer"
              className="focus-ring mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-ember px-5 py-3.5 text-[14px] font-semibold text-white transition hover:bg-emberDark"
            >
              Agendar visita pelo WhatsApp
            </a>
            <p className="mt-3 text-center text-[12px] text-white/35">
              Resposta em poucos minutos, direto com um consultor.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
