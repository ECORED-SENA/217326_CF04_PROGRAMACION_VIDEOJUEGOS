<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 #[em Blueprint]

    p.mb-4(data-aos="fade") Se basa en analizar, visualizar y presentar el diseño, por ejemplo, el personaje en posición frontal y otro en posición lateral, si se desea se puede hacer vista por la espalda, se utilizan unas líneas guías con la finalidad de que las alturas de las líneas del personaje concuerden, lo que facilita durante el momento de modelar en 3D el personaje, como se muestra a continuación.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .bg-1.p-4.px-lg-5
          .titulo-sexto.color-acento-contenido.mb-3
            p.mb-0 #[b Figura 2.] #[em Blueprint Flynn]
          figure
            img(src='@/assets/curso/temas/t2/fig2.png', alt='La imagen muestra dos representaciones esquemáticas de un personaje denominado "Blueprint Flynn", una desde una vista frontal y otra lateral') 
          figcaption Nota. SENA (2021)


</template>

<script>
export default {
  name: 'Tema2',
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
