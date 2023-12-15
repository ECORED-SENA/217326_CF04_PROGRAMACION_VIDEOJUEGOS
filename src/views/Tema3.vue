<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Texturas y color

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t3/img.png')})`}")
          .bloque-texto-g__texto.p-4
            p.mb-0 En la definición de un personaje se hace necesario conocer las texturas, que son parte de los objetos diseñados por el hombre y la naturaleza, se pueden sentir a partir del tacto, debido a los altos niveles de relieve que estas contienen, algunas de ellas cuentan con características rugosas, suaves, ásperas, blandas, viscosas, duras, filosas, entre otras. Esto se debe a la cantidad de elementos repetidos que tienen y a la altura de los relieves o hendiduras que poseen, igualmente, de forma visual se puede apreciar cada uno de estos elementos, gracias a las sombras y luces que se generan en el elemento.

    p(data-aos="fade") En el desarrollo de videojuegos, los colores tienen diversos significados y funcionalidades, esenciales en el diseño de escenarios idóneos que logren transmitir diferentes sensaciones y emociones en puntos concretos del juego, a esto se le conoce como psicología del color. Un mismo color puede brindar sentimientos divergentes dependiendo de la situación, por ejemplo, el rojo se usa generalmente para simbolizar el amor, pero también se puede relacionar con la agresión; o el verde muchas veces lo asociamos con la naturaleza, la tranquilidad, de igual forma, puede representar algo tóxico o venenoso, es decir, todo depende del contexto en el que se encuentre.
    p.mb-4(data-aos="fade") A continuación, se podrá conocer las diferentes texturas y las disposiciones que hay para los colores.  

    TabsA.color-acento-botones.mb-5(data-aos="fade-down")
      .tarjeta.bg-pest-a.p-4(titulo="Texturas artificiales")
        .row.p-4
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/t3/pest-img1.png') 
          .col-lg-6
            h4 Texturas artificiales
            p Son objetos diseñados por el hombre, como una lata metálica, una baldosa, una llanta, una tela, un tejido, entre otros.
      .tarjeta.bg-pest-a.p-4(titulo="Texturas naturales")
        .row.p-4
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/t3/pest-img2.png') 
          .col-lg-6
            h4 Texturas naturales
            p Hacen parte de la misma naturaleza, como hojas, troncos, rocas, entre otras.
      .tarjeta.bg-pest-a.p-4(titulo="Texturas orgánicas")
        .row.p-4
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/t3/pest-img3.png') 
          .col-lg-6
            h4 Texturas orgánicas
            p Tienen elementos que también se repiten de manera constante, pero tienen variación en sus formas. 
      .tarjeta.bg-pest-a.p-4(titulo="Texturas geométricas")
        .row.p-4
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/t3/pest-img4.png') 
          .col-lg-6
            h4 Texturas geométricas
            p Las texturas tienen patrones geométricos que se repiten constantemente con formas básicas.
      .tarjeta.bg-pest-a.p-4(titulo="Texturas gráficas")
        .row.p-4
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/t3/pest-img5.png') 
          .col-lg-6
            h4 Texturas gráficas
            p Se pueden capturar a través de una cámara fotográfica, un escáner, o recrearlos en papel a través de pintura u otros elementos, que posteriormente pueden ser capturados para ser digitalizados. Otra forma es una representación virtual del mundo real, realizada a través de software 2D o 3D, en la que se simulan formas geométricas, orgánicas, naturales y artificiales, con la finalidad de aplicar estas texturas en diferentes elementos, como personajes, escenarios, props, entre otros, dotándolos de mayor credibilidad y acercamiento al mundo real. 
            p Estas texturas también facilitan los acabados de los objetos, ya que estas imágenes pueden repetirse infinitamente, por ejemplo, si se le quiere dar textura de tela (jean) a un pantalón, con un patrón repetitivo o una textura tipo madera se puede lograr el efecto, gracias a estas texturas.

    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade")
      p.mb-0 #[b Tabla 1.] Simbolismo psicológico de los colores a través de emociones que se transmiten
    .tabla-b.color-acento-contenido.mb-5(data-aos="fade-down")                     
      table            
        tr.tabla-b__header
          th Color
          th(colspan=3) Emociones positivas
          th(colspan=3) Emociones negativas
        tr
          td.text-center(style="color:#000000") 
            b Negro
          td.text-center(colspan=3) Sofisticación, seguridad, poder, sustancia, elegancia, autoridad.
          td.text-center(colspan=3) Opresión, amenaza, frialdad, pesadez, luto, maldad.
        tr  
          td.text-center(style="color:#9B9B9B") 
            b Gris        
          td.text-center(colspan=3) Atemporalidad, fuerza, fiabilidad, neutralidad, balance, inteligencia.
          td.text-center(colspan=3) Desconfianza, depresión, adormecimiento, mansedumbre, falta de energía.
        tr
          td.text-center(style="color:#C4C4C4") 
            b Blanco
          td.text-center(colspan=3) Pureza, sofisticación, claridad, frescura, simplicidad, limpieza.
          td.text-center(colspan=3) Esterilidad, frialdad, elitismo, hostilidad, aislamiento, vacío.
        tr
          td.text-center(style="color:#DE3737") 
            b Rojo
          td.text-center(colspan=3) Aventura, poder, pasión, acción, fuerza, intrepidez, amor.
          td.text-center(colspan=3) Ira, desafío, peligro, advertencia, agresión, dolor.
        tr
          td.text-center(style="color:#EC942F") 
            b Naranja
          td.text-center(colspan=3) Valor, confidencialidad, calidez, optimismo, entusiasmo, energía.
          td.text-center(colspan=3) Privación, frustración, inmadurez,  frivolidad, letargo, ignorancia.
        tr
          td.text-center(style="color:#F2CB0A") 
            b Amarillo
          td.text-center(colspan=3) Optimismo, felicidad, extroversión, curiosidad, creatividad, calidez.
          td.text-center(colspan=3) Irracionalidad, temor, precaución,  cobardía, ansiedad, frustración.
        tr
          td.text-center(style="color:#6CDF20") 
            b Verde 
          td.text-center(colspan=3) Naturaleza, prosperidad, esperanza, suerte, armonía, frescura, salud.
          td.text-center(colspan=3) Aburrimiento, estancación, envidia, insipidez, enfermedad, enervación.
        tr
          td.text-center(style="color:#14C9CF") 
            b Turquesa
          td.text-center(colspan=3) Comunicación, verdad, claridad, calma, salud, poder, inspiración.
          td.text-center(colspan=3) Jactancia, misterio, desconfianza,  reticencia, indiferencia.
        tr
          td.text-center(style="color:#0B5FF1") 
            b Azul
          td.text-center(colspan=3) Simpatía, armonía, amistad, lógica, seguridad, serenidad, confianza.
          td.text-center(colspan=3) Frialdad, indiferencia, antipatía, desánimo, inapetencia, descuido.
        tr
          td.text-center(style="color:#AF16E5") 
            b Violeta
          td.text-center(colspan=3) Sabiduría, riqueza, imaginación, misterio, creatividad, lujo, fantasía.
          td.text-center(colspan=3) Introversión, decadencia, mal humor, supresión, inferioridad, extravagancia.
        tr
          td.text-center(style="color:#E90DCC") 
            b Magenta
          td.text-center(colspan=3) Transformación, creatividad, pasión, imaginación, balance, innovación.
          td.text-center(colspan=3) Indignación, inconformidad, efimeridad, impulsividad, ligereza.
        tr
          td.text-center(style="color:#6D1111") 
            b Café
          td.text-center(colspan=3) Seriedad, calidez, responsabilidad, terrosidad, soporte, autenticidad.
          td.text-center(colspan=3) Falta de humor y sofisticación, suciedad, tristeza, conservadurismo.

    .fondo-subt.w-fit.pe-4.mb-4(data-aos="fade")
      .row.d-flex.align-items-center.text-white
        .col-auto 
          img(src='@/assets/curso/temas/t5/subt.svg', alt='', style="max-width: 85px;")
        .col-auto 
          h3.mb-0 Temperatura del color

    SlyderC.mb-4(:datos="datosSlyder" data-aos="fade-down")

    p.mb-4(data-aos="fade") Comparando las imágenes anteriores se puede percibir que cada una de ellas evoca emociones diferentes. ¿Por qué sucede esto?, la respuesta está en el uso de los colores. En la imagen de la izquierda se destacan los colores azules, violetas y algunos tintes de verde que dan la sensación de que se trata de un mundo nocturno o frío; en contraste con la imagen de la derecha en la que se destacan los colores amarillos, amarillos verdosos, naranjas, terrosos y ocres que brindan la ilusión de un mundo más cálido.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .bloque-texto-g.bg-15.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t3/img2.png')})`}")
          .t3_bloque2.bloque-texto-g__texto.p-4.py-5
            p.mb-0 Esto significa que brindan una percepción subjetiva de la sensación de temperatura y con base a esta se puede determinar si se trata de colores cálidos o fríos, los cuales influyen en las emociones y afectan el estado de ánimo.

    .row.mb-5
      .tarjeta--container.row
        .col-md.tarjeta.bg-1.p-5(data-aos="fade-right")
          .row.justify-content-center.mb-4
            .col-6.mb-4
              figure
                img(src='@/assets/curso/temas/t3/tarj-img1.svg', alt='')
            h1.text-center Colores cálidos o activos
            p.text-center.mb-0 Son aquellos asociados a efectos visuales de calor como la luz solar, el fuego, los atardeceres, la arena, la playa, etc., evocando fuertes sentimientos que promueven el movimiento. Funcionan bien en espacios grandes, haciéndolos sentir seguros, acogedores y más cercanos.
        .col-md.tarjeta.bg-2.p-5(data-aos="fade-left")
          .row.justify-content-center.mb-4
            .col-6.mb-4
              figure
                img(src='@/assets/curso/temas/t3/tarj-img1.svg', alt='')
            h1.text-center Colores fríos o pasivos
            p.text-center.mb-0 Se relacionan con efectos visuales asociados al frío como la luz de luna, el agua, el amanecer, la nieve, naturaleza verde, etc., transmitiendo una sensación de frescura y calma. Funcionan bien en espacios pequeños, aumentando la percepción de su tamaño, haciéndolos sentir más grandes, abiertos y lejanos.

    p.mb-4(data-aos="fade") Realizando una mezcla adecuada de colores cálidos y fríos se logra un equilibrio con un mayor contraste y mejor definición, que mejora la estética del videojuego, haciéndolo más agradable para el espectador.

    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade")
      p.mb-0 Temperatura del color y sus efectos en la mente
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-4.col-md-9.mb-3
        .bg-1.h-100.p-4
          h3 Cálidos
          .p-2.p-md-4
            .row.mb-3
              .col-auto
                .div(style="width: 70px; height: 70px; background-color: #D5B64C;")
              .col-auto
                .titulo-sexto.color-acento-contenido.mb-0.py-0(style="border-left-color: #D5B64C;")
                  h5.mb-0 Dorado
                p.ps-3.mb-0 Opulencia
            .row.mb-3
              .col-auto
                .div(style="width: 70px; height: 70px; background-color: #4D2311;")
              .col-auto
                .titulo-sexto.color-acento-contenido.mb-0.py-0(style="border-left-color: #4D2311;")
                  h5.mb-0 Marrón
                p.ps-3.mb-0 Profundidad o experiencia
            .row.mb-3
              .col-auto
                .div(style="width: 70px; height: 70px; background-color: #F4E703;")
              .col-auto
                .titulo-sexto.color-acento-contenido.mb-0.py-0(style="border-left-color: #F4E703;")
                  h5.mb-0 Amarillo
                p.ps-3.mb-0 Actitud positiva y alegría
            .row.mb-3
              .col-auto
                .div(style="width: 70px; height: 70px; background-color: #E42622;")
              .col-auto
                .titulo-sexto.color-acento-contenido.mb-0.py-0(style="border-left-color: #E42622;")
                  h5.mb-0 Rojo
                p.ps-3.mb-0 Pasión o excitación
            .row.mb-3
              .col-auto
                .div(style="width: 70px; height: 70px; background-color: #EB007F;")
              .col-auto
                .titulo-sexto.color-acento-contenido.mb-0.py-0(style="border-left-color: #EB007F;")
                  h5.mb-0 Rosa
                p.ps-3.mb-0 Feminidad
      .col-lg-4.col-md-9.mb-3
        .bg-1.h-100.p-4
          h3 Fríos
          .p-2.p-md-4
            .row.mb-3
              .col-auto
                .div(style="width: 70px; height: 70px; background-color: #C5C5C5;")
              .col-auto
                .titulo-sexto.color-acento-contenido.mb-0.py-0(style="border-left-color: #C5C5C5;")
                  h5.mb-0 Plata
                p.ps-3.mb-0 Intelectualidad
            .row.mb-3
              .col-auto
                .div(style="width: 70px; height: 70px; background-color: #1666CF;")
              .col-auto
                .titulo-sexto.color-acento-contenido.mb-0.py-0(style="border-left-color: #1666CF;")
                  h5.mb-0 Azul
                p.ps-3.mb-0 Tristeza o depresión
            .row.mb-3
              .col-auto
                .div(style="width: 70px; height: 70px; background-color: #43B035;")
              .col-auto
                .titulo-sexto.color-acento-contenido.mb-0.py-0(style="border-left-color: #43B035;")
                  h5.mb-0 Verde
                p.ps-3.mb-0 Renovación o vida
            .row.mb-3
              .col-auto
                .div(style="width: 70px; height: 70px; background-color: #7D2283;")
              .col-auto
                .titulo-sexto.color-acento-contenido.mb-0.py-0(style="border-left-color: #7D2283;")
                  h5.mb-0 Violeta
                p.ps-3.mb-0 Espiritualidad
      .col-lg-4.col-md-9.mb-3
        .bg-1.h-100.p-4
          h3 Neutros
          .p-2.p-md-4
            .row.mb-3
              .col-auto
                .div(style="width: 70px; height: 70px; background-color: #747476;")
              .col-auto
                .titulo-sexto.color-acento-contenido.mb-0.py-0(style="border-left-color: #747476;")
                  h5.mb-0 Gris
                p.ps-3.mb-0 Neutralidad y serenidad
            .row.mb-3
              .col-auto
                .div(style="width: 70px; height: 70px; background-color: #FFFFFF;")
              .col-auto
                .titulo-sexto.color-acento-contenido.mb-0.py-0(style="border-left-color: #FFFFFF;")
                  h5.mb-0 Blanco
                p.ps-3.mb-0 Pureza
            .row.mb-3
              .col-auto
                .div(style="width: 70px; height: 70px; background-color: #000;")
              .col-auto
                .titulo-sexto.color-acento-contenido.mb-0.py-0(style="border-left-color: #000;")
                  h5.mb-0 Negro
                p.ps-3.mb-0 Elegancia

    p.mb-4(data-aos="fade") Adicionalmente, puede conocer sobre la teoría del color y cómo se requiere de una referencia para mezclar los colores y conseguir un efecto en concreto: 

    .row.fondo-t3.align-items-center.py-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .col-12
            .fondo-subt.w-fit.pe-4.mb-4(data-aos="fade")
              .row.d-flex.align-items-center.text-white
                .col-auto 
                  img(src='@/assets/curso/temas/t5/subt.svg', alt='', style="max-width: 85px;")
                .col-auto 
                  h3.mb-0 Teoría del color

          h3(data-aos="fade") Modelos de color
          p.mb-4(data-aos="fade") Los modelos de color permiten catalogar los colores y que se pueda trabajar con ellos por medios digitales. A través de los modelos se accede a diferentes sistemas para visualizar y modificar una imagen:

          .row.justify-content-center.mb-4(data-aos="fade-down")   
            .col-lg-4.col-md-6.mb-3
              .bg-2.br-10.h-100.p-4
                img.m-auto.mb-4(src='@/assets/curso/temas/t3/tarj2-img1.svg', alt='', style="max-width: 210px;")
                h5.mb-1 Modelo RGB
                p.mb-0 Modelo aditivo que se basa en los colores luz. El ojo humano cuenta con 3 tipos de conos o células foto receptoras que determinan los 3 colores primarios: rojo, verde y azul (RGB por siglas en inglés). De la combinación de estos 3 se obtiene el color blanco y la ausencia de los mismos dará como resultado el negro. Este modelo de color es usado para toda clase de dispositivos como pantallas, celulares, etc.
            .col-lg-4.col-md-6.mb-3
              .bg-2.br-10.h-100.p-4
                img.m-auto.mb-4(src='@/assets/curso/temas/t3/tarj2-img2.svg', alt='', style="max-width: 210px;")
                h5.mb-1 Modelo CMYK
                p.mb-0 Modelo sustractivo basado en los colores pigmento o físicos. Los colores primarios en este modelo son: amarillo, cían y magenta (CMYK por sus siglas en inglés). Al contrario del modelo RGB, la combinación de los 3 primarios genera el color negro (key o black). Este modelo es usado en pintura, tintes e impresión.
            .col-lg-4.col-md-6.mb-3
              .bg-2.br-10.h-100.p-4
                img.m-auto.mb-4(src='@/assets/curso/temas/t3/tarj2-img3.png', alt='', style="max-width: 210px;")
                h5.mb-1 Modelo HSV
                p.mb-0 Se basa en las propiedades del color (tono , saturación y luminosidad), las cuales se explican en mayor detalle en la siguiente lección.
      
          h3(data-aos="fade") Propiedades del color

          .row.justify-content-center.mb-3
            .col-lg-5.col-md-9.col-10.mb-4(data-aos="fade-right") 
              img(src='@/assets/curso/temas/t3/img3.svg', alt='')
            .col-lg-7.mb-4(data-aos="fade-left")
              h5.mb-1 a. Tono (Hue)
              p.mb-4 Es el color en concreto y ayuda a diferenciarlos. Por ejemplo, al ver un objeto se dice que tiene un tono azul o anaranjado.
              h5.mb-1 b. Saturación (Saturation)
              p.mb-4 Intensidad o pureza del color. En otras palabras, la cantidad de gris que se le ha agregado a un tono; así entre más saturado es un color, más vibrante es, mientras que, entre menos saturado, dará mayor descanso al ojo.
              h5.mb-1 c. Luminosidad o valor (Value)
              p.mb-4 Describe el valor de claridad u oscuridad, en otras palabras, cantidad relativa de blanco o negro en un tono. Si agregamos el blanco a un color, obtendremos valores más claros del tono, llamados tintes. Por otro lado, si el que agregamos es el negro, tendremos valores más oscuros del tono, conocidos como matices. Por ejemplo, decimos que el rosa es un tinte del color rojo primario y el borgoña o rojo oscuro es un matiz (Whelan, 1994).

            .col-lg-10.col-md-11.mb-5(data-aos="fade-down")
              .fondo2-t3
                .row.justify-content-center.align-items-center
                  .col-lg-5.col-md-8.col-9.mb-4.mb-lg-0
                    img.ps-lg-1(src='@/assets/curso/temas/t3/img4.svg', alt='')
                  .col-lg-6 
                    h4 Círculo cromático
                    p Se divide en doce segmentos, incluyendo los tonos primarios, secundarios y terciarios. Los tres colores primarios: rojo, amarillo y azul, forman un triángulo equilátero dentro del círculo. Si se mezclan en igual medida dos colores primarios, se obtiene un color secundario; y si se mezcla un primario con un secundario se tiene un terciario.

          h3(data-aos="fade") Armonía del color
          p.mb-4(data-aos="fade") Se debe saber que algunos colores se ven mejor juntos que otros, pero esto puede generar confusión si se trata de recordar cada uno. Por tanto, a continuación, se verán los 6 esquemas más efectivos de la armonía de color:

          .row.justify-content-center.mb-5(data-aos="fade-down")
            .col-lg-4.col-md-6.mb-5
              img.m-auto.mb-4(src='@/assets/curso/temas/t3/img5.png', alt='')
              h5.mb-1 Mocromático
              p.mb-0 Es uno de los más fáciles de recordar, ya que es un solo color. Debido a la ausencia de otros colores, el espectador se enfoca en las diferencias de valor y saturación.
            .col-lg-4.col-md-6.mb-5
              img.m-auto.mb-4(src='@/assets/curso/temas/t3/img6.png', alt='')
              h5.mb-1 Análogo
              p.mb-0 Se usan colores adyacentes uno del otro. Es un esquema presente en la naturaleza, por ende, crean una sensación de calma, paz y comodidad.
            .col-lg-4.col-md-6.mb-5
              img.m-auto.mb-4(src='@/assets/curso/temas/t3/img7.png', alt='')
              h5.mb-1 Complementario
              p.mb-0 Es el esquema más popular, donde se usan colores de lados opuestos del círculo. Naturalmente siempre van bien juntos; sin embargo, como en el esquema de triada, se debe elegir un color predominante y usar el tono complementario para crear contraste o puntos de interés.
            .col-lg-4.col-md-6.mb-5
              img.m-auto.mb-4(src='@/assets/curso/temas/t3/img8.png', alt='')
              h5.mb-1 Triada
              p.mb-0 Quizás es una de las más difíciles de usar correctamente. Son tres colores que son equidistantes. El reto está en el equilibrio de cada uno de los tonos, dado que al usarse en la misma medida generará caos. Suele usarse para escenas con estilo #[em cartoon], orientado al público infantil.
            .col-lg-4.col-md-6.mb-5
              img.m-auto.mb-4(src='@/assets/curso/temas/t3/img9.png', alt='')
              h5.mb-1 Complementario dividido
              p.mb-0 Similar al complementario, pero este esquema usa tres colores. Se debe seleccionar el tono complementario y dividirlo, es decir, tomar los dos colores adyacentes. Es útil para extender las posibilidades de la paleta de color, cuando dos tonos no son suficientes.
            .col-lg-4.col-md-6.mb-5
              img.m-auto.mb-4(src='@/assets/curso/temas/t3/img10.png', alt='')
              h5.mb-1 Complementario doble
              p.mb-0 Justo como el esquema complementario pero doble. Dos pares de colores complementarios (sin importar su posición dentro del círculo). Se debe ser muy cuidadoso con este esquema, pues sin el equilibrio adecuado creará caos. Lo mejor es usar un par en primer plano y el otro en el fondo.
            .col-lg-7.col-md-11.mb-4
              a.anexo.mb-4.mb-lg-0(href="https://color.adobe.com/es/create/color-wheel" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.mb-0 #[b Adobe Color.] Para crear paletas de color y jugar con diferentes esquemas puede consultar la herramienta creada por Adobe llamada Adobe Color, anteriormente conocida como Kuler desde internet.

          .bg-white.br-10.p-4.p-md-5
            h3(data-aos="fade") Psicología del color
            p.mb-4(data-aos="fade") Como lo menciona Bride M. Whelan, “El color es a la vez simple y complejo. Este significa cosas distintas para distintas personas en culturas diferentes. Ningún color es visto del mismo modo por dos personas. El color es personal y universal, y envía mensajes de inagotable variedad”. (Whelan, 1994).
            .row.justify-content-center(data-aos="fade-down")
              .col-lg-5.col-md-6.mb-4
                img.m-auto(src='@/assets/curso/temas/t3/img11.svg', alt='')
              .col-lg-5.col-md-6.mb-4
                img.m-auto(src='@/assets/curso/temas/t3/img12.svg', alt='')
              .col-lg-5.col-md-6.mb-4
                img.m-auto(src='@/assets/curso/temas/t3/img13.svg', alt='')
              .col-lg-5.col-md-6.mb-4
                img.m-auto(src='@/assets/curso/temas/t3/img14.svg', alt='')
              .col-lg-5.col-md-6.mb-4
                img.m-auto(src='@/assets/curso/temas/t3/img15.svg', alt='')
              .col-lg-5.col-md-6.mb-4
                img.m-auto(src='@/assets/curso/temas/t3/img16.svg', alt='')
              .col-lg-5.col-md-6.mb-4
                img.m-auto(src='@/assets/curso/temas/t3/img17.svg', alt='')
              .col-lg-5.col-md-6.mb-4
                img.m-auto(src='@/assets/curso/temas/t3/img18.svg', alt='')
              .col-lg-5.col-md-6.mb-4
                img.m-auto(src='@/assets/curso/temas/t3/img19.svg', alt='')
              .col-lg-5.col-md-6.mb-4
                img.m-auto(src='@/assets/curso/temas/t3/img20.svg', alt='')


</template>

<script>
export default {
  name: 'TemasT3',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo:
          'Escenas del videojuego <em>Ori and The Blind Forest</em> (2015)',
        imagen: require('@/assets/curso/temas/t3/slider-img1.png'),
      },
      {
        titulo:
          'Escenas del videojuego <em>Ori and The Blind Forest</em> (2015)',
        imagen: require('@/assets/curso/temas/t3/slider-img2.jpg'),
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
