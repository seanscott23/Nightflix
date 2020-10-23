import React from "react";
import VideosItem from "../videos/videos_item";

class MyList extends React.Component {
  constructor(props) {
    super(props);
  }

componentDidMount(){
  this.props.requestUserList(this.props.currentUser.id)
}

componentWillUnmount(){
  this.props.clearList()
}


  render() {

    return (
      <div className="video-container">
      
          <div className="list-video-item-flex">
            {this.props.mylist.map((video) => {
              return (
                <VideosItem
                  video={video}
                  key={video.id}
                  history={this.props.history}
                  className="video-show-list"
                  mylist = {true}
                />
              );
            })}
          </div>

      </div>
    );
  }
}

export default MyList;
