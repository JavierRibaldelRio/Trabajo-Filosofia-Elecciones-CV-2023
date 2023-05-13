// Página de analisis correspondiente /analisis

import BarPlot from "../components/BarPlot";
import SeleccionPartidos from "../components/SeleccionPartidos";
import NubePalabras from "../components/WordCloud";
import SwitchGraficaNube from "../components/SwitchGraficaNube";

import "../styles/Analisis.css"

import { useState } from "react";



function Analisis() {

    // Crea el estado que almacena los programas que ha de mostrar y elige uno aleatoriamente para mostar 
    const [programas, setProgramas] = useState([Math.floor(Math.random() * 100 % 6)]);

    // Crea el estado que almacena si se ha de mostrar la nube o la gráfica

    const [mostrarNube, setMostrarNube] = useState([true]);


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

    return <>
        <div id="analisis">
            {mostrarNube ? <NubePalabras programas={programas} /> : null}

            <SwitchGraficaNube mostrarNube={mostrarNube} cambiarNube={setMostrarNube} />

            <SeleccionPartidos seleccionados={programas} modificarSeleccion={modificarSeleccion} />


            {!mostrarNube ? <BarPlot programas={programas} height={1.3 * window.innerHeight} key={programas.length} /> : null}
        </div >

    </>
}

export default Analisis;