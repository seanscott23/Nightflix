import React from 'react';


class VideosItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.showVideo(this.props.match.params.videoId)
    }

    render() {
       if(!this.props.video){
            return null
       }

        return (
            <div className="video-show">
                <h1 className="video-title">{this.props.video.title}</h1>
                <video className="video-trailer" 
                width="219" 
                height="123" controls>
                    <source src={this.props.video.videoUrl} type="video/mp4" ></source>
                </video>
            </div>
        )
    }
}

export default VideosItem;


