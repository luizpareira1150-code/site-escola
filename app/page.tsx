import Link from "next/link";
import Image from "next/image";
import { ArrowLink, CourseCard, SectionHeading } from "../components/ui";
import { EditorialImage } from "../components/InternalPage";

const pillars = [
  {
    number: "I",
    title: "Estudo teórico",
    text: "Uma base conceitual construída pelo estudo dos autores clássicos e pelo diálogo com perspectivas contemporâneas.",
  },
  {
    number: "II",
    title: "Análise pessoal",
    text: "A experiência do próprio processo analítico como parte indispensável da formação e da escuta clínica.",
  },
  {
    number: "III",
    title: "Supervisão clínica",
    text: "Orientação para o manejo dos atendimentos, a abordagem dos casos e a aplicação da anamnese.",
  },
];

const highlights = [
  "Acesso vitalício às videoaulas",
  "E-books e cinemateca",
  "Encontro ao vivo mensal",
  "Orientação pedagógica individual",
  "Biblioteca e materiais digitais",
  "Comunidade de alunos",
];

const otherCourses = [
  { title: "Curso de Interpretação dos Sonhos", meta: "Teoria e técnica de análises · 30 horas", index: "01" },
  { title: "Curso de Primeiros Socorros Psicológicos", meta: "Teoria e estratégias · 30 horas", index: "02" },
  { title: "Curso de Florais de Back", meta: "Teoria e fórmulas · 30 horas", index: "03" },
];

export default function Home() {
  return (
    <>
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-listening-line" aria-hidden="true"><span /></div>
        <div className="hero-copy">
          <p className="eyebrow">Formação Psicanalítica Online</p>
          <h1 id="hero-title"><span>Formar um psicanalista exige mais do que transmitir teoria.</span></h1>
          <p className="hero-lede">
            Uma formação estruturada que integra estudo teórico, análise pessoal e supervisão
            clínica — com rigor, acolhimento e responsabilidade.
          </p>
          <div className="button-row">
            <Link className="button button-primary" href="/formacao-psicanalitica">
              Conhecer a Formação Psicanalítica
            </Link>
            <Link className="button button-text" href="/instituto">
              Conhecer o Instituto <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <p className="hero-facts">Formação online <span /> 18 meses <span /> 500h + atividades complementares</p>
        </div>

        <div className="hero-art" aria-label="Acolher para escutar. Formar para transformar.">
          <div className="hero-mark">
            <Image className="hero-seal" src="/brand/instituto-fpcf-emblema.webp" alt="" width="64" height="64" loading="lazy" unoptimized />
            <span className="hero-mark-number">2025</span>
            <span className="hero-mark-line" />
            <span>Rio de Janeiro</span>
          </div>
          <blockquote>
            <span className="quote-open" aria-hidden="true">“</span>
            Acolher para escutar.<br />Formar para transformar.
          </blockquote>
          <p className="margin-note">Instituto FPCF <span>formação • escuta • transformação</span></p>
        </div>
        <p className="hero-side-note" aria-hidden="true">teoria <span /> análise <span /> supervisão</p>
      </section>

      <section className="intro-section section-shell section-space" aria-labelledby="intro-title">
        <div className="intro-index" aria-hidden="true">01</div>
        <div>
          <SectionHeading eyebrow="O Instituto" title="Onde a escuta encontra formação." id="intro-title" />
          <div className="intro-editorial">
            <EditorialImage
              src="/editorial/estudo-anotacoes.webp"
              alt="Pessoa estudando em uma mesa com livros abertos e anotações"
              caption="Ler, anotar e retornar aos conceitos."
              credit="Jacob Bentzinger"
              creditHref="https://unsplash.com/photos/QiLPQeQSXD0"
              className="intro-photo"
              portrait
            />
            <div className="intro-copy">
              <p>
                O Instituto de Formação Psicanalítica Cida Freitas nasceu para preservar a
                profundidade da psicanálise e aproximá-la de quem deseja construir uma prática
                responsável, humana e consistente.
              </p>
              <p>
                Aqui, a formação é compreendida como um percurso: exige estudo, experiência pessoal,
                supervisão e abertura para escutar a singularidade de cada sujeito.
              </p>
              <ArrowLink href="/instituto">Conheça nossa história</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="pillars-section section-space" aria-labelledby="pillars-title">
        <div className="section-shell">
          <SectionHeading eyebrow="Nossa base" title="O tripé da formação psicanalítica" id="pillars-title" />
          <div className="pillars-layout">
            <p className="pillars-intro">
              Teoria, percurso pessoal e prática supervisionada não são etapas isoladas. São três
              movimentos que se sustentam mutuamente.
            </p>
            <div className="pillar-list">
              {pillars.map((pillar) => (
                <article className="pillar" key={pillar.title}>
                  <span className="pillar-number">{pillar.number}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
          <ArrowLink href="/metodologia">Entenda nossa metodologia</ArrowLink>
        </div>
      </section>

      <section className="formation-section section-shell section-space" aria-labelledby="formation-title">
        <div className="formation-title">
          <p className="eyebrow">Formação principal</p>
          <h2 id="formation-title">Curso de<br /><em>Psicanálise Clínica</em></h2>
        </div>
        <div className="formation-details">
          <p className="formation-lede">
            Uma jornada online de formação e capacitação técnica, apoiada no tripé tradicional
            da psicanálise.
          </p>
          <dl className="fact-grid">
            <div><dt>Duração</dt><dd>18 meses</dd></div>
            <div><dt>Carga horária</dt><dd>500h + complementares</dd></div>
            <div><dt>Modalidade</dt><dd>Online</dd></div>
            <div><dt>Frequência</dt><dd>5 aulas mensais</dd></div>
          </dl>
          <p className="formation-note">
            Videoaulas gravadas, encontro ao vivo mensal, análise pessoal, supervisão, estágio e
            Trabalho de Conclusão de Curso.
          </p>
          <Link className="button button-primary" href="/formacao-psicanalitica">Ver formação completa</Link>
        </div>
      </section>

      <section className="benefits-section section-space" aria-labelledby="benefits-title">
        <div className="section-shell benefits-layout">
          <div>
            <SectionHeading eyebrow="Ao longo do percurso" title="Recursos para estudar com autonomia e acompanhamento." id="benefits-title" />
            <p className="benefits-copy">Conteúdos acessíveis também pelo smartphone e suporte para quem tem menos familiaridade com ferramentas tecnológicas.</p>
          </div>
          <ul className="benefits-list">
            {highlights.map((highlight, index) => (
              <li key={highlight}><span>{String(index + 1).padStart(2, "0")}</span>{highlight}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="courses-section section-shell section-space" aria-labelledby="courses-title">
        <SectionHeading eyebrow="Outros percursos" title="Cursos para ampliar repertórios e possibilidades de cuidado." id="courses-title" />
        <div className="course-list">
          {otherCourses.map((course) => <CourseCard key={course.title} {...course} />)}
        </div>
        <ArrowLink href="/cursos">Conhecer outros cursos</ArrowLink>
      </section>

      <section className="final-cta section-shell" aria-labelledby="cta-title">
        <p className="eyebrow">Próximo passo</p>
        <h2 id="cta-title">Conheça a formação e veja se ela faz sentido para o seu momento.</h2>
        <div className="button-row">
          <Link className="button button-light" href="/inscricao">Quero me inscrever</Link>
          <a className="button button-outline-light" href="https://wa.me/5521988479250?text=Ol%C3%A1%21%20Encontrei%20o%20site%20do%20Instituto%20de%20Forma%C3%A7%C3%A3o%20Psicanal%C3%ADtica%20Cida%20Freitas%20e%20gostaria%20de%20receber%20informa%C3%A7%C3%B5es%20sobre%20o%20Curso%20de%20Psican%C3%A1lise%20Cl%C3%ADnica." target="_blank" rel="noopener noreferrer">Fale conosco</a>
        </div>
      </section>
    </>
  );
}
