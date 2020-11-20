import React from 'react';

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
      this.addToList = this.addToList.bind(this);
      this.removeFromList = this.removeFromList.bind(this);
  }

  componentDidMount() {
    this.props.showVideo(this.props.match.params.videoId);
  }

  playVideo(e) {
    if (e.currentTarget.paused) {
      e.currentTarget.play();
    } else {
      e.currentTarget.pause();
      e.currentTarget.load();
    }
  }

  toggleFullscreen() {
    let elem = document.querySelector("video");
    elem.requestFullscreen();
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  }
  showTitle(e) {
    e.currentTarget.classList.toggle("active");
  }

  addToList() {
    // debugger
    this.props
      .addToMyList(this.props.video.id, this.props.currentUser.id)
      .then(() => {
        this.setState({
          checked: true,
        });
      });
  }

  removeFromList() {
    this.props
      .removeFromMyList(this.props.video.id, this.props.currentUser.id)
      .then(() => {
        this.setState({
          checked: false,
        });
      });
    this.props.requestUserList(this.props.currentUser.id);
  }

  render() {
    // debugger

    if (!this.props.video) {
      return null;
    }

    let itemIds = this.props.listItems.map((video) => {
      return video.id;
    });

    let toggleLike = itemIds.includes(this.props.video.id)
      ? "far fa-check-circle show"
      : "fas fa-plus-circle show";

    let toggleList = itemIds.includes(this.props.video.id)
      ? this.removeFromList
      : this.addToList;

    return (
      <div className="main-video-container">
        <div className="video-solo">
          <div className="video-main" onClick={this.showTitle.bind(this)}>
            <video
              onClick={this.playVideo.bind(this)}
              onDoubleClick={this.toggleFullscreen.bind(this)}
              width="600"
              height="400"
              poster={this.props.video.photoUrl}
              type="photo/jpg"
            >
              <source src={this.props.video.videoUrl} type="video/mp4"></source>
            </video>
            <h1 className="main-title active">{this.props.video.title}</h1>
          </div>
          <div className="main-video-control-bar">
            <button className="main-video-like-button" onClick={toggleList}>
              <i class={toggleLike}></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoShow;


