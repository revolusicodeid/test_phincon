import React from 'react';

export const Pokemon = ({ pokemon, onClickDetail }) => (
    <tr>
      <td><span onClick={onClickDetail(pokemon)}>{pokemon.hasOwnProperty('nickname') ? pokemon.nickname : pokemon.name}</span></td>
    </tr>
);

export default Pokemon;
