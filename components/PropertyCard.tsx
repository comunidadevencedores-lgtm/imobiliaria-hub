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
      className="focus-ring group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.cover}
          alt={property.title}
          fill
          sizes="(min-width: 1024px) 380px, 90vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {tag && (
          <span className="absolute left-3 top-3 rounded-full bg-ember px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
            {tag}
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-ink">
          {property.operation === "Comprar" ? "À venda" : "Aluguel"}
        </span>
      </div>
      <div className="p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ember">
          {property.neighborhood}
        </p>
        <h3 className="mt-1.5 font-display text-[17px] font-semibold text-ink">
          {property.title}
        </h3>
        <p className="mt-1 text-[13px] text-graphite/55">
          {property.type} · {property.area} m² · {property.bedrooms} quartos
        </p>
        <p className="mt-3 font-display text-[18px] font-bold text-ink">
          {formatPrice(property.price)}
        </p>
      </div>
    </Link>
  );
}

export const cardTags = TAGS;
