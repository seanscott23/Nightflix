import * as APIUtil from '../util/video_api_util';

export const RECEIVE_CURRENT_VIDEO = 'RECEIVE_CURRENT_VIDEO';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentVideo = video => ({
    type: RECEIVE_CURRENT_VIDEO,
    video
});


const receiveSessionErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}


export const showVideo = videoId => dispatch => {
  return (
    APIUtil.fetchVideo(videoId)
        .then(video => dispatch(receiveCurrentVideo(video)))
        .fail(video => dispatch(receiveSessionErrors(video)))
  )
}


export const allVideos = () => dispatch => {
    return (
        APIUtil.fetchVideos()
            .then(videos => dispatch(receiveCurrentVideo(videos)))
            .fail(videos => dispatch(receiveSessionErrors(videos)))
    )
}

