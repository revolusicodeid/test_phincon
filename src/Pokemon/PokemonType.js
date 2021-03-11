import React from 'react';

export const PokemonType = ({ data }) => (
  <span key={data.type.name}>
    {data.type.name}&nbsp;
  </span>
);

export default PokemonType;