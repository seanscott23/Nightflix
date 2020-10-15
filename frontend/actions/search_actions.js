import * as APIUtil from '../util/search_util';

export const Receive_Search_Results= "Receive_Search_Results";

const receiveSearchResults = (movies) => ({
  type: Receive_Search_Results,
  movies
});

export const fetchSearchResults = (query) => (dispatch) => {
  return APIUtil.fetchSearchResults(query).then((movies) =>
    dispatch(receiveSearchResults(movies))
  );
};