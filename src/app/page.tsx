import Image from "next/image";
import { Brand, Disciplines, Header, HeroArtwork, NothingTransition, SelectedWork, World } from "@/components/interactive";
import { contactEmail, contactHref } from "@/lib/content";

const principles = [
  ["IDEA FIRST.", "Sin una idea, el diseño es decoración."],
  ["HERO FIRST.", "La primera impresión también tiene que decir algo."],
  ["POSTER FIRST.", "Cada pieza debe poder defenderse por sí sola."],
  ["VARIETY WITHOUT CHAOS.", "Nunca lo mismo. Siempre reconocible."],
];

export default function Home() {
  return <>
    <a href="#contenido" className="skip-link">Saltar al contenido</a>
    <Header />
    <main id="contenido">
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <HeroArtwork />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-topline"><span>01 / BREAK THE FORMAT</span><span>DIRECCIÓN CREATIVA + PRODUCTO DIGITAL</span></div>
        <h1 id="hero-title">MAKE<br />IDEAS<br />WORK.<sup>™</sup></h1>
        <div className="hero-caption"><span className="tiny-cross" aria-hidden="true">+</span><p>Hay ideas que no caben<br />en un molde. <strong>Les damos forma.</strong></p></div>
        <div className="hero-side-note" aria-hidden="true">MM—001<br />FUERA DEL MOLDE.<br />DENTRO DE LA REALIDAD.</div>
        <a className="hero-cta button" href="#proyectos">Ver proyectos <span aria-hidden="true">↗</span></a>
        <div className="hero-bottom"><p>Dirección creativa, marcas y productos digitales<br /> con una razón para existir.</p><a href="#maquina">BAJA. ESTO SOLO EMPIEZA. <span aria-hidden="true">↓</span></a></div>
      </section>

      <div className="brand-strip" aria-label="De la idea a la realidad"><span>IDEA → FORMA → REALIDAD</span><span>CRITERIO PROPIO. MANOS A LA OBRA.</span><span>MAKE IDEAS WORK.™ <span aria-hidden="true">↗</span></span></div>

      <section className="machine-section section-pad" id="maquina" aria-labelledby="machine-title">
        <div className="section-meta"><span>02 / THE IDEA MACHINE</span><span>UNA IDEA ENTRA. ALGO REAL SALE.</span></div>
        <div className="machine-heading"><h2 id="machine-title">DE <span>“¿Y SI…?”</span><br />A “AHÍ ESTÁ.”</h2><span className="machine-serial">MM WORKS<br />UNIDAD DE IDEAS<br /><b>001—∞</b></span></div>
        <div className="machine-body"><div className="machine-image"><Image src="/images/idea-machine.png" alt="Prensa conceptual azul y metálica: una hoja arrugada entra y una pieza sólida sale." fill sizes="(max-width: 800px) 100vw, 60vw" /><span className="image-footnote">EXPERIMENTO VISUAL / MM WORKS</span></div><div className="machine-copy"><span className="machine-mark" aria-hidden="true">↳</span><p className="lead">Una idea en una servilleta.<br />Una marca, una web,<br />un producto.</p><p>Unimos criterio, diseño y tecnología para hacerla realidad. Del primer «¿y si?» a algo que se puede ver, tocar o usar.</p><a className="text-link" href="#disciplinas">Así lo hacemos <span aria-hidden="true">↗</span></a></div></div>
        <div className="machine-process"><span><b>01</b> PENSAR</span><span aria-hidden="true">→</span><span><b>02</b> DAR FORMA</span><span aria-hidden="true">→</span><span><b>03</b> HACER QUE FUNCIONE</span></div>
      </section>

      <NothingTransition />
      <SelectedWork />
      <Disciplines />

      <section className="mindset-section section-pad" id="mindset" aria-labelledby="mindset-title">
        <div className="section-meta"><h2 id="mindset-title">06 / MM WORKS MINDSET</h2><span>NO ES UN ESTILO. ES UN CRITERIO.</span></div>
        <div className="principles">{principles.map(([title, description], index) => <div className="principle" key={title}><span className="index-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p></div>)}</div>
        <p className="mindset-signature">DISTINTAS FORMAS.<br /><span>LA MISMA CABEZA.</span></p>
      </section>

      <World />

      <section className="proof-section section-pad" id="proof" aria-labelledby="proof-title">
        <div className="section-meta"><span>08 / HECHOS</span><span>EL DISEÑO TAMBIÉN RINDE CUENTAS.</span></div>
        <div className="proof-grid"><h2 id="proof-title">QUE SE VEA.<br />QUE SE USE.<br /><span>QUE FUNCIONE.</span></h2><div><p className="proof-intro">Trabajo que puedes mirar de cerca.</p><a className="proof-row" href="https://tramicalma.es/" target="_blank" rel="noopener noreferrer"><span>TramiCalma ↗</span><p>Asistentes y guías en una web pública.</p></a><a className="proof-row" href="#proyectos"><span>Juan Domingo</span><p>ADN Runner implementado.<br />Catálogo en validación.</p></a><a className="proof-row" href="#proyectos"><span>BRKET</span><p>Sistema de diseño construido.<br />Producto en desarrollo.</p></a><p className="proof-note">Webs, herramientas y sistemas en fases distintas.<br />Cada proyecto cuenta hasta dónde hemos llegado.</p></div></div>
      </section>

      <section className="contact-section section-pad" id="contacto" aria-labelledby="contact-title">
        <div className="section-meta"><span>09 / HAGAMOS QUE FUNCIONE</span><span>DE TU CABEZA AL MUNDO.</span></div>
        <h2 id="contact-title">¿LO TIENES<br />EN LA CABEZA<span>?</span></h2>
        <div className="contact-bottom"><p>Hagamos que funcione.</p><div className="contact-action"><a className="button button-light" href={contactHref}>Cuéntanos tu idea <span aria-hidden="true">↗</span></a><span>Se abre un correo. Tú decides qué contar.</span></div></div>
      </section>
    </main>
    <footer className="site-footer"><div className="footer-top"><Brand footer /><a className="footer-mail" href={contactHref}>{contactEmail} <span aria-hidden="true">↗</span></a><a className="back-top" href="#inicio">Volver arriba ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} MM WORKS</span><span>MAKE IDEAS WORK.™</span><span>HECHO CON CABEZA. Y CON MANOS.</span></div></footer>
  </>;
}
