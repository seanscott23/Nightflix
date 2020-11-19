import React from "react";
import VideosItem from '../videos/videos_item';



class SearchPage extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount(){
  //   this.props.search
  // }


  render() {
    // debugger
    return (
      <div className="video-container">
        <section className="search-section">
          <div className="video-item-flex">
            {this.props.search.map((video) => {
              return (
                <VideosItem
                  currentUser={this.props.currentUser}
                  video={video}
                  key={video.id}
                  className="search-video-item"
                  history={this.props.history}
                  requestUserList={this.props.requestUserList}
                  addToMyList={this.props.addToMyList}
                  removeFromMyList={this.props.removeFromMyList}
                  listItems={this.props.listItems}
                  mylist ={true}
                />
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default SearchPage;
