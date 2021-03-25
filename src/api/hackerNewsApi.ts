import axios from 'axios';

import { NewsT } from './runtimeTypes';
import validateResponse from './validateResponse';

const hackerNewApi = axios.create({
  baseURL: 'https://api.hackerwebapp.com',
});

export const getNews = (page = 1) =>
  hackerNewApi
    .get(`/news?page=${page}`)
    .then(validateResponse(NewsT))
    .then(response => ({ ...response, page }));
