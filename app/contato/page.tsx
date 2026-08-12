import { ContextCTA, PageHero } from "../../components/InternalPage";
import { contact } from "../../components/site-data";
import { createPageMetadata } from "../../components/page-metadata";

export const metadata = createPageMetadata(
  "Contato | Instituto de Formação Psicanalítica Cida Freitas",
  "Fale conosco por WhatsApp, e-mail ou Instagram e esclareça dúvidas sobre os cursos e as inscrições do Instituto de Formação Psicanalítica Cida Freitas.",
  "/contato",
);

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Contato" title="Estamos prontos para escutar você." intro="Escolha um dos canais oficiais para esclarecer dúvidas sobre os cursos, a formação e o processo de inscrição." />
      <section className="contact-page section-shell" aria-labelledby="contact-title">
        <div className="contact-page-intro"><p className="eyebrow">Canais oficiais</p><h2 id="contact-title">Entre em contato</h2><p>O Instituto atua somente na modalidade online. O endereço indicado abaixo é administrativo e não representa um local de aulas.</p></div>
        <address className="contact-directory">
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer"><span>WhatsApp</span><strong>{contact.phoneLabel}</strong><small>Fale conosco ↗</small></a>
          <a href={`mailto:${contact.email}`}><span>E-mail</span><strong>{contact.email}</strong><small>Enviar mensagem ↗</small></a>
          <a href="https://www.instagram.com/ifpsicanaliticacidafreitas" target="_blank" rel="noopener noreferrer"><span>Instagram</span><strong>{contact.instagram}</strong><small>Abrir perfil ↗</small></a>
          <div><span>Endereço administrativo</span><strong>Avenida Meriti, 4185<br />Bloco 3, apto. 103<br />Rio de Janeiro/RJ</strong><small>As formações são online</small></div>
        </address>
      </section>
      <ContextCTA eyebrow="Formação principal" title="Conheça os detalhes do Curso de Psicanálise Clínica." href="/formacao-psicanalitica" label="Conhecer a formação" />
    </>
  );
}
