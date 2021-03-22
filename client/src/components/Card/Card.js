import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-shadow: 0 4px 4px 1px rgba(0, 0, 0, .2);
  
  img {
    width: 100%;
    height: 100%;
  }

  h3 {
    margin: 10px 0;
    height: 2rem;
    width: 150px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 1rem;
  }
  a {
    text-decoration: none;
  }

`


function Card({ movie }) {
  const newText = (/(<([^>]+)>)/ig);

  return (
    <CardContainer>
      <img src={movie.image || `https://missioninfra.net/img/noimg/noimg_4x3.gif`} alt="thumbnail"/>
      <h3>{movie.title.replace(newText, '')}</h3>
      <p>평점: {movie.userRating}</p>
      <a href={`${movie.link}`} traget='_blank'>상세 정보</a>
    </CardContainer>
  )
}

export default Card;