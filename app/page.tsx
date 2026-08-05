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

      {/* Vitrine de Imóveis (Grid de 4 imóveis) */}
      <section className="w-full bg-offwhite pb-1 pt-1">
        <div className="grid w-full gap-1 sm:grid-cols-2">
          {featured.map((p, i) => (
            <PropertyCardOverlay key={p.slug} property={p} tag={cardTags[String(i)]} />
          ))}
        </div>
      </section>

      {/* PAINEL DE CONFIANÇA - Efeito Água / Liquid Glass Puro & Fundo Destacado */}
      <section className="relative min-h-[80vh] w-full overflow-hidden bg-ink py-1">
        {/* Imagem de Fundo de Curitiba (bem viva, quase sem véu escuro) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80"
            alt="Curitiba"
            fill
            priority
            className="object-cover opacity-95"
          />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        {/* 3 cards iguais, lado a lado, mesmo tamanho dos cards de imóvel acima */}
        <div className="relative z-10 grid w-full gap-1 sm:grid-cols-3">
          <div className="flex flex-col justify-between rounded-3xl border border-white/25 bg-white/8 p-8 backdrop-blur-sm shadow-2xl transition duration-300 hover:bg-white/15 md:p-10">
            <div>
              <Image
                src="/icon.png"
                alt="Trato Feito Ícone"
                width={56}
                height={56}
                className="h-9 w-auto self-baseline object-contain"
              />
              <h3 className="mt-4 font-display text-[24px] font-semibold text-white leading-tight drop-shadow-md">
                Curadoria em vez de catálogo genérico.
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-white/90 drop-shadow">
                Trabalhamos só com empreendimentos novos, nas regiões mais
                consolidadas e desejadas de Curitiba. Cada imóvel passa por
                uma seleção antes de entrar no site.
              </p>
            </div>

            <div className="mt-10 flex gap-10 border-t border-white/25 pt-6">
              <div>
                <p className="font-display text-[28px] font-bold text-white drop-shadow">8</p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-white/80">
                  Regiões nobres
                </p>
              </div>
              <div>
                <p className="font-display text-[28px] font-bold text-white drop-shadow">100%</p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-white/80">
                  Empreendimentos novos
                </p>
              </div>
            </div>
          </div>

          <div className="group flex flex-col justify-center rounded-3xl border border-white/25 bg-white/8 p-8 backdrop-blur-sm shadow-2xl transition duration-300 hover:bg-white/15 md:p-10">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-sm shadow-inner border border-white/30">
              ✓
            </span>
            <h4 className="mt-5 font-display text-[20px] font-semibold text-white drop-shadow-md">
              Curadoria criteriosa
            </h4>
            <p className="mt-2 text-[14px] leading-relaxed text-white/90 drop-shadow">
              Só entram no catálogo imóveis novos, de alto padrão, com
              localização e construtora verificadas.
            </p>
          </div>

          <div className="group flex flex-col justify-center rounded-3xl border border-white/25 bg-white/8 p-8 backdrop-blur-sm shadow-2xl transition duration-300 hover:bg-white/15 md:p-10">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-sm shadow-inner border border-white/30">
              →
            </span>
            <h4 className="mt-5 font-display text-[20px] font-semibold text-white drop-shadow-md">
              Atendimento direto
            </h4>
            <p className="mt-2 text-[14px] leading-relaxed text-white/90 drop-shadow">
              Sem formulários longos: toda dúvida e visita são combinadas
              direto com um consultor, pelo WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Captura via WhatsApp */}
      <section className="w-full bg-offwhite py-16 px-4">
        <div className="mx-auto w-full max-w-7xl rounded-2xl border-t-4 border-blueDeep bg-white p-8 text-center shadow-sm md:p-14">
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
