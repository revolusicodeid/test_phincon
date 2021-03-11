import React from 'react';
import PokemonSprite from './PokemonSprite';
import '../css/Card.css';

const PokemonSprites = ({ data }) => {
    let sprites = data.name === "" ? [] : data.sprites;
    return (
        <ul className="cards">
            <li className="cards_item">
                <div className="card">
                  <div className="card_title">
                    <h2> Sprites </h2>
                  </div>
                  <div className="card_content">
                    <PokemonSprite data={sprites} />
                  </div>
                </div>
            </li>
        </ul>
    )
};

export default PokemonSprites;