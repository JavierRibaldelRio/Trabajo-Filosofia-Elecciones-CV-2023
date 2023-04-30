// Crea un boton para selccionar el programa del partido político
function BotonSeleccion(props) {

    // Extrae el color del JSON
    const color = require('../json/programas/' + props.partido + ".json")["hexPartido"];


    //Id para la etiqueta
    const id = "checkbox-" + props.value;


    // Crea la check box
    return <label htmlFor={id} className="btn boton-seleccion col-sm-1" style={{ backgroundColor: color }} >

        {props.partido}
        <br />

        <input id={id} type="checkbox" name="seleccion-programa" className="checkbox-seleccion-programa" value={props.value} style={{ accentColor: color }} checked={props.check} onChange={() => { props.modificarSeleccion(props.value) }} />

    </label >;
}

export default BotonSeleccion;