import React from "react";


class VideosItem extends React.Component {
  constructor(props) {
    super(props);
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
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
  }

  addToList() {
    this.props.addToMyList(this.props.video.id, this.props.currentUser.id);
    this.props.containedWithinListIds === true;
    this.setState({
      checked: true,
    });
  }

  removeFromList() {
    this.props.removeFromMyList(
      this.props.video.id,
      this.props.currentUser.id
    );
    this.props.containedWithinListIds === false;
    this.setState({
      checked: false,
    });
    this.props.requestUserList(this.props.currentUser.id);
  }

  componentDidMount() {

    this.props.requestUserList(this.props.currentUser.id).then((data) => {
       
      data = Object.values(data.videos);
    
      for (let index = 0; index < data.length; index++) {
        const video = data[index];
        if (video.id === this.props.video.id) {
          this.setState({
            checked: true,
          });
        }
      }
    });
  }

  render() {

    let mylistClass = this.props.mylist ? "video-show-list" : "video-show";

    let toggleLike = this.state.checked
      ? "far fa-check-circle"
      : "fas fa-plus-circle";

    let toggleList = this.props.containedWithinListIds
      ? this.removeFromList
      : this.addToList;

    return (
      <div className={mylistClass}>
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
        </div>
        <div className="video-control-bar">
          <button className="index-like-button" onClick={toggleList}>
            <i className={toggleLike}></i>
          </button>
        </div>
      </div>
    );
  }
}

export default VideosItem;
