"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { whatsappLink } from "@/lib/format";

const links = [
  { href: "/", label: "início" },
  { href: "/imoveis", label: "imóveis" },
  { href: "/sobre", label: "sobre" },
  { href: "/contato", label: "contato" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const textColor = isHome
    ? "text-white/80 hover:text-white"
    : "text-graphite hover:text-ink";
  const activeColor = isHome ? "text-white" : "text-ink";
  const iconColor = isHome
    ? "text-white/70 hover:text-white"
    : "text-graphite hover:text-ink";

  return (
    <header
      className={
        isHome
          ? "absolute inset-x-0 top-0 z-30"
          : "sticky top-0 z-30 border-b border-black/5 bg-offwhite/90 backdrop-blur"
      }
    >
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-6 py-6 md:px-10">
        {/* Menu à esquerda */}
        <ul className="flex items-center gap-7">
          {links.map((l) => {
            const active = l.href === pathname;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`focus-ring text-[13px] font-medium lowercase tracking-wide transition ${
                    active ? `${activeColor} font-semibold` : textColor
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Contatos à direita — só ícones */}
        <div className="flex items-center gap-5">
          <a
            href="mailto:contato@tfimoveis.com.br"
            aria-label="E-mail"
            className={`focus-ring transition ${iconColor}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          </a>
          <a
            href={whatsappLink("Olá! Gostaria de falar com um consultor da Trato Feito.")}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className={`focus-ring transition ${iconColor}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.7-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.4.1-.2 0-.4 0-.5C11.1 9.5 10.6 8.3 10.4 8c-.2-.4-.4-.3-.6-.3h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s1 2.5 1.1 2.6c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3z" />
              <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3C4.1 14.9 3.7 13.5 3.7 12c0-4.6 3.7-8.3 8.3-8.3s8.3 3.7 8.3 8.3-3.7 8.3-8.3 8.3z" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
