<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    Muestras
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span 1
      h1 Categorización del documento en el alistamiento y distribución de comunicaciones oficiales
    .row.justify-content-center
      .col-xl-7.col-sm-12(data-aos="slide-right")
        p La producción, recepción y distribución de documentos ha llamado la atención notablemente, es así que los esfuerzos por controlar la pérdida de información no se han hecho esperar, desde la activación de nuevos procesos, aplicación y conocimiento de la normatividad, hasta las formaciones que permiten entregarle al responsable de la correspondencia las herramientas necesarias y actuales para evitar que negligencias como la desconcentración o la falta de aplicación de planillas en los flujos de información de la entidad lleven al caos y detrimento del patrimonio documental.
        p.mb-5 La gestión de  la información se hace a partir de espacios ordenados que permitan la claridad en su búsqueda específica de manera física o digital, siendo necesario su aislamiento y distribución. Tal como lo dice la Universidad de Málaga (2018), se busca clasificar y ordenar esa información vuelta documentos en una buena disposición, “clasificar un documento significa agruparlo por conceptos o asuntos concretos; y ordenar un documento quiere decir establecer una secuencia cronológica, alfabética o numérica dentro de cada grupo y situarlo físicamente en el espacio”. En correspondencia, se abordan a continuación los conceptos fundamentales requeridos.
      .col-xl-5.col-sm-12.fondo1(data-aos="zoom-in-up")
        img.mt-5(src='@/assets/curso/tema1/figura1.svg')
    separador
    #archivo.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.1. Archivo y documento: definición, clases, características y principios
    .row.justify-content-center    
      .col-xl-5.col-sm-12(data-aos="fade-down")
        img(src='@/assets/curso/tema1/imagen2.png')
      .col-xl-7.col-sm-12(data-aos="fade-left")
        p.mb-5.mt-4 Intentar dar claridad en la administración de las comunicaciones que se reciben a diario a través de los diferentes canales de información dispuestos por una entidad hace que el compromiso en esa labor tome categoría transcendental dentro de cualquier Unidad Administrativa. Desde que el ser humano tiene uso de razón, recurre al documento para generar un trámite, ya sea personal, académico o laboral; los documentos aplican desde una fórmula médica o una certificación académica, hasta una queja por incremento del valor en recibos de servicios públicos; por esta razón, no es novedad que hagamos uso del soporte documental como individuos, la novedad se da en la aplicación que requiere una empresa o entidad para la gestión de estos datos de manera adecuada y acorde con la legislación.
    p.mb-5 Para entender el real impacto de los documentos, es necesario hacer un viaje al pasado, desde cuando el primer documento apareció:
    p.mb-5.text-center Los tres principales usos de un documento son los siguientes:
    .row.fondo2.justify-content-center
      .col-xxl-8.col-sm-8.col-10
        img.encima(src='@/assets/curso/tema1/figura2.svg')(data-aos="fade-down")
      .row.justify-content-end
        .col-xxl-8.col-lg-8.col-sm-9.col-10(data-aos="slide-left")
          p.my-5.encima Los documentos se han mantenido en formato físico durante mucho tiempo, pero desde hace algunos años se pueden contener de manera digital en archivos de diferentes formatos. Todos los documentos digitales o análogos requieren como mínimo los siguientes 4 elementos:
      .row.justify-content-center.encima
        .col-xxl-5.col-sm-6.col-8
          img.subir(src='@/assets/curso/tema1/imagen1.png')(data-aos="slide-right")
        .col-xxl-7.col-sm-10.col-11(data-aos="slide-left")
          ul.lista-ul--color
            li 
              i.fas.fa-book-open
              | Destinatarios.
            li
              i.fas.fa-book-open
              | Productores.
            li 
              i.fas.fa-book-open
              | Objetivo del documento.
            li 
              i.fas.fa-book-open
              | Ruta de llegada del documento o destino.

          p.my-5(data-aos="slide-left") El almacenamiento de los documentos es necesario para las entidades en general, ya sea de manera física, por medio de un archivo físico, o en archivo digital, con repositorios de archivos, inclusive, la gran mayoría de las empresas están usando repositorios de información de ambos tipos. A los archivos que se mantienen en archivados en estado físico se les denomina “documentos de archivo” y son documentos que se deben tener con mucho cuidado, como se puede ver a continuación:
    figure.mb-5(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    p.my-5.text-center La misión principal del documento de archivo es la protección de la información; por lo general, contiene los siguientes datos:
    .row.justify-content-center
      .col-xxl-7.col-lg-7.col-sm-8.col-10(data-aos="slide-right")
         img(src='@/assets/curso/tema1/archivo.svg')
    p.my-5.text-center Por otra parte, se tienen los documentos digitales, que también se almacenan con el mismo fin que los documentos físicos. Observe algunas características de este tipo de archivo digital:
    figure.mb-5(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    p.my-5.text-center Los documentos digitales deben tener los siguientes datos:
    .row.justify-content-center
      .col-xxl-7.col-lg-7.col-sm-8.col-10(data-aos="slide-right")
        img(src='@/assets/curso/tema1/electronico.svg')
    .row.justify-content-center
      .col-xxl-7.col-lg-7.col-sm-10.col-11(data-aos="fade-right")
        p.my-5 Galán (2012) define el archivo como 
          span.resaltar “el conjunto de documentos, sea cual sea su forma, fecha o soporte, producidos por cualquier persona física o moral, o por cualquier organismo público o privado en el ejercicio de su actividad”
          span ; ese conjunto de documentos es el que resguarda el patrimonio documental de las entidades. Estas actividades, por lo general, se hacen en un área reservada de las entidades y son administradas por una persona que se vuelve responsable de lo que allí se soporta. Sin embargo, en algunas entidades, este espacio carece de un funcionario que controle la documentación que ingresa mediante las transferencias documentales y que realice la sensibilización de las unidades administrativas con respecto a los procesos de gestión documental, entre otras actividades.
      .col-xxl-5.col-lg-5.col-sm-6.col-8(data-aos="fade-left")
        img(src='@/assets/curso/tema1/imagen3.png')
    .row.justify-content-center.align-items-center.fondo3.mt-5.ampliar.px-5
      .col-xxl-3
        p Los diferentes tipos de archivos y el estado en el que se pueden encontrar se presentan a continuación: 
      .col-xxl-3.col-sm-6.col-lg-3.mb-4.mb-lg-0.bajar
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/boton1.svg')

          h3.text-center Archivo gestión
          p.text-center Documentos que se usan con frecuencia, por ejemplo: recibos de pago.
          br

      .col-xxl-3.col-sm-6.col-lg-3.mb-4.mb-lg-0.bajar
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/boton2.svg')

          h3.text-center Archivo central
          p.text-center Documentos que han disminuido su consulta, de acuerdo con las Tablas de Retención Documental (TRD).

      .col-xxl-3.col-sm-6.col-lg-3.mb-4.mb-sm-0.bajar.mb-5
        .tarjeta--boton.color-primario.text-white--hover.p-4.mb-5
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/boton3.svg', alt='Texto que describa la imagen')

          h3.text-center Archivo histórico
          p.text-center Almacena la información que amerita su conservación total, de acuerdo con lo descrito en las TRD.

    .row.justify-content-center.align-items-center.fondo4.my-5
      .col-xxl-7.col-lg-7.col-sm-10.col-11
        p La archivística es 
          span.resaltar.text-bold “el estudio teórico y práctico de los principios, procedimientos y problemas concernientes al almacenamiento de documentos, buscando que dicha documentación, se mantenga en el tiempo, pueda ser consultada y clasificada” 
          span (Archivosagil, 2018); este estudio arroja como resultado que
        p todas las unidades administrativas que cumplan funciones relacionadas con el manejo documental incluyan principios archivísticos en su gestión documental dentro de la entidad, la idea es hacer práctico el uso de los documentos.
      .col-xxl-5.col-lg-5.col-sm-6.col-8
        img.mb-4(src='@/assets/curso/tema1/imagen4.png')

    p.my-5 Los principios de la archivística son dos, tal como lo relaciona la Universidad Nacional de Córdoba (2019):

    .row.justify-content-center
      .col-xxl-10.col-lg-10.col-sm-10.col-11
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1
          span.text-small Principios archivísticos
        .tabla-a.color-acento-botones.mb-5 
          table
            tbody
              tr.bordeSupTabla
                td.anchocol
                  h4.ms-3 Principio de procedencia
                td.p-3 Permite identificar el fondo documental, la estructura orgánica, las series y subseries, así como las unidades documentales. Se utiliza para que no se mezclen documentos entre unidades productoras, para que haya conocimiento de quién produjo el documento, quién tiene la competencia de dar respuesta y manejo al mismo, y por ende, quién debe archivarlo y reportar la serie documental. Ejemplo: el área de Talento Humano tiene a su cargo las historias laborales, es decir, ninguna otra área administrativa podrá reportar dicha serie documental.
              tr
                td.anchocol 
                  h4.ms-3 Principio de orden original
                td.p-3 Este principio permite dar orden a cada tipo documental dentro del expediente según la secuencia del trámite, por esto, no se pueden reservar números de radicados en las unidades de correspondencia. El orden original indica que cada respuesta que se genere o se produzca se archivará teniendo en cuenta las fechas en que se dio origen al trámite.

    p.mb-5.text-center El siguiente es un ejemplo del principio de procedencia:
    .row.justify-content-center
      .col-xxl-10.col-lg-10.col-sm-10.col-11
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2
          span.text-small Ejemplo del Principio de procedencia
        .tabla-a.color-acento-botones.mb-5 
          table
            tbody
              tr.fondoTabla
                td
                  h3.text-center.mb-0 FONDO
                td
                  h3.text-center.mb-0 SECCIÓN
                td
                  h3.text-center.mb-0 SUBSECCIÓN
              tr
                <td rowspan= 3 style='padding-left: 40px'>Alcaldía de Cúcuta</td>
                <td rowspan= 3 style='padding-left: 40px'>Secretaría de Hacienda</td>
                td.p-3 Presupuestos
              tr
                td.p-3 Contabilidad
              tr
                td.p-3 Tesorería

    p.text-center El siguiente es el ejemplo del Principio de orden original, que muestra cómo se lleva la constancia de las diferentes versiones de unos documentos desde su original:

    .row.justify-content-center.encima.fondo5
      .col-xxl-6.col-lg-6.col-sm-10.col-11
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span.text-small Ejemplo de Principio de orden original
        img.mb-4(src='@/assets/curso/tema1/imagen5.png')
      .row
        .col-xxl-4            
          p.fondo6.padTitulo.text-bold Clasificación de los documentos

      .row.justify-content-center
        .col-xxl-8.col-lg-8.col-sm-10.col-11
          p La buena gestión de la información que ingresa a la entidad y que se produce en ella nace del uso que se le dé al soporte, la identificación de procedencia y de la finalidad con que se redacta el mensaje. No todos los soportes son documentos de archivo o documentos electrónicos, la información se puede resguardar en un plano, en una fotografía, en un video, incluso, puede tener aspecto multimedia, en un audio, etc. A todos estos datos se les debe garantizar los mismos procedimientos archivísticos para su conservación. 
          p Una fotografía puede ser el anexo de una solicitud que se radica en ventanilla única, se registra y se distribuye a la unidad administrativa competente. En algunos casos, esta información no llega completa al área donde se elabora la respuesta, lo que perjudica el concepto que emite el funcionario competente. Lo anterior es el talón de Aquiles de las unidades de correspondencia, que, a falta de formatos, actividades y procedimientos, dejan toda la responsabilidad a la memoria del responsable de la gestión de documentos. En la siguiente infografía, se presenta la clasificación de los documentos:
        .col-xxl-4.col-lg-4.col-sm-6.col-8(data-aos="fade-down")
          img.mb-4.encima(src='@/assets/curso/tema1/imagen6.svg')
    .row.justify-content-center.mt-5
      .col-xxl-10.col-lg-10.col-sm-10.col-11.fondo7
        .row.justify-content-center
          .col-xxl-5.col-lg-5
            h3.mb-0.p-3.fondo8.text-center CLASIFICACIÓN DE LOS DOCUMENTOS

        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/figura3.svg')

          .tarjeta.fondohistograma.p-3(x="35%" y="21%" numero="")
            .h5.mb-2 Textuales
            p Memorandos, circulares, cartas, informes

          .tarjeta.fondohistograma.p-3(x="53%" y="21%" numero="")
            .h5.mb-2 Gráficos
            p Mapas, dibujos planos

          .tarjeta.fondohistograma.p-3(x="71%" y="21%" numero="")
            .h5.mb-2 Imagen
            p Cuadros, fotografías, diapositivas, etc.

          .tarjeta.fondohistograma.p-3(x="88.5%" y="21%" numero="")
            .h5.mb-2 Cinta
            p Video, pizarrón, magnético, microfilm, cintas magnéticas 

          .tarjeta.fondohistograma.p-3(x="35%" y="54.7%" numero="")
            .h5.mb-2 Documento público
            p Producido y recibido en entidades estatales.

          .tarjeta.fondohistograma.p-3(x="53%" y="54%" numero="")
            .h5.mb-2 Documento privado
            p Producido y recibido en entidades privadas.

          .tarjeta.fondohistograma.p-3(x="35%" y="88.8%" numero="")
            .h5.mb-2 Documento dispositivos:
            p Leyes, decretos, ordenanzas, acuerdos, resoluciones

          .tarjeta.fondohistograma.p-3(x="53%" y="88.8%" numero="")
            .h5.mb-2 Documentos informativos:
            p Cartas, memorando, circulares, etc.

          .tarjeta.fondohistograma.p-3(x="71%" y="88.8%" numero="")
            .h5.mb-2 Documentos testimoniales:
            p Contables, contratos, etc.

    .row.my-5
      .col-xxl-4            
        p.fondo6.padTitulo.text-bold Características del documento.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center(titulo="Encabezado y pie de página")
        .col-md-11.mb-4.mb-md-0
          p los elementos describirán los datos de contacto del fondo documental que produce tal comunicación, así como el logotipo y demás simbología que identifique al funcionario de correspondencia para la aplicación del principio de procedencia. Tales datos estiman: canales de información, como portal web, correo corporativo, número de WhatsApp, redes sociales y números telefónicos. En general, existen plantillas para la elaboración del documento; en otros casos, existen hojas con membrete para cumplir con esta característica del documento.
      .row.justify-content-center(titulo="Fechas del documento")
        .col-md-11.mb-4.mb-md-0
          p la primera información que se detalla en el documento, tanto quien lo redacta como la persona que lo avala mediante su firma y el funcionario que lo recibe para su radicación, es la fecha del documento y de dónde procede, referencias que juegan un papel trascendental en la radicación del mismo. 
          p Ejemplo: los documentos que se radiquen y que su fecha de elaboración sea mayor a 60 días deben ser actualizados para atender el requerimiento y, por ende, darle entrada en el sistema de gestión documental.
      .row.justify-content-center(titulo="Motivo de la creación del documento")
        .col-md-11.mb-4.mb-md-0
          p para toda persona es valioso lo que trasmite, por eso, se agradece toda información que se plasma y cada documento debe tener un asunto claro que cuente el objetivo del mismo, en otras palabras, el motivo que llevó a la creación del documento. 
      .row.justify-content-center(titulo="Contenido del documento")
        .col-md-11.mb-4.mb-md-0
          p toda comunicación oficial que se recibe o se elabora presenta una información a partir de la que se desea generar un trámite o generar una respuesta. El contenido se presenta con lo destacado, los anexos, el orden de las ideas principales y la expresión de la finalidad del documento.        
      .row.justify-content-center(titulo="Radicación según el documento")
        .col-md-11.mb-4.mb-md-0
          p además de ser una de las características para considerar que el escrito es un documento que hace parte de un fondo documental, es también uno de los procedimientos de las unidades de correspondencia, las cuales, según la vía que haya utilizado el usuario, persona natural o persona jurídica, para hacer llegar su comunicación, proceden a radicar estampando el sello radicador en el documento físico o electrónico e ingresar la información al sistema de gestión documental. 
    .row.justify-content-center
      .col-xxl-10.col-lg-10.col-sm-10.col-11.p-4
        .cajon.color-acento-contenido.p-4.mb-4.fondo9
          p Tanto quien elabora el documento como el funcionario de la unidad de correspondencia que lo recibe son responsables de velar porque los documentos presentados evidencien estos elementos para su fácil identificación y organización documental. Si por algún caso el documento carece de esta información, significa que la persona a cargo no validó la información y está infringiendo el proceso de gestión documental. Ante esta situación, se encuentra constantemente el proceso de capacitación, para que los empleados responsables del proceso lo hagan cumplir a cabalidad, para dar trámite sin perjudicar a otros participantes del proceso.

    .row.my-5
      .col-xxl-3            
        p.fondo6.padTitulo.text-bold Unidad documental.

    p.my-5 Tener la disponibilidad de la información es establecer expedientes que cumplan con las series y subseries documentales descritas en el instrumento archivístico de las Tablas de Retención Documental (TRD), descifrando los expedientes complejos o simples, como se evidencia a continuación en la gráfica de tipos de unidades documentales:

    .row.justify-content-center
      .col-xxl-6.col-lg-6.col-sm-8.col-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 4
          span.text-small Tipos de unidades documentales
        img.mb-4(src='@/assets/curso/tema1/figura4.svg')
    p.mb-5 Una unidad documental compleja es aquella conformada por varios tipos documentales, estos documentos son diferentes, pero hacen parte de la misma unidad de documentos, como se ve en la siguiente tabla:

    .row.justify-content-center.fondo2
      .col-xxl-6.col-lg-6.col-sm-8.col-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3
          span.text-small Unidad documental compleja
    
        .tabla-a.color-acento-botones.mb-5 
          table
            tbody
              tr.bordeSupTabla.align-items-center
                td.anchocol2
                  h4.ms-3.text-center Unidad documental compleja
                td.p-3 Historias laborales
              tr
                td.anchocol2
                  h4.ms-3 Tipos documentales
                td.p-2
                  ul.lista-ul
                    li
                      ul
                        li 
                          i.lista-ul__vineta
                          | Certificado de antecedentes penales
                        li
                          i.lista-ul__vineta
                          | Certificado de antecedentes disciplinarios
                        li 
                          i.lista-ul__vineta
                          | Declaración de bienes y rentas
                        li 
                          i.lista-ul__vineta
                          | Examen médico de ingreso
                        li 
                          i.lista-ul__vineta
                          | Entre otros.

      p.my-5 Las unidades documentales complejas suelen confundir a quien clasifica, ordena y describe la información para la conformación del expediente, ya que necesita conocer las funciones de la unidad administrativa que da lugar al expediente de archivo o el expediente electrónico, y además sus tipos documentales varían según la estructura, pero no se pueden separar, ya que forman parte de un mismo proceso. 
      .row.justifycontent-center
        .col-xxl-5.col-lg-5.col-sm-6.col-10
          img.mb-4(src='@/assets/curso/tema1/figura5.svg')
        .col-xxl-7.col-lg-7.col-sm-10.col-11
          .cajon.color-acento-contenido.p-4.mb-4.fondo9
            p Un ejemplo cotidiano de falencia presentada en las unidades de correspondencia es la apertura de expedientes bajo la denominación de correspondencia recibida y correspondencia enviada, un fatal error que, como nace en el centro de administración de documentos, se lleva a las demás oficinas productoras, ocasionando una ruta de desorganización y pérdida de acceso a la información de manera oportuna.
          p Las Unidades Documentales, en adelante UD, son creadas a razón de un mismo formato o estructura en el que se facilita la integración al expediente; por ejemplo, se pueden citar las resoluciones en las que sustentan un mismo modelo acorde con la política institucional, lo único que varía de este documento sería: número de resolución, fechas y lo que resuelve.         
          .row.justify-content-center
            .col-xxl-5
              img.mb-4(src='@/assets/curso/tema1/figura6.svg')
            .col-xxl-5.col-lg-5.col-sm-8.col-10
              img.mb-4(src='@/assets/curso/tema1/figura7.svg')
    p.mt-5 Las unidades documentales complejas o simples están constituidas por el cumplimiento de las funciones, para no separar procesos que vinculan información. 
    p.mb-5 La tipología documental que se genera en las unidades de correspondencia va en razón de las comunicaciones oficiales, por ello, toda comunicación que ingrese o se despache tiene que transitar de acuerdo con lo establecido en el  ciclo PHVA: planear, hacer, verificar y actuar. Para la producción documental, se relaciona con:
    .row.justify-content-center
      .col-xxl-10.col-lg-10.col-sm-10.col-11
        .tabla-a.color-acento-botones.mb-5 
          table
            tbody
              tr.bordeSupTabla.align-items-center
                td.anchocol
                  h4.ms-3.text-center Planear
                td.p-4 Proyectar las actividades relacionadas con los procesos de gestión documental anualmente, donde se intervengan las amenazas y vulnerabilidades a las que se expone la información.
              tr.align-items-center
                td.anchocol
                  h4.ms-3.text-center Hacer
                td.p-4 Ejecutar, bajo procedimientos, la clasificación, ordenación y descripción del documento, en otras palabras, labores de distribución de correspondencia teniendo en cuenta los horarios fijados en la planeación, foliación a los anexos del paquete documental y demás.
              tr.align-items-center
                td.anchocol
                  h4.ms-3.text-center Verificar
                td.p-4 Hacer seguimiento y control a lo que se planea y se ejecuta, para validar que esté funcionando; de lo contrario, establecer nuevas directrices, corregir para volver a planear.
              tr.align-items-center
                td.anchocol
                  h4.ms-3.text-center Actuar
                td.p-4 Establecer parámetros para la realidad del contexto que impacten las unidades administrativas para la mejora continua y el aprendizaje constante.
    separador
    #competencias.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.2. Competencias de la administración documental

    p.my-5 Para que haya un adecuado proceso en las unidades de correspondencia, previamente existe una planificación de cada una de las etapas que intervienen en los procesos de documentación, partiendo de lo que realiza la persona que recibe y radica un documento físico o electrónico, hasta la persona que archiva el documento en el expediente. Las competencias de administración documental son el eslabón para que empecemos a examinar todo lo que ingresa y sale de la entidad, así como el recorrido que hace hasta llegar a su disposición final. Si lo anterior no es apoyado en las competencias de la administración documental, se está condenado a cualquier amenaza cibernética, siniestro natural o biológico en el que pueda verse afectada la información; por ende, se indica la cooperación de cada competencia con el flujo de la información:
    .row.justify-content-center
      .col-xxl-4.col-lg-4.col-sm-6.col-8
        img.mb-4(src='@/assets/curso/tema1/imagen7.jpg')
      .col-xxl-4.col-lg-4.col-sm-6.col-8
        img.mb-4(src='@/assets/curso/tema1/imagen8.jpg')
      .col-xxl-4.col-lg-4.col-sm-6.col-8
        img.mb-4(src='@/assets/curso/tema1/imagen9.jpg')

    p.mb-5 Los detalles del almacenamiento con el tiempo han ido evolucionando, y para dar detalle a cada necesidad, se relacionan las formas de almacenar los documentos físicos y digitales:
    .row.justify-content-center
      .col-xxl-10.col-lg-10.col-sm-10.col-11
        .tabla-a.color-acento-botones.mb-5 
          table
            tbody
              tr.fondoTabla
                td
                  h3.text-center.mb-0 DOCUMENTACIÓN FÍSICA
                td
                  h3.text-center.mb-0 DOCUMENTACIÓN ELECTRÓNICA
              tr
                td.p-3 Para la documentación física, es necesario que quienes producen los documentos, los reciben o los despachan cuenten con unidades de conservación necesarias para recopilar allí los soportes documentales. 
                td.p-3 El almacenamiento de la información que se produce en este ambiente no es tan diferente al físico, ya que la documentación electrónica también atraviesa por los procedimientos de clasificación, ordenación y descripción; dicho en otras palabras, el nombre de la carpeta debe coincidir con la serie documental de la dependencia y los archivos dentro estarán ordenados teniendo en cuenta la secuencia del trámite (fechas).
              tr
                td.p-3 Para el caso de expedientes, se utilizan las carpetas cuatro aletas, las cuales son costosas pero cumplen con la normatividad en cuanto a las condiciones de seguridad y, aún más beneficioso, con la integridad del documento. Si el soporte documental es un mapa, se debe hacer uso de las planotecas para su conservación. 
                td.p-3 La información que se recopila de los canales virtuales es transportada a los sistemas de gestión de la información o software para dar respuesta. Periódicamente, se hacen los backups (copias de seguridad), se almacenan en la nube, dependiendo de la necesidad de la organización.
              tr
                td.p-3 Todo documento que conforme el expediente cuenta con su procedimiento de clasificación y ordenación, para que se almacene en las diferentes cajas de archivo inactivo con su identificación (rótulo) para la recuperación de la información.
                td.p-3 El trabajo de almacenamiento lo lideran los ingenieros de sistemas, quienes conforman el comité de archivo.
    .row.justify-content-center
      .col-xxl-5.col-lg-5.col-sm-7.col-9.encima
        img.mb-4(src='@/assets/curso/tema1/imagen10.png')
      .col-xxl-7.col-lg-7.col-sm-10.col-11
        p Con 
          span.text-bold relación 
          span al mantenimiento, la 
          span.text-bold relación 
          span debe ser extrema, no solo por mantener el archivo distante de amenazas como roedores o humedad, sino que se debe prevenir la pérdida o los ingresos exteriores al sistema; para eso, se recomienda establecer los permisos dentro de la entidad para la visualización según las categorías de la información, que, para su conocimiento, es de tres tipos:  pública, clasificada, reservada. Por ejemplo, hay cierta información que solo puede conocer quien la genera, no habrá permisos para las demás áreas  en cuanto a visualización y menos a su publicación.
        .row.justify-content-end.fondo12.correr-izq
          .col-xxl-7.col-md-7.col-sm-7.col-7
            p.text-bold Nota importante:
            p el mantenimiento de los archivos incluye su usabilidad en el tiempo y su facilidad de revisión, por eso, para el caso de los archivos digitales, se debe tener en cuenta el tipo de formato de archivo que se guarda, para que no pierda su visibilidad; por lo general, se usan archivos genéricos de imagen de tipo JPEG o de lectura PDF.
    separador
    #criterios.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.3. Criterios para la administración de comunicaciones oficiales

    .row.justify-content-center.fondo13
        .col-xxl-4.col-lg-4.col-sm-6.col-8(data-aos="zoom-in-up")
          img.mb-4(src='@/assets/curso/tema1/figura8.svg')
        .col-xxl-8.col-lg-8.col-sm-10.col-11.py-4
          p Los tipos documentales que recibe la unidad de correspondencia con mayor frecuencia son las solicitudes de información, PQRS (peticiones, quejas, reclamos o sugerencias), oficios, invitaciones, entre otros; mientras que los tipos documentales que produce una entidad son las circulares, memorandos, informes, actas, certificaciones, mensajes electrónicos y solicitudes de respuesta a trámite.
          p La entidad acude a la normatividad, al manual de correspondencia, los parámetros técnicos y principios archivísticos para situar en el contexto las funciones que realiza el responsable de la unidad de correspondencia, sobre todo en esta área en la que se recopila la mayor fuente de información. La siguiente tabla muestra las principales características normativas en cuestión: 

    .titulo-sexto.color-acento-contenido
      h5 Tabla 4
      span.text-small Principales características normativas

    .tabla-a.color-acento-botones.mb-5 
      table
        tbody
          tr.fondoTabla.align-items-top
            td
              h3.text-center.mb-0 NORMATIVIDAD
            td
              h3.text-center.mb-0 MANUAL DE CORRESPONDENCIA
            td
              h3.text-center.mb-0 PARÁMETROS TÉCNICOS
            td
              h3.text-center.mb-0 PRINCIPIOS ARCHIVÍSTICOS
          tr.justify-content-top
            td.ps-4 ICONTEC Guía Técnica Colombiana GTC - 185 (2009) Documentación Organizacional
            <td rowspan= 6 style='padding-left: 25px; padding-top: 25px; vertical-align: top;'>Documento en el que se plasman todas las actividades propias del área de correspondencia, allí se determinan los procedimientos de la documentación que se recibe y de la que se despacha, además de los diferentes formatos y planillas que permiten el control del trámite del documento. Este manual lo elaboran el gestor documental en conjunto con el líder de archivo, en el que analizan todas las alternativas para abarcar las necesidades del área y que de esta manera pueda ser entregado a quienes son los garantes del proceso de recepción y distribución de la información.</td>
            td.ps-4 Verificación de requisitos en la recepción del documento.
            <td rowspan= 3 style='padding-left: 25px; padding-top: 25px; vertical-align: top;'>Procedencia: estructura organizacional, manual de funciones, manual de procedimientos, fondo documental, series, subseries documentales, unidades documentales y tipos documentales.</td>
          tr
            td.ps-4 ISO 15489 (2001) Información y documentación - Gestión de documentos de archivo 
            td.ps-4 Radicación y registro de la información recepcionada.

          tr
            td.ps-4 Decreto 620 (2020) Lineamientos generales en el uso y operación de los servicios ciudadanos digitales.
            td.ps-4 Distribución o reparto teniendo en cuenta las condiciones en el aumento de la seguridad.
          tr
            td.ps-4 Decreto 2609 (2012) Por el cual se reglamenta el Título V de la Ley 594 de 2000, parcialmente los artículos 58 y 59 de la Ley 1437 de 2011 y se dictan otras disposiciones en materia de Gestión Documental para todas las Entidades del Estado
            td.ps-4 Seguimiento a las comunicaciones oficiales en la generación de reprocesos o respuesta tardía.
            <td rowspan= 3 style='padding-left: 25px; padding-top: 25px; vertical-align: top;'>Orden original: legitimidad del orden dentro del expediente, atendiendo la elaboración del documento de acuerdo con el orden de llegada de la solicitud y, por ende, el almacenamiento en las unidades de conservación según la secuencia del trámite.</td>
          tr
            <td rowspan= 2 style='padding-left: 25px; padding-top: 25px; vertical-align: top;'>Acuerdo 060 (2001) Pautas para la administración de las comunicaciones oficiales en las entidades públicas y las privadas que cumplen funciones públicas.</td>
            td.ps-4 Despacho de documentos para la optimización de procesos.
          tr
            td.ps-4 Traslado de documentos en el acceso total de la información.


</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
    BannerInterno,
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
