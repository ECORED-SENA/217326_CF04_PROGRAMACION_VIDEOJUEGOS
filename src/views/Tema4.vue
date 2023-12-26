<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Conceptos de 3D y modelado

    p.mb-4(data-aos="fade") El modelado 3D consiste en representar cualquier elemento de manera tridimensional en un #[em software] de computador, basándose en la interrelación de 3 ejes, los cuales se denominan eje X, eje Y, eje Z.

    img.mb-4(src='@/assets/curso/temas/t4/img.png', alt='', data-aos="fade-down")

    p.mb-4(data-aos="fade") El #[em software] que utilizaremos de ahora en adelante será Blender, le invitamos a ver el video de instalación:

    .row.justify-content-center 
      .col-lg-10.mb-4(data-aos="fade-down")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/gzBXxQToqEg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Instalación Blender


    p.mb-4(data-aos="fade") Para el modelado 3D en cada #[em software], lo primero que se tiene que entender es la escena, la cual es el espacio en que se va a contener y a ordenar todos los elementos tridimensionales. Para ello, el sistema de coordenadas se hace indispensable para poder navegar en la escena, los cuales como se menciona antes, van a proporcionar información de la dirección en que se navegará teniendo en cuenta lo siguiente:

    .row.fondo-t4.align-items-center.py-4.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center
          
          .col-lg-4.col-md-6.mb-3
            .bg-2.br-10.h-100.p-4
              img.m-auto.mb-4(src='@/assets/curso/temas/t4/tarj-img1.svg', alt='', style="max-width: 110px;")
              h5.mb-1 Eje X
              p.mb-0 Brindará información necesaria sobre el ancho o diciéndolo de otra manera, de la vista de usuario de lado a lado.
          .col-lg-4.col-md-6.mb-3
            .bg-2.br-10.h-100.p-4
              img.m-auto.mb-4(src='@/assets/curso/temas/t4/tarj-img2.svg', alt='', style="max-width: 110px;")
              h5.mb-1 Eje Y
              p.mb-0 Brindará información de la altura, es decir, de abajo arriba. 
          .col-lg-4.col-md-6.mb-3
            .bg-2.br-10.h-100.p-4
              img.m-auto.mb-4(src='@/assets/curso/temas/t4/tarj-img3.svg', alt='', style="max-width: 110px;")
              h5.mb-1 Eje Z
              p.mb-0 Brindará información de profundidad, es decir, la distancia entre el usuario y los objetos a lo lejos.

    p.mb-4(data-aos="fade") A continuación, se podrá conocer sobre los conceptos de 3D y modelado a partir ejemplos del sistema de coordenadas en los ejes.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.mb-4
        .bg-1.p-4.p-md-5.position-relative
          img.deco1(src='@/assets/curso/temas/t4/deco1.svg', alt='', style="max-width: 95px;")
          p.mb-4 Para hacer representaciones se debe tener en cuenta varios aspectos como lo son los vértices (#[em vertex]), arista o bordes (#[em edges]), y caras (#[em faces]).
          h4.mb-1 Vértices
          p.mb-4 Es el punto en el cual se puede definir el comienzo y el final de un segmento, es el punto primario de un modelo 3D. Al conectar 2 vértices se crea una línea, y al conectar más puntos se crean los polígonos. Estos puntos son los que finalmente acogen la información de texturas uv como a su vez, la información de peso influido por el sistema de huesos.
          img.deco2(src='@/assets/curso/temas/t4/deco2.svg', alt='', style="max-width: 90px;")
          h4.mb-1 Arista o bordes
          p.mb-4 Son las líneas que conectan los puntos del polígono, por ende, las aristas, son las que afectan visualmente la definición de los bordes del polígono, dándoles dureza o suavidad.
          h4.mb-1 Cara
          p.mb-0 Son las superficies resultantes de la unión de como mínimo 3 vértices y aristas, se podrían denominar en los que se componen de 3 puntos, que son polígonos de forma triangular, que se usan en videojuegos, para hacer referencia a los polígonos de 4 puntos, usados en animación 3D, y los de 5 o más puntos llamados n-gon.
          img.deco3(src='@/assets/curso/temas/t4/deco3.svg', alt='', style="max-width: 90px;")

    .row.justify-content-center.mb-4
      .col-lg-5.col-md-6.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/img2.png', alt='')
      .col-lg-5.col-md-6.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/img3.png', alt='')
      .col-lg-10
        p #[em Representación de elementos de modelado 3D.]

    TabsA.color-acento-botones(data-aos="fade-down")
      .tarjeta.bg-pest-a.p-4(titulo="Personajes")
        .row.p-4
          .col-lg-12
            h4 Personajes
          .col-lg-4
            img(src='@/assets/curso/temas/t4/pest-img1.svg', alt='')
          .col-lg-8
            p Para el modelado se emplean varias técnicas, en este caso se mencionarán las que pueden utilizarse en el #[em software] Blender. Para ello, se debe tener en cuenta la navegación en el #[em software] y el conocer ciertas acciones que se harán con el #[em mouse] en combinación con las teclas.
      .tarjeta.bg-pest-a.p-4(titulo="<em>Box modeling</em>")
        .row.p-4
          h4 #[em Box modeling]
          p Es la técnica más utilizada, se parte de una primitiva o malla preestablecida, como podría ser una esfera, un plano, un cubo, un cono, etc.  Las cuales vienen integradas en Blender, para lo cual una vez teniéndolas en el escenario se le agregarán polígonos, extruyendo, biselando, escalando caras, vértices y bordes.
          .col-md-6.mb-3
            img(src='@/assets/curso/temas/t4/pest-img2-1.png', alt='')
          .col-md-6.mb-3
            img(src='@/assets/curso/temas/t4/pest-img2-2.png', alt='')
      .tarjeta.bg-pest-a.p-4(titulo="<em>Sculpting</em>")
        .row.p-4
          h4 #[em Sculpting]
          p En este tipo de modelado se parte de un elemento del propio #[em software], y en este caso el modelado se desarrolla como un esculpido en la vida real con masilla, es decir, aplicando presión, puliendo, cortando, suavizando. Con él se pueden conseguir resultados visuales muy detallados, los cuales funcionan para mostrar un tipo de estilo, pero no para animar, puesto que la cantidad de polígonos es demasiada para que cualquier #[em hardware] la soporte. 
          .col-md-6.mb-3
            img(src='@/assets/curso/temas/t4/pest-img3-1.png', alt='')
          .col-md-6.mb-3
            img(src='@/assets/curso/temas/t4/pest-img3-2.png', alt='')
      .tarjeta.bg-pest-a.p-4(titulo="<em>Nurbs</em>")
        .row.p-4
          h4 #[em Nurbs]
          p Partiendo de líneas se pueden generar superficies que den un aspecto muy orgánico, como por ejemplo, terrenos irregulares de la naturaleza. Luego, esa curva se puede convertir en malla.
          .col-md-6.mb-3
            img(src='@/assets/curso/temas/t4/pest-img4-1.png', alt='')
          .col-md-6.mb-3
            img(src='@/assets/curso/temas/t4/pest-img4-2.png', alt='')
          .col-md-6.mb-3
            img(src='@/assets/curso/temas/t4/pest-img4-3.png', alt='')


    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.1 Personajes

    p.mb-4(data-aos="fade") Para la creación de personajes se utilizarán las herramientas de modificación con las que Blender dispone para elaborar en el modo de edición, entre ellas se tienen tres principales modos, vértice (#[em vertex]), borde (#[em edge]) y cara (#[em face]) con las cuales se puede modificar la malla, moviéndola, escalándola y rotándola, pero además de ello modificar la malla, precisamente el siguiente recurso permitirá conocer estas disposiciones. 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-5" data-aos="fade-down")
      div(titulo="Extruir")  
        .row.justify-content-center.mb-4
          .col-lg-9
            p #[b Extruir (tecla e):] la extrusión, genera polígonos a partir de los vértices, bordes o caras, desplazándolos en cualquiera de los ejes, es el modo que se usa con más frecuencia.
          .col-md-5.mb-4
            img(src='@/assets/curso/temas/t4/acord-img1-1.png', alt='')
          .col-md-5.mb-4
            img(src='@/assets/curso/temas/t4/acord-img1-2.png', alt='')
          .col-lg-10  
            p.mb-0 Ejemplo de modelado herramienta Extruir
      div(titulo="Insertar caras")  
        .row.justify-content-center.mb-4
          .col-lg-9
            p #[b Insertar caras (tecla Shift + barra espaciadora + i):] como su nombre lo indica, este modificador inserta una cara dentro de otra, generando así una subdivisión.
          .col-lg-10  
            img.mb-4(src='@/assets/curso/temas/t4/acord-img2.png', alt='')
            p.mb-0 Ejemplo de modelado herramienta Insertar caras
      div(titulo="Biselado")  
        .row.justify-content-center.mb-4
          .col-lg-9
            p #[b Biselado (tecla ctrl + B):] la herramienta permite insertar bordes, cortados oblicuamente, se puede agregar en la ventana de sus modificadores opciones como el número de segmentos por agregar. 
          .col-md-5.mb-4
            img(src='@/assets/curso/temas/t4/acord-img3-1.png', alt='')
          .col-md-5.mb-4
            img(src='@/assets/curso/temas/t4/acord-img3-2.png', alt='')
          .col-lg-10
            p.mb-0 Ejemplo de modelado herramienta Biselado
      div(titulo="<em>Loop cut</em>") 
        .row.justify-content-center.mb-4
          .col-lg-9          
            p #[b #[em Loop cut] (tecla ctrl + r):] Corta la malla alrededor, siguiendo un trayecto hasta cerrarse. 
          .col-lg-10
            img.mb-4(src='@/assets/curso/temas/t4/acord-img4.png', alt='')
            p.mb-0 Ejemplo de modelado herramienta #[em Loop cut]
      div(titulo="<em>Knife</em>")  
        .row.justify-content-center.mb-4
          .col-lg-9
            p #[b #[em Knife] (tecla #[em shift] + barra espaciadora + K):] corta generando una nueva topología.
          .col-lg-10
            img.mb-4(src='@/assets/curso/temas/t4/acord-img5.png', alt='')
            p.mb-0 Ejemplo de modelado herramienta Knife
      div(titulo="<em>Spin</em>")  
        .row.justify-content-center.mb-4
          .col-lg-9.mb-4
            p #[b #[em Spin] (tecla #[em shift] + barra espaciadora + 0):] genera extrusión, en circunferencia según el #[em viewport].
          .col-md-5.mb-4
            img(src='@/assets/curso/temas/t4/acord-img6-1.png', alt='')
          .col-md-5.mb-4
            img(src='@/assets/curso/temas/t4/acord-img6-2.png', alt='')
          .col-lg-10
            p.mb-0 Ejemplo de modelado herramienta Spin
      div(titulo="<em>Rip region</em>")  
        .row.justify-content-center.mb-4
          .col-lg-9
            p #[b #[em Rip] región (tecla #[em shift] + barra espaciadora + v):] despega vértices o bordes de la malla.
          .col-lg-10
            img.mb-4(src='@/assets/curso/temas/t4/acord-img7.png', alt='')
            p.mb-0 Ejemplo de modelado Rip region
      div(titulo="<em>Fill</em>")  
        .row.justify-content-center.mb-4
          .col-lg-9
            p #[b #[em Fill] (tecla F):] para rellenar espacios vacíos, se selecciona 3 vértices o bordes y se presiona la tecla F, con lo cual generará un polígono conectando dichos puntos.
          .col-md-5.mb-4
            img(src='@/assets/curso/temas/t4/acord-img8-1.png', alt='')
          .col-md-5.mb-4
            img(src='@/assets/curso/temas/t4/acord-img8-2.png', alt='')
          .col-lg-10
            p.mb-0 Ejemplo de modelado Fill

    p.mb-4(data-aos="fade") Combinando estos modificadores se puede realizar el modelado del personaje.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-4.col-md-6.mb-3  
        img(src='@/assets/curso/temas/t4/img4.png', alt='')
      .col-lg-4.col-md-6.mb-3
        img(src='@/assets/curso/temas/t4/img5.png', alt='')
      .col-lg-4.col-md-6.mb-3  
        img(src='@/assets/curso/temas/t4/img6.png', alt='')

    p.mb-4(data-aos="fade") Para empezar a modelar, partimos de sacar las vistas 2D y llevarlas al programa 3D, veamos el video de cómo hacerlo. A continuación veremos cómo se crea el personaje Flynn en los siguientes videos.

    .row.justify-content-center 
      .col-lg-10(data-aos="fade-down")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/966QR6R6jQk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Modelado de un personaje low poly parte 2


    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.2 Escenarios y #[em props]

    p(data-aos="fade") Las técnicas para crear escenarios son las mismas, salvo que en algunas ocasiones se utilizará un par de herramientas para crear más rápido terrenos o duplicar elementos en cantidad. Se utilizarán los modificadores anteriormente mencionados para generar geometrías y así crear un puente, en el cual se empleará un nuevo modificador que servirá básicamente para agilizar trabajo a la hora de crear elementos arquitectónicos o elementos modulares, es decir, que se repiten cíclicamente. Para ello, se debe crear un cubo y se aplicará biselado en sus bordes para darle suavizado, agregando dos segmentos en las características de biselado, tal como se puede observar en el siguiente recurso.

    p.mb-5(data-aos="fade") Los escenarios en videojuegos son los ambientes o lugares que forman el espacio de juego, variando desde ciudades realistas hasta mundos fantásticos, y son cruciales para la narrativa y atmósfera del juego. Los props son objetos dentro de estos escenarios con los que los jugadores pueden interactuar, como armas o vehículos, y son clave para la jugabilidad, la interactividad y para enriquecer el entorno del juego.

    //p.mb-5(data-aos="fade") Los #[em props] son aquellos objetos y enseres que aparecen en un escenario a modo de atrezzo. A continuación, se hará una descripción sobre estos para ampliar cada uno de los conceptos. 

    .fondo-subt.w-fit.pe-4.mb-4(data-aos="fade")
      .row.d-flex.align-items-center.text-white
        .col-auto 
          img(src='@/assets/curso/temas/t5/subt.svg', alt='', style="max-width: 85px;")
        .col-auto 
          h3.mb-0 #[em Props] en los videojuegos
    
    .row.justify-content-center.mb-3
      .col-lg-7.mb-4(data-aos="fade-right")
        p Todos los objetos utilizados por los personajes o NPC en un videojuego, exceptuando la vestimenta, son llamados #[em props], estos elementos son necesarios para el desarrollo de la historia. #[em Prop] (proveniente de la palabra propiedad, hace referencia a un objeto que se le asigna a alguien), los #[em props] hacen resaltar características de cada personaje, un ejemplo de ello sería la trampilla de los Cazafantasmas, el neuralizador de #[em Hombres de Negro], la varita de #[em Harry Potter], el #[em hover board] de Marty McFly en #[em Volver al Futuro], entre otros.
        p El artista conceptual toma referencias para la creación del tipo de objeto que busca, dotándolo de características que lo relacionen con su propietario y el contexto en que se desarrolla la historia, así lo detalla desde todos los puntos de vista posible, para que el modelador tenga certeza y claridad de lo que va a modelar. A continuación, se relacionan algunos escenarios #[em props] para videojuegos. 
      .col-lg-5.col-10.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/img7.png', alt='')

    .tarjeta.tarjeta--gris.p-4.mb-5(data-aos="fade-down")
      LineaTiempoC.color-primario
        .row.justify-content-center(titulo="<em>Props</em> para juego medieval")
          .col-11.col-lg-7
            img(src='@/assets/curso/temas/t4/linea-img1.png', alt='')
        .row.justify-content-center(titulo="<em>Props</em> The legend of Zelda")
          .col-11.col-lg-7
            img.mb-3(src='@/assets/curso/temas/t4/linea-img2.png', alt='')
            p.mb-0 #[b #[em Props] videojuego] #[em The legend of Zelda: breath of the wild.]
        .row.justify-content-center(titulo="Flynn y la espada")
          .col-md-6.col-lg-4.mb-3
            img(src='@/assets/curso/temas/t4/linea-img3-1.png', alt='')
          .col-md-6.col-lg-4.mb-3
            img(src='@/assets/curso/temas/t4/linea-img3-2.png', alt='')
          .col-11.col-lg-8
            p.mb-0 Flynn se construyó a partir de geometrías básicas, 2 elementos #[em props] como ejemplo, en este caso son 2 de las armas del personaje Flynn, las cuales usará en la travesía para poder avanzar en su aventura.

    .fondo-subt.w-fit.pe-4.mb-4(data-aos="fade")
      .row.d-flex.align-items-center.text-white
        .col-auto 
          img(src='@/assets/curso/temas/t5/subt.svg', alt='', style="max-width: 85px;")
        .col-auto 
          h3.mb-0 Escenarios en los videojuegos
    
    .row.justify-content-center.mb-3
      .col-lg-7.mb-4(data-aos="fade-right")
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Los escenarios en los videojuegos son los protagonistas en la ambientación de estos, dotándolos de un espacio y un tiempo particular, delimitando la interacción de los personajes, pudiendo así ser una parte que influya directamente en la jugabilidad, como ejemplo de ello es ver juegos como #[em Dragon Quest Builders] o el famoso #[em Minecraft] o simplemente ser un decorado donde los personajes desarrollan sus acciones y mecánicas.
        p Los escenarios son los que generan los niveles del videojuego, por ende, tienen un proceso creativo en el que se realizan los bocetos, que luego pasan a perfeccionarse y a crearse visuales detalladas, que a su vez una vez listas pasan a modelarse y posteriormente a integrarse en el motor de videojuegos nivel a nivel. Es un trabajo denso, puesto que los escenarios se componen de muchos elementos, entre ellos se debe tener en cuenta el tipo de iluminación y perspectiva.
      .col-lg-5.col-10.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/img8.png', alt='')

    p.mb-4(data-aos="fade") Los escenarios, por ende, abarcan todos los elementos visuales que contiene un nivel, a continuación, se podrá conocer algunos de estos escenarios. 

    SlyderB.mb-5(:datos="datosSlyder" data-aos="fade-down")

    p.mb-4(data-aos="fade") Los escenarios en videojuegos son los ambientes o lugares que forman el espacio de juego, variando desde ciudades realistas hasta mundos fantásticos, y son cruciales para la narrativa y atmósfera del juego. Los #[em props] son objetos dentro de estos escenarios con los que los jugadores pueden interactuar, como armas o vehículos, y son clave para la jugabilidad, la interactividad y para enriquecer el entorno del juego.

    .row.fondo2-t4.align-items-center.py-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center
          .col-lg-10
            SlyderC(:datos="datosSlyder2" data-aos="fade-down")

    .bg-2.p-4.py-5.mb-5
      .row.align-items-center.justify-content-center(data-aos="fade")
        .col-lg-10
          p.mb-4 Con estas herramientas y estos pasos además del puente se puede crear infinidad de elementos en Blender, por ejemplo, árboles estilo #[em lowpoly], en este caso se usan 3 conos y un cilindro bajando sus segmentos a 8 y, para que queden unidos se debe seleccionar Control + J para unirlos y luego se agrega #[em array] para crear un bosque rápido, en este caso se duplica el árbol un par de veces para posicionarse aleatoriamente.
        .col-lg-5.col-md-5.mb-3
          img(src='@/assets/curso/temas/t4/img9.png', alt='')
        .col-lg-5.col-md-5.mb-3
          img(src='@/assets/curso/temas/t4/img10.png', alt='')

    .row.fondo2-t4.align-items-center.py-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center
          .col-lg-10
            SlyderC(:datos="datosSlyder3" data-aos="fade-down")

    p.mb-4(data-aos="fade") Ver el video de la creación del puente en el #[em software] Blender.

    .row.justify-content-center 
      .col-lg-10.mb-4(data-aos="fade-down")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/BEiWXK1DxRA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Creación de puente con #[em software] Blender




</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Escenario Super Mario 3D World',
        imagen: require('@/assets/curso/temas/t4/slider-img1.png'),
      },
      {
        titulo: 'Puente de primer escenario',
        texto:
          'El puente se construyó a partir de geometrías básicas, el cual lleva a Flynn al inicio de su aventura. Cabe resaltar que la figura se trabaja a partir de cubos rectangulares, pero a su vez para dar un estilo visual artesanal que se deforma.',
        imagen: require('@/assets/curso/temas/t4/slider-img2.png'),
      },
      {
        titulo: 'Arte conceptual escenario The last of us',
        imagen: require('@/assets/curso/temas/t4/slider-img3.png'),
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Ejemplo de modelado de puente',
        texto:
          'Se duplica con <em>shift</em> + D 4 veces para generar la base del puente.',
        imagen: require('@/assets/curso/temas/t4/slider2-img1.png'),
      },
      {
        titulo: 'Ejemplo de modelado de puente',
        texto:
          'Se duplica con <em>shift</em> + D 4 veces para generar la base del puente.',
        imagen: require('@/assets/curso/temas/t4/slider2-img2.png'),
      },
      {
        titulo: 'Ejemplo de modelado de puente',
        texto:
          'Como siguiente paso se crearán los tablones del puente, para ello se crea agregando un cubo a la escena, modificando solo el borde frontal para darle un efecto  rústico con biselado, ahora se aplicará el modificador <em>array</em>, que permitirá crear copias simultáneas una seguida de otra, para ello, lo primero que se debe realizar es la separación del tablón de las demás geometrías, por tanto, se selecciona el tablón completo y se presiona la tecla P, con ello saldrá una pestaña que dará la opción de separar, así, el objeto quedará separado de los demás y se podrá agregar el modificador <em>array</em>.',
        imagen: require('@/assets/curso/temas/t4/slider2-img3.png'),
      },
      {
        titulo: 'Ejemplo de modelado de puente',
        texto:
          'Aplicado el modificador se observa cómo se duplica el elemento, para asignarle el número de veces que se requiere duplicar el eje.',
        imagen: require('@/assets/curso/temas/t4/slider2-img4.png'),
      },
      {
        titulo: 'Ejemplo de modelado de puente',
        texto:
          'Se selecciona las escalerillas y se reflejan con la combinación de teclas cntrl + m, Blender posteriormente preguntará en qué eje, y se oprime X para ver reflejado en el otro eje el elemento.',
        imagen: require('@/assets/curso/temas/t4/slider2-img5.png'),
      },
      {
        titulo: 'Ejemplo de modelado de puente',
        texto:
          'Se selecciona las escalerillas y se reflejan con la combinación de teclas cntrl + m, Blender posteriormente preguntará en qué eje, y se oprime X para ver reflejado en el otro eje el elemento.',
        imagen: require('@/assets/curso/temas/t4/slider2-img6.png'),
      },
    ],
    datosSlyder3: [
      {
        titulo: 'Edificaciones',
        texto:
          'Como también se puede jugar con <em>loop cut</em> para crear edificios rápidos, y luego agregarles <em>array</em> para generar una manzana de edificaciones.',
        imagen: require('@/assets/curso/temas/t4/slider3-img1.png'),
      },
      {
        titulo: 'Edificaciones',
        texto:
          'Como también se puede jugar con <em>loop cut</em> para crear edificios rápidos, y luego agregarles <em>array</em> para generar una manzana de edificaciones.',
        imagen: require('@/assets/curso/temas/t4/slider3-img2.png'),
      },
      {
        titulo: 'Edificaciones',
        texto:
          'Se realiza los cortes y luego se bisela para generar las ventanas.',
        imagen: require('@/assets/curso/temas/t4/slider3-img3.png'),
      },
      {
        titulo: 'Edificaciones',
        texto:
          'Se selecciona las caras de la ventana y se mueven hacia adentro con la tecla G, adicionalmente para dar un poco de suavizado se seleccionan todos los bordes externos y se le aplica biselado.',
        imagen: require('@/assets/curso/temas/t4/slider3-img4.png'),
      },
      {
        titulo: 'Edificaciones',
        texto: 'Se duplica el edificio para hacer unas ligeras modificaciones.',
        imagen: require('@/assets/curso/temas/t4/slider3-img5.png'),
      },
      {
        titulo: 'Edificaciones',
        texto:
          'Se selecciona las teclas control + J para unirlos y agregar el modificador <em>array</em>, con esto se genera una sucesión de dichos edificios.',
        imagen: require('@/assets/curso/temas/t4/slider3-img6.png'),
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
