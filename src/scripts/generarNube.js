import contenidoNubePartidos, { TAMANYO_MAXIMO_LETRA_NUBE, nombresPartido } from "./obtenerPartidos";

import unirProgramas from "./unirJSONprogramas";


// Devuelve un array con el contenido de la nube en función de los programas que hay que mostrar
function obtenerContenidoNube(programas) {

    // Si sólo hace falta uno devolvemos el que toque
    if (programas.length === 1) {

        return contenidoNubePartidos[programas[0]]
    }


    // Si no fusionamos
    else {

        // Calcula el número de palabras relativas de cada programa  
        const calcularPalabrasRelativas = (w) => w[2].repeticiones / w[2].totalWords

        // Une el contenido de los JSON se lecccionados
        let arrayFusion = unirProgramas(programas);

        // Ordena el array por repeticiones de palabras relativa
        arrayFusion = arrayFusion.sort((w1, w2) =>

            calcularPalabrasRelativas(w1) < calcularPalabrasRelativas(w2)
        )

        // Obtiene el factor relativo
        const factor = ((TAMANYO_MAXIMO_LETRA_NUBE - Math.round((programas.length - 1 * 15 / nombresPartido.length - 1))) / calcularPalabrasRelativas(arrayFusion[0]));

        return arrayFusion.splice(0, 75).map((w) => {

            w[1] = Math.round(factor * w[2].repeticiones / w[2].totalWords)

            return w
        });
    }
}

export default obtenerContenidoNube;