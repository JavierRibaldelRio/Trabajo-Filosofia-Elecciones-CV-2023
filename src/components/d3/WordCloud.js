import React, { Component } from 'react';
import * as d3 from "d3";
import cloud from "d3-cloud";
import { Canvas, createCanvas } from "canvas";

const Id = require('../../json/torre.json')

class WordCloud extends Component {
    constructor(props) {
        super(props);

        this.state = { can: "" }
    }

    // Component did Mount

    componentDidMount() {

        this.crearWordCloud();
    }


    // Crea la nube de palabras
    crearWordCloud() {

        const words = ["Hello", "world", "normally", "you", "want", "more", "words", "than", "this"]
            .map(function (d) {
                return { text: d, size: 10 + Math.random() * 90 };
            });

        console.log('Id :>> ', Id.count.slice(0, 50));

        const layout = cloud().size([960, 500])
            .canvas(() => createCanvas(1, 1))
            .words(Id.count.slice(0, 50))
            .padding(1)
            .rotate(() => Math.floor(Math.random() * 2) * 90)
            .font("Impact")
            .fontSize(d => d.count)
            .text(d => d.word)
            .on("end", this.dibujarCanvas.bind(this))
            .start();
    }

    dibujarCanvas(words, bounds) {
        const { x: width, y: height } = bounds[1]

        const canvas = createCanvas(width, height, 'png')
        const ctx = canvas.getContext('2d')
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'

        for (let word of words) {
            ctx.font = `${word.size}px ${word.font}`
            ctx.fillText(word.text, (width / 2) + word.x, (height / 2) + word.y)
        }

        this.setState({ can: canvas.toDataURL() });
    }



    render() {

        let foto = this.state.can;


        return (<>

            <img src={foto} alt='di' />

        </>);
    }
}

export default WordCloud;