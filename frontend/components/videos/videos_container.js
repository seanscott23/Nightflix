import { connect } from 'react-redux';
import { showVideo } from '../../actions/video_actions';
import VideosForm from './videos';


const mapStateToProps = (state) => {

    return {
        currentUser: state.entities.users[state.session.id]
    }
};

const mapDispatchToProps = dispatch => {
    return {
    showVideo: (videoId) => dispatch(showVideo(videoId))
}
};

export default connect(mapStateToProps, mapDispatchToProps)(VideosForm);