/**
 * Este Script se dedica a obtener los JSONS d elos partidos y los formatea
 */

import crearArray from './crearArrayPrograma.js';


//Alamacena el tamañ máximo de la letra en la nube

const TAMANYO_MAXIMO_LETRA_NUBE = 48;



// Almacena el nombre de los archvos JSOn de los partidos
const nombresPartido = ['1984', "Camino", "Cripta", "Peekay", "Idhun", "Trafalgar"];


// Crear un array con todo el desglose de palabras para la nueve

const contenidoNubePartidos = nombresPartido.map(arch => crearArray(require(`../json/programas/${arch}.json`)));

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

        let arrayFusion = [];

        for (let i = 0; i < programas.length; i++) {

            arrayFusion.push(...contenidoNubePartidos[programas[i]]);
        }


        // Ordena el array por repeticiones de palabras relativa
        arrayFusion = arrayFusion.sort((w1, w2) =>

            calcularPalabrasRelativas(w1) < calcularPalabrasRelativas(w2)
        )

        // Obtiene el factor relativo
        const factor = ((TAMANYO_MAXIMO_LETRA_NUBE - Math.round((programas.length - 1 * 15 / nombresPartido.length - 1))) / calcularPalabrasRelativas(arrayFusion[0]));

        console.log('factor :>> ', factor);


        return arrayFusion.splice(0, 75).map((w) => {

            w[1] = Math.round(factor * w[2].repeticiones / w[2].totalWords)

            return w
        });

    }


}



export default obtenerContenidoNube;


export { TAMANYO_MAXIMO_LETRA_NUBE, nombresPartido };
