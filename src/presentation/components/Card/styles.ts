import styled, {css} from 'styled-components/native';
import {
  Base_Value,
  Large_Padding,
  Medium_Padding,
  Small_Padding,
  Small_Spacing,
} from '../../theme/spacer';

type WrapperProps = {
  background: string;
  elevation?: boolean;
  borderless: boolean;
};

type BadgeContainerProps = {
  hasFlexOne?: boolean;
};

type RowProps = {
  flex?: number;
  direction?: 'row' | 'column';
};

type TitleContainerProps = {
  flex: number;
  direction: 'row' | 'column';
};

export const Wrapper = styled.TouchableOpacity<WrapperProps>`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  background-color: ${props => props.background};

  border-radius: ${Small_Padding}px;

  ${props =>
    !props.borderless &&
    css`
      border-style: solid;
      border-color: ${props.theme.divider};
      border-width: 1px;
    `}

  padding: ${Base_Value}px ${Small_Padding}px;

  ${props =>
    props.elevation &&
    css`
      elevation: 4;
      shadow-color: #000;
      shadow-offset: 0 2px;
      shadow-opacity: 0.23;
      shadow-radius: 2.62px;
    `};
`;

export const TitleContainer = styled.View<TitleContainerProps>`
  ${props =>
    props.flex &&
    css`
      flex: ${props.flex};
    `}

  ${props =>
    props.direction &&
    props.direction === 'column' &&
    css`
      flex-direction: column;
      width: 100%;
      align-items: flex-start;
    `}

  ${props =>
    props.direction &&
    props.direction === 'row' &&
    css`
      flex-direction: row;
      width: 100%;
      align-items: flex-end;
      justify-content: space-between;
    `}
`;

export const BadgeContainer = styled.View<BadgeContainerProps>`
  ${({hasFlexOne}) =>
    hasFlexOne &&
    css`
      flex: 1;
    `}
  width: auto;
  height: auto;
  align-self: flex-end;
  align-items: flex-end;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  padding-bottom: ${Base_Value}px;
`;

export const ContainerData = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
`;

export const Row = styled.View<RowProps>`
  flex: 1;

  ${props =>
    props.flex &&
    css`
      flex: ${props.flex};
    `}

  ${props =>
    props.direction &&
    props.direction === 'column' &&
    css`
      flex-direction: column;

      min-height: ${Small_Spacing}px;

      justify-content: space-between;
      align-items: flex-start;
    `}

  ${props =>
    props.direction &&
    props.direction === 'row' &&
    css`
      flex-direction: row;
      flex-wrap: wrap;

      min-height: ${Large_Padding}px;

      /* justify-content: center; */
      align-items: flex-start;
    `}
`;

type DataRowProps = {
  flex?: number;
  direction?: 'row' | 'column';
};

type DataColumnProps = {
  direction?: 'row' | 'column';
  aligItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
};

export const DataColumn = styled.View<DataColumnProps>`
  ${props =>
    props.direction &&
    props.direction === 'row' &&
    css`
      height: 100%;
    `}

  display: flex;

  margin-right: 2px;

  align-items: ${props => props.aligItems || 'center'};
  justify-content: center;
`;

export const DataRow = styled.View<DataRowProps>`
  flex: 1;

  ${props =>
    props.flex &&
    css`
      flex: ${props.flex};
    `}

  ${props =>
    props.direction &&
    props.direction === 'column' &&
    css`
      flex-direction: column;

      min-height: ${Small_Spacing}px;

      justify-content: space-between;
      align-items: flex-start;
    `}

  ${props =>
    props.direction &&
    props.direction === 'row' &&
    css`
      flex-direction: row;

      min-height: ${Medium_Padding}px;

      /* justify-content: center;
      align-items: flex-start; */
    `}
`;
