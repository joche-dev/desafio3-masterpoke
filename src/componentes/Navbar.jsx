import { NavLink } from "react-router-dom";
import PokeballSvg from './PokeballSvg';

export default function Navbar() {
  return (
    <nav>
      <span>
        <PokeballSvg />
      </span>
      <ul>
        <li>
            <NavLink className={({isActive})=> isActive? 'active' : undefined } to={"/desafio3-masterpoke/"}>Home</NavLink>
        </li>
        <li>
            <NavLink className={({isActive})=> isActive? 'active' : undefined } to={"/desafio3-masterpoke/pokemones"}>Pokemones</NavLink>
        </li>
      </ul>
    </nav>
  );
}
