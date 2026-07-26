"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { allNeighborhoods } from "@/lib/properties";
import { PROPERTY_TYPES, PRICE_RANGES } from "@/lib/constants";

export default function Filters() {
  const router = useRouter();
  const params = useSearchParams();

  function update(key: string, value: string) {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    router.push(`/imoveis?${next.toString()}`);
  }

  const selectClass =
    "focus-ring w-full rounded-lg border border-black/10 bg-offwhite px-3 py-2 text-[14px] text-ink";
  const labelClass =
    "mb-1.5 block text-[11px] font-medium uppercase tracking-wide text-graphite/45";

  return (
    <aside className="h-fit rounded-2xl bg-white p-6 ring-1 ring-black/5">
      <p className="font-display text-[15px] font-semibold text-ink">Filtrar</p>

      <div className="mt-5 space-y-5">
        <label className="block">
          <span className={labelClass}>Operação</span>
          <select
            defaultValue={params.get("operacao") ?? ""}
            onChange={(e) => update("operacao", e.target.value)}
            className={selectClass}
          >
            <option value="">Comprar ou alugar</option>
            <option value="Comprar">Comprar</option>
            <option value="Alugar">Alugar</option>
          </select>
        </label>

        <label className="block">
          <span className={labelClass}>Região</span>
          <select
            defaultValue={params.get("regiao") ?? ""}
            onChange={(e) => update("regiao", e.target.value)}
            className={selectClass}
          >
            <option value="">Todas as regiões</option>
            {allNeighborhoods.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className={labelClass}>Tipo</span>
          <select
            defaultValue={params.get("tipo") ?? ""}
            onChange={(e) => update("tipo", e.target.value)}
            className={selectClass}
          >
            <option value="">Todos os tipos</option>
            {PROPERTY_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className={labelClass}>Faixa de preço</span>
          <select
            defaultValue={params.get("preco") ?? ""}
            onChange={(e) => update("preco", e.target.value)}
            className={selectClass}
          >
            <option value="">Qualquer valor</option>
            {PRICE_RANGES.map((r) => (
              <option key={r.value} value={r.value}>{r.label}</option>
            ))}
          </select>
        </label>

        {params.toString() && (
          <button
            onClick={() => router.push("/imoveis")}
            className="focus-ring text-[13px] font-semibold text-ember hover:text-emberDark"
          >
            Limpar filtros
          </button>
        )}
      </div>
    </aside>
  );
}
