import React, { useState, useContext } from 'react';
import { PokemonContext } from './PokemonContext';
import '../css/Modal.css';
import '../css/Form.css';

const PokemonCaptured = () => {
    const { pokemon, capture, succsessCapture, closeDetail } = useContext(PokemonContext);
    const [newPokemon, setnewPokemon] = useState({
        pokemon
    });

    const handleNameOnChange = (e) => {
      setnewPokemon({
        id : pokemon.id,
        name : pokemon.name,
        url : pokemon.url,
        nickname : e.target.value,
        status_captured : true
      });
    }

    return (
        <div className="modal-wrapper" style={{display: succsessCapture ? "block" : "none"}}>
            <div className="modal-sm">
                <div className="modal-header">
                    <h4>{succsessCapture ? pokemon.name : ""}</h4>
                </div>
                <div className="modal-content">
                    <div className="modal-body">
                        <h4>GOTCHA!!! Now Give Nickname for It</h4>
                        <input type="text" placeholder="pokemon name" onChange={handleNameOnChange} />
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="capture" onClick={capture(newPokemon)}>Add</button>
                    <button className="close" onClick={closeDetail}>Release</button>
                </div>
            </div>
        </div>
    )
};

export default PokemonCaptured;

