import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import { requestList, addToMyList } from "../../actions/mylist_actions";
import MyList from './mylist';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestList: (videos) => dispatch(requestList(videos)),
  addToMyList: (videoId) => dispatch(addToMyList(videoId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MyList)
);
