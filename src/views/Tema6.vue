<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 #[em Rigging]

    p.mb-4(data-aos="fade") Es el proceso por el cual se puede dar deformación a una malla para poder trabajarla en animación, creando un sistema de huesos el cual finalmente es el que se usará para dar vida a los objetos. 

    .fondo-t6.p-3
      .row.justify-content-center
        .col-lg-3.col-md-6.mb-4.mb-md-0(data-aos="fade-right")
          img.mb-4.m-auto(src='@/assets/curso/temas/t6/img.svg', alt='') 
        .col-lg-9.mb-4.mb-md-0(data-aos="fade-left")
          p Hace referencia a la implementación de huesos y controladores a un objeto para animarlos. Puede ser muy avanzado en cuanto a los huesos controladores y restricciones o muy simple, según el uso en que se vaya a aplicar. De esta manera, el #[em rigger] deja las pautas hechas en un modelo para que el animador tome uso de ellas y pueda animar según lo que se requiera.
          p Es decir, para que un elemento se anime y su malla se deforme de manera correcta, debe tener un sistema de huesos, por ende, el trabajo de un #[em rigger] es el de conectar a los modeladores con los animadores.
          p Se debe tener conocimientos de anatomía y entender cómo se mueve el cuerpo humano para personajes humanos, así como también conocimiento de anatomía de cuadrúpedos y aves. Todo ello para entender cómo será el movimiento y generar a esos huesos las restricciones y libertades necesarias.
    

    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 6.1  Introducción al #[em rigging]

    p(data-aos="fade") El #[em rigging] es el proceso mediante el cual se crean estructuras de esqueletos y estructuras de control con el fin de animar y deformar geometrías.

    p.mb-4(data-aos="fade") Podría decirse que el rigging está compuesto por un componente técnico y otro artístico: técnico por el desarrollo de código y la construcción de estructuras complejas; y artístico por la búsqueda de deformaciones que luzcan agradables (#[em appeal]) y al mismo tiempo sean creíbles.  

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 3.] Ejemplo de #[em rigging] en una mano.
        figure
          img(src='@/assets/curso/temas/t6/fig3.png', alt='La imagen es una ilustración del proceso de rigging en la animación 3D, mostrando un modelo de mano con un esqueleto digital. Este esqueleto está compuesto por huesos (líneas verdes) y articulaciones (puntos verdes), que son usados para animar la mano de manera realista') 
        figcaption Nota. Tomada de https://commons.wikimedia.org/wiki/File:Sintel-hand.png (Imagen con derechos Creative Commons Licences)
      .col-lg-10 
        .p-4.bg-2
          p.mb-0 El departamento de #[em rigging] se convierte en un puente entre los departamentos de modelado y animación. Los modeladores entregan las geometrías, ya sean #[em props] o personajes, para que los #[em riggers] busquen la mejor solución técnica y artística que permitirá que los animadores hagan su trabajo. Los #[em riggers] también pueden intervenir en procesos posteriores a la animación, realizando simulaciones de ropa y cabello.

    .fondo-subt.w-fit.pe-4.mb-4(data-aos="fade")
      .row.d-flex.align-items-center.text-white
        .col-4.col-md-3.col-lg-2
          img(src='@/assets/curso/temas/t5/subt.svg', alt='', style="max-width: 85px;")
        .col-8.col-md-9.col-lg-10
          h3.mb-0 Conceptos básicos para iniciar el proceso de #[em rigging]

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="fade-down")
      SlyderA.tema6
        .row.justify-content-center
          .col-md-10.mb-5
            p.mb-4 Cursor 3D y puntos de pivote: el cursor 3D es una herramienta muy útil dentro del #[em software] Blender, dado que da un punto de referencia desde el cual transformar los objetos; también sirve para alinear unos objetos con otros. El manejo correcto de este ayudará a establecer de manera adecuada los puntos de pivote de los objetos.
            .video.mb-4
              iframe(width="560" height="315" src="https://www.youtube.com/embed/sKRkKHedHmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video. Cursor 3D y puntos de pivote
        .row.justify-content-center
          .col-md-10.mb-5
            p.mb-4 Sistema de coordenadas: dentro de cualquier #[em software] 3D se disponen diferentes sistemas de coordenadas que ayudarán a transformar los objetos según las necesidades que se tengan. Sistemas de coordenadas como Globales, Locales, Gimbal, entre otros, son los que se explican a continuación:
            .video.mb-4
              iframe(width="560" height="315" src="https://www.youtube.com/embed/EncUzIuVeOo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video. Sistema de coordenadas
        .row.justify-content-center
          .col-md-10.mb-5
            p.mb-4 Aplicar o limpiar transformaciones: al modelar objetos dentro del ambiente de Blender 3D se llega a construir un historial de transformaciones los cuales, al momento de crear un sistema de control para su posterior animación, llega a ser caótico si no se limpia. En el video que se indica a continuación se muestra cómo aplicar las transformaciones y ajustar los puntos de pivote.
            .video.mb-4
              iframe(width="560" height="315" src="https://www.youtube.com/embed/PsUc10fAPRc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video. Limpiar transformaciones
        .row.justify-content-center
          .col-md-10.mb-5
            p.mb-4 #[em Outliner] y nomenclatura: el proceso de #[em rigging] se caracteriza por el correcto orden y designación de cada uno de los elementos dentro de una escena. Esto ayudará a encontrar posibles errores en el proceso de #[em rigging], y facilitará la construcción de la jerarquía.
            .video.mb-4
              iframe(width="560" height="315" src="https://www.youtube.com/embed/c6tTgzTJqgc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video. #[em Outliner] y nomenclatura
        .row.justify-content-center
          .col-md-10.mb-5
            p.mb-4 Construcción de jerarquía: todos los sistemas de esqueletos y de controles están compuestos por un esquema de jerarquías que permiten encadenan los diferentes puntos articulados de un objeto móvil; la forma como están relacionados los objetos dentro de un sistema de #[em rig] marcarán su funcionalidad.
            .video.mb-4
              iframe(width="560" height="315" src="https://www.youtube.com/embed/tbpekrm1oIk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video. Jerarquía y emparentamiento
        .row.justify-content-center
          .col-md-10.mb-5
            p.mb-4 #[em Constraints:] son la forma de controlar las propiedades de un objeto, se podría decir que es una relación existente entre dos o más objetos, donde uno es el manejador o aquel que fija la restricción, y otro es el manejado.
            .video.mb-4
              iframe(width="560" height="315" src="https://www.youtube.com/embed/W94YAVz7XHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video. #[em Constraints]
        .row.justify-content-center
          .col-md-10.mb-5
            p.mb-4 #[em Armature] y huesos: son una herramienta que permite mover o deformar una geometría de forma más sencilla. Los #[em bones] o huesos, son la base de los #[em amatures] o esqueletos.
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/Pzpn60JYfc4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video. #[em Armature]
    

    .fondo-subt.w-fit.pe-4.mb-4(data-aos="fade")
      .row.d-flex.align-items-center.text-white
        .col-auto 
          img(src='@/assets/curso/temas/t5/subt.svg', alt='', style="max-width: 85px;")
        .col-auto 
          h3.mb-0 Alistamiento del modelo

    p.mb-4(data-aos="fade") Antes de crear el sistema de huesos, es necesario hacer una especie de lista de chequeo para evitar errores futuros. Recomendaciones como que el modelo esté centrado, tenga la correcta dimensión, transformaciones limpias y nomenclatura son algunos de los pasos previos a la creación del esqueleto.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/Iu8wOH2uApY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Alistamiento del modelo


    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 6.2 Creación de esqueleto y sistemas de control

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Una vez realizado un análisis concienzudo de la geometría y las transformaciones de los objetos, se puede iniciar el proceso de construcción del #[em rig]. A continuación, se estructura un esqueleto para un bípedo, el cual es la estructura más usada en la industria de la animación y dará las bases suficientes para profundizar más adelante.
        p Se debe segmentar el proceso de construcción debido a que este es complejo y las funcionalidades de cada parte del sistema de #[em rig] presentan desafíos distintos.
      .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="fade-left")
        img(src='@/assets/curso/temas/t6/img2.svg', alt='')

    .bg-7.p-4.mb-4(data-aos="fade")
      p.mb-0 Se debe segmentar el proceso de construcción debido a que este es complejo y las funcionalidades de cada parte del sistema de #[em rig] presentan desafíos distintos.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris px-lg-5")
          div(titulo="La columna")
            p.mb-4 Es la primera parte que suele construirse dado que allí se encuentra el centro de gravedad del personaje y la raíz del esqueleto.
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/CixyvQt0_0A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. La columna
          div(titulo="Orientaciones en los huesos")
            p.mb-4 No es una estructura del #[em rig], pero es fundamental tener esto claro para la construcción de las siguientes partes.
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/F2KbWBoZNhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Orientación en los huesos
          div(titulo="El brazo y los <em>layers</em>")
            p.mb-4 La construcción de los brazos introduce nuevos conceptos, como el uso de diferentes cadenas de control y el uso de #[em layers] o capas para organizar las diferentes familias de huesos.
            p.mb-4 Anteriormente se habló de dos tipos de sistemas o esqueletos: sistemas de deformación y sistemas de control. Los sistemas de deformación son aquellos que, como su nombre lo indica, deformarán la geometría; por otro lado, los sistemas de control permitirán el funcionamiento.
            p.mb-4 Dentro de los sistemas de control tendremos sistemas FK (#[em Forward Kinematics]) o de cinemática directa y sistemas IK (#[em Inverse Kinematics]) o cinemática inversa.
            .cajon.color-secundario.p-4.mb-4
              p.mb-0 Para ambos casos, el ordenador deberá calcular la posición de cada una de las articulaciones, es así como, en cinemática directa cada una de las articulaciones se moverán de forma individual y, a su vez, son dependientes de su posición en la cadena de huesos. Por ejemplo, se tiene el control de la articulación del hombro, antebrazo y la muñeca, pero si se mueve una vértebra de la espalda, la posición de todo el brazo cambiará. Este sistema es ideal para cuando se quiere animar un ciclo de caminar y los brazos van libres.
            p.mb-4 Por otra parte, la cinemática inversa calcula la posición de los componentes a partir de los extremos de la jerarquía. Por ejemplo, en un sistema IK la posición del hombro y codo dependen de la posición de la muñeca. Este sistema viene bien cuando se busca animar a un personaje que tiene sus manos ancladas a una superficie; el sistema IK permitirá mover otras partes del cuerpo sin la necesidad de reajustar la posición de las manos.
            p.mb-4 Se puede ver el video del material complementario para entender mejor los conceptos de FK/IK. 
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/_Yc8GKDN5II" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. El brazo y los layers
          div(titulo="Enlace entre cadena FK y DEF")
            p.mb-4 Por medio de #[em constraints] se enlazan estas dos cadenas.
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/iUoZV3SfUIU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Enlace entre cadena FK y DEF
          div(titulo="Creación de sistema IK")
            p.mb-4 Por medio de un #[em constraint] de tipo IK se tendrá la posibilidad de controlar de manera inversa la cadena del brazo.
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/rYuHxsySABQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Creación de sistema IK
          div(titulo="Enlace cadena IK a cadena DEF")
            p.mb-4 Se debe realizar el mismo proceso que se hizo entre la cadena DEF y la cadena FK, pero ahora será la cadena IK la que se enlazará.
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/wpm2q_D-18s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Enlace cadena IK a cadena DEF
          div(titulo="Creación de un <em>Switch</em> IK/FK")
            p.mb-4 Dado que la cadena de deformadores está controlada por los sistemas IK y FK, es necesario crear un #[em Switch] o interruptor que indique cuándo un sistema está encendido y cuándo el otro está apagado.
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/AmwZZVxcUxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Creación de un Switch IK FK
          div(titulo="Reflejo del sistema de brazos")
            p.mb-4 Por medio de la herramienta #[em Simmetrize] se obtendrá un reflejo exacto de todo lo construido hasta ahora. Se hace necesario, entonces, ajustar ciertos detalles a la parte reflejada.
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/PxJerjaoSdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Reflejo del sistema de brazos
          div(titulo="Crear los dedos")
            p.mb-4 Al momento de crear los huesos de los dedos se debe prestar especial atención a la posición, las orientaciones y a la nomenclatura.
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/AhAZ0uSkz0Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Crear los dedos
          div(titulo="Enlace de los dedos con la cadena del brazo")
            p.mb-4 Tras haber creado y ajustado cada una de las articulaciones de los dedos, se procede a conectarlos por medio de #[em constraints] a las cadenas DEF y de CONTROL.
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/pFWKTRwCdhc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Enlace de los dedos con la cadena del brazo          
          div(titulo="Cadena CTRL espalda y enlace con brazos")
            p.mb-4 Terminando el tren superior del bípedo, se debe construir la cadena de controles y enlazarlos a los sistemas de brazos.
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/VlcYu_05vnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Cadena CTRL Espalda y enlace con brazos
          div(titulo="Construcción de pierna DEF y FK")
            p.mb-4 A partir del hueso pelvis se debe crear la extremidad inferior, teniendo en cuenta los #[em loops] de la geometría y ajustando las orientaciones de cada hueso. La cadena DEF como la FK son iguales así que se abordan en el siguiente video.
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/yt6qyOIBk68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Construcción de pierna DEF y FK
          div(titulo="Creación de pierna IK y <em>Foot Roll</em>")
            p.mb-4 Dentro de la construcción de una pierna IK se debe desarrollar un subsistema conocido como el #[em Reverse foot] o #[em Foot Roll], el cual permitirá realizar el conjunto de movimientos especiales con el que cuenta el pie.
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/gEeN-TPRtGI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Creación de pierna IK y #[em Foot Roll]
          div(titulo="Enlace de cadenas de la pierna y <em>Switch</em> IK/FK")
            p.mb-4 Finalizando la construcción de las piernas, se deben enlazar las diferentes cadenas por medio de #[em constraints] y crear el interruptor, al igual que se hizo en los brazos, para poder elegir qué sistema va a manipular la geometría.
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/O9DCc65APFg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Enlace de cadena de la pierna IK y #[em Switch] IK/FK
          div(titulo="Ajuste del COG")
            p.mb-4 El centro de gravedad o COG (por siglas en inglés) se convierte en el centro de manipulación de todo el esqueleto. Para esto, se debe hacer un pequeño ajuste a las cadenas de Control y Deformadores.
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/i4cJJH1xsQg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Ajuste del COG el centro de gravedad o COG


    Separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 6.3 #[em Skinning]

    p.mb-4 El #[em skinning], o pesado, se define como el proceso de acoplar la geometría de un modelo 3D al esqueleto o sistema de rig de tal manera que al mover este último, el personaje también se moverá o deformará. Esto significa que las cadenas de huesos tendrán influencia sobre los vértices del modelo. En esencia, el #[em skinning] crea una relación de parentesco en la que los huesos mandan sobre la geometría. 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 4.] Modo #[em weight paint] en Blender
        figure
          img(src='@/assets/curso/temas/t6/fig4.png', alt='La imagen muestra una pantalla del software de modelado y animación 3D Blender, específicamente en el modo Weight Paint. Esta herramienta se utiliza para definir cómo los huesos del esqueleto afectan a las mallas 3D; es decir, controla la influencia de los huesos sobre los vértices de la malla.') 
      .col-lg-10 
        .p-4.bg-1
          p.mb-0 La dificultad surge en el hecho de que un #[em rig] se compone por varios huesos individuales y la mayoría de los huesos necesitarán influenciar tan solo ciertas partes de la geometría. Por ejemplo, se busca que el control de la muñeca solo afecte los vértices de esa área en la geometría, pero podría darse que afecte también ciertas áreas del antebrazo e incluso del hombro, lo cual no sería correcto (Pluralsight, 2014). 

    .row.fondo2-t6.align-items-center.py-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .col-lg-10(data-aos="fade-down")
            .bloque-texto-b.color-secundario.p-4.mb-4.borde-tb
              .bloque-texto-b__texto.mb-2
                i.fas.fa-quote-left
                p Existen diferentes tipos de parentescos que se pueden crear entre los huesos y la geometría, pero, generalmente, se usa aquel donde el programa por defecto asigna valores de influencia a cada vértice basado en la proximidad de estos a los diferentes huesos del esqueleto. Usualmente el resultado es bueno, pero no el mejor, dado que el ordenador no sabe en realidad cómo debería deformarse la geometría. Es allí donde comienza la parte más importante del proceso de #[em skinning] conocido como pintado de pesos.
                i.fas.fa-quote-right
              .bloque-texto-d__autor 
                .h5.mb-0 -Pluralsight, 2014
          
          .row.align-items-center.justify-content-center
            .col-lg-3.col-6.mb-4.mb-md-0(data-aos="fade-right")
              img(src='@/assets/curso/temas/t6/img3.svg', alt='') 
            .col-lg-7.mb-4.mb-md-0(data-aos="fade-left")
              p El pintar los pesos permite asignar manualmente la influencia que cada hueso tiene sobre la geometría. Esta tarea suele tomar tiempo, dado que siempre se deben buscar deformaciones adecuadas para el personaje y no existen reglas exactas para definir los valores de influencia. Tal vez no suene muy técnico, pero es un juego de prueba y error hasta lograr lo que se busca. De nada sirve que la configuración del sistema de #[em rig] sea la mejor; si el pesado no es el adecuado, todo el #[em rig] se verá afectado.

    p.mb-4(data-aos="fade") En los siguientes videos se explica cómo se realiza el proceso de #[em skinning] al personaje que se viene trabajando:

    TabsC.tema6.color-acento-botones(data-aos="fade-down")
      .row.justify-content-center.py-3(titulo="Introducción al <em>skinning</em> parte I")
        .col-lg-10
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/c3oKyxjKgQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Introducción al #[em skinning] parte I
      .row.justify-content-center.py-3(titulo="Introducción al <em>skinning</em> parte II")
        .col-lg-10
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/oQnpOXrPOWc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Introducción al #[em skinning] parte II
      .row.justify-content-center.py-3(titulo="Pintado de pesos parte I ")
        .col-lg-10
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/XX-FMdQoEuc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Pintado de pesos parte I 
      .row.justify-content-center.py-3(titulo="Pintado de pesos parte II")
        .col-lg-10
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/SC89rlmXWco" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Pintado de pesos parte II


    Separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 6.4  Curvas de control
    
    p.mb-4(data-aos="fade") Una vez se han ajustado las influencias y dedicado tiempo en deformaciones adecuadas para el personaje, se procede a crear cada una de las curvas que controlarán las cadenas de huesos de tipo CTRL. Esta es una labor sencilla y muy mecánica una vez se reconoce el proceso; sin embargo, se debe dedicar tiempo para que se cumplan las siguientes condiciones:
    
    .row.justify-content-center.mb-3
      .col-lg-5.col-md-6.mb-4(data-aos="fade-right")
        .bg-8.br-10.p-4.h-100
          img.mb-3(src='@/assets/curso/temas/t6/tarj-num1.svg', alt='', style="max-width: 75px;")
          p.mb-0.text-white La curva debe ser fácilmente seleccionable por parte del equipo de animadores. La solución será crear curvas que sobresalgan de la geometría. En algunos huesos será tarea fácil, en otros, se debe invertir un poco más de tiempo.
      .col-lg-5.col-md-6.mb-4(data-aos="fade-left")
        .bg-8.br-10.p-4.h-100
          img.mb-3(src='@/assets/curso/temas/t6/tarj-num2.svg', alt='', style="max-width: 75px;")
          p.mb-0.text-white Las curvas deben ser intuitivas en su funcionamiento y conservar una coherencia entre ellas. Esto se conseguirá mediante el uso de formas sencillas y repetitivas, segmentando por colores y apoyándose más adelante con el proceso de scripting para conseguir que propiedades especiales de ciertos sistemas, como lo es el #[em Switch] IK / FK se pueda acceder fácilmente.

    p.mb-4(data-aos="fade") El siguiente video ilustra el proceso que se debe seguir para la creación de curvas de control:

    .row.fondo3-t6.align-items-center.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .col-lg-10(data-aos="fade-down")
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/NBk5OtTqwcg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video. Curvas de control

    p(data-aos="fade") Revisar los siguientes anexos que corresponden al #[em rig] del personaje Eleven y el Addon (Orient custom shape.zip) respectivamente, los cuales son usados durante la lección.


    Separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 6.5  #[em Rig facial] y #[em blendshapes]

    .bg-2.mb-5
      .row.justify-content-center.align-items-end
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
          .p-4
            p Existen diferentes técnicas para desarrollar un #[em rig] facial. Dentro de ellos se encuentra el uso de cadenas de huesos, los #[em blendshapes] o modificadores de tipo deformación. La decisión dependerá directamente de los requerimientos de la producción, así como también del tiempo y presupuesto disponibles; no obstante, el mejor camino para desarrollar un #[em rig] facial es combinar las técnicas.
            p.mb-0 Un #[em blendshape] es un deformador que permite a un objeto cambiar su forma, basado en las dúplicas que se hagan del objeto base (#[em morph] target o #[em shape key]). Esta técnica resulta bastante útil a la hora de realizar el #[em rig] facial, por su simplicidad y expresividad.
        .col-lg-3(data-aos="fade-left")
          img(src='@/assets/curso/temas/t6/img4.svg', alt='')

    p(data-aos="fade") Cada uno de los gestos faciales debe modelarse o esculpirse, lo cual demanda paciencia y una continua búsqueda del #[em appeal] en el personaje. Puede surgir la pregunta ¿qué gestos o expresiones son las que deben modelarse? Pues existe una variedad infinita. Se debe categorizar en dos grupos: expresiones y visemas.

    p.mb-4(data-aos="fade") Las expresiones principales que se deben trabajar son: alegría, tristeza, enojo, sorpresa, disgusto y temor. 

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        
        img.d-none.d-md-block.mb-4(src='@/assets/curso/temas/t6/img5-pc.svg', alt='')
        img.d-md-none.d-block.mb-4(src='@/assets/curso/temas/t6/img5-mob.svg', alt='')

        .bg-1.brt-10.p-4
          p Una excelente fuente de información y referencia para este proceso es la que se encuentra en el material complementario Artnatomy.net, que es una herramienta interactiva que ilustra diferentes gestos faciales y cada uno de los grupos musculares que entran en acción en cada caso.
          p.mb-0 Por otro lado, los visemas son formas significantes o visuales construidas por los labios. Usualmente se conocen como fonemas; sin embargo, es importante aclarar que los fonemas son sonidos, los visemas son formas (Osipa, 2010).
        .bg-9.brb-10.p-4
          img.mb-4.px-md-5(src='@/assets/curso/temas/t6/img6.svg', alt='')
          p.mb-0 Los visemas son usados al momento de realizar el trabajo de sincronización labial o mejor conocido como #[em lip sync]. A diferencia de los fonemas, los visemas se basan en los ciclos que juegan entre sí: boca abierta/cerrada y labios contraídos/estirados. Los fonemas funcionan muy bien para la animación 2D, pero en el 3D se requiere un análisis de aquellos visemas o formas bucales esenciales para “vender” la idea de un diálogo.

    p(data-aos="fade") Nuevamente la idea “menos es más” (principio Kiss) cobra relevancia al momento de trabajar en la construcción de #[em blendshapes], dado que la mayoría de las expresiones faciales y visemas complejos se forman a partir de la unión de otros más básicos. Por ejemplo, es posible formar el visema de la letra “o” uniendo los de boca abierta y labios contraídos.

    p.mb-4(data-aos="fade") En los videos siguientes se presenta el proceso de construcción de un #[em rig] facial, haciendo uso de huesos, #[em blendshapes] y algunos deformadores:

    TabsC.tema6.color-acento-botones(data-aos="fade-down")
      .row.justify-content-center.py-3(titulo="Mandíbula parte 1")
        .col-lg-10
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/S8ETVkQkRKQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. #[em Rig] facial: Mandíbula parte 1
      .row.justify-content-center.py-3(titulo="Mandíbula parte 2")
        .col-lg-10
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/lqiWDiCbzTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. #[em Rig] facial: Mandíbula parte 2
      .row.justify-content-center.py-3(titulo="Ojos")
        .col-lg-10
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/bDwXAaXz418" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. #[em Rig] facial: Ojos
      .row.justify-content-center.py-3(titulo="<em>Blendshapes</em> 1")
        .col-lg-10
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/qabf9G2PlmM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. #[em Blendshapes:] parte 1
      .row.justify-content-center.py-3(titulo="<em>Blendshapes</em> 2")
        .col-lg-10
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/-zHxxIeRuNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. #[em Blendshapes:] parte 2


    Separador
    #t_6_6.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 6.6  Ajustes finales y #[em scripting]

    .row.justify-content-center.mb-3
      .col-lg-3.col-7.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t6/img7.png', alt='')
      .col-lg-9.mb-4(data-aos="fade-left")
        .bg-1.mb-4
          .row.align-items-center
            .col-lg-2.col-3
              img(src='@/assets/curso/temas/t6/ico.svg', alt='')
            .col-lg-10.col-9
              p.py-4.pe-4.mb-0 El proceso de #[em scripting] se puede definir como el desarrollo de una serie de líneas de código que son ejecutadas dentro de un #[em software] que pueden automatizar o extender las funciones de ciertos componentes.
        p En el caso puntual del desarrollo de #[em rigging], este proceso puede identificarse como un paso necesario para mejorar, simular o extender las funciones del #[em rig], lo cual de otras maneras no sería posible. Un ejemplo podría ser el programar funciones en el #[em rig] de un automóvil para que, al moverse a lo largo del suelo, las ruedas giren automáticamente. 
        p.mb-4 En los videos siguientes se muestran los últimos detalles que se deben ajustar al #[em rig] para finalizar el proceso y organizar ciertas capas para construir un Panel de selección o Interfaz de Usuario (UI - #[em User Interface]) para un #[em rig], lo cual facilitará el trabajo del equipo de animación.
        .row
          .col-lg-11
            a.anexo(:href="obtenerLink('/downloads/script_ui.py')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p.mb-0 #[b Enlace.] Descargar el archivo de script de tipo python, el cual sirve de base para el diseño del panel.
    
    .row.justify-content-center
      .col-lg-10
        TabsC.tema6.color-acento-botones(data-aos="fade-down")
          .row.justify-content-center.py-3(titulo="Ajustes finales")
            .col-lg-10
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/V6tbvN4idXc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video. Ajustes finales
          .row.justify-content-center.py-3(titulo="<em>Scripting</em>")
            .col-lg-10
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/n8OZ7yRSzKY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video. #[em Scripting]


    Separador
    #t_6_7.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 6.7  #[em Addon riggify]

    p.mb-4(data-aos="fade") Blender facilita la tarea a la hora de hacer el #[em rigg] a partir del uso de #[em addons] propios del programa, para poder utilizarlos en la malla. Para ello, se tendrán que activar los #[em addons], de la siguiente manera:

    .bg-1.p-4.mb-5
      .row.justify-content-center(data-aos="fade-down")
        .col-lg-10
          SlyderC(:datos="datosSlyder")

    p.mb-4(data-aos="fade") Ahora se verá cómo se hace el #[em riggify] a través del siguiente video tutorial.

    .row.justify-content-center
      .col-lg-10(data-aos="fade-down")
        figure.mb-4
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/5DqlxXSJjM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. #[em Riggify]
        .row
          .col-lg-9
            a.anexo(href="http://estudiandoblender.blogspot.com/2019/11/rigging-con-rigify.html" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[b Enlace.] Para profundizar en el uso del #[em rigg] con #[em riggify], visitar el siguiente enlace.


    Separador
    #t_6_8.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 6.8  #[em Autorig] con Mixamo

    p.mb-4(data-aos="fade") Para #[em autoriggear] a un personaje se tiene la opción de hacerlo mediante Mixamo de Adobe. A continuación podrá ver el paso a paso para utilizar Mixamo.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        LineaTiempoD.color-acento-botones
          .row.px-lg-4(numero="1" titulo="Paso uno")
            p.mb-4 Se ingresa en la página 
              a(href='https://www.mixamo.com' target="_blank", style="color: #2100FF;") https://www.mixamo.com, 
              |  se hace el registro en ella y se accede a un panel para subir el modelo en #[em fbx] sin esqueletos, es decir solo la malla. Luego, se clica donde dice #[em Upload character].
            .col-lg-6.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 5.] Mixamo
              figure
                img(src='@/assets/curso/temas/t6/fig5.png', alt='La imagen muestra una pantalla de una interfaz de usuario de "Mixamo". Mixamo es un servicio en línea que proporciona personajes 3D y animaciones prediseñadas que se pueden personalizar y utilizar en proyectos de animación y desarrollo de videojuegos.') 
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 6.] Seleccionar personaje
              figure
                img(src='@/assets/curso/temas/t6/fig6.png', alt='La imagen muestra la interfaz de un programa de animación donde el proceso en foco es "Seleccionar personaje". Se destaca un personaje 3D seleccionado, con un diseño poligonal y colores básicos, para ser personalizado o utilizado en animación.')
          .row.px-lg-4(numero="2" titulo="Paso dos")
            .col-lg-6.mb-4.mb-lg-0
              p Se da #[em next] y saldrá una pantalla con herramientas circulares, esos puntos son los que se deben acomodar en el personaje según el esquema que aparece de ejemplo.
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 7.] Herramientas circulares
              figure
                img(src='@/assets/curso/temas/t6/fig7.png', alt='La imagen las herramientas circulares que rodean las articulaciones de un personaje modelo. Estos controles permiten la manipulación detallada de las partes del cuerpo para la animación, con diferentes colores que podrían indicar distintos ejes de rotación.')    
          .row.px-lg-4(numero="3" titulo="Paso tres")
            .col-lg-6.mb-4.mb-lg-0
              p Se da clic en #[em Next] y Mixamo empezará el trabajo de #[em rigg]. Se debe esperar un poco mientras se procesa el modelo. Una vez terminado el proceso el personaje aparece con una animación #[em idle] de prueba, así se constata que quedó completo el #[em rigg].
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 8.] #[em Rig] completo 
              figure
                img(src='@/assets/curso/temas/t6/fig8.png', alt='La imagen presenta un personaje 3D con un rigging completamente aplicado. Se ven miniaturas de diferentes poses y animaciones en la parte superior de la interfaz, lo que indica que el personaje puede ser animado con una variedad de movimientos predefinidos disponibles en la plataforma.')              
          .row.px-lg-4(numero="4" titulo="Paso cuatro")
            .col-lg-6.mb-4.mb-lg-0
              p Mixamo tiene animaciones prediseñadas, simplemente se da clic en la que desea y se verá aplicada en el personaje, una vez seleccionada, se presiona el botón #[em Download] y se tendrá el #[em rigg] con la animación en un archivo #[em fbx].
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 9.] Descargar documento
              figure
                img(src='@/assets/curso/temas/t6/fig9.png', alt='La imagen muestra una interfaz de animación 3D donde se presenta un personaje listo para la descarga.')

    p.mb-4 En el siguiente video tutorial se puede ver el #[em Autorig] con Mixamo.
      
    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/6xNC2AXB-_Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. #[em Autorig] Mixamo


    Separador
    #t_6_9.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 6.9  #[em Skinning] y pesos

    p.mb-4(data-aos="fade") En algunos casos se podrá notar que la malla, a pesar de que se está deformando para generar movimiento, puede que no se deforme correctamente. 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        LineaTiempoD.color-acento-botones
          .row.px-lg-4(numero="1" titulo="Paso uno")
            .col-lg-6.mb-4.mb-lg-0
              p Para ello se trabaja el peso de los huesos sobre la malla, seleccionando en #[em Object mode] la malla, y luego clicando el menú #[em Weight paint].
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 10.] #[em Skinning] en blender pintando pesos en vértices
              figure
                img(src='@/assets/curso/temas/t6/fig10.png', alt='La imagen muestra una captura de pantalla del proceso de skinning dentro del software Blender. Skinning es el proceso de asignar pesos a los vértices de un modelo 3D, que determinan cómo los huesos del esqueleto influencian la malla cuando se mueve.')     
          .row.px-lg-4(numero="2" titulo="Paso dos")
            .col-lg-6.mb-4.mb-lg-0
              p Antes que nada, hay que ir a #[em Preferences – addons], y activar el Script interface: #[em copy attributes] menú, para copiar información de pesos y así pegarla donde se necesite.
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 11.] #[em Addon script interface]
              figure
                img(src='@/assets/curso/temas/t6/fig11.png', alt='La imagen titulada muestra una captura de pantalla de la interfaz de usuario de Blender con un enfoque en un complemento o "addon".')      
          .row.px-lg-4(numero="3" titulo="Paso tres")
            .col-lg-6.mb-4.mb-lg-0
              p Se selecciona la malla desde el menú #[em Object mode].
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 12.] Selección object mode
              figure
                img(src='@/assets/curso/temas/t6/fig12.png', alt='La imagen se observa un modelo 3D de un personaje en el modo de selección de objetos ("Object Mode").')       
          .row.px-lg-4(numero="4" titulo="Paso cuatro")
            .col-lg-6.mb-4.mb-lg-0
              p Con la malla elegida se vuelve a la selección de menú y se da #[em Weight paint] para utilizar las herramientas de peso malla y en ella se puede ver un selector de herramientas del lado izquierdo. Con la herramienta #[em draw] se comienza a pintar los pesos de nuestra malla. Cuando se pinta, lo que se ve más rojo es lo que tiene mayor peso, lo que está en azul tiene peso nulo, lo que está en verde tiene peso moderado. Para pintar con más peso se debe aumentar el #[em weight]; si se quiere restar peso, el #[em weight] debe estar en 0. En la siguiente imagen se puede ver la afectación del peso en la muñeca del personaje Flynn, donde el verde representa el peso de afectación media, y en el antebrazo se degrada hasta azul para mostrar una transición en la que el movimiento de la muñeca afectará mínimamente el antebrazo.
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 13.] Pintando pesos
              figure
                img(src='@/assets/curso/temas/t6/fig13.png', alt='La imagen muestra un modelo 3D en Blender durante el proceso de Weight Painting. Este proceso involucra colorear diferentes partes del modelo para representar la influencia de los huesos del rigging en los vértices de la malla.')  
          .row.px-lg-4(numero="5" titulo="Paso cinco")
            .col-lg-6.mb-4.mb-lg-0
              p De esta manera, el proceso se repite para cada uno de los huesos, teniendo en cuenta la jerarquía, como en la imagen siguiente donde el hueso principal debe ser afectado bastante y los huesos siguientes deben tener una afectación mínima, casi nula.
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 14.] Pesos huesos por huesos
              figure
                img(src='@/assets/curso/temas/t6/fig14.png', alt='La imagen muestra el proceso de la técnica de Weight Painting para asignar pesos a los huesos individuales de un esqueleto de rigging.')  
          .row.px-lg-4(numero="6" titulo="Paso seis")
            p.mb-4 Acomodados los pesos en los huesos ya está el personaje listo para ser animado. A continuación, tenemos dos imágenes de referencia del objeto, en estado de reposo y en pose de salto.
            .col-lg-6.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 15.] Estado de reposo
              figure
                img(src='@/assets/curso/temas/t6/fig15.png', alt='La imagen muestra un modelo 3D de un personaje en pose de reposo o "T-pose". Esta es una pose estándar utilizada en la industria de la animación para modelar y rigging.')  
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 16.] Pose de Salto
              figure
                img(src='@/assets/curso/temas/t6/fig16.png', alt='La imagen muestra un modelo 3D de un personaje en una pose que simula un salto. Esta pose es una captura de un momento de acción, comúnmente usada en animación para representar movimiento o dinamismo.')  

    p.mb-4(data-aos="fade") A través del siguiente video tutorial se verá cómo se modifican los pesos en el #[em skinn] del personaje.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/8BGAl7vWAc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. 38 #[em Skinning]



</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Paso 1',
        texto:
          'Vamos a la pestaña <em>edit - preferences</em> y buscamos <em>addons</em>, en la pestaña <em>addons</em>, en el buscador escribimos <em><strong>rigg</strong></em>, nos aparecerá <em>rigging: riggify</em>, y lo activamos.',
        imagen: require('@/assets/curso/temas/t6/paso-img1.png'),
      },
      {
        titulo: 'Paso 2',
        texto:
          'El primer paso será ir al modo objeto y darle en la pestaña <em>add – armatura – basic- mbasic metarigg</em>, con esto, nos agregará un esqueleto humanoide a nuestra escena.',
        imagen: require('@/assets/curso/temas/t6/paso-img2.png'),
      },
      {
        titulo: 'Paso 3',
        texto: 'Ahora lo escalamos y movemos para acomodarlo en nuestra malla.',
        imagen: require('@/assets/curso/temas/t6/paso-img3.png'),
      },
      {
        titulo: 'Paso 4',
        texto:
          'En el modo edición, acomodamos los huesos para que compaginen con las partes del cuerpo de nuestro personaje. Lo realizamos seleccionando el hueso que queremos modificar y le damos mover con la tecla G. Ten en cuenta que si activamos en las opciones de <em>tool x-axis mirror</em>, lo que hagamos en un lado se hará en el otro, por ende, nos ahorrará la tarea de acomodar los huesos en la otra mitad del cuerpo.',
        imagen: require('@/assets/curso/temas/t6/paso-img4.png'),
      },
      {
        titulo: 'Paso 5',
        texto:
          'Una vez tengamos acomodados los huesos de nuestro personaje, revisamos que esté todo en orden y alineado tanto en vista frontal como lateral.',
        imagen: require('@/assets/curso/temas/t6/paso-img5.png'),
      },
      {
        titulo: 'Paso 6',
        texto:
          'Con todo acomodado, seleccionamos nuestro esqueleto en <em>object mode</em>, y le aplicamos en la pestaña <em>armature</em>, el botón <em>generate rigg</em>.<br><br>Esto creará los controladores necesarios para la animación de los huesos del personaje, cabe resaltar que podría aparecer en escala más pequeña, lo que tendremos que acomodar simplemente moviéndolo y escalándolo.',
        imagen: require('@/assets/curso/temas/t6/paso-img6.png'),
      },
      {
        titulo: 'Paso 7',
        texto:
          'Finalmente, vamos a <em>object mode</em>. Seleccionamos primero nuestra malla y luego el controlador global del personaje, con clic derecho buscamos <em>parent – with automátic weights</em>. Y así tendremos listo nuestro personaje con <em>rigg</em> gracias al <em>addon riggify</em>.',
        imagen: require('@/assets/curso/temas/t6/paso-img7.png'),
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
