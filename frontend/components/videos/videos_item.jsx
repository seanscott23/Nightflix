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
       debugger
        return (
            <div>
                <h1 className="video-title">{this.props.video.title}</h1>
                <video width="320" height="240" controls>
                    <source src={this.props.video.videoUrl} type="video/mp4" ></source>
                </video>
            </div>
        )
    }
}

export default VideosItem;


