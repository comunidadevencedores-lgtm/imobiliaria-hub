export type Property = {
  slug: string;
  title: string;
  neighborhood: string;
  type: "Apartamento" | "Cobertura" | "Casa";
  operation: "Comprar" | "Alugar";
  price: number;
  area: number;
  bedrooms: number;
  suites: number;
  parking: number;
  description: string;
  highlights: string[];
  cover: string;
  gallery: string[];
  videoUrl?: string;
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

// Curated cover/gallery photo pool (placeholders — trocar pelas 20 fotos reais de cada imóvel)
const pool = [
  "photo-1613977257363-707ba9348227",
  "photo-1512917774080-9991f1c4c750",
  "photo-1600585154340-be6161a56a0c",
  "photo-1600607687939-ce8a6c25118c",
  "photo-1600596542815-ffad4c1539a9",
  "photo-1600210492486-724fe5c67fb0",
  "photo-1571055107559-3e67626fa8be",
  "photo-1560448204-e02f11c3d0e2",
  "photo-1502005229762-cf1b2da7c5d6",
  "photo-1600047509807-ba8f99d2cdde",
  "photo-1493809842364-78817add7ffb",
  "photo-1449844908441-8829872d2607",
];

const neighborhoods = [
  "Batel",
  "Bigorrilho",
  "Água Verde",
  "Centro Cívico",
  "Cabral",
  "Juvevê",
  "Alto da XV",
  "Champagnat",
];

function makeGallery(seed: number) {
  const start = seed % pool.length;
  const imgs = Array.from({ length: 20 }, (_, i) => img(pool[(start + i) % pool.length]));
  return imgs;
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const titles = [
  "Residencial Alto Batel",
  "Edifício Vert Bigorrilho",
  "Cobertura Duplex Água Verde",
  "Residencial Cívico Prime",
  "Edifício Cabral Signature",
  "Residencial Bosque Juvevê",
  "Alto da XV Panorâmico",
  "Champagnat Garden",
  "Edifício Sereno Batel",
  "Residencial Origem Bigorrilho",
  "Cobertura Skyline Água Verde",
  "Edifício Marco Cívico",
];

export const properties: Property[] = Array.from({ length: 24 }, (_, i) => {
  const neighborhood = neighborhoods[i % neighborhoods.length];
  const type: Property["type"] = i % 5 === 0 ? "Cobertura" : i % 3 === 0 ? "Casa" : "Apartamento";
  const operation: Property["operation"] = i % 6 === 0 ? "Alugar" : "Comprar";
  const bedrooms = 2 + (i % 3);
  const area = 90 + (i % 6) * 35;
  const salePrice = 420000 + (i % 10) * 95000 + (type === "Cobertura" ? 450000 : 0);
  // Aluguel mensal segue faixa própria (bem menor que o valor de venda) —
  // gira em torno de 0,4%-0,6% do valor do imóvel ao mês, padrão do mercado.
  const rentPrice = Math.round((salePrice * 0.005) / 100) * 100;
  const price = operation === "Alugar" ? rentPrice : salePrice;
  const title = `${titles[i % titles.length]}`;
  const slug = slugify(`${title}-${neighborhood}-${i}`);
  const gallery = makeGallery(i);
  return {
    slug,
    title,
    neighborhood,
    type,
    operation,
    price,
    area,
    bedrooms,
    suites: Math.max(1, bedrooms - 1),
    parking: 1 + (i % 3),
    description:
      "Empreendimento novo, entrega recente, com acabamento de alto padrão e localização privilegiada a poucos minutos do centro de Curitiba. Projeto pensado para quem busca conforto, segurança e uma vizinhança consolidada.",
    highlights: [
      "Lazer completo",
      "Portaria 24h",
      "Acabamento premium",
      "Vaga demarcada",
    ],
    cover: gallery[0],
    gallery,
    // Sem vídeo real ainda — a página mostra um placeholder até o link do YouTube do imóvel ser enviado.
    videoUrl: undefined,
  };
});

export function getPropertyBySlug(slug: string) {
  return properties.find((p) => p.slug === slug);
}

export const allNeighborhoods = neighborhoods;
