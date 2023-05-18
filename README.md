# Trabajo Filosofía Política: Elecciones Comunidad Valenciana 28M

[![Netlify Status](https://api.netlify.com/api/v1/badges/5dce041b-6a3e-4e7e-9805-af848f5c320d/deploy-status)](https://app.netlify.com/sites/comparador-programas-28m-cv/deploys)

[**Link:** https://comparador-programas-28m-cv.netlify.app/](https://comparador-programas-28m-cv.netlify.app/)

Un trabajo de 1º de Bachillerato de Filosofía del [Colegio Salesianos San Juan Bosco (vsjb)](https://valenciasjb.salesianos.edu/) sobre las elecciones de la Comunidad Valenciana de 2023

## Metodología

 Para realizar el análisis comparativo del contenido de los programas electorales hemos obtenido el archivo PDF de cada programa electoral y ha sido convertido a un archivo de texto plano. A continuación se ha construido una aplicación web que ejecuta un conteo de palabras y genera un archivo JSON (formato de archivo que facilita el manejo de datos en internet). Tras esto, se ha construido esta página web, que permite seleccionar que programas electorales leer y genera una nube de palabras más repetidas y un gráfico de barras, para mayor eficacia hemos  eliminado algunas [palabras sin significado propio](src/json/PalabrasVacias.json). En la nube de palabras, el tamaño de cada palabras es proporcional a la frecuencia de repetición en el programa electoral; si se selecciona más de un programa electoral, el tamaño de la palabra es proporcional a la frecuencia relativa respecto a la suma de las palabras de los programas seleccionados. Mientras que en el gráfico de barras se nos muestran las palabras más comunes entre todos los partidos seleccionados. Es posible intercambiar entre la nube y el diagrama gracias a un interruptor.

## Fuentes Programas Electorales

<ul id="Fuentes"><li><a href="https://www.ciudadanos-cs.org/var/public/sections/programa-electoral-elecciones.2023-28m-marco/programa-marco-elecciones-28m-2023.pdf?_v=1" target="_blank">Ciudadanos</a></li><li><a href="https://28m.compromis.net/docs/PROGRAMA_ELECTORAL_2023_%20CAS.pdf" target="_blank">Compromís</a></li><li><a href="https://www.pp.es/sites/default/files/documentos/programa_electoral_28m.pdf" target="_blank">PP</a></li><li><a href="https://www.psoe.es/media-content/2023/04/PROGRAMA_MARCO_AUTONOMICO-2023.pdf" target="_blank">PSOE</a></li><li><a href="https://podemos.info/wp-content/uploads/2023/05/Podemos_programa_marco_28M_interactivo.pdf" target="_blank">Podemos</a></li><li><a href="https://www.voxespana.es/biblioteca/espana/2018m/gal_c2d72e181103013447.pdf" target="_blank">Vox</a></li></ul>


## Instalación  

Una vez descargado el repositorio, ejecutar:

```bash
npm install
```

Después para poner en marcha el entorno de desarollo:

```bash
npm start
```

Acuerdese de cambiar las variables de la conexión con firebase en archivo [*.env*](.env.dist).

## Hecho con  🛠️

- [React](https://react.dev/) - framework web
- [D3.js](https://d3js.org/) - gráfico de barras
- [WordCloud2.js](https://github.com/timdream/wordcloud2.js) - nube de palabras

## Licencia

Este código se encuntra bajo la licencia: *Mit License* - Consulte [LICENSE](LICENSE) para más información.
