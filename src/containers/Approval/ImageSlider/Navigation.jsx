import { ReactComponent as ArrowLeft } from '@/assets/images/arrow-left-s-line.svg';
import { ReactComponent as ArrowRight } from '@/assets/images/arrow-right-s-line.svg';
import { Button } from '@/components';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

export const Navigation = ({ onPrev, onNext, isPrevDisabled, isNextDisabled, children }) => (
  <Fragment>
    <Button onClick={onPrev} style={{ display: isPrevDisabled ? 'block' : 'none' }}>
      <ArrowLeft />
    </Button>
    {children}
    <Button onClick={onNext} style={{ display: isNextDisabled ? 'block' : 'none' }}>
      <ArrowRight />
    </Button>
  </Fragment>
);

Navigation.propTypes = {
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  isPrevDisabled: PropTypes.bool,
  isNextDisabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
