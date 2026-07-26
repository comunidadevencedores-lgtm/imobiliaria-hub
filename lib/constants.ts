export const PROPERTY_TYPES = ["Apartamento", "Cobertura", "Casa"] as const;

// Faixas de valor de venda (imóvel à venda)
export const PRICE_RANGES_COMPRAR = [
  { value: "400000-700000", label: "R$ 400 mil – 700 mil" },
  { value: "700000-1200000", label: "R$ 700 mil – 1,2 mi" },
  { value: "1200000-999999999", label: "Acima de R$ 1,2 mi" },
] as const;

// Faixas de valor de aluguel (mensal)
export const PRICE_RANGES_ALUGAR = [
  { value: "0-5000", label: "Até R$ 5 mil" },
  { value: "5000-25000", label: "R$ 5 mil – 25 mil" },
  { value: "25000-999999999", label: "Acima de R$ 25 mil" },
] as const;

export function priceRangesFor(operation: "Comprar" | "Alugar" | "Vender") {
  return operation === "Alugar" ? PRICE_RANGES_ALUGAR : PRICE_RANGES_COMPRAR;
}

// Mantido por compatibilidade — equivale às faixas de venda.
export const PRICE_RANGES = PRICE_RANGES_COMPRAR;
