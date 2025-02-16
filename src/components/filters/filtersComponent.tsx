import { Form } from 'react-bootstrap';
import styles from './filters.module.css';
import * as appStore from '../../stores/appStore';
import * as pokemonStore from '../../stores/pokemonStore';
import * as httpService from '../../httpService';
import { PokemonListItem, ROUTES } from '../../types';

const FiltersComponent = () => {
  const allPokemonsList: PokemonListItem[] = pokemonStore.usePokemonListProps();
  const { setPresentedList } = pokemonStore.usePokemonsListActions();
  const { setIsLoading } = appStore.useLoaderActions();

  const handleShowFavChange = async (event: any) => {
    setIsLoading(true);

    try {
      if (event.target.checked) {
        const favoritesRes = await httpService.get(ROUTES.GET_ALL_FAVORITES);
        if (favoritesRes?.pokemonList?.length) {
          setPresentedList(favoritesRes.pokemonList);
        } else {
          setPresentedList([]);
        }
      } else {
        setPresentedList(allPokemonsList);
      }
    } catch (error) {
      console.error('Error fetching favorites:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Form className={styles.filtersContainer}>
        <Form.Label>Show Favorites</Form.Label>
        <Form.Check className={styles.modeSwitch} type="switch" id="custom-switch" onChange={handleShowFavChange} />
      </Form>
    </div>
  );
};

export default FiltersComponent;
