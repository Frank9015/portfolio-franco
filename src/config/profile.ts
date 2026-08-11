export interface ProjectTech {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'mobile';
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: 'Freelance' | 'Académico' | 'Enterprise';
  status: 'Live' | 'Interactive Sandbox' | 'Archived Showcase';
  summary: string;
  problem: string;
  solution: string;
  highlights: string[];
  techStack: ProjectTech[];
  liveUrl?: string;
  githubUrl?: string;
  githubMobileUrl?: string;
  role: string;
  teamCredits?: string;
}

export const PROFILE_CONFIG = {
  personal: {
    name: "Franco Alfredo Borotto Vidal",
    title: "Ingeniero en Informática (Recién Egresado)",
    shortBio: "Ingeniero en Informática recién egresado por Duoc UC. Formación integral y entusiasta por aprender y crecer en múltiples áreas TI: Desarrollo de Software, Soporte Técnico, Ciberseguridad, Redes y Consultoría Informática.",
    fullBio: "Ingeniero en Informática recién egresado por Duoc UC con formación amplia y versátil en tecnologías de la información. Poseo sólidos conocimientos en desarrollo web y móvil (Astro, React, Node.js, Python, Django, PostgreSQL), gestión de bases de datos relacionales, administración de plataformas enterprise (experiencia práctica en la Contraloría General de la República de Chile en Liferay DXP), así como fundamentos de ciberseguridad, redes y soporte técnico. Destaco por mi rápida adaptabilidad, curiosidad constante y motivación para incorporarme a equipos de Desarrollo, Soporte TI, Análisis de Sistemas o Seguridad de la Información.",
    email: "francoborottov@gmail.com",
    phone: "+56 9 9894 8474",
    location: "Santiago, Chile",
    linkedin: "https://linkedin.com/in/francoborottovidal",
    github: "https://github.com/Frank9015",
    cvPath: "/cv/Franco_Borotto_CV_ES.PDF"
  },
  
  features: {
    showInclusionLawBadge: false, // Easily toggleable for Ley 21.015 (Discapacidad Global Moderada 40%)
    enableDevToolsInspector: true,
    enableTechnicalDocTabs: true,
    enableContactNotifications: true,
  },

  strengths: [
    { title: "Versatilidad & Adaptabilidad TI", desc: "Apertura y capacidad para integrarme en áreas de Desarrollo, Soporte TI, Ciberseguridad o Consultoría." },
    { title: "Resolución de Problemas", desc: "Pensamiento analítico para diagnosticar fallas en sistemas, bases de datos y redes desde la raíz." },
    { title: "Desarrollo & Bases de Datos", desc: "Modelado relacional (PostgreSQL, SQLite, Oracle) y desarrollo full-stack moderno." },
    { title: "Aprendizaje Continuo", desc: "Motivación permanente por especializarme en nuevas tecnologías y estándares de la industria." }
  ],

  skills: {
    lenguajes: [
      { name: "TypeScript", level: "Avanzado", icon: "code" },
      { name: "JavaScript (ES6+)", level: "Avanzado", icon: "code" },
      { name: "Python", level: "Intermedio - Avanzado", icon: "terminal" },
      { name: "SQL", level: "Avanzado", icon: "database" },
      { name: "HTML5 / CSS3", level: "Avanzado", icon: "layout" }
    ],
    frameworks: [
      { name: "Astro", level: "Avanzado", icon: "rocket" },
      { name: "React 18", level: "Avanzado", icon: "atom" },
      { name: "Django", level: "Intermedio", icon: "server" },
      { name: "React Native (Expo)", level: "Intermedio", icon: "smartphone" },
      { name: "Ionic Framework", level: "Intermedio", icon: "tablet" },
      { name: "Bootstrap 5", level: "Avanzado", icon: "layout" }
    ],
    backend: [
      { name: "Node.js / Express", level: "Avanzado", icon: "server" },
      { name: "Prisma ORM", level: "Avanzado", icon: "database" },
      { name: "APIs RESTful & JWT", level: "Avanzado", icon: "shield" },
      { name: "Nodemailer", level: "Avanzado", icon: "mail" },
      { name: "Liferay DXP", level: "Nivel Practicante", icon: "layers" }
    ],
    basesDeDatos: [
      { name: "PostgreSQL", level: "Avanzado", icon: "database" },
      { name: "MySQL", level: "Avanzado", icon: "database" },
      { name: "Oracle 19c", level: "Intermedio", icon: "database" },
      { name: "SQLite", level: "Avanzado", icon: "database" }
    ],
    herramientas: [
      { name: "Git & GitHub", level: "Avanzado", icon: "git" },
      { name: "Vite", level: "Avanzado", icon: "zap" },
      { name: "Vercel", level: "Avanzado", icon: "cloud" },
      { name: "VS Code", level: "Avanzado", icon: "code" },
      { name: "SQL Developer", level: "Intermedio", icon: "database" },
      { name: "Python (Pandas/Matplotlib)", level: "Intermedio", icon: "bar-chart" }
    ]
  },

  experience: [
    {
      company: "Contraloría General de la República de Chile",
      role: "Practicante de Desarrollo de Software",
      period: "Dic. 2025 – Feb. 2026",
      location: "Santiago (Presencial)",
      type: "Práctica Profesional",
      description: "Desarrollo e integración de servicios en plataforma Liferay Enterprise para los portales de la institución.",
      bullets: [
        "Desarrollo y personalización de servicios en Liferay DXP para portales institucionales.",
        "Configuración del portal a nivel desarrollador: sitios, roles y permisos, Asset Libraries, contenido y exportación/importación LAR.",
        "Apoyo en integraciones con APIs internas, asegurando conectividad y flujo de datos continuo entre sistemas corporativos.",
        "Trabajo colaborativo bajo metodologías organizadas y cumplimiento riguroso de estándares institucionales."
      ]
    }
  ],

  education: {
    institution: "Duoc UC, Chile",
    degree: "Ingeniería en Informática",
    period: "Mar. 2019 – Mar. 2026",
    focus: "Desarrollo Web & Móvil, Bases de Datos Relacionales, Redes, Seguridad Informática y Gestión de Proyectos."
  },

  projects: [
    {
      id: "asesorias-borotto",
      title: "Asesorías Borotto",
      subtitle: "Sitio Web Corporativo y CMS a Medida",
      year: "2026 - Actualidad",
      category: "Freelance",
      status: "Live",
      summary: "Plataforma full-stack con renderizado en servidor (Astro v6 SSR), persistencia en PostgreSQL vía Prisma ORM, panel de administración privado y sistema anti-spam de reseñas verificadas.",
      problem: "Una firma contable requería presencia digital moderna, cotización dinámica de planes en UF, gestión de testimonios y un canal seguro contra spam para recibir mensajes y reseñas de clientes reales.",
      solution: "Construcción de sitio web con Astro SSR en Vercel, base de datos PostgreSQL, notificaciones automáticas por correo (Nodemailer) y un novedoso mecanismo de reseñas verficadas mediante enlaces de un solo uso con tokens UUID.",
      highlights: [
        "Modelado de datos con Prisma ORM (Planes, Servicios, Testimonios, Contactos, ReviewTokens).",
        "Panel privado CRUD para gestión de servicios y planes en UF.",
        "Mecanismo de seguridad anti-spam con enlace único vía token UUID.",
        "Notificaciones automatizadas por email y validaciones interactivas con SweetAlert2.",
        "Despliegue continuo en Vercel con sincronización automática de migraciones Prisma."
      ],
      techStack: [
        { name: "Astro v6 (SSR)", category: "frontend" },
        { name: "TypeScript", category: "frontend" },
        { name: "PostgreSQL", category: "database" },
        { name: "Prisma ORM", category: "backend" },
        { name: "Nodemailer", category: "backend" },
        { name: "Vercel", category: "cloud" }
      ],
      liveUrl: "https://asesorias-borotto.vercel.app/",
      githubUrl: "https://github.com/Frank9015/AsesoriasBorotto",
      role: "Desarrollador Full-Stack Lead"
    },
    {
      id: "inventpro",
      title: "InventPro",
      subtitle: "Sistema Omnicanal de Inventarios y Órdenes de Compra",
      year: "2025",
      category: "Académico",
      status: "Interactive Sandbox",
      summary: "Plataforma integral para PyMEs con panel Web SPA de administración de productos y órdenes de compra, más aplicación móvil en React Native para bodegueros.",
      problem: "Las PyMEs sufren desfases entre el stock registrado en oficina y las entradas/salidas reales ejecutadas en bodega, generando quiebres de inventario y pérdidas financieras.",
      solution: "Arquitectura desacoplada con API REST (Node.js/Express + PostgreSQL), cliente Web SPA en React 18 + Vite para gerencia, y app móvil Expo para control de movimientos en bodega en tiempo real.",
      highlights: [
        "Arquitectura omnicanal: Web SPA para gestión de compras + Móvil Expo para operarios de bodega.",
        "Autenticación segura JWT y control de acceso basado en roles (RBAC).",
        "Alertas automáticas de stock crítico e historial de movimientos de inventario.",
        "Módulo de órdenes de compra con flujo de estados (Pendiente ➔ Aprobada ➔ Recibida)."
      ],
      techStack: [
        { name: "React 18", category: "frontend" },
        { name: "React Native (Expo)", category: "mobile" },
        { name: "Vite", category: "frontend" },
        { name: "Node.js / Express", category: "backend" },
        { name: "PostgreSQL", category: "database" },
        { name: "JWT", category: "backend" }
      ],
      githubUrl: "https://github.com/JavierHermosilla/inventPro-backend",
      role: "Desarrollador Frontend & Integración Móvil",
      teamCredits: "Proyecto académico desarrollado en equipo en Duoc UC (Colaboración con Javier Hermosilla y Claudio Soto)."
    },
    {
      id: "registra-app",
      title: "Registra APP",
      subtitle: "Sistema de Control Asistencial Académico por QR",
      year: "2023",
      category: "Académico",
      status: "Interactive Sandbox",
      summary: "Ecosistema de control de asistencia universitaria en tiempo real mediante generación y escaneo de códigos QR dinámicos entre aplicación docente e inquisidores móviles.",
      problem: "El registro manual de asistencia en aulas universitarias consume hasta 10 minutos por clase y es propenso a inconsistencias o suplantación.",
      solution: "Desarrollo de API REST en Django para administración de asignaturas y clases, con generación dinámica de QR e integración con App móvil en Ionic para lectura instantánea.",
      highlights: [
        "Procesamiento de QR dinámicos con Pillow & qrcode en backend Django.",
        "Módulo Alumno (Ionic Móvil) para marcaje con cámara y confirmación inmediata.",
        "Módulo Docente (Django Web) para apertura de clases y monitoreo de asistencia en vivo.",
        "Cálculo automático de porcentaje de asistencia exigido por ramo."
      ],
      techStack: [
        { name: "Django REST Framework", category: "backend" },
        { name: "Ionic Framework", category: "mobile" },
        { name: "Python", category: "backend" },
        { name: "SQLite", category: "database" },
        { name: "QR Engine (Pillow)", category: "backend" }
      ],
      githubUrl: "https://github.com/Franko9015/WebDocenteRegistroApp-Django32",
      githubMobileUrl: "https://github.com/Franko9015/ProjectoSemestralMovil2023",
      role: "Desarrollador Lead Web & Móvil",
      teamCredits: "Proyecto en equipo Duoc UC (Desarrollado en conjunto con Luis Valenzuela)."
    },
    {
      id: "caosnews",
      title: "CaosNews",
      subtitle: "Portal de Noticias con Moderación Jerárquica",
      year: "2023",
      category: "Académico",
      status: "Interactive Sandbox",
      summary: "Portal de periodismo colaborativo desarrollado en Django con arquitectura MVT, soporte de múltiples roles de usuario y flujo de aprobación editorial.",
      problem: "Crear una plataforma de noticias donde redactores externos puedan subir noticias, pero sólo los editores aprobados puedan publicarlas en la portada pública.",
      solution: "Implementación de sistema de permisos granulares en Django (Visitante, Lector, Periodista, Editor/Admin) con panel de moderación, categorización y carga de multimedia.",
      highlights: [
        "Control de acceso basado en roles (RBAC) integrado con Django Auth System.",
        "Flujo editorial completo: Redacción ➔ Pendiente de Revisión ➔ Aprobación ➔ Publicación.",
        "Diseño adaptativo con plantillas dinámicas Jinja/Django y persistencia relacional.",
        "Panel de administración para gestión de usuarios y moderación de comentarios."
      ],
      techStack: [
        { name: "Django", category: "backend" },
        { name: "Python", category: "backend" },
        { name: "SQLite / Oracle 19c", category: "database" },
        { name: "HTML5 / CSS3", category: "frontend" },
        { name: "Bootstrap", category: "frontend" }
      ],
      githubUrl: "https://github.com/Franko9015/Proyectosemestral2023-django",
      role: "Desarrollador Full-Stack Lead"
    }
  ]
};
