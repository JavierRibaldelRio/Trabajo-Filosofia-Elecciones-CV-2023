function Introduccion() {


    return <>
        <h1>Introducción</h1>

        <p id="introduccion">
            El domingo 28 de mayo, como cada cuatro años, los mayores de 18 años de toda España votarán a un alcalde. Además, en Aragón, Asturias, Islas Baleares, Canarias, Cantabria, Castilla la Mancha, Extremadura, Comunidad de Madrid, La Rioja, Región de Murcía, Navarra y Comunidad Valenciana, también han de votar a un partido político que les gobierne durante los próximos 4 años.
            <br />             <br />

            España al ser un pais descentralizado, cada comunidad autónoma cuenta con su propio gobierno, establecido por los Estatutos de Autonomía, que  es la ley fundamiental de cada comunidad autónoma. Analógamente podemos, decir que para cada comunidad autónoma su estatuto de autonomia, es como la constitución para España.

        </p>

        <h2>Metodología</h2>

        <p>

            Para realizar el análisis compartivo del contenido de los programas electorales hemos obtenito el archivo PDF de cada programa electoral y ha sido convertido a un archivo de texto plano. A continuación se ha construido una aplicación web que ejecuta un conteo de palabras y genera un archivo JSON (formato de archivo que facilita el manejo de datos en internet). Tras esto, se ha construido esta página web, que permite seleccionar que programas electorales leer y genera una nube de palabras más repetidas y un gráfico de barras. En la nube de palabras, el tamaño de cada palabras es proporcional a la frecuencia de repetición en el programa electoral; si se seleccióna más de un programa electoral, el tamaño de la palabra es proporcional a la frecuencia relativa respecto a la suma de las palabras de los programas selecccionados. Mientres que en el gráfico de barras se nos muestran las palabras más comunes entre todos los partidos selecccionados. Es posible intercambiar entre la nube y el diagrama gracias a un interruptor.



        </p>
    </>
}

export default Introduccion;