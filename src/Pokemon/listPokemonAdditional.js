import React from 'react';

export const listPokemonAdditional = ({ items, Layout }) =>
  items.map((data) => (
    <Layout
      data={data}
    />
  ));