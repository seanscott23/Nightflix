import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Greeting from './greeting';


const mapStateToProps = ({ session, entities: { users }}, ownProps) => {
   return {
    currentUser: users[session.id],
    formType: ownProps.formType
}};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);
