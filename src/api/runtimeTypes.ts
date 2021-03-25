import * as t from 'io-ts';

const NewsItemT = t.type({
  id: t.number,
  title: t.string,
  url: t.string,
});

export type NewsItem = t.TypeOf<typeof NewsItemT>;

export const NewsT = t.array(NewsItemT);
