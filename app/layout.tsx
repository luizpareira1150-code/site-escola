import type { Metadata } from "next";
import { headers } from "next/headers";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { WhatsAppButton } from "../components/ui";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const imageUrl = `${protocol}://${host}/og.jpg`;
  const title = "Instituto de Formação Psicanalítica Cida Freitas";
  const description = "Formação Psicanalítica Online com teoria, análise pessoal e supervisão clínica.";

  return {
    metadataBase: new URL(`${protocol}://${host}`),
    title: { default: title, template: "%s | Instituto FPCF" },
    description,
    alternates: { canonical: "/" },
    icons: { icon: "/brand/instituto-fpcf-favicon.png", apple: "/brand/instituto-fpcf-favicon.png" },
    openGraph: { title, description, locale: "pt_BR", type: "website", images: [{ url: imageUrl, width: 1536, height: 1024, alt: "Acolher para escutar. Formar para transformar." }] },
    twitter: { card: "summary_large_image", title, description, images: [imageUrl] },
    robots: { index: true, follow: true },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
