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
    <Link href={`/imoveis/${property.slug}`} className="focus-ring group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src={property.cover}
          alt={property.title}
          fill
          sizes="(min-width: 1024px) 380px, 90vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
        {tag && (
          <span className="absolute left-3 top-3 rounded-full bg-ember px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
            {tag}
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
          {property.operation === "Comprar" ? "À venda" : "Aluguel"}
        </span>
      </div>
      <div className="mt-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ember">
          {property.neighborhood}
        </p>
        <h3 className="mt-1 font-display text-[17px] font-semibold text-white">
          {property.title}
        </h3>
        <p className="mt-1 text-[13px] text-white/45">
          {property.type} · {property.area} m² · {property.bedrooms} quartos
        </p>
        <p className="mt-2 font-display text-[17px] font-semibold text-white">
          {formatPrice(property.price)}
        </p>
      </div>
    </Link>
  );
}

export const cardTags = TAGS;
