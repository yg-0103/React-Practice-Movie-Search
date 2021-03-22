import { useReducer } from 'react';
import axios from 'axios';

function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'SUCCESS':
      return {
        ...state,
        isLoading: false,
        data: [...state.data, ...action.data],
        error: null,
      };
    case 'ERROR':
      return {
        ...state,
        isLoading: false,
        data: [],
        error: action.error,
      };
    case 'SUBMIT':
      return {
        ...state,
        data: [],
        isSubmit: action.submit,
        items: {
          item: 20,
          preItem: 0,
        }
      }
    case 'ADDMOVIE':
      return {
        ...state,
        items: {
          item: state.items.item + 20,
          preItem: state.items.item
        }
      }
    case 'SORT': {
      return {
        ...state,
        data: state.data.sort((a, b) => b.userRating - a.userRating)
      }
    }  
    default:
      throw new Error('Unhandled action type:', action.type);
  }
}

export const getMovies = async (keyword, item, preItem) => {
  const { data: movies } = await axios.get(`/movie/${keyword}`);
  return movies.slice(preItem, item);
};

function useFormState() {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    data: [],
    error: null,
    isSubmit: false,
    items: {
      item: 20,
      prev: 0
    }
  });

  const fetchData = async (keyword, item, preItem) => {
    //dispatch({ type: 'LOADING' });

    try {
      const data = await getMovies(keyword, item, preItem);
      dispatch({ type: 'SUCCESS', data });
    } catch (error) {
      dispatch({ type: 'ERROR', error });
    }
  };

  // useEffect(() => {
  //   fetchData();
  //   /* eslint-disable-next-line */
  // }, deps);

  return [state, dispatch, fetchData];
}

export default useFormState;
