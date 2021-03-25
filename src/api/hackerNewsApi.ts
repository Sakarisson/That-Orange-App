import axios from 'axios';

import { NewsT } from './runtimeTypes';
import validateResponse from './validateResponse';

const hackerNewApi = axios.create({
  baseURL: 'https://api.hackerwebapp.com',
});

export const getNews = () =>
  hackerNewApi.get('/news').then(validateResponse(NewsT));
