// Página de analisis correspondiente /analisis

import NubePalabras from "../components/WordCloud";

import { useState } from "react";



function Analisis() {

    // Crea el estado que almacena los programas que ha de mostrar y elige uno aleatoriamente para mostar 
    const [programas, setProgramas] = useState([Math.floor(Math.random() * 100 % 6)]);


    return <><h1>Hola soc analisis pàgina</h1>
        <NubePalabras programas={programas} />

    </>
}

export default Analisis;