import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import Cabecera from './components/Cabecera';

// Subpáginas
import Analisis from './pages/analisis';
import PalabrasEliminadas from './pages/palabras-eliminadas';
import Introduccion from './pages/introduccion';
import About from './pages/about';
import Conclusion from './pages/conclusion';
import Fuentes from './pages/Fuentes';

class App extends Component {

  render() {
    return (
      <div className="App" >
        <BrowserRouter>
          <Cabecera />
          <Routes>
            <Route path='/' element={<Analisis />} />
            <Route path='/palabras-eliminadas' element={<PalabrasEliminadas />} />
            <Route path='/introduccion' element={<Introduccion />} />
            <Route path='/about' element={<About />} />
            <Route path='/conclusion' element={<Conclusion />} />
            <Route path='/fuentes' element={<Fuentes />} />
          </Routes>
        </BrowserRouter>
      </div>)
  }
}


export default App;
