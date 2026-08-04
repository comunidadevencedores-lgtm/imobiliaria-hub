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
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  const priceOptions = priceRangesFor(tab).map((r) => ({ value: r.value, label: r.label }));

  function selectTab(t: Tab) {
    setTab(t);
    setPrice("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (tab === "Vender") {
      router.push("/contato?motivo=vender");
      return;
    }
    const params = new URLSearchParams();
    params.set("operacao", tab);
    if (query) params.set("q", query);
    if (type) params.set("tipo", type);
    if (price) params.set("preco", price);
    router.push(`/imoveis?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-7xl flex-col gap-3 rounded-2xl border border-black/5 bg-[#F4F4F4] p-3 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)] backdrop-blur-xl md:flex-row md:items-center md:gap-2 md:p-2.5"
    >
      {/* Campo de Busca Livre com Lupa */}
      <div className="flex flex-1 items-center gap-3 px-3">
        <svg
          className="h-6 w-6 shrink-0 text-graphite/40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          viewBox="0 0 24 24"
        >
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path strokeLinecap="round" d="M15.5 15.5L20 20" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Busque por código do imóvel, categoria, qtd. de cômodos..."
          className="w-full bg-transparent text-[13px] italic text-ink placeholder:text-graphite/40 focus:outline-none"
        />
      </div>

      <div className="hidden h-9 w-px shrink-0 bg-black/10 md:block" />

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
                ? "bg-black/10 text-ink"
                : "text-graphite/45 hover:text-graphite")
            }
          >
            {t}
          </button>
        ))}
      </div>

      <div className="hidden h-9 w-px shrink-0 bg-black/10 md:block" />

      {/* Selects ou mensagem de Vender */}
      {tab !== "Vender" ? (
        <div className="flex shrink-0 items-center gap-2">
          <div className="w-36">
            <Select
              label="TIPO DE IMÓVEL"
              value={type}
              onChange={setType}
              options={typeOptions}
              placeholder="Qualquer tipo"
            />
          </div>

          <div className="hidden h-9 w-px shrink-0 bg-black/10 md:block" />

          <div className="w-36">
            <Select
              label="FAIXA DE PREÇO"
              value={price}
              onChange={setPrice}
              options={priceOptions}
              placeholder="Qualquer valor"
            />
          </div>
        </div>
      ) : (
        <p className="flex-1 px-4 py-2 text-left text-[13px] text-graphite/60">
          Conte pra gente sobre o seu imóvel pelo WhatsApp.
        </p>
      )}

      {/* Botão Buscar */}
      <button
        type="submit"
        className="focus-ring shrink-0 rounded-xl bg-[#2082BA] px-6 py-3 text-[13px] font-bold uppercase tracking-wider text-white transition hover:opacity-90"
      >
        {tab === "Vender" ? "Falar com a equipe" : "BUSCAR ›"}
      </button>
    </form>
  );
}
