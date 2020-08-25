import { connect } from 'react-redux';
import MainSplash from './main_splash';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    }
};


export default withRouter(connect(
    mapStateToProps,
    null
)(MainSplash));