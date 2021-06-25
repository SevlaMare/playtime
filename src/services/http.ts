// ---------------------------------------------------------------
// get:   Http('/guild/3')
// post:  Http('/appointment', { name: 'asd', date: 123 }, 'POST')
// ---------------------------------------------------------------

import { BASE_URL } from '../config/discord';

type Params = {
  method: 'GET' | 'POST';
  URL: string;
  data: object | null;
};

const Http = ({ URL, data, method = 'GET' }: Params) => {
  const FULL_URL = BASE_URL + URL;

  return fetch(FULL_URL, {
    method: method.toUpperCase(),
    body: JSON.stringify(data),
  }).then(response => response.json());
};

export default Http;
