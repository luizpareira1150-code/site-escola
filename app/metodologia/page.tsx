import { ContextCTA, EditorialImage, EditorialSection, PageHero, TagList } from "../../components/InternalPage";
import { createPageMetadata } from "../../components/page-metadata";

export const metadata = createPageMetadata(
  "Formação Psicanalítica: Teoria, Análise e Supervisão | Instituto Cida Freitas",
  "Entenda como estudo teórico, análise pessoal e supervisão clínica se articulam na metodologia da formação psicanalítica do Instituto.",
  "/metodologia",
);

const methodology = [
  "Aulas teóricas",
  "Leitura de textos",
  "Seminários",
  "Estudos de caso",
  "Grupos de estudo",
  "Atividades práticas",
  "Supervisão",
  "Análise pessoal",
  "Avaliações",
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Metodologia" title="O Tripé da Formação Psicanalítica" intro="Teoria para compreender. Análise para experimentar. Supervisão para sustentar a prática." />

      <section className="tripod-deep section-shell" aria-labelledby="tripe-title">
        <h2 className="visually-hidden" id="tripe-title">Os três pilares da formação</h2>
        <div className="tripod-visual-grid">
          <EditorialImage
            src="/editorial/leitura-reflexao.webp"
            alt="Livro aberto junto a uma janela em um ambiente de leitura silencioso"
            caption="Leitura e elaboração fazem parte do percurso."
            credit="Jessica Fadel"
            creditHref="https://unsplash.com/photos/ANexOmTOzmY"
            className="tripod-photo"
            portrait
          />
          <div className="tripod-list-deep">
            <article><span>01</span><div><h3>Estudo Teórico</h3><p>Constrói a base conceitual para compreender a psicanálise, seus fundamentos e seus desenvolvimentos. O percurso parte dos clássicos e se abre ao diálogo com autores contemporâneos presentes na formação.</p></div></article>
            <article><span>02</span><div><h3>Análise Pessoal</h3><p>Permite que o aluno experimente o próprio processo analítico e entre em contato com a dimensão viva do inconsciente. É obrigatória e está incluída no valor das mensalidades.</p></div></article>
            <article><span>03</span><div><h3>Supervisão Clínica</h3><p>Oferece orientação para o manejo com pacientes ou clientes, para a escolha da abordagem e para a aplicação da anamnese. É um espaço de acompanhamento da prática, sem prometer resultados automáticos.</p></div></article>
          </div>
        </div>
      </section>

      <EditorialSection eyebrow="O percurso de aprendizagem" title="Metodologia articulada, não fragmentada" tone="sand" id="metodologia-elementos">
        <p className="lead-text">Os elementos da formação se complementam para aproximar teoria, reflexão e prática ao longo do curso.</p>
        <TagList items={methodology} />
      </EditorialSection>

      <EditorialSection eyebrow="Orientação teórica" title="Uma base freudiana aberta ao diálogo" id="metodologia-orientacao">
        <div className="prose-flow">
          <p className="lead-text">A linha predominante é freudiana. Ao longo da formação, essa base dialoga com contribuições de Lacan, Melanie Klein, Donald Winnicott, Jung e Anna Freud, autores citados no material curricular do Instituto.</p>
          <p>O objetivo é favorecer uma leitura ampla dos conceitos estudados, preservando a consistência do percurso e a centralidade da escuta psicanalítica.</p>
        </div>
      </EditorialSection>

      <ContextCTA eyebrow="Aprofunde o percurso" title="Conheça a estrutura completa do Curso de Psicanálise Clínica." href="/formacao-psicanalitica" label="Conhecer a formação" />
    </>
  );
}
