import Image from "next/image";
import Link from "next/link";
import { Property } from "@/lib/properties";
import { formatPrice } from "@/lib/format";

export const cardTags: Record<string, string> = {
  "0": "Lançamento",
  "1": "Exclusivo",
  "2": "Destaque",
};

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export default function PropertyCard({ property, index }: PropertyCardProps) {
  const tag = index !== undefined ? cardTags[String(index)] : undefined;

  return (
    <Link
      href={`/imoveis/${property.slug}`}
      className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink"
    >
      <Image
  src={property.cover || property.gallery?.[0] || "/placeholder.jpg"}
  alt={property.title}
  fill
  className="object-cover transition-transform duration-500 group-hover:scale-105"
/>

      {/* Gradiente fixo para leitura das informações */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-between p-6">
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
