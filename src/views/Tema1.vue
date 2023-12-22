<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Formas primarias y composición dinámica

    p.mb-4(data-aos="fade") En el diseño de videojuegos es muy importante tener en cuenta su estética gracias a las formas primarias principales: 
      span.text-white.fw-bold.bg-4.p-1 círculo, cuadrado y triángulo
      |, las cuales son la base principal de lo que se va a diseñar, que en un principio puede ser simple, pero al adicionarles detalles van a mejorar considerablemente.
    
    img.mb-4(src='@/assets/curso/temas/t1/img.png', alt='', data-aos="fade-down")

    p.mb-4(data-aos="fade") Estas tres formas vistas bidimensionalmente se representan por líneas curvas, rectas y ángulos. De los círculos, los cuadrados y los triángulos nacen otras formas como los elementos en tres dimensiones: esferas, cubos y pirámides. A continuación, se podrá conocer cómo se utilizan las formas primarias en su composición dinámica. 

    TabsA.color-acento-botones.mb-5(data-aos="fade-down")
      .br-10.bg-pest-a.p-4(titulo="Formas básicas")
        .row.justify-content-center
          .col-lg-3
            img(src='@/assets/curso/temas/t1/pest-img1.svg', alt='')
          .col-lg-8
            h4 Formas básicas
            p Gracias a estas formas primarias y combinándolas entre sí, se pueden crear elementos con mayor complejidad.
      .br-10.bg-pest-a.p-4(titulo="Formas modificadas")
        .row.justify-content-center
          .col-lg-3
            img(src='@/assets/curso/temas/t1/pest-img2.svg', alt='')
          .col-lg-8
            h4 Formas modificadas
            p Estas formas se pueden deformar y ajustar su apariencia según el objetivo que se pretenda o lo que se quiera transmitir a través de su diseño.
      .br-10.bg-pest-a.p-4(titulo="Objetos")
        .row.justify-content-center
          .col-lg-3
            img(src='@/assets/curso/temas/t1/pest-img3.svg', alt='')
          .col-lg-8
            h4 Objetos
            p Se puede observar cómo con objetos básicos se pueden diseñar elementos figurativos que representan objetos cotidianos, como una casa, un árbol, un oso. Estos apenas son unos ejemplos básicos, pero  a partir de elementos tan sencillos se pueden realizar incluso obras de arte, como las realizadas por Picasso.
      .br-10.bg-pest-a.p-4(titulo="Carros")
        .row.justify-content-center
          .col-lg-3
            img(src='@/assets/curso/temas/t1/pest-img4.svg', alt='')
          .col-lg-8
            h4 Carros
            p Se puede observar cómo con objetos básicos se pueden diseñar elementos figurativos que representan objetos cotidianos, como una casa, un árbol, un oso. Estos apenas son unos ejemplos básicos, pero  a partir de elementos tan sencillos se pueden realizar incluso obras de arte, como las realizadas por Picasso.
      .br-10.bg-pest-a.p-4(titulo="Cabeza")
        .row.justify-content-center
          .col-lg-3
            img(src='@/assets/curso/temas/t1/pest-img5.svg', alt='')
          .col-lg-8
            h4 Cabeza
            p Una cabeza humana a menudo se conceptualiza como una combinación de formas de esfera y cubo.

    .row.justify-content-center
      .col-lg-6
        img(src='@/assets/curso/temas/t1/img2.png') 
      .col-lg-6.d-flex
        .cajon.color-acento-contenido.p-5
          p Las formas básicas permiten ser usadas como base para el modelado y escultura 3D de elementos básicos y complejos, los cuales se pueden combinar entre sí. La importancia de las formas primarias es que son la base para las figuras del diseño en 3D. 
          p.mb-0 Estas son usadas para el modelado y esculpido de los elementos 3D básicos y complejos, tales como: animales, plantas, figuras humanas, entornos, props, entre otros, empezando por elegir las formas primarias que más se aproximan a la forma final a la cual se quiere llegar.


    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.1  Formas primarias y temas emocionales

    p(data-aos="fade") Las figuras evocan emociones que se asocian de forma intrínseca con las vivencias de las personas, por ejemplo, un elemento redondo como un oso, va a evidenciar ternura; a diferencia de un demonio, que va a tener elementos afilados y puede transmitir terror. Es así, que de forma general a las figuras se les asocia emociones, pero estas también pueden variar de acuerdo con las formas que se empleen. 
    p.mb-4(data-aos="fade") De la siguiente manera se asocia las formas básicas a las emociones:

    .row.fondo-t1.align-items-center.py-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .col-lg-3.col-md-6.mb-3
            .fondo-tarj1
              .p-5
                h4.text-center.pt-4 Círculo
                ul.lista-ul.fa-ul.px-4
                  li 
                    i.far.fa-dot-circle
                    | Ternura
                  li 
                    i.far.fa-dot-circle
                    | Inocencia 
                  li 
                    i.far.fa-dot-circle
                    | Alegría
                  li 
                    i.far.fa-dot-circle
                    | Suavidad 
                  li 
                    i.far.fa-dot-circle
                    | Positivismo
                  li 
                    i.far.fa-dot-circle
                    | Renovación
                  li 
                    i.far.fa-dot-circle
                    | Jovialidad
          .col-lg-3.col-md-6.mb-3
            .fondo-tarj2
              .p-5
                h4.text-center.pt-4 Cuadrado
                ul.lista-ul.fa-ul.px-4
                  li 
                    i.far.fa-dot-circle
                    | Fuerza 
                  li 
                    i.far.fa-dot-circle
                    | Calma 
                  li 
                    i.far.fa-dot-circle
                    | Equilibrio
                  li 
                    i.far.fa-dot-circle
                    | Terquedad
                  li 
                    i.far.fa-dot-circle
                    | Autocontrol 
                  li 
                    i.far.fa-dot-circle
                    | Es racional
          .col-lg-3.col-md-6.mb-3
            .fondo-tarj3
              .p-5
                h4.text-center.pt-4 Triángulo
                ul.lista-ul.fa-ul.px-4
                  li 
                    i.far.fa-dot-circle
                    | Agresividad 
                  li 
                    i.far.fa-dot-circle
                    | Inestabilidad 
                  li 
                    i.far.fa-dot-circle
                    | Tristeza 
                  li 
                    i.far.fa-dot-circle
                    | Tensión 
                  li 
                    i.far.fa-dot-circle
                    | Dolor  

    p(data-aos="fade") Estos temas emocionales se pueden multiplicar al generar combinaciones de los elementos básicos, lo que permite al equipo completo de videojuegos tomar decisiones durante la conceptualización de las ideas. En sí, se pueden observar elementos creados con figuras básicas, como el círculo, el cuadrado y el triángulo, dándole a cada personaje una identidad particular y reflejando una emoción de manera particular. 
    p.mb-4(data-aos="fade") En el siguiente ejemplo se dará a conocer qué emociones reflejan las figuras al dar clic sobre cada una de ellas:

    .row.justify-content-center
      .col-lg-5.col-md-12.mb-3(data-aos="fade-right")
        .tarjeta-flip.bg-2(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.bg-2(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/tarj-img1.svg')})`}")
            .tarjeta-flip__contenido.bg-2.p-4.p-xl-5
              .linea1.mb-5
              p.mb-0 Hay elementos creados con figuras básicas, como el círculo, el cuadrado y el triángulo, dándole a cada personaje  una identidad particular, los que reflejan una emoción particular. En este sentido, las emociones que despiertan estos 3 elementos permiten que se transmitan mensajes puntuales a partir de sus formas.
      .col-lg-5.col-md-12.mb-3(data-aos="fade-left")
        .tarjeta-flip.bg-1
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.bg-1(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/tarj-img2.png')})`}")
            .tarjeta-flip__contenido.bg-1.p-4.p-xl-5
              .linea2.mb-5
              p.mb-0 El uso principal del cuadrado se encuentra deformado y adaptado a cada una de las partes que conforman la estructura general del cuerpo. Este personaje Flynn,  demuestra una sensación de seriedad y fortaleza mental.


    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.2 Identidad en los personajes

    p(data-aos="fade") La personalidad, características o estados emocionales de una persona suelen estar intrínsecamente relacionados con sus gestos y la posición de su cuerpo, por ejemplo, una persona corriendo en una maratón denotará cansancio en contraste con una que se encuentre sentada en un sillón viendo una película, implicando que se encuentra relajado; o un leñador indicará rudeza, mientras que un jugador de ajedrez se asocia con la inteligencia.
    p.mb-4(data-aos="fade") Lo mismo sucede en el mundo de los videojuegos, la caracterización y personalidad de un personaje depende en gran medida de la postura y gestos que se le asocian, a continuación, se podrá conocer las emociones, tamaño, equilibrio visual, diseño de grupo, formas del entorno, armonía y disonancia. 
    
    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-5" data-aos="fade-down")
      .row.justify-content-center(titulo="Emociones")   
        .col-md-5.mb-4
          .bg-10.br-10.h-100
            img.m-auto.mt-n10(src='@/assets/curso/temas/t1/acord-tarj1.png', alt="", style="max-width: 255px;")  
            p.p-4.mb-0 Kirby se puede asociar con una personalidad tierna, inocente, activa y positiva, es decir, con características relacionadas con los temas emocionales del círculo.
        .col-md-5.mb-4
          .bg-10.br-10.h-100
            img.m-auto.mt-n10(src='@/assets/curso/temas/t1/acord-tarj2.png', alt="", style="max-width: 360px;")  
            p.p-4.mb-0 Dark Mind está claramente relacionado con temas emocionales del triángulo como la agresividad, fuerza, tensión e inestabilidad.
        .col-md-11
          p Con el diseño de Kirby y Dark Mind se observa que las emociones relacionadas a cada espectro de forma son de gran utilidad a la hora de diseñar y perfilar las características de un personaje, ya sean positivas, negativas o incluso neutras, brindándole una identidad única que lo diferencia de los demás, marcando el concepto visual de un objeto que puede aplicarse a todos los elementos del videojuego para conservar un mismo estilo.             
      .row.justify-content-center(titulo="Tamaño")
        .col-md-4.mb-3.mb-md-0             
          img(src='@/assets/curso/temas/t1/acord-img2.png', alt="")                  
        .col-md-7
          p El tamaño de los objetos es un elemento fundamental durante el proceso de diseño, tanto de personajes como del escenario. <br>Se puede observar cómo en la parte superior los personajes y los objetos son de tamaños similares, lo que no permite una jerarquización de los objetos compuestos. 
          p En la parte inferior se observa que con los mismos objetos diseñados se pueden organizar de mejor forma los objetos, generando una composición agradable visualmente.           
      .row.justify-content-center(titulo="Equilibrio visual")
        .col-md-4.mb-3.mb-md-0             
          img(src='@/assets/curso/temas/t1/acord-img3.png', alt="")                  
        .col-md-7
          p Las imágenes que se trabajan en conjunto, su unión fortalece una idea, una historia, en la que se encuentran narrativas visuales, por ello es importante mantener un equilibrio visual.
          p Los elementos en la imagen superior están sobrecargados hacia la derecha, por ello, la mirada es más atraída hacia ese punto. 
          p En la imagen inferior, los objetos están mejor distribuidos, como en una balanza, lo que hace que visualmente sean más agradables. 
      .row.justify-content-center(titulo="Diseño de grupo")
        .col-md-4.mb-3.mb-md-0 
          img(src='@/assets/curso/temas/t1/acord-img4.png', alt="") 
        .col-lg-7.px-4
          p Al igual que los personajes individuales, los grandes grupos suelen diseñarse de manera similar, compartiendo cualidades estéticas para conservar el mismo estilo. Esto se hace especialmente en los juegos de estrategia como por ejemplo, en el juego Lords Mobile, donde se le permite al jugador adaptar su ejército consistente con personajes homogéneos, es decir, de la misma clase o tipo, en formaciones circulares enfocadas principalmente a la defensa desde todos los flancos; cuadrada que se presenta como una formación densa y rígida; y formaciones tipo flecha o cuña más agresivas, orientadas a romper las líneas del frente enemigo.
      .row.justify-content-center(titulo="Conceptos de siluetas sencillas para personajes intrincados")
        .col-md-11
          p Los conceptos de forma también son particularmente esenciales en la creación de bocetos, que junto a los elementos de tamaño, forma y vestuario bien diseñados pueden formar una silueta bien definida que transmita a simple vista la esencia o personalidad que va a tener un personaje.
      .row.justify-content-center(titulo="Formas del entorno")
        .col-md-11
          p Otro aspecto fundamental para la composición visual de un videojuego es el entorno, puesto que ocupa gran parte de la escena en donde se ejecutarán las acciones del personaje principal, mostrando también personajes secundarios que pueden ser hostiles, amistosos o neutrales; objetos ya sea que obstaculicen o contribuyan con el avance del jugador, y diferentes decoraciones como árboles, rocas, casas, nubes, animales, entre otros, que sirven para hacer más o menos llamativo el escenario, de acuerdo con el contexto en el que se desarrolle.
      .row.justify-content-center(titulo="Armonía y disonancia")
        .col-md-11.px-4
          img.mb-4(src='@/assets/curso/temas/t1/acord-img5.png', alt="", style="max-width: 650px;") 
          p Dada la intrínseca relación existente entre los personajes y el entorno donde se desenvuelven es necesario analizar dos elementos claves y determinantes en la composición visual de un videojuego: la armonía y la disonancia.
          p Dos tipos de personajes en entornos diferentes, un personaje y un entorno ligados a la misma forma, ya sea circular, cuadrada o triangular crearán una sensación de <b>armonía</b> para el jugador. Esto es debido a que en ambos entornos se mantiene el mismo estilo, por ejemplo, un personaje redondo en un sitio lleno de nubes y paisajes redondos estaría en un espacio armonioso. Por otra parte, si los personajes están ligados a una forma diferente de la de su entorno se produce una sensación de <b>disonancia</b>, debido a los diferentes temas emocionales de cada forma, es decir, un personaje de tipo triangular ligado a la agresión o poder,  no encajaría muy bien en un mundo con elementos suaves, alegres, optimistas o viceversa, un personaje de tipo circular ligado a temas positivos no se “sentiría cómodo” en un ambiente o entorno hostil y amenazante ligado al triángulo. 


    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.3 Anatomía básica

    p(data-aos="fade") Conocer el sistema del cuerpo anatómico permite estructurar de una forma eficaz los personajes, por lo que es importante entender estos conceptos básicos para su realización.
    p.mb-5(data-aos="fade") El cuerpo humano se divide en varias regiones que son la cabeza, el cuello, el tórax, miembros superiores, abdomen, pelvis y miembros inferiores. Estas son las regiones a tener en cuenta, pero para el dibujo básico se puede tener principalmente, la cabeza, el tórax y la cadera. A partir de ellos nacen los demás elementos que forman parte del cuerpo, a continuación, se podrá conocer la información referente a este proceso.

    SlyderB.mb-2(:datos="datosSlyder" data-aos="fade-down")


    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.4 Diseño de personajes
    
    p.mb-4(data-aos="fade") Se debe ayudar el trabajo del modelador, recreando poses de sus movimientos principales, para que a la hora de modelar y animar sea lo más cercano posible a como se tiene planeado. Puesto que es el personaje quien ayuda a desentrañar toda la historia y se debe dotar de las características coherentes para que se pueda desenvolver en todos los escenarios. Por ello, se hace necesario resaltar ciertas líneas de acción del personaje, líneas imaginarias que indican el movimiento del cuerpo de este, lo cual ayudará a transmitir las sensaciones y sentimientos del personaje en varias situaciones, tal como se muestra en la siguiente figura.

    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-lg-10
        .bg-1.p-5
          .titulo-sexto.color-acento-contenido.mb-3
            p.mb-0 #[b Figura 1.] Personajes de acción
          figure
            img(src='@/assets/curso/temas/t1/fig1.png', alt='La imagen muestra una serie de bocetos que ilustran el concepto de línea de acción en el dibujo de figuras humanas, enfocándose en capturar la dinámica y el movimiento. Se ven ejemplos de diferentes poses y movimientos, como saltos y patadas, con líneas de guía y anotaciones que explican las técnicas de dibujo.') 

    p.mb-4(data-aos="fade") Para trabajar el diseño de personajes, a continuación, se conocerá la línea de acción en un personaje llamado Flynn.

    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-lg-10
        figure.mb-4
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/k80cALwOEYA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Modelado de personaje low poly parte 1

        
        .cajon.color-acento-contenido.p-4
          p.mb-0 Conozca sobre los diseños de personajes, su referencia y documentación para que un personaje funcione correctamente en el contexto de una historia.

    p(data-aos="fade") Así como en las producciones en live action se acostumbra a realizar castings para seleccionar a los actores que mejor se adapten a los atributos físicos y psicológicos, desarrollados al momento de crear los personajes durante las etapas correspondientes al desarrollo de guion; en animación y videojuegos se lleva a cabo un proceso análogo denominado diseño de personajes, donde un equipo de artistas conceptuales se encargan de interpretar los personajes creados por los escritores para generar un casting que permita diseñar los atributos visuales que mejor se adapten a las características de cada uno.
    p.mb-4(data-aos="fade") Para realizar este proceso con éxito existe una serie de conocimientos indispensables y aspectos a tener en cuenta, los cuales serán descritos a continuación:

    .row.fondo2-t1.align-items-center.py-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          TabsC.tema1.color-primario.mb-5
            .p-5.bg-white(titulo="Referencias y documentación")
              .row.justify-content-center
                .col-md-11
                  p.mb-4 Para que un personaje funcione correctamente es indispensable tener en cuenta el contexto, la historia dentro de la cual se desarrolla y su propia historia individual que como ya se sabe, ha sido desarrollada desde la etapa del guion por parte de los escritores. Así como hacer un barrido sobre los orígenes del personaje, sus actitudes, aptitudes y motivaciones no solo los desarrollados en la etapa de escritura, sino los que puedan relacionarse con una época o un lugar específico. Por ejemplo, no es lo mismo diseñar un personaje que haya nacido en la década de 1950 en el continente latinoamericano, a uno que lo haya hecho en el siglo XXV en una colonia en Marte. Aunque en esta comparación en apariencia sea más fácil encontrar información sobre el primer caso, no quiere decir que para el segundo no sea relevante hacer una investigación sobre las condiciones conocidas del planeta y la misma historia y proyección de la raza humana, ya que esto permite obtener datos que brindan credibilidad al personaje.
                  img.mb-4(src='@/assets/curso/temas/t1/pest2-img1.png', alt="") 
                  p Por otro lado, la recolección de referencias visuales es una práctica indispensable al momento de diseñar, puesto que por mucha experiencia que se tenga, absolutamente nadie tiene almacenados en su cerebro todos los referentes que necesita. Por lo tanto, no está de más construir un banco visual que ayude a alimentar la creatividad y analizar el trabajo que realizaron otros artistas para tratar de entender de qué manera afrontan los retos presentados en sus respectivas producciones.
                  p.mb-5 Una buena manera de gestionar las referencias es mediante PureRef, una aplicación gratuita que permite crear tableros y superponerlos a otras aplicaciones para tenerlos siempre a la vista y que puede ser descargada en el siguiente enlace:
                .row.justify-content-center.mb-4
                  .col-lg-4.col-md-6.mb-3
                    a.anexo.mb-4.mb-lg-0(href="https://www.pureref.com/" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p #[b Enlace web.] PureRef 
                  .col-lg-4.col-md-6.mb-3
                    a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=Be_r_c1zt8w" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p #[b Enlace web.] PureRef - Introducción
                .row.justify-content-center
                  .col-lg-8
                    .tabla-b.color-acento-botones                   
                      table.text-center            
                        tr.tabla-b__header
                          th Referente
                          th Sitio web
                        tr
                          td Carter Goodrich
                          td 
                            a(href="http://www.cartergoodrich.com" target="_blank") www.cartergoodrich.com
                        tr
                          td Brett Bean
                          td
                            a(href="http://www.brettbean.com" target="_blank") www.brettbean.com
                        tr
                          td Anette Marnat
                          td 
                            a(href="https://annettemarnat.ultra-book.com/portfolio" target="_blank") www.annettemarnat.ultra-book.com/portfolio
                        tr
                          td Frank Frazetta
                          td 
                            a(href="http://www.frazettamuseum.com" target="_blank") www.frazettamuseum.com
                        tr
                          td Creature Box
                          td
                            a(href="http://www.creaturebox.com" target="_blank") www.creaturebox.com
                        tr
                          td Syd Mead
                          td 
                            a(href="http://www.sydmead.com" target="_blank") www.sydmead.com
                        tr
                          td Phil Saunders
                          td 
                            a(href="http://www.artstation.com/philsaunders" target="_blank") www.artstation.com/philsaunders
                        tr
                          td Shane Glines
                          td 
                            a(href="http://www.instagram.com/shaneglines" target="_blank") www.instagram.com/shaneglines            
            .p-5.bg-white(titulo="Anatomía básica")
              .row.justify-content-center
                .col-md-5.mb-3.mb-md-0            
                  img(src='@/assets/curso/temas/t1/pest2-img2.png', alt="") 
                .col-md-6
                  p Según la RAE la anatomía es la ciencia que estudia la estructura y forma de los seres vivos y las relaciones entre las diversas partes que los constituyen. Aunque se trata de una ciencia derivada de la biología es muy útil en las artes plásticas y visuales pues uno de los conocimientos clave a la hora de diseñar personajes es la anatomía, independientemente de si se trata de un personaje de estilo realista o cartoon. Tener bases fuertes de anatomía ayuda a que la construcción física de los personajes sea creíble y por tanto, funcionen adecuadamente en el universo al que pertenecen.
                  p Una buena forma de estudiar el funcionamiento del cuerpo es mediante los atlas médicos de anatomía, ya que presentan un desglose detallado que va desde la estructura ósea que soporta el cuerpo y muestra su relación con los músculos. No es necesario en principio memorizar el nombre de cada uno de los huesos y músculos que conforman el cuerpo, pero sí es sumamente importante saber dónde están ubicados, de dónde parten y a dónde llegan; debido que esto permite comprender su función en el movimiento y así mismo su importancia en la definición de siluetas y volúmenes del cuerpo.
            .p-5.bg-white(titulo="Proporciones del cuerpo humano")
              .row.justify-content-center
                .col-md-5.mb-3.mb-md-0           
                  img(src='@/assets/curso/temas/t1/pest2-img3.png', alt="") 
                .col-md-6
                  p Cada cuerpo posee características únicas que lo diferencian de los demás, sin embargo, desde la antigüedad han sido desarrollados diferentes sistemas de proporción para representar la figura humana de una manera armónica buscando unas proporciones ideales, los egipcios por ejemplo usaban la medida del puño como base para determinar las demás proporciones del cuerpo, determinando que la altura de este correspondía a 18 veces el tamaño del puño usando 2 para el rostro, diez en la distancia que va de los hombros a las rodillas y otros 6 para la distancia comprendida entre las rodillas y los pies.
                  p El sistema más común es el que usa la dimensión de la cabeza como medida de referencia, con el cual muchos artistas han usado en sus obras proporciones basadas en sistemas de 7, 7 ½, 8, 8 1⁄2 y hasta 9 cabezas para determinar la estatura de la figura humana.
                .col-md-11
                  p Estos sistemas de medida y proporción llevan por nombre canon (del griego Χανων, que significa regla). Uno de los cánones más conocidos es el del Hombre de Vitruvio, famoso dibujo de Leonardo da Vinci realizado alrededor de 1490 en el cual se representa una figura masculina inscrita al interior de un cuadrado y una circunferencia con 2 pares de brazos y piernas sobrepuestas, este estudio anatómico fue hecho a partir de textos arquitectónicos de Marco Vitruvio (de donde saca su nombre) y se rige bajo un sistema de proporciones de 8 cabezas.
                  p Cabe resaltar que aunque se acepte el uso de un canon anatómico para la representación de las proporciones perfectas, esta es una idealización y las proporciones reales de cada persona varían en función de diversos factores como su origen étnico, genética heredada, condiciones de vida, etc. sin embargo, los cánones son útiles para construir estructuras anatómicas sólidas y su conocimiento nos permite tomar ciertas licencias para poder deformar las proporciones y así generar personajes con estilos más realistas o cartoon.


    .fondo-subt.w-fit.pe-4.mb-4(data-aos="fade")
      .row.d-flex.align-items-center.text-white
        .col-4.col-md-3
          img(src='@/assets/curso/temas/t5/subt.svg', alt='', style="max-width: 85px;")
        .col-8.col-md-9
          h3.mb-0 Personajes no jugadores NPC

    p.mb-4(data-aos="fade") En el diseño de personajes se encuentran los personajes no jugadores NPC, estos hacen referencia a los que habitan los escenarios del juego, pero el usuario no puede controlarlos, los cuales se pueden clasificar en: 

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-4.col-md-6.mb-3
        img.mb-4(src='@/assets/curso/temas/t1/tarj2-img1.png', alt='')
        h3 Aliados
        p Estos personajes tienen la función de ayudar al jugador o son quienes hay que ayudar en el juego.
      .col-lg-4.col-md-6.mb-3
        img.mb-4(src='@/assets/curso/temas/t1/tarj2-img2.png', alt='')
        h3 Enemigos
        p Son los personajes que estarán interfiriendo en el avance del personaje, por lo que se encuentran dispersos en los escenarios. De estos se encuentran tres clases principales: enemigos comunes, enemigos de jerarquía media y enemigos jefes.
      .col-lg-4.col-md-6.mb-3
        img.mb-4(src='@/assets/curso/temas/t1/tarj2-img3.png', alt='')
        h3 Neutro
        p Son los personajes que pululan el mundo sin afectar al personaje de manera buena o mala. 

    .fondo-subt.w-fit.pe-4.mb-4(data-aos="fade")
      .row.d-flex.align-items-center.text-white
        .col-auto 
          img(src='@/assets/curso/temas/t5/subt.svg', alt='', style="max-width: 85px;")
        .col-auto 
          h3.mb-0 Limitantes

    p.mb-4(data-aos="fade") En los videojuegos a diferencia de la animación 3D el renderizado es en tiempo real, por ende, se debe manejar una limitante en cuanto a polígonos y texturas para que todo fluya con movimientos mínimos de 24 cuadros por segundo. Todo esto depende de la plataforma en la cual se está pensado lanzar el juego, debido a las limitantes de cada hardware, pues consumirán recursos de la memoria del dispositivo, un ejemplo de ello son los celulares, que al ser de menor potencia, deben utilizar menor número de elementos en el juego. Dicho lo anterior, lo que se debe tener en cuenta a la hora de elegir la plataforma en la que se lanzará el juego es:
    
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .row.mb-4
          .col-lg-2.col-md-3.col-4.pe-0
            .bg-12.p-4.h-100.d-flex.align-items-center.justify-content-center
              img(src='@/assets/curso/temas/t1/tarj3-ico1.svg', alt='', style="max-width: 95px;")
          .col-lg-10.col-md-9.col-8.ps-0
            .bg-11.p-4.h-100
              h4.mb-1 La cantidad de polígonos
              p.mb-0 Para dispositivos móviles la cantidad de polígonos debe oscilar entre 300 y 1.500 como máximo por malla, para consolas de antigua generación lo ideal es que oscilen entre 2.400 a 5.000 triángulos por malla, y para consolas de nueva generación y pcs gamer las mallas de personajes deberían tener 22.000 a 50.000 triángulos.
        .row.mb-4
          .col-lg-2.col-md-3.col-4.pe-0
            .bg-12.p-4.h-100.d-flex.align-items-center.justify-content-center
              img(src='@/assets/curso/temas/t1/tarj3-ico2.svg', alt='', style="max-width: 95px;")
          .col-lg-10.col-md-9.col-8.ps-0
            .bg-11.p-4.h-100
              h4.mb-1 La cantidad de texturas y el tamaño de ellas 
              p.mb-0 Suelen usarse entre: 512, 1024, 2048, 4096 pixeles según sea el dispositivo al que van destinadas. No usar más de 3 materiales en una malla.
        .row.mb-4
          .col-lg-2.col-md-3.col-4.pe-0
            .bg-12.p-4.h-100.d-flex.align-items-center.justify-content-center
              img(src='@/assets/curso/temas/t1/tarj3-ico3.svg', alt='', style="max-width: 95px;")
          .col-lg-10.col-md-9.col-8.ps-0
            .bg-11.p-4.h-100
              h4.mb-1 La cantidad de huesos en el modelo 
              p.mb-0 Debe ser la mínima posible en la malla, pues esto que ayudará al rendimiento del motor de videojuegos, el conteo sería entre 15 y 60 huesos para un rendimiento óptimo.
        .row
          .col-lg-2.col-md-3.col-4.pe-0
            .bg-12.p-4.h-100.d-flex.align-items-center.justify-content-center
              img(src='@/assets/curso/temas/t1/tarj3-ico4.svg', alt='', style="max-width: 95px;")
          .col-lg-10.col-md-9.col-8.ps-0
            .bg-11.p-4.h-100
              h4.mb-1 La cantidad de animaciones
              p.mb-0 Para movimientos lo ideal es usar #[em loops] de animaciones, es decir, ciclos de repeticiones, por ejemplo, crear la animación de correr, caminar, entre otras, en ellas el primer cuadro de animación será el mismo que el último para poder así crear ese ciclo. También son necesarias las animaciones que conectan unas con otras, las cuales sirven para mostrar estados diferentes del personaje, como el saltar, el voltearse, el impulsarse, etc. 

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    indicadorTarjetaFlip: true,
    datosSlyder: [
      {
        titulo: 'Estructura del cuerpo humano',
        texto:
          'La estructura del cuerpo humano se puede diseñar con 8 o 8.5 cabezas, que se usan principalmente en los dibujos o cuerpos de personajes, principalmente de superhéroes, que permiten tener una altura imponente. De igual manera, están las cabezas de 7 o  7.5, estas generalmente se usan en cuerpo de estatura promedio y las 4 cabezas se usan en los <i>cartoon</i> animados, son cuerpos más bajos, pero si se desea se puede usar las que se necesiten para el personaje.',
        imagen: require('@/assets/curso/temas/t1/slider-img1.png'),
      },
      {
        titulo: 'Estructura alámbrica',
        texto:
          'La estructura alámbrica permite organizar de una forma simple el gesto del personaje que se quiere construir, por ello es dinámico.<br>En la figura se puede observar una estructura básica, elaborada en 4 cabezas de medida, en una posición frontal y de descanso, la estructura metálica maneja cabeza, tórax y cadera, de donde desprenden los demás elementos, a su derecha se observa cómo esa estructura metálica es recubierta con la forma del cuerpo, pero siempre siguiendo la forma base.',
        imagen: require('@/assets/curso/temas/t1/slider-img2.png'),
      },
      {
        titulo: 'Niño figura alámbrica',
        texto:
          'La figura tiene el uso de la estructura alámbrica en una vista de ¾, luego esta es cubierta por los detalles y finalmente, se elimina para dejar como boceto el personaje, que posteriormente se debe pulir.',
        imagen: require('@/assets/curso/temas/t1/slider-img3.png'),
      },
      {
        titulo: 'Dibujo gestual',
        texto:
          'Una estructura alámbrica dinámica permite crear una gestualidad en los personajes, hay un ritmo y un movimiento en ellos, dejando de lado las figuras estáticas.',
        imagen: require('@/assets/curso/temas/t1/slider-img4.png'),
      },
    ],
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
