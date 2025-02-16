import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonListItem } from '../types';

interface PokemonState {
  pokemonList: PokemonListItem[];
  presentedList: PokemonListItem[];
}

const initialState: PokemonState = {
  pokemonList: [],
  presentedList: [],
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemonList: (state, action: PayloadAction<PokemonListItem[]>) => {
      state.pokemonList = [...action.payload];
    },
    setPresentedPokemonsList: (state, action: PayloadAction<PokemonListItem[]>) => {
      state.presentedList = [...action.payload];
    },
    setPokemonData: (state, action: PayloadAction<PokemonListItem[]>) => {
      state.pokemonList = action.payload;
      state.presentedList = action.payload;
    },
  },
});

export const { setPokemonList, setPresentedPokemonsList, setPokemonData } = pokemonSlice.actions;
export default pokemonSlice.reducer;
