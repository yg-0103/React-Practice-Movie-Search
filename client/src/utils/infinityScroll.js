
export const infinityScroll = (dispatch) => {
  let scrollHeight = document.documentElement.scrollHeight;
  let scrollTop = document.documentElement.scrollTop;
  let clientHeight = document.documentElement.clientHeight;

  if(scrollTop + clientHeight >= scrollHeight * 0.95) {
    dispatch({ type: 'ADDMOVIE'})
  }
}