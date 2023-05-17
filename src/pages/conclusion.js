import React from 'react';

function Conclusion() {


    return <>
        <h1>Conclusión</h1>

        <p className='texto'>

            Gracias a la herramienta construida podemos analizar los programas electorales de una forma gráfica, observando la frecuencia relativa de las palabras más empleadas. Teniendo a nuestra disposición la capacidad de generar nubes y gráficas de varios programas a la vez podemos realizar muchos análisis -de hecho hay 720 combinaciones posibles-; para concluir voy a comentar brevemente individualmente cada partido en base a los datos obtenidos por la nube.


            <ul id='lista-partidos'>

                <li>
                    <strong>Ciudadanos: </strong> al ser un partido de centro, muestra una gran variedad de palabras, por lo que no podemos en ningún campo semántico

                </li>
                <li>
                    <strong>Compromís: </strong>

                    destaca por su uso de verbos conjugados en futuro: <i>Crearemos</i>, <i>Impulsaremos</i>... Además de palabras como <i>Social</i>, <i>Servicios</i>, <i>Personas</i>... Al ser un partido regionalista también encontramos palabras más relacionadas con la Comunidad Valenciana: <i>Valenciano</i> (uso doble, como lengua y como habitante de valencia), <i>Generalitat</i>...
                </li>
                <li>
                    <strong>PP: </strong> en la nube llama la atención como casi todas las palabras son del mismo tamaño, por lo que repiten menos palabras, lo cual nos indica que tiene una gran variedad de propuestas. Se observan palabras como: <i>Servicios</i>, <i>Desarrollo</i>, <i>Política</i>... relativas al funcionamiento de la Comunidad Autónomo

                </li>
                <li>
                    <strong>PSOE: </strong>al ser un partido federalista utiliza más palabras como: <i>Comunidades</i>, <i>Territorial</i>... que otras como <i>Estado</i> o <i>España</i>. También se observan un gran número de sustantivos abstractos como <i>Igualdad</i>, <i>Desarrollo</i>, <i>Innovación</i>...

                </li>  <li>
                    <strong>Podemos: </strong>

                    muestra palabras que mantienen relación con los problemas que la sociedad se esta enfrentado: <i>Viviendas</i>, <i>Empleo</i>,<i>Energética</i>. Además de palabras relativas a la economía: <i>Euros</i>,<i>Renta</i>,<i>Impuesto</i>...

                </li>
                <li>
                    <strong>Vox: </strong>

                    utiliza palabras relativas a España como: <i>Nacional</i>, <i>Estado</i>, <i>Nacionalidad</i>. Alternativamente incorpora palabras relativas al ámbito judicial: <i>Justicia</i>, <i>Defensa</i>,<i>Ley</i>. Destaco también la aparición de las palabras <i>Lengua</i> y <i>Cultura</i>

                </li>
            </ul>
        </p >
    </>
}

export default Conclusion;