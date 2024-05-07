import styled from 'styled-components/native';

import React from 'react';

export type FontFamilyTypes =
  | 'Inter-Bold'
  | 'Inter-SemiBold'
  | 'Inter-Regular'
  | 'Inter-Medium';

interface BaseTextProps {
  children: React.ReactNode;
  color?: string;
  family?: FontFamilyTypes;
  size?: number;
  textAlign?: string;
}

export const BaseText = styled.Text<BaseTextProps>`
  font-family: ${props => props.family || 'Inter-Medium'};

  font-size: ${props => props.size || 16}px;

  text-align: ${props => props.textAlign || 'left'};

  text-transform: ${props => props.transform || 'none'};

  color: ${props => props.color};

  line-height: ${props => (props.size || 16) * 1.5}px;

  margin: 0px;

  padding: 0px;

  width: ${props => {
    if (props.numberOfLines) {
      return '95%';
    }

    return 'auto';
  }};
`;
