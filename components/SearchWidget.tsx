"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PROPERTY_TYPES, PRICE_RANGES } from "@/lib/constants";

const tabs = ["Comprar", "Alugar", "Vender"] as const;
type Tab = (typeof tabs)[number];

export default function SearchWidget() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("Comprar");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

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
      className="flex w-full max-w-3xl flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-2.5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-xl md:flex-row md:items-center md:gap-0 md:p-2"
    >
      {/* Tabs */}
      <div className="flex shrink-0 gap-1 px-1 md:px-1">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={
              "focus-ring rounded-xl px-4 py-2.5 text-[13px] font-semibold transition " +
              (tab === t
                ? "bg-white/10 text-white"
                : "text-white/45 hover:text-white/75")
            }
          >
            {t}
          </button>
        ))}
      </div>

      <div className="hidden h-9 w-px shrink-0 bg-white/10 md:block" />

      {tab !== "Vender" ? (
        <>
          <label className="flex flex-1 flex-col px-4 py-1.5 text-left">
            <span className="text-[10px] font-medium uppercase tracking-wide text-white/35">
              Tipo de imóvel
            </span>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="focus-ring -ml-1 bg-transparent py-0.5 text-[14px] text-white outline-none [&>option]:text-ink"
            >
              <option value="">Qualquer tipo</option>
              {PROPERTY_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </label>

          <div className="hidden h-9 w-px shrink-0 bg-white/10 md:block" />

          <label className="flex flex-1 flex-col px-4 py-1.5 text-left">
            <span className="text-[10px] font-medium uppercase tracking-wide text-white/35">
              Faixa de preço
            </span>
            <select
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="focus-ring -ml-1 bg-transparent py-0.5 text-[14px] text-white outline-none [&>option]:text-ink"
            >
              <option value="">Qualquer valor</option>
              {PRICE_RANGES.map((r) => (
                <option key={r.value} value={r.value}>{r.label}</option>
              ))}
            </select>
          </label>
        </>
      ) : (
        <p className="flex-1 px-4 py-2 text-left text-[13px] text-white/60">
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
