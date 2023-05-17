import { Link } from 'react-router-dom';

//
function PalabrasEliminadas() {


    const palabrasVacias = require('../json/PalabrasVacias.json');

    const itemsLista = palabrasVacias.sort().map(p => <li key={p}>{p}</li>)


    return <><h1>Palabras Eliminadas</h1>
        <p>Lista de palabras que no se han tenido en cuenta para realizar el conteo de palabras en los programas electorales</p>
        <div className='d-flex justify-content-center'>
            <ul id='lista-palabras-eliminadas'>
                {itemsLista}
            </ul>


        </div >

        <div style={{ textAlign: "center", margin: "2vh" }}>


            <Link style={{ textDecoration: "none" }} className=' btn btn-info' to={"/introduccion"}>Volver a la Introducción</Link>

        </div>

    </>
}

export default PalabrasEliminadas;