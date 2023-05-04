// Recibe el número de los programas que ha de fusionar y devuelve un array con todos los contenidos del programa fusionados

import contenidoNubePartidos from "./obtenerPartidos";

function unirProgramas(programas) {

    let arrayFusion = [];

    for (let i = 0; i < programas.length; i++) {

        arrayFusion.push(...contenidoNubePartidos[programas[i]]);
    }

    return arrayFusion
}

export default unirProgramas;