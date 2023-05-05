import unirProgramas from "./unirJSONprogramas";
import calcularPalabrasRelativas from "./calcularPalabrasRelativas";


const PALABRAS_POR_REPETICION = 10000;

// Obtiene el contenido de la gráfica

function obtenerContenidoGrafica(programas) {

    // Obtiene los datos
    const datosGrafica = obtenerDatosGrafica(programas);



    // Opera con los datos y lo devulve
    return operarDatos(datosGrafica);

}

// Calcula cuales son las 10 palabras comunes y las ordena
function obtenerDatosGrafica(programas) {

    // Carga las palabras en el array
    const palabrasProgramas = unirProgramas(programas).sort((w1, w2) => {

        if (w1[0] > w2[0]) { return 1; }
        else if (w1[0] < w2[0]) { return -1; }
        return 0;
    });

    const unionProgramas = buscarUnirComunes(palabrasProgramas, programas.length, [])

    // Ordena las palabras por repetidas comunes > mas veces repetidas  y deja 10
    return unionProgramas.sort((w1, w2) => {

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
}


// Busca las palabras en el array y las une formando el array con toda la combinacion función recursiva
function buscarUnirComunes(programas, posi, resultado = []) {

    // Si ya no queda nada más que mirar

    if (programas.length === 0) {

        return resultado;
    }

    // Elige la primera palabra del array
    const word = programas[0][0];

    // Almacena el último índice donde la palabra es la misma ya que el indice no ha cambiado

    let pos = posi;

    while (word !== programas[pos - 1][0]) {
        pos--;
    }

    // Si está repetida más de una vez la añade al aray de las repetidas
    if (pos !== 0) {
        const newItem = [word, []]

        // El for empieza en uno porque  el
        for (let i = 0; i < pos; i++) {

            newItem[1].push(programas[i][2]);
        }

        resultado.push(newItem);
    }

    return buscarUnirComunes(programas.slice(pos), posi, resultado);
}

// Rebibe las 10 palabras más comunes entre todos los jsones seleccionados, los calcula y saca estadísticcas

const operarDatos = (data) => data.map((d) => [d[0], pasarDatosARepetcionesPorMilPalabras(d[1])]);

const pasarDatosARepetcionesPorMilPalabras = (data) => data.map((x) => { return { ...x, palabrasPorRepeticion: calcularNuevoTamaño(x) } });

const calcularNuevoTamaño = (word) => Math.round(PALABRAS_POR_REPETICION * calcularPalabrasRelativas(word));

export default obtenerContenidoGrafica;