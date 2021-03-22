import React from 'react';
import styled from 'styled-components';


const StyledForm = styled.form`
  width: ${props => props.width};
  margin: 70px auto;
`

const StyledFieldset = styled.fieldset`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: none;
  padding: 10px;
`


function Form({ children, ...rest }) {
  return (
    <StyledForm {...rest}>
      <StyledFieldset>
        {children}
      </StyledFieldset> 
    </StyledForm>
  )
}

export default Form;