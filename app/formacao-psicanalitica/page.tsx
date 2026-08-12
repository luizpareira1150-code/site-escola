import Link from "next/link";
import { Accordion, ContextCTA, EditorialImage, EditorialSection, PageHero, TagList } from "../../components/InternalPage";
import { createPageMetadata } from "../../components/page-metadata";

export const metadata = createPageMetadata(
  "Curso de Formação Psicanalítica Online | Instituto Cida Freitas",
  "Conheça a formação online em Psicanálise Clínica: 18 meses, 500 horas, análise pessoal, supervisão, estágio e Trabalho de Conclusão de Curso.",
  "/formacao-psicanalitica",
);

const audiences = [
  "Pessoas interessadas em conhecer a Psicanálise",
  "Psicólogos",
  "Profissionais da saúde",
  "Profissionais da educação",
  "Estudantes",
  "Pessoas que desejam iniciar uma formação como psicanalista",
  "Profissionais que já atuam com atendimento",
  "Outros interessados na formação",
];

const modules = [
  { title: "Introdução à Psicanálise", lessons: ["Introdução à Psicanálise", "Psicanálise x Psicologia x Psiquiatria", "Id, Ego e Superego", "O Inconsciente"] },
  { title: "Precursores e pioneiros na Psicanálise", lessons: ["História da Psicanálise", "História da Psicanálise no Brasil", "Principais teóricos", "Teóricos brasileiros da atualidade"] },
  { title: "Distúrbios e neuroses", lessons: ["Distúrbios", "Neuroses", "Tipos de neuroses", "Tipos de psicoses", "Perversão"] },
  { title: "Psicoterapia", lessons: ["Psicoterapia", "Tipos de psicoterapia I", "Tipos de psicoterapia II", "Tipos de psicoterapia III"] },
  { title: "Freud e seus discípulos", lessons: ["Freud", "Lacan", "Jung", "Anna Freud"] },
  { title: "Temperamentos", lessons: ["Melancólico", "Sanguíneo", "Colérico", "Fleumático"] },
  { title: "Psicanálise e Aconselhamento", lessons: ["Aconselhamento e seus impactos", "A importância da transferência", "O papel do inconsciente", "Psicanálise x Aconselhamento"] },
  { title: "Psicossomática x Doenças Psicossomáticas", lessons: ["Psicossomática", "Doenças psicossomáticas", "Manifestações psicossomáticas", "Tratamento"] },
  { title: "Psicanálise x Ciência", lessons: ["Psicanálise e Filosofia", "Psicanálise e Educação", "Psicanálise e Arte", "Psicanálise e Fé"] },
  { title: "Relacionamentos", lessons: ["Relações interpessoais", "Recalque", "Autossabotagem", "Círculo vicioso / repetição"] },
  { title: "Psicanálise Infantil", lessons: ["Princípios básicos", "Metodologia kleiniana", "Metodologia de Anna Freud", "Metodologia winnicottiana"] },
  { title: "Estudos de caso", lessons: ["O que é estudo de caso", "O caso Dora", "O caso Homem dos Ratos", "O caso Homem dos Lobos"] },
  { title: "Resistência, Narcisismo, Psicopatologias e Psicofarmacologia", lessons: ["O que é resistência", "O que é narcisismo", "Psicopatologia", "Psicofarmacologia"] },
  { title: "Técnicas e abordagens", lessons: ["Terapia Cognitivo-Comportamental (TCC)", "TCC para ansiedade", "TCC para ansiedade e depressão", "Abordagens psicanalíticas"] },
  { title: "Noções básicas de Marketing Digital", lessons: ["Redes sociais"] },
  { title: "Análises", lessons: ["Análises"] },
  { title: "Estágio", lessons: ["Estágio"] },
  { title: "TCC — Trabalho de Conclusão de Curso", lessons: ["Trabalho de Conclusão de Curso"] },
];

const resources = ["Quiz", "Cinemateca", "Grupo de WhatsApp", "E-books", "Documentários", "Biblioteca e materiais digitais", "Comunidade de alunos"];

const faq = [
  { title: "O curso é online?", answer: "Sim. A formação em Psicanálise Clínica é oferecida somente online." },
  { title: "Quanto tempo dura?", answer: "A duração informada é de 18 meses." },
  { title: "Qual é a carga horária?", answer: "São 500 horas, acrescidas de horas complementares de análise pessoal e supervisão." },
  { title: "As aulas ficam gravadas?", answer: "Sim. O curso possui videoaulas gravadas e o acesso às videoaulas é vitalício." },
  { title: "Existem aulas ao vivo?", answer: "Sim. O material informa uma aula ou encontro ao vivo por mês no Curso de Psicanálise Clínica." },
  { title: "A análise pessoal é obrigatória?", answer: "Sim. A análise pessoal é um requisito obrigatório da formação." },
  { title: "A análise pessoal está incluída?", answer: "Sim. Segundo as informações fornecidas pelo Instituto, ela está incluída no valor das mensalidades." },
  { title: "Existe supervisão?", answer: "Sim. A supervisão oferece orientações para o manejo dos atendimentos, a abordagem e a aplicação da anamnese." },
  { title: "O curso oferece certificado?", answer: "Sim. O certificado é emitido mediante o cumprimento dos requisitos de conclusão informados pelo Instituto." },
  { title: "É curso livre?", answer: "Sim. A formação é caracterizada como curso livre; não é graduação, curso superior ou diploma universitário." },
  { title: "Preciso ter graduação?", answer: "Não. O requisito informado para o Curso de Psicanálise Clínica é ter o Ensino Médio completo." },
  { title: "Existe processo de admissão?", answer: "Não. O Instituto informa que não é necessário processo de admissão." },
  { title: "Posso estudar pelo celular?", answer: "Sim. O conteúdo pode ser acessado pelo smartphone, conforme informado pelo Instituto." },
  { title: "Como funciona a inscrição?", answer: "A inscrição é realizada pelo formulário oficial externo do Instituto. O link está disponível na página de Inscrição e Investimento." },
  { title: "Qual é o investimento?", answer: "A matrícula é isenta e a mensalidade informada é de R$ 129,90. O Instituto aceita Pix, boleto bancário, cartão de crédito e cartão de débito." },
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Curso de Formação Psicanalítica" title="Curso de Psicanálise Clínica" intro="Uma formação online que integra estudo teórico, análise pessoal e supervisão clínica em um percurso estruturado de 18 meses.">
        <div className="page-hero-action"><Link className="button button-primary" href="/inscricao">Quero me inscrever</Link></div>
      </PageHero>

      <section className="quick-facts section-shell" aria-label="Informações principais do curso">
        <div><span>01</span><strong>18 meses</strong><small>Duração</small></div>
        <div><span>02</span><strong>500h + complementares</strong><small>Carga horária</small></div>
        <div><span>03</span><strong>Online</strong><small>Modalidade</small></div>
        <div><span>04</span><strong>Material incluído</strong><small>Conteúdo didático</small></div>
        <div><span>05</span><strong>Certificado</strong><small>Mediante requisitos</small></div>
      </section>

      <EditorialSection eyebrow="Para quem é" title="Uma formação aberta a diferentes percursos" id="publico">
        <p className="lead-text">O curso é indicado aos públicos informados pelo Instituto que desejam conhecer ou aprofundar o estudo da Psicanálise.</p>
        <TagList items={audiences} />
        <p className="fine-print">A participação no curso não representa, por si só, autorização automática para atividades reguladas por outras profissões.</p>
      </EditorialSection>

      <EditorialSection eyebrow="Antes de começar" title="Pré-requisitos e ingresso" tone="sand" id="pre-requisitos">
        <div className="two-column-notes">
          <article><span>Escolaridade</span><h3>Ensino Médio completo</h3><p>Este é o requisito informado para participar do Curso de Psicanálise Clínica.</p></article>
          <article><span>Admissão</span><h3>Sem processo de admissão</h3><p>O Instituto informa que não é necessário realizar entrevista ou processo de admissão.</p></article>
        </div>
      </EditorialSection>

      <EditorialSection eyebrow="Dinâmica do curso" title="Como funciona" id="como-funciona">
        <div className="prose-flow">
          <p className="lead-text">O percurso combina videoaulas gravadas com uma atividade ao vivo mensal e uma frequência informada de cinco aulas mensais.</p>
          <p>O aluno pode estudar pelo smartphone e conta com materiais didáticos incluídos, e-books, biblioteca digital, cinemateca e comunidade de alunos. A orientação pedagógica individual integra os recursos informados pelo Instituto.</p>
          <p>O acesso às videoaulas é vitalício. A formação também inclui análise pessoal e supervisão clínica, que se articulam ao estudo teórico ao longo do curso.</p>
          <EditorialImage
            src="/editorial/estudo-online.webp"
            alt="Mesa de estudos com computador, livros e caderno de anotações"
            caption="Aulas gravadas e materiais digitais permitem organizar o estudo de diferentes lugares."
            credit="Yen Vu"
            creditHref="https://unsplash.com/photos/TdgfSyDoWBE"
            className="dynamics-photo"
          />
        </div>
      </EditorialSection>

      <section className="curriculum-section inner-section inner-section-navy" aria-labelledby="curriculum-title">
        <div className="section-shell">
          <div className="curriculum-heading"><p className="eyebrow">O que você vai estudar</p><h2 id="curriculum-title">Uma formação organizada em 18 módulos.</h2><p>Abra cada módulo para conhecer as disciplinas. O conteúdo permanece recolhido para facilitar a leitura e a navegação.</p></div>
          <Accordion
            className="accordion-dark"
            items={modules.map((module, index) => ({
              title: module.title,
              kicker: `Módulo ${String(index + 1).padStart(2, "0")}`,
              content: <ol className="lesson-list">{module.lessons.map((lesson) => <li key={lesson}>{lesson}</li>)}</ol>,
            }))}
          />
        </div>
      </section>

      <EditorialSection eyebrow="Além das aulas" title="Recursos complementares" tone="sand" id="recursos">
        <p className="lead-text">Materiais e espaços de apoio informados pelo Instituto para acompanhar o percurso de estudo.</p>
        <TagList items={resources} />
      </EditorialSection>

      <EditorialSection eyebrow="Caminho da formação" title="Cinco movimentos que estruturam o percurso" id="caminho">
        <ol className="formation-path">
          <li><span>01</span><strong>Estudo teórico</strong></li>
          <li><span>02</span><strong>Análise pessoal</strong></li>
          <li><span>03</span><strong>Supervisão clínica</strong></li>
          <li><span>04</span><strong>Estágio</strong></li>
          <li><span>05</span><strong>Trabalho de Conclusão de Curso</strong></li>
        </ol>
        <p className="fine-print">O cumprimento dessas etapas integra a formação, mas não constitui promessa de resultado profissional.</p>
      </EditorialSection>

      <EditorialSection eyebrow="Certificação" title="Informação clara, sem equivalências indevidas" tone="navy" id="certificacao">
        <div className="prose-flow">
          <p className="lead-text">O curso emite certificado mediante a conclusão do estudo teórico, da análise pessoal, do estágio e do TCC — Trabalho de Conclusão de Curso.</p>
          <p>A Formação em Psicanálise Clínica é um curso livre. Não se apresenta como graduação, curso superior ou diploma universitário.</p>
        </div>
      </EditorialSection>

      <section className="faq-section section-shell" aria-labelledby="faq-title">
        <div className="faq-heading"><p className="eyebrow">Perguntas frequentes</p><h2 id="faq-title">Antes de escolher sua formação</h2></div>
        <Accordion items={faq.map((item) => ({ title: item.title, content: <p>{item.answer}</p> }))} />
      </section>

      <ContextCTA eyebrow="Inscrição e investimento" title="Veja as condições da formação e acesse o formulário oficial." href="/inscricao" label="Ver investimento" />
    </>
  );
}
