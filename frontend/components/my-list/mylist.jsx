import React from "react";
import VideosItem from "../videos/videos_item";

class MyList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    return (
      <div className="video-container">
        <section className="genre-section">
          <div className="video-item-flex">
            {this.props.search.map((video) => {
              return (
                <VideosItem
                  video={video}
                  key={video.id}
                  history={this.props.history}
                />
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default MyList;
