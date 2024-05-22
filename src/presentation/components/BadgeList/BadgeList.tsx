import React, {memo} from 'react';

import {FlatList, ListRenderItemInfo} from 'react-native';

import {Badge} from '../Badge/Badge';

import {BadgeContainer} from './styles';
import {IconProps} from '../Icon/Icon';

export interface BadgeListProps {
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  icon?: IconProps;
  type?: 'success' | 'error' | 'warning' | 'info';
  onPress?: () => void;
}

function BadgesComponent({badges}: {badges: BadgeListProps[]}) {
  const keyExtractor = (item: BadgeListProps) =>
    `${item?.text || ''} - ${item.icon?.name} - ${Math.random()} `;

  // #region [handlers and ICONS]
  const renderItem = (data: ListRenderItemInfo<BadgeListProps>) => {
    const {item} = data;

    const {backgroundColor, icon, onPress, text, textColor, type} = item;

    return (
      <BadgeContainer>
        <Badge
          backgroundColor={backgroundColor}
          text={text}
          textColor={textColor}
          type={type}
          onPress={onPress}
        />
      </BadgeContainer>
    );
  };

  return (
    <FlatList
      data={badges}
      horizontal
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
}
// #endregion

export const BadgeList = memo(BadgesComponent);
