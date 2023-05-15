// Crea la barra de control de la página web

import { Link } from "react-router-dom";


import "bootstrap/js/src/collapse.js";
function Cabecera() {

    return <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark fixed-top" >
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/about"}>Trabajo Elecciones 28M</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" to={"/introduccion"} >Introducción</Link>

                        <Link className="nav-link" to={"/"}>Analizador</Link>
                        <Link className="nav-link" t0="/conclusion">Conclusión</Link>
                    </div>
                </div>
            </div>
        </nav>
    </header>;
}

export default Cabecera;