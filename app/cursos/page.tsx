import { ContextCTA, PageHero } from "../../components/InternalPage";
import { contact } from "../../components/site-data";
import { createPageMetadata } from "../../components/page-metadata";

export const metadata = createPageMetadata(
  "Cursos | Instituto de Formação Psicanalítica Cida Freitas",
  "Conheça os cursos online gravados de Interpretação dos Sonhos, Primeiros Socorros Psicológicos e Florais de Back, com 30 horas cada.",
  "/cursos",
);

const courses = [
  {
    index: "01",
    title: "Curso de Interpretação dos Sonhos",
    description: "Método psicanalítico: teoria e técnica de análises.",
    requirement: "Ensino Médio completo",
  },
  {
    index: "02",
    title: "Curso de Primeiros Socorros Psicológicos",
    description: "Teoria e estratégias.",
    requirement: "O requisito de Ensino Médio completo informado para os demais cursos não se aplica a este curso",
  },
  {
    index: "03",
    title: "Curso de Florais de Back",
    description: "Teoria e fórmulas.",
    requirement: "Ensino Médio completo",
  },
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Outros Cursos" title="Percursos de estudo para ampliar repertórios." intro="Três cursos online gravados, com propostas objetivas e carga horária de 30 horas cada." />
      <section className="other-courses section-shell" aria-label="Lista de outros cursos">
        {courses.map((course) => (
          <article className="course-detail" key={course.title}>
            <span className="course-detail-index">{course.index}</span>
            <div>
              <p className="eyebrow">Curso online gravado</p>
              <h2>{course.title}</h2>
              <p className="course-detail-copy">{course.description}</p>
              <dl>
                <div><dt>Carga horária</dt><dd>30 horas</dd></div>
                <div><dt>Modalidade</dt><dd>Aulas gravadas</dd></div>
                <div><dt>Requisito</dt><dd>{course.requirement}</dd></div>
              </dl>
            </div>
          </article>
        ))}
      </section>
      <ContextCTA eyebrow="Tire suas dúvidas" title="Fale conosco para receber informações sobre os outros cursos." href="/contato" label="Ver canais de contato" secondary={{ href: contact.whatsapp, label: "Fale conosco", external: true }} />
    </>
  );
}
