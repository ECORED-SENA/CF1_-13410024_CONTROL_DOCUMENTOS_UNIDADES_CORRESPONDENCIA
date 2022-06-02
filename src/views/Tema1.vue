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
                img(src='@/assets/curso/tema1/boton1.svg', alt='Texto que describa la imagen')

          h3.text-center Archivo gestión
          p.text-center Documentos que se usan con frecuencia, por ejemplo: recibos de pago.
          br

      .col-xxl-3.col-sm-6.col-lg-3.mb-4.mb-lg-0.bajar
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/boton2.svg', alt='Texto que describa la imagen')

          h3.text-center Archivo central
          p.text-center Documentos que han disminuido su consulta, de acuerdo con las Tablas de Retención Documental (TRD).

      .col-xxl-3.col-sm-6.col-lg-3.mb-4.mb-sm-0.bajar
        .tarjeta--boton.color-primario.text-white--hover.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/boton3.svg', alt='Texto que describa la imagen')

          h3.text-center Archivo histórico
          p.text-center Almacena la información que amerita su conservación total, de acuerdo con lo descrito en las TRD.


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
