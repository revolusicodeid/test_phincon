import React, { useState, useContext, useEffect } from 'react';
import { PokemonContext } from './PokemonContext';
import PokemonCard from './PokemonCard';
import PokemonMoves from './PokemonMoves';
import PokemonAbilities from './PokemonAbilities';
import PokemonSprites from './PokemonSprites';
import '../css/Modal.css';

const defaultData = {
    name:"",
    type:"",
    url:"",
};

const PokemonModal = () => {
    const { pokemon, captureGame, release, displayDetail, closeDetail } = useContext(PokemonContext);
    const [data, setData] = useState(defaultData);

    useEffect(() => {
        const fetchPokemon = async () => {
          const response = await fetch(pokemon.url);
          const data = await response.json();
          setData(data);
        };

        pokemon ? fetchPokemon() : setData(defaultData);

    }, [pokemon]);
    return (
        <div className="modal-wrapper" style={{display: displayDetail ? "block" : "none"}}>
            <div className="modal-header">
                <h4>{data.name}</h4>
                <span onClick={closeDetail} className="btn-close-modal">x</span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <div className="view-card">
                        <PokemonCard data={data} pokemon={pokemon}/>
                        <PokemonMoves data={data}/>
                    </div>
                    <div className="view-card">
                        <PokemonAbilities data={data}/>
                        <PokemonSprites data={data} />
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                {
                    pokemon && pokemon.hasOwnProperty('status_captured') ? 
                    <button className="close" onClick={release(pokemon)}>Release</button> :
                    <button className="capture" onClick={captureGame(pokemon)}>Capture</button>
                }
                <button className="close" onClick={closeDetail}>Close</button>
            </div>
        </div>
    )
};

export default PokemonModal;

