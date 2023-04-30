import { nombresPartido } from "../scripts/obtenerPartidos";
import BotonSeleccion from "./BotonSeleccion";

function SeleccionPartidos(props) {


    const botonesSeleccion = nombresPartido.map((nombre, i) => <BotonSeleccion partido={nombre} value={i} check={props.seleccionados.includes(i)} key={i} modificarSeleccion={props.modificarSeleccion} />);


    return <div className="container-fluid"> <div id="Seleccion-Partidos" className="row justify-content-around gy-3">

        {botonesSeleccion}</div>
    </div>;
}


export default SeleccionPartidos;