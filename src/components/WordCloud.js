import React, { Component } from 'react';

import WordCloud from 'wordcloud';

import "../styles/WordCloud.css";

import obtenerContenidoNube from '../scripts/obtenerPartidos';





/**
 * En lace que he segido para entenderlo que había que hacer https://codesandbox.io/s/9435woonpy?file=/index.js
 */


class NubePalabras extends Component {
    constructor(props) {
        super(props);

        this.state = { width: window.innerWidth - window.innerWidth / 20, height: window.innerHeight - window.innerHeight / 5 }

        this.contenedorNubePolitica = React.createRef();
    }

    // Component did Mount

    componentDidMount() {

        const width = Math.round(this.state.width);

        WordCloud("nube-politica", {
            list: obtenerContenidoNube([this.props.programas]),
            fontFamily: 'Nunito',
            color: (word, weight, fontSize, distance, theta, data) => data[0].color,
            rotateRatio: 0.5,
            rotationSteps: 3,
            gridSize: Math.round(16 * width / 1024),
            weightFactor: 2.5
        });


    }



    // Crea el canvas donde se mostrará la nuve
    render() {

        const width = this.state.width;

        const height = this.state.height;

        return (<div id="contenedor-nube-politica" ref={this.contenedorNubePolitica} className='span12' >
            <canvas id='nube-politica' width={width} height={height} />
        </div>);




    }
}

export default NubePalabras;