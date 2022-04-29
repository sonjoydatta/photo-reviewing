import { ReactComponent as AddIcon } from '@/assets/images/add-fill.svg';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const AddButton = ({ onAdd }) => (
  <Wrapper onClick={onAdd}>
    <AddIcon />
  </Wrapper>
);

AddButton.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  width: 6.25rem;
  height: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f2f7;
  border-radius: 0.5rem;
  cursor: pointer;
`;
