import Image from "next/image";

export default function Logo({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const src = variant === "light" ? "/logo-white.png" : "/logo-blue.png";

  return (
    <span className={`block ${className}`}>
      <Image
        src={src}
        alt="trato.feito"
        width={2862}
        height={461}
        priority
        className="h-8 w-auto object-contain"
      />
    </span>
  );
}
