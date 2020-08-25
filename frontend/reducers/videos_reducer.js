import { RECEIVE_CURRENT_VIDEO} from '../actions/video_actions';

const VideosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_VIDEO:
            return Object.assign({}, oldState, action.video)
        default:
            return oldState;
    }
}

export default VideosReducer;