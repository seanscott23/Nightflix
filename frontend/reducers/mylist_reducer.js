import { ADD_LIST_ITEM, FETCH_LISTS } from "../actions/mylist_actions";

const ListReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case ADD_LIST_ITEM:
      return Object.assign({}, oldState, action.video.id);
    case FETCH_LISTS:
      return Object.assign({}, oldState, action.movies);
    default:
      return oldState;
  }
};

export default ListReducer;
