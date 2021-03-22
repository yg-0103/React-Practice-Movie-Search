import React, { useEffect, useState } from 'react';
import { ReactComponent as Loading } from '../assets/loading.svg';
import SearchForm from '../components/SearchForm/SearchForm';
import MovieWrapper from '../container/MovieWrapper/MovieWrapper';
import Card from '../components/Card/Card';
import useFormState from '../utils/useGetMovies';
import { debounce } from '../utils/debounce';
import { infinityScroll } from '../utils/infinityScroll';



function App() {
  const [state, dispatch, getMovies] = useFormState();
  const [keyword, setKeyword] = useState('');

  const { isLoading, isSubmit, error, data: movies, items } = state;
  const { item, preItem } = items

  const handleChange = e => {
    setKeyword(e.target.value);
    dispatch({ type: 'SUBMIT', submit: false });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(!keyword) return;
    dispatch({ type: 'LOADING'})
    dispatch({ type: 'SUBMIT', submit: true });
  };

  const handleClick = () => {
    dispatch({ type: 'SORT' })
  }

  useEffect(() => {
    if (!isSubmit) return;

    getMovies(keyword, item, preItem);
    /* eslint-disable-next-line */
  }, [isSubmit, item]);

  useEffect(() => {
    window.addEventListener('scroll', debounce(e => {
      
      infinityScroll(dispatch)
    }, 500))
  }, [dispatch])


  if (isLoading) return <Loading />;
  if (error) return <div>에러 발생</div>;

  return (
    <>
      <SearchForm
        keyword={keyword}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onClick={handleClick}
      />
      <MovieWrapper>
        {isSubmit && movies.length ? (
          movies.map((movie, index) => <Card key={index} movie={movie} />)
        ) : (
          <div> 검색 결과가 없습니다 </div>
        )}
      </MovieWrapper>
    </>
  );
}

export default App;
