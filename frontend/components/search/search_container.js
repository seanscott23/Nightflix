import { connect } from "react-redux";
import { allVideos } from "../../actions/video_actions";
import { requestGenres } from "../../actions/genre_actions";
import SearchPage from "./search_index";
import { withRouter } from "react-router-dom";
import {requestUserList } from "../../actions/mylist_actions";

const mapStateToProps = (state) => {

  return {
    currentUser: state.entities.users[state.session.id],
    videos: Object.values(state.entities.videos),
    search: Object.values(state.entities.search)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    allVideos: () => dispatch(allVideos()),
    requestGenres: () => dispatch(requestGenres()),
    requestUserList: (userId) => dispatch(requestUserList(userId)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchPage)
);
