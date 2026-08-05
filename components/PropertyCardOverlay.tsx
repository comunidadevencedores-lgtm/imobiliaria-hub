import Image from "next/image";
import Link from "next/link";
import { Property } from "@/lib/properties";
import { formatPrice } from "@/lib/format";

interface PropertyCardOverlayProps {
  property: Property;
  tag?: string;
}

export default function PropertyCardOverlay({
  property,
  tag,
}: PropertyCardOverlayProps) {
  return (
    <Link
      href={`/imoveis/${property.slug}`}
      className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink"
    >
      {/* Imagem de Fundo com zoom suave no hover */}
      <Image
        src={property.cover}
        alt={property.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradiente Escuro (Aparece no Hover) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Conteúdo sobreposto (Aparece no Hover) */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {/* Badges do Topo */}
        <div className="flex items-center justify-between">
          {tag && (
            <span className="rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
              {tag}
            </span>
          )}
          <span className="rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
            {property.operation === "Alugar" ? "Aluguel" : "À venda"}
          </span>
        </div>

        {/* Informações do Rodapé */}
        <div className="text-white">
          <p className="text-[12px] font-medium uppercase tracking-widest text-white/70">
            {property.neighborhood}
          </p>
          <h3 className="mt-1 font-display text-[20px] font-semibold leading-snug">
            {property.title}
          </h3>
          <p className="mt-1 text-[13px] text-white/80">
            {property.type} • {property.area} m² • {property.bedrooms} quartos
          </p>
          <p className="mt-3 font-display text-[22px] font-bold text-white">
            {formatPrice(property.price)}
          </p>
        </div>
      </div>
    </Link>
  );
}

