import Link from "next/link";
import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <section className={`page-hero section-shell${compact ? " page-hero-compact" : ""}`}>
      <nav className="breadcrumb" aria-label="Navegação estrutural">
        <Link href="/">Início</Link>
        <span aria-hidden="true">/</span>
        <span>{eyebrow}</span>
      </nav>
      <div className="page-hero-composition">
        <div className="page-hero-title">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <div className="page-hero-aside">
          <span className="listening-line" aria-hidden="true" />
          <p className="page-intro">{intro}</p>
          {children}
        </div>
      </div>
    </section>
  );
}

export function EditorialSection({
  eyebrow,
  title,
  children,
  tone = "paper",
  id,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  tone?: "paper" | "sand" | "navy";
  id?: string;
}) {
  return (
    <section className={`inner-section inner-section-${tone}`} aria-labelledby={id}>
      <div className="section-shell inner-section-grid">
        <div className="inner-section-heading">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 id={id}>{title}</h2>
          <span className="section-margin-mark" aria-hidden="true" />
        </div>
        <div className="inner-section-content">{children}</div>
      </div>
    </section>
  );
}

export function ContextCTA({
  eyebrow,
  title,
  href,
  label,
  secondary,
}: {
  eyebrow: string;
  title: string;
  href: string;
  label: string;
  secondary?: { href: string; label: string; external?: boolean };
}) {
  return (
    <section className="context-cta section-shell">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <div className="button-row">
        <Link className="button button-light" href={href}>{label}</Link>
        {secondary && (
          <a className="button button-outline-light" href={secondary.href} target={secondary.external ? "_blank" : undefined} rel={secondary.external ? "noopener noreferrer" : undefined}>
            {secondary.label}
          </a>
        )}
      </div>
    </section>
  );
}

export function Accordion({
  items,
  className = "",
}: {
  items: Array<{ title: string; content: React.ReactNode; kicker?: string }>;
  className?: string;
}) {
  return (
    <div className={`accordion ${className}`}>
      {items.map((item, index) => (
        <details key={`${item.title}-${index}`}>
          <summary>
            <span className="accordion-index">{item.kicker ?? String(index + 1).padStart(2, "0")}</span>
            <span className="accordion-title">{item.title}</span>
            <span className="accordion-icon" aria-hidden="true">+</span>
          </summary>
          <div className="accordion-panel">{item.content}</div>
        </details>
      ))}
    </div>
  );
}

export function TagList({ items }: { items: string[] }) {
  return <ul className="tag-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export function EditorialImage({
  src,
  alt,
  caption,
  portrait = false,
  className = "",
}: {
  src: string;
  alt: string;
  caption: string;
  portrait?: boolean;
  className?: string;
}) {
  return (
    <figure className={`editorial-image ${portrait ? "editorial-image-portrait" : ""} ${className}`.trim()}>
      <div className="editorial-image-frame">
        <Image src={src} alt={alt} width={1600} height={portrait ? 1200 : 900} sizes="(max-width: 719px) calc(100vw - 28px), (max-width: 1279px) calc(100vw - 72px), 1240px" loading="lazy" unoptimized />
      </div>
      <figcaption>
        <span>{caption}</span>
      </figcaption>
    </figure>
  );
}
