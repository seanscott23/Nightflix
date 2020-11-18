import React from "react";
import VideosItem from '../videos/videos_item';



class SearchPage extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      
      <div className="video-container">
        <section className="genre-section">
          <div className="video-item-flex">
            {this.props.search.map((video) => {
              return (
                <VideosItem
                  currentUser={this.props.currentUser}
                  video={video}
                  key={video.id}
                  history={this.props.history}
                  requestUserList={this.props.requestUserList}
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
