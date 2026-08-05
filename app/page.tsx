import Image from "next/image";
import SearchWidget from "@/components/SearchWidget";
import PropertyCardOverlay from "@/components/PropertyCardOverlay";
import { cardTags } from "@/components/PropertyCard";
import { properties } from "@/lib/properties";
import { whatsappLink } from "@/lib/format";

export default function Home() {
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

      {/* Destaques / Vitrine */}
      <section className="w-full bg-ink py-12">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {FEATURED_PROPERTIES.slice(0, 2).map((property, idx) => (
              <PropertyCardOverlay
                key={property.id}
                property={property}
                tag={idx === 0 ? "Lançamento" : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Painel de confiança */}
      <section className="relative min-h-[70vh] w-full overflow-hidden bg-ink py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80"
            alt="Curitiba"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8">
          <div className="grid w-full items-stretch gap-6 lg:grid-cols-[1.2fr,1fr]">
            <div className="flex flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-md shadow-2xl md:p-12">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand">
                  Trato Feito
                </p>
                <h3 className="mt-4 max-w-md font-display text-[28px] font-semibold text-white leading-tight md:text-[36px]">
                  Curadoria em vez de catálogo genérico.
                </h3>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/80">
                  Trabalhamos só com empreendimentos novos, nas regiões mais
                  consolidadas e desejadas de Curitiba. Cada imóvel passa por
                  uma seleção antes de entrar no site.
                </p>
              </div>

              <div className="mt-10 flex gap-12 border-t border-white/15 pt-6">
                <div>
                  <p className="font-display text-[32px] font-bold text-white">8</p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-white/60">
                    Regiões nobres
                  </p>
                </div>
                <div>
                  <p className="font-display text-[32px] font-bold text-white">100%</p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-white/60">
                    Empreendimentos novos
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6">
              <div className="flex flex-1 flex-col justify-center overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-md shadow-2xl transition duration-300 hover:bg-white/20 hover:border-white/30 md:p-10">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-md shadow-inner">
                  ✓
                </span>
                <h4 className="mt-4 font-display text-[20px] font-semibold text-white">
                  Curadoria criteriosa
                </h4>
                <p className="mt-2 text-[14px] leading-relaxed text-white/75">
                  Só entram no catálogo imóveis novos, de alto padrão, com
                  localização e construtora verificadas.
                </p>
              </div>

              <div className="flex flex-1 flex-col justify-center overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-md shadow-2xl transition duration-300 hover:bg-white/20 hover:border-white/30 md:p-10">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-md shadow-inner">
                  →
                </span>
                <h4 className="mt-4 font-display text-[20px] font-semibold text-white">
                  Atendimento direto
                </h4>
                <p className="mt-2 text-[14px] leading-relaxed text-white/75">
                  Sem formulários longos: toda dúvida e visita são combinadas
                  direto com um consultor, pelo WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Captura via WhatsApp */}
      <section className="w-full bg-offwhite py-16">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <div className="w-full rounded-2xl border-t-4 border-blueDeep bg-white/80 p-8 text-center shadow-sm backdrop-blur-md md:p-14">
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
        </div>
      </section>
    </>
  );
}
