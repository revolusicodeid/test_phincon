import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';
import { listPokemons } from './listPokemons';

const Pokedex = () => {
  const { capturedPokemons, detail } = useContext(PokemonContext);

  return (
    <div className="pokedex">
      <h2>My Pokemon List</h2>

      <table>
        <tbody>
          {listPokemons({
            pokemons: capturedPokemons,
            onClickDetail: detail
          })}
        </tbody>
      </table>

    </div>
  )
}

export default Pokedex;
