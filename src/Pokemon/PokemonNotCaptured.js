import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';
import '../css/Modal.css';

const PokemonNotCaptured = () => {
    const { pokemon, failedCapture, closeDetail } = useContext(PokemonContext);

    return (
        <div className="modal-wrapper" style={{display: failedCapture ? "block" : "none"}}>
            <div className="modal-sm">
                <div className="modal-header">
                    <h4>{failedCapture ? pokemon.name : ""}</h4>
                </div>
                <div className="modal-content">
                    <div className="modal-body">
                        <h4>Not Luck!!! Don't Worry and Try Again</h4>
                    </div>
                </div>
                <div className="modal-footer">
                    <button style={{visibility:"hidden"}}></button>
                    <button className="close" onClick={closeDetail}>Close</button>
                </div>
            </div>
        </div>
    )
};

export default PokemonNotCaptured;