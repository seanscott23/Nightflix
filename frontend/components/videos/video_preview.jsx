import React from "react";

class VideoPreview extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.state = {
      checked: false,
    };
  }

  handleMouseEnter(e) {
    e.currentTarget.play();
  }

  handleMouseLeave(e) {
    e.currentTarget.pause();
    e.currentTarget.load();
  }

 

  render() {

    return (
      <div className="VideoPreview">
        <h1 className="PreviewTitle">{this.props.video.title}</h1>
        <span className="videoDescription">
          Will Hunting, a janitor at M.I.T., has a gift for mathematics, but
          needs help from a psychologist to find direction in his life.
        </span>
        <div
          onClick={() =>
            this.props.history.push(`/videos/${this.props.video.id}`)
          }
        >
          <video
            className="videoPreview"
            onMouseEnter={(e) => this.handleMouseEnter(e)}
            onMouseLeave={(e) => this.handleMouseLeave(e)}
            width="1434"
            height="600"
            poster={this.props.video.photoUrl}
            type="photo/jpg"
          >
            <source
              src={this.props.video.videoUrl}
              type="video/mp4"
            ></source>
          </video>
        </div>
      </div>
    );
  }
}

export default VideoPreview;
