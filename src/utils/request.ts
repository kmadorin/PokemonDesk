import url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req<T>(endpoint: string, query: { [key: string]: string | number }): Promise<T> {
  const uri = url.format(getUrlWithParamsConfig(endpoint, query));

  const response = await fetch(uri);
  return response.json();
}

export default req;
