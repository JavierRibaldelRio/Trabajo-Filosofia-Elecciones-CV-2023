
// Crea el switch que elige la versión (nube/gráfica)

function SwitchGraficaNube(props) {

    const { mostrarNube, cambiarNube } = props;

    const modicarNube = () => { cambiarNube(!mostrarNube) };



    return <div className="switch-nube"><div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="switchNube" checked={mostrarNube} onChange={modicarNube} />
        <label className="form-check-label" htmlFor="switchNube">Mostrar {mostrarNube ? "nube de nube de palabras" : "gráfico de barras"}</label>
    </div>
    </div>

}

SwitchGraficaNube.defualtProps = {


    mostrarNube: true,

    cambiarNube: () => { }
}

export default SwitchGraficaNube;