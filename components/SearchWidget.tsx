"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PROPERTY_TYPES, priceRangesFor } from "@/lib/constants";
import Select from "./Select";

const tabs = ["Comprar", "Alugar", "Vender"] as const;
type Tab = (typeof tabs)[number];

const typeOptions = PROPERTY_TYPES.map((t) => ({ value: t, label: t }));

export default function SearchWidget() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("Comprar");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  const priceOptions = priceRangesFor(tab).map((r) => ({ value: r.value, label: r.label }));

  function selectTab(t: Tab) {
    setTab(t);
    setPrice(""); // faixas de comprar e alugar usam valores diferentes
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (tab === "Vender") {
      router.push("/contato?motivo=vender");
      return;
    }
    const params = new URLSearchParams();
    params.set("operacao", tab);
    if (type) params.set("tipo", type);
    if (price) params.set("preco", price);
    router.push(`/imoveis?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-3xl flex-col gap-3 rounded-2xl border border-black/5 bg-white/95 p-2.5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)] backdrop-blur-xl md:flex-row md:items-center md:gap-0 md:p-2"
    >
      {/* Tabs */}
      <div className="flex shrink-0 gap-1 px-1">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => selectTab(t)}
            className={
              "focus-ring rounded-xl px-4 py-2.5 text-[13px] font-semibold transition " +
              (tab === t
                ? "bg-sand text-ink"
                : "text-graphite/45 hover:text-graphite")
            }
          >
            {t}
          </button>
        ))}
      </div>

      <div className="hidden h-9 w-px shrink-0 bg-black/10 md:block" />

      {tab !== "Vender" ? (
        <>
          <Select
            label="Tipo de imóvel"
            value={type}
            onChange={setType}
            options={typeOptions}
            placeholder="Qualquer tipo"
          />

          <div className="hidden h-9 w-px shrink-0 bg-black/10 md:block" />

          <Select
            label="Faixa de preço"
            value={price}
            onChange={setPrice}
            options={priceOptions}
            placeholder="Qualquer valor"
          />
        </>
      ) : (
        <p className="flex-1 px-4 py-2 text-left text-[13px] text-graphite/60">
          Conte pra gente sobre o seu imóvel pelo WhatsApp.
        </p>
      )}

      <button
        type="submit"
        className="focus-ring shrink-0 rounded-xl bg-ember px-6 py-3 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-emberDark"
      >
        {tab === "Vender" ? "Falar com a equipe" : "Buscar"} →
      </button>
    </form>
  );
}
