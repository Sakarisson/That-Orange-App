import React from 'react';
import useSWR from 'swr';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';

import { useTheme } from 'styled-components';
import { getItem } from '../../api/hackerNewsApi';
import getHostnameFromUrl from '../../util/getHostnameFromUrl';
import ListItem from '../../components/ListItem';

type Props = {
  id: string;
};

const StoryListItem = ({ id }: Props) => {
  const theme = useTheme();

  const { data } = useSWR(`story-${id}`, () => getItem(id));

  if (!data?.result) {
    return null;
  }

  const hostName = getHostnameFromUrl(data.result.url);

  const onPress = () => {
    InAppBrowser.open(data.result.url, {
      animated: true,
      preferredBarTintColor: theme.colors.BACKGROUND,
      readerMode: true,
      modalEnabled: true,
    });
  };

  return (
    <ListItem label={data.result.title} sublabel={hostName} onPress={onPress} />
  );
};

export default StoryListItem;
