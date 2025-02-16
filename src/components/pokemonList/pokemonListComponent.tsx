import styles from './pokemonList.module.css';
import { useEffect, useState } from 'react';
import cardBackside from '../../assets/card_backside.svg';
import PokemonCardComponent from '../pokemonCard/pokemonCardComponent';
import { PokemonListItem } from '../../types';
import { Form } from 'react-bootstrap';
import * as pokemonStore from '../../stores/pokemonStore';

const PokemonListComponent = () => {
  const [showCard, setShowCard] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<PokemonListItem | undefined>();
  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredPokemonList, setFilteredPokemonList] = useState<PokemonListItem[]>([]);
  const [debounceTimeout, setDebounceTimeout] = useState<number | null>(null);

  const presentedPokemonList = pokemonStore.usePresentedListProps();

  useEffect(() => {
    searchPokemon(searchValue);
  }, [presentedPokemonList]);

  const openPokemonCard = (selectedCard: PokemonListItem) => {
    setSelectedCard(selectedCard);
    setShowCard(true);
  };

  const closePokemonCard = () => {
    setSelectedCard(undefined);
    setShowCard(false);
  };

  const searchPokemon = (search: string) => {
    if (!search?.trim()) {
      setFilteredPokemonList(presentedPokemonList);
    } else {
      const matchNameList = presentedPokemonList.filter((p) => p.name.includes(search));
      setFilteredPokemonList(matchNameList);
    }
  };

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    setSearchValue(value);

    if (debounceTimeout) clearTimeout(debounceTimeout);

    const timeout = setTimeout(() => {
      searchPokemon(value);
    }, 300);
    setDebounceTimeout(timeout as unknown as number);
  };

  return (
    <div className={styles.componentsContainer}>
      <Form.Control
        className={styles.searchbar}
        placeholder="Type pokemon Name..."
        value={searchValue}
        onChange={handleInputChange}
      />
      <div className={styles.pokemonListContainer}>
        {filteredPokemonList.map((pokemon: PokemonListItem) => {
          return (
            <div className={styles.pokemonItem} key={pokemon.name} onClick={() => openPokemonCard(pokemon)}>
              <div className={styles.pokemonName}>{pokemon.name}</div>
              <img src={cardBackside} />
            </div>
          );
        })}
        {!!selectedCard && <PokemonCardComponent show={showCard} onHide={closePokemonCard} pokemon={selectedCard} />}
      </div>
    </div>
  );
};

export default PokemonListComponent;
