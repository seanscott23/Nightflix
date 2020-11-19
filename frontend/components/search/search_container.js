import { connect } from "react-redux";
import { allVideos } from "../../actions/video_actions";
import { requestGenres } from "../../actions/genre_actions";
import SearchPage from "./search_index";
import { withRouter } from "react-router-dom";
import {
  addToMyList,
  requestUserList,
  removeFromMyList,
} from "../../actions/mylist_actions";

const mapStateToProps = (state) => {

  return {
    currentUser: state.entities.users[state.session.id],
    videos: Object.values(state.entities.videos),
    search: Object.values(state.entities.search),
    listItems: Object.values(state.entities.list)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    allVideos: () => dispatch(allVideos()),
    requestGenres: () => dispatch(requestGenres()),
    requestUserList: (userId) => dispatch(requestUserList(userId)),
    addToMyList: (videoId, userId) => dispatch(addToMyList(videoId, userId)),
    removeFromMyList: (videoId, userId) =>
      dispatch(removeFromMyList(videoId, userId))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchPage)
);
