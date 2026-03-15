import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site, url }) => {
  const origin = site?.origin ?? url.origin;

  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${origin}/sitemap-index.xml`,
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
