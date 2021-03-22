import React from 'react';
import Input from './Input';
import styled from 'styled-components';

const StyledLabel = styled.label`
  position: relative;
  width: 100%;
  /* .SearchIcon {
    position: absolute;
    width: 25px;
    height: 25px;
    right: 5px;
    top: 50%;
    transform: translate3d(0, -60%, 0);
  } */
`;

function SearchInput({ ...rest }) {
  return (
    <StyledLabel>
      <Input id="SearchInput" type="text" {...rest} />
    </StyledLabel>
  );
}

export default SearchInput;
