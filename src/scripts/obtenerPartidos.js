/**
 * Este Script se dedica a obtener los JSONS d elos partidos y los formatea
 */

import crearArray from './crearArrayPrograma.js';

//Alamacena el tamaño máximo de la letra en la nube
const TAMANYO_MAXIMO_LETRA_NUBE = 48;

// Almacena el nombre de los archvos JSOn de los partidos en orden alfabético
const nombresPartido = ['1984', "Camino", "Cripta", "Peekay", "Idhun", "Trafalgar"].sort();


// Crear un array con todo el desglose de palabras para obtener datos
const contenidoNubePartidos = nombresPartido.map(arch => crearArray(require(`../json/programas/${arch}.json`), TAMANYO_MAXIMO_LETRA_NUBE));


export default contenidoNubePartidos;

export { nombresPartido, TAMANYO_MAXIMO_LETRA_NUBE };
