"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/imoveis", label: "Imóveis" },
  { href: "/sobre", label: "Sobre nós" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={
        isHome
          ? "absolute inset-x-0 top-0 z-30"
          : "sticky top-0 z-30 border-b border-white/10 bg-ink/90 backdrop-blur"
      }
    >
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-6 py-6 md:px-10">
        <Link href="/" className="focus-ring rounded-sm">
          <Logo variant="light" />
        </Link>
        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="focus-ring text-[14px] font-medium text-white/80 transition hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contato"
          className="focus-ring rounded-full bg-ember px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-emberDark"
        >
          Contato →
        </Link>
      </nav>
    </header>
  );
}
