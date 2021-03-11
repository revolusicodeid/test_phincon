import React from 'react';

export const PokemonMove = ({ data }) => (
    <div key={data.move.name} className="label">
        <span >
            {data.move.name}&nbsp;
        </span>
    </div>
);

export default PokemonMove;