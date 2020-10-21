import * as APIUtil from "../util/mylist_util";

export const FETCH_LISTS = "FETCH_LISTS";
export const ADD_LIST_ITEM = "ADD_LIST_ITEM";

const receiveList = (videos) => ({
  type: FETCH_LISTS,
  videos,
});

const addToList = (videoId) => ({
  type: ADD_LIST_ITEM,
  videoId,
});


export const requestList = () => (dispatch) => {
  return APIUtil.fetchLists().then((videos) => dispatch(receiveList(videos)));
};


export const addToMyList = (videoId) => (dispatch) => {
  return APIUtil.addListItem(videoId).then((videoId) => dispatch(addToList(videoId)));
};
