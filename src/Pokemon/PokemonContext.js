import React, { createContext } from 'react';
import { usePokemonReducer } from './usePokemonReducer';
import { DETAIL, CLOSE_DETAIL, CAPTURE, CAPTURE_GAME, RELEASE, ADD_POKEMON, ADD_POKEMONS } from './actions';

const PokemonContext = createContext();

const PokemonProvider = (props) => {
  const [state, dispatch] = usePokemonReducer();
  const { pokemons, capturedPokemons, pokemon, displayDetail, succsessCapture, failedCapture } = state;

  const detail = (pokemon) => () => dispatch({ type: DETAIL, pokemon });
  const closeDetail = () => dispatch({ type: CLOSE_DETAIL });
  const capture = (pokemon) => () => dispatch({ type: CAPTURE, pokemon });
  const captureGame = (pokemon) => () => dispatch({ type: CAPTURE_GAME, pokemon });
  const release = (pokemon) => () => dispatch({ type: RELEASE, pokemon });
  const addPokemon = (pokemon) => dispatch({ type: ADD_POKEMON, pokemon });
  const addPokemons = (pokemons) => dispatch({ type: ADD_POKEMONS, pokemons });

  const providerValue = {
    pokemons,
    capturedPokemons,
    pokemon,
    displayDetail,
    succsessCapture,
    failedCapture,
    detail,
    closeDetail,
    capture,
    captureGame,
    release,
    addPokemon,
    addPokemons
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  )
};

export { PokemonContext, PokemonProvider };
