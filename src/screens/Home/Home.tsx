import React, { useCallback } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useInfiniteQuery } from 'react-query';
import { useTheme } from 'styled-components';
import { getNews } from '../../api/hackerNewsApi';
import { NewsItem } from '../../api/runtimeTypes';
import Divider from '../../components/Divider';
import StoryListItem from './StoryListItem';

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

const Home = () => {
  const theme = useTheme();

  const { data, isLoading, refetch, fetchNextPage } = useInfiniteQuery(
    'news',
    ({ pageParam = 1 }) => getNews(pageParam),
    {
      getNextPageParam: lastPage => lastPage.page + 1,
    },
  );

  const combinedResults = data?.pages.map(page => page.result);
  const renderItem = useCallback(
    ({ item }: { item: NewsItem }) => <StoryListItem {...item} />,
    [],
  );

  if (combinedResults === undefined) {
    return null;
  }

  const flattenedResults = combinedResults.filter(notEmpty).flat();

  if (!data) {
    return null;
  }

  return (
    <FlatList
      data={flattenedResults}
      renderItem={renderItem}
      ItemSeparatorComponent={Divider}
      keyExtractor={item => String(item.id)}
      onEndReached={() => {
        fetchNextPage();
      }}
      onEndReachedThreshold={0.5}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          onRefresh={refetch}
          refreshing={isLoading}
          tintColor={theme.colors.SPINNER}
        />
      }
    />
  );
};

export default Home;
