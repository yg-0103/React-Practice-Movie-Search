const api = require('./apis/getMovieList');
const express = require('express');
const app = express();
app.use(express.static('../client'));

app.use(express.json());

app.get('/movie/:keyword', async (req, res) => {
  console.log(req.params.keyword);
  try {
    const movieList = await api.getNaverMovies(req.params.keyword);
    res.send(movieList);
  } catch (e) {
    res.send(e);
  }
});

app.listen(3001, () => {
  console.log('Server listening on port 3000');
});
