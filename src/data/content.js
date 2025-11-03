// src/content.js

export const portfolioContent = {
  en: {
    nav: {
      home: "Home",
      about: "About Me",
      projects: "Projects",
      clients: "Clients",
      contact: "Contact",
    },
    home: {
      greeting: "Hi, I'm Howard Garcia",
      title: "As a software developer ready to take on new challenges, I'm passionate about building clean, efficient, and user-friendly applications. I'm a quick learner and a strong communicator, always eager to expand my skills and collaborate on exciting projects.",
      cta: "Contact me",
    },
    about: {
      headline: "Who am I?",
      paragraph1: `Hi, I'm <HILIGHT_NAME>, a freshly graduated software developer eager to grow and take on new challenges. 
                    I’m passionate about creating clean, efficient, and user-friendly applications, and I’m always looking for opportunities to learn from experienced teams and contribute to meaningful projects.`,
      paragraph2: `While most of my experience has been focused on <HILIGHT_WEBDEV>, I’m also fascinated by the world of <HILIGHT_IOT> (Internet of Things). 
                    I’ve worked with microcontrollers such as the <HILIGHT_ESP32>, <HILIGHT_ESP8266>, and <HILIGHT_ARDUINO>, exploring how hardware and software can come together to create innovative solutions.`,
      paragraph3: ` I consider myself a <HILIGHT_FASTLEARNER>, a <HILIGHT_PROBLEMSOLVER>, and someone who thrives in collaborative environments. 
                    I’m currently <HILIGHT_OPENFORWORK>, looking for a place where I can continue to learn, grow, and make an impact through technology.`,
    },
    timeline: {
      title: 'My Journey',
      items: [
        {
          title: "Software Engineering",
          subtitle: "Universidad Tecnológica de Tijuana",
          date: "2025 - Present",
          description: "I just graduated with a software engineering degree, but my official title and diploma are still pending. Thus the certificate of completion for now.",
          side: "left",
        },
        {
          title: "Front-End Developer Internship",
          subtitle: "Itransition",
          date: "Summer 2025",
          description: "Developed responsive user interfaces and collaborated with a team to build a new feature.",
          side: "right",
        },
        {
          title: "Project Manager Certificate",
          subtitle: "Universidad Tecnológica de Tijuana",
          date: "Summer 2025",
          description: "Completed training and received certification in project management methodologies.",
          side: "left",
        },
        {
          title: "TSU in Software Development",
          subtitle: "Universidad Tecnológica de Tijuana",
          date: "2021 - 2024",
          description: "Acquired foundational knowledge in programming, databases, and software design principles.",
          side: "right",
        },
      ]
    },
    clients: {
      title: "My Clients",
      buttonText: "Visit",
      items: [
        {
          title: "Clúster Inmobiliario Turístico del estado de Baja California",
          subtitle: "Company management web app",
          description: `A custom-built web application to steamline the company's annual conference operations. This application fully automates event logistics—from user registration and attendance tracking—to the complete lifecycle of article submissions. It features an integrated, role-based workflow for staff to review, accept, or reject papers, with automated email notifications for all key stakeholders, ensuring an efficient path to digital magazine publication; all while offering administrative control over public-facing content via a dynamic CMS.`,
        },
      ]
    },
    projects: {
      title: "Projects",
      // INJECTED PROJECTS TEXT (ENGLISH)
      items: [
        {
          title: "Imjuver Conecta",
          subtitle: "Content Manager",
          description: "Content Manager web app for the government, designed to show posts, job listings, contacts, proposals, and courses for youth where they can apply and use them directly in the web app.",
        },
        {
          title: "WareBox",
          subtitle: "Logistics web app",
          description: "Web application used to plan routes, track stock in different warehouses, manage a trailer truck fleet, provide live tracking, and handle restocking.",
        },
        {
          title: "WareBox mobile app",
          subtitle: "Route Navigation for drivers",
          description: "Native Android app that allows driver employees to see their routes for the day, departures, and estimated arrival times, and includes GPS navigation for the created route in the web app. The app can scan the boxes of the cargo and show contents for inventory users, and it also registers boxes and their contents linked to an order.",
        },
        {
          title: "Washington",
          subtitle: "Inventory web app",
          description: "Inventory web app for the fictional cleaning supplies company, 'Washington.' Independent stores can create restock requests to the main warehouse that pass through different states when the request is being prepared. It shows the main inventory and individual store inventories.",
        },
        {
          title: "Washington Mobile App",
          subtitle: "Inventory native app",
          description: "Working with the same Washington API, this app lets inventory users scan QR/bar codes to view item information. It also processes stock requests from the main web app, allowing users to scan requests, update, confirm/cancel their status, or log their arrival.",
        },
        {
          title: "Washington Wearable App",
          subtitle: "Simple notificarion wearable app",
          description: "Working with the same Washington API, this app notifies selected user roles of the restock request being made, allowing them to confirm or cancel it. Users can also see at first glance the contents of the orders and related information.",
        },
        {
          title: "SmartPipes",
          subtitle: "Inventory - Production Line",
          description: "Web app for the fictional 'SmartPipes' hydroponic systems company where users can see the inventory of specific warehouses, create restock requests, and manage 'factories' that have production lines. An assembly order can be made to a specific factory and production line where the user, based on the stock, can create a set number of hydroponic systems and retrieve the necessary materials from the warehouses that have them.",
        },
        {
            title: "Simple React-TS Inventory",
            subtitle: "Simple Inventory",
            description: "Repository containing the code for the labs that use react ts and vite to create an inventory system",
        },
        {
            title: "Seed-Based Book Generator",
            subtitle: "Book-generator",
            description: "This project is a web application designed to generate and display a continuous stream of mock book data. Utilizing @faker-js/faker, it produces randomized book titles, authors, publishers, publication years, and covers. A key feature is its seed-based generation, which ensures that the core details of a book remain stable and reproducible whenever the same seed is used, even if other generated attributes, like likes or reviews, are adjusted.",
        },
        {
            title: "Simple user management",
            subtitle: "User management",
            description: "Simple user management where users can register and log in. Users can be deleted or blocked, and these changes take place immediately, leading to the user being kicked out.",
        },
        {
            title: "Dice Game",
            subtitle: "Dice Game",
            description: "A cryptographic implementation of intransitive dice relationships with provably fair random number generation (not just any dice game). Features: Configurable dice via command line arguments; Provably fair HMAC-SHA3-256 random number generation; Probability tables showing dice relationships; Alternating turns with enforced unique dice selection",
        }
      ]
    },
    contact: {
      formTitle: 'Get in touch',
      formSubmittedTitle: 'Message Sent!',
      detailsTitle: 'My Details',
      contactInfo: [
        {
          title: "Email",
          value: "howardisaigarciaarreola@gmail.com",
        },
        {
          title: "Phone",
          value: "661 146 3164",
        },
        {
          title: "Location",
          value: "Playas de Rosarito, BC",
        }
      ],
      form: {
        messageTitle: "Send Me a Message",
        placeholderName: "Your Name or Company",
        placeholderEmail: "Your Email Address",
        placeholderSubject: "Subject",
        placeholderMessage: "Your Message",
        buttonText: "Send Message",
        successText: "Thanks for reaching out! I'll review your message and get back to you as soon as possible.",
      }
    },
    footer: {
      tagline: "Crafting seamless digital experiences one component at a time.",
      copyright: "All rights reserved.",
    }
  },

  // --- SPANISH (ES) VERSION ---
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      projects: "Proyectos",
      clients: "Clientes",
      contact: "Contacto",
    },
    home: {
      greeting: "Hola, soy Howard Garcia",
      title: "Como desarrollador de software listo para asumir nuevos desafíos, me apasiona construir aplicaciones limpias, eficientes y fáciles de usar. Aprendo rápido, tengo buenas habilidades de comunicación y siempre estoy ansioso por expandir mis conocimientos y colaborar en proyectos emocionantes.",
      cta: "Contáctame",
    },
   about: {
      headline: "¿Quién soy?",
      paragraph1: `Hola, soy <HILIGHT_NAME>, un desarrollador de software recién graduado, con muchas ganas de crecer y asumir nuevos desafíos. Me apasiona crear aplicaciones limpias, eficientes y amigables con el usuario, y siempre estoy buscando oportunidades para aprender de equipos experimentados y contribuir a proyectos significativos.`,
      paragraph2: `Aunque la mayor parte de mi experiencia se ha centrado en el <HILIGHT_WEBDEV>, también me fascina el mundo del <HILIGHT_IOT> (Internet de las Cosas). He trabajado con microcontroladores como <HILIGHT_ESP32>, <HILIGHT_ESP8266> y <HILIGHT_ARDUINO>, explorando cómo el hardware y el software pueden unirse para crear soluciones innovadoras.`,
      paragraph3: ` Me considero un <HILIGHT_FASTLEARNER>, un <HILIGHT_PROBLEMSOLVER> y alguien que prospera en entornos colaborativos. Actualmente estoy <HILIGHT_OPENFORWORK>, buscando un lugar donde pueda seguir aprendiendo, creciendo y generando un impacto a través de la tecnología.`,
    },
    timeline: {
      title: 'Mi Trayectoria',
      items: [
        {
          title: "Ingeniería de Software",
          subtitle: "Universidad Tecnológica de Tijuana",
          date: "2025 - Actualidad",
          description: "Acabo de graduarme con un título de ingeniería de software, pero mi título y diploma oficial aún están en trámite. Por ahora, utilizo el certificado de finalización.",
          side: "left",
        },
        {
          title: "Prácticas de Desarrollador Front-End",
          subtitle: "Itransition",
          date: "Verano 2025",
          description: "Desarrollé interfaces de usuario responsivas y colaboré con un equipo para construir una nueva funcionalidad.",
          side: "right",
        },
        {
          title: "Certificado de Gerente de Proyecto",
          subtitle: "Universidad Tecnológica de Tijuana",
          date: "Verano 2025",
          description: "Completé la formación y recibí la certificación en metodologías de gestión de proyectos.",
          side: "left",
        },
        {
          title: "TSU en Desarrollo de Software",
          subtitle: "Universidad Tecnológica de Tijuana",
          date: "2021 - 2024",
          description: "Adquirí conocimientos fundamentales en programación, bases de datos y principios de diseño de software.",
          side: "right",
        },
      ]
    },
    clients: {
      title: "Clientes y Experiencia",
      buttonText: "Visitar",
      items: [
        {
          title: "Clúster Inmobiliario Turístico del estado de Baja California",
          subtitle: "Aplicación web de gestión empresarial",
          description: `Una aplicación web personalizada para optimizar las operaciones de la conferencia anual de la empresa. Esta aplicación automatiza completamente la logística del evento, desde el registro de usuarios y el seguimiento de asistencia, hasta el ciclo de vida completo de las propuestas de artículos. Cuenta con un flujo de trabajo integrado basado en roles para que el personal revise, acepte o rechace documentos, con notificaciones automáticas por correo electrónico para todos los actores clave, asegurando un camino eficiente hacia la publicación en la revista digital; todo mientras ofrece control administrativo sobre el contenido público a través de un CMS dinámico.`,
        },
      ]
    },
    projects: {
      title: "Proyectos Personales",
      // INJECTED PROJECTS TEXT (SPANISH)
      items: [
        {
          title: "Imjuver Conecta",
          subtitle: "Gestor de Contenidos",
          description: "Aplicación web de gestión de contenidos para el gobierno, diseñada para mostrar publicaciones, ofertas de trabajo, contactos, propuestas y cursos para jóvenes donde pueden aplicar y utilizarlos directamente en la aplicación web.",
        },
        {
          title: "WareBox",
          subtitle: "Aplicación web de Logística",
          description: "Aplicación web utilizada para planificar rutas, rastrear el stock en diferentes almacenes, gestionar una flota de camiones de remolque, proporcionar seguimiento en vivo y manejar el reabastecimiento.",
        },
        {
          title: "WareBox App Móvil",
          subtitle: "Navegación de Rutas para Conductores",
          description: "Aplicación nativa de Android que permite a los empleados conductores ver sus rutas del día, salidas y tiempos estimados de llegada, e incluye navegación GPS para la ruta creada en la aplicación web. La aplicación puede escanear las cajas de la carga y mostrar su contenido a los usuarios de inventario, y también registra cajas y su contenido vinculado a un pedido.",
        },
        {
          title: "Washington",
          subtitle: "Aplicación web de Inventario",
          description: "Aplicación web de inventario para la compañía ficticia de suministros de limpieza, 'Washington'. Las tiendas independientes pueden crear solicitudes de reabastecimiento al almacén principal que pasan por diferentes estados a medida que se prepara la solicitud. Muestra el inventario principal y los inventarios individuales de las tiendas.",
        },
        {
          title: "Washington App Móvil",
          subtitle: "Aplicación nativa de Inventario",
          description: "Trabajando con la misma API de Washington, esta aplicación permite a los usuarios de inventario escanear códigos QR/barras para ver la información del artículo. También procesa las solicitudes de stock de la aplicación web principal, permitiendo a los usuarios escanear solicitudes, actualizar, confirmar/cancelar su estado, o registrar su llegada.",
        },
        {
          title: "Washington App Wearable",
          subtitle: "Aplicación simple de notificaciones para wearable",
          description: "Trabajando con la misma API de Washington, esta aplicación notifica a roles de usuario seleccionados sobre las solicitudes de reabastecimiento realizadas, permitiéndoles confirmarlas o cancelarlas. Los usuarios también pueden ver de un vistazo el contenido de los pedidos e información relacionada.",
        },
        {
          title: "SmartPipes",
          subtitle: "Inventario - Línea de Producción",
          description: "Aplicación web para la empresa ficticia de sistemas hidropónicos 'SmartPipes' donde los usuarios pueden ver el inventario de almacenes específicos, crear solicitudes de reabastecimiento y gestionar 'fábricas' que tienen líneas de producción. Se puede hacer un pedido de ensamblaje a una fábrica y línea de producción específica donde el usuario, basado en el stock, puede crear un número determinado de sistemas hidropónicos y recuperar los materiales necesarios de los almacenes que los tienen.",
        },
        {
          title: "Inventario Simple con React-TS",
          subtitle: "Inventario Simple",
          description: "Repositorio que contiene el código para los laboratorios que utilizan React, TypeScript y Vite para crear un sistema de inventario.",
        },
        {
          title: "Generador de Libros Basado en Semilla",
          subtitle: "Generador de Libros",
          description: "Este proyecto es una aplicación web diseñada para generar y mostrar un flujo continuo de datos simulados de libros. Utilizando @faker-js/faker, produce títulos, autores, editoriales, años de publicación y portadas aleatorios. Una característica clave es su generación basada en semillas, que asegura que los detalles principales de un libro permanezcan estables y reproducibles siempre que se utilice la misma semilla, incluso si otros atributos generados, como 'Me gusta' o reseñas, se ajustan.",
        },
        {
          title: "Gestión Simple de Usuarios",
          subtitle: "Gestión de Usuarios",
          description: "Gestión de usuarios simple donde el usuario puede registrarse e iniciar sesión. Los usuarios pueden ser eliminados o bloqueados, y los cambios surten efecto inmediatamente, expulsando al usuario afectado.",
        },
        {
          title: "Juego de Dados",
          subtitle: "Juego de Dados",
          description: "Una implementación criptográfica de relaciones de dados intransitivas con generación de números aleatorios demostrablemente justa (no es solo un juego de dados cualquiera). Características: Dados configurables a través de argumentos de línea de comandos; Generación de números aleatorios Provably Fair HMAC-SHA3-256; Tablas de probabilidad que muestran las relaciones entre los dados; Turnos alternos con selección de dados única y forzada.",
        }
      ]
    },
    contact: {
      formTitle: 'Contáctame',
      formSubmittedTitle: '¡Mensaje Enviado!',
      detailsTitle: 'Mis Datos',
      contactInfo: [
        {
          title: "Correo Electrónico",
          value: "howardisaigarciaarreola@gmail.com",
        },
        {
          title: "Teléfono",
          value: "661 146 3164",
        },
        {
          title: "Ubicación",
          value: "Playas de Rosarito, BC",
        }
      ],
      form: {
        messageTitle: "Envíame un Mensaje",
        placeholderName: "Tu Nombre o Empresa",
        placeholderEmail: "Tu Correo Electrónico",
        placeholderSubject: "Asunto",
        placeholderMessage: "Tu Mensaje",
        buttonText: "Enviar Mensaje",
        successText: "¡Gracias por contactarme! Revisaré tu mensaje y me pondré en contacto contigo lo antes posible.",
      }
    },
    footer: {
      tagline: "Creando experiencias digitales fluidas, un componente a la vez.",
      copyright: "Todos los derechos reservados.",
    }
  }
};