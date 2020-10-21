import React from "react";


class VideosItem extends React.Component {
  constructor(props) {
    super(props);
    this.addToList = this.addToList.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  
  handleMouseEnter(e) {
    e.currentTarget.play();
  }

  handleMouseLeave(e) {
    e.currentTarget.pause();
  }

  addToList(videoId){
      debugger
      this.addToMyList(this.props.video.id);
  };

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
            onMouseEnter={(e) => this.handleMouseEnter(e)}
            onMouseLeave={(e) => this.handleMouseLeave(e)}
            width="219"
            height="123"
          >
            <source
              src={`${this.props.video.videoUrl}#t=3`}
              type="video/mp4"
            ></source>
          </video>
          <div className="video-control-bar">
            <button className="video-like-button" onClick={() => this.addToList(this.props.video.id)}>
              <i className="fas fa-plus-circle"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default VideosItem;
