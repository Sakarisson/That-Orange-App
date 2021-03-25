import axios from 'axios';

const hackerNewApi = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0',
});

export const getTopStories = () => hackerNewApi.get('/topstories.json');

export const getItem = (id: string) => hackerNewApi.get(`/item/${id}.json`);
