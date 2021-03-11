import React from 'react';

export const PokemonAbility = ({ data }) => (
    <div key={data.ability.name} className="label">
        <span>
            {data.ability.name}&nbsp;
        </span>
    </div>
);

export default PokemonAbility;