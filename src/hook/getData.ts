import { useEffect, useState } from 'react';
import req from '../utils/request';

const useData = <T>(endpoint: string, query: { [key: string]: string | number }, deps: any[] = []) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean | null>(null);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      setLoading(true);

      try {
        const result = await req<T>(endpoint, query);
        setData(result);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, deps);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
