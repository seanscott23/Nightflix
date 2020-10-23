import React from "react";


class VideosItem extends React.Component {
  constructor(props) {
    super(props);
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.state = {
        checked: false
    }
  }
  
  handleMouseEnter(e) {
    e.currentTarget.play();
  }

  handleMouseLeave(e) {
    e.currentTarget.pause();
  }

  addToList(){
      this.props.addToMyList(this.props.video.id, this.props.currentUser.id);
     this.setState({
         checked: true
     })
  };

  removeFromList(){
      this.props.removeFromMyList(this.props.video.id, this.props,currentUser.id);
      this.setState({
          checked: false
      })
  }

  toggleLike(e){
      if (this.state.checked === true){
        e.currentTarget.classList.remove("fas fa-plus-circle");
        e.currentTarget.classList.add("far fa-check-circle");
      } else {
           e.currentTarget.classList.remove("far fa-check-circle");
           e.currentTarget.classList.add("fas fa-plus-circle");
      }   
  }


  render() {

    let mylistClass = this.props.mylist ? "video-show-list" : "video-show";
    let toggleList = this.props.mylist ? this.addToList : this.removeFromList;

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
          <div className="video-control-bar">
            <button className="index-like-button" onClick={toggleList}>
              <i className={this.toggleLike}></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default VideosItem;
