"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  CircleDot,
  GraduationCap,
  Headphones,
  Laptop,
  LockKeyhole,
  Menu,
  MessageCircle,
  MonitorCheck,
  ShoppingCart,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: ShoppingCart,
    title: "Asesoramiento informático",
    description:
      "Elegí equipos, componentes y programas según lo que realmente necesitás y tu presupuesto.",
    tag: "TECNOLOGÍA, CON CRITERIO",
  },
  {
    number: "02",
    icon: Headphones,
    title: "Soporte técnico remoto",
    description:
      "Diagnosticamos problemas y te acompañamos para volver a trabajar con tus herramientas.",
    tag: "ASISTENCIA A DISTANCIA",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Capacitación personalizada",
    description:
      "Aprendé programas y herramientas digitales con una formación práctica y a tu ritmo.",
    tag: "APRENDÉ HACIENDO",
  },
  {
    number: "04",
    icon: Bot,
    title: "Automatización de tareas",
    description:
      "Simplificá trabajos repetitivos con flujos y herramientas pensados para tu día a día.",
    tag: "MÁS TIEMPO PARA LO IMPORTANTE",
  },
];

const audiences = {
  Hogares: {
    eyebrow: "PARA PERSONAS Y HOGARES",
    title: "Tecnología que podés aprovechar.",
    description:
      "Resolvé dudas, aprendé a usar tus herramientas y elegí tu próximo equipo con más claridad.",
    items: [
      ["Optimización de equipos", "Puesta a punto y acompañamiento para tu computadora.", "SOPORTE"],
      ["Clases a tu medida", "Aprendé programas y herramientas con ejemplos prácticos.", "CAPACITACIÓN"],
      ["Guía para comprar", "Compará opciones según tus necesidades y presupuesto.", "ASESORAMIENTO"],
    ],
  },
  "Pequeños negocios": {
    eyebrow: "PARA EMPRENDIMIENTOS Y PyMEs",
    title: "Tecnología alineada a tu trabajo.",
    description:
      "Tomá decisiones informáticas con criterio y encontrá oportunidades para simplificar procesos.",
    items: [
      ["Asesoramiento tecnológico", "Equipos y software elegidos para la realidad de tu negocio.", "DECISIONES"],
      ["Automatización", "Menos trabajo repetitivo; más tiempo para hacer crecer el negocio.", "EFICIENCIA"],
      ["Acompañamiento continuo", "Soporte y mantenimiento con un plan a tu medida.", "CONTINUIDAD"],
    ],
  },
  Modalidades: {
    eyebrow: "UNA PROPUESTA FLEXIBLE",
    title: "Empezá por lo que necesitás.",
    description:
      "Una consulta puntual, una capacitación o acompañamiento continuo: elegí cómo avanzar.",
    items: [
      ["Consulta puntual", "Una respuesta clara para una duda o necesidad concreta.", "POR CONSULTA"],
      ["Capacitación intensiva", "Sesiones individuales o grupales para dominar una herramienta.", "POR SESIÓN"],
      ["Asistencia continua", "Un abono de soporte para hogares o negocios que necesitan respaldo.", "MENSUAL"],
    ],
  },
} as const;

type Audience = keyof typeof audiences;

export default function Home() {
  const [activeAudience, setActiveAudience] = useState<Audience>("Hogares");
  const [menuOpen, setMenuOpen] = useState(false);
  const currentAudience = audiences[activeAudience];

  return (
    <main>
      <header className="site-header">
        <a aria-label="Gravity Digital, inicio" className="brand" href="#inicio">
          <span className="brand-mark">
            <CircleDot aria-hidden="true" size={23} strokeWidth={1.8} />
          </span>
          <span>
            <strong>gravity</strong>
            <span className="brand-light">digital</span>
          </span>
        </a>

        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav aria-label="Navegación principal" className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
          <a href="#propuesta" onClick={() => setMenuOpen(false)}>La propuesta</a>
          <a href="#promociones" onClick={() => setMenuOpen(false)}>Lanzamiento</a>
          <a className="nav-cta" href="#servicios" onClick={() => setMenuOpen(false)}>
            Ver servicios <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </nav>
      </header>

      <section className="hero section-shell" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            EMPRENDIMIENTO DIGITAL · FORMOSA
          </div>
          <h1>
            Tu tecnología,
            <br />
            en buenas
            <br />
            <span>manos.</span>
          </h1>
          <p className="hero-description">
            Asesoramiento informático, soporte remoto, capacitación y
            automatización para personas y negocios.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#servicios">
              Encontrá tu solución <ArrowRight aria-hidden="true" size={16} />
            </a>
            <a className="text-link" href="#propuesta">
              Conocé Gravity <ArrowDownRight aria-hidden="true" size={15} />
            </a>
          </div>
          <div className="hero-footnote">
            <span className="footnote-line" />
            Visión técnica, apoyo informático donde sea.
          </div>
        </div>

        <div aria-label="Vista ilustrativa de los servicios de Gravity Digital" className="hero-visual">
          <div className="visual-glow" />
          <div className="floating-note note-top">
            <span className="note-icon"><Sparkles size={15} /></span>
            <span><strong>Una recomendación clara</strong><small>Según tu necesidad y presupuesto</small></span>
            <span className="note-check"><Check size={13} /></span>
          </div>

          <div className="product-window">
            <div className="window-topbar">
              <div className="window-brand">
                <span className="mini-mark"><CircleDot size={17} /></span>
                <strong>gravity</strong>
                <span className="window-divider" />
                <span className="workspace-name">Asistencia tecnológica</span>
              </div>
              <span className="avatar"><LockKeyhole size={11} /></span>
            </div>
            <div className="window-content">
              <aside className="window-sidebar">
                <span className="sidebar-label">TE ACOMPAÑAMOS</span>
                <span className="sidebar-link selected"><MonitorCheck size={14} /> Diagnóstico</span>
                <span className="sidebar-link"><ShoppingCart size={14} /> Asesoramiento</span>
                <span className="sidebar-link"><GraduationCap size={14} /> Capacitación</span>
                <span className="sidebar-link"><Wrench size={14} /> Soporte remoto</span>
                <div className="sidebar-spacer" />
                <span className="sidebar-label">A TU MEDIDA</span>
                <span className="sidebar-link"><CircleDot size={14} /> Consulta puntual</span>
                <div className="sidebar-user">
                  <span className="user-avatar"><MessageCircle size={12} /></span>
                  <span><strong>Atención directa</strong><small>Trato personalizado</small></span>
                </div>
              </aside>
              <div className="dashboard">
                <div className="dashboard-heading">
                  <div>
                    <span className="dashboard-kicker">TECNOLOGÍA, SIN COMPLICACIONES</span>
                    <h2>¿En qué te ayudamos?</h2>
                  </div>
                  <span className="date-filter">
                    A tu medida <CircleDot size={10} />
                  </span>
                </div>
                <div className="metrics">
                  <div className="metric-card">
                    <span>Antes de elegir</span>
                    <strong>Asesorate</strong>
                    <small>Equipos y software</small>
                  </div>
                  <div className="metric-card">
                    <span>Cuando lo necesites</span>
                    <strong>Resolvelo</strong>
                    <small>Soporte a distancia</small>
                  </div>
                  <div className="metric-card">
                    <span>Para la próxima</span>
                    <strong>Aprendé</strong>
                    <small>Capacitación práctica</small>
                  </div>
                </div>
                <div className="chart-card service-preview">
                  <div className="chart-heading">
                    <div><strong>De la duda a la solución</strong><span>Un acompañamiento claro, paso a paso</span></div>
                    <span className="chart-legend"><i /> A tu ritmo</span>
                  </div>
                  <div className="service-steps">
                    <div><span className="service-step-icon"><MessageCircle size={13} /></span><span><strong>Nos contás</strong><small>Escuchamos lo que necesitás</small></span></div>
                    <span className="service-step-line" />
                    <div><span className="service-step-icon"><Laptop size={13} /></span><span><strong>Lo resolvemos</strong><small>Elegimos cómo acompañarte</small></span></div>
                    <span className="service-step-line" />
                    <div><span className="service-step-icon"><Check size={13} /></span><span><strong>Seguís adelante</strong><small>Con más claridad y autonomía</small></span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="window-status"><span className="status-dot" /> Atención personalizada <span>Canales digitales</span></div>
          </div>

          <div className="floating-note note-bottom">
            <span className="stock-ring"><Headphones size={13} /></span>
            <span><strong>¿Tenés una consulta?</strong><small>Empecemos por entenderla</small></span>
            <ArrowUpRight aria-hidden="true" className="note-arrow" size={15} />
          </div>
        </div>
      </section>

      <div className="trust-strip">
        <div className="section-shell trust-inner">
          <span>APOYO INFORMÁTICO PARA CADA DÍA</span>
          <div><ShoppingCart size={15} /> Asesoramiento</div>
          <div><Headphones size={15} /> Soporte remoto</div>
          <div><GraduationCap size={15} /> Capacitación</div>
          <div><Bot size={15} /> Automatización</div>
        </div>
      </div>

      <section className="services section-shell section-spacing" id="servicios">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="heading-dash" /> NUESTROS SERVICIOS</div>
            <h2>La tecnología,<br />más <span>simple.</span></h2>
          </div>
          <p>
            Te ayudamos a elegir, resolver, aprender y trabajar mejor con la
            tecnología que ya tenés o la que necesitás.
          </p>
        </div>
        <div className="service-grid">
          {services.map(({ number, icon: Icon, title, description, tag }) => (
            <article className="service-card" key={number}>
              <div className="service-topline"><span>{number}</span><Icon aria-hidden="true" size={19} strokeWidth={1.6} /></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="service-bottom"><span>{tag}</span><ArrowUpRight aria-hidden="true" size={15} /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="project-section section-spacing" id="propuesta">
        <div className="section-shell">
          <div className="project-intro">
            <div>
              <div className="eyebrow"><span className="heading-dash" /> UNA PROPUESTA CERCANA</div>
              <h2>Visión técnica.<br /><span>Apoyo donde sea.</span></h2>
            </div>
            <p>
              Gravity Digital acerca el conocimiento informático a personas y
              pequeños negocios: atención directa, soluciones prácticas y
              tecnología elegida para cada necesidad.
            </p>
          </div>

          <div className="case-study">
            <div className="case-copy">
              <span className="case-label"><span className="case-dot" /> ACOMPAÑAMIENTO DIGITAL · FORMOSA</span>
              <h3>Una buena solución empieza por entenderte.</h3>
              <p>
                Te orientamos para evitar compras innecesarias, destrabar
                problemas y ganar autonomía con tus herramientas digitales.
              </p>
              <a className="case-link" href="#servicios">Explorá los servicios <ArrowRight aria-hidden="true" size={15} /></a>
              <div className="case-stats">
                <div><strong>DIRECTO</strong><span>atención personalizada</span></div>
                <div><strong>REMOTO</strong><span>servicios digitales</span></div>
                <div><strong>FORMOSA</strong><span>cobertura inicial</span></div>
              </div>
            </div>

            <div className="inventory-panel service-explorer">
              <div className="inventory-top">
                <div><span className="inventory-overline">GRAVITY DIGITAL / SOLUCIONES</span><h4>¿Para quién es?</h4></div>
                <span className="live-pill"><span /> Flexible</span>
              </div>
              <div aria-label="Explorá las soluciones por tipo de cliente" className="inventory-tabs">
                {(Object.keys(audiences) as Audience[]).map((audience) => (
                  <button
                    aria-pressed={activeAudience === audience}
                    className={activeAudience === audience ? "inventory-tab active" : "inventory-tab"}
                    key={audience}
                    onClick={() => setActiveAudience(audience)}
                    type="button"
                  >
                    {audience}
                  </button>
                ))}
              </div>
              <div className="inventory-summary">
                <span>{currentAudience.eyebrow}</span>
                <strong>{currentAudience.title}</strong>
              </div>
              <p className="explorer-description">{currentAudience.description}</p>
              <div className="inventory-table">
                <div className="table-head"><span>SOLUCIÓN</span><span>¿EN QUÉ CONSISTE?</span><span>FORMATO</span></div>
                {currentAudience.items.map(([name, description, format]) => (
                  <div className="table-row" key={name}>
                    <span className="product-name"><i className="product-icon"><CircleDot size={12} /></i>{name}</span>
                    <span className="explorer-item-description">{description}</span>
                    <span className="explorer-format">{format}</span>
                  </div>
                ))}
              </div>
              <div className="inventory-footer"><span><LockKeyhole size={12} /> Atención personalizada</span><span>Venta directa <ArrowUpRight size={12} /></span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="method section-shell section-spacing" id="metodo">
        <div className="method-heading">
          <div className="eyebrow"><span className="heading-dash" /> ASÍ TRABAJAMOS</div>
          <h2>Claro desde<br /><span>el comienzo.</span></h2>
          <p>Atención digital directa, sin intermediarios y con orientación según tu experiencia y necesidades.</p>
        </div>
        <div className="method-steps">
          <article className="method-step">
            <span className="step-number">01</span>
            <div><h3>Te escuchamos</h3><p>Nos contás qué querés resolver, aprender o mejorar.</p></div>
            <span className="step-icon"><MessageCircle size={17} /></span>
          </article>
          <article className="method-step">
            <span className="step-number">02</span>
            <div><h3>Buscamos la opción adecuada</h3><p>Te proponemos una solución clara, acorde a tu necesidad y presupuesto.</p></div>
            <span className="step-icon"><CircleDot size={17} /></span>
          </article>
          <article className="method-step">
            <span className="step-number">03</span>
            <div><h3>Seguimos cerca</h3><p>Te acompañamos para resolver, aprender y avanzar con más autonomía.</p></div>
            <span className="step-icon"><Check size={17} /></span>
          </article>
        </div>
      </section>

      <section className="promotions section-shell section-spacing" id="promociones">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="heading-dash" /> CAMPAÑA DE LANZAMIENTO</div>
            <h2>Un buen momento<br />para <span>empezar.</span></h2>
          </div>
          <p>
            La propuesta de lanzamiento acerca opciones de optimización,
            capacitación y asesoramiento a hogares y pequeños negocios.
          </p>
        </div>
        <div className="promotion-grid">
          <article className="promotion-card">
            <span className="promotion-number">01 / HOGARES Y PROFESIONALES</span>
            <span className="promotion-value">20% <small>OFF</small></span>
            <h3>Pack Rendimiento Extremo</h3>
            <p>Descuento en optimización integral del sistema operativo, limpieza lógica y puesta a punto de la PC.</p>
            <span className="promotion-note"><MonitorCheck size={13} /> Optimización de equipos</span>
          </article>
          <article className="promotion-card featured">
            <span className="promotion-number">02 / CAPACITACIÓN</span>
            <span className="promotion-value">3 × 2</span>
            <h3>Aprendé sin límites</h3>
            <p>Tres clases particulares o sesiones de soporte asistido al precio de dos.</p>
            <span className="promotion-note"><GraduationCap size={13} /> Herramientas digitales y ofimáticas</span>
          </article>
          <article className="promotion-card">
            <span className="promotion-number">03 / PyMEs</span>
            <span className="promotion-value">Bonificada</span>
            <h3>Auditoría IT</h3>
            <p>Diagnóstico y evaluación de la red sin cargo al contratar el primer mes de mantenimiento preventivo.</p>
            <span className="promotion-note"><LockKeyhole size={13} /> Asesoramiento e infraestructura</span>
          </article>
        </div>
        <p className="promotion-disclaimer">Promociones propuestas en el plan de lanzamiento del emprendimiento.</p>
      </section>

      <section className="contact-section section-shell" id="contacto">
        <div className="contact-card">
          <div className="contact-orbit orbit-one" />
          <div className="contact-orbit orbit-two" />
          <div className="contact-content">
            <span className="eyebrow"><span className="status-dot" /> ATENCIÓN DIGITAL Y PERSONALIZADA</span>
            <h2>La tecnología<br />se entiende <span>mejor.</span></h2>
            <p className="contact-description">
              Visión técnica, apoyo informático donde sea.
            </p>
            <a className="button button-primary" href="#servicios">
              Conocé nuestros servicios <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>
          <div className="contact-side-note"><span>GRAVITY DIGITAL</span><span>Formosa · Atención remota</span></div>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <a aria-label="Gravity Digital, inicio" className="brand footer-brand" href="#inicio">
          <span className="brand-mark"><CircleDot aria-hidden="true" size={21} strokeWidth={1.8} /></span>
          <span><strong>gravity</strong><span className="brand-light">digital</span></span>
        </a>
        <span>Visión técnica, apoyo informático donde sea.</span>
        <a className="back-to-top" href="#inicio">Volver arriba <ArrowUpRight size={13} /></a>
        <span className="copyright">© 2026 Gravity Digital</span>
      </footer>
    </main>
  );
}
