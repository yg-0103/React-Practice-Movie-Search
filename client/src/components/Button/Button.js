import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.bgColor};
  color: ${props => props.fgColor};
  border: 1px solid #aaa;
  border-radius: 4px;
  margin: 0 10px;
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
  }
`;

function Button({ children, type, ...rest }) {
  return (
    <StyledButton type={type} {...rest}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  type: 'button',
  width: '50px',
  height: '50px',
  bgColor: 'tomato',
  fgColor: 'white',
};

export default Button;
