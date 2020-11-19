import React from "react";
import VideosItem from "../videos/videos_item";

class MyList extends React.Component {
  constructor(props) {
    super(props);
  }

componentDidMount(){
  this.props.requestUserList(this.props.currentUser.id)
}

// componentWillReceiveProps(){

// }

// shouldComponentUpdate(){

// }

// componentDidUpdate(prevProps){

//   // if (prevProps.mylist.length !== this.props.mylist.length) 
//   // {
//   //   this.props.requestUserList(this.props.currentUser.id);
//   // }
 
// }

componentWillUnmount(){
  this.props.clearList()
}


  render() {


    let listIds = this.props.listItems.map((video) => {return video.id})

    return (
      <div className="video-container">
      
          <div className="list-video-item-flex">
            {this.props.listItems.map((video) => {
              return (
                <VideosItem
                  containedWithinListIds = {listIds.includes(video.id)}
                  video={video}
                  key={video.id}
                  history={this.props.history}
                  currentUser={this.props.currentUser}
                  listItems ={this.props.listItems}
                  className="video-show-list"
                  removeFromMyList={this.props.removeFromMyList}
                  requestUserList={this.props.requestUserList}
                  mylist={true}
                />
              );
            })}
          </div>

      </div>
    );
  }
}

export default MyList;
