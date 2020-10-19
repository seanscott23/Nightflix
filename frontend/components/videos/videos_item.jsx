import React from "react";

class VideosItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleMouseEnter(e) {
    e.currentTarget.play();
  }

  handleMouseLeave(e) {
    e.currentTarget.pause();
  }

  render() {
    return (
      <div className="video-show">
        <h1 className="video-title">{this.props.video.title}</h1>

        <div
          className="video-full"
          onClick={() =>
            this.props.history.push(`/videos/${this.props.video.id}`)
          }
        >
          <video
            id="video-test"
            className="video-trailer"
            onMouseEnter={this.handleMouseEnter.bind(this)}
            onMouseLeave={this.handleMouseLeave.bind(this)}
            width="219"
            height="123"
          >
            <source
              src={`${this.props.video.videoUrl}#t=3`}
              type="video/mp4"
            ></source>
          </video>
          <div className="video-control-bar">
            <button className="video-like-button">
              <i className="fas fa-plus-circle"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default VideosItem;
