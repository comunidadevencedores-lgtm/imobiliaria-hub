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
      className="group relative flex min-h-[420px] w-full flex-col justify-between overflow-hidden bg-ink p-6 transition md:p-10"
    >
      {/* Imagem de Fundo com Hover Zoom */}
      <div className="absolute inset-0 z-0">
        <Image
          src={property.cover}
          alt={property.title}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover opacity-85 transition duration-700 ease-out group-hover:scale-105"
        />
        {/* Overlay escuro em gradiente para dar leitura aos textos */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
      </div>

      {/* Topo: Tags/Badges */}
      <div className="relative z-10 flex items-center justify-between">
        {tag ? (
          <span className="rounded-full bg-brand px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
            {tag}
          </span>
        ) : (
          <div />
        )}
        <span className="rounded-full bg-white/20 px-3.5 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
          {property.operation === "Comprar" ? "À venda" : "Aluguel"}
        </span>
      </div>

      {/* Base: Informações do Imóvel */}
      <div className="relative z-10 mt-auto pt-16">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
          {property.neighborhood}
        </p>
        
        <h3 className="mt-2 font-display text-[24px] font-semibold leading-snug text-white md:text-[28px]">
          {property.title}
        </h3>

        <p className="mt-1 text-[13px] font-medium text-white/70">
          {property.type} · {property.area} m² · {property.bedrooms} quartos
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-4">
          <p className="font-display text-[20px] font-bold text-white">
            {formatPrice(property.price)}
          </p>
          <span className="text-[13px] font-semibold text-white transition-transform duration-300 group-hover:translate-x-1">
            Ver imóvel →
          </span>
        </div>
      </div>
    </Link>
  );
}

export const cardTags = TAGS;
