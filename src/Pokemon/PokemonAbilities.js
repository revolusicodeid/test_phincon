import React from 'react';
import { listPokemonAdditional } from './listPokemonAdditional';
import PokemonAbility from './PokemonAbility';
import '../css/Card.css';

const PokemonAbilities = ({ data }) => {
    let abilities = data.name === "" ? [] : data.abilities;
    return (
        <ul className="cards">
            <li className="cards_item">
                <div className="card">
                  <div className="card_title">
                    <h2> Abilities </h2>
                  </div>
                  <div className="card_content">
                    <div className="label_tag">
                      {listPokemonAdditional({
                        items : abilities,
                        Layout : PokemonAbility
                      })}
                    </div>
                  </div>
                </div>
            </li>
        </ul>
    )
};

export default PokemonAbilities;