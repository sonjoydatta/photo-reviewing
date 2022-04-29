import styled from 'styled-components';
import { RADIUS } from './constants';

const Image = styled.img.attrs((props) => ({
  rounded: props.rounded || false,
}))`
  width: 100%;
  height: auto;
  border-radius: ${({ rounded }) => (rounded ? RADIUS.corner : 0)};
`;

export default Image;
