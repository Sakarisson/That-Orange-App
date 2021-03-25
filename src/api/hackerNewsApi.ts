import axios from 'axios';

import { Item, TopStories } from './runtimeTypes';
import validateResponse from './validateResponse';

const hackerNewApi = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0',
});

export const getTopStories = () =>
  hackerNewApi.get('/topstories.json').then(validateResponse(TopStories));

export const getItem = (id: string) =>
  hackerNewApi.get(`/item/${id}.json`).then(validateResponse(Item));
