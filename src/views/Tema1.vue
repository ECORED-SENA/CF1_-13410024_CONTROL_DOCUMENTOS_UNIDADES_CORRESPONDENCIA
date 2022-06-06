<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    //- Muestras
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
      .col-xxl-8.col-sm-10.col-11
        img.encima(src='@/assets/curso/tema1/figura2.svg')(data-aos="fade-down")
      .row.justify-content-end
        .col-xxl-8.col-lg-8.col-sm-10.col-11(data-aos="slide-left")
          p.my-5.encima Los documentos se han mantenido en formato físico durante mucho tiempo, pero desde hace algunos años se pueden contener de manera digital en archivos de diferentes formatos. Todos los documentos digitales o análogos requieren como mínimo los siguientes 4 elementos:
      .row.justify-content-center.align-items-center
        .col-xxl-5.col-sm-6.col-8
          img.mb-4(src='@/assets/curso/tema1/imagen1.png')(data-aos="slide-right")
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
      .col-xxl-7.col-lg-7.col-sm-10.col-11(data-aos="slide-right")
         img(src='@/assets/curso/tema1/archivo.svg')
    p.my-5.text-center Por otra parte, se tienen los documentos digitales, que también se almacenan con el mismo fin que los documentos físicos. Observe algunas características de este tipo de archivo digital:
    figure.mb-5(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    p.my-5.text-center Los documentos digitales deben tener los siguientes datos:
    .row.justify-content-center
      .col-xxl-7.col-lg-7.col-sm-10.col-11(data-aos="slide-right")
        img(src='@/assets/curso/tema1/electronico.svg')
    .row.justify-content-center
      .col-xxl-7.col-lg-7.col-sm-10.col-11(data-aos="fade-right")
        p.my-5 Galán (2012) define el archivo como 
          span.resaltar “el conjunto de documentos, sea cual sea su forma, fecha o soporte, producidos por cualquier persona física o moral, o por cualquier organismo público o privado en el ejercicio de su actividad”
          span ; ese conjunto de documentos es el que resguarda el patrimonio documental de las entidades. Estas actividades, por lo general, se hacen en un área reservada de las entidades y son administradas por una persona que se vuelve responsable de lo que allí se soporta. Sin embargo, en algunas entidades, este espacio carece de un funcionario que controle la documentación que ingresa mediante las transferencias documentales y que realice la sensibilización de las unidades administrativas con respecto a los procesos de gestión documental, entre otras actividades.
      .col-xxl-5.col-lg-5.col-sm-6.col-8(data-aos="fade-left")
        img(src='@/assets/curso/tema1/imagen3.png')
    .row.justify-content-center.align-items-center.fondo3.mt-5.ampliar.px-5(data-aos="fade-down-left") 
      .col-xxl-3
        p Los diferentes tipos de archivos y el estado en el que se pueden encontrar se presentan a continuación: 
      .col-xxl-3.col-sm-6.col-lg-3.mb-4.mb-lg-0.bajar
        .tarjeta--boton.color-primario.p-4.tamanotarjeta
          .row.justify-content-center.mb-3
            .col-5.col-sm-7.col-md-7.col-lg-7.col-xl-7
              figure
                img(src='@/assets/curso/tema1/boton1.svg')

          h3.text-center Archivo gestión
          p.text-center Documentos que se usan con frecuencia, por ejemplo: recibos de pago.
          br

      .col-xxl-3.col-sm-6.col-lg-3.mb-4.mb-lg-0.bajar
        .tarjeta--boton.color-primario.p-4.tamanotarjeta
          .row.justify-content-center.mb-3
            .col-5.col-sm-7.col-md-7.col-lg-7.col-xl-7
              figure
                img(src='@/assets/curso/tema1/boton2.svg')

          h3.text-center Archivo central
          p.text-center Documentos que han disminuido su consulta, de acuerdo con las Tablas de Retención Documental (TRD).

      .col-xxl-3.col-sm-6.col-lg-3.mb-4.mb-lg-0.bajar
        .tarjeta--boton.color-primario.text-white--hover.p-4.tamanotarjeta
          .row.justify-content-center.mb-3
            .col-5.col-sm-7.col-md-7.col-lg-7.col-xl-7
              figure
                img(src='@/assets/curso/tema1/boton3.svg', alt='Texto que describa la imagen')

          h3.text-center Archivo histórico
          p.text-center Almacena la información que amerita su conservación total, de acuerdo con lo descrito en las TRD.

    .row.justify-content-center.align-items-center.fondo4.my-5
      .col-xxl-7.col-lg-7.col-sm-11.col-11(data-aos="fade-down-right") 
        p La archivística es 
          span.resaltar.text-bold “el estudio teórico y práctico de los principios, procedimientos y problemas concernientes al almacenamiento de documentos, buscando que dicha documentación, se mantenga en el tiempo, pueda ser consultada y clasificada” 
          span (Archivosagil, 2018); este estudio arroja como resultado que
        p todas las unidades administrativas que cumplan funciones relacionadas con el manejo documental incluyan principios archivísticos en su gestión documental dentro de la entidad, la idea es hacer práctico el uso de los documentos.
      .col-xxl-5.col-lg-5.col-sm-6.col-8(data-aos="fade-down-left") 
        img.mb-4(src='@/assets/curso/tema1/imagen4.png')

    p.my-5 Los principios de la archivística son dos, tal como lo relaciona la Universidad Nacional de Córdoba (2019):

    .row.justify-content-center
      .col-xxl-10.col-lg-10.col-sm-10.col-11
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1
          span.text-small Principios archivísticos
        .tabla-a.color-acento-botones.mb-5(data-aos="fade-down-left") 
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
        .tabla-a.color-acento-botones.mb-5(data-aos="fade-down-left") 
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
      .col-xxl-6.col-lg-6.col-sm-10.col-11(data-aos="fade-down-right") 
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span.text-small Ejemplo de Principio de orden original
        img.mb-4(src='@/assets/curso/tema1/imagen5.png')
      .row
        .col-xxl-4.col-xl-5.col-lg-6.col-md-8.col-sm-10.col-12(data-aos="slide-left")             
          p.fondo6.padTitulo.text-bold.ancho1 Clasificación de los documentos

      .row.justify-content-center
        .col-xxl-6.col-lg-8.col-sm-10.col-11(data-aos="fade-down-left") 
          p La buena gestión de la información que ingresa a la entidad y que se produce en ella nace del uso que se le dé al soporte, la identificación de procedencia y de la finalidad con que se redacta el mensaje. No todos los soportes son documentos de archivo o documentos electrónicos, la información se puede resguardar en un plano, en una fotografía, en un video, incluso, puede tener aspecto multimedia, en un audio, etc. A todos estos datos se les debe garantizar los mismos procedimientos archivísticos para su conservación. 
          p Una fotografía puede ser el anexo de una solicitud que se radica en ventanilla única, se registra y se distribuye a la unidad administrativa competente. En algunos casos, esta información no llega completa al área donde se elabora la respuesta, lo que perjudica el concepto que emite el funcionario competente. Lo anterior es el talón de Aquiles de las unidades de correspondencia, que, a falta de formatos, actividades y procedimientos, dejan toda la responsabilidad a la memoria del responsable de la gestión de documentos. En la siguiente infografía, se presenta la clasificación de los documentos:
        .col-xxl-4.col-lg-4.col-sm-6.col-8(data-aos="fade-down")
          img.mb-4.encima(src='@/assets/curso/tema1/imagen6.svg')
    .row.justify-content-center.mt-5
      .col-xxl-10.col-lg-10.col-sm-10.col-11.fondo7
        .row.justify-content-center
          .col-xxl-5.col-lg-5
            h3.mb-0.p-3.fondo8.text-center CLASIFICACIÓN DE LOS DOCUMENTOS

        ImagenInfografica.color-acento-botones(data-aos="fade-down-left") 
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
      .col-xxl-4.col-xl-5.col-lg-6.col-md-8.col-sm-10.col-12(data-aos="slide-left")             
        p.fondo6.padTitulo.text-bold Características del documento

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-down-left") 
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
    .row.justify-content-center(data-aos="fade-down-left") 
      .col-xxl-10.col-lg-10.col-sm-10.col-11.p-4
        .cajon.color-acento-contenido.p-4.mb-4.fondo9
          p Tanto quien elabora el documento como el funcionario de la unidad de correspondencia que lo recibe son responsables de velar porque los documentos presentados evidencien estos elementos para su fácil identificación y organización documental. Si por algún caso el documento carece de esta información, significa que la persona a cargo no validó la información y está infringiendo el proceso de gestión documental. Ante esta situación, se encuentra constantemente el proceso de capacitación, para que los empleados responsables del proceso lo hagan cumplir a cabalidad, para dar trámite sin perjudicar a otros participantes del proceso.

    .row
      .col-xxl-4.col-xl-4.col-lg-5.col-md-6.col-sm-7.col-4(data-aos="slide-left")                  
        p.fondo6.padTitulo.text-bold.ancho2 Unidad documental.

    p.mb-5 Tener la disponibilidad de la información es establecer expedientes que cumplan con las series y subseries documentales descritas en el instrumento archivístico de las Tablas de Retención Documental (TRD), descifrando los expedientes complejos o simples, como se evidencia a continuación en la gráfica de tipos de unidades documentales:

    .row.justify-content-center(data-aos="fade-down-left") 
      .col-xxl-6.col-lg-6.col-sm-8.col-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 4
          span.text-small Tipos de unidades documentales
        img.mb-4(src='@/assets/curso/tema1/figura4.svg')
    p.mb-5 Una unidad documental compleja es aquella conformada por varios tipos documentales, estos documentos son diferentes, pero hacen parte de la misma unidad de documentos, como se ve en la siguiente tabla:

    .row.justify-content-center.fondo2.correr-izq2
      .col-xxl-6.col-lg-6.col-sm-8.col-10.ms-5(data-aos="fade-down-left") 
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

      p.mb-5.ms-5(data-aos="fade-down-left")  Las unidades documentales complejas suelen confundir a quien clasifica, ordena y describe la información para la conformación del expediente, ya que necesita conocer las funciones de la unidad administrativa que da lugar al expediente de archivo o el expediente electrónico, y además sus tipos documentales varían según la estructura, pero no se pueden separar, ya que forman parte de un mismo proceso. 
      .row.justifycontent-center
        .col-xxl-5.col-lg-5.col-sm-6.col-10.ms-5(data-aos="fade-down-left") 
          img.mb-4(src='@/assets/curso/tema1/figura5.svg')
        .col-xxl-7.col-lg-7.col-sm-10.col-11.ms-5(data-aos="fade-down-right") 
          .cajon.color-acento-contenido.p-4.mb-4.fondo9
            p Un ejemplo cotidiano de falencia presentada en las unidades de correspondencia es la apertura de expedientes bajo la denominación de correspondencia recibida y correspondencia enviada, un fatal error que, como nace en el centro de administración de documentos, se lleva a las demás oficinas productoras, ocasionando una ruta de desorganización y pérdida de acceso a la información de manera oportuna.
          p Las Unidades Documentales, en adelante UD, son creadas a razón de un mismo formato o estructura en el que se facilita la integración al expediente; por ejemplo, se pueden citar las resoluciones en las que sustentan un mismo modelo acorde con la política institucional, lo único que varía de este documento sería: número de resolución, fechas y lo que resuelve.         
          .row.justify-content-center
            .col-xxl-5.col-lg-5.col-sm-6.col-8
              img.mb-4(src='@/assets/curso/tema1/figura6.svg')
            .col-xxl-5.col-lg-5.col-sm-6.col-8
              img.mb-4(src='@/assets/curso/tema1/figura7.svg')
      p.mt-5.ms-5(data-aos="fade-down-left")  Las unidades documentales complejas o simples están constituidas por el cumplimiento de las funciones, para no separar procesos que vinculan información. 
      p.mb-5.ms-5(data-aos="fade-down-left")  La tipología documental que se genera en las unidades de correspondencia va en razón de las comunicaciones oficiales, por ello, toda comunicación que ingrese o se despache tiene que transitar de acuerdo con lo establecido en el  ciclo PHVA: planear, hacer, verificar y actuar. Para la producción documental, se relaciona con:
    .row.justify-content-center
      .col-xxl-10.col-lg-10.col-sm-10.col-11
        .tabla-a.color-acento-botones.mb-5(data-aos="fade-down-left") 
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

    p.my-5(data-aos="fade-down-left")  Para que haya un adecuado proceso en las unidades de correspondencia, previamente existe una planificación de cada una de las etapas que intervienen en los procesos de documentación, partiendo de lo que realiza la persona que recibe y radica un documento físico o electrónico, hasta la persona que archiva el documento en el expediente. Las competencias de administración documental son el eslabón para que empecemos a examinar todo lo que ingresa y sale de la entidad, así como el recorrido que hace hasta llegar a su disposición final. Si lo anterior no es apoyado en las competencias de la administración documental, se está condenado a cualquier amenaza cibernética, siniestro natural o biológico en el que pueda verse afectada la información; por ende, se indica la cooperación de cada competencia con el flujo de la información:

    .row.mb-5(data-aos="fade-down-left")
      .col-sm-4.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              img(src='@/assets/curso/tema1/imagen25.svg')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/imagen7.jpg')})`}")

      .col-sm-4.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              img(src='@/assets/curso/tema1/imagen26.svg')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/imagen8.jpg')})`}")

      .col-sm-4.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              img(src='@/assets/curso/tema1/imagen9.svg')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/imagen27.svg')})`}")

    p.my-5 Los detalles del almacenamiento con el tiempo han ido evolucionando, y para dar detalle a cada necesidad, se relacionan las formas de almacenar los documentos físicos y digitales:
    .row.justify-content-center
      .col-xxl-10.col-lg-10.col-sm-10.col-11(data-aos="fade-down-left") 
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
                td.p-3 La información que se recopila de los canales virtuales es transportada a los sistemas de gestión de la información o <i>software</i> para dar respuesta. Periódicamente, se hacen los backups (copias de seguridad), se almacenan en la nube, dependiendo de la necesidad de la organización.
              tr
                td.p-3 Todo documento que conforme el expediente cuenta con su procedimiento de clasificación y ordenación, para que se almacene en las diferentes cajas de archivo inactivo con su identificación (rótulo) para la recuperación de la información.
                td.p-3 El trabajo de almacenamiento lo lideran los ingenieros de sistemas, quienes conforman el comité de archivo.
    .row.justify-content-center
      .col-xxl-5.col-lg-5.col-sm-7.col-9.encima(data-aos="fade-down-left") 
        img.mb-4(src='@/assets/curso/tema1/imagen10.png')
      .col-xxl-7.col-lg-7.col-sm-10.col-11(data-aos="fade-down-right") 
        p Con 
          span.text-bold relación 
          span al mantenimiento, la 
          span.text-bold relación 
          span debe ser extrema, no solo por mantener el archivo distante de amenazas como roedores o humedad, sino que se debe prevenir la pérdida o los ingresos exteriores al sistema; para eso, se recomienda establecer los permisos dentro de la entidad para la visualización según las categorías de la información, que, para su conocimiento, es de tres tipos:  pública, clasificada, reservada. Por ejemplo, hay cierta información que solo puede conocer quien la genera, no habrá permisos para las demás áreas  en cuanto a visualización y menos a su publicación.
        .row.justify-content-end.fondo12.correr-izq3
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

    .row.justify-content-center.mt-5
      .col-xxl-7.col-lg-7.col-sm-10.col-11
        p Los lineamientos en el manejo de las comunicaciones oficiales ofrecen a las instituciones erradicar los problemas que se derivan de las fallas de transparencia y acceso a la información, dificultad en la recuperación de información e irregularidades en el servicio que se presta al usuario a causa del incumplimiento de las pautas de la administración documental. Por otra parte, la institución también asume su aporte de responsabilidad entregando a quienes ejercen las herramientas y equipos que contribuyen a su exitosa tarea frente a la creciente información, por lo que se suministra la transformación de controles manuales a automatizados que faciliten el proceso en la prestación del servicio de atención al usuario, radicación de correspondencia y seguimiento a las comunicaciones oficiales.
      .col-xxl-5.col-lg-5.col-sm-6.col-8
        img.mb-4(src='@/assets/curso/tema1/imagen11.png')

    p.mb-5 En la extensión de los criterios de la administración documental, se establece la noción de las comunicaciones oficiales que rodean la entidad; para lograr la trazabilidad de las comunicaciones, se relacionan los 3 elementos a supervisar, como se muestra en el siguiente gráfico:

    SlyderA.fondo14(tipo="b")
      .row.justify-content-between.p-5
        .col-md-4.mb-4.mb-md-0
          h4.mb-5 Comunicaciones oficiales
          p Documentos físicos o electrónicos que se reciben, se distribuyen y se despachan en atención al servicio al ciudadano, por medio de quienes ejercen las funciones administrativas de la institución pública o privada.
      
        .col-md-7.pe-5
          figure
            img(src='@/assets/curso/tema1/imagen12.png')

      .row.justify-content-between.p-5
        .col-md-4.mb-4.mb-md-0
          h4.mb-5 Internas
          p Aquellas que se producen a razón de informar sobre un acontecimiento, hecho o situación entre los funcionarios de las diferentes unidades administrativas. Entre las más comunes, se encuentran: informes, circulares, memorandos.
          p Las comunicaciones enunciadas anteriormente y que se dirigen de una dependencia a otra hacen escala en la unidad de correspondencia para su respectivo ingreso al sistema mediante el radicado. 
        .col-md-7
          figure
            img(src='@/assets/curso/tema1/imagen13.png')

      .row.justify-content-between.p-5
        .col-md-4.mb-4.mb-md-0
          h4.mb-5 Recibidas
          p PQRS, solicitudes de información, derechos de petición, acciones de tutela, correos electrónicos, entre otros, que utiliza el ciudadano como soporte para comunicarse ante la institución y hacer un requerimiento. El funcionario, antes de recibir la documentación, procede a hacer verificación de requisitos tales como: competencia, firmas, cantidad de folios, dirección y teléfono del remitente, en aras de que cuando se genere la respuesta pueda llegar al usuario. 
      
        .col-md-7
          figure
            img(src='@/assets/curso/tema1/imagen14.png')

      .row.justify-content-between.p-5
        .col-md-4.mb-4.mb-md-0
          h4.mb-5 Enviadas
          p Es la documentación que produce una institución con una finalidad, que puede ser: responder a un requerimiento, solicitar información, felicitar, persuadir y demás. Quienes la producen tienen el deber de facilitarla al área de correspondencia para el respectivo radicado de salida y el despacho del documento. En documentos electrónicos, es el mismo procedimiento, solo que no se despacha mediante un servicio postal, sino que se registra en la misma trazabilidad que se recibe. Ejemplo: correo electrónico, portal web.
        .col-md-7
          figure
            img(src='@/assets/curso/tema1/imagen15.png')
    .row.fondo2.correr-izq2
      .col-xxl-4.my-5.col-lg-5.col-md-7.col-sm-11.col-12.ms-5(data-aos="slide-left")        
        p.fondo6.padTitulo.text-bold Despacho de documentos
      .row.justify-content-center.ms-5
        .col-xxl-5.col-lg-5.col-sm-7.col-8(data-aos="fade-down-left")
          img(src='@/assets/curso/tema1/figura9.svg')
        .col-xxl-5.col-lg-5.col-md-10.col-sm-10.col-11(data-aos="fade-down-right")
          p.mt-4 El despacho de documentos inicia cuando la oficina productora remite la comunicación a la unidad de correspondencia para que esta se encargue de hacer el despacho; los funcionarios de la unidad de correspondencia proceden a revisar que la documentación tenga las especificaciones requeridas: membrete de la entidad, número de copias, el adecuado embalaje y el responsable de firmar el documento.
          p Con esta verificación, se le inserta el radicado de salida ubicado en el extremo superior derecho, para oficializar el envío; en este procedimiento, se resalta que la documentación a la que se le imprime un radicado de salida es la que ha cumplido con lo relacionado, dicho en otras palabras, no puede haber radicados de salida en documentos que aún están pendientes por la firma del funcionario competente o que les falta algún anexo, ya que la fecha de este radicado debe ser lo más cercana posible al envío.
        .row.justify-content-center
          .col-xxl-8.col-lg-8.col-sm-10.col-11(data-aos="fade-down-left")
            p La preparación del embalaje de la documentación la ejecutan las oficinas productoras, es decir, donde se crea el documento y se traslada a la unidad de correspondencia, de tal manera que, cuando el funcionario haya dado el radicado de salida y registrado en la planilla de control de despacho de documentos, se pueda proceder a resguardar el documento en el embalaje que ha propuesto la oficina productora, siempre y cuando cumpla con los parámetros que exige la mensajería postal.
            p La oficina productora puede solicitar la copia de la respuesta radicada para la conformación de la serie documental de la dependencia, una vez el responsable de la unidad de correspondencia haya realizado el proceso de envío del documento, y la otra copia es de uso de la unidad de correspondencia para el control de los consecutivos de correspondencia despachada.
          .col-xxl-4.col-lg-4.col-sm-6.col-8(data-aos="fade-down-right")        
            img(src='@/assets/curso/tema1/imagen16.png')

        p.mt-5(data-aos="slide-right") Una de las habilidades del responsable de la unidad de correspondencia es saber seleccionar el medio seguro y oportuno para hacerle llegar la comunicación al ciudadano o usuario. Se debe diligenciar la planilla de control de despacho de correspondencia para manifestar que se dejó constancia de esta acción.
        p.mb-5(data-aos="slide-right") A continuación, se presenta una planilla de control de documentos básica, que puede usar para sus buenas prácticas:

    .tabla-a(data-aos="fade-down-right")
      table
        tbody
          tr
            td
              h4.text-center Número de radicado de salida
            td
              h4.text-center Fecha
            td
              h4.text-center Destinatario
            td
              h4.text-center Medio de envío
          tr
            td
            td
            td
            td
          tr
            td
            td
            td
            td
          tr
            td
            td
            td
            td
    .row
      .col-xxl-4.col-lg-5.col-md-9.col-sm-11.col-12.mt-5(data-aos="slide-left")        
        p.fondo6.padTitulo.text-bold Radicación de documentos

    p.mb-5(data-aos="fade-down-left") Tal como lo menciona Analítica (2019), se conoce como radicación al 
      span.resaltar.text-bold “proceso por el cual se asigna un identificador (número de radicado) a un documento y se le asocia cierta información que se considere relevante a la hora de ingresar”
      span , y se elabora para  comunicaciones oficiales recibidas y enviadas. La impresión de este radicado puede realizarse de manera manual o automatizada, de acuerdo con las políticas de la organización. En la radicación, se requiere verificar los requisitos para el ingreso de la documentación y sellarla como lo indica la normatividad en el cuidado de la imagen corporativa e integridad del documento; la norma recomienda que sea en el extremo superior derecho para el caso de los documentos físicos.
    p.text-center.text-bold El proceso de radicación se da de la siguiente manera:
    .row.justify-content-center
      .col-xxl-8.col-lg-8.col-sm-9.col-10(data-aos="fade-down-right")
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/figura10.svg')

          .tarjeta.fondohistograma2.p-3(x="15%" y="32%" numero="")
            .h3.mb-2 Recepción
            p En cada inicio de vigencia, se cuenta con nueva radicación consecutiva. Siempre se recibe y se radica información, a pesar de no haber energía eléctrica o sistema computarizado. Para este caso, el funcionario tiene la facultad de continuar recibiendo documentos de manera manual, según el consecutivo en el que haya quedado, para no retrasar su trabajo y la atención al usuario. Cuando retorne la energía eléctrica, hará la respectiva gestión de aquellos documentos que se radicaron manualmente.

          .tarjeta.fondohistograma2.p-3(x="50%" y="32%" numero="")
            .h5.mb-2 Copia
            p Una vez se radique el documento físico, se hace entrega de la copia al usuario, para que pueda hacer seguimiento a la comunicación a través del número consecutivo. En la radicación de documentos electrónicos, una vez se haya oficializado el trámite con la entidad, se envía al sistema de gestión documental para la distribución electrónica de la información a la unidad administrativa competente.

          .tarjeta.fondohistograma2.p-3(x="84.5%" y="32%" numero="")
            .h5.mb-2 Compromiso
            p El compromiso de la entidad para tramitar la correspondencia inicia en el momento en que se radica el documento. Previamente, tenga en cuenta los siguientes aspectos:
            ul.lista-ul--color
              li 
                i.fas.fa-book-open
                | Que la documentación que se recibe de manera presencial se encuentre foliada.
              li
                i.fas.fa-book-open
                | Que los anexos indicados en el documento sean los presentados.
              li 
                i.fas.fa-book-open
                | Que la correspondencia a título personal no se radica.
              li 
                i.fas.fa-book-open
                | Que documentación sin firmas no se radica.        
              li 
                i.fas.fa-book-open
                | Que, en la cuestión de documentos electrónicos, estos sean legibles.

    p.mb-5 Según lo contemplado en el Acuerdo 060 del Archivo General de la Nación (2001), en el Art. 2, la radicación de comunicaciones oficiales es la asignación de datos tales como: fecha y hora de ingreso o envío de la entidad a documentos recibidos de parte del usuario o producidos por un funcionario de la entidad. Es así como el radicado tiene la función de apropiar el documento externo, y también es a partir de la fecha de este sello radicado que se empiezan a contar los tiempos para la producción de la respuesta.
    .row.justify-content-center.align-items-center.encima.fondo5.correr-der2
      .col-xxl-5.col-lg-5.col-sm-7.col-9.encima.ms-0.mt-3(data-aos="fade-left")
        img.subir2(src='@/assets/curso/tema1/imagen17.png')
      .col-xxl-7.col-lg-7.col-sm-10.col-11(data-aos="fade-down-right")
        .row.justify-content-end.fondo12.correr-izq3.subir2.me-5.mt-3
          .col-xxl-7.col-md-7.col-sm-7.col-7.py-4.encima
            p.text-bold Nota:
            p No se pueden guardar ni reservar números de radicación, en cumplimiento con lo señalado en el Acuerdo 060 expedido por el Archivo General de la Nación (2001).
      separador
      #norma.titulo-segundo.color-acento-contenido(data-aos="fade")
        h2 1.4. Norma técnica vigente de calidad
      p.mb-5(data-aos="fade-down-left") En la implementación de unidades de correspondencia armonizadas, se necesita contar con la estandarización de los procesos, trazando rutas que aseguren el documento hasta llegar a su disposición final. Por ello, este proceso es acompañado de la normatividad vigente que permita garantizar calidad en:
      .row.justify-content-center.align-items-center(data-aos="fade-down-right")
        .col-xxl-4.col-lg-4.col-sm-7.col-9(data-aos="fade-left")
          img(src='@/assets/curso/tema1/figura11.svg')
        .col-xxl-8.col-lg-8.col-sm-10.col-11
          ul.lista-ul--color.mt-4
            li 
              i.fas.fa-book-open
              | Registros de planillas de control.
            li
              i.fas.fa-book-open
              | Acceso oportuno a la documentación.
            li 
              i.fas.fa-book-open
              | Imagen institucional en la producción del documento. 
            li 
              i.fas.fa-book-open
              | Definición de roles en los procesos de documentación.      
            li 
              i.fas.fa-book-open
              | Procedimientos que brinden organización a la unidad de correspondencia.        
            li 
              i.fas.fa-book-open
              | Normalización en la producción de documentos. 
    .row.justify-content-center.mt-5
      .col-xxl-8.col-lg-8.col-sm-10.col-11(data-aos="fade-down-right")
        .tabla-a.color-acento-botones.mb-5 
          table
            tbody
              tr.fondoTabla.align-items-top
                td
                  h3.text-center.mb-0 Normativa
                td
                  h3.text-center.mb-0 Para tener en cuenta
              tr.justify-content-top
                td.ps-4 Norma ISO 15489
                td.ps-4 Pensada para contribuir a las entidades, archivistas y cualquier funcionario que le despierte interés generar buenas prácticas en el manejo de la información.  Se describen las pautas para una correcta creación de la documentación en las oficinas productoras, programas que faciliten y preserven la utilidad del documento en el tiempo, calidad en las transferencias documentales y tiempos de retención en los diferentes ciclos de vida del documento hasta la disposición final: conservación total, eliminación, selección, microfilmación o digitalización.
              tr
                td.ps-4 Guía Técnica Colombiana GTC - 185
                td.ps-4 Tiene como objetivo brindar lineamientos a las oficinas productoras en la estructura y redacción del documento, y ofrecer sugerencias para los diferentes tipos documentales que se crean al interior de la entidad y que son pieza fundamental para una adecuada entrega del mensaje al usuario. En ella, se describen los márgenes que se utilizan para cada tipo documental, las partes que aborda cada documento, uso de cifras y datos numéricos, entre otros.
              tr
                td.ps-4 ISO 23081
                td.ps-4 La norma es utilizada como orientadora en el manejo de la gestión de los documentos electrónicos, suministrando flexibilidad en la extracción de los metadatos originados en el documento electrónico; el ingreso de los metadatos reconoce el acceso a la información a través de detalles como: nombre del autor, tipo de formatos y fechas del documento. 
              tr
                td.ps-4 Acuerdo 060 del Archivo General de la Nación
                td.ps-4 Soporta las directrices para el manejo de las comunicaciones oficiales, las pautas para la recepción de un documento, la radicación y registro, los controles en el flujo de información, el valor de contar con la unidad de correspondencia en cada entidad, entre otros aspectos que se detallan en este acuerdo y en los cuales se puede apoyar el funcionario de correspondencia y demás de la gestión documental para la creación de manuales de correspondencia.
              tr
                td.ps-4 Norma Técnica Colombiana NTC-4436
                td.ps-4 Es usada por las empresas que utilizan con mucha más frecuencia el documento en físico, para otorgar calidad en el medio que se utiliza para plasmar el mensaje y, asimismo, conservar este soporte documental en el tiempo, por lo que en la norma aconsejan el uso de papel de alta durabilidad, ya que allí se describen los componentes que tienen que considerarse para la compra de este tipo de papel para los documentos de archivo.
    .row.justify-content-center.align-items-center.fondo2.correr-izq2
      separador
      #alerta.titulo-segundo.color-acento-contenido.ms-5(data-aos="fade")
        h2 1.5. Servicio de alerta de correspondencia, concepto y procedimiento
      .col-xxl-3.col-lg-3.col-sm-5.col-7(data-aos="fade-down-left")
        img.ms-5(src='@/assets/curso/tema1/imagen18.png')
      .col-xxl-9.col-lg-9.col-sm-10.col-11(data-aos="fade-down-right")
        p.ms-5.mt-4 Dentro de las funciones de la Unidad de Correspondencia, se encuentra realizar seguimiento a las comunicaciones recibidas, para dar respuestas oportunas en atención del servicio al usuario. Este servicio es una agenda en la que se inspecciona cuáles documentos no han sido tramitados aún por la oficina productora y, de esta manera, brindar el informe al representante legal o quien haga las veces de principal autoridad. 
        p.ms-5 En las empresas que realizan procesos de control de manera manual y que la gran mayoría de documentos que se reciben son en papel, basta con observar las planillas de control, realizando un descargue de las respuestas tramitadas, es decir, se realiza un cruce de información con cada unidad administrativa de radicados de entrada con radicados de salida y es así como se obtiene la información de las comunicaciones a las que aún no se les ha dado respuesta. Esta actividad es realmente efectiva, ya que puede ser que el funcionario competente traspapeló dicha comunicación, pero, en el cumplimiento de las funciones, el responsable de la unidad de correspondencia le recuerda la documentación que tiene pendiente por trámite.
      .row.justify-content-center.align-items-center.mt-4.ms-5
        .col-xxl-8.col-lg-8.col-sm-10.col-11(data-aos="fade-down-left")
          p El control automatizado para generar el servicio de alerta se realiza mediante las herramientas que ofrece el sistema de gestión documental o <i>software</i> que maneja la entidad para la administración documental. El representante legal o principal autoridad podrá revisar, en el momento que lo desee, a través de la descarga del informe sobre los avances en el trámite de correspondencia, y determinará las unidades administrativas con bandejas de entrada en cero y aquellas cuyas solicitudes ya se encuentran tardías por respuesta; este es un control veraz hacia la eficacia de la empresa. En muchas empresas, se realizan planes de contingencia para subsanar bandejas de entrada de unidades administrativas con más de 100 correos represados en el sistema de gestión documental. 
          p Aunque, por lo general, este informe es agilizado por la unidad de correspondencia para presentarlo ante la dirección.
        .col-xxl-4.col-lg-4.col-sm-6.col-7(data-aos="fade-down-right")
          img(src='@/assets/curso/tema1/figura12.svg')
        p.my-5(data-aos="slide-right") Cuando las situaciones se tornan delicadas a partir de un descuido en las respuestas no generadas, se pueden generar llamados de atención y sanciones.
    .row.justify-content-center
      .col-xxl-8.col-lg-8.col-sm-9.col-11(data-aos="fade-down-left")
        img(src='@/assets/curso/tema1/figura13.svg')
      .col-xxl-7.col-lg-7.col-sm-9.col-10.fondo15.p-4.mt-5(data-aos="fade-down-right")
        p Dicho de otra manera, empezar a apagar el incendio que, en ocasiones, es manejable, como solicitudes o peticiones que ya vencieron, y situaciones criticas en tipos documentales, como derechos de petición, acciones de tutela, fallos y demás que dieran lugar a sanciones disciplinarias y penales a la entidad. 
    p.my-5 El servicio de alerta en algunas empresas es gestionado todos los fines de cada mes, enviando información a las unidades administrativas acerca de las comunicaciones que aún están pendientes por respuesta. Este servicio tiene la finalidad de cooperar en la atención al usuario y posicionamiento de la entidad. 

    .row.justify-content-center.align-items-center.fondo4.my-5
      .col-xxl-7.col-lg-7.col-sm-10.col-11(data-aos="fade-down-right")
        p Cabe resaltar que tanto el funcionario de la Unidad de Correspondencia como los funcionarios de las diferentes unidades administrativas han de tener conocimiento en los tiempos de Ley otorgados para dar respuesta de acuerdo con el tipo documental que presente el usuario a través de cualquier medio, información cuya normativa se fundamenta en la Ley 1755 de 2015.
      .col-xxl-5.col-lg-5.col-sm-6.col-8(data-aos="fade-down-left")
        img.mb-4(src='@/assets/curso/tema1/imagen19.png')
    separador
    #practicas.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.6. Buenas prácticas de salud en el trabajo para la gestión de documentos
    p.my-5(data-aos="fade-down-right") Los elementos o equipos de protección personal (EPP) se requieren para el amparo de salud en el ámbito de las funciones que realiza el colaborador. Quienes ejecutan funciones de la unidad de correspondencia pueden presentar enfermedades con la manipulación de grandes cantidades de papel, que van desde problemas respiratorios hasta un sistema inmunológico débil. Por ello, la persona encargada de la seguridad y salud en el trabajo sensibiliza sobre el uso de elementos de protección personal en unidades de correspondencia, tales como: guantes, tapabocas, antibacterial, entre otros que favorezcan integralmente la inmunidad del funcionario. Los siguientes son los elementos básicos a tener en cuenta como artículos básicos de trabajo:

    SlyderA.fondo14.mb-5(tipo="b")(data-aos="fade-down-left")
      .row.justify-content-between.p-5.align-items-center
        .col-xxl-6.col-xl-6.col-lg-7.col-md-11.col-sm-11.col-11.mb-4.mb-md-0
          h4.mb-5 Guantes
          p la entidad dotará de este implemento a las unidades de correspondencia, archivo y demás que así lo requieran. Por lo general, los que entregan la entidad son de látex, aunque algunos funcionarios pueden ser alérgicos, por lo que la empresa opta por hacer pedidos de guantes de vinilo; lo cierto es que cualquiera de los dos cumple con la función de proteger las manos que están en constante contacto con el documento. Los riesgos de no utilizar guantes pueden ser hongos, inflamaciones en los dedos y alergias provocadas por contaminación.
      
        .col-xxl-6.col-xl-6.col-lg-5.col-md-1.col-sm-1.col-1.pe-5
          figure
            img.nomostrar1(src='@/assets/curso/tema1/imagen20.png')

      .row.justify-content-between.p-5
        .col-xxl-6.col-xl-6.col-lg-7.col-md-11.col-sm-11.col-11.mb-4.mb-md-0
          h4.mb-5 Tapabocas
          p Utilizados por cualquier unidad administrativa que, por razones de humedad, polvo y demás contaminantes, demande su uso. El tapabocas protege la zona de la nariz por donde ingresa el aire al cuerpo, y bloquea el acceso de polvo. Este elemento de protección personal beneficia, a modo de obstáculo, el frotar las manos por la boca o realizar una mala práctica con la saliva, como es el de utilizarla para facilitar el conteo de las páginas de un expediente o foliación.
        .col-xxl-6.col-xl-6.col-lg-5.col-md-1.col-sm-1.col-1
          figure
            img.nomostrar1(src='@/assets/curso/tema1/imagen21.png')

      .row.justify-content-between.p-5
        .col-xxl-6.col-xl-6.col-lg-7.col-md-11.col-sm-11.col-11.mb-4.mb-md-0
          p Antibacterial, jabones y toallas para la limpieza de manos después de cada actividad. La ventanilla única de atención presencial ha de contar con un vidrio o cristal que separe o divida al funcionario del usuario al que presta atención. 
      
        .col-xxl-6.col-xl-6.col-lg-5.col-md-1.col-sm-1.col-1
          figure
            img.nomostrar1(src='@/assets/curso/tema1/imagen22.png')

      .row.justify-content-between.p-5
        .col-xxl-6.col-xl-6.col-lg-7.col-md-11.col-sm-11.col-11.mb-4.mb-md-0
          h4.mb-5 Aire fresco
          p Si bien no se considera un EPP, es fundamental para la salud física del colaborador. Se recomienda que la oficina cuente con una fuente de aire fresco, como una ventana, o en caso de no ser así, que se hagan pausas activas para ir a respirar aire fresco a un sitio donde sí exista.
        .col-xxl-6.col-xl-6.col-lg-5.col-md-1.col-sm-1.col-1
          figure
            img.nomostrar1(src='@/assets/curso/tema1/imagen23.png')
    .row.justify-content-between.mt-5.fondo16(data-aos="fade-down-right")
      .col-xxl-7.col-xl-7.col-lg-7.col-md-11.col-sm-11.col-11
        p.p-3 Una afectación importante es la salud mental del responsable de la unidad de correspondencia, quien se encuentra todos los días en trabajo bajo presión y con filas interminables de recepción de comunicaciones; esta problemática trae consigo la desconcentración en sus actividades, lleva problemas del trabajo a la casa y trae problemas de la casa al trabajo que perjudican la secuencia del proceso.  Es fundamental el uso de pausas activas y condiciones de trabajo bien definidas para evitar que esto suceda.
        p.mt-3 No se recomienda, dentro de las prácticas documentales, dejar todo a la memoria. Algunos colaboradores trabajan basados en el compromiso de la memoria, ellos no llevan una agenda, no trazan un plan de trabajo, los recordatorios los llevan a su disco duro del cerebro, creen acordarse de todo lo que ejecutan, y esto los lleva a dejar pasar compromisos importantes, teniendo a su disposición todas las técnicas de organización y alerta de las que se habla en este programa.
      .col-xxl-5.col-xl-5.col-lg-5.col-md-6.col-sm-7.col-8.encima(data-aos="fade-down-left")
        img.subir2(src='@/assets/curso/tema1/imagen24.png')



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
