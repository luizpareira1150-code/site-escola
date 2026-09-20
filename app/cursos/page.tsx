import { ContextCTA, PageHero } from "../../components/InternalPage";
import { contact } from "../../components/site-data";
import { createPageMetadata } from "../../components/page-metadata";

export const metadata = createPageMetadata(
  "Cursos | Instituto de Formação Psicanalítica Cida Freitas",
  "Conheça os cursos online gravados de Interpretação dos Sonhos, Primeiros Socorros Psicológicos e Florais de Bach, com 30 horas cada.",
  "/cursos",
);

type Course = {
  index: string;
  title: string;
  description: string;
  requirement: string;
  price?: string;
  details?: { label: string; text: string }[];
};

const courses: Course[] = [
  {
    index: "01",
    title: "Curso de Interpretação dos Sonhos",
    description: "Método psicanalítico: teoria e técnica de análises.",
    requirement: "Ensino Médio completo",
    price: "R$ 247,90",
    details: [
      {
        label: "O que você estuda",
        text: "Introdução à interpretação dos sonhos, abordagem psicanalítica dos sonhos e técnicas de interpretação.",
      },
      {
        label: "Inclui",
        text: "Material didático em PDF, certificado e acesso vitalício aos conteúdos.",
      },
      {
        label: "Para quem",
        text: "Psicanalistas, psicólogos e aspirantes.",
      },
    ],
  },
  {
    index: "02",
    title: "Curso de Primeiros Socorros Psicológicos",
    description: "Teoria e estratégias.",
    requirement: "O requisito de Ensino Médio completo informado para os demais cursos não se aplica a este curso",
    price: "R$ 99,90",
    details: [
      {
        label: "Contextos abordados",
        text: "Exemplos de aplicação na escola, empresa, igreja e em casa.",
      },
      {
        label: "Inclui",
        text: "Material didático e certificado.",
      },
    ],
  },
  {
    index: "03",
    title: "Curso de Florais de Bach",
    description: "Teoria e fórmulas.",
    requirement: "Ensino Médio completo",
    price: "R$ 199,90",
    details: [
      {
        label: "O que você estuda",
        text: "A técnica original de Dr. Edward Bach e as 38 essências florais.",
      },
      {
        label: "Inclui",
        text: "Certificado incluso.",
      },
      {
        label: "Acesso e investimento",
        text: "Acesso imediato aos conteúdos e pagamento em valor único.",
      },
    ],
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
              <div className="course-detail-heading">
                <h2>{course.title}</h2>
                {course.price && (
                  <div className="course-detail-price">
                    <span>Investimento</span>
                    <strong>{course.price}</strong>
                  </div>
                )}
              </div>
              <p className="course-detail-copy">{course.description}</p>
              {course.details && (
                <div className="course-detail-notes">
                  {course.details.map((detail) => (
                    <div key={detail.label}>
                      <h3>{detail.label}</h3>
                      <p>{detail.text}</p>
                    </div>
                  ))}
                </div>
              )}
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
