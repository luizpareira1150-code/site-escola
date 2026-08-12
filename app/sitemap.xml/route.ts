const routes = [
  "",
  "/instituto",
  "/formacao-psicanalitica",
  "/metodologia",
  "/cursos",
  "/inscricao",
  "/contato",
  "/politica-de-privacidade",
];

export function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const urls = routes.map((route) => `  <url><loc>${origin}${route || "/"}</loc></url>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
