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

        {/* max-w-7xl estica a barra mantendo um respiro elegante nas laterais. Para encostar 100%, troque max-w-7xl por max-w-full */}
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

      {/* Curadoria — vitrine editorial */}
      <section className="bg-offwhite px-6 pb-20 pt-8 md:px-10">
        <div className="mx-auto max-w-8xl">
          <div className="grid gap-1 sm:grid-cols-2">
            {featured.map((p, i) => (
              <PropertyCardOverlay key={p.slug} property={p} tag={cardTags[String(i)]} />
            ))}
          </div>
        </div>
      </section>

      {/* Painel de confiança */}
      <section className="bg-sand px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-8xl gap-6 lg:grid-cols-[1.3fr,1fr]">
          <div className="relative overflow-hidden rounded-2xl bg-ink p-10">
            <Image
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80"
              alt="Curitiba"
              fill
              className="object-cover opacity-20"
            />
            <div className="relative">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand">
                Trato Feito
              </p>
              <h3 className="mt-3 max-w-sm font-display text-[26px] font-semibold text-white">
                Curadoria em vez de catálogo genérico.
              </h3>
              <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/60">
                Trabalhamos só com empreendimentos novos, nas regiões mais
                consolidadas e desejadas de Curitiba. Cada imóvel passa por
                uma seleção antes de entrar no site.
              </p>
              <div className="mt-8 flex gap-10">
                <div>
                  <p className="font-display text-[26px] font-semibold text-white">8</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wide text-white/40">
                    Regiões nobres
                  </p>
                </div>
                <div>
                  <p className="font-display text-[26px] font-semibold text-white">100%</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wide text-white/40">
                    Empreendimentos novos
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-2xl bg-white p-7 ring-1 ring-black/5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                ✓
              </span>
              <h4 className="mt-4 font-display text-[17px] font-semibold text-ink">
                Curadoria criteriosa
              </h4>
              <p className="mt-2 text-[13px] leading-relaxed text-graphite/55">
                Só entram no catálogo imóveis novos, de alto padrão, com
                localização e construtora verificadas.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-7 ring-1 ring-black/5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blueDeep/10 text-blueDeep">
                →
              </span>
              <h4 className="mt-4 font-display text-[17px] font-semibold text-ink">
                Atendimento direto
              </h4>
              <p className="mt-2 text-[13px] leading-relaxed text-graphite/55">
                Sem formulários longos: toda dúvida e visita são combinadas
                direto com um consultor, pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Captura via WhatsApp */}
      <section className="bg-offwhite px-6 py-24 md:px-10">
        <div className="mx-auto max-w-2xl rounded-2xl border-t-4 border-blueDeep bg-white px-8 py-14 text-center shadow-sm ring-1 ring-black/5">
          <h3 className="font-display text-[26px] font-semibold text-ink md:text-[30px]">
            Quer saber em primeira mão dos próximos lançamentos?
          </h3>
          <p className="mx-auto mt-4 max-w-md text-[14px] text-graphite/60">
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
