import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { COLORS } from './constants';

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const RingLoader = styled.div`
  display: inline-block;
  width: 5rem;
  height: 5rem;

  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${COLORS.primary};
    border-color: ${COLORS.primary} transparent ${COLORS.primary} transparent;
    animation: ${animation} 1.2s linear infinite;
  }
`;

export default RingLoader;
