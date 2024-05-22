import styled from 'styled-components/native';
import {Base_Value, Large_Padding} from '../../theme/spacer';

type BadgeProps = {
  background: string;
  color: string;
};

export const Container = styled.TouchableOpacity<BadgeProps>`
  flex-direction: row;

  max-height: ${Large_Padding}px;
  height: auto;

  width: auto;

  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: ${Base_Value}px;
  padding-right: ${Base_Value}px;

  border-radius: ${Base_Value}px;
  align-items: center;
  justify-content: 'space-between';

  background-color: ${props => props.background};

  font-weight: bold;
  color: ${props => props.color};
`;

export const TextContainer = styled.View`
  width: auto;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
`;
