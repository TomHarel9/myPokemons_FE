export type PokemonListItem = {
  name: string;
  url: string;
};

export type Pokemon = {
  id: number;
  name: string;
  abilities: string[];
  types: string[];
  evolutions?: Evolution[];
  frontImage: string;
  backImage: string;
  isFavorite: boolean;
};

export type Evolution = {
  name: string;
  image: string;
};

export enum ROUTES {
  GET_ALL = 'getAll',
  GET_ALL_FAVORITES = 'getAllFavorites',
  GET_ONE = 'getOne',
  ADD_TO_FAVORITES = 'addToFavorites',
  REMOVE_FROM_FAVORITES = 'removeFromFavorites',
}
