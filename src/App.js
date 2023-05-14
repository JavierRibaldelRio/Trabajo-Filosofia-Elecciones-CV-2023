import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './pages/main';
import Analisis from './pages/analisis';
import PalabrasEliminadas from './pages/palabras-eliminadas';
import Introduccion from './pages/introduccion';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Main />} />
          <Route path='/analisis' element={<Analisis />} />
          <Route path='/palabras-eliminadas' element={<PalabrasEliminadas />} />
          <Route path='/introduccion' element={<Introduccion />} />T

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
