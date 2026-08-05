import Image from "next/image";
import Link from "next/link";
import { Property } from "@/lib/properties";
import { formatPrice } from "@/lib/format";

const TAGS: Record<string, string> = {
  "0": "Lançamento",
  "1": "Exclusivo",
  "2": "Sob consulta",
};

export default function PropertyCard({
  property,
  tag,
}: {
  property: Property;
  tag?: string;
}) {
  return (
    <Link
      href={`/imoveis/${property.slug}`}
      className="group relative flex h-[380px] w-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-ink p-6 transition-all duration-300 md:h-[420px] md:p-8"
    >
      {/* Imagem de Fundo Completa */}
      <div className="absolute inset-0 z-0">
        <Image
          src={property.cover}
          alt={property.title}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover opacity-90 transition duration-700 ease-out group-hover:scale-105"
        />
        {/* Overlay em gradiente reforçado na base para leitura perfeita */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />
      </div>

      {/* Topo: Badges */}
      <div className="relative z-10 flex items-center justify-between">
        {tag ? (
          <span className="rounded-full bg-brand px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
            {tag}
          </span>
        ) : (
          <div />
        )}
        <span className="rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md border border-white/10">
          {property.operation === "Comprar" ? "À venda" : "Aluguel"}
        </span>
      </div>

      {/* Rodapé Interno: Informações sobre a foto */}
      <div className="relative z-10 mt-auto">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
          {property.neighborhood}
        </p>

        <h3 className="mt-1 font-display text-[20px] font-semibold text-white leading-tight md:text-[24px]">
          {property.title}
        </h3>

        <p className="mt-1 text-[12px] font-medium text-white/70">
          {property.type} · {property.area} m² · {property.bedrooms} quartos
        </p>

        <div className="mt-3 flex items-center justify-between border-t border-white/15 pt-3">
          <p className="font-display text-[18px] font-bold text-white md:text-[20px]">
            {formatPrice(property.price)}
          </p>
          <span className="text-[12px] font-semibold text-white transition-transform duration-300 group-hover:translate-x-1">
            Ver imóvel →
          </span>
        </div>
      </div>
    </Link>
  );
}

export const cardTags = TAGS;
