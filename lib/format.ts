export function formatPrice(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
}

// Número placeholder — trocar pelo WhatsApp Business real do cliente.
const WHATSAPP_NUMBER = "5541999999999";

export function whatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function whatsappVisitLink(propertyTitle: string) {
  return whatsappLink(
    `Olá! Quero agendar uma visita para o imóvel "${propertyTitle}".`
  );
}
