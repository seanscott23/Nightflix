import { connect } from 'react-redux';
import { showVideo, allVideos } from '../../actions/video_actions';
import VideosIndex from './video_index';


const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        currentUser: state.entities.users[state.session.id],
        videos: Object.values(state.entities.videos)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        allVideos: () => dispatch(allVideos())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VideosIndex);