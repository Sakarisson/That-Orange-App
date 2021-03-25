import React from 'react';
import useSWR from 'swr';
import { getItem } from '../api/hackerNewsApi';
import ListItem from '../components/ListItem';
import getHostnameFromUrl from '../util/getHostnameFromUrl';

type Props = {
  id: string;
};

const StoryListItem = ({ id }: Props) => {
  const { data } = useSWR(`story-${id}`, () => getItem(id));

  if (!data?.result) {
    return null;
  }

  const hostName = getHostnameFromUrl(data.result.url);

  return <ListItem label={data.result.title} sublabel={hostName} />;
};

export default StoryListItem;
