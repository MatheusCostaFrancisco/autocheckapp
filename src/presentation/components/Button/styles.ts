import styled, {css} from 'styled-components/native';

type WrapperProps = {
  rounded: boolean;
  variant: 'default' | 'outline';
  background: string;
};

export const Wrapper = styled.View<WrapperProps>`
  align-self: stretch;
  justify-content: center;
  border-radius: ${props => props.Font.SPACING_16}px;
  background-color: transparent;

  /* Variant Outline */
  ${props =>
    props.variant === 'outline' &&
    css`
      border-style: solid;
      border-color: ${props.background};
      border-width: 1px;

      background-color: transparent;
    `}
`;
