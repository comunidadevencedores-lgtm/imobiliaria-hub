export default function Logo({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const textColor = variant === "light" ? "text-white" : "text-ink";
  const subColor = variant === "light" ? "text-white/70" : "text-graphite/55";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-ember text-[13px] font-bold tracking-tight text-white">
        IC
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-[15px] font-bold ${textColor}`}>
          Imobiliária
        </span>
        <span className={`block text-[10px] font-medium uppercase tracking-[0.22em] ${subColor}`}>
          Curitiba
        </span>
      </span>
    </div>
  );
}
