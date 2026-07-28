import Image from "next/image";
import Link from "next/link";
import { Property } from "@/lib/properties";
import { formatPrice } from "@/lib/format";

export default function PropertyCardOverlay({
  property,
  tag,
}: {
  property: Property;
  tag?: string;
}) {
  return (
    <Link
      href={`/imoveis/${property.slug}`}
      className="focus-ring group relative block aspect-[16/10] overflow-hidden rounded-lg"
    >
      <Image
        src={property.cover}
        alt={property.title}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />

      {tag && (
        <span className="absolute left-4 top-4 rounded-full bg-ember px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          {tag}
        </span>
      )}
      <span className="absolute right-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
        {property.operation === "Comprar" ? "À venda" : "Aluguel"}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ember">
          {property.neighborhood}
        </p>
        <h3 className="mt-1 font-display text-[19px] font-semibold text-white">
          {property.title}
        </h3>
        <p className="mt-1 text-[13px] text-white/70">
          {property.type} · {property.area} m² · {property.bedrooms} quartos
        </p>
        <p className="mt-2 font-display text-[18px] font-semibold text-white">
          {formatPrice(property.price)}
        </p>
      </div>
    </Link>
  );
}
