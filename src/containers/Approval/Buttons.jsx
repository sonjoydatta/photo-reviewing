import { ReactComponent as ApproveIcon } from '@/assets/images/check-fill.svg';
import { ReactComponent as RejectIcon } from '@/assets/images/close-fill.svg';
import { Button } from '@/components';
import PropTypes from 'prop-types';
import { memo } from 'react';
import styled from 'styled-components';

export const Buttons = ({ onReject, onApprove }) => (
  <ButtonGroup>
    <Button block rounded variant="secondary" onClick={onReject}>
      <RejectIcon />
    </Button>
    <Button block rounded onClick={onApprove}>
      <ApproveIcon />
    </Button>
  </ButtonGroup>
);

Buttons.propTypes = {
  onReject: PropTypes.func.isRequired,
  onApprove: PropTypes.func.isRequired,
};

export const ButtonsMemo = memo(Buttons);

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
