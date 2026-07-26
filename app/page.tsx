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
      {/* Hero — headline serifada centralizada + busca flutuante, como na referência */}
      <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden bg-ink px-6 text-center">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Apartamento de alto padrão em Curitiba"
          fill
          priority
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />

        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center pt-20">
          <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-ember">
            Regiões nobres · Curitiba
          </p>
          <h1 className="mt-6 font-display text-[42px] font-semibold leading-[1.15] text-white md:text-[56px]">
            Endereços que definem Curitiba.
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/55">
            Curadoria de imóveis novos e de alto padrão no Batel, Bigorrilho,
            Água Verde e outras regiões centrais mais desejadas da cidade.
          </p>

          <div className="mt-10 w-full">
            <SearchWidget />
          </div>
        </div>
      </section>

      {/* Curadoria — vitrine de imóveis selecionados, com badges, sobre fundo escuro */}
      <section className="bg-ink px-6 py-24 md:px-10">
        <div className="mx-auto max-w-8xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ember">
                Curadoria Imobiliária Curitiba
              </p>
              <h2 className="mt-2 font-display text-[30px] font-semibold text-white">
                Imóveis selecionados
              </h2>
            </div>
            <Link
              href="/imoveis"
              className="focus-ring text-[13px] font-semibold text-white/60 transition hover:text-white"
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

      {/* Painel de confiança — mesmo racional do painel "Ecossistema" da referência,
          adaptado ao que a Imobiliária Curitiba realmente entrega */}
      <section className="bg-navy px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-8xl gap-6 lg:grid-cols-[1.3fr,1fr]">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink p-10">
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
              <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/55">
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
            <div className="rounded-2xl border border-white/10 bg-ink p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ember/15 text-ember">
                ✓
              </span>
              <h4 className="mt-4 font-display text-[17px] font-semibold text-white">
                Curadoria criteriosa
              </h4>
              <p className="mt-2 text-[13px] leading-relaxed text-white/50">
                Só entram no catálogo imóveis novos, de alto padrão, com
                localização e construtora verificadas.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-ink p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ember/15 text-ember">
                →
              </span>
              <h4 className="mt-4 font-display text-[17px] font-semibold text-white">
                Atendimento direto
              </h4>
              <p className="mt-2 text-[13px] leading-relaxed text-white/50">
                Sem formulários longos: toda dúvida e visita são combinadas
                direto com um consultor, pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Captura via WhatsApp — mesmo espírito da faixa de "acesso exclusivo" da
          referência, mas sem formulário de e-mail (decisão já fechada com o cliente) */}
      <section className="bg-ink px-6 py-24 md:px-10">
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-navy px-8 py-14 text-center">
          <h3 className="font-display text-[26px] font-semibold text-white md:text-[30px]">
            Quer saber em primeira mão dos próximos lançamentos?
          </h3>
          <p className="mx-auto mt-4 max-w-md text-[14px] text-white/55">
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
