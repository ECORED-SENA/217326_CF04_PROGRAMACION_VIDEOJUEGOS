<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El sonido y la animación son elementos cruciales para la creación de la atmósfera en los videojuegos. Aprender a manejar los formatos, características, principios y técnicas es fundamental para desarrollar recursos gráficos atractivos en el diseño de un videojuego. Los temas tratados en este componente quedan reflejados en el esquema presentado a continuación.

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis detalla los pasos en la animación y el sonido para videojuegos. En la sección de animación, se revisan técnicas históricas, se elige la técnica adecuada, y se procede al diseño y modelado de personajes y escenarios. En sonido, se identifican características y formatos relevantes para luego integrarlos en el producto final.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
