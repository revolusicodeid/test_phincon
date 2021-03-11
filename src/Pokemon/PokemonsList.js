import React, { useContext, useEffect } from 'react';
import { PokemonContext } from './PokemonContext';
import { listPokemons } from './listPokemons';

const url = "https://pokeapi.co/api/v2/pokemon";

const PokemonsList = () => {
  const { pokemons, detail, addPokemons } = useContext(PokemonContext);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(url);
      const data = await response.json();
      addPokemons(data.results);
    };

    fetchPokemons();
  }, []);

  //adding button prev and next action page list
  
  return (
    <div className="pokemons-list">
      <h2>Pokemons List</h2>

      <table>
        <tbody>
        {listPokemons({
          pokemons,
          onClickDetail: detail
        })}
        </tbody>
      </table>

    </div>
  )
}

export default PokemonsList;
