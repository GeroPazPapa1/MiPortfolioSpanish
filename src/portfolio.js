/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Paz Papa",
  title: "Hola, soy Gero!",
  subTitle: emoji(
    "Un apasionado ingenierio y desarrollador web Full Stack 🚀con experiencia en tecnologías como JavaScript / React / Node / Express y algunos otros frameworks interesantes. Marketing e ingeniería mis otras dos pasiones!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1mCdq0QF7SLpYvg2sXBzSc3xV65Lbp2RH/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "www.linkedin.com/in/gerónimo-nicolás-paz-papa",
  github: "https://github.com/GeroPazPapa1",
  gmail: "geronimonicolaspazpapa@gmail.com",
  twitter: "https://twitter.com/IngeEnPrograma",
  //linktree: "https://linktr.ee/geronimonicolaspazpapa",
  //gitlab: "https://linktr.ee/geronimonicolaspazpapa",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Tecnologías1",
  subTitle:
    "Soy un desarrollador copado que le gusta investigar diferentes tech stack y tambien ademas, aprender de los compañeros!",
  skills: [
    emoji(
      "⚡ Desarrollo proyectos web en Front-end / Back-end, altamente interactivas para sus aplicaciones web y móviles"
    ),
    emoji(
      "⚡ Trabajo también en marketing, realizando activaciones de marca, como en edición de videos / fotos también"
    ),
    emoji(
      "⚡ Busco la manera de resolver procesos y problemas de manera eficiente y practica, con una mirada ingenieril"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JAVASCRIPT",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "EXPRESS JS",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "REACT JS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NODE JS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "SLACK",
      fontAwesomeClassname: "fab fa-slack"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "POSTGRES-SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "FIREBASE",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "TRELLO",
      fontAwesomeClassname: "fab fa-trello"
    },
    {
      skillName: "BOOTSTRAP",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "SCRUM",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "GIT",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "INGLÉS",
      fontAwesomeClassname: "fas fa-globe"
    },
    {
      skillName: "squarespace",
      fontAwesomeClassname: "fab fa-squarespace"
    },
    {
      skillName: "FB ADS",
      fontAwesomeClassname: "fab fa-facebook"
    },
    {
      skillName: "FIGMA",
      fontAwesomeClassname: "fab fa-figma"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Henry",
      logo: require("./assets/images/henryLogo.png"),
      subHeader: "Full Stack Web Developer",
      duration: "Mayo 2023 - Septiembre 2023",
      desc: "800 Horas",
      descBullets: ["800 hs de cursado teórico-práctico"]
    },
    {
      schoolName: "Universidad del Norte Santo Tomas de Aquino",
      logo: require("./assets/images/unstaLogo.png"),
      subHeader: "Ingeniero Industrial",
      duration: "Marzo 2017 - Febrero 2023",
      desc: "Entre las universidades mas importante del norte del pais, enfocada en las ingenierias",
      descBullets: ["Titulo de ingeniero, con validez a nivel internacional."]
    },
    {
      schoolName: "FASTA Ángel María Boisdron",
      logo: require("./assets/images/BoisdronLogo.png"),
      subHeader: "Colegio Ciencias y Tecnologías",
      duration: "Marzo 2010 - Diciembre 2016",
      //desc: "800 Horas",
      descBullets: ["Especializado en Ciencias y Tecnologías"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Diseño en imagenes / videos",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer, Marketing",
      company: "Freelance",
      companylogo: require("./assets/images/fullstackLogo.jpg"),
      date: "Mar 2020 - Actual",
      desc: "Argentina/Estados Unidos.",
      descBullets: [
        "Desarrollar e-commerce, landing pages y aplicaciones web utilizando (React, Redux, Axios, Node js , Express, Morgan, Cors, Dotenv y plantillas)",
        "Estrategias de marketing en plataformas digitales. Uso de: Adobe Illustrator, Photoshop, Figma entre otras)",
        "Publicidad utilizando en meta ads, para campañas en redes sociales",
        "Creación de identidad visual de marca"
      ]
    },
    {
      role: "Community Manager",
      company: "Scale Webs Miami",
      companylogo: require("./assets/images/scaleLogo.jpg"),
      date: "Jun 2023 - Actual",
      desc: "Freelance",
      descBullets: [
        "Gestión de redes sociales en base a una planificacíon mensual para cada red social requerida.",
        "Interacción con la audiencia: Responder preguntas, comentarios y mensajes para mantener una comunicación activa. ",
        "Análisis de métricas: Seguimiento de estadísticas de redes sociales para mejorar estrategias y alcance.",
        "Creador de contenido atractivo y relevante.",
        "Marketing estratégico, planificación de campañas y promociones"
      ]
    },
    {
      role: "Nueva York, Manhattan",
      company: "Gerenciamiento y Pág web ",
      companylogo: require("./assets/images/organicmarket.jpg"),
      date: "Dic 2021 - May 2022.",
      desc: "Freelance",
      descBullets: [
        "Creación de pagina web para el arquitecto Juan Cruz Reverberi",
        "Mejorar los procedimientos/procesos, administración general, control de calidad, stock, inventario, seguimiento de pedidos."
      ]
    },
    {
      role: "Ingeniero",
      company: "Fabrica Rivoli S.A",
      companylogo: require("./assets/images/rivoliLogo.jpg"),
      date: "Sep 2022 - Mar 2023",
      desc: "Áreas de producto terminado, de calidad y planificación.",
      descBullets: [
        "Consolidar el diseño y desarrollo del software para facilitar la colocación de los productos en conjunto con una nomenclatura para la asignación y recomendación de espacios disponibles.",
        "Dirigir un proyecto de automatización para automatizar y mejorar los procesos de la fábrica con el fin de digitalizar y perfeccionar las tareas."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Proyectos",
  subtitle: "Proyectos creados",
  projects: [
    {
      image: require("./assets/images/proyectofinal.jpeg"),
      projectName: "Proyecto Final Vehibuy",
      projectDesc: 
        "Se participó en un equipo de desarrollo ágil, presentándole a un Product Owner avances sobre el desarrollo de un E-commerce con diseño y desarrollo de las siguientes features: localstorage, cloudinary, CRUD de productos, auth de 3ros, catálogo, pasarela de mercado pago, checkout, pop-ups, borrado lógico, reviews, adm de carrito de compras, adm de usuarios",
      footerLink: [
        {
          name: "Visitar Website",
          url: "https://vehibuy-rho.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/reverberi.jpeg"),
      projectName: "Reverberi Architect",
      projectDesc:
        "Este proyecto empezó en el año 2022, cuando el arquitecto Juan Cruz Reverberi, hace uso de mis servicios al contratarme para que le redacte una carte de presentación y asi poder mostrar su obras.",
      footerLink: [
        {
          name: "Visitar Website",
          url: "https://www.jreverberi.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/estudiopaz.jpeg"),
      projectName: "Estudio / Consultora Paz",
      projectDesc:
        "Esta pagina web, está realizada como una landing page, donde se ofrece información del estudio y que servicios ofrece a sus clientes.",
      footerLink: [
        {
          name: "Visitar Website",
          url: "https://www.estudiocontablepaz.com.ar/"
        }
      ]
    },
    {
      image: require("./assets/images/just4vibes.jpeg"),
      projectName: "Just4Vibes",
      projectDesc:
        "El objetivo de este proyecto era la realización de una página web para un grupo de inversores. El objetivo de ellos, era diseñar y comercializar una nueva marca de ropa. Al diseñar esta página web, tenía como prioridad mostrar un estilo minimalista, para así poder centrar su atención en sus característicos Hoodies.",
      footerLink: [
        {
          name: "Visitar Website",
          url: "https://just4vibesclo.com/"
        }
      ]
    },
    {
      image: require("./assets/images/Henry.png"),
      projectName: "Proyecto Individual Henry",
      projectDesc:
        "Creación completa de una aplicación de países desde cero, empleando React, Redux y CSS para el Front-end, junto con un Back-end desarrollado en Node.js y Express. En esta aplicación se incluyó el diseño de base de datos y también se incluyeron características como, creación, búsqueda, ordenamientos y filtros.",
      footerLink: [
        {
          name: "Visitar Repositorio",
          url: "https://github.com/GeroPazPapa1/Individual-Project---Countries.git"
        }
      ]
    },
    {
      image: require("./assets/images/Henry.png"),
      projectName: "Proyecto Rick And Morty",
      projectDesc:
        "Creación de una aplicación web de personajes de Rick and Morty, empleando React, Redux y CSS para el Front-end, junto con un Back-end desarrollado en Node.js y Express. También se llevó a cabo el diseño de base de datos.",
      footerLink: [
        {
          name: "Visitar Repositorio",
          url: "https://github.com/GeroPazPapa1/MyProjectRickAndMorty.git"
        }
      ]
    }
  ],
  
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Logros y certificaciones 🏆 "),
  subtitle: "¡LOGROS, CERTIFICACIONES",

  achievementsCards: [
    {
      title: "Ingeniero Industrial",
      subtitle:
        "Entre las universidades mas importante del norte del pais, enfocada en las ingenierias.",
      image: require("./assets/images/unstaLogo.png"),
      imageAlt: "Ingeniero Industria",
      footerLink: [
        {
          name: "Certificacion",
          url: "https://drive.google.com/file/d/1eOK0psN0NHDrYjMlL--nYjRDp2PNcNEk/view?usp=sharing"
        }
        //{
        //  name: "Award Letter",
        //  url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        //},
        //{
        //  name: "Google Code-in Blog",
        //  url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        //}
      ]
    },
    {
      title: "Programador Fullstack",
      subtitle: "800 hs de cursado teórico-práctico.",
      image: require("./assets/images/henryLogo.png"),
      imageAlt: "Programador Fullstack",
      footerLink: [
        {
          name: "Certificacion",
          url: "/"
        }
      ]
    },
    {
      title: "EF SET English Certificate (C1 Advanced)",
      subtitle: "The achieved English level is 64/100 on the EF SET score scale and C1 Advanced according to the Common European Framework of Reference (CEFR). The EF SET score is calculated as an average of the reading and listening scores.",
      image: require("./assets/images/EFLOGO.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://www.efset.org/cert/2x4yiW"},
      ]
    },
    {
      title: "XVII CONGRESO ARGENTINO DE INGENIEROS INDUSTRIALES",
      subtitle: "El Comité Organizador del XVII CAEll Córdoba 2019 y la Asociación Argentina de Estudiantes de Ingeniería Industrial y carreras afines, junto a la Universidad Tecnológica Nacional - Facultad Regional Córdoba y a la Universidad Nacional de Córdoba",
      image: require("./assets/images/aareii.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1nHKalTVPkKliFSje6CMnALxRsj4TQ1A3/view?usp=sharing"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Fotos artisticas",
  subtitle:
    "Soy un aficionado creador de fotos artísticas, compartirlas con el mundo. También comparto esa misma dedicación a la edición de videos. ",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.instagram.com/minimalismforgeronico/",
      title: "Minimalism By Gero Nico",
      description:
        "Luego de haber concluido mi viaje por Nueva York, Manhattan, desarrollé una gran atracción a la filmación de videos y la creación de fotografías altamente artísticas."
    }
    //{
    //  url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //  title: "Why REACT is The Best?",
    //  description:
    //    "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    //}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Deportes",
  subtitle: emoji(
    "Aficionado del futbol, del mountain bike y decenso🚲😅"
  ),

  talks: [
    {
      title: "Campeonato de Tucuman y Catamarca",
      subtitle: "Decenso en La Merced, y El Cadillal",
      slides_url: "https://youtu.be/UeRYc5Zjfb0?si=ArZy3SgZbdDWcbM2",
      event_url: "https://youtu.be/ZnJMRmD4JdU?si=yjxAa3qEpH61eo53"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Mi Playlist 🎙️"),
  subtitle: "Amo la musica, pero mas la amo cuando la comparto!",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://open.spotify.com/playlist/1jkJSxsOO1TmwczZZW79JU?si=4669f66a280b4f6d"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contactar ☎️"),
  subtitle:
    "¿Quieres contactarme? No hay problema, puedes hacerlo con mi número de teléfono o mail!",
  number: "+54 9 3815514974",
  email_address: "geronimonicolaspazpapa@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "IngeEnPrograma", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
