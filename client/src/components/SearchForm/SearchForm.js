import React from 'react';
import Form from '../../container/Form/Form';
import Button from '../Button/Button';
import SearchInput from '../Input/SearchInput';
import { BsSearch } from 'react-icons/bs';



function SearchForm({keyword, onChange, onSubmit, onClick}) {

  return (
    <Form width="700px" onSubmit={onSubmit}>
      <Button type="button" width="100px" height="50px" onClick={onClick}>
        평점순 정렬
      </Button>
      <SearchInput width="100%" placeholder="검색어를 입력하세요" value={keyword} onChange={onChange} />
      <Button type="submit" width="100px" height="50px">
        <BsSearch />
      </Button>
    </Form>
  );
}

export default SearchForm;
