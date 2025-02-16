import { useDispatch, useSelector } from 'react-redux';
import { setPokemonList, setPresentedPokemonsList, setPokemonData } from '../slices/pokemonSlice';
import { PokemonListItem } from '../types';
import { RootState } from '../main';

export function usePokemonListProps() {
  return useSelector((state: RootState) => state.pokemon.pokemonList);
}

export function usePresentedListProps() {
  return useSelector((state: RootState) => state.pokemon.presentedList);
}

export function usePokemonsListActions() {
  const dispatch = useDispatch();

  return {
    setPokemonList: (pokemonList: PokemonListItem[]) => {
      dispatch(setPokemonList(pokemonList));
    },
    setPresentedList: (pokemonList: PokemonListItem[]) => {
      dispatch(setPresentedPokemonsList(pokemonList));
    },
    setPokemonData: (pokemonList: PokemonListItem[]) => {
      dispatch(setPokemonData(pokemonList));
    },
  };
}
