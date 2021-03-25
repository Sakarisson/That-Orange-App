import * as t from 'io-ts';

export const TopStories = t.array(t.number);

export const Item = t.type({
  title: t.string,
  url: t.string,
});
