function Introduccion() {


    return <>
        <h1>Introducción</h1>

        <p id="introduccion" className="texto">
            El domingo 28 de mayo, como cada cuatro años, los mayores de 18 años de toda España votarán a un alcalde. Además, en Aragón, Asturias, Islas Baleares, Canarias, Cantabria, Castilla La Mancha, Extremadura, Comunidad de Madrid, La Rioja, Región de Murcia, Navarra y Comunidad Valenciana también han de votar a un partido político que les gobierne durante los próximos 4 años.
            <br />             <br />

            En España, al ser un país descentralizado, cada comunidad autónoma cuenta con su propio gobierno, establecido por los Estatutos de Autonomía, que  es la ley fundamental de cada comunidad autónoma. Análogamente podemos decir que para cada comunidad autónoma su Estatuto de Autonomía, es como la Constitución para España.

        </p>

        <h2>Metodología</h2>

        <p className="texto">

            Para realizar el análisis comparativo del contenido de los programas electorales hemos obtenido el archivo PDF de cada programa electoral y ha sido convertido a un archivo de texto plano. A continuación se ha construido una aplicación web que ejecuta un conteo de palabras y genera un archivo JSON (formato de archivo que facilita el manejo de datos en internet). Tras esto, se ha construido esta página web, que permite seleccionar que programas electorales leer y genera una nube de palabras más repetidas y un gráfico de barras. En la nube de palabras, el tamaño de cada palabras es proporcional a la frecuencia de repetición en el programa electoral; si se selecciona más de un programa electoral, el tamaño de la palabra es proporcional a la frecuencia relativa respecto a la suma de las palabras de los programas seleccionados. Mientras que en el gráfico de barras se nos muestran las palabras más comunes entre todos los partidos seleccionados. Es posible intercambiar entre la nube y el diagrama gracias a un interruptor.



        </p>
    </>
}

export default Introduccion;