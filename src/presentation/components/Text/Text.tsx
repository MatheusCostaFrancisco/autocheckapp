import React from 'react';
import {BaseText, FontFamilyTypes} from './styles';
import {ColorProps, useTheme} from '../../theme/theme';

export type TextAlignProps =
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'start'
  | 'end';

export interface HeadingsProps {
  textAlign?: TextAlignProps;
  children: React.ReactNode;
  family?: FontFamilyTypes;
  color?: ColorProps;
  numberOfLines?: number;
}

export function H1({
  textAlign = 'left',
  children = '',
  family = 'Inter-Bold',
  color,
  numberOfLines = undefined,
}: HeadingsProps) {
  const {fontSize} = useTheme();

  return (
    <BaseText
      textAlign={textAlign}
      color={color}
      family={family}
      size={fontSize.size_35}
      numberOfLines={numberOfLines}>
      {children}
    </BaseText>
  );
}

export function H2({
  textAlign = 'left',
  children = '',
  family = 'Inter-SemiBold',
  color,
  numberOfLines = undefined,
}: HeadingsProps) {
  const {fontSize} = useTheme();

  return (
    <BaseText
      textAlign={textAlign}
      color={color}
      family={family}
      size={fontSize.size_30}
      numberOfLines={numberOfLines}>
      {children}
    </BaseText>
  );
}

export function H3({
  textAlign = 'left',
  children = '',
  family = 'Inter-Medium',
  color,
  numberOfLines = undefined,
}: HeadingsProps) {
  const {fontSize} = useTheme();

  return (
    <BaseText
      textAlign={textAlign}
      color={color}
      family={family}
      size={fontSize.size_25}
      numberOfLines={numberOfLines}>
      {children}
    </BaseText>
  );
}

export function H4({
  textAlign = 'left',
  children = '',
  family = 'Inter-Regular',
  color,
  numberOfLines = undefined,
}: HeadingsProps) {
  const {fontSize} = useTheme();

  return (
    <BaseText
      textAlign={textAlign}
      color={color}
      family={family}
      size={fontSize.size_20}
      numberOfLines={numberOfLines}>
      {children}
    </BaseText>
  );
}

export function H5({
  textAlign = 'left',
  children = '',
  family = 'Inter-Regular',
  color,
  numberOfLines = undefined,
}: HeadingsProps) {
  const {fontSize} = useTheme();

  return (
    <BaseText
      textAlign={textAlign}
      color={color}
      family={family}
      size={fontSize.size_16}
      numberOfLines={numberOfLines}>
      {children}
    </BaseText>
  );
}

export function H6({
  textAlign = 'left',
  children = '',
  family = 'Inter-Regular',
  color,
  numberOfLines = undefined,
}: HeadingsProps) {
  const {fontSize} = useTheme();

  return (
    <BaseText
      textAlign={textAlign}
      color={color}
      family={family}
      size={fontSize.size_12}
      numberOfLines={numberOfLines}>
      {children}
    </BaseText>
  );
}

export function H7({
  textAlign = 'left',
  children = '',
  family = 'Inter-Regular',
  color,
  numberOfLines = undefined,
}: HeadingsProps) {
  const {fontSize} = useTheme();

  return (
    <BaseText
      textAlign={textAlign}
      color={color}
      family={family}
      size={fontSize.size_10}
      numberOfLines={numberOfLines}>
      {children}
    </BaseText>
  );
}
