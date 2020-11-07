import React from 'react';
import VideosItem from './videos_item';


class VideosIndex extends React.Component {
    constructor(props) {
        super(props)
        this.changeCarouselIndex = this.changeCarouselIndex.bind(this);
        this.state = {
          action: 0,
          comedy: 0,
          family: 0,
          fantasy: 0,
          crime: 0,
          romance: 0,
          thriller: 0,
          science: 0,
          drama: 0,
          adventure: 0
        }
    }

    componentDidMount(){
        this.props.allVideos()
    }

    changeCarouselIndex(category, number){
      const tempState = {}
      
      if (number === 1){
        if(this.state[category] === 0){
          tempState[category] = (this.state[category] + 5);
        }else{
          tempState[category] =
            (this.state[category] + 5) % this.state[category];
        }
        
       debugger
        this.setState(tempState);
      }else {
        if(this.state[category] === 0){
            tempState[category] = (this.state[category] + 5) ;
        }else{
       tempState[category] = (this.state[category] - 5) % this.state[category] ;
        }
     debugger
          this.setState(tempState);
      }
    
     
    }

    render() {
      
        return (
          <div className="video-container">
            <div className="genre-section">
              <h1 className="genre-title">Action</h1>
              <section className="carouselRow">
                <div
                  className="arrowButton"
                  onClick={() => this.changeCarouselIndex("action", -1)}
                >
                  {" "}
                  <i class="fas fa-chevron-left"></i>
                </div>
                {this.props.Action.slice(this.state.action, this.state.action + 5).map((video) => (
                  <div className="video-item">
                    <VideosItem
                      key={"action" + parseInt(video.id)}
                      video={video}
                      history={this.props.history}
                      addToMyList={this.props.addToMyList}
                      currentUser={this.props.currentUser}
                      removeFromMyList={this.props.removeFromMyList}
                      requestUserList={this.props.requestUserList}
                    />
                  </div>
                ))}
                <div
                  className="arrowButton"
                  onClick={() => this.changeCarouselIndex("action", 1)}
                >
                  {" "}
                  <i class="fas fa-chevron-right"></i>
                </div>
              </section>
            </div>
            <div className="genre-section">
              <h1 className="genre-title">Comedies</h1>
              <div className="carouselRow">
                {this.props.Comedy.map((video) => (
                  <div className="video-item">
                    <VideosItem
                      key={"comedy" + parseInt(video.id)}
                      video={video}
                      addToMyList={this.props.addToMyList}
                      currentUser={this.props.currentUser}
                      removeFromMyList={this.props.removeFromMyList}
                      requestUserList={this.props.requestUserList}
                    />
                  </div>
                ))}
              </div>
              <div className="carouselRow">
                {this.props.Comedy.map((video) => (
                  <div className="video-item">
                    <VideosItem
                      key={"comedy" + parseInt(video.id)}
                      video={video}
                      addToMyList={this.props.addToMyList}
                      currentUser={this.props.currentUser}
                      removeFromMyList={this.props.removeFromMyList}
                      requestUserList={this.props.requestUserList}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="genre-section">
              <h1 className="genre-title">Fantasy</h1>
              {this.props.Fantasy.map((video) => (
                <div className="video-item">
                  <VideosItem
                    key={"fantasy" + parseInt(video.id)}
                    video={video}
                    addToMyList={this.props.addToMyList}
                    currentUser={this.props.currentUser}
                    removeFromMyList={this.props.removeFromMyList}
                    requestUserList={this.props.requestUserList}
                  />
                </div>
              ))}
            </div>
            <div className="genre-section">
              <h1 className="genre-title">Drama</h1>
              {this.props.Drama.map((video) => (
                <div className="video-item">
                  <VideosItem
                    key={"drama" + parseInt(video.id)}
                    video={video}
                    addToMyList={this.props.addToMyList}
                    currentUser={this.props.currentUser}
                    removeFromMyList={this.props.removeFromMyList}
                    requestUserList={this.props.requestUserList}
                  />
                </div>
              ))}
            </div>
            <div className="genre-section">
              <h1 className="genre-title">Crime</h1>
              {this.props.Crime.map((video) => (
                <div className="video-item">
                  <VideosItem
                    key={"crime" + parseInt(video.id)}
                    video={video}
                    addToMyList={this.props.addToMyList}
                    currentUser={this.props.currentUser}
                    removeFromMyList={this.props.removeFromMyList}
                    requestUserList={this.props.requestUserList}
                  />
                </div>
              ))}
            </div>
            <div className="genre-section">
              <h1 className="genre-title">Science Fiction</h1>
              {this.props.Science.map((video) => (
                <div className="video-item">
                  <VideosItem
                    key={"science-fiction" + parseInt(video.id)}
                    video={video}
                    addToMyList={this.props.addToMyList}
                    currentUser={this.props.currentUser}
                    removeFromMyList={this.props.removeFromMyList}
                    requestUserList={this.props.requestUserList}
                  />
                </div>
              ))}
            </div>
            <div className="genre-section">
              <h1 className="genre-title">Thriller</h1>
              {this.props.Thriller.map((video) => (
                <div className="video-item">
                  <VideosItem
                    key={"thriller" + parseInt(video.id)}
                    video={video}
                    addToMyList={this.props.addToMyList}
                    currentUser={this.props.currentUser}
                    removeFromMyList={this.props.removeFromMyList}
                    requestUserList={this.props.requestUserList}
                  />
                </div>
              ))}
            </div>
            <div className="genre-section">
              <h1 className="genre-title">Family</h1>
              {this.props.Family.map((video) => (
                <div className="video-item">
                  <VideosItem
                    key={"family" + parseInt(video.id)}
                    video={video}
                    addToMyList={this.props.addToMyList}
                    currentUser={this.props.currentUser}
                    removeFromMyList={this.props.removeFromMyList}
                    requestUserList={this.props.requestUserList}
                  />
                </div>
              ))}
            </div>
            <div className="genre-section">
              <h1 className="genre-title">Romance</h1>
              {this.props.Romance.map((video) => (
                <div className="video-item">
                  <VideosItem
                    key={"romance" + parseInt(video.id)}
                    video={video}
                    addToMyList={this.props.addToMyList}
                    currentUser={this.props.currentUser}
                    removeFromMyList={this.props.removeFromMyList}
                    requestUserList={this.props.requestUserList}
                  />
                </div>
              ))}
            </div>
          </div>
        );
    }
}

export default VideosIndex;
