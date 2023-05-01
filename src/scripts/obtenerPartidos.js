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

        // Une el contenido de los JSON se lecccionados
        let arrayFusion = unirJSON(programas);

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

// Obtiene el contenido de la gráfica

function obtenerContenidoGrafica(programas) {

    // Si hay más de un programa busca las uniones de los paertidos
    if (programas.length > 1) {

        // Carga las palabras en el array
        const palabrasProgramas = unirJSON(programas).sort((w1, w2) => {

            if (w1[0] > w2[0]) { return 1; }
            else if (w1[0] < w2[0]) { return -1; }
            return 0;
        });

        console.log('palabrasProgramas :>> ', palabrasProgramas);

        const unionProgramas = buscarUnirComunes(palabrasProgramas, programas.length - 1, [])

        console.log('palabrasProgramas :>> ', unionProgramas);

        // Ordena las palabras por repetidas comunes > mas veces repetidas 
        const palabrasSeleccionadas = unionProgramas.sort((w1, w2) => {

            if (w1[1].length < w2[1].length) { return 1 }
            else if (w1[1].length > w2[1].length) { return -1 }
            else {

                //Calcula cuaal tien ela palabra mas repetida

                const sumaRelativa = (sum, word) => word.repeticiones / word.totalWords + sum;

                const sumaRw1 = w1[1].reduce(sumaRelativa, 0);

                const sumaRw2 = w2[1].reduce(sumaRelativa, 0);

                return sumaRw2 - sumaRw1;

            }


        }).splice(0, 10);

        console.log('palabrasSeleccionadas :>> ', palabrasSeleccionadas);

    }


}


// Busca las palabras en el array y las une formando el array con toda la combinacion


function buscarUnirComunes(programas, posi, resultado = []) {

    // Si ya no queda nada más que mirar

    if (programas.length === 0) {

        return resultado;
    }

    // Elige la primera palabra del array
    const word = programas[0][0];

    // Almacena el último índice donde la palabra es la misma ya que el indice no ha cambiado

    let pos = posi;

    while (word !== programas[pos][0]) {
        pos--;
    }

    // Si está repetida más de una vez la añade al aray de las repetidas
    if (pos !== 0) {

        const newItem = [word, [programas[0][2]]]

        for (let i = 0; i < pos; i++) {
            newItem[1].push(programas[i][2]);
        }

        resultado.push(newItem);
    }

    return buscarUnirComunes(programas.slice(pos + 1), posi, resultado);




}



// Junta todos los jsons seleccionados

function unirJSON(programas) {

    let arrayFusion = [];

    for (let i = 0; i < programas.length; i++) {

        arrayFusion.push(...contenidoNubePartidos[programas[i]]);
    }

    return arrayFusion
}


export default obtenerContenidoNube;


export { TAMANYO_MAXIMO_LETRA_NUBE, nombresPartido, obtenerContenidoGrafica };
