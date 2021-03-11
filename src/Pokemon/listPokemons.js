import React from 'react';
import Pokemon from './Pokemon';

export const listPokemons = ({ pokemons, onClickDetail }) =>
  pokemons.map((pokemon) => (
      <Pokemon key={pokemon.id}
        pokemon={pokemon}
        onClickDetail={onClickDetail}
      />
  ));
