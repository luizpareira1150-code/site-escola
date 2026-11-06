import Link from "next/link";
import Image from "next/image";
import { contact, navigation } from "./site-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-signature section-shell" aria-hidden="true"><span>escuta</span><i /></div>
      <div className="section-shell footer-grid">
        <div className="footer-brand">
          <Image src="/brand/instituto-fpcf-logo-oficial.webp" alt="Logomarca do Instituto de Formação Psicanalítica Cida Freitas" width="220" height="220" loading="lazy" unoptimized />
          <div>
            <p>Acolher para escutar.<br />Formar para transformar.</p>
            <span>Formação Psicanalítica Online</span>
          </div>
        </div>
        <div className="footer-column">
          <h2>Navegação</h2>
          {navigation.slice(1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/inscricao">Inscrição e investimento</Link>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- Native fragment navigation avoids duplicate hashes in Next 16.3. */}
          <a href="/#atendimento-online">Atendimento online</a>
        </div>
        <div className="footer-column">
          <h2>Contato</h2>
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp {contact.phoneLabel}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href="https://www.instagram.com/ifpsicanaliticacidafreitas" target="_blank" rel="noopener noreferrer">{contact.instagram}</a>
          <span>Rio de Janeiro/RJ</span>
        </div>
      </div>
      <div className="section-shell footer-bottom">
        <p>CNPJ 62.321.657/000108</p>
        <p>© {new Date().getFullYear()} Instituto de Formação Psicanalítica Cida Freitas. Todos os direitos reservados.</p>
        <Link href="/politica-de-privacidade">Política de Privacidade</Link>
      </div>
    </footer>
  );
}
