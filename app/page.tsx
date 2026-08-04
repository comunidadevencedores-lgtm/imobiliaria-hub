import Image from "next/image";
import SearchWidget from "@/components/SearchWidget";
import PropertyCardOverlay from "@/components/PropertyCardOverlay";
import { cardTags } from "@/components/PropertyCard";
import { properties } from "@/lib/properties";
import { whatsappLink } from "@/lib/format";

export default function Home() {
  const featured = properties.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen w-full items-center justify-center bg-ink px-4 py-20 text-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80"
            alt="Interior de imóvel de alto padrão"
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 md:px-8">
          <div className="mb-10 flex w-full justify-center">
            <Image
              src="/logo-white.png"
              alt="trato.feito"
              width={2862}
              height={461}
              priority
              className="h-auto w-72 object-contain drop-shadow-lg md:w-[26rem]"
            />
          </div>

          <SearchWidget />
        </div>
      </section>

      {/* Curadoria — vitrine editorial de ponta a ponta */}
      <section className="w-full bg-offwhite pb-1 pt-1">
        <div className="grid w-full gap-1 sm:grid-cols-2">
          {featured.map((p, i) => (
            <PropertyCardOverlay key={p.slug} property={p} tag={cardTags[String(i)]} />
          ))}
        </div>
      </section>

      {/* Painel de confiança de ponta a ponta com caixas transparentes/glass */}
      <section className="w-full bg-sand py-12">
        <div className="grid w-full gap-4 px-1 lg:grid-cols-[1.3fr,1fr]">
          {/* Card Principal Esquerdo */}
          <div className="relative overflow-hidden rounded-2xl bg-ink/90 p-8 backdrop-blur-md border border-white/10 md:p-10">
            <Image
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80"
              alt="Curitiba"
              fill
              className="object-cover opacity-25"
            />
            <div className="relative z-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand">
                Trato Feito
              </p>
              <h3 className="mt-3 max-w-sm font-display text-[26px] font-semibold text-white">
                Curadoria em vez de catálogo genérico.
              </h3>
              <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/70">
                Trabalhamos só com empreendimentos novos, nas regiões mais
                consolidadas e desejadas de Curitiba. Cada imóvel passa por
                uma seleção antes de entrar no site.
              </p>
              <div className="mt-8 flex gap-10">
                <div>
                  <p className="font-display text-[26px] font-semibold text-white">8</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wide text-white/50">
                    Regiões nobres
                  </p>
                </div>
                <div>
                  <p className="font-display text-[26px] font-semibold text-white">100%</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wide text-white/50">
                    Empreendimentos novos
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Caixas Transparentes (estilo botão glassmorphism) */}
          <div className="grid gap-4">
            <div className="group rounded-2xl border border-black/5 bg-white/40 p-7 backdrop-blur-md transition hover:bg-white/60 hover:shadow-lg">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                ✓
              </span>
              <h4 className="mt-4 font-display text-[17px] font-semibold text-ink">
                Curadoria criteriosa
              </h4>
              <p className="mt-2 text-[13px] leading-relaxed text-graphite/70">
                Só entram no catálogo imóveis novos, de alto padrão, com
                localização e construtora verificadas.
              </p>
            </div>

            <div className="group rounded-2xl border border-black/5 bg-white/40 p-7 backdrop-blur-md transition hover:bg-white/60 hover:shadow-lg">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blueDeep/10 text-blueDeep">
                →
              </span>
              <h4 className="mt-4 font-display text-[17px] font-semibold text-ink">
                Atendimento direto
              </h4>
              <p className="mt-2 text-[13px] leading-relaxed text-graphite/70">
                Sem formulários longos: toda dúvida e visita são combinadas
                direto com um consultor, pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Captura via WhatsApp de ponta a ponta */}
      <section className="w-full bg-offwhite py-16">
        <div className="mx-auto w-full rounded-2xl border-t-4 border-blueDeep bg-white/80 p-8 text-center shadow-sm backdrop-blur-md md:p-14">
          <h3 className="font-display text-[26px] font-semibold text-ink md:text-[30px]">
            Quer saber em primeira mão dos próximos lançamentos?
          </h3>
          <p className="mx-auto mt-4 max-w-md text-[14px] text-graphite/70">
            Fale com um consultor pelo WhatsApp e receba oportunidades das
            regiões nobres de Curitiba antes de irem para o site.
          </p>
          <a
            href={whatsappLink("Olá! Quero receber novidades de lançamentos da Trato Feito.")}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-8 inline-flex items-center gap-2 rounded-xl bg-brand px-7 py-3.5 text-[14px] font-semibold text-white transition hover:bg-brandDark"
          >
            Falar no WhatsApp →
          </a>
        </div>
      </section>
    </>
  );
}
