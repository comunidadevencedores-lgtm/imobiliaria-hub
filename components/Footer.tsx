import Link from "next/link";
import Logo from "./Logo";
import { whatsappLink } from "@/lib/format";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-ink">
      <div className="mx-auto max-w-8xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.3fr,1fr,1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-white/60">
              Curadoria de imóveis novos e de alto padrão nas regiões mais
              desejadas de Curitiba.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Navegação
            </p>
            <ul className="mt-4 space-y-3 text-[14px] text-white/70">
              <li><Link href="/imoveis" className="hover:text-white">Imóveis</Link></li>
              <li><Link href="/sobre" className="hover:text-white">Sobre nós</Link></li>
              <li><Link href="/contato" className="hover:text-white">Contato</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Fale conosco
            </p>
            <ul className="mt-4 space-y-3 text-[14px] text-white/70">
              <li>
                <a
                  href={whatsappLink("Olá! Gostaria de mais informações sobre os imóveis.")}
                  className="hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>Batel, Curitiba — PR</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-[12px] text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Imobiliária Curitiba. Todos os direitos reservados.</p>
          <p>CRECI [a definir]</p>
        </div>
      </div>
    </footer>
  );
}
