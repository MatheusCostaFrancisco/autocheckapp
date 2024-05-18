import React from 'react';

import {ActivityIndicator, Pressable, StyleSheet, View} from 'react-native';

import {useTheme} from '../../theme/theme';
import {H5} from '../Text/Text';

export type ButtonProps = {
  text: string;
  onPress: () => void;
  backgroundColor?: string;
  loading?: boolean;
  disabled?: boolean;
  variant?: 'default' | 'outline';
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
    wrapper: {
      alignSelf: 'stretch',
      justifyContent: 'center',
      borderRadius: spacer.Small_Padding,
      backgroundColor: 'transparent',
    },
    outline: {
      alignSelf: 'stretch',
      justifyContent: 'center',
      borderRadius: spacer.Small_Padding,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderColor: backgroundColor,
      borderWidth: 1,
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
    <View style={variant === 'outline' ? styles.outline : styles.wrapper}>
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
    </View>
  );
}
