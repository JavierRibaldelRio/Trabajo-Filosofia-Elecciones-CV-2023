import React, { Component } from 'react';
import WordCloud from 'wordcloud';
import "../styles/WordCloud.css";
import obtenerContenidoNube from '../scripts/generarNube';



/**
 * w: https://github.com/timdream/wordcloud2.js
 * w: Enlace que he segido para entenderlo que había que hacer  https://codesandbox.io/s/9435woonpy?file=/index.js
 */

class NubePalabras extends Component {
    constructor(props) {
        super(props);

        this.state = { width: window.innerWidth - window.innerWidth / 20, height: window.innerHeight - window.innerHeight / 5 - 100 }

        this.contenedorNubePolitica = React.createRef();
    }

    // Al iniciarse crea la nube

    componentDidMount() {

        this.crearNube();

    }


    // Tras cambio  crea una nuev anube
    componentDidUpdate() {

        this.crearNube();
    }

    // Crea una nube

    crearNube() {
        const width = Math.round(this.state.width);

        if (this.props.programas.length !== 0) {
            WordCloud("nube-politica", {
                list: obtenerContenidoNube(this.props.programas),
                fontFamily: "monserrat, arial, roboto",
                color: (word, weight, fontSize, distance, theta, data) => data[0].color,
                rotateRatio: 0.5,
                rotationSteps: 3,
                gridSize: Math.round(16 * width / 1024),
                weightFactor: 2.5
            });
        }

    }


    // Crea el canvas donde se mostrará la nuve
    render() {

        const width = this.state.width;

        const height = this.state.height;

        return (<div id="contenedor-nube-politica" style={{ visibility: (this.props.programas.length === 0) ? "hidden" : "visible" }} ref={this.contenedorNubePolitica} className='span12' >
            <canvas id='nube-politica' width={width} height={height} />
        </div>);




    }
}

export default NubePalabras;