// Crea la barra de control de la página web
import { Link } from "react-router-dom";

//Importes Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Nombre from "./Nombre";

function Cabecera() {

    const expand = "xl";
    const tipo = "dark";

    return <header><Navbar key={expand} fixed="top" bg={tipo} variant={tipo} expand={expand} className="mb-3" >
        <Container fluid>
            <Navbar.Brand><Link to={"/about"} style={{ textDecoration: "none" }}><Nombre /></Link></Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav" className=" justify-content-end align-items-center">


                <Nav className="">
                    <Link className="nav-link" to={"/introduccion"} >Introducción</Link>
                    <Link className="nav-link" to="/fuentes">Fuentes</Link>

                    <Link className="nav-link" to={"/"}>Analizador</Link>
                    <Link className="nav-link" to="/conclusion">Conclusión</Link>

                </Nav>

            </Navbar.Collapse>
        </Container>
    </Navbar>
    </header >



}

export default Cabecera;