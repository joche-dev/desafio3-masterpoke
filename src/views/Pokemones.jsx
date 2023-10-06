import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Pokemones() {
  const [namePokemon, setNamePokemon] = useState('');
  const [error, setError] = useState('');
  const [namesPokemones, setNamesPokemones] = useState([]);
  const navigate = useNavigate();

  const verDetallePokemon = () => {
    if(!namePokemon){
        setError('Tienes que seleccionar un pokemón!');
        navigate('/desafio3-masterpoke/pokemones');
      }
    else{
        setError('');
        navigate(`/desafio3-masterpoke/pokemones/${namePokemon}`);
      }
  };

  useEffect(() => {
    const listaPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
        const data = await response.json();
        const namesPoke = data.results.map((poke) => poke.name);
        setNamesPokemones(namesPoke);
      } catch (error) {
        console.error('Error : ', error);
      }
    };

    listaPokemon();
  }, []);

  return (
    <main>
      <h1>Selecciona un Pokemón</h1>
      <select onChange={({ target }) => setNamePokemon(target.value)}>
        <option value="">Selecciona un pokemón </option>
        {namesPokemones.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>
      <button onClick={verDetallePokemon}>Ver Detalles</button>
      <p className='error'>{error}</p>
    </main>
  );
}
