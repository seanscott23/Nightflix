import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import HomeNav from './home_nav';
import {withRouter} from 'react-router-dom';
import { fetchSearchResults } from '../../actions/search_actions';



const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    }
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchSearchResults: (query) => dispatch(fetchSearchResults(query))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeNav));