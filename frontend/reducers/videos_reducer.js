import { RECEIVE_CURRENT_VIDEO} from '../actions/video_actions';
import {
  REMOVE_LIST_ITEM,
} from "../actions/mylist_actions";


const VideosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_VIDEO:
            return Object.assign({}, oldState, action.video)
        case REMOVE_LIST_ITEM:
            return Object.assign({}, oldState, action.videos);
        default:
            return oldState;
    }
}

export default VideosReducer;