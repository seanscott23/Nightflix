import * as APIUtil from "../util/mylist_util";

export const FETCH_LISTS = "FETCH_LISTS";
export const ADD_LIST_ITEM = "ADD_LIST_ITEM";
export const CLEAR_LIST = "CLEAR_LIST";
export const REMOVE_LIST_ITEM = "REMOVE_LIST_ITEM";

const receiveList = (videos) => ({
  type: FETCH_LISTS,
  videos,
});

const addToList = (video) => ({
  type: ADD_LIST_ITEM,
  video,
});

const removeFromList = (video) => ({
  type: REMOVE_LIST_ITEM,
  video
})

const clear = () => ({
  type: CLEAR_LIST
})


export const requestUserList = (userId) => (dispatch) => {
  return APIUtil.fetchLists(userId).then((videos) => dispatch(receiveList(videos)));
};


export const addToMyList = (videoId, userId) => (dispatch) => {
  return APIUtil.addListItem(videoId, userId).then((video) => dispatch(addToList(video)));
};

export const removeFromMyList = (videoId, userId) => (dispatch) => {
  return APIUtil.removeListItem(videoId, userId).then((video) => dispatch(removeFromList(video)));
};


export const clearList = () => (dispatch) => {
  return dispatch(clear());
}
