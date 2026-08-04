function ListingContent({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { operacao, regiao, tipo, preco, q } = searchParams;

  let list = properties;

  // Filtro por texto / busca livre (q)
  if (q) {
    const term = q.trim().toLowerCase();
    list = list.filter((p) => {
      return (
        p.slug?.toLowerCase().includes(term) ||
        p.title?.toLowerCase().includes(term) ||
        p.neighborhood?.toLowerCase().includes(term) ||
        p.city?.toLowerCase().includes(term) ||
        p.type?.toLowerCase().includes(term) ||
        p.description?.toLowerCase().includes(term)
      );
    });
  }

  // Demais filtros
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
