<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Exportación objetos y sonidos

    .row.justify-content-center
      .col-lg-10
        
        .cajon.color-secundario.p-4.mb-5(data-aos="fade-down")
          p.mb-0 Cómo llevar un modelo Blender a Unity, y tips para tener en cuenta para llevar todo en orden. Aquí se indican los pasos a seguir: 

        SlyderE(indicadores="derecha" data-aos="fade")
          .row
            .col-12.mb-4.mb-md-0
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 39.] Archivo exportar
              figure.mb-4
                img(src='@/assets/curso/temas/t9/fig39.png', alt='La imagen titulada muestra una captura de pantalla del software de modelado y animación 3D Blender.') 
              p Seleccionar el objeto a exportar, luego ir a #[em file - export] - fbx. Se exporta en la carpeta donde se usará.
          .row
            .col-12.mb-4.mb-md-0
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 40.] #[em Selected objects]
              figure.mb-4
                img(src='@/assets/curso/temas/t9/fig40.png', alt='La imagen titulada muestra una captura de pantalla de un cuadro de diálogo de exportación de archivos en un programa de software, probablemente Blender, dada la opción de exportar en formato FBX en la parte inferior.') 
              p Se escoge la casilla #[em Selected objects], si la intención es exportar solo lo que se tiene seleccionado en el escenario. Esto se hace muy útil pues en ocasiones hay en el escenario objetos ocultos o luces y planos, que, si no se activa la casilla mencionada, se exportan todos esos elementos que no se necesitan.
          .row
            .col-12.mb-4.mb-md-0
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 41.] #[em Preset]
              figure.mb-4
                img(src='@/assets/curso/temas/t9/fig41.png', alt='La imagen titulada muestra una ventana de exportación de un software de gráficos 3D, posiblemente Blender, superpuesta en primer plano') 
              p Para dejar guardada esta configuración para futuros proyectos, se puede crear el #[em Preset] en la exportación y asignarle un nombre.
          .row
            .col-12.mb-4.mb-md-0
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 42.] #[em Path mode]
              figure.mb-4
                img(src='@/assets/curso/temas/t9/fig42.png', alt='La imagen muestra el Path Mode configurado en Copy, lo que indica que al exportar, las texturas asociadas con los modelos 3D se incluirán en el archivo FBX') 
              p Si se quieren exportar las texturas junto al modelo, lo que se debe hacer es el #[em Path mode] cambiarlo a #[em Copy] y activar #[em Embed textures].
          .row
            .col-12.mb-4.mb-md-0
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 43.] #[em Inspector Extract]
              figure.mb-4
                img(src='@/assets/curso/temas/t9/fig43.png', alt='La imagen muestra el Inspector, donde hay una opción destacada para Extraer Materiales de un modelo importado, que es parte del proceso de importación y gestión de activos dentro de Unity.') 
              p Luego de ello, en Unity, una vez importado el personaje, se le da en #[em Inspector-extract textures extract materials], que abrirá una ruta donde almacenar los materiales que, una vez guardados, se aplicarán automáticamente al modelo.
          .row
            .col-12.mb-4.mb-md-0
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 44.] #[em Import]
              figure.mb-4
                img(src='@/assets/curso/temas/t9/fig44.png', alt='La imagen muestra el menú desplegable de Archivo con la opción Import resaltada. Esta función se utiliza para importar activos, como modelos 3D, texturas, sonidos, entre otros.') 
              p Ahora se puede probar cómo el modelo queda en Unity, de la siguiente manera: se abre la pestaña #[em Assets – import new asset] se clica y busca el archivo en el computador.
          .row
            .col-12.mb-4.mb-md-0
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 45.] Malla no sólida
              figure.mb-4
                img(src='@/assets/curso/temas/t9/fig45.png', alt='La imagen muestra un personaje 3D en el centro de la escena. La denominación Malla no sólida sugiere que el modelo del personaje se está mostrando en un modo de visualización que no es sólido, posiblemente en modo de malla de alambre o transparente, lo que permite ver la estructura subyacente o el esqueleto del modelo.') 
              p Se puede observar que hay un problema en la malla del personaje, en su capucha en la parte interna no se está leyendo que haya malla sólida, para corregirlo se vuelve a Blender.
          .row
            .col-12.mb-4.mb-md-0
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 46.] #[em Solidify]
              figure.mb-4
                img(src='@/assets/curso/temas/t9/fig46.png', alt='La imagen muestra la interfaz de Blender con el modificador Solidify seleccionado en el panel derecho. Este modificador se aplica a los modelos 3D para crear grosor y volumen en mallas que originalmente son superficies sin masa.') 
              p En el modo de edición, se selecciona la malla y se agrega el modificador solidificar.
          .row
            .col-12.mb-4.mb-md-0
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 47.] #[em Import Fbx]
              figure.mb-4
                img(src='@/assets/curso/temas/t9/fig47.png', alt='La imagen muestra un modelo 3D importado en formato FBX. El modelo, que parece ser un personaje animado, está situado en el centro de la escena con las propiedades del objeto visibles en el panel Inspector') 
              p Para finalizar, se vuelve a exportar el fbx a Unity y ya se habrá corregido la lectura de la malla.


      .col-lg-7(data-aos="fade-down")
        a.anexo(:href="obtenerLink('downloads/t9_Actividad.zip')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-zip.svg")
          .anexo__texto
            p #[b Anexo.] Para finalizar, se puede realizar la práctica con archivos prediseñados de animación y movimiento de personajes utilizando los programas Blender y Mixamo.


</template>

<script>
export default {
  name: 'Tema9',
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
