
import * as axios from 'axios';

/*const BASE_API = 'https://jsonplaceholder.typicode.com';*/

export const api = axios.default.create({
    baseURL: `${BASE_API}`,
  });