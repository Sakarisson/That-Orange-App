import React from 'react';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';

import { useTheme } from 'styled-components';
import getHostnameFromUrl from '../../util/getHostnameFromUrl';
import ListItem from '../../components/ListItem';

type Props = {
  id: number;
  url: string;
  title: string;
};

const StoryListItem = ({ url, title }: Props) => {
  const theme = useTheme();

  const hostName = getHostnameFromUrl(url);

  const onPress = () => {
    InAppBrowser.open(url, {
      animated: true,
      preferredBarTintColor: theme.colors.BACKGROUND,
      readerMode: true,
      modalEnabled: true,
    });
  };

  return <ListItem label={title} sublabel={hostName} onPress={onPress} />;
};

export default StoryListItem;
