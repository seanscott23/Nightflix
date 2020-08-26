import React from 'react';


class VideosItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){

    }

    render() {
     
       if(!this.props.video){
            return null
       }

        return (
            <div className="video-show">
                <h1 className="video-title">{this.props.video.title}</h1>
                <video className="video-trailer" 
                onMouseEnter={this.props.video.playVid = (video) => (video.play())}
                onMouseLeave={this.props.video.pauseVid = (video) => (video.pause())}
                width="219" 
                height="123">
                    <source src={`${this.props.video.videoUrl}#t=4`} type="video/mp4" ></source>
                </video>
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


