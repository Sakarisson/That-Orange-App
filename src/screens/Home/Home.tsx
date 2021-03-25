import React, { useCallback } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useTheme } from 'styled-components';
import useSWR from 'swr';
import { getTopStories } from '../../api/hackerNewsApi';
import Divider from '../../components/Divider';
import StoryListItem from './StoryListItem';

const identity = (input: string) => input;

const Home = () => {
  const theme = useTheme();

  const { data, isValidating, revalidate } = useSWR(
    'topStories',
    getTopStories,
  );

  const renderItem = useCallback(
    ({ item }: { item: string }) => <StoryListItem id={item} />,
    [],
  );

  if (!data?.result) {
    return null;
  }

  return (
    <FlatList
      data={data.result.map(String)}
      renderItem={renderItem}
      ItemSeparatorComponent={Divider}
      keyExtractor={identity}
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
