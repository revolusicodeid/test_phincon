import React from 'react';

export const Pokemon = ({ key, pokemon, onClickDetail }) => (
    <tr key={key}>
      <td><span onClick={onClickDetail(pokemon)}>{pokemon.hasOwnProperty('nickname') ? pokemon.nickname : pokemon.name}</span></td>
    </tr>
);

export default Pokemon;
