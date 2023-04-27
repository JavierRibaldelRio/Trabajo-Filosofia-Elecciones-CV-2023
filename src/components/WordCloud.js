import React, { Component } from 'react';

const Id = require('../json/torre.json')

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


    }



    render() {

        return (<>
            norma


        </>);
    }
}

export default WordCloud;