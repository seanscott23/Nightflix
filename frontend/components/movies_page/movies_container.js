import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import {
  requestUserList,
  addToMyList,
  clearList,
  removeFromMyList,
} from "../../actions/mylist_actions";
import { allVideos } from "../../actions/video_actions";
import Movies from "./movies";

const mapStateToProps = (state) => {
  // debugger
  return {
    currentUser: state.entities.users[state.session.id],
    mylist: Object.values(state.entities.list),
    movies: Object.values(state.entities.videos).filter(
      (video) => video.video_type === "movie"
    ),
    Comedy: Object.values(state.entities.videos).filter((video) =>
      video.genre.includes("Comedy")
    ),
    Action: Object.values(state.entities.videos).filter((video) =>
      video.genre.includes("Action")
    ),
    Adventure: Object.values(state.entities.videos).filter((video) =>
      video.genre.includes("Adventure")
    ),
    Fantasy: Object.values(state.entities.videos).filter((video) =>
      video.genre.includes("Fantasy")
    ),
    Romance: Object.values(state.entities.videos).filter((video) =>
      video.genre.includes("Romance")
    ),
    Drama: Object.values(state.entities.videos).filter((video) =>
      video.genre.includes("Drama")
    ),
    Crime: Object.values(state.entities.videos).filter((video) =>
      video.genre.includes("Crime")
    ),
    Science: Object.values(state.entities.videos).filter((video) =>
      video.genre.includes("Science")
    ),
    Family: Object.values(state.entities.videos).filter((video) =>
      video.genre.includes("Family")
    ),
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestUserList: (userId) => dispatch(requestUserList(userId)),
  allVideos: () => dispatch(allVideos()),
  addToMyList: (videoId, userId) => dispatch(addToMyList(videoId, userId)),
  removeFromMyList: (videoId, userId) =>
    dispatch(removeFromMyList(videoId, userId)),
  clearList: () => dispatch(clearList()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movies));
