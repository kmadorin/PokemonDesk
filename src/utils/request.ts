import url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endpoint: string, query: { [key: string]: string | number }) {
  const uri = url.format(getUrlWithParamsConfig(endpoint, query));

  const response = await fetch(uri);
  return response.json();
}

export default req;
