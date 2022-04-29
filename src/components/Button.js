import styled from 'styled-components';
import { hexToRGB } from '@/utils/helpers';
import { COLORS, RADIUS } from './constants';

const Button = styled.button.attrs((props) => ({
  type: props.type || 'button',
  variant: props.variant || 'primary',
  block: props.block || false,
  rounded: props.rounded || false,
}))`
  width: ${({ block }) => (block ? '100%' : 'auto')};
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: ${({ rounded }) => (rounded ? RADIUS.rounded : 0)};
  background-color: ${({ variant }) => (variant === 'primary' ? COLORS.primary : COLORS.secondary)};
  color: ${COLORS.white};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  transition: all 0.4s ease-in-out;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: ${({ variant }) => hexToRGB(variant === 'primary' ? COLORS.primary : COLORS.secondary, 0.75)};
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

export default Button;
