import { connect } from "react-redux";
import {  allVideos } from "../../actions/video_actions";
import { requestGenres } from "../../actions/genre_actions";
import VideoList from "./video_search";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    videos: Object.values(state.entities.videos),
    genres: Object.values(state.entities.genres)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    allVideos: () => dispatch(allVideos()),
    requestGenres: () => dispatch(requestGenres())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoList));
