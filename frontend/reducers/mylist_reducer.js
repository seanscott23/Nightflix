import { ADD_LIST_ITEM, FETCH_LISTS, CLEAR_LIST, REMOVE_LIST_ITEM } from "../actions/mylist_actions";

const ListReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case ADD_LIST_ITEM:
      return Object.assign({}, oldState, action.video);
    case FETCH_LISTS:
      return Object.assign({}, oldState, action.videos);
    case REMOVE_LIST_ITEM:
      delete newState[action.video]
      return newState
    case CLEAR_LIST:
      return {}
    default:
      return oldState;
  }
};

export default ListReducer;
