import { BASE_URL } from '../config/discord';

type Params = {
  method: 'GET' | 'POST';
  URL: string;
  data: object | null;
};

const Http = ({ URL, method, data }: Params) => {
  const FULL_URL = BASE_URL + URL;

  return fetch(FULL_URL, {
    method: method.toUpperCase(),
    body: JSON.stringify(data),
  }).then(response => response.json());
};

export default Http;
