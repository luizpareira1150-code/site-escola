import { ContextCTA, EditorialSection, PageHero } from "../../components/InternalPage";
import { contact, enrollmentForm } from "../../components/site-data";
import { createPageMetadata } from "../../components/page-metadata";

export const metadata = createPageMetadata(
  "Inscrição na Formação Psicanalítica | Instituto Cida Freitas",
  "Consulte mensalidade, matrícula, formas de pagamento, desconto informado e acesse o formulário oficial de inscrição na formação psicanalítica.",
  "/inscricao",
);

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Inscrição e Investimento" title="Inscrição na Formação Psicanalítica" intro="Curso de Psicanálise Clínica online, com 18 meses de duração, 500 horas mais atividades complementares, material didático e análise pessoal incluídos." />

      <EditorialSection eyebrow="Investimento" title="Condições informadas pelo Instituto" id="investimento">
        <div className="pricing-layout">
          <div className="price-main"><span>Mensalidade</span><p><small>R$</small> 129,90</p><strong>Matrícula isenta</strong></div>
          <div className="payment-notes">
            <h3>Formas de pagamento</h3>
            <ul><li>Pix</li><li>Boleto bancário</li><li>Cartão de crédito</li><li>Cartão de débito</li></ul>
            <p>Não há informação sobre quantidade de parcelas ou taxas adicionais no material fornecido.</p>
          </div>
        </div>
      </EditorialSection>

      <EditorialSection eyebrow="Condição especial" title="20% de desconto no pagamento total do curso" tone="sand" id="desconto">
        <p className="lead-text">A condição informada pelo Instituto se aplica ao pagamento total do curso. Para confirmar detalhes e a forma de pagamento, fale conosco.</p>
      </EditorialSection>

      <EditorialSection eyebrow="Formulário oficial" title="Faça sua inscrição" id="formulario">
        <div className="prose-flow">
          <p className="lead-text">A inscrição é realizada em um formulário externo do Instituto. O site não duplica nem armazena os dados preenchidos nesse formulário.</p>
          <a className="button button-primary" href={enrollmentForm} target="_blank" rel="noopener noreferrer">Fazer minha inscrição</a>
        </div>
      </EditorialSection>

      <ContextCTA eyebrow="Atendimento" title="Precisa esclarecer alguma informação antes de se inscrever?" href="/contato" label="Ver todos os contatos" secondary={{ href: contact.whatsapp, label: "Fale conosco", external: true }} />
    </>
  );
}
