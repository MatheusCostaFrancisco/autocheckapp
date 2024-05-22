import React from 'react';

import {useTheme} from '../../theme/theme';
import {H7} from '../Text/Text';
import {Container, TextContainer} from './styles';

export type BadgeProps = {
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  onPress?: () => void;
  type?: 'green' | 'red' | 'blue';
};

export function Badge({
  text,
  backgroundColor,
  textColor,
  type,
  onPress,
}: BadgeProps) {
  const {colors} = useTheme();

  // #region [RENDER]

  const getBackgroundColor = () => {
    if (backgroundColor) return backgroundColor;

    switch (type) {
      case 'green':
        return colors.action.green;

      case 'red':
        return colors.action.red;

      case 'blue':
        return colors.blue[400];

      default:
        return colors.blue[400];
    }
  };

  const getTextColor = () => {
    if (textColor) return textColor;
    return colors.gray[900];
  };

  const color = getTextColor();
  const background = getBackgroundColor();

  function handlePress() {
    if (onPress && typeof onPress === 'function') onPress();
  }

  return (
    <Container
      background={background}
      color={color}
      onPress={handlePress}
      disabled={!onPress}>
      <TextContainer>
        <H7 color={color} family="Inter-SemiBold">
          {text}
        </H7>
      </TextContainer>
    </Container>
  );
  // #endregion
}
