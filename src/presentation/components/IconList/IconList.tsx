import React, {memo} from 'react';

import {FlatList, ListRenderItemInfo} from 'react-native';

import {useTheme} from '../../theme/theme';
import {IconButton} from '../IconButton/IconButton';

import {IconProps} from '../Icon/Icon';
import {Column, IconRow} from './styles';

export interface IconListProps {
  backgroundColor?: string;
  icon: IconProps;
  rounded?: boolean;
  onPress: () => void;
  borderless?: boolean;
  elevation?: number;
  label: string;
  transparent?: boolean;
  show?: boolean;
}

function IconsComponent({icons}: {icons: IconListProps[]}) {
  const {colors, fontSize} = useTheme();

  // #region [RENDER ICONS]
  const keyExtractor = (item: IconListProps) => `${item?.icon.name || ''}`;

  const renderItem = (data: ListRenderItemInfo<IconListProps>) => {
    const {item} = data;

    const objIcon = {
      name: item.icon.name || 'plus-square',
      color: item.icon.color || colors.blue[600],
      size: item.icon.size || fontSize.size_30,
    };

    return (
      <IconRow>
        <Column direction="row">
          {item.show || item.show === undefined ? (
            <IconButton
              icon={objIcon}
              onPress={item.onPress}
              backgroundColor={item.backgroundColor || 'transparent'}
              borderless={item.borderless || false}
              rounded={item.rounded || false}
              transparent={item.transparent || false}
            />
          ) : null}
        </Column>
      </IconRow>
    );
  };
  // #endregion

  return (
    <>
      <FlatList
        data={icons}
        horizontal
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </>
  );
}

export const IconList = memo(IconsComponent);
