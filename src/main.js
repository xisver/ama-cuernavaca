import "@fontsource/dm-sans/latin-400.css";
import "@fontsource/dm-sans/latin-500.css";
import "@fontsource/dm-sans/latin-600.css";
import "@fontsource/dm-sans/latin-700.css";
import "@fontsource/dm-serif-display/latin-400-italic.css";
import "./styles.css";
import "./responsive.css";
import { icon } from "./icons.js";
import { contact, courses, faqs, whatsappLink } from "./data.js";

const external = 'target="_blank" rel="noopener noreferrer"';
const chat = (label, className = "button button-dark", message) =>
  `<a class="${className}" href="${whatsappLink(message)}" ${external}>${label}${icon("diagonal")}</a>`;

document.querySelector("#app").innerHTML = `
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#inicio" aria-label="AMA Cuernavaca, inicio"><img src="/images/logo-ama.png" width="134" height="56" alt="AMA" /><span>ESCUELA DE MANEJO<span>CUERNAVACA</span></span></a>
      <nav class="main-nav" id="main-nav" aria-label="Navegación principal">
        <a href="#cursos">Cursos de manejo</a><a href="#nosotros">Por qué AMA</a><a href="#como-empezar">Cómo empezar</a><a href="#contacto">Contacto</a>
        <a class="mobile-contact" href="${contact.telephone}">${icon("phone")}${contact.phone}</a>
      </nav>
      <a class="header-phone" href="${contact.telephone}" aria-label="Llamar a AMA al ${contact.phone}">${icon("phone")}<span>${contact.phone}</span></a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Abrir menú">${icon("menu")}</button>
    </div>
  </header>

  <main id="contenido">
    <section class="hero container" id="inicio" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot"></span> TU ESCUELA DE MANEJO EN CUERNAVACA</p>
        <h1 id="hero-title">Tu libertad<br>empieza<br><em>al volante.</em></h1>
        <p class="hero-description">Aprende a manejar con calma, seguridad y a tu ritmo. Te acompañamos desde el primer «¿y si no puedo?» hasta tu primer «¡lo logré!».</p>
        <div class="hero-actions"><a class="button button-dark" href="#cursos">Encuentra tu curso ${icon("arrow")}</a><a class="text-link" href="${whatsappLink()}" ${external}>Hablemos por WhatsApp ${icon("diagonal")}</a></div>
        <div class="hero-note">${icon("heart")} Especialistas en personas nerviosas. Vas a estar en buenas manos.</div>
      </div>
      <div class="hero-visual">
        <img class="hero-photo" src="/images/hero-driving.jpg" alt="Manos al volante de un automóvil durante la conducción" width="1280" height="600" fetchpriority="high" />
        <div class="experience-badge"><strong>30<span>+</span></strong><span>AÑOS ENSEÑANDO<br>A MANEJAR</span></div>
        <div class="photo-caption"><span class="caption-icon">${icon("wheel")}</span><span>Un nuevo camino.<br><strong>Una versión más segura de ti.</strong></span></div>
        <span class="photo-index">AMA · CUERNAVACA, MORELOS</span>
      </div>
    </section>

    <div class="benefits-bar"><div class="container benefits-inner">
      <div>${icon("shield")}<span><strong>Tu seguridad, primero</strong><span>Autos con doble control</span></span></div>
      <div>${icon("car")}<span><strong>Tú eliges cómo aprender</strong><span>Estándar o automático</span></span></div>
      <div>${icon("book")}<span><strong>Aprende para la vida real</strong><span>Práctica y educación vial</span></span></div>
    </div></div>

    <section class="section container" id="cursos" aria-labelledby="courses-title">
      <div class="section-heading"><div><p class="eyebrow">01 / ELIGE TU CAMINO</p><h2 id="courses-title">Hay un curso<br><em>para tu momento.</em></h2></div><p>¿Tu primera vez o un nuevo comienzo?<br>Encuentra la opción que va contigo.</p></div>
      <div class="course-toolbar"><div class="transmission-toggle" role="group" aria-label="Tipo de transmisión"><button type="button" class="selected" data-transmission="Estándar" aria-pressed="true">${icon("wheel")}Auto estándar</button><button type="button" data-transmission="Automático" aria-pressed="false">${icon("car")}Auto automático</button></div><button class="text-link advisor-trigger" type="button">No sé qué curso elegir ${icon("diagonal")}</button></div>
      <div class="course-grid" id="course-grid" aria-live="polite" aria-atomic="true"></div>
      <p class="course-footnote">${icon("book")} Todos los cursos incluyen educación vial los sábados. Consulta precios y disponibilidad directamente con AMA.</p>
    </section>

    <section class="about-section" id="nosotros" aria-labelledby="about-title"><div class="container about-grid">
      <div class="about-visual"><img src="/images/pista-ama.jpg" alt="Automóvil negro y amarillo de la escuela de manejo AMA" width="545" height="329" loading="lazy" /><div class="about-photo-note">${icon("pin")} APRENDE EN CUERNAVACA. CONDUCE MÁS LEJOS.</div><span class="about-stamp">DESPACIO<br><em>también</em><br>SE LLEGA.</span></div>
      <div class="about-copy"><p class="eyebrow">02 / AQUÍ, LA CONFIANZA VA PRIMERO</p><h2 id="about-title">Primero tú.<br><em>Después, el camino.</em></h2><p>Sabemos que aprender a manejar es un gran paso. Por eso, en AMA la paciencia y el acompañamiento son parte de cada clase.</p><div class="about-reasons">
        <div>${icon("heart")}<span><strong>Paciencia para tus primeros pasos</strong>Atención especializada si sientes nervios al manejar.</span></div>
        <div>${icon("shield")}<span><strong>Seguridad en cada práctica</strong>Vehículos con doble control e instructores capacitados.</span></div>
        <div>${icon("wheel")}<span><strong>Experiencia que te acompaña</strong>Más de 30 años enseñando a conducir en Cuernavaca.</span></div>
      </div>${chat("Da el primer paso", "button button-yellow")}</div>
    </div></section>

    <section class="section container steps-section" id="como-empezar" aria-labelledby="steps-title">
      <div class="section-heading"><div><p class="eyebrow">03 / ES MÁS FÁCIL EMPEZAR</p><h2 id="steps-title">Tu próximo destino:<br><em>sentirte capaz.</em></h2></div><p>Nosotros te orientamos.<br>Tú traes las ganas de aprender.</p></div>
      <div class="steps-grid"><article><span class="step-number">01</span><h3>Cuéntanos de ti</h3><p>Escríbenos y dinos si empiezas desde cero o quieres volver a practicar.</p></article><article><span class="step-number">02</span><h3>Elige tu curso</h3><p>Te ayudamos a elegir transmisión, modalidad y un horario disponible.</p></article><article><span class="step-number">03</span><h3>Ponte al volante</h3><p>Empieza tus clases y construye confianza, una práctica a la vez.</p></article></div>
      <div class="other-services"><div><p class="eyebrow">¿BUSCAS ALGO MÁS?</p><h3>También te acompañamos en otros caminos.</h3></div><div class="services-links">${[
        [
          "Licencia federal",
          "Hola, AMA. Me gustaría recibir información sobre el curso y trámite de licencia federal.",
        ],
        [
          "Permiso internacional",
          "Hola, AMA. Me gustaría recibir información sobre el permiso internacional para conducir.",
        ],
        [
          "Taller multimarca",
          "Hola, AMA. Me gustaría recibir información sobre el taller mecánico multimarca.",
        ],
        [
          "Servicio de grúas 24 h",
          "Hola, AMA. Me gustaría recibir información sobre el servicio de grúas.",
        ],
      ]
        .map(
          ([title, message]) =>
            `<a href="${whatsappLink(message)}" ${external}>${title}${icon("diagonal")}</a>`,
        )
        .join("")}</div></div>
    </section>

    <section class="faq-section"><div class="container faq-grid"><div><p class="eyebrow">ANTES DE ARRANCAR</p><h2>Resolvamos<br><em>tus dudas.</em></h2><p>Un poco de claridad también<br>ayuda a dar el primer paso.</p></div><div class="faq-list">${faqs.map(([question, answer]) => `<details><summary>${question}${icon("chevron")}</summary><p>${answer}</p></details>`).join("")}</div></div></section>

    <section class="contact-section" id="contacto" aria-labelledby="contact-title"><div class="container contact-grid"><div class="contact-copy"><p class="eyebrow">04 / AQUÍ EMPIEZA TU INDEPENDENCIA</p><h2 id="contact-title">El primer paso<br>es <em>hablarlo.</em></h2><p>Pregunta sin compromiso. Te ayudamos a encontrar<br class="desktop-break"> el curso y el horario ideales para ti.</p><div class="contact-actions">${chat(`${icon("whatsapp")} Escríbenos por WhatsApp`)}<a class="contact-phone" href="${contact.telephone}">${icon("phone")}${contact.phone}</a></div><a class="contact-email" href="mailto:${contact.email}">${contact.email}${icon("diagonal")}</a></div><div class="location-card"><div class="location-heading">${icon("pin")}<span>VEN A CONOCERNOS</span></div><h3>Nos vemos en<br>Tlaltenango.</h3><address>Emiliano Zapata 218, Tlaltenango<br>Cuernavaca, Morelos · C.P. 62170</address><div class="opening-hours"><span>Lunes a viernes<strong>9:00 – 18:30</strong></span><span>Sábados<strong>9:00 – 15:00</strong></span><span>Domingos<strong>Cerrado</strong></span></div><a class="text-link" href="${contact.map}" ${external}>Cómo llegar ${icon("diagonal")}</a></div></div></section>
  </main>
  <footer class="site-footer"><div class="container footer-main"><a href="#inicio" class="footer-brand" aria-label="AMA, volver al inicio"><img src="/images/logo-ama.png" width="134" height="56" alt="AMA" /><span>Tu libertad empieza al volante.</span></a><div><a href="#cursos">Cursos</a><a href="#nosotros">Por qué AMA</a><a href="#contacto">Contacto</a><a href="https://www.facebook.com/AMACuerna/" ${external}>Facebook ${icon("diagonal")}</a></div></div><div class="container footer-bottom"><span>© ${new Date().getFullYear()} AMA Cuernavaca.</span><span>Propuesta de diseño · Versión 01</span><a href="#inicio">Volver arriba ↑</a></div></footer>
  <a class="floating-chat" href="${whatsappLink()}" ${external} aria-label="Consultar cursos por WhatsApp (abre en otra pestaña)">${icon("whatsapp")}<span>¿Te ayudamos?</span></a>

  <dialog id="course-advisor" aria-labelledby="advisor-title"><div class="dialog-content"><button class="dialog-close" type="button" aria-label="Cerrar orientación de cursos">${icon("close")}</button><p class="eyebrow">ENCUENTRA TU PUNTO DE PARTIDA</p><h2 id="advisor-title">Un curso <em>a tu medida.</em></h2><p>Dos preguntas para orientarte. AMA confirmará contigo los detalles y la disponibilidad.</p><form id="advisor-form"><label for="experience">¿Qué experiencia tienes?</label><select id="experience" name="experience"><option value="new">Quiero aprender desde cero</option><option value="experienced">Ya manejo y quiero reforzar mis habilidades</option></select><label for="availability">¿Cuándo te gustaría practicar?</label><select id="availability" name="availability"><option value="week">Entre semana</option><option value="weekend">El fin de semana</option></select><button class="button button-dark" type="submit">Ver mi orientación ${icon("arrow")}</button></form><div id="advisor-result" role="status" hidden></div></div></dialog>
`;

let transmission = "Estándar";
function renderCourses() {
  document.querySelector("#course-grid").innerHTML = courses
    .map(
      (course) => `
    <article class="course-card ${course.recommended ? "recommended" : ""}">
      <div class="course-card-top"><span class="course-number">/ ${course.number}</span>${course.recommended ? '<span class="course-label">TU PRIMER PASO</span>' : icon(course.id === "intensivo" ? "clock" : "wheel")}</div>
      <p class="course-type">AUTO ${transmission.toUpperCase()}</p><h3>${course.name}</h3><p class="course-tagline">${course.tagline}</p><p class="course-description">${course.description}</p>
      <div class="course-duration">${icon("clock")}<strong>${transmission === "Automático" && course.automaticDuration ? course.automaticDuration : course.duration}</strong><span>${course.schedule}</span></div>
      <ul>${course.features.map((feature) => `<li>${icon("check")}${feature}</li>`).join("")}</ul>
      ${chat("Me interesa", `button ${course.recommended ? "button-dark" : "button-outline"}`, `Hola, AMA. Me interesa el curso ${course.name.toLowerCase()} en auto ${transmission.toLowerCase()}. ¿Me comparten precio y horarios disponibles?`)}
    </article>`,
    )
    .join("");
}
renderCourses();
document.querySelectorAll("[data-transmission]").forEach((button) =>
  button.addEventListener("click", () => {
    transmission = button.dataset.transmission;
    document.querySelectorAll("[data-transmission]").forEach((item) => {
      const selected = item === button;
      item.classList.toggle("selected", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    renderCourses();
  }),
);

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
function closeMenu(restoreFocus = false) {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menú");
  menuToggle.innerHTML = icon("menu");
  nav.classList.remove("is-open");
  if (restoreFocus) menuToggle.focus();
}
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  menuToggle.innerHTML = icon(open ? "close" : "menu");
  nav.classList.toggle("is-open", open);
  if (open) nav.querySelector("a").focus();
});
nav
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", () => closeMenu()));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("is-open"))
    closeMenu(true);
});
document.addEventListener("click", (event) => {
  if (
    !event.composedPath().includes(document.querySelector(".site-header")) &&
    nav.classList.contains("is-open")
  )
    closeMenu();
});
window.matchMedia("(min-width: 1025px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});

const navLinks = [...nav.querySelectorAll('a[href^="#"]')];
const sections = [
  "inicio",
  "cursos",
  "nosotros",
  "como-empezar",
  "contacto",
].map((id) => document.getElementById(id));
let scrollPending = false;
function updateActiveSection() {
  const current = [...sections]
    .reverse()
    .find((section) => section.getBoundingClientRect().top <= 160)?.id;
  navLinks.forEach((link) => {
    if (link.hash === `#${current}`)
      link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  scrollPending = false;
}
window.addEventListener(
  "scroll",
  () => {
    if (!scrollPending) {
      requestAnimationFrame(updateActiveSection);
      scrollPending = true;
    }
  },
  { passive: true },
);
updateActiveSection();

const advisor = document.querySelector("#course-advisor");
document.querySelector(".advisor-trigger").addEventListener("click", () => {
  document.querySelector("#advisor-result").hidden = true;
  advisor.showModal();
});
document.querySelector("#advisor-form").addEventListener("change", () => {
  document.querySelector("#advisor-result").hidden = true;
});
document
  .querySelector(".dialog-close")
  .addEventListener("click", () => advisor.close());
advisor.addEventListener("click", (event) => {
  if (event.target === advisor) {
    const rect = advisor.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      advisor.close();
  }
});
document.querySelector("#advisor-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const experience = document.querySelector("#experience").value;
  const availability = document.querySelector("#availability").value;
  const course = courses.find(
    (item) =>
      item.id ===
      (experience === "experienced"
        ? "perfeccionamiento"
        : availability === "weekend"
          ? "intensivo"
          : "basico"),
  );
  const result = document.querySelector("#advisor-result");
  result.hidden = false;
  result.innerHTML = `<span class="eyebrow">TU PUNTO DE PARTIDA</span><h3>Curso ${course.name.toLowerCase()}</h3><p>${course.description}${experience === "experienced" && availability === "weekend" ? " Consulta si hay horarios de fin de semana para esta modalidad." : ""}</p>${chat("Consultar este curso", "button button-dark", `Hola, AMA. Me orientaron hacia el curso ${course.name.toLowerCase()} en auto ${transmission.toLowerCase()}. Prefiero ${availability === "weekend" ? "el fin de semana" : "entre semana"}. ¿Me comparten los detalles?`)}`;
  result.scrollIntoView({
    block: "nearest",
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth",
  });
});
