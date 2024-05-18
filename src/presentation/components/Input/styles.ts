import {TextInputProps} from 'react-native';
import styled from 'styled-components/native';
import {Base_Value, Large_Spacing, Small_Spacing} from '../../theme/spacer';
import {FONT_SIZE_16} from '../../theme/font';

export type ContainerInputProps = {
  disabled?: boolean;
  color: string;
  multiline?: boolean;
  borderColor: string;
};

export const ContainerInput = styled.View<ContainerInputProps>`
  flex-direction: row;
  align-items: ${props => (props.multiline ? 'flex-start' : 'center')};
  justify-content: space-between;

  height: ${props => (props.multiline ? Large_Spacing : Small_Spacing)}px;
  margin-top: 2px;
  background-color: ${props =>
    props.disabled ? props.colors.gray[300] : 'transparent'};

  border-radius: 6px;
  border-color: ${props => props.borderColor};
  border-width: 1px;

  padding-top: ${Base_Value}px;
  padding-left: ${Base_Value}px;
  padding-right: ${Base_Value}px;
`;

export const Input = styled.TextInput`
  flex: 1;

  font-family: 'Inter-Regular';
  font-size: ${FONT_SIZE_16}px;
  color: ${props => props.colors.gray[500]};
`;
