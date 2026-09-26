export const contactEmail = "work.mmstudio@gmail.com";
export const contactHref = `mailto:${contactEmail}?subject=${encodeURIComponent("Información sobre un proyecto")}&body=${encodeURIComponent("Hola, Miros:\n\nHe visto tu trabajo en la web de MM WORKS y me gustaría pedirte información para un proyecto.\n\nMi idea es:\n\n¿Podemos hablar sobre las opciones y el presupuesto?\n\nGracias.")}`;

export type Project = {
  id: string; name: string; category: string; title: string; description: string;
  status: string; scope: string[]; note: string;
  image?: { src: string; alt: string; width: number; height: number; caption: string };
  url?: string;
};

export const projects: Project[] = [
  {
    id: "juan-domingo", name: "Juan Domingo", category: "Web / Cultura del running",
    title: "No corres solo. Tampoco al elegir tus zapatillas.",
    description: "Una experiencia para Juan Domingo Running, en Puerto Lumbreras. El corredor descubre su perfil, explora una selección orientativa y prepara una conversación con Juan. La comunidad forma parte del recorrido.",
    status: "Web en desarrollo",
    scope: ["Dirección visual y desarrollo web", "Perfil interactivo ADN Runner", "Comunidad y contacto por WhatsApp"],
    note: "Versión en desarrollo. El perfil interactivo ya funciona; la selección de zapatillas utiliza modelos de demostración y sigue pendiente de validar con el catálogo real.",
    image: { src: "/projects/juan-domingo-hero.jpg", alt: "Fotograma del corredor utilizado en la portada de Juan Domingo Running.", width: 1920, height: 1080, caption: "Visual de la portada del proyecto · Juan Domingo Running" },
  },
  {
    id: "brket", name: "BRKET", category: "Producto / Sistema de diseño",
    title: "Primero, una base que aguante el producto.",
    description: "BRKET es un proyecto de plataforma para clubes de pádel. El trabajo actual define su arquitectura y su sistema de diseño: color, tipografía, componentes y estados de interacción.",
    status: "Base de producto en desarrollo",
    scope: ["Arquitectura modular", "Sistema de diseño y componentes", "Catálogo de interfaz y revisión de accesibilidad"],
    note: "Fase actual: sistema de diseño y componentes. La imagen muestra esta base de trabajo. La gestión de torneos forma parte de las siguientes etapas.",
    image: { src: "/projects/brket-foundation.png", alt: "Captura real de los fundamentos del sistema de diseño BRKET: paleta, tipografía y espaciado.", width: 1216, height: 1091, caption: "Captura del sistema de diseño · BRKET Foundation" },
  },
  {
    id: "tramicalma", name: "TramiCalma", category: "Web / Contenido y diagnóstico",
    title: "Del bloqueo digital al siguiente paso.",
    description: "Una herramienta independiente de ayuda con certificado digital, AutoFirma y trámites online. Combina preguntas guiadas, instrucciones claras y enlaces a fuentes oficiales, sin pedir certificados ni credenciales.",
    status: "Web pública",
    scope: ["Estructura de contenido y navegación", "Asistentes de diagnóstico", "Guías técnicas y organización SEO"],
    note: "Disponible en tramicalma.es. Puedes recorrer los diagnósticos y consultar las guías. Es un proyecto independiente de las administraciones públicas.",
    url: "https://tramicalma.es/",
  },
  {
    id: "hausfix", name: "Hausfix", category: "Web / Servicios locales",
    title: "Una urgencia. Un camino claro al contacto.",
    description: "Web en francés para Hausfix Romandie, un negocio de cerrajería y fontanería en Valais y la Riviera vaudoise. La información se organiza por servicio y zona, con acceso directo al contacto.",
    status: "Diseño y desarrollo web",
    scope: ["Presentación de servicios y cobertura local", "Jerarquía de contenido en francés", "Contacto y estructura para búsquedas locales"],
    note: "El trabajo se centra en presentar los servicios y facilitar el contacto en el ámbito local.",
  },
  {
    id: "buddypadel", name: "BuddyPadel", category: "Producto / Gestión de clubes",
    title: "La reserva y el día a día del club, en el mismo sitio.",
    description: "Un producto para gestionar reservas de pistas de pádel. Incluye el recorrido del jugador y un panel para la agenda, las reservas, los bloqueos y los cobros del club.",
    status: "Piloto en preparación",
    scope: ["Cuenta del jugador, disponibilidad y reservas", "Agenda y operaciones del club", "Permisos y reglas de reserva"],
    note: "Piloto en preparación. El recorrido principal está implementado; la validación completa de las reservas es el siguiente paso antes de abrirlo sin supervisión.",
  },
];

export const disciplines = [
  { name: "Dirección creativa", index: "01", text: "Encontrar la idea que merece existir. Definir el concepto, el tono y la dirección de cada pieza para que todo tenga una intención." },
  { name: "Identidad & marcas", index: "02", text: "Una marca tiene que reconocerse y tener algo que decir. Creamos su lenguaje visual y verbal, y un sistema capaz de crecer con ella." },
  { name: "Webs & experiencias", index: "03", text: "Un lugar propio en internet. Diseñamos y desarrollamos webs que explican bien, se sienten distintas y hacen fácil dar el siguiente paso." },
  { name: "Productos & sistemas", index: "04", text: "Convertimos procesos e ideas en herramientas que se pueden usar. Del primer flujo al producto, con diseño y desarrollo en la misma mesa." },
  { name: "Campañas & contenido", index: "05", text: "Conceptos que funcionan en una pantalla, en la calle o en un feed. Piezas con una idea detrás y una identidad que se mantiene al cambiar de formato." },
];

export const articles = [
  { id: "que-se-adapte", category: "MM//POV", title: "Que se adapte la web.", label: "MM//POV 003 · Del archivo", image: "/world/que-se-adapte-la-web.png", alt: "Pieza original MM//POV 003: una estructura se adapta al contorno de una cafetera.", paragraphs: ["El negocio tiene una forma de trabajar. La web tiene que responder a ella. En MM//POV 003, una matriz de piezas se adapta al perfil de una cafetera intacta: el soporte cambia, el objeto conserva su función.", "La campaña parte de una pregunta concreta: ¿qué tiene que hacer esta web? Facilitar el contacto, permitir una reserva o ayudar a empezar piden decisiones distintas.", "Esta portada pertenece al archivo creativo de MM WORKS. Es una pieza conceptual de marca; no representa un cliente ni un resultado comercial."] },
  { id: "colores-que-trabajan", category: "MM//BREAKDOWN", title: "Colores que trabajan.", label: "MM//BREAKDOWN 001 · Del archivo", image: "/world/colores-que-trabajan.png", alt: "Pieza original Colores que trabajan: una piedra suspendida por cintas naranjas sobre un fondo verde.", paragraphs: ["El color puede ordenar, señalar o dar carácter. MM//BREAKDOWN 001 explora cinco direcciones de color a través de materiales, objetos y composiciones con una función visual clara.", "La portada cruza el peso de una piedra con la tensión de unas cintas. Verde, naranja y oscuro se reparten el fondo, la acción y la lectura.", "Es una exploración de dirección creativa del archivo de MM WORKS. Las paletas son propuestas visuales, no casos de clientes ni pruebas de rendimiento."] },
  { id: "physical-digital", category: "MM//LAB", title: "De la materia a la pantalla.", label: "La Home · Dentro del proceso", image: "/images/idea-machine.png", alt: "La máquina de ideas creada para la Home de MM WORKS.", paragraphs: ["El metal tiene peso. El papel tiene pliegues. Una pantalla no tiene por qué borrar esas cualidades. Nos interesa traducirlas con una intención.", "En THE IDEA MACHINE, una hoja arrugada entra en una prensa y sale convertida en una pieza sólida. La imagen se creó con generación de imagen y dirección creativa para esta Home: cuenta cómo una intuición toma forma.", "Es una máquina conceptual. Su trabajo es explicar una idea; el trabajo de la web es ayudarte a entender qué hacemos y empezar una conversación."] },
];
