import Link from "next/link";
import { contact } from "./site-data";

export function SectionHeading({ eyebrow, title, id }: { eyebrow: string; title: string; id?: string }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2 id={id}>{title}</h2></div>;
}

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link className="arrow-link" href={href}>{children}<span aria-hidden="true">↗</span></Link>;
}

export function CourseCard({ index, title, meta }: { index: string; title: string; meta: string }) {
  return (
    <article className="course-card">
      <span className="course-index">{index}</span>
      <div><h3>{title}</h3><p>{meta}</p></div>
      <Link href="/cursos" aria-label={`Conhecer ${title}`}>↗</Link>
    </article>
  );
}

export function WhatsAppButton() {
  return <a className="whatsapp-button" href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Fale conosco pelo WhatsApp"><span aria-hidden="true">WA</span><strong>Fale conosco</strong></a>;
}
