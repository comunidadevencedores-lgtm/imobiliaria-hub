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
      <section className="relative flex min-h-[92vh] flex-col items-center justify-center bg-ink px-6 text-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="Apartamento de alto padrão em Curitiba"
            fill
            priority
            className="object-cover opacity-30"
          />
      {/* Hero Refatorado: Fundo limpo, Logo no centro e Search Widget de ponta a ponta */}
      <section className="relative flex min-h-[70vh] w-full flex-col items-center justify-center bg-white px-4 py-16 text-center md:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
          
          {/* LOGO CENTRALIZADA */}
          <div className="mb-10 flex justify-center">
            <Image
              src="/logo.svg" // Salve a logo em /public/logo.svg
              alt="Imobiliária Hub"
              width={320}
              height={100}
              priority
              className="h-auto w-64 md:w-80 object-contain"
            />
          </div>

          {/* MENU / SEARCH WIDGET DE PONTA A PONTA */}
          <div className="w-full">
            <SearchWidget />
          </div>

        </div>
      </section>

      {/* Curadoria — vitrine editorial, direto no fundo off-white */}
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

      {/* Painel de confiança — off-white, azul entra só como detalhe (um dos ícones) */}
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

      {/* Captura via WhatsApp — off-white, com um filete azul de detalhe */}
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
