import React, { useState } from 'react';

import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import Filter from '../../components/Filter';
import PokemonCard, { Pokemon } from '../../components/PokemonCard';
import useData from '../../hook/getData';

import classes from './Pokedex.module.scss';

interface PokemonResponse {
  total: number;
  count: number;
  offset: number;
  limit: number;
  pokemons: Pokemon[];
}

const Pokedex: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const { data, isLoading, isError } = useData<PokemonResponse>('getPokemons', query, [searchValue]);
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
            {data?.pokemons.map((item) => (
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
