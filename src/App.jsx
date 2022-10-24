import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Characters from './pages/Characters';
import Series from './pages/Series';
import Comics from './pages/Comics';
import Creators from './pages/Creators';
import ComicDetail from './pages/ComicDetail';
import CharacterDetail from './pages/CharacterDetail';
import SerieDetail from './pages/SerieDetail';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-3 mb-2 bg-light text-dark">
        <div className="text-center">
          <h2 className="text-danger">MARVEL UNIVERSE</h2>
          <hr className="border border-danger border-1 opacity-50"></hr>
        </div>
        <Routes>
          <Route path='/' element={<Characters />} />
          <Route path='/character/:id' element={<CharacterDetail />} />
          <Route path='/series' element={<Series />} />
          <Route path='/serie/:id' element={<SerieDetail />} />
          <Route path='/comics' element={<Comics />} />
          <Route path='/comic/:id' element={<ComicDetail />} />
          <Route path='/creators' element={<Creators />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App