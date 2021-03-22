import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: ${props => props.width};
  height: ${props => props.height};
  color: #aaa;
  font-size: 1.5rem;
  outline: none;
  border-radius: 2px;
  border: 1px solid #aaa;
  padding: 10px;
  box-sizing: border-box;
`;

function Input({ type, ...rest }) {
  return <StyledInput type={type} {...rest} />;
}

Input.defaultProps = {
  width: '300px',
  height: '50px',
  type: 'text',
};

export default Input;
