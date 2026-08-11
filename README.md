# Portafolio Profesional & Demostraciones Interactivas — Franco Borotto Vidal

[![Astro](https://img.shields.io/badge/Astro-v6-orange.svg)](https://astro.build/)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20-green.svg)](https://nodejs.org/)
[![Docker](https://img.shields.io/badge/Docker-Containers-blue.svg)](https://www.docker.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black.svg)](https://vercel.com/)

Bienvenido al repositorio oficial del portafolio profesional de **Franco Borotto Vidal**, Ingeniero en Informática (Recién Egresado por Duoc UC). Este proyecto integra una consola web moderna en **Astro v6 SSR + React 19**, junto a un entorno de **emulaciones e interacción en vivo en Docker (Sandboxes 1:1)** para demostrar competencias reales en desarrollo Web Full-Stack, Aplicaciones Móviles (Expo / Ionic), consumo de APIs REST, modelado de Bases de Datos y Dockerización de software.

---

## 📚 Documentación Técnica por Proyecto

Accede a las especificaciones técnicas detalladas, esquemas de bases de datos, diagramas de arquitectura Mermaid y guías de instalación local de cada uno de los proyectos desarrollados:

| Proyecto | Tipo / Categoría | Stack Principal | Documentación Técnica |
| :--- | :--- | :--- | :--- |
| **Asesorías Borotto** | Freelance Enterprise | Astro v6 SSR · PostgreSQL · Prisma ORM | [📄 Ver Documentación Completa](docs/asesorias-borotto.md) |
| **InventPro** | Académico Duoc UC | React 19 · Node.js Express · Expo Native · PostgreSQL | [📄 Ver Documentación Completa](docs/inventpro.md) |
| **Registra APP** | Académico Duoc UC | Django 4.1 · Ionic Framework · Python QR Engine | [📄 Ver Documentación Completa](docs/registra-app.md) |
| **CaosNews** | Académico Duoc UC | Django 4.2 · SQLite / Oracle 19c · Bootstrap 5 | [📄 Ver Documentación Completa](docs/caosnews.md) |

---

## 🕹️ Entorno de Demostraciones en Vivo (Docker Sandboxes)

El portafolio incluye contenedores Docker aislados que permiten probar la experiencia completa de usuario y paneles administrativos de los proyectos originales sin alterar bases de datos de producción:

```bash
# Clona el repositorio
git clone https://github.com/Frank9015/portfolio-franco.git
cd portfolio-franco/docker_demos

# Levanta todo el ecosistema de demos en 1 comando:
docker compose up -d --build
```

### Puertos de Servicio Local:
* 🌐 **Portafolio Web Principal:** [`http://localhost:4321/`](http://localhost:4321/)
* 💼 **Asesorías Borotto:** [`http://localhost:4321/proyectos/asesorias-borotto`](http://localhost:4321/proyectos/asesorias-borotto)
* 📦 **InventPro Web SPA:** [`http://localhost:8003/`](http://localhost:8003/) *(Admin: `admin@inventpro.cl` / `Admin123$`)*
* 📱 **InventPro Bodeguero (Expo Móvil):** [`http://localhost:8005/`](http://localhost:8005/) *(Bodeguero: `bodeguero@inventpro.cl` / `Admin123$`)*
* 📑 **InventPro REST API Swagger:** [`http://localhost:3001/api-docs/`](http://localhost:3001/api-docs/)
* 🎓 **RegistraApp Web Docente:** [`http://localhost:8002/`](http://localhost:8002/) *(Admin: `admin` / `admin123`)*
* 📱 **RegistraApp Ionic Móvil:** [`http://localhost:8100/`](http://localhost:8100/) *(Estudiante: `estudiante` / `1234`)*
* 📰 **CaosNews Portal:** [`http://localhost:8001/`](http://localhost:8001/) *(Editor: `admin` / `admin123`)*

---

## 👨‍💻 Sobre el Autor

**Franco Alfredo Borotto Vidal**  
* **Título:** Ingeniero en Informática (Recién Egresado por Duoc UC)  
* **Contacto:** [francoborottov@gmail.com](mailto:francoborottov@gmail.com) | +56 9 9894 8474  
* **LinkedIn:** [linkedin.com/in/francoborottovidal](https://linkedin.com/in/francoborottovidal)  
* **GitHub:** [github.com/Frank9015](https://github.com/Frank9015)  
