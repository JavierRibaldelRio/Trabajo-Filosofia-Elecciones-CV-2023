import { Route, Routes, BrowserRouter } from 'react-router-dom';

import React, { Component } from 'react';


import Cabecera from './components/Cabecera';

// Subpáginas
import Analisis from './pages/analisis';
import PalabrasEliminadas from './pages/palabras-eliminadas';
import Introduccion from './pages/introduccion';

class App extends Component {

  render() {
    return (
      <div className="App" >


        <BrowserRouter>

          <Cabecera />

          <Routes>

            <Route path='/' element={<Analisis />} />
            <Route path='/palabras-eliminadas' element={<PalabrasEliminadas />} />
            <Route path='/introduccion' element={<Introduccion />} />T

          </Routes>
        </BrowserRouter>

        {/* <PiePagina /> */}


      </div>)
  }
}


export default App;
