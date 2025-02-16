import styles from './pokemonCard.module.css';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useRef, useState } from 'react';
import { Pokemon, PokemonListItem, ROUTES } from '../../types';
import * as httpService from '../../httpService';
import * as appStore from '../../stores/appStore';

type CardProps = {
  pokemon?: PokemonListItem;
  show: boolean;
  onHide: () => void;
};

const PokemonCardComponent = (props: CardProps) => {
  const isFetching = useRef(false);

  const [pokemon, setPokemon] = useState<Pokemon>();

  const { setIsLoading } = appStore.useLoaderActions();

  useEffect(() => {
    initPage();
  }, []);

  const initPage = async () => {
    if (isFetching.current) return;
    isFetching.current = true;

    setIsLoading(true);
    try {
      const res = await httpService.get(ROUTES.GET_ONE, { url: props.pokemon?.url });
      if (!!res?.pokemonInfo) {
        setPokemon(res.pokemonInfo);
      }
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    } finally {
      setIsLoading(false);
      isFetching.current = false;
    }
  };

  const handleFavoriteClicked = async () => {
    if (pokemon?.isFavorite) {
      await httpService.remove(ROUTES.REMOVE_FROM_FAVORITES, { id: pokemon.id });
    } else {
      await httpService.post(ROUTES.ADD_TO_FAVORITES, { pokemon });
    }
    setPokemon({ ...pokemon!, isFavorite: !pokemon?.isFavorite });
  };

  return (
    <Modal show={props.show && !!pokemon} onHide={props.onHide}>
      <div className={`${styles.modalContainer} ${styles[pokemon?.types[0] ?? '']}`}>
        <div style={{ cursor: 'pointer' }} onClick={handleFavoriteClicked}>
          <svg
            className={`bi bi-heart-fill ${pokemon?.isFavorite ? styles.favorite : ''}`}
            width="25"
            height="25"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
          </svg>
        </div>
        <div className={styles.pokemonName}>{pokemon?.name}</div>
        <div className={styles.pokemonImages}>
          <img src={pokemon?.frontImage} />
          <img src={pokemon?.backImage} />
        </div>

        <div className={styles.pokemonInfo}>
          <div>
            <div className={styles.label}>Types</div>
            {pokemon?.types?.map((t) => {
              return (
                <div className={styles.infoItem} key={t}>
                  {t}
                </div>
              );
            })}
          </div>
          <div>
            <div className={styles.label}>Abilities</div>
            {pokemon?.abilities?.map((a) => {
              return (
                <div className={styles.infoItem} key={a}>
                  {a}
                </div>
              );
            })}
          </div>
        </div>

        {!!pokemon?.evolutions?.length && (
          <div className={styles.evalutionContainer}>
            <div className={styles.label}>Evolutions</div>
            <div className={styles.pokemonEvolutions}>
              {pokemon.evolutions.map((e) => {
                return (
                  <div key={`evolution-${e.name}`}>
                    <img src={e.image} />
                    <div style={{ textAlign: 'center' }}>{e.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default PokemonCardComponent;
