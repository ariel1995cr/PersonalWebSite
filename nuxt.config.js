export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PersonalPage',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n',
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
      },
      {
        code: 'es',
        name: 'Español',
      },
      {
        code: 'fr',
        name: 'Français',
      }
    ],
    defaultLocale: 'en',
    vueI18n: {
      strategy: 'prefix',
      fallbackLocale: 'es',
      messages: {
        en: {
          anios: 'Years',
          welcome: 'Welcome',
          conocimientos: 'Skills',
          contenidoCartaPresentacion:
            'I am flexible to project demands and change priorities. I can distribute times and tasks in order to meet multiple objectives in a certain period of time. I can thrive in unfamiliar situations and enjoy opportunities to learn and open up to new knowledge and experiences. I am open and willing to learn whatever it takes to achieve the goals that are presented',
          Educación: 'Education',
          experiencia: 'Experience',
          experienciaProfesional: 'Professional experience',
          experienciaLaboral: 'Work Experience',
          Hi: "Hi, I'm Ariel Triviño 🤘",
          'Carta de Presentacion': 'Cover Letter',
          parrafo1SobreMi: 'I am a backend developer, in',
          parrafo2SobreMi:
            'company in which I have been since 2017, in which, no We only carry out development work but also infrastructure and networks.',
          parrafo3SobreMi:
            'I am in the 3rd year of the University Programmer Analyst career at the National University of Patagonia San Juan Bosco.',
          parrafo4SobreMi:
            'Recent work was done with PHP framework Laravel, Javascript, Vue.js. Management of relations database (Mysql-Postgresql).',
          parrafo5SobreMi:
            'But I am not only keeping what I have learned. I am currently moving forward with React.js and Node.js.',
          tareas: 'Task',
          tituloPrincipal:
            'Backend Developer, Student Analyst Programmer, Digital Product Creation.',
          WhoIam: 'Who I am?',
        },
        fr: {
          anios: 'Años',
          welcome: 'Bienvenue',
          conocimientos: 'Connaissance',
          contenidoCartaPresentacion:
            "Je suis flexible pour projeter les demandes et changer les priorités. Je peux répartir les temps et les tâches afin de répondre à plusieurs objectifs dans une certaine période de temps. Je peux m'épanouir dans des situations inconnues et profiter d'occasions d'apprendre et de m'ouvrir à de nouvelles connaissances et expériences. Je suis ouvert et disposé à apprendre tout ce qu'il faut pour atteindre les objectifs présentés",
          Educación: 'Formation',
          experiencia: 'expérience',
          experienciaProfesional: 'Experience PROFESSIONNELLE',
          experienciaLaboral: 'expérience professionnelle',
          Hi: 'Salut, je suis Ariel Triviño 🤘',
          parrafo1SobreMi: 'Je suis développeur backend, en',
          parrafo2SobreMi:
            'société dans laquelle je suis depuis 2017, dans laquelle, aucun Nous réalisons uniquement des travaux de développement mais aussi infrastructure et réseaux.',
          parrafo3SobreMi:
            "Je suis en 3ème année de carrière d'analyste programmeur universitaire à l'Université nationale de Patagonie San Juan Bosco",
          parrafo4SobreMi:
            'Des travaux récents ont été réalisés avec le framework PHP Laravel, Javascript, Vue.js. Gestion de la base de données des relations (Mysql-Postgresql).',
          parrafo5SobreMi:
            "Mais je ne garde pas seulement ce que j'ai appris. je suis en train dealler de l'avant avec React.js et Node.js.",
          'Carta de Presentacion': 'Carte de présentation',
          tareas: 'Corvées',
          tituloPrincipal:
            'Développeur backend, Programmeur analyste étudiant, Création de produits numériques.',
          WhoIam: 'Qui suis-je?',
        },
        es: {
          anios: 'Años',
          welcome: 'Bienvenido',
          conocimientos: 'Conocimientos',
          contenidoCartaPresentacion:
            'Soy flexible para proyectar demandas y cambiar prioridades. Puedo distribuir tiempos y tareas a fin de cumplir múltiples objetivos en un determinado plazo de tiempo. Puedo prosperar en situaciones desconocidas y disfrutar de oportunidades para aprender y abrirme a nuevos conocimientos y experiencias. Estoy abierto y dispuesto a aprender lo que sea necesario para lograr los objetivos que se presenten',
          Educación: 'Educación',
          experiencia: 'Experiencia',
          experienciaProfesional: 'Experiencia profesional',
          experienciaLaboral: 'Experiencia Laboral',
          Hi: 'Hola soy Ariel Triviño 🤘',
          parrafo1SobreMi: 'Soy desarrollador backend developer, en',
          parrafo2SobreMi:
            'empresa en la cual me encuentro desde el 2017, en la cual, no solo realizamos trabajos de desarrollo sino tambien de infraestuctura y redes.',
          parrafo3SobreMi:
            'Me encuentro en 3er año de la carrera Analista Programador Universitario en la Universidad Nacional de la Patagonia San Juan Bosco.',
          parrafo4SobreMi:
            'Los trabajos recientes fueron realizados con PHP framework Laravel, Javascript, Vue.js. Manejo de base de datos relaciones(Mysql-Postgresql).',
          parrafo5SobreMi:
            'Pero no solo me quedo con lo aprendido. actualmente me encuentro avanzando con React.js y Node.js.',
          'Carta de Presentacion': 'Carta de Presentacion',
          tareas: 'Tareas',
          tituloPrincipal:
            'Desarrollador Backend, Estudiante Analista Programador, Creación de Productos Digitales.',
          WhoIam: '¿Quien soy?',
        },
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  loading: {
    color: 'DodgerBlue',
    height: '10px',
    continuous: true,
    duration: 3000,
  },

  
}
