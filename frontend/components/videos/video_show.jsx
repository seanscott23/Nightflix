import React from 'react';

class VideoShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.showVideo(this.props.match.params.videoId)
    }

    playVideo(e){
        if (e.currentTarget.paused){
            e.currentTarget.play()
        }else{
            e.currentTarget.pause()
        }
    }

    toggleFullscreen() {
    let elem = document.querySelector("video");
        elem.requestFullscreen();
        if (document.fullscreenElement){
            document.exitFullscreen();
        }
}
    showTitle(e){
        e.currentTarget.classList.toggle('active');
    }

    


    render() {

        if (!this.props.video) {
            return null
        }

        return (
           <div className="main-video-container">
               <div className="video-solo">
                    <div className="video-main" onClick={this.showTitle.bind(this)}>
                            <video
                            onClick={this.playVideo.bind(this)}
                            onDoubleClick={this.toggleFullscreen.bind(this)}
                                width="600"
                                height="400">
                                <source src={`${this.props.video.videoUrl}#t=3`} type="video/mp4" ></source>
                            </video>
                        <h1 className="main-title active" >{this.props.video.title}</h1>
                    </div>
                    <div className="main-video-control-bar">
                        <button className="main-video-like-button"><i class="fas fa-plus-circle"></i></button>
                    </div>
                </div>
           </div>
        )
    }
}

export default VideoShow;


