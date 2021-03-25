import React, { useCallback, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import useSWR from 'swr';
import { getTopStories } from '../api/hackerNewsApi';
import StoryListItem from './StoryListItem';

const Home = () => {
  const [renderId, setRenderId] = useState(0);

  const { data, isValidating } = useSWR(
    `topStories-${renderId}`,
    getTopStories,
  );

  const renderItem = useCallback(
    ({ item }: { item: string }) => <StoryListItem id={item} />,
    [],
  );

  const onRefresh = () => {
    setRenderId(renderId + 1);
  };

  return (
    <FlatList
      data={data?.data}
      renderItem={renderItem}
      keyExtractor={item => item}
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={!!data && isValidating}
        />
      }
    />
  );
};

export default Home;
