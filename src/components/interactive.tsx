"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { articles, contactHref, disciplines, projects } from "@/lib/content";

export function Brand({ footer = false }: { footer?: boolean }) {
  return <a className={`brand ${footer ? "brand-footer" : ""}`} href={contactHref} aria-label="Contactar con MM WORKS por correo"><span>MM<span className="brand-dot">■</span><br />WORKS</span><sup>®</sup></a>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, []);
  return <header className="site-header">
    <Brand />
    <span className="header-descriptor">ESTUDIO CREATIVO<br />INDEPENDIENTE</span>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav">{open ? "Cerrar −" : "Menú +"}</button>
    <nav id="main-nav" aria-label="Navegación principal" className={open ? "nav-open" : ""}>
      <a href="#proyectos" onClick={() => setOpen(false)}>Proyectos <sup>05</sup></a>
      <a href="#disciplinas" onClick={() => setOpen(false)}>Qué hacemos</a>
      <a href="#world" onClick={() => setOpen(false)}>MM//WORLD</a>
      <a className="nav-contact" href={contactHref}>Hablemos <span aria-hidden="true">↗</span></a>
    </nav>
  </header>;
}

export function HeroArtwork() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  return <motion.div ref={ref} className="hero-artwork" style={reduced ? undefined : { y }}>
    <Image src="/images/break-the-format.png" alt="Una pieza azul fuerza su paso a través de una placa de metal negro." fill loading="eager" fetchPriority="high" sizes="100vw" />
  </motion.div>;
}

export function NothingTransition() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [-50, 55]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 5]);
  return <section ref={ref} className="nothing-section" id="origen" aria-labelledby="nothing-title">
    <div className="section-meta"><span>03 / NOTHING TO SHOW YET</span><span>DEL CERO A ALGO PROPIO</span></div>
    <div className="nothing-heading"><h2 id="nothing-title">AQUÍ NO<br />HABÍA NADA.</h2><motion.span className="made-stamp" style={reduced ? undefined : { x, rotate }}>HASTA QUE<br />LO HICIMOS.</motion.span></div>
    <div className="nothing-bottom"><p>Todo empieza con algo<br />que todavía no existe.</p><a href="#proyectos" className="text-link">Esto es lo que pasa después <span aria-hidden="true">↓</span></a></div>
  </section>;
}

type Detail = { eyebrow: string; title: string; paragraphs: string[]; project?: boolean };

function DetailDialog({ detail, onClose }: { detail: Detail | null; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current;
    if (!detail || !element) return;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; element.close(); };
  }, [detail]);
  return <dialog ref={dialog} className="detail-dialog" onClose={onClose} aria-labelledby="dialog-title" onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    {detail && <div className="dialog-content">
      <div className="dialog-top"><span className="eyebrow">{detail.eyebrow}</span><button className="dialog-close" autoFocus onClick={onClose} aria-label="Cerrar detalle">Cerrar <span aria-hidden="true">×</span></button></div>
      <h2 id="dialog-title">{detail.title}</h2>
      {detail.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {detail.project && <div className="project-disclosure"><span className="eyebrow">AVANCE DEL ARCHIVO</span><p>Esta composición es una propuesta visual para la Home. El caso completo, sus imágenes originales y sus resultados se incorporarán tras su revisión.</p></div>}
      <a className="button button-dark" href={contactHref}>Hablemos de tu idea <span aria-hidden="true">↗</span></a>
    </div>}
  </dialog>;
}

export function SelectedWork() {
  const [detail, setDetail] = useState<Detail | null>(null);
  const showProject = (project: typeof projects[number]) => setDetail({ eyebrow: project.category, title: project.name, paragraphs: [project.title, project.description], project: true });
  return <section className="work-section section-pad" id="proyectos" aria-labelledby="work-title">
    <div className="section-meta"><span>04 / SELECTED WORK</span><span>UNA IDEA. SU PROPIO MUNDO.</span></div>
    <div className="section-heading"><h2 id="work-title">HECHO CON<br /><span className="muted">INTENCIÓN.</span></h2><p>Distintos puntos de partida.<br /> Una misma obsesión:<br /> que tenga sentido y funcione.</p></div>
    <div className="work-posters">
      <button className="project-poster poster-running" onClick={() => showProject(projects[0])} aria-label="Ver avance de Juan Domingo">
        <span className="poster-top"><span>JUAN DOMINGO</span><span>RUNNING CULTURE</span></span>
        <span className="running-track" aria-hidden="true" />
        <span className="running-headline">NO ES<br />SOLO<br /><em>CORRER.</em></span>
        <span className="poster-bottom"><span>EXPERIENCIA DIGITAL</span><span className="poster-arrow" aria-hidden="true">↗</span></span>
        <span className="concept-label">COMPOSICIÓN CONCEPTUAL / 01</span>
      </button>
      <button className="project-poster poster-brket" onClick={() => showProject(projects[1])} aria-label="Ver avance de BRKET">
        <span className="poster-top"><span>BRKET®</span><span>PLAY / CONNECT</span></span>
        <span className="bracket-art" aria-hidden="true"><i /><i /><i /><i /></span>
        <span className="brket-headline">NEXT<br />MATCH.</span>
        <span className="poster-bottom"><span>EL JUEGO CONTINÚA.</span><span className="poster-arrow" aria-hidden="true">↗</span></span>
        <span className="concept-label">COMPOSICIÓN CONCEPTUAL / 02</span>
      </button>
    </div>
    <div className="project-captions"><div><h3>Juan Domingo</h3><p>Experiencia digital / Running culture</p></div><div><h3>BRKET</h3><p>Producto digital / Sports tech</p></div></div>
    <div className="project-index">{projects.slice(2).map((project, i) => <button key={project.id} onClick={() => showProject(project)}><span className="index-number">0{i + 3}</span><h3>{project.name}</h3><span className="index-category">{project.category}</span><span aria-hidden="true">↗</span></button>)}</div>
    <p className="archive-note">Archivo en construcción. Avances visuales; casos completos próximamente.</p>
    <DetailDialog detail={detail} onClose={() => setDetail(null)} />
  </section>;
}

export function Disciplines() {
  const [active, setActive] = useState<number | null>(0);
  return <section className="discipline-section section-pad" id="disciplinas" aria-labelledby="disciplines-title">
    <div className="section-meta"><span>05 / WE DON’T JUST MAKE WEBSITES</span><span>IDEAS SIN UN SOLO FORMATO</span></div>
    <div className="disciplines-grid"><div><h2 id="disciplines-title">UNA WEB.<br />UNA MARCA.<br />UN <span className="outline">¿Y SI?</span></h2><p>El formato viene después.<br />Primero, qué quieres hacer posible.</p></div>
      <div className="discipline-list">{disciplines.map((discipline, index) => <div className={`discipline-item ${active === index ? "is-open" : ""}`} key={discipline.name}>
        <h3><button id={`discipline-button-${index}`} aria-expanded={active === index} aria-controls={`discipline-panel-${index}`} onClick={() => setActive(active === index ? null : index)}><span className="index-number">{discipline.index}</span>{discipline.name}<span aria-hidden="true">{active === index ? "−" : "+"}</span></button></h3>
        <div id={`discipline-panel-${index}`} role="region" aria-labelledby={`discipline-button-${index}`} hidden={active !== index}><p>{discipline.text}</p></div>
      </div>)}</div>
    </div>
  </section>;
}

export function World() {
  const [detail, setDetail] = useState<Detail | null>(null);
  return <section className="world-section section-pad" id="world" aria-labelledby="world-title">
    <div className="section-meta"><span>07 / CULTURA PROPIA</span><span>IDEAS FUERA DEL ENCARGO</span></div>
    <div className="world-heading"><h2 id="world-title">MM<span>//</span>WORLD</h2><p>No todo lo que hacemos<br />tiene un cliente.</p></div>
    <div className="world-grid">{articles.map((article, index) => <button className={`world-story story-${index}`} key={article.id} onClick={() => setDetail({ eyebrow: article.category, title: article.title, paragraphs: article.paragraphs })}>
      <span className="story-art"><span className="story-category">{article.category}</span>{index === 0 ? <span className="pov-art">IDEA<br />OVER<br /><i>EVERY<br />THING.</i></span> : index === 1 ? <Image src="/images/break-the-format.png" alt="Detalle de la pieza azul atravesando metal." fill sizes="(max-width: 700px) 100vw, 33vw" /> : <span className="lab-art">Aa<span>↗</span><small>PHYSICAL<br />MEETS DIGITAL.</small></span>}<span className="story-open" aria-hidden="true">↗</span></span>
      <span className="story-meta">{article.label}</span><h3>{article.title}</h3>
    </button>)}</div>
    <DetailDialog detail={detail} onClose={() => setDetail(null)} />
  </section>;
}
