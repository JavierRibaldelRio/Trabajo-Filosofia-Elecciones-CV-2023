// Página de analisis correspondiente /analisis

import BarPlot from "../components/BarPlot";
import SeleccionPartidos from "../components/SeleccionPartidos";
import NubePalabras from "../components/WordCloud";

import "../styles/Analisis.css"

import { useState } from "react";



function Analisis() {

    // Crea el estado que almacena los programas que ha de mostrar y elige uno aleatoriamente para mostar 
    const [programas, setProgramas] = useState([Math.floor(Math.random() * 100 % 6)]);

    // Función que añade un nuevo programa o si ya está añadido lo elimina

    const modificarSeleccion = (nuevoPrograma) => {


        if (programas.includes(nuevoPrograma)) {

            let programasSeleccionados = [...programas]

            programasSeleccionados.splice(programas.indexOf(nuevoPrograma), 1);

            setProgramas(programasSeleccionados.sort((a, b) => a - b));

        }
        else {

            setProgramas([nuevoPrograma, ...programas].sort((a, b) => a - b));
        }
    }

    return <><h1>Hola soc analisis pàgina</h1>
        <NubePalabras programas={programas} />

        <SeleccionPartidos seleccionados={programas} modificarSeleccion={modificarSeleccion} />


        <BarPlot programas={programas} height={200 * programas.length} key={programas.length} />
    </>
}

export default Analisis;