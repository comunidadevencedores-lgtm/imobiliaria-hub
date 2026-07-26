# Imobiliária Curitiba — site institucional + catálogo

Site em Next.js 14 (App Router) para imóveis novos e de alto padrão nas
regiões nobres de Curitiba (Batel, Bigorrilho, Água Verde, Centro Cívico,
Cabral, Juvevê, Alto da XV, Champagnat).

## Rodando localmente

```bash
npm install
npm run dev
```

## Estrutura

- `app/page.tsx` — Home (hero enxuto + busca + seleção da semana)
- `app/imoveis/page.tsx` — Catálogo com filtros (região, tipo, operação, preço)
- `app/imoveis/[slug]/page.tsx` — Página do imóvel (galeria, vídeo, WhatsApp)
- `app/sobre/page.tsx` — Institucional
- `app/contato/page.tsx` — Contato (100% via WhatsApp, sem formulário)
- `lib/properties.ts` — Dados dos imóveis (mock com 24 imóveis — trocar pela
  fonte real quando o Supabase entrar)
- `lib/format.ts` — Formatação de preço e link de WhatsApp

## O que falta plugar antes do lançamento

1. **Fotos e vídeos reais** — trocar as imagens placeholder (Unsplash) pelas
   20 fotos + vídeo de cada imóvel, já em `.webp`, e o vídeo no YouTube
   (não-listado).
2. **Número de WhatsApp real** em `lib/format.ts` (`WHATSAPP_NUMBER`).
3. **Supabase** — criar projeto, tabelas `properties` e `leads`, e trocar o
   mock de `lib/properties.ts` por fetch real. Painel admin (upload de fotos,
   vídeo e descrição) entra nessa etapa.
4. **Domínio** — assim que for registrado, atualizar `metadataBase` em
   `app/layout.tsx` e ativar os templates de e-mail transacional (Resend).
5. **GA4 + GTM + Microsoft Clarity** — os IDs ficam em `.env` (ver
   `.env.example`); o Clarity entra como tag dentro do próprio GTM, não
   precisa de código adicional no site.
6. **CRECI** — atualizar no rodapé (`components/Footer.tsx`).

## Deploy

Projeto pronto para import direto na Vercel (sem configuração extra).
