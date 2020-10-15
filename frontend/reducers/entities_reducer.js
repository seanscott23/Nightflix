import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import VideosReducer from './videos_reducer';
import SearchReducer from './search_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  videos: VideosReducer,
  search: SearchReducer
});

export default entitiesReducer;