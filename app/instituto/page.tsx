import { ContextCTA, EditorialSection, PageHero, TagList } from "../../components/InternalPage";
import { createPageMetadata } from "../../components/page-metadata";

export const metadata = createPageMetadata(
  "Sobre o Instituto | Instituto Cida Freitas",
  "Conheça a história, a missão, os valores, a orientação teórica e a responsável pelo Instituto de Formação Psicanalítica Cida Freitas.",
  "/instituto",
);

const values = [
  "Ética",
  "Responsabilidade clínica",
  "Singularidade",
  "Transmissão do saber",
  "Escuta",
  "Humanidade",
  "Não padronização do sujeito",
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="O Instituto"
        title="Uma formação que une teoria, experiência e responsabilidade clínica."
        intro="O Instituto de Formação Psicanalítica Cida Freitas compreende a formação psicanalítica como um percurso de estudo, transformação pessoal e compromisso com a escuta do outro."
      />

      <EditorialSection eyebrow="Nossa história" title="Onde a escuta transforma" id="historia">
        <div className="prose-flow">
          <p className="lead-text">
            Fundado em 2025, o Instituto de Formação Psicanalítica Cida Freitas nasceu do desejo de devolver à formação o tempo, a profundidade e a humanidade que a escuta psicanalítica exige.
          </p>
          <p>
            Em vez de reduzir o aprendizado à transmissão de técnicas, o Instituto propõe uma jornada sustentada pelo estudo teórico, pela análise pessoal e pela supervisão clínica. Esse tripé orienta a construção de uma base conceitual consistente e de uma prática atenta à singularidade de cada sujeito.
          </p>
          <p>
            Acolhimento e rigor caminham juntos. A formação considera tanto o preparo técnico quanto o processo humano de quem aprende, preservando a ética, o sigilo e a responsabilidade no manejo das dores que chegam à clínica.
          </p>
          <blockquote className="editorial-quote">“A essência da psicanálise entregue com mais alma e rigor.”</blockquote>
        </div>
      </EditorialSection>

      <EditorialSection eyebrow="Missão" title="Técnica e sensibilidade no mesmo percurso" tone="sand" id="missao">
        <div className="prose-flow">
          <p className="lead-text">
            Guiar cada aluno no domínio consistente do tripé psicanalítico — teoria rigorosa, análise pessoal e supervisão clínica —, para que a técnica caminhe ao lado da sensibilidade.
          </p>
          <p>
            O Instituto busca preparar analistas seguros, éticos e profundamente humanos, capazes de acolher a dor sem julgamentos e de compreender a clínica como espaço de escuta e cuidado.
          </p>
        </div>
      </EditorialSection>

      <EditorialSection eyebrow="O que nos orienta" title="Valores que partem do sujeito" id="valores">
        <p className="lead-text">
          O trabalho do Instituto é orientado pela ética do inconsciente, pela transmissão do saber e pela responsabilidade clínica. Não existe uma resposta padronizada para aquilo que é singular.
        </p>
        <TagList items={values} />
      </EditorialSection>

      <EditorialSection eyebrow="Orientação teórica" title="Predominância freudiana, em diálogo" tone="navy" id="orientacao">
        <div className="prose-flow">
          <p className="lead-text">
            A formação parte principalmente da obra de Sigmund Freud e promove o diálogo com outros autores presentes no percurso do Instituto.
          </p>
          <p>
            As perspectivas lacaniana, kleiniana e winnicottiana ampliam o estudo e permitem acompanhar diferentes desenvolvimentos da teoria psicanalítica, sem perder a base freudiana que predomina na formação.
          </p>
        </div>
      </EditorialSection>

      <EditorialSection eyebrow="Fundadora e Diretora" title="Maria Aparecida de Freitas da Silva" id="fundadora">
        <div className="founder-layout">
          <div className="founder-monogram" aria-hidden="true"><span>MA</span><small>Fundadora<br />e Diretora</small></div>
          <div className="prose-flow">
            <p className="lead-text">
              Maria Aparecida de Freitas da Silva é a fundadora e diretora do Instituto de Formação Psicanalítica Cida Freitas.
            </p>
            <p>
              Sua formação informada reúne graduação em Letras, pós-graduação em Gestão Integrada Educacional, formação como psicanalista clínica e terapeuta de florais, além de mestrado e doutorado em Psicanálise. Também atua como escritora e é a professora informada para os cursos do Instituto.
            </p>
          </div>
        </div>
      </EditorialSection>

      <ContextCTA eyebrow="Continue conhecendo" title="Veja como o tripé psicanalítico orienta cada etapa da formação." href="/metodologia" label="Conhecer a metodologia" />
    </>
  );
}
