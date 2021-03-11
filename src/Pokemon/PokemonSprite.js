import React from 'react';

export const PokemonSprite = ({ data }) => (
    <div className="label_tag">
        <div className="label">
            <img alt={data.back_default === null ? "none" : "back_default"} src={data.back_default} />
        </div>
        <div className="label">
            <img alt={data.back_female === null ? "none" : "back_female"}  src={data.back_female} />
        </div>
        <div className="label">
            <img alt={data.back_shiny === null ? "none" : "back_shiny"}  src={data.back_shiny} />
        </div>
        <div className="label">
            <img alt={data.back_shiny_female === null ? "none" : "back_shiny_female"}  src={data.back_shiny_female} />
        </div>
        <div className="label">
            <img alt={data.front_default === null ? "none" : "front_default"}  src={data.front_default} />
        </div>
        <div className="label">
            <img alt={data.front_female === null ? "none" : "front_female"}  src={data.front_female} />
        </div>
        <div className="label">
            <img alt={data.front_shiny === null ? "none" : "front_shiny"}  src={data.front_shiny} />
        </div>
        <div className="label">
            <img alt={data.front_shiny_female === null ? "none" : "front_shiny_female"}  src={data.front_shiny_female} />
        </div>
    </div>
    
);

export default PokemonSprite;