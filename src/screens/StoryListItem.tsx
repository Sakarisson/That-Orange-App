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

  if (!data) {
    return null;
  }

  console.log(data.data);

  const hostName = getHostnameFromUrl(data.data.url);

  return <ListItem label={data?.data.title} sublabel={hostName} />;
};

export default StoryListItem;
