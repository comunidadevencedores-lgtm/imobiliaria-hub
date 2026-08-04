import { Suspense } from "react";
import type { Metadata } from "next";
import Filters from "@/components/Filters";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/properties";

export const metadata: Metadata = {
  title: "Imóveis à venda e para alugar nas regiões nobres de Curitiba",
  description:
    "Filtre por região, tipo e preço e encontre imóveis novos no Batel, Bigorrilho, Água Verde, Centro Cívico, Cabral, Juvevê, Alto da XV e Champagnat.",
};

function ListingContent({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { operacao, regiao, tipo, preco } = searchParams;

  let list = properties;
  if (operacao) list = list.filter((p) => p.operation === operacao);
  if (regiao) list = list.filter((p) => p.neighborhood === regiao);
  if (tipo) list = list.filter((p) => p.type === tipo);
  if (preco) {
    const [min, max] = preco.split("-").map(Number);
    list = list.filter((p) => p.price >= min && p.price <= max);
  }

  return (
    <div className="grid gap-8 md:grid-cols-[260px,1fr]">
      <Filters />
      <div>
        <p className="mb-5 text-[13px] text-graphite/55">
          {list.length} {list.length === 1 ? "imóvel encontrado" : "imóveis encontrados"}
        </p>
        {list.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center ring-1 ring-black/5">
            <p className="text-[15px] text-graphite/65">
              Nenhum imóvel com esses filtros ainda. Fale com a gente pelo
              WhatsApp que avisamos assim que chegar algo compatível.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {list.map((p) => (
              <PropertyCard key={p.slug} property={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ImoveisPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <section className="mx-auto max-w-8xl px-6 py-14 md:px-10 md:py-20">
      <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-brand">
        Curadoria Trato Feito
      </p>
      <h1 className="mt-3 font-display text-[32px] font-bold text-ink md:text-[40px]">
        Imóveis nas regiões nobres da cidade
      </h1>
      <p className="mt-3 max-w-xl text-[14px] text-graphite/55">
        Todos os imóveis do nosso catálogo são empreendimentos novos, com
        acabamento de alto padrão, em bairros consolidados perto do centro.
      </p>

      <div className="mt-10">
        <Suspense fallback={null}>
          <ListingContent searchParams={searchParams} />
        </Suspense>
      </div>
    </section>
  );
}
