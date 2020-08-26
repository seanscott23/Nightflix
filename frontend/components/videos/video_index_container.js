import { connect } from 'react-redux';
import { showVideo, allVideos } from '../../actions/video_actions';
import VideosIndex from './video_index';


const mapStateToProps = (state) => {

    return {
        currentUser: state.entities.users[state.session.id],
        videos: Object.values(state.entities.videos),
        Comedy: Object.values(state.entities.videos).filter(video => video.genre.includes("Comedy")),
        Action: Object.values(state.entities.videos).filter(video => video.genre.includes("Action")),
        Adventure: Object.values(state.entities.videos).filter(video => video.genre.includes("Adventure")),
        Fantasy: Object.values(state.entities.videos).filter(video => video.genre.includes("Fantasy")),
        Romance: Object.values(state.entities.videos).filter(video => video.genre.includes("Romance")),
        Drama: Object.values(state.entities.videos).filter(video => video.genre.includes("Drama")),
        Crime: Object.values(state.entities.videos).filter(video => video.genre.includes("Crime")),
        Science: Object.values(state.entities.videos).filter(video => video.genre.includes("Science")),
        Thriller: Object.values(state.entities.videos).filter(video => video.genre.includes("Thriller")),
        Family: Object.values(state.entities.videos).filter(video => video.genre.includes("Family"))
    }
};

const mapDispatchToProps = dispatch => {
    return {
        allVideos: () => dispatch(allVideos())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VideosIndex);