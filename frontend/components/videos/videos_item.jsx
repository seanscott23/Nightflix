import React from 'react';


class VideosItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){

    }

    handleMouseEnter(e){
        e.currentTarget.play()
    }

    handleMouseLeave(e){
        e.currentTarget.pause()
    }

    render() {
     
       if(!this.props.video){
            return null
       }

        return (
            <div className="video-show">
                <h1 className="video-title">{this.props.video.title}</h1>
                <div className="video-full">
                    <video id="video-test" className="video-trailer" 
                    onMouseEnter={this.handleMouseEnter.bind(this)}
                    onMouseLeave={this.handleMouseLeave.bind(this)}
                    width="219" 
                    height="123">

                        <source src={`${this.props.video.videoUrl}#t=3`} type="video/mp4" ></source>
                    </video>
                    <div className="video-control-bar">
                        <button className="video-like-button"><i class="fas fa-plus-circle-light"></i></button>
                    </div>
                </div>
            </div>
           
//  const vid = document.getElementById("video_item");

//         function playVid() {
//             vid.play();
//         }

//         function pauseVid() {
//             vid.pause();
//         } 

        )
    }
}

export default VideosItem;


