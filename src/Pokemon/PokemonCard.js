import React from 'react';
import { listPokemonAdditional } from './listPokemonAdditional';
import PokemonStat from './PokemonStat';
import PokemonType from './PokemonType';
import '../css/Card.css';

const PokemonCard = ({ data, pokemon }) => {
    let types = data.name === "" ? [] : data.types;
    let stats = data.name === "" ? [] : data.stats;
    return (
        <ul className="cards">
            <li className="cards_item">
                <div className="card">
                  <div className="card_title">
                      <h2> Nickname : {pokemon && pokemon.hasOwnProperty('nickname') ? pokemon.nickname : "unidentification" } </h2>
                  </div>
                  <div className="card_image"><img alt="dream_world" src={data.name === "" ? "https://picsum.photos/500/300/?image=10" : data.sprites.other.dream_world.front_default} /></div>
                  <div className="card_title">
                      <h2> Type : &nbsp;
                      {listPokemonAdditional({
                        items : types,
                        Layout : PokemonType
                      })}
                      </h2>
                  </div>
                  <div className="card_content">
                    <div className="card_text">
                    {listPokemonAdditional({
                      items : stats,
                      Layout : PokemonStat
                    })}
                    </div>
                    
                  </div>
                </div>
            </li>
        </ul>
    )
};

export default PokemonCard;