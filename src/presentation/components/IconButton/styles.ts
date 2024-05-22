import styled, {css} from 'styled-components/native';
import {Base_Value, Extra_Large_Spacing} from '../../theme/spacer';

type PressableProps = {
  background: string;
  rounded: boolean;
  size: number;
  borderless: boolean;
};

export const IconWrapper = styled.View<PressableProps>`
  height: ${props => props.size + Base_Value}px;
  width: ${props => props.size + Base_Value}px;

  align-items: center;
  justify-content: center;

  background-color: ${props => props.background};

  border-radius: ${props =>
    props.rounded ? Extra_Large_Spacing : Base_Value}px;

  border-style: solid;
  border-color: ${props => props.theme.divider};
  border-width: 1px;

  ${props =>
    props.elevation &&
    css`
      elevation: 4;
      shadow-color: #000;
      shadow-offset: 0 2px;
      shadow-opacity: 0.23;
      shadow-radius: 2.62px;
    `};

  ${props =>
    props.borderless &&
    css`
      border-width: 0px;
    `};
`;
