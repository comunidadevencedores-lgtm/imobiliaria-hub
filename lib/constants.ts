export const PROPERTY_TYPES = ["Apartamento", "Cobertura", "Casa"] as const;

export const PRICE_RANGES = [
  { value: "400000-700000", label: "R$ 400 mil – 700 mil" },
  { value: "700000-1200000", label: "R$ 700 mil – 1,2 mi" },
  { value: "1200000-999999999", label: "Acima de R$ 1,2 mi" },
] as const;
