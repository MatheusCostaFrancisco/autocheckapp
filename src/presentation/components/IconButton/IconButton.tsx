import React, {memo, useMemo} from 'react';

import {ActivityIndicator, Pressable, StyleSheet} from 'react-native';

import {Icon, IconProps} from '../Icon/Icon';

import {IconWrapper} from './styles';
import {useTheme} from '../../theme/theme';

export interface IconButtonProps {
  backgroundColor?: string;
  loading?: boolean;
  disabled?: boolean;
  icon: IconProps;
  rounded?: boolean;
  onPress: () => void;
  onLongPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  delayLongPress?: number;
  borderless?: boolean;
  transparent?: boolean;
  boxSize?: number;
}

function IconButtonComponent({
  icon,
  backgroundColor,
  loading,
  disabled,
  onPress,
  onLongPress,
  onPressIn,
  onPressOut,
  delayLongPress,
  borderless,
  boxSize,
  transparent = false,
  rounded = false,
}: IconButtonProps) {
  const {colors, fontSize, spacer} = useTheme();

  // #region [COLORS]
  const getBackground = () => {
    if (transparent) return 'transparent';

    if (disabled) return colors.gray[300];

    if (backgroundColor) return backgroundColor;

    return colors.blue[300];
  };

  const getColor = () => {
    if (disabled) return colors.gray[500];

    if (icon?.color) return icon.color;

    return colors.blue[500];
  };

  const background = getBackground();
  const rippleColor = '#333';
  const color = getColor();
  // #endregion

  // #region [ICON]
  const iconObj = {
    name: icon?.name || 'info',
    color,
    size: icon?.size || fontSize.size_30,
  };
  // #endregion

  // #region [PRE_RENDER]
  const sizeWrapper = useMemo(() => boxSize || iconObj.size, [boxSize]);
  const borderlessWrapper = useMemo(() => borderless || false, [borderless]);
  const roundedWrapper = useMemo(() => rounded || false, [rounded]);

  const styles = StyleSheet.create({
    pressable: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
  });

  const borderRadius = borderless ? 100 : 8;
  // #endregion

  // #region [RENDER]
  return (
    <IconWrapper
      background={background}
      size={sizeWrapper}
      borderless={borderlessWrapper}
      rounded={roundedWrapper}>
      <Pressable
        disabled={disabled || loading}
        onPress={() => onPress()}
        onPressIn={onPressIn ? () => onPressIn() : undefined}
        onPressOut={onPressOut ? () => onPressOut() : undefined}
        onLongPress={onLongPress ? () => onLongPress() : undefined}
        delayLongPress={delayLongPress}
        style={styles.pressable}
        android_ripple={{
          color: rippleColor,
          borderless: true,
          // radius: borderRadius,
        }}>
        {!loading ? (
          <Icon icon={iconObj} />
        ) : (
          <ActivityIndicator color={color} size="large" />
        )}
      </Pressable>
    </IconWrapper>
  );
  // #endregion
}

export const IconButton = memo(IconButtonComponent);
