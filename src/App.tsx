import { Container } from 'react-bootstrap';
import * as appStore from './stores/appStore';
import * as pokemonStore from './stores/pokemonStore';
import LoaderComponent from './components/loader/loaderComponent';
import PokemonListComponent from './components/pokemonList/pokemonListComponent';
import { useEffect, useRef } from 'react';
import * as httpService from './httpService';
import { ROUTES } from './types';
import FiltersComponent from './components/filters/filtersComponent';

function App() {
  const isFetching = useRef(false);

  const isLoading = appStore.useLoaderProps();
  const { setIsLoading } = appStore.useLoaderActions();

  const { setPokemonData } = pokemonStore.usePokemonsListActions();

  useEffect(() => {
    initPage();
  }, []);

  const initPage = async () => {
    if (isFetching.current) return;
    isFetching.current = true;

    setIsLoading(true);
    try {
      const pokemonsRes = await httpService.get(ROUTES.GET_ALL);
      if (pokemonsRes?.pokemonList?.length) {
        setPokemonData(pokemonsRes.pokemonList);
      }
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
      alert('Failed to load Pokémon data. Please try again.');
    } finally {
      setIsLoading(false);
      isFetching.current = false;
    }
  };

  return (
    <>
      {isLoading && <LoaderComponent />}

      <Container className="mainContainer">
        <FiltersComponent />
        <PokemonListComponent />
      </Container>
    </>
  );
}

export default App;
