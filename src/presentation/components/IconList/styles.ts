import styled, { css } from 'styled-components/native';

import { Spacing } from 'css';

import { FlexAlignItems } from '../types';

type ColumnProps = {
  direction?: 'row' | 'column';
  aligItems?: FlexAlignItems;
};

export const Column = styled.View<ColumnProps>`
  ${(props) =>
    props.direction &&
    props.direction === 'row' &&
    css`
      height: 100%;
    `}

  display: flex;

  margin-right: ${Spacing.SPACING_2}px;

  align-items: ${(props) => props.aligItems || 'center'};
  justify-content: center;
`;

export const IconRow = styled.View`
  flex: 1;

  flex-direction: row;

  height: ${Spacing.SPACING_48}px;
  padding-top: ${Spacing.SPACING_8}px;

  justify-content: center;
  align-items: flex-start;
`;
