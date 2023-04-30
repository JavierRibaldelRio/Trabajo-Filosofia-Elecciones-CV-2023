import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './pages/main';
import Analisis from './pages/analisis';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Main />} />
          <Route path='/analisis' element={<Analisis />} />

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
