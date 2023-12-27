export default {
  global: {
    componenteFormativo: 'Arte conceptual, animación y edición de sonidos',
    descripcionCurso:
      'En este componente formativo se pretende que el aprendiz conozca los elementos esenciales, tales como el desarrollo de personajes y la teoría del color. Incluye técnicas de modelado en 3D y texturizado, indispensables para vitalizar las creaciones. Asimismo, se imparten los principios básicos del <em>rigging</em> y la animación, junto con la integración del sonido, aspectos cruciales para animar y dotar de expresividad a los personajes en una dimensión tridimensional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',

        numero: '1',
        titulo: 'Formas primarias y composición dinámica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Formas primarias y temas emocionales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Identidad en los personajes',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Anatomía básica',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Diseño de personajes',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: '<em>Blueprint</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Texturas y color',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Conceptos de 3D y modelado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Personajes',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Escenarios y <em>props</em>',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Materiales y texturizado',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: '<em>Rigging</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Introducción al <em>rigging</em>',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Creación de esqueleto y sistemas de control',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: '<em>Skinning</em>',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Curvas de control',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: '<em>Rig</em> facial y <em>blendshapes</em>',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Ajustes finales y <em>scripting</em>',
            hash: 't_6_6',
          },
          {
            numero: '6.7',
            titulo: '<em>Addon riggify</em>',
            hash: 't_6_7',
          },
          {
            numero: '6.8',
            titulo: '<em>Autorig</em> con Mixamo ',
            hash: 't_6_8',
          },
          {
            numero: '6.9',
            titulo: '<em>Skinning</em> y pesos',
            hash: 't_6_9',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Animación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Historia de la animación',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Técnicas de animación',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Principios de animación',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Animaciones básicas',
            hash: 't_7_4',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Fundamentos básicos de sonido',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Características del sonido',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'El sonido en los videojuegos',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Formatos de sonido',
            hash: 't_8_3',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Exportación objetos y sonidos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF04_217326_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Conceptos de 3D y Modelado',
      referencia:
        'Aura Prods. (2023, mayo 5). LA GUÍA DEFINITIVA DE BLENDER! (Tutorial completo en Español) | Desde cero! 2023. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=O-tV7uBf5LI',
    },
    {
      tema: 'Historia de la Animación',
      referencia:
        'Ucal universidad. (2013, septiembre 24). HISTORIA DE LA ANIMACIÓN. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UANLtsch7LY',
    },
    {
      tema: '<em>Rigging</em>',
      referencia:
        '3dilusion Arte Blender (2019, septiembre 10). Rigging blender 2.8 español - Aprende a colocar huesos y dar órdenes. Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=qKlWqN2Vtio&list=PLTFIbZhnzgXsh3eVqdW_Jitdn9LyhHjwD',
    },
    {
      tema: 'Escenarios para Videojuegos',
      referencia:
        'Alberto Román (2021, abril 5). Sobre el diseño de niveles en los videojuegos | Alberto Román. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nhHJPkqKdjk',
    },
  ],
  glosario: [
    {
      termino: 'Animación',
      significado:
        'es el proceso por el que se logra dar movimiento a dibujos u objetos inanimados.',
    },
    {
      termino: 'Escenario (Videojuegos)',
      significado: 'lugar en el que suceden las acciones de un videojuego.',
    },
    {
      termino: 'Modelado',
      significado:
        'es la técnica que se usa para crear formas en segunda o en tercera dimensión a través de programas destinados para tal fin.',
    },
    {
      termino: 'Sonido',
      significado:
        'sensación o impresión producida en el oído por un conjunto de vibraciones que se propagan por un medio elástico, como el aire.',
    },
    {
      termino: 'Texturizado',
      significado:
        'el texturizado 3D es una técnica utilizada en la creación de modelos tridimensionales con el fin de darles una apariencia y superficie realista.',
    },
  ],
  referencias: [
    {
      referencia:
        'López, M. (2018). <em>Producción Musical y Diseño de Sonido para Videojuegos</em>. Editorial Síntesis.',
    },
    {
      referencia:
        'Notari Arambul, A. (Year). <em>Diseño y concept art de un videojuego original: escenarios</em>. Universidad Politécnica de Valencia.',
      link:
        'https://riunet.upv.es/bitstream/handle/10251/108542/NOTARI%20%20Dise%C3%B1o%20y%20concept%20art%20de%20un%20videojuego%20original%3A%20escenarios.pdf?sequence=1',
    },
    {
      referencia:
        'Williams, R. (2009). <em>The Animators Survival Kit</em>. Editorial Faber and Faber.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Cortes',
          cargo: 'Instructor',
          centro:
            'Centro de Diseño e Innovación Tecnológica Industrial - Regional Risaralda',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Juan Daniel Polanco',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Full-stack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
