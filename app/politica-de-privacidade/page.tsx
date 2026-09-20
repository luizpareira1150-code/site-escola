import { PageHero } from "../../components/InternalPage";
import { contact } from "../../components/site-data";
import { createPageMetadata } from "../../components/page-metadata";

export const metadata = createPageMetadata(
  "Política de Privacidade | Instituto FPCF",
  "Saiba como o site institucional do Instituto FPCF trata informações enviadas voluntariamente por canais externos de contato e inscrição.",
  "/politica-de-privacidade",
);

export default function Page() {
  return (
    <>
      <PageHero compact eyebrow="Política de Privacidade" title="Transparência no cuidado com seus dados." intro="Esta política explica como as informações enviadas voluntariamente pelos canais digitais do Instituto FPCF podem ser tratadas." />
      <article className="privacy-content section-shell">
        <section><h2>1. Sobre este site</h2><p>Este é o site institucional do Instituto de Formação Psicanalítica Cida Freitas, CNPJ 62.321.657/000108. Ele apresenta informações sobre o Instituto, seus cursos, metodologia, inscrição e canais de contato.</p></section>
        <section><h2>2. Dados fornecidos pelo visitante</h2><p>O site não possui formulário interno de inscrição. Ao escolher falar pelo WhatsApp, enviar um e-mail ou acessar o formulário externo de inscrição, o visitante utiliza serviços de terceiros e fornece somente as informações que decidir enviar nesses canais.</p></section>
        <section><h2>3. Finalidades de contato</h2><p>As informações recebidas podem ser utilizadas para responder dúvidas, fornecer informações sobre cursos, orientar o processo de inscrição e manter a comunicação solicitada pelo interessado.</p></section>
        <section><h2>4. Dados sensíveis</h2><p>Este site não solicita diagnósticos, medicamentos, histórico clínico, informações sobre saúde mental ou outros dados clínicos sensíveis. Não envie esse tipo de informação pelos canais institucionais.</p></section>
        <section><h2>5. Serviços externos</h2><p>Links para WhatsApp, Instagram, e-mail e Google Formulários direcionam o visitante a plataformas externas, que possuem suas próprias regras e políticas de privacidade. Na página inicial, as miniaturas dos depoimentos são carregadas do YouTube. O player de cada vídeo só é carregado após o visitante clicar para assistir; o link “Ver no YouTube” abre o vídeo na plataforma. Ao acessar esses recursos, dados de navegação podem ser tratados pelo YouTube conforme sua política de privacidade. O Instituto recomenda a leitura das políticas dessas plataformas antes de utilizá-las ou enviar dados.</p></section>
        <section><h2>6. Compartilhamento e proteção</h2><p>As informações devem ser acessadas somente por quem precisa atender à solicitação ou executar o processo relacionado ao curso, além dos provedores necessários ao funcionamento dos canais utilizados. O Instituto deve adotar cuidados compatíveis com a natureza das informações recebidas.</p></section>
        <section><h2>7. Solicitações do titular</h2><p>Para esclarecer dúvidas sobre privacidade ou solicitar informações sobre dados enviados diretamente ao Instituto, entre em contato pelo e-mail <a href={`mailto:${contact.email}`}>{contact.email}</a> ou pelo WhatsApp <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">{contact.phoneLabel}</a>.</p></section>
      </article>
    </>
  );
}
