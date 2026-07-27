import Image from "next/image";
import Link from "next/link";
import SearchWidget from "@/components/SearchWidget";
import PropertyCard, { cardTags } from "@/components/PropertyCard";
import { properties } from "@/lib/properties";
import { whatsappLink } from "@/lib/format";

export default function Home() {
  const featured = properties.slice(0, 3);

  return (
    <>
      {/* Hero com Foto de Fundo e Alinhamento Perfeito */}
      <section className="relative flex min-h-[92vh] w-full flex-col items-center justify-center bg-ink px-4 text-center md:px-8">
        
        {/* FOTO DE FUNDO */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80"
            alt="Interior de imóvel de alto padrão"
            fill
            priority
            className="object-cover opacity-40"
          />
          {/* Sombra de fundo leve */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        {/* CONTEÚDO 100% CENTRALIZADO */}
        <div className="relative z-10 flex w-full max-w-6xl flex-col items-center justify-center pt-10">
          
          {/* LOGO SOLAR BEM MAIOR */}
          <div className="mb-12 flex w-full justify-center">
            <Image
              src="/logo.svg"
              alt="Solar Imóveis"
              width={500}
              height={160}
              priority
              className="h-auto w-72 md:w-[420px] object-contain filter drop-shadow-lg"
            />
          </div>

          {/* BUSCADOR 100% CENTRALIZADO */}
          <div className="flex w-full justify-center">
            <div className="w-full max-w-5xl">
              <SearchWidget />
            </div>
          </div>

        </div>
      </section>

      {/* Curadoria — vitrine editorial */}
      <section className="bg-offwhite px-6 py-24 md:px-10">
        <div className="mx-auto max-w-8xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ember">
                Curadoria Imobiliária Curitiba
              </p>
              <h2 className="mt-2 font-display text-[30px] font-semibold text-ink">
                Imóveis selecionados
              </h2>
            </div>
            <Link
              href="/imoveis"
              className="focus-ring text-[13px] font-semibold text-graphite/60 transition hover:text-ink"
            >
              Ver todo o catálogo →
            </Link>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <PropertyCard key={p.slug} property={p} tag={cardTags[String(i)]} />
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
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ember">
                Imobiliária Curitiba
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
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ember/10 text-ember">
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
            href={whatsappLink("Olá! Quero receber novidades de lançamentos da Imobiliária Curitiba.")}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-8 inline-flex items-center gap-2 rounded-xl bg-ember px-7 py-3.5 text-[14px] font-semibold text-white transition hover:bg-emberDark"
          >
            Falar no WhatsApp →
          </a>
        </div>
      </section>
    </>
  );
}
