import { connect } from 'react-redux';
import { showVideo } from '../../actions/video_actions';
import {
  addToMyList,
  requestUserList,
  removeFromMyList,
} from "../../actions/mylist_actions";
import VideoShow from './video_show.jsx';


const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        video: state.entities.videos[ownProps.match.params.videoId],
        listItems: Object.values(state.entities.list)
    }
};

const mapDispatchToProps = dispatch => {
    return {
      showVideo: (videoId) => dispatch(showVideo(videoId)),
      addToMyList: (videoId, userId) => dispatch(addToMyList(videoId, userId)),
      removeFromMyList: (videoId, userId) =>
        dispatch(removeFromMyList(videoId, userId)),
      requestUserList: (userId) => dispatch(requestUserList(userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);