import React from 'react';
import { listPokemonAdditional } from './listPokemonAdditional';
import PokemonMove from './PokemonMove';
import '../css/Card.css';

const PokemonMoves = ({ data }) => {
    let moves = data.name === "" ? [] : data.moves;
    return (
        <ul className="cards">
            <li className="cards_item">
                <div className="card">
                  <div className="card_title">
                    <h2> Moves </h2>
                  </div>
                  <div className="card_content">
                    <div className="label_tag">
                      {listPokemonAdditional({
                        items : moves,
                        Layout : PokemonMove
                      })}
                    </div>
                  </div>
                </div>
            </li>
        </ul>
    )
};

export default PokemonMoves;