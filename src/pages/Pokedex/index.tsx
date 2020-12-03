import React, { useState } from 'react';

import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import Filter from '../../components/Filter';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';
import useDebounce from '../../hook/useDebounce';
import { IPokemon, IPokemons } from '../../interface/pokemons';

import classes from './Pokedex.module.scss';

const Pokedex: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const debounceValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debounceValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((s) => ({ ...s, name: e.target.value }));
  };

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return (
    <div className={classes.root}>
      <Layout className={classes.container}>
        <Heading className={classes.title}>
          {data?.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>

        <input
          type="search"
          className={classes.search}
          placeholder="Encuentra tu pokémon..."
          value={searchValue}
          onChange={handleSearchChange}
        />

        <div className={classes.filters}>
          <Filter />
          <Filter />
          <Filter />
        </div>

        {isLoading ? (
          'Loading Pokemons'
        ) : (
          <ul className={classes.list}>
            {data?.pokemons.map((item: IPokemon) => (
              <li key={item.id}>
                <PokemonCard pokemon={item} />
              </li>
            ))}
          </ul>
        )}
      </Layout>
      <Footer />
    </div>
  );
};

export default Pokedex;
