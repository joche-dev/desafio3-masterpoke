import { useParams, useNavigate } from 'react-router-dom';
import DetallePokemon from '../componentes/DetallePokemon';

export default function Pokemon() {
  const { namePokemon } = useParams();
  const navigate = useNavigate();

  const volver = () => {
    navigate('/pokemones');
  };

  return (
    <main>
      <DetallePokemon namePokemon={namePokemon} />
      <button onClick={volver}>Volver</button>
    </main>
  );
}
