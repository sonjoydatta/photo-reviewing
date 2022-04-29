import { Image, RingLoader } from '@/components';
import PropTypes from 'prop-types';
import { memo } from 'react';
import styled from 'styled-components';

export const Previewer = ({ isLoading, ...rest }) => (
  <Wrapper>{isLoading ? <RingLoader /> : <Image rounded {...rest} />}</Wrapper>
);

Previewer.propTypes = {
  isLoading: PropTypes.bool,
  ...Image.propTypes,
};

export const PreviewerMemo = memo(Previewer);

const Wrapper = styled.div`
  width: 100%;
  min-height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
