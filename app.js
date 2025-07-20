const leftSection = document.querySelector(".left-section");
const textInfo = document.querySelector(".text-info");
const nameHeader = document.querySelector(".name-header");
const filler = document.querySelector(".filler");
const clickInfo = document.querySelector("#click-something");

const heightCut = 40;

var textHalfWidth = 0;

const textValues = [
  "Please, don't touch my words.",
  "Why are you clicking here?",
  "Are you trying to touch the text?",
];

const valuesLength = textValues.length;

function getRandomInt() {
  return Math.floor(Math.random() * valuesLength);
}

const handleTextMovementOnClick = (event) => {
  clickInfo.textContent = textValues[getRandomInt()];
  textHalfWidth = Math.trunc(clickInfo.clientWidth / 2);
  clickInfo.style["top"] = event.clientY - heightCut + "px";
  clickInfo.style["left"] = event.clientX - textHalfWidth + "px";
  setTimeout((e) => {
    if (
      clickInfo.style["top"] === event.clientY - heightCut + "px" &&
      clickInfo.style["left"] === event.clientX - textHalfWidth + "px"
    ) {
      clickInfo.style["top"] = "-50px";
      clickInfo.style["left"] = "0px";
    }
  }, 1000);
};

const animationName = "name-animation 300ms ease-in 500ms";

nameHeader.addEventListener("click", (event) => {
  filler.style["animation"] = animationName;
  setTimeout((e) => {
    filler.style["animation"] = "";
  }, 1000);
});

leftSection.addEventListener("click", handleTextMovementOnClick);
textInfo.addEventListener("click", handleTextMovementOnClick);

const translations = {
  en: {
    greeting1: "Hi people,",
    greeting2: "I'm Emilio, coding from Galicia",
    experienceTitle: "Working Experience",
    contact: "Contact Me!",
    description: `My journey started with basic video game projects — nothing fancy, just fun experiments that got me hooked on code. Since then, I've grown into a full stack developer who values clean architecture, performance, and good user experiences.`,
  },
  es: {
    greeting1: "Hola gente,",
    greeting2: "Soy Emilio, desarrollando desde Galicia",
    experienceTitle: "Experiencia Laboral",
    contact: "¡Contáctame!",
    description: `Mi camino empezó con pequeños proyectos de videojuegos — nada especial, solo experimentos que me hicieron entrar a la programación. Desde entonces, he crecido como desarrollador full stack, valorando la arquitectura limpia, el rendimiento y una buena experiencia de usuario.`,
  },
  gl: {
    greeting1: "Boas xente,",
    greeting2: "Son Emilio, programando dende Galicia",
    experienceTitle: "Experiencia Laboral",
    contact: "Contáctame!",
    description: `O meu camiño comezou con proxectos sinxelos de videoxogos — nada moi elaborado, só experimentos que me fixeron entrar á programación. Dende entón, fun medrando como desenvolvedor full stack, valorando a arquitectura limpa, o rendemento e unha boa experiencia de usuario.`,
  }
};

const experiences = {
  en: [
    {
      title: "Full Stack Developer and Support",
      company: "Fish and Food Technology",
      location: "Milladoiro - Galicia, Spain",
      dates: "April 2023 - Feb 2025",
      description: `Contributed to the development of custom Odoo modules, streamlining internal workflows and optimizing resource management. Led deployment of multiple personalized Moodle platforms tailored to client-specific requirements. Engineered a stateless frontend using Go, interfacing seamlessly with external APIs for real-time operations. Additionally, provided cross-team technical support and mentorship, assisting colleagues in resolving technical problems. Also involved in server provisioning and environment configuration to support scalable deployments and ensure robust system reliability.`
    },
    {
      title: "Full Stack Developer",
      company: "Kiwanda Labs",
      location: "Santiago de Compostela - Galicia, Spain",
      dates: "Oct 2022 - Feb 2023",
      description: `Specialized in dynamic web development using native PHP, MySQL, and jQuery to create responsive and interactive user experiences. Built and optimized backend logic and data models while ensuring smooth client-server communication. Contributed to the development of new features within an Android application. This role provided hands-on experience in both frontend interactivity and mobile platform functionality, expanding the scope of full-stack proficiency.`
    },
    {
      title: "Swift Developer",
      company: "Digitiz-it",
      location: "Lisbon, Portugal",
      dates: "April 2022 - June 2022",
      description: `Collaborated on the development of an iOS and watchOS application designed to assist maritime navigation by connecting to an AI system via WebSocket. The app proactively alerted nearby vessels of potential collision risks, delivering real-time notifications and ensuring timely response. Leveraged the Local Push Connectivity API to maintain efficient communication and responsiveness, even in constrained network environments. This project emphasized low-latency messaging, platform-native optimization, and real-world safety-critical application design.`
    }
  ],
  es: [
    {
      title: "Desarrollador Full Stack y Soporte",
      company: "Fish and Food Technology",
      location: "Milladoiro - Galicia, España",
      dates: "Abril 2023 - Feb 2025",
      description: `Contribuí al desarrollo de módulos personalizados de Odoo, optimizando los flujos de trabajo internos y la gestión de recursos. Lideré el despliegue de múltiples plataformas Moodle personalizadas según las necesidades de los clientes. Desarrollé un frontend sin estado utilizando Go, conectado a APIs externas para operaciones en tiempo real. También brindé soporte técnico y mentoría a otros equipos, ayudando a resolver problemas técnicos. Además, participé en el aprovisionamiento de servidores y configuración de entornos para asegurar despliegues escalables y fiables.`
    },
    {
      title: "Desarrollador Full Stack",
      company: "Kiwanda Labs",
      location: "Santiago de Compostela - Galicia, España",
      dates: "Oct 2022 - Feb 2023",
      description: `Me especialicé en desarrollo web dinámico utilizando PHP nativo, MySQL y jQuery para crear experiencias interactivas y responsivas. Desarrollé y optimicé lógica backend y modelos de datos asegurando una comunicación fluida con el cliente. Contribuí al desarrollo de nuevas funcionalidades en una aplicación Android. Este rol me permitió adquirir experiencia práctica tanto en frontend como en desarrollo móvil.`
    },
    {
      title: "Desarrollador Swift",
      company: "Digitiz-it",
      location: "Lisboa, Portugal",
      dates: "Abril 2022 - Junio 2022",
      description: `Colaboré en el desarrollo de una aplicación para iOS y watchOS diseñada para asistir la navegación marítima mediante conexión a un sistema de IA vía WebSocket. La app alertaba proactivamente sobre riesgos de colisión cercanos, enviando notificaciones en tiempo real. Utilicé la API de Local Push Connectivity para mantener una comunicación eficiente incluso con redes limitadas. Este proyecto destacó por su enfoque en mensajería de baja latencia, optimización nativa de plataforma y diseño de aplicaciones críticas para la seguridad.`
    }
  ],
  gl: [
    {
      title: "Desenvolvedor Full Stack e Soporte",
      company: "Fish and Food Technology",
      location: "O Milladoiro - Galicia, España",
      dates: "Abril 2023 - Feb 2025",
      description: `Contribuín ao desenvolvemento de módulos personalizados en Odoo, optimizando os fluxos internos de traballo e a xestión de recursos. Lideréi o despregue de múltiples plataformas Moodle personalizadas segundo as necesidades dos clientes. Desenvolvín un frontend sen estado en Go, integrado con APIs externas para operacións en tempo real. Tamén prestei soporte técnico e mentoría entre equipos, axudando a resolver problemas técnicos. Ademais, participei no aprovisionamento de servidores e na configuración de contornas para asegurar despregues escalables e fiables.`
    },
    {
      title: "Desenvolvedor Full Stack",
      company: "Kiwanda Labs",
      location: "Santiago de Compostela - Galicia, España",
      dates: "Out 2022 - Feb 2023",
      description: `Especialiceime en desenvolvemento web dinámico con PHP nativo, MySQL e jQuery para crear experiencias interactivas e responsivas. Desenvolvín e optimicei a lóxica backend e os modelos de datos, asegurando unha comunicación fluída co cliente. Contribuín ao desenvolvemento de novas funcionalidades nunha aplicación Android. Este rol ofreceume experiencia práctica tanto no frontend como na funcionalidade en plataformas móbiles.`
    },
    {
      title: "Desenvolvedor Swift",
      company: "Digitiz-it",
      location: "Lisboa, Portugal",
      dates: "Abril 2022 - Xuño 2022",
      description: `Colaborei no desenvolvemento dunha aplicación para iOS e watchOS deseñada para axudar na navegación marítima, conectándose cun sistema de IA a través de WebSocket. A app alertaba proactivamente sobre riscos de colisión próximos, enviando notificacións en tempo real. Empreguei a API de Local Push Connectivity para manter unha comunicación eficiente mesmo en redes limitadas. Este proxecto destacou pola súa mensaxería de baixa latencia, optimización nativa e deseño crítico para a seguridade marítima.`
    }
  ]
};

const switchLanguage = (lang) => {
  document.getElementById("greeting1").textContent = translations[lang].greeting1;
  document.getElementById("greeting2").textContent = translations[lang].greeting2;
  document.querySelector(".section-title").textContent = translations[lang].experienceTitle;
  document.querySelector(".contact-button").textContent = translations[lang].contact;
  document.querySelector(".text-info").textContent = translations[lang].description;
};

function renderExperienceTimeline(lang = "en") {
  const timeline = document.querySelector(".timeline");
  timeline.innerHTML = "";

  experiences[lang].forEach((job) => {
    const item = document.createElement("div");
    item.className = "timeline-item";

    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3 class="job-title">${job.title}</h3>
        <span class="job-company">${job.company}</span>
        <span class="job-location">${job.location}</span>
        <span class="job-dates">${job.dates}</span>
        <p class="job-description">${job.description}</p>
      </div>
    `;

    timeline.appendChild(item);
  });
}

document.getElementById("language-select").addEventListener("change", (e) => {
  const selectedLang = e.target.value;
  localStorage.setItem("preferredLanguage", selectedLang);
  switchLanguage(selectedLang);
  renderExperienceTimeline(selectedLang);
});

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLanguage") || "en";

  // Set language selector to saved value
  document.getElementById("language-select").value = savedLang;

  switchLanguage(savedLang);
  renderExperienceTimeline(savedLang);
});