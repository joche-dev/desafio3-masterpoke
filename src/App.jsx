import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import Pokemon from './views/Pokemon';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemones/:namePokemon" element={<Pokemon />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
