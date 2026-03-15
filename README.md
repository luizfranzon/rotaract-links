# Rotaract Links

Landing page de links oficiais do Rotaract Club de Indaiatuba, construída com Astro + Tailwind.

## Comandos

- `npm install`: instala dependências
- `npm run dev`: inicia ambiente local
- `npm run build`: gera build de produção
- `npm run preview`: pré-visualiza build localmente

## Configuração de SEO

Para SEO correto em produção, configure a variável de ambiente `SITE_URL` com o domínio final do projeto.

Exemplo:

```bash
SITE_URL=https://seu-dominio.com
```

Essa variável é usada para:

- Canonical URL
- Open Graph e Twitter image URL absoluta
- Geração de sitemap (`@astrojs/sitemap`)
- URL do sitemap em `robots.txt`

## Verificação recomendada antes de publicar

- Conferir se `SITE_URL` aponta para o domínio correto
- Validar `sitemap-index.xml` e `robots.txt` em produção
- Testar compartilhamento com Open Graph Debugger (Meta) e Card Validator (X)
- Enviar sitemap no Google Search Console
