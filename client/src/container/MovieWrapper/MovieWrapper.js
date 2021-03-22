import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0 auto;
  text-align: center;
  border-top: none;
  width: 1000px;
  grid-gap: 15px;
`

function MovieWrapper({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default MovieWrapper;