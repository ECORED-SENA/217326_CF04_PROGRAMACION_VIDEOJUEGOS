<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Materiales y texturizado

    p.mb-4(data-aos="fade") Los materiales permiten dar atributos al objeto para que las superficies de estos tengan el aspecto que se busca, con ello se puede controlar el color, la cantidad de reflexión, la rugosidad de ese material, su transparencia, su refracción, además de que pueden contener texturas y, según todos estos parámetros, ver cómo la luz interactúa sobre él.

    .row.justify-content-center.align-items-center
      .col-lg-8.mb-4(data-aos="fade-right")
        .row.mb-3
          .col-1.pe-0
            .bg-3.h-100.p-1.px-2.d-flex.align-items-center.justify-content-center
              h4.mb-0.text-white 1
          .col-11.ps-0
            .bg-1.h-100.p-3
              p.mb-0 Estos materiales permiten que se creen gran variedad de estilos, como vidrio, metal, tela, plástico, humo, fuego, madera y el material estilo #[em cartoon]. 
        .row.mb-3
          .col-1.pe-0
            .bg-3.h-100.p-1.px-2.d-flex.align-items-center.justify-content-center
              h4.mb-0.text-white 2
          .col-11.ps-0
            .bg-1.h-100.p-3
              p.mb-0 Los materiales constan de diferentes propiedades, una de ellas es cómo absorbe la luz, si se refracta o se refleja, esto quiere decir que un material metálico puede reflejar bastante luz, en cambio un material como una tela puede absorber luz y no reflejar demasiado.
        .row.mb-3
          .col-1.pe-0
            .bg-3.h-100.p-1.px-2.d-flex.align-items-center.justify-content-center
              h4.mb-0.text-white 3
          .col-11.ps-0
            .bg-1.h-100.p-3
              p.mb-0 Los materiales de volumen permiten crear humo y fuego, y el material de desplazamiento puede generar volumen en la malla, esto puede ser simulado o puede ser real.
      .col-lg-4.col-9.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t5/img.png', alt='')

    p.mb-4(data-aos="fade") Finalmente, podrá conocer los materiales y diferentes tipos de texturas. 

    .fondo-subt.w-fit.pe-4.mb-4(data-aos="fade")
      .row.d-flex.align-items-center.text-white
        .col-4.col-md-3
          img(src='@/assets/curso/temas/t5/subt.svg', alt='', style="max-width: 85px;")
        .col-8.col-md-9
          h3.mb-0 #[em Physically based rendering] (PBR)

    .position-relative.mb-5(data-aos="fade-down") 
      img(src='@/assets/curso/temas/t5/img2.png', alt='')
      .bg-4.p-2.px-md-2.text-encima
        p.mb-0.text-white Son materiales que simulan los objetos del mundo real, y para ello hacen uso de diferentes texturas. 

    .fondo-subt.w-fit.pe-4.mb-4(data-aos="fade")
      .row.d-flex.align-items-center.text-white
        .col-auto 
          img(src='@/assets/curso/temas/t5/subt.svg', alt='', style="max-width: 85px;")
        .col-auto 
          h3.mb-0 Texturizado

    .row.justify-content-center
      .col-lg-6.col-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/img3.png', alt='')
      .col-lg-6.mb-4(data-aos="fade-left")
        p Para el texturizado se procede a sacar las uv, que diciéndolo de otra manera, son las costuras que tiene el personaje, como si de un vestido se tratase, con ello se puede hacer en 2D, lo que luego se quiere ver proyectado en 3D. Estos cortes son los que finalmente se posicionan en el apartado de la pestaña uv en el #[em software] de 3D.
        p En el ejemplo se puede observar un cubo 3D, con unas costuras de color rojo en sus filos, diseccionado y abierto como una caja que se va a plegar, a la derecha está dimensionado en 2D esa misma caja, pero esta vez abierta. Si se imagina  que estas piezas se doblan y se pegan, se creará el cubo. El cubo tiene 6 lados, que perfectamente se observan en la uv abierta, en 6 piezas unidas.

    p.mb-0(data-aos="fade") Estas uv quedan grabadas en el objeto 3D, lo que permitirá que las texturas que se vayan a aplicar hagan uso de las coordenadas del #[em uv mapping].
    p(data-aos="fade") Una forma de poner a una malla de baja densidad de poligonaje detalles de alta es haciendo los dos modelos, el de alta y el de baja, para después al de baja aplicarle el modelo de alta como mapa de desplazamiento, lo que hace que no se creen más polígonos, pero simula mayor detalle al dar la sensación mediante profundidad que hay relieves y texturas, al generar relieves en los 3 ejes. 
    p.mb-4(data-aos="fade") Hay varios tipos de texturas que se utilizan para generar diversos efectos en el modelo. Entre ellas se encuentran:

    .row.justify-content-center
      .col-lg-8(data-aos="fade-down")
        LineaTiempoD.color-acento-botones
          .row.p-2.p-md-3(numero="1" titulo="Mapa <em>diffuse</em>")
            .col-lg-3.col-5.col-md-4
              img.br-10(src='@/assets/curso/temas/t5/linea-img1.jpg', alt='') 
            .col-lg-9.col-7.col-md-8.d-flex.align-items-center
              p Es la textura primaria, el color sobre los elementos 3D.
          .row.p-2.p-md-3(numero="2" titulo="Mapa desplazamiento")
            .col-lg-3.col-5.col-md-4
              img.br-10(src='@/assets/curso/temas/t5/linea-img2.jpg', alt='') 
            .col-lg-9.col-7.col-md-8.d-flex.align-items-center
              p Brinda detalles al modelado, en este caso, desplazando y afectando los vértices del modelo.
          .row.p-2.p-md-3(numero="3" titulo="Mapa <em>specular</em>")
            .col-lg-3.col-5.col-md-4
              img.br-10(src='@/assets/curso/temas/t5/linea-img3.jpg', alt='') 
            .col-lg-9.col-7.col-md-8.d-flex.align-items-center
              p La textura que define el brillo se utiliza en escala de grises, entre más claro más brillo, y más oscuro, menos brillo.
          .row.p-2.p-md-3(numero="4" titulo="Mapa normal")
            .col-lg-3.col-5.col-md-4
              img.br-10(src='@/assets/curso/temas/t5/linea-img4.jpg', alt='') 
            .col-lg-9.col-7.col-md-8.d-flex.align-items-center
              p Al generar relieves en los 3 ejes brinda detalles al modelado, sin desplazar vértices.
          .row.p-2.p-md-3(numero="5" titulo="Mapa <em>bump</em>")
            .col-lg-3.col-5.col-md-4
              img.br-10(src='@/assets/curso/temas/t5/linea-img5.jpg', alt='') 
            .col-lg-9.col-7.col-md-8.d-flex.align-items-center
              p Antecesora a la textura #[em normal map], pero aún en uso, mediante escala de grises da la sensación de relieve, donde lo más blanco está más hacia adelante y lo más negro a profundidad.

   
</template>

<script>
export default {
  name: 'Tema5',
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
