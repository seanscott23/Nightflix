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
                <video id="video-test" className="video-trailer" 
                onMouseEnter={this.handleMouseEnter.bind(this)}
                onMouseLeave={this.handleMouseLeave.bind(this)}
                width="219" 
                height="123">
                    <source src={`${this.props.video.videoUrl}#t=3`} type="video/mp4" ></source>
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


