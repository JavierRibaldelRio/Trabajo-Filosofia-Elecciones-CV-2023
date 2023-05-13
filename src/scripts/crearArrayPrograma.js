
import pasarAMayusPalabra from './pasarAMayusPalabra';


const vacias = require('../json/PalabrasVacias.json');


const palabrasPorNube = 80;



// Crea el array con las palabras de un programa

// Devuelve un array Listo para la nube con este formato [palabra, tamaño letra , rep palabra en texto, nº palbras en texto, nombre partido, color]

function crearArray(partido, tamanyo_max) {

    // Obtiene datos del partido
    const { nombrePartido, totalWords } = partido;
    const color = partido.hexPartido;

    // Obtiene el desglose de palabras y elimina las vacias
    let palabras = partido.count.filter(w => !vacias.includes(w.word));

    // Obtiene el multiplicante de la proporción del tamaño
    const factor = tamanyo_max / palabras[0].count;

    return palabras.splice(0, palabrasPorNube).map(x => [pasarAMayusPalabra(x.word), Math.round(x.count * factor), { repeticiones: x.count, totalWords, nombrePartido, color }])

}

export default crearArray;

export { palabrasPorNube };