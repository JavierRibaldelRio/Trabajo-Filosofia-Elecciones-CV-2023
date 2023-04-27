import React, { Component } from 'react';

import WordCloud from 'wordcloud';

import "../styles/WordCloud.css";

const Id = require('../json/torre.json')

// Proporción, almacena la proporción de la nube
const proporcionNube = 2.6;



/**
 * En lace que he segido para entenderlo que había que hacerhttps://codesandbox.io/s/9435woonpy?file=/index.js
 */


class NubePalabras extends Component {
    constructor(props) {
        super(props);

        this.state = { width: 0 }

        this.contenedorNubePolitica = React.createRef();
    }

    // Component did Mount

    componentDidMount() {


        WordCloud("nube-politica", {
            list: [["Herbolista", 52], ['foo', 13]],
            weightFactor: 1,
            fontFamily: 'Times, serif',
            color: function (word, weight) {
                return (weight === 12) ? '#f02222' : '#c09292';
            },
            rotateRatio: 0.5,
            rotationSteps: 2,
            backgroundColor: '#ffe0e0'
        });


    }



    // Crea el canvas donde se mostrará la nuve
    render() {

        const width = window.innerWidth - window.innerWidth / 20;

        const height = window.innerHeight - window.innerHeight / 5;

        return (<div id="contenedor-nube-politica" ref={this.contenedorNubePolitica} className='span12' >            <canvas id='nube-politica' width={width} height={height} />
        </div>);




    }
}

export default NubePalabras;