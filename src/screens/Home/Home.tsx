import React, { useCallback } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useTheme } from 'styled-components';
import { NewsItem } from '../../api/runtimeTypes';
import Divider from '../../components/Divider';
import { useNews } from './hooks';
import StoryListItem from './StoryListItem';

const Home = () => {
  const theme = useTheme();

  const { news, isLoading, refetch, fetchNextPage } = useNews();

  const renderItem = useCallback(
    ({ item }: { item: NewsItem }) => <StoryListItem {...item} />,
    [],
  );

  if (!news) {
    return null;
  }

  return (
    <FlatList
      data={news}
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
