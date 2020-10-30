import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import { requestUserList, addToMyList, clearList, removeFromMyList} from "../../actions/mylist_actions";
import MyList from './mylist';

const mapStateToProps = (state) => {

  return {
    currentUser: state.entities.users[state.session.id],
    mylist: Object.values(state.entities.list)
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestUserList: (userId) => dispatch(requestUserList(userId)),
  addToMyList: (videoId, userId) => dispatch(addToMyList(videoId, userId)),
  removeFromMyList: (videoId, userId) =>
    dispatch(removeFromMyList(videoId, userId)),
  clearList: () => dispatch(clearList()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MyList)
);
