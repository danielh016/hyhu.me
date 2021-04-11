import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './buttonStyles';

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  onClick: null,
};

export default Button;
