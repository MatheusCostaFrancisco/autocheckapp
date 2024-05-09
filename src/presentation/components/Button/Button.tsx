import React from 'react';

import {ActivityIndicator, Pressable, StyleSheet} from 'react-native';

import {useTheme} from '../../theme/theme';
import {H5} from '../Text/Text';
import {Wrapper} from './styles';

export type ButtonProps = {
  text: string;
  onPress: () => void;
  backgroundColor?: string;
  loading?: boolean;
  disabled?: boolean;
  variant?: 'default' | 'outline';
  rounded?: boolean;
  onLongPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  height?: number;
};

export function Button({
  text,
  onPress,
  loading,
  disabled,
  onLongPress,
  onPressIn,
  onPressOut,
  rounded = false,
  variant = 'default',
  backgroundColor,
  height,
}: ButtonProps) {
  const {fontSize, colors, spacer} = useTheme();

  // #region [COLORS]
  const getBackground = () => {
    if (disabled) return colors.gray[300];

    if (backgroundColor) {
      return backgroundColor;
    }

    return colors.blue[600];
  };

  const background = getBackground();

  const getRippleColor = () => {
    if (variant === 'outline') {
      if (backgroundColor) {
        return backgroundColor;
      }

      return colors.blue[600];
    }
  };

  const rippleColor = getRippleColor();
  // #endregion

  // #region [STYLE]
  const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      height: height ?? spacer.Small_Spacing,
      backgroundColor: variant === 'outline' ? 'transparent' : background,
      borderRadius: spacer.Base_Value,
      paddingLeft: spacer.Base_Value,
      paddingRight: spacer.Base_Value,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  // #endregion

  // #region [handlers and ICONS]
  const androidRipple = {
    color: rippleColor,
    borderless: true,
  };

  const disable = disabled || loading;
  // #endregion

  return (
    <Wrapper rounded={rounded} variant={variant} background={background}>
      <Pressable
        disabled={disable}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onLongPress={onLongPress}
        android_ripple={androidRipple}
        style={styles.button}>
        {!loading ? (
          <H5 color={colors.base.white} family="Inter-SemiBold">
            {text}
          </H5>
        ) : (
          <ActivityIndicator color={colors.base.white} size="large" />
        )}
      </Pressable>
    </Wrapper>
  );
}
