import { useEffect, useState } from 'react';

export default function DetallePokemon({ namePokemon }) {
  const [pokemon, setPokemon] = useState({
    name: '',
    img: '',
    stats: [],
    type: [],
  });

  useEffect(() => {
    const detallePokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${namePokemon}/`
        );
        const data = await response.json();
        setPokemon({
          name: data.name,
          img: data.sprites.other.dream_world.front_default,
          stats: data.stats,
          type: data.types,
        });
      } catch (error) {
        console.error('Error : ', error);
      }
    };

    detallePokemon();
  }, []);

  function capitalizarPrimeraLetra(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  return (
    <div className="card">
      <img src={pokemon.img} alt={pokemon.name} />
      <div className="card-body">
        <h2>{capitalizarPrimeraLetra(pokemon.name)}</h2>
        <ul>
          {pokemon.stats.map((stat, index) => (
            <li key={index}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
          <li>{pokemon.type.map((type, index) => <span key={index} className='badge'>{type.type.name}</span>)}</li>
        </ul>
      </div>
    </div>
  );
}
