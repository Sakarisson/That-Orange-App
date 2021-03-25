import React, { useCallback } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useTheme } from 'styled-components';
import useSWR from 'swr';
import { getNews } from '../../api/hackerNewsApi';
import { NewsItem } from '../../api/runtimeTypes';
import Divider from '../../components/Divider';
import StoryListItem from './StoryListItem';

const Home = () => {
  const theme = useTheme();

  const { data, isValidating, revalidate } = useSWR('topStories', getNews);

  const renderItem = useCallback(
    ({ item }: { item: NewsItem }) => <StoryListItem {...item} />,
    [],
  );

  if (!data?.result) {
    return null;
  }

  return (
    <FlatList
      data={data.result}
      renderItem={renderItem}
      ItemSeparatorComponent={Divider}
      keyExtractor={item => String(item.id)}
      refreshControl={
        <RefreshControl
          onRefresh={revalidate}
          refreshing={isValidating}
          tintColor={theme.colors.SPINNER}
        />
      }
    />
  );
};

export default Home;
