import { Receive_Search_Results } from "../actions/search_actions";

const SearchReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case Receive_Search_Results:
      console.log("reduce")
      return Object.assign({}, oldState, action.movies)
    default:
      return oldState;
  }
};

export default SearchReducer;
