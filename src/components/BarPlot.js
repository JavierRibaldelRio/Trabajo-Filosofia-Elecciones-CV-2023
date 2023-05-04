import React, { Component } from 'react';

import * as d3 from 'd3';
import obtenerContenidoGrafica from '../scripts/generarGrafica';


class BarPlot extends Component {
    constructor(props) {
        super(props);
    }
    state = {}

    // Crea el gráfico

    componentDidMount() {

        console.log("rasdf" + JSON.stringify(obtenerContenidoGrafica([0, 1, 2, 3, 4, 5])));

        this.crearGrafico();
    }

    // Crea el gráfico
    crearGrafico() {

        // Test para crear gráficas

        const data = [
            [
                "Yo",
                [
                    {
                        "repeticiones": 14,
                        "totalWords": 6296,
                        "nombrePartido": "1984",
                        "color": "#34d35e"
                    },
                    {
                        "repeticiones": 14,
                        "totalWords": 6296,
                        "nombrePartido": "1984",
                        "color": "#34d35e"
                    },
                    {
                        "repeticiones": 56,
                        "totalWords": 51248,
                        "nombrePartido": "Camino",
                        "color": "#3F88C5"
                    },
                    {
                        "repeticiones": 261,
                        "totalWords": 46919,
                        "nombrePartido": "Cripta",
                        "color": "#03254e"
                    },
                    {
                        "repeticiones": 1218,
                        "totalWords": 227640,
                        "nombrePartido": "Peekay",
                        "color": "#F4743B"
                    },
                    {
                        "repeticiones": 32,
                        "totalWords": 29968,
                        "nombrePartido": "Idhun",
                        "color": "#f80044"
                    }
                ]
            ],
            [
                "Dos",
                [
                    {
                        "repeticiones": 18,
                        "totalWords": 6296,
                        "nombrePartido": "1984",
                        "color": "#34d35e"
                    },
                    {
                        "repeticiones": 18,
                        "totalWords": 6296,
                        "nombrePartido": "1984",
                        "color": "#34d35e"
                    },
                    {
                        "repeticiones": 96,
                        "totalWords": 51248,
                        "nombrePartido": "Camino",
                        "color": "#3F88C5"
                    },
                    {
                        "repeticiones": 66,
                        "totalWords": 46919,
                        "nombrePartido": "Cripta",
                        "color": "#03254e"
                    },
                    {
                        "repeticiones": 604,
                        "totalWords": 227640,
                        "nombrePartido": "Peekay",
                        "color": "#F4743B"
                    },
                    {
                        "repeticiones": 39,
                        "totalWords": 29968,
                        "nombrePartido": "Idhun",
                        "color": "#f80044"
                    }
                ]
            ],
            [
                "Tenía",
                [
                    {
                        "repeticiones": 16,
                        "totalWords": 6296,
                        "nombrePartido": "1984",
                        "color": "#34d35e"
                    },
                    {
                        "repeticiones": 16,
                        "totalWords": 6296,
                        "nombrePartido": "1984",
                        "color": "#34d35e"
                    },
                    {
                        "repeticiones": 90,
                        "totalWords": 51248,
                        "nombrePartido": "Camino",
                        "color": "#3F88C5"
                    },
                    {
                        "repeticiones": 54,
                        "totalWords": 46919,
                        "nombrePartido": "Cripta",
                        "color": "#03254e"
                    },
                    {
                        "repeticiones": 546,
                        "totalWords": 227640,
                        "nombrePartido": "Peekay",
                        "color": "#F4743B"
                    },
                    {
                        "repeticiones": 41,
                        "totalWords": 29968,
                        "nombrePartido": "Idhun",
                        "color": "#f80044"
                    }
                ]
            ],
            [
                "Muy",
                [
                    {
                        "repeticiones": 13,
                        "totalWords": 6296,
                        "nombrePartido": "1984",
                        "color": "#34d35e"
                    },
                    {
                        "repeticiones": 13,
                        "totalWords": 6296,
                        "nombrePartido": "1984",
                        "color": "#34d35e"
                    },
                    {
                        "repeticiones": 68,
                        "totalWords": 51248,
                        "nombrePartido": "Camino",
                        "color": "#3F88C5"
                    },
                    {
                        "repeticiones": 53,
                        "totalWords": 46919,
                        "nombrePartido": "Cripta",
                        "color": "#03254e"
                    },
                    {
                        "repeticiones": 542,
                        "totalWords": 227640,
                        "nombrePartido": "Peekay",
                        "color": "#F4743B"
                    },
                    {
                        "repeticiones": 60,
                        "totalWords": 29968,
                        "nombrePartido": "Idhun",
                        "color": "#f80044"
                    }
                ]
            ],
            [
                "Ser",
                [
                    {
                        "repeticiones": 14,
                        "totalWords": 6296,
                        "nombrePartido": "1984",
                        "color": "#34d35e"
                    },
                    {
                        "repeticiones": 14,
                        "totalWords": 6296,
                        "nombrePartido": "1984",
                        "color": "#34d35e"
                    },
                    {
                        "repeticiones": 68,
                        "totalWords": 51248,
                        "nombrePartido": "Camino",
                        "color": "#3F88C5"
                    },
                    {
                        "repeticiones": 48,
                        "totalWords": 46919,
                        "nombrePartido": "Cripta",
                        "color": "#03254e"
                    },
                    {
                        "repeticiones": 256,
                        "totalWords": 227640,
                        "nombrePartido": "Peekay",
                        "color": "#F4743B"
                    },
                    {
                        "repeticiones": 39,
                        "totalWords": 29968,
                        "nombrePartido": "Idhun",
                        "color": "#f80044"
                    }
                ]
            ],
            [
                "Poco",
                [
                    {
                        "repeticiones": 8,
                        "totalWords": 6296,
                        "nombrePartido": "1984",
                        "color": "#34d35e"
                    },
                    {
                        "repeticiones": 8,
                        "totalWords": 6296,
                        "nombrePartido": "1984",
                        "color": "#34d35e"
                    },
                    {
                        "repeticiones": 62,
                        "totalWords": 51248,
                        "nombrePartido": "Camino",
                        "color": "#3F88C5"
                    },
                    {
                        "repeticiones": 45,
                        "totalWords": 46919,
                        "nombrePartido": "Cripta",
                        "color": "#03254e"
                    },
                    {
                        "repeticiones": 234,
                        "totalWords": 227640,
                        "nombrePartido": "Peekay",
                        "color": "#F4743B"
                    },
                    {
                        "repeticiones": 53,
                        "totalWords": 29968,
                        "nombrePartido": "Idhun",
                        "color": "#f80044"
                    }
                ]
            ],
            [
                "Años",
                [
                    {
                        "repeticiones": 17,
                        "totalWords": 6296,
                        "nombrePartido": "1984",
                        "color": "#34d35e"
                    },
                    {
                        "repeticiones": 17,
                        "totalWords": 6296,
                        "nombrePartido": "1984",
                        "color": "#34d35e"
                    },
                    {
                        "repeticiones": 72,
                        "totalWords": 51248,
                        "nombrePartido": "Camino",
                        "color": "#3F88C5"
                    },
                    {
                        "repeticiones": 64,
                        "totalWords": 46919,
                        "nombrePartido": "Cripta",
                        "color": "#03254e"
                    },
                    {
                        "repeticiones": 227,
                        "totalWords": 227640,
                        "nombrePartido": "Peekay",
                        "color": "#F4743B"
                    }
                ]
            ],
            [
                "Porque",
                [
                    {
                        "repeticiones": 73,
                        "totalWords": 51248,
                        "nombrePartido": "Camino",
                        "color": "#3F88C5"
                    },
                    {
                        "repeticiones": 73,
                        "totalWords": 51248,
                        "nombrePartido": "Camino",
                        "color": "#3F88C5"
                    },
                    {
                        "repeticiones": 80,
                        "totalWords": 46919,
                        "nombrePartido": "Cripta",
                        "color": "#03254e"
                    },
                    {
                        "repeticiones": 206,
                        "totalWords": 227640,
                        "nombrePartido": "Peekay",
                        "color": "#F4743B"
                    },
                    {
                        "repeticiones": 64,
                        "totalWords": 29968,
                        "nombrePartido": "Idhun",
                        "color": "#f80044"
                    }
                ]
            ],
            [
                "Hasta",
                [
                    {
                        "repeticiones": 68,
                        "totalWords": 51248,
                        "nombrePartido": "Camino",
                        "color": "#3F88C5"
                    },
                    {
                        "repeticiones": 68,
                        "totalWords": 51248,
                        "nombrePartido": "Camino",
                        "color": "#3F88C5"
                    },
                    {
                        "repeticiones": 56,
                        "totalWords": 46919,
                        "nombrePartido": "Cripta",
                        "color": "#03254e"
                    },
                    {
                        "repeticiones": 474,
                        "totalWords": 227640,
                        "nombrePartido": "Peekay",
                        "color": "#F4743B"
                    },
                    {
                        "repeticiones": 38,
                        "totalWords": 29968,
                        "nombrePartido": "Idhun",
                        "color": "#f80044"
                    }
                ]
            ],
            [
                "Sobre",
                [
                    {
                        "repeticiones": 72,
                        "totalWords": 51248,
                        "nombrePartido": "Camino",
                        "color": "#3F88C5"
                    },
                    {
                        "repeticiones": 72,
                        "totalWords": 51248,
                        "nombrePartido": "Camino",
                        "color": "#3F88C5"
                    },
                    {
                        "repeticiones": 52,
                        "totalWords": 46919,
                        "nombrePartido": "Cripta",
                        "color": "#03254e"
                    },
                    {
                        "repeticiones": 294,
                        "totalWords": 227640,
                        "nombrePartido": "Peekay",
                        "color": "#F4743B"
                    },
                    {
                        "repeticiones": 56,
                        "totalWords": 29968,
                        "nombrePartido": "Idhun",
                        "color": "#f80044"
                    }
                ]
            ]
        ];

        const partidosImplicados = ['1984', "Camino", "Cripta", "Peekay", "Idhun", "Trafalgar"];

        // console.log('data :>> ', data);

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
        const subgroups = data.map(d => d[1]);

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