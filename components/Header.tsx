"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contact, navigation } from "./site-data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("keydown", onEscape);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("keydown", onEscape);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "menu-is-open" : ""}`}>
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Instituto de Formação Psicanalítica Cida Freitas - Início">
          <Image src="/brand/instituto-fpcf-emblema.webp" alt="" width="58" height="58" priority unoptimized />
          <span><strong>Instituto FPCF</strong><small>Formação Psicanalítica</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
          ))}
        </nav>
        <Link className="button button-primary header-cta" href="/inscricao">Quero me inscrever</Link>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen((value) => !value)}>
          <span /><span />
        </button>
      </div>
      <div className={`mobile-menu ${open ? "is-open" : ""}`} id="mobile-menu" aria-hidden={!open}>
        <nav aria-label="Navegação mobile">
          <p className="mobile-menu-kicker">Instituto de Formação Psicanalítica Cida Freitas</p>
          {navigation.map((item) => (
            <Link onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
          ))}
          <Link onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="button button-primary" href="/inscricao">Quero me inscrever</Link>
          <div className="mobile-menu-meta">
            <span>Formação online · Rio de Janeiro/RJ</span>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>WhatsApp {contact.phoneLabel}</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
