import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre nós",
  description:
    "Conheça a Imobiliária Curitiba: curadoria de imóveis novos e de alto padrão nas regiões nobres da cidade.",
};

export default function SobrePage() {
  return (
    <section>
      <div className="relative flex h-[52vh] min-h-[380px] items-end overflow-hidden bg-ink">
        <Image
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80"
          alt="Curitiba, vista da cidade"
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-8xl px-6 pb-14 md:px-10">
          <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-white/60">
            Sobre nós
          </p>
          <h1 className="mt-4 max-w-xl font-display text-[34px] font-bold text-white md:text-[44px]">
            Curadoria, não catálogo.
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-8xl px-6 py-16 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr,1fr]">
          <div className="space-y-5 text-[15px] leading-relaxed text-graphite/75">
            <p>
              A Imobiliária Curitiba nasceu com um recorte claro: em vez de
              tentar cobrir a cidade inteira, concentramos nosso trabalho nas
              regiões mais nobres e centrais — Batel, Bigorrilho, Água Verde,
              Centro Cívico, Cabral, Juvevê, Alto da XV e Champagnat.
            </p>
            <p>
              Trabalhamos apenas com empreendimentos novos, de alta
              qualidade construtiva e localização consolidada. Cada imóvel do
              nosso catálogo passa por uma curadoria antes de entrar no site
              — por isso, menos é mais: preferimos uma seleção enxuta e bem
              documentada a um catálogo genérico.
            </p>
            <p>
              O atendimento é direto, sem etapas desnecessárias: você
              encontra o imóvel, vê fotos e vídeo em alta qualidade e agenda
              a visita direto pelo WhatsApp com um consultor.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              ["Regiões", "8 bairros nobres"],
              ["Padrão", "100% empreendimentos novos"],
              ["Ticket", "Imóveis a partir de R$ 400 mil"],
              ["Atendimento", "Direto pelo WhatsApp"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-white p-6 ring-1 ring-black/5">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-graphite/40">
                  {label}
                </p>
                <p className="mt-2 font-display text-[16px] font-semibold text-ink">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
