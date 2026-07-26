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
    <div className="w-full max-w-2xl rounded-2xl bg-white p-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)]">
      <div className="flex gap-1 px-2 pt-2">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={
              "focus-ring rounded-lg px-4 py-2 text-[13px] font-semibold transition " +
              (tab === t
                ? "bg-sand text-ink"
                : "text-graphite/50 hover:text-graphite")
            }
          >
            {t}
          </button>
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 p-4 pt-3 md:flex-row md:items-end"
      >
        {tab !== "Vender" ? (
          <>
            <label className="flex-1 text-left">
              <span className="mb-1 block text-[11px] font-medium uppercase tracking-wide text-graphite/45">
                Tipo de propriedade
              </span>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="focus-ring w-full border-b border-black/10 bg-transparent py-1.5 text-[14px] text-ink outline-none"
              >
                <option value="">Todos</option>
                {PROPERTY_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </label>
            <label className="flex-1 text-left">
              <span className="mb-1 block text-[11px] font-medium uppercase tracking-wide text-graphite/45">
                Preços
              </span>
              <select
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="focus-ring w-full border-b border-black/10 bg-transparent py-1.5 text-[14px] text-ink outline-none"
              >
                <option value="">Qualquer valor</option>
                {PRICE_RANGES.map((r) => (
                  <option key={r.value} value={r.value}>{r.label}</option>
                ))}
              </select>
            </label>
          </>
        ) : (
          <p className="flex-1 text-left text-[14px] text-graphite/60">
            Conte pra gente sobre o seu imóvel e receba uma avaliação da nossa
            equipe pelo WhatsApp.
          </p>
        )}
        <button
          type="submit"
          className="focus-ring shrink-0 rounded-xl bg-ember px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-emberDark"
        >
          {tab === "Vender" ? "Falar com a equipe" : "Submit"} →
        </button>
      </form>
    </div>
  );
}
