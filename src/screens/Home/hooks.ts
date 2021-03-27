import { useInfiniteQuery } from 'react-query';
import { getNews } from '../../api/hackerNewsApi';

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

export const useNews = () => {
  const { data, isLoading, refetch, fetchNextPage } = useInfiniteQuery(
    'news',
    ({ pageParam = 1 }) => getNews(pageParam),
    {
      getNextPageParam: lastPage => lastPage.page + 1,
    },
  );

  const combinedResults = data?.pages.map(page => page.result);

  const flattenedResults = combinedResults?.filter(notEmpty).flat();

  const filteredNonUniqueResults = flattenedResults?.filter(
    (element, index) =>
      flattenedResults?.findIndex(el => el.id === element.id) === index,
  );

  return { news: filteredNonUniqueResults, isLoading, refetch, fetchNextPage };
};
