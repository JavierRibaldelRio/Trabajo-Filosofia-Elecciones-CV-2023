
function Fuentes() {

    const fuentes = [new Fuente("https://www.ciudadanos-cs.org/var/public/sections/programa-electoral-elecciones.2023-28m-marco/programa-marco-elecciones-28m-2023.pdf?_v=1", "Ciudadanos"), new Fuente("https://28m.compromis.net/docs/PROGRAMA_ELECTORAL_2023_%20CAS.pdf", "Compromís"), new Fuente('https://www.pp.es/sites/default/files/documentos/programa_electoral_28m.pdf', "PP"), new Fuente('https://www.psoe.es/media-content/2023/04/PROGRAMA_MARCO_AUTONOMICO-2023.pdf', "PSOE"), new Fuente('https://podemos.info/wp-content/uploads/2023/05/Podemos_programa_marco_28M_interactivo.pdf', "Podemos"), new Fuente('https://www.voxespana.es/biblioteca/espana/2018m/gal_c2d72e181103013447.pdf', "Vox")].map(p => <li key={p.part}><a href={p.link} target="_blank">{p.part}</a></li>);

    return <>
        <h1>Fuentes</h1>

        <div className="flex-centro" style={{ lineHeight: "50px" }}>
            <ul id="Fuentes">{fuentes}</ul>

        </div>
    </>
}


class Fuente {

    constructor(link, part) {

        this.link = link;
        this.part = part
    }
}

export default Fuentes;