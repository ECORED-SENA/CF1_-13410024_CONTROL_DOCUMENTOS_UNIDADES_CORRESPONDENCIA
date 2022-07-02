export default {
  global: {
    componenteFormativo:
      'Flujos de información de las Unidades de Correspondencia',
    descripcionCurso:
      'Las facultades para el manejo de la información se establecen desde principios archivísticos, procedimientos bajo normatividad y procesos tendientes a la gestión de la información; a través de estas herramientas, el flujo de información es causado coherentemente a partir  de cada labor en la unidad administrativa, resultado orientado con los instrumentos de control desde el área de correspondencia.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/portada/interno.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Categorización del documento en aislamiento y distribución de comunicaciones oficiales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Archivo y documento: definición, clases, características y principios',
            hash: 'archivo',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Competencias de la administración documental',
            hash: 'competencias',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Criterios para la administración de comunicaciones oficiales',
            hash: 'criterios',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Norma técnica vigente de calidad.',
            hash: 'norma',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo:
              'Servicio de alerta de correspondencia, concepto y procedimiento',
            hash: 'alerta',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo:
              'Buenas prácticas de salud en el trabajo para la gestión de documentos',
            hash: 'practicas',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Funciones de la Unidad de Correspondencia frente al trámite de las comunicaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Normativa: Acuerdo 060 de 2001',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Pautas de recepción, distribución y despacho de documentos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Planillas de reparto de correspondencia',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Procesos de digitalización y comunicaciones oficiales electrónicas. Circular Externa AGN 005 de 2012',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Importancia del embalaje de los documentos',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Acuerdo 060 de 2001. [Archivo General de la Nación Colombia]. Por el cual se establecen pautas para la administración de las comunicaciones oficiales en las entidades públicas y las privadas que cumplen funciones públicas. Octubre 30 de 2001.',
      link: 'https://normativa.archivogeneral.gov.co/acuerdo-060-de-2001/',
    },
    {
      referencia: 'Analítica (2020). Radicación.',
      link: 'http://www.analitica.co/wiki/index.php?title=Radicaci%C3%B3n',
    },
    {
      referencia: 'Archivosagil (2018). ¿Qué es archivística?',
      link:
        'http://archivosagil.blogspot.com/2018/01/que-es-archivistica.html ',
    },
    {
      referencia:
        'Equipo Editorial. (2008). Procesos de gestión de documentos. Metadatos para la gestión de documentos. Parte 2: Aspectos conceptuales y de implementación. ISO 23081-2. Revista Española De Documentación Científica, 31(3), p. 453-506.',
      link: 'https://redc.revistas.csic.es/index.php/redc/article/view/439',
    },
    {
      referencia:
        'Galán, E. (2012). El concepto de Archivo y su origen documental. Alquibla.',
      link:
        'https://www.alquiblaweb.com/2012/06/09/el-concepto-de-archivo-y-su-origen/ ',
    },
    {
      referencia:
        'Organización Internacional de Normalización [ISO]. (2001). Información y documentación – Gestión de documentos (Norma ISO 15489). ',
      link:
        'http://www.informacionpublicapgr.gob.sv/descargables/sia/normativa-internacional/GEStexto1(CS).pdf ',
    },
    {
      referencia: 'Universidad de Málaga. (2018). La clasificación.',
      link:
        'https://www.uma.es/archivo-general/cms/menu/manual-para-archivos-de-oficina/y-la-clasificacion-que-es-como-puede-ayudarme/ ',
    },
    {
      referencia:
        'Universidad Nacional de Córdoba. (2019). Los principios archivísticos que determinan el método. ',
      link:
        'http://radtgu.eco.catedras.unc.edu.ar/la-organizacion-de-los-documentos-de-archivo/agrupaciones-documentales/los-principios-archivisticos-que-determinan-el-metodo/',
    },
  ],
  glosario: [
    {
      termino: 'Administración documental',
      significado:
        'es el proceso que permite planificar, organizar, dirigir y controlar todas aquellas actividades relacionadas con la creación de los diferentes documentos, además de su mantenimiento, distribución, localización, protección, control, uso y disposición o conservación permanente.',
    },
    {
      termino: 'Comunicaciones oficiales',
      significado:
        'son todas aquellas recibidas o producidas en desarrollo de las funciones asignadas legalmente a una entidad, independientemente del medio utilizado.',
    },
    {
      termino: 'Correspondencia',
      significado:
        'son todas las comunicaciones de carácter privado que llegan a las entidades, a título personal, citando o no el cargo del funcionario. No generan trámites para las instituciones.',
    },
    {
      termino: 'Destinatario',
      significado:
        'designa a la persona o entidad a quien va destinada o dirigida una cosa, que puede ser una llamada, una carta, un discurso o un envío. En una carta, por ejemplo, el destinatario es aquel a quien va dirigida la carta.',
    },
    {
      termino: 'Documento original',
      significado:
        'es la fuente primaria de información con todos los rasgos y características que permiten garantizar su autenticidad e integridad.',
    },
    {
      termino: 'Estructura organizacional',
      significado:
        'división de todas las actividades de una empresa que se agrupan para formar áreas o departamentos, estableciendo autoridades que, a través de la organización y coordinación, buscan alcanzar objetivos. ',
    },
    {
      termino: 'Flujo',
      significado:
        'circulación a través de varias oficinas buscando alcanzar el objetivo.',
    },
    {
      termino: 'Gestión de documentos',
      significado:
        'conjunto de actividades administrativas y técnicas tendientes a la planificación, manejo y organización de la documentación producida y recibida por las entidades, desde su origen hasta su destino final, con el objeto de facilitar su utilización y conservación.',
    },
    {
      termino: 'ICONTEC',
      significado:
        'entidad de carácter privado, sin ánimo de lucro, cuya misión es fundamental para brindar soporte y desarrollo al productor y protección al consumidor. Colabora con el sector gubernamental y apoya al sector privado del país para lograr ventajas competitivas en los mercados interno y externo.',
    },
    {
      termino: 'Norma',
      significado:
        'conjunto de políticas o reglas formuladas por Gestión Documental para regular el desarrollo de la función archivística en la administración. Esta regla debe ser aplicada por las áreas para el desarrollo de sus funciones archivísticas y de gestión documental.',
    },
    {
      termino: 'Radicación',
      significado:
        'procedimiento por medio del cual las entidades asignan un número consecutivo a las comunicaciones recibidas o producidas, dejando constancia de la fecha y hora de recibo o de envío, con el propósito de oficializar el trámite y cumplir con los términos de vencimiento que establezca la ley. Estos términos se empiezan a contar a partir del día siguiente de radicado el documento.',
    },
    {
      termino: 'Soporte documental',
      significado:
        'medios en los cuales se contiene información, según los materiales o medios tecnológicos empleados. Además de los archivos en papel, existen los archivos audiovisuales, fotográficos, fílmicos, informáticos, orales y sonoros.',
    },
  ],
  complementario: [
    {
      tema: 'Sistema de gestión de documentos electrónicos de archivo',
      referencia:
        'Ministerio de Cultura [MinCultura]. (s. f.). SGDEA Sistema de Gestión de Documentos Electrónicos de Archivo.',
      tipo: 'Infografía',
      link:
        'https://www.archivogeneral.gov.co/sites/default/files/Estructura_Web/5_Consulte/Recursos/Infografias/infoSGDEA.pdf',
    },
    {
      tema: 'Gestión Documental & Gobierno Electrónico',
      referencia:
        'Zapata, C. (2015). Gestión documental & gobierno electrónico: problemas, retos y oportunidades para los profesionales de información. Archivo General de la Nación Colombia.',
      tipo: 'Pdf Publicación',
      link:
        'https://www.archivogeneral.gov.co/sites/default/files/Estructura_Web/5_Consulte/Recursos/Publicacionees/GestionDocumentalYGobiernoElectronico.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Fabiola Sierra Sarmiento',
        cargo: 'Experto temático ',
        centro: 'CIES Regional Norte de Santander',
      },
      {
        nombre: 'Luis Fernando Botero Mendoza',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Álix Cecilia Chinchilla Rueda',
        cargo: 'Asesor metodológico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de Estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jorge Enrique Haylock Calderín',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
