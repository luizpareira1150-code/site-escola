export function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
