import type { Metadata } from "next";
import { whatsappLink } from "@/lib/format";
import { allNeighborhoods } from "@/lib/properties";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a Imobiliária Curitiba pelo WhatsApp.",
};

export default function ContatoPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const isVender = searchParams.motivo === "vender";

  return (
    <section className="mx-auto max-w-8xl px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-ember">
          Contato
        </p>
        <h1 className="mt-3 font-display text-[32px] font-bold text-ink md:text-[38px]">
          {isVender ? "Quer vender seu imóvel?" : "Fale com a gente"}
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-graphite/70">
          {isVender
            ? "Conte um pouco sobre o imóvel e a região, nossa equipe faz uma avaliação e retorna com uma proposta de parceria."
            : "Todo o atendimento, dúvidas, visitas e negociação acontecem direto pelo WhatsApp com um consultor. Sem formulários longos, sem espera."}
        </p>

        <a
          href={whatsappLink(
            isVender
              ? "Olá! Quero vender/anunciar meu imóvel com a Imobiliária Curitiba."
              : "Olá! Gostaria de falar com um consultor da Imobiliária Curitiba."
          )}
          target="_blank"
          rel="noreferrer"
          className="focus-ring mt-8 inline-flex items-center gap-2 rounded-xl bg-ember px-7 py-4 text-[15px] font-semibold text-white transition hover:bg-emberDark"
        >
          Chamar no WhatsApp →
        </a>

        <div className="mt-14 grid grid-cols-2 gap-6 border-t border-black/10 pt-10 text-left">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-graphite/40">
              Região de atuação
            </p>
            <p className="mt-1.5 text-[14px] text-graphite/70">
              {allNeighborhoods.join(", ")}
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-graphite/40">
              Atendimento
            </p>
            <p className="mt-1.5 text-[14px] text-graphite/70">
              Segunda a sábado, 9h às 19h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
