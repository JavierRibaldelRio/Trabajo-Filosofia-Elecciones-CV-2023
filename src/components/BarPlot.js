import React, { Component } from 'react';

import * as d3 from 'd3';
import { obtenerContenidoGrafica } from '../scripts/obtenerPartidos';


class BarPlot extends Component {
    constructor(props) {
        super(props);
    }
    state = {}

    // Crea el gráfico

    componentDidMount() {

        obtenerContenidoGrafica([0, 1, 2, 3, 4, 5]);

        this.crearGrafico();
    }

    // Crea el gráfico
    crearGrafico() {

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


        // Parse the Data
        d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_stacked.csv").then(function (data) {

            // List of subgroups = header of the csv files = soil condition here
            const subgroups = data.columns.slice(1);

            // List of groups = species here = value of the first column called group -> I show them on the X axis
            const groups = data.map(d => d.group);

            // Crea el eje Y

            const yScale = d3.scaleBand()
                .domain(groups)
                .range([0, height])
                .padding([0.2]);

            svg.append('g')
                .call(d3.axisLeft(yScale).tickSize(0))

            // Crea el eje X

            const xScale = d3.scaleLinear()
                .domain([0, 40])
                .range([0, width])

            svg.append("g")
                .attr("transform", `translate(0,${height})`)
                .call(d3.axisBottom(xScale));

            // Crea los subgrupos

            const ySubGrupo = d3.scaleBand()
                .domain(subgroups)
                .range([yScale.bandwidth(), 0])
                .padding([0.05])

            const color = d3.scaleOrdinal()
                .domain(subgroups)
                .range(['#e41a1c', '#377eb8', '#4daf4a'])

            svg.append('g')
                .selectAll('g')
                .data(data)
                .join('g')
                .attr("transform", d => `translate(0, ${yScale(d.group) + height})`)
                .selectAll('rect')
                .data((d) => subgroups.map((key) => { return { key: key, value: d[key] }; }))
                .join('rect')
                .attr('y', (d) => -height + ySubGrupo(d.key))
                .attr('x', d => 0)
                .attr('height', ySubGrupo.bandwidth())
                .attr('width', d => xScale(d.value))
                .attr("fill", d => color(d.key));



        })
    }
    render() {
        return <div id='bar-plot' />;
    }
}

BarPlot.defaultProps = {

    margin: { top: 40, right: 30, bottom: 20, left: 50 },

    width: 1200,

    height: 600

}

export default BarPlot;