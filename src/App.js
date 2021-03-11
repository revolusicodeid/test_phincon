import React from 'react';

import { PokemonProvider } from './Pokemon/PokemonContext';
import PokemonsList from './Pokemon/PokemonsList';
import Pokedex from './Pokemon/Pokedex';
import PokemonModal from './Pokemon/PokemonModal';
import PokemonCaptured from './Pokemon/PokemonCaptured';
import PokemonNotCaptured from './Pokemon/PokemonNotCaptured';
import Footer from './Pokemon/Footer';

const App = () => (
  <PokemonProvider>
    <div className="main">
      <PokemonsList />
      <Pokedex />
    </div>
    <Footer />
    <PokemonModal />
    <PokemonCaptured/>
    <PokemonNotCaptured/>
  </PokemonProvider>
);

export default App;
