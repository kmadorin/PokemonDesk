import React, { useEffect, useState } from 'react';

import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import Filter from '../../components/Filter';
import PokemonCard, { Pokemon } from '../../components/PokemonCard';

import classes from './Pokedex.module.scss';

interface IResponse {
  total: number;
  count: number;
  offset: number;
  limit: number;
  pokemons: Pokemon[];
}

const usePokemons = () => {
  const [data, setData] = useState<IResponse | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean | null>(null);

  useEffect(() => {
    const getPokemons = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const Pokedex: React.FC = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading Pokemons...</div>;
  }

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return (
    <div className={classes.root}>
      <Layout className={classes.container}>
        <Heading className={classes.title}>
          {data?.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>

        <input type="search" className={classes.search} placeholder="Encuentra tu pokémon..." />

        <div className={classes.filters}>
          <Filter />
          <Filter />
          <Filter />
        </div>

        <ul className={classes.list}>
          {data?.pokemons.map((item) => (
            <li key={item.id}>
              <PokemonCard pokemon={item} />
            </li>
          ))}
        </ul>
      </Layout>
      <Footer />
    </div>
  );
};

export default Pokedex;
