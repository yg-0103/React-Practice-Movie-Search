const axios = require('axios');

const NAVER_URL = `https://openapi.naver.com/v1/search/movie.json?query=`;
const NAVER_CLIENT_ID = '1eJFVC1DoeMybz2HOAyD';
const NAVER_CLIENT_SECRET_ID = 'rWgOmb2Qxy';

const ajaxNaverMovie = axios.create({
  baseURL: NAVER_URL,
  headers: {
    'X-Naver-Client-Id': NAVER_CLIENT_ID,
    'X-Naver-Client-Secret': NAVER_CLIENT_SECRET_ID,
  },
});

const getNaverMovies = async serchWord => {
  try {
    const {
      data: { items: movies },
    } = await ajaxNaverMovie.get(encodeURI(`${serchWord}&display=100`));

    return movies;
  } catch (e) {
    throw new Error('failed: get naver moive');
  }
};

module.exports = {
  getNaverMovies,
};
