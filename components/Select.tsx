"use client";

import { useEffect, useRef, useState } from "react";

export type SelectOption = { value: string; label: string };

export default function Select({
  label,
  value,
  onChange,
  options,
  placeholder,
  variant = "light",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder: string;
  /** "light" = campo sobre fundo branco/vidro claro. "dark" = campo sobre fundo escuro. */
  variant?: "light" | "dark";
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const selected = options.find((o) => o.value === value);
  const labelColor = variant === "dark" ? "text-white/40" : "text-graphite/40";
  const valueColor = variant === "dark" ? "text-white" : "text-ink";

  return (
    <div ref={ref} className="relative flex flex-1 flex-col px-4 py-1.5 text-left">
      <span className={`text-[10px] font-medium uppercase tracking-wide ${labelColor}`}>
        {label}
      </span>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`focus-ring -ml-1 flex items-center gap-1.5 bg-transparent py-0.5 text-[14px] ${valueColor} outline-none`}
      >
        {selected ? selected.label : placeholder}
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul className="absolute left-0 top-full z-40 mt-2 w-56 overflow-hidden rounded-xl border border-black/5 bg-white py-1.5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25)]">
          <li>
            <button
              type="button"
              onClick={() => { onChange(""); setOpen(false); }}
              className={`block w-full px-4 py-2 text-left text-[13px] transition hover:bg-sand ${!value ? "font-semibold text-brand" : "text-graphite"}`}
            >
              {placeholder}
            </button>
          </li>
          {options.map((o) => (
            <li key={o.value}>
              <button
                type="button"
                onClick={() => { onChange(o.value); setOpen(false); }}
                className={`block w-full px-4 py-2 text-left text-[13px] transition hover:bg-sand ${value === o.value ? "font-semibold text-brand" : "text-graphite"}`}
              >
                {o.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
