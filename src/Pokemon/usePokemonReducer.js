import { useReducer } from 'react';
import { DETAIL, CLOSE_DETAIL, CAPTURE, CAPTURE_GAME, RELEASE, ADD_POKEMON, ADD_POKEMONS } from './actions';

const getRandomNumber = (max) =>
    Math.floor(Math.random() * Math.floor(max))

const getCapturedPokemons = (capturedPokemons, releasedPokemon) =>
  capturedPokemons.filter(pokemon => pokemon !== releasedPokemon)

const releasePokemon = (releasedPokemon, state) => ({
  pokemons: [...state.pokemons, releasedPokemon],
  capturedPokemons: getCapturedPokemons(state.capturedPokemons, releasedPokemon),
  displayDetail: false,
  succsessCapture: false
});

const getPokemonsList = (pokemons, capturedPokemon) =>
  pokemons.filter(pokemon => pokemon !== capturedPokemon)

const detailPokemon = (pokemon, state) => ({
  pokemons: state.pokemons,
  capturedPokemons: state.capturedPokemons,
  pokemon: pokemon,
  displayDetail: true,
  succsessCapture: false,
  failedCapture: false
});

const closeDetailPokemon = (state) => ({
  pokemons: state.pokemons,
  capturedPokemons: state.capturedPokemons,
  displayDetail: false,
  succsessCapture: false,
  failedCapture: false
});

const capturePokemon = (pokemon, state) => ({
  pokemons: getPokemonsList(state.pokemons, pokemon),
  capturedPokemons: [...state.capturedPokemons, pokemon],
  pokemon: pokemon,
  displayDetail: false,
  succsessCapture: false,
  failedCapture: false
});

const capturedGamePokemon = (pokemon, state) => ({
  pokemons: getPokemonsList(state.pokemons, pokemon),
  capturedPokemons: state.capturedPokemons,
  pokemon: pokemon,
  displayDetail: false,
  succsessCapture: true,
  failedCapture: false
});

const notCapturedGamePokemon = (pokemon,state) => ({
  pokemons: state.pokemons,
  capturedPokemons: state.capturedPokemons,
  pokemon: pokemon,
  displayDetail: false,
  succsessCapture: false,
  failedCapture: true
});

const addPokemon = (pokemon, state) => ({
  pokemons: [...state.pokemons, pokemon],
  capturedPokemons: state.capturedPokemons,
  pokemon: pokemon,
  displayDetail: false,
  succsessCapture: false,
  failedCapture: false
});

const addPokemons = (pokemons, state) => ({
  pokemons: pokemons,
  capturedPokemons: state.capturedPokemons,
  displayDetail: false,
  succsessCapture: false,
  failedCapture: false
});

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case DETAIL:
      return detailPokemon(action.pokemon, state);
    case CLOSE_DETAIL:
      return closeDetailPokemon(state);
    case CAPTURE:
      return capturePokemon(action.pokemon, state);
    case CAPTURE_GAME:
      const number = getRandomNumber(100);
      console.log(number);
      return number > 50 ? capturedGamePokemon(action.pokemon, state) : notCapturedGamePokemon(action.pokemon, state);
    case RELEASE:
      delete action.pokemon.status_captured;
      return releasePokemon(action.pokemon, state);
    case ADD_POKEMON:
      return addPokemon(action.pokemon, state);
    case ADD_POKEMONS:
      return addPokemons(action.pokemons, state);
    default:
      return state;
  }
};

export const usePokemonReducer = () =>
  useReducer(pokemonReducer, {
    pokemons: [],
    capturedPokemons: [],
    pokemon: null,
    displayDetail: false,
    succsessCapture: false,
    failedCapture: false,
  });
