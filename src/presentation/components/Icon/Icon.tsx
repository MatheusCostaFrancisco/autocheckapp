import React, {useMemo} from 'react';

import FontAwesome5 from 'react-native-vector-icons/fontawesome5';

import {useTheme} from '../../theme/theme';
import {IconNames} from '../icons';

export type IconProps = {
  name: IconNames;
  color?: string;
  size?: number;
};

export type Props = {
  icon: IconProps;
};

export const Icon = ({icon}: Props) => {
  const {colors, fontSize} = useTheme();

  const iconObj = {
    name: icon.name || 'plus-square',
    size: icon.size || fontSize.size_30,
    color: icon.color || colors.gray[900],
  };

  const colorIcon = iconObj.color;

  const renderIcon = useMemo(
    () => (
      <FontAwesome5 name={iconObj.name} size={iconObj.size} color={colorIcon} />
    ),
    [icon],
  );

  return renderIcon;
};
