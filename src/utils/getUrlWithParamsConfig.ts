import config from '../config';

function getUrlWithParamsConfig(endpointConfig: string, query: { [key: string]: string | number }) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query,
  };

  return url;
}

export default getUrlWithParamsConfig;
