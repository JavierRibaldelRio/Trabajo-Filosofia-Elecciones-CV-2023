import React, { Component } from 'react';

import * as d3 from 'd3';
import obtenerContenidoGrafica, { PALABRAS_POR_REPETICION } from '../scripts/generarGrafica';
import { nombresPartido } from '../scripts/obtenerPartidos';


class BarPlot extends Component {


    // Crea el gráfico

    componentDidMount() {
        const programasSeleccionados = this.props.programas;
        const data = obtenerContenidoGrafica(programasSeleccionados);
        this.crearGrafico(data, programasSeleccionados);
    }


    // Crea el gráfico
    crearGrafico(data, programas) {


        // Obtiene unidades
        const { margin } = this.props;
        const width = this.props.width - margin.left - margin.right;
        const height = this.props.height - margin.top - margin.bottom;

        const svg = d3.select('#bar-plot')
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);




        // Obtiene los datos
        const partidosSeleccionados = programas.map(x => nombresPartido[x]).reverse();;

        // Palabras que se van a mostratrar
        const palabras = data.map(d => d[0]);

        // Crea el eje Y

        const yScale = d3.scaleBand()
            .domain(palabras)
            .range([0, height])
            .padding([0.2]);

        svg.append('g')
            .call(d3.axisLeft(yScale).tickSize(0))

        // Crea el eje X

        // Gets

        const xScale = d3.scaleLinear()
            .domain([0, d3.max(data.map((x) => x[1].map((x) => x.palabrasPorRepeticion)).flat())])
            .range([0, width])

        svg.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(xScale));
        svg.append("g")
            .call(d3.axisTop(xScale))

        // Crea los subgrupos

        const ySubGrupo = d3.scaleBand()
            .domain(partidosSeleccionados)
            .range([yScale.bandwidth(), 0])
            .padding([0.2])

        svg.append('g')
            .selectAll('g')
            .data(data)
            .join('g')
            .attr("transform", d => `translate(0, ${yScale(d[0]) + height})`)
            .selectAll('rect')
            .data((d) => d[1].map(x => { return { key: d[0], ...x }; }))
            .join('rect')
            .attr('y', (d) => -height + ySubGrupo(d.nombrePartido))
            .attr('x', 0)
            .attr('height', ySubGrupo.bandwidth())
            .attr('width', d => xScale(d.palabrasPorRepeticion))
            .attr("fill", d => d.color);




    }
    render() {
        return <>
            {/* El to locale String añade los puntos o las comas según el correpondiente locale */}
            <p id='leyenda'>Número repeticiones por {PALABRAS_POR_REPETICION.toLocaleString()} palabras</p>

            <div id='bar-plot' />;
        </>
    }
}

BarPlot.defaultProps = {

    margin: { top: 40, right: 30, bottom: 20, left: 50 },

    width: window.innerWidth - window.innerWidth / 20,

    height: 600

}

export default BarPlot;